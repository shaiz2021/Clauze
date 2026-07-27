"use client";

import { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { FadeUp } from "@/components/fade-up";
import { Upload as UploadIcon, FileSearch, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { extractTextFromPdf } from "@/lib/pdf-utils";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { GatedSignup } from "@/components/gated-signup";
import type { User } from "@supabase/supabase-js";

type RiskLevel = "high" | "medium" | "low";

interface Clause {
  risk: RiskLevel;
  name: string;
  excerpt: string;
  explanation: string;
  recommendation: string;
}

interface AnalysisResult {
  score: number;
  summary: string;
  clauses: Clause[];
  counts: {
    high: number;
    medium: number;
    low: number;
  };
}

const CONTRACT_TYPES = ["NDA", "Freelance", "Employment", "SaaS Terms", "Partnership", "Other"];

const LOADING_STEPS = [
  "Reading your contract...",
  "Identifying clause types...",
  "Scoring risk levels...",
  "Preparing your report..."
];

export default function UploadPage() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [contractType, setContractType] = useState("NDA");
  const [isUploading, setIsUploading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [supabase]);

  // Handle body scroll lock when gated modal is visible
  useEffect(() => {
    if (result && !user) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [result, user]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      setError(null);
      setResult(null);

      if (file.size > 10 * 1024 * 1024) {
        throw new Error("File is too large. Please upload a file under 10MB.");
      }

      const name = file.name.toLowerCase();
      const isPdf = file.type === "application/pdf" || name.endsWith(".pdf");
      const isText = file.type === "text/plain" || name.endsWith(".txt");
      const isDocx =
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        name.endsWith(".docx");

      if (isText) {
        const content = await file.text();
        setText(content);
        return;
      }

      if (isDocx) {
        throw new Error("DOCX upload is not supported yet. Please upload a PDF or paste the text.");
      }

      if (!isPdf) {
        throw new Error("Unsupported file type. Please upload a PDF or a plain text file.");
      }

      const extractedText = await extractTextFromPdf(file);
      setText(extractedText);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : typeof error === "string"
            ? error
            : "Unable to extract text from the file.";
      console.error("File upload error:", error);
      setError(message);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleAnalyze = async () => {
    if (!text) return;
    setIsAnalyzing(true);
    setResult(null);
    setError(null);

    let step = 0;
    const stepInterval = setInterval(() => {
      setLoadingStep(step % LOADING_STEPS.length);
      step++;
    }, 2500);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, type: contractType }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        const message =
          (data && typeof data === "object" && "error" in data && typeof (data as any).error === "string"
            ? (data as any).error
            : "Analysis failed. Please try again.");
        throw new Error(message);
      }
      setResult(data);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong during analysis.";
      console.error(error);
      setError(message);
    } finally {
      clearInterval(stepInterval);
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main className="pt-[68px] flex flex-col md:flex-row min-h-[calc(100vh-68px)]">
        {/* LEFT PANEL */}
        <div className="w-full md:w-[44%] bg-s1 p-8 md:p-12 border-r border-[var(--border)]">
          <div className="max-w-xl ml-auto">
            <span className="font-body font-medium text-[12px] uppercase tracking-widest text-violet mb-6 block">
              Upload Your Contract
            </span>

            <div className="space-y-6">
              {/* Drag and Drop */}
              <label className="block border-2 border-dashed border-[var(--border)] rounded-[16px] p-10 text-center cursor-pointer hover:border-violet hover:bg-violet-dim transition-all">
                <input
                  type="file"
                  accept=".pdf,.txt,text/plain"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                <div className="w-12 h-12 rounded-full bg-violet/10 flex items-center justify-center mx-auto mb-4">
                  {isUploading ? (
                    <Loader2 className="animate-spin text-violet" size={24} />
                  ) : (
                    <UploadIcon className="text-violet" size={24} />
                  )}
                </div>
                <p className="font-body font-medium text-[16px] text-2 mb-1">
                  Drag your PDF here or click to browse
                </p>
                <p className="font-body font-light text-[13px] text-3">
                  PDF or plain text · Max 10MB
                </p>
              </label>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="font-body text-[12px] uppercase tracking-widest text-4">OR</span>
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>

              {/* Textarea */}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your contract text here..."
                className="w-full h-[220px] bg-[var(--s0)] border border-[var(--border)] rounded-[10px] p-6 font-mono text-[14px] text-2 focus:outline-none focus:border-violet transition-all resize-y"
              />

              {/* Contract Type */}
              <div>
                <label className="font-body font-medium text-[11px] uppercase tracking-widest text-3 mb-2 block">
                  Contract Type
                </label>
                <select
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                  className="w-full bg-[var(--s0)] border border-[var(--border)] rounded-[10px] h-11 px-4 font-body text-[14px] text-2 focus:outline-none focus:border-violet appearance-none cursor-pointer"
                >
                  {CONTRACT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Analyse Button */}
              <button
                onClick={handleAnalyze}
                disabled={!text || isAnalyzing}
                className="btn-primary w-full"
              >
                {isAnalyzing ? "Analysing..." : "Analyse This Contract"}
              </button>

              {error && (
                <div className="bg-risk-red/10 border border-risk-red/20 rounded-[12px] p-4">
                  <p className="font-body text-[14px] text-risk-red leading-[1.6]">{error}</p>
                </div>
              )}

              <p className="font-body font-light text-[12px] text-3 text-center">
                Paste your text or upload a PDF. 1 scan per month included for Free.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-[56%] bg-s2 p-8 md:p-12">
          {!isAnalyzing && !result && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <FileSearch size={56} className="text-4 mb-4 opacity-50" />
              <p className="font-body text-[16px] text-3">Your analysis will appear here</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="h-full space-y-6">
              <div className="pt-20 text-center">
                <div className="w-16 h-16 border-4 border-violet/20 border-t-violet rounded-full animate-spin mx-auto mb-6" />
                <p className="font-display font-bold text-[20px] text-1 animate-pulse">
                  {LOADING_STEPS[loadingStep]}
                </p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 bg-card rounded-[12px] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div className="relative">
              {/* Blurred Results */}
              <div className={cn(
                "space-y-6 max-w-2xl transition-all duration-500",
                !user && "blur-[8px] opacity-40 pointer-events-none select-none"
              )}>
                {/* Score */}
                <FadeUp>
                  <div className="p-[28px] bg-card border border-[var(--border)] rounded-[16px]">
                    <div className="flex items-center gap-6">
                      <div className="relative w-[100px] h-[100px] shrink-0">
                        <svg className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="42" className="fill-none stroke-[var(--border)]" strokeWidth="8" />
                          <circle
                            cx="50" cy="50" r="42"
                            className={cn(
                              "fill-none",
                              result.score > 74 ? "stroke-risk-green" : result.score > 39 ? "stroke-risk-amber" : "stroke-risk-red"
                            )}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="264"
                            strokeDashoffset={264 - (264 * result.score) / 100}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display font-extrabold text-[28px] text-1">{result.score}</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-[12px] uppercase tracking-widest text-3 mb-1">Clauze Score</p>
                        <p className="font-display font-bold text-[32px] text-1 mb-1">
                          {result.score > 74 ? "Fair" : result.score > 39 ? "Review Needed" : "Seek Advice"}
                        </p>
                        <p className="font-body text-[14px] text-3 italic">
                          &quot;{result.summary}&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-6 pt-6 border-t border-[var(--border)]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-risk-red" />
                        <span className="font-body text-[14px] text-2">{result.counts.high} High</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-risk-amber" />
                        <span className="font-body text-[14px] text-2">{result.counts.medium} Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-risk-green" />
                        <span className="font-body text-[14px] text-2">{result.counts.low} Safe</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* Clauses */}
                {result.clauses.map((clause, idx) => (
                  <FadeUp key={idx} delay={idx * 0.1}>
                    <div
                      className="p-[28px] bg-card-inner border rounded-[16px] relative"
                      style={{ borderLeftWidth: 3, borderLeftColor: clause.risk === "high" ? "var(--risk-red)" : clause.risk === "medium" ? "var(--risk-amber)" : "var(--risk-green)" }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                          clause.risk === "high" ? "bg-risk-red/15 text-risk-red" : clause.risk === "medium" ? "bg-risk-amber/15 text-risk-amber" : "bg-risk-green/15 text-risk-green"
                        )}>
                          {clause.risk} risk
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-[18px] text-1 mb-3">{clause.name}</h3>
                      <p className="font-mono text-[12px] text-3 mb-4 line-clamp-2">&quot;{clause.excerpt}&quot;</p>
                      <p className="font-body font-light text-[15px] text-2 mb-4">{clause.explanation}</p>
                      <div className="flex items-start gap-3 pt-4 border-t border-[var(--border)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 shrink-0" />
                        <p className="font-body font-medium text-[14px] text-1">{clause.recommendation}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}

                {/* Actions */}
                <FadeUp delay={result.clauses.length * 0.1}>
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => { setResult(null); setText(""); }}
                      className="btn-secondary h-[48px]"
                    >
                      New Scan
                    </button>
                    <button disabled className="btn-secondary h-[48px] opacity-50 cursor-not-allowed">
                      Download Report (Coming Soon)
                    </button>
                  </div>
                </FadeUp>
              </div>

              {/* Gated Modal */}
              {!user && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                  {/* Backdrop */}
                  <div className="fixed inset-0 bg-s0/60 backdrop-blur-sm" />
                  
                  {/* Modal Content Container */}
                  <div className="relative w-full max-w-md my-auto animate-in fade-in zoom-in duration-300">
                    <GatedSignup />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
