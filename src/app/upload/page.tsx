"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { Upload as UploadIcon, FileSearch, Loader2, Info, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { extractTextFromPdf } from "@/lib/pdf-utils";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { GatedSignup } from "@/components/gated-signup";
import { LimitExceededModal } from "@/components/limit-exceeded-modal";
import { ContractQA } from "@/components/contract-qa";
import { CopyButton } from "@/components/copy-button";
import type { User } from "@supabase/supabase-js";

type RiskLevel = "critical" | "high" | "medium" | "low";

interface Finding {
  risk: RiskLevel;
  category: string;
  name: string;
  whatItSays: string;
  evidence: string;
  whyItMatters: string;
  recommendation: string;
  suggestedWording?: string;
}

interface AnalysisResult {
  overview: {
    type: string;
    parties: string;
    userRole: string;
    startDate: string;
    endDate: string;
    renewal: string;
    payment: string;
    termination: string;
    governingLaw: string;
  };
  score: number;
  summary: string;
  findings: Finding[];
  counts: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
}

const CONTRACT_TYPES = ["NDA", "Freelance", "Employment", "SaaS Terms", "Partnership", "Service Agreement", "Other"];

const LOADING_STEPS = [
  "Uploading your contract...",
  "Reading your contract...",
  "Reviewing important clauses...",
  "Your contract review is ready."
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
  const [manualUser, setManualUser] = useState<User | null>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [usage, setUsage] = useState<{ plan: string; count: number; limit: number } | null>(null);

  // Persistence logic for anonymous scans
  useEffect(() => {
    const savedText = sessionStorage.getItem("clauze_scan_text");
    const savedType = sessionStorage.getItem("clauze_scan_type");
    const savedResult = sessionStorage.getItem("clauze_scan_result");

    if (savedText) setText(savedText);
    if (savedType) setContractType(savedType);
    if (savedResult) {
      try {
        setResult(JSON.parse(savedResult));
      } catch (e) {
        console.error("Error parsing saved scan result", e);
      }
    }
  }, []);

  useEffect(() => {
    if (text) sessionStorage.setItem("clauze_scan_text", text);
    else sessionStorage.removeItem("clauze_scan_text");
  }, [text]);

  useEffect(() => {
    sessionStorage.setItem("clauze_scan_type", contractType);
  }, [contractType]);

  useEffect(() => {
    if (result) sessionStorage.setItem("clauze_scan_result", JSON.stringify(result));
    else sessionStorage.removeItem("clauze_scan_result");
  }, [result]);

  const activeUser = user || manualUser;

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

  // Fetch usage when user changes
  useEffect(() => {
    if (activeUser) {
      fetch("/api/usage")
        .then((res) => res.json())
        .then((data) => setUsage(data))
        .catch((err) => console.error("Error fetching usage:", err));
    } else {
      setUsage(null);
    }
  }, [activeUser]);

  // Handle body scroll lock when gated modal is visible
  useEffect(() => {
    if (result && !activeUser) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [result, activeUser]);

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

    // Check usage limits for logged in users
    if (activeUser && usage && usage.plan === "Free" && usage.count >= usage.limit) {
      setShowLimitModal(true);
      return;
    }

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

      // Save to Supabase and increment usage
      if (activeUser && supabase) {
        // Save contract
        const { error: dbError } = await supabase.from("contracts").insert({
          user_id: activeUser.id,
          contract_text: text,
          analysis: data,
          contract_type: contractType,
        });

        if (dbError) console.error("Error saving contract:", dbError);

        // Increment usage
        fetch("/api/usage", { method: "POST" })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setUsage(prev => prev ? { ...prev, count: prev.count + 1 } : null);
            }
          })
          .catch((err) => console.error("Error incrementing usage:", err));
      }
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
        <div className="w-full md:w-[44%] bg-s1 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--border)]">
          <div className="max-w-xl md:ml-auto">
            <span className="font-body font-medium text-[12px] uppercase tracking-widest text-violet mb-6 block">
              Upload Your Contract
            </span>

            <div className="space-y-6">
              {/* Drag and Drop */}
              <label className="block border-2 border-dashed border-[var(--border)] rounded-[16px] p-6 sm:p-10 text-center cursor-pointer hover:border-violet hover:bg-violet-dim transition-all">
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
                <p className="font-body font-medium text-[15px] sm:text-[16px] text-2 mb-1 leading-snug">
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
                className="w-full h-[180px] sm:h-[220px] bg-[var(--s0)] border border-[var(--border)] rounded-[10px] p-5 sm:p-6 font-mono text-[14px] text-2 focus:outline-none focus:border-violet transition-all resize-y"
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
        <div className="w-full md:w-[56%] bg-s2 p-6 sm:p-8 md:p-12">
          {!isAnalyzing && !result && (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
              <FileSearch size={56} className="text-4 mb-4 opacity-50" />
              <p className="font-body text-[16px] text-3">Your analysis will appear here</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="h-full space-y-6">
              <div className="pt-12 md:pt-20 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-violet/20 border-t-violet rounded-full animate-spin mx-auto mb-6" />
                <p className="font-display font-bold text-[18px] md:text-[20px] text-1 animate-pulse px-4">
                  {LOADING_STEPS[loadingStep]}
                </p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-28 md:h-32 bg-card rounded-[12px] overflow-hidden relative">
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
                "space-y-8 max-w-2xl transition-all duration-500",
                !activeUser && "blur-[12px] opacity-40 pointer-events-none select-none"
              )}>
                {/* 1. Contract Overview */}
                <FadeUp>
                  <div className="p-6 sm:p-8 bg-card border border-[var(--border)] rounded-[20px]">
                    <h3 className="font-display font-bold text-[20px] text-1 mb-6 flex items-center gap-2">
                      <Info size={20} className="text-violet" />
                      Contract Overview
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {[
                        { label: "Contract Type", value: result.overview.type },
                        { label: "Parties", value: result.overview.parties },
                        { label: "Your Role", value: result.overview.userRole },
                        { label: "Start Date", value: result.overview.startDate },
                        { label: "End Date", value: result.overview.endDate },
                        { label: "Renewal", value: result.overview.renewal },
                        { label: "Payment Terms", value: result.overview.payment },
                        { label: "Termination", value: result.overview.termination },
                        { label: "Governing Law", value: result.overview.governingLaw },
                      ].map((item) => (
                        <div key={item.label} className="space-y-1">
                          <p className="font-body text-[11px] uppercase tracking-wider text-3">{item.label}</p>
                          <p className="font-body font-medium text-[14px] text-1">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* 2. Overall Risk Score */}
                <FadeUp delay={0.1}>
                  <div className="p-6 sm:p-8 bg-card border border-[var(--border)] rounded-[20px]">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                      <div className="relative w-32 h-32 shrink-0">
                        <svg className="w-full h-full -rotate-90">
                          <circle cx="64" cy="64" r="56" className="fill-none stroke-[var(--border)]" strokeWidth="12" />
                          <circle
                            cx="64" cy="64" r="56"
                            className={cn(
                              "fill-none transition-all duration-1000",
                              result.score > 74 ? "stroke-risk-green" : result.score > 39 ? "stroke-risk-amber" : "stroke-risk-red"
                            )}
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray="351.8"
                            strokeDashoffset={351.8 - (351.8 * result.score) / 100}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display font-extrabold text-[36px] text-1">{result.score}</span>
                        </div>
                      </div>
                      <div className="text-center sm:text-left flex-1">
                        <p className="font-medium text-[12px] uppercase tracking-widest text-violet mb-2">Overall Clauze Score</p>
                        <h2 className="font-display font-bold text-[32px] md:text-[36px] text-1 mb-3">
                          {result.score > 74 ? "Low Complexity" : result.score > 39 ? "Review Recommended" : "Significant Review Needed"}
                        </h2>
                        <p className="font-body text-[16px] text-2 leading-relaxed italic">
                          Clauze identified several areas that may deserve review.
                        </p>
                        <p className="font-body text-[15px] text-3 leading-relaxed mt-2">
                          &quot;{result.summary}&quot;
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border)]">
                      {[
                        { label: "Critical", count: result.counts.critical, color: "bg-risk-red" },
                        { label: "High", count: result.counts.high, color: "bg-risk-red" },
                        { label: "Review", count: result.counts.medium, color: "bg-risk-amber" },
                        { label: "Safe", count: result.counts.low, color: "bg-risk-green" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center sm:text-left">
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                            <div className={cn("w-2 h-2 rounded-full", stat.color)} />
                            <span className="font-body text-[12px] text-3 uppercase tracking-wider">{stat.label}</span>
                          </div>
                          <p className="font-display font-bold text-[20px] text-1">{stat.count}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* 3. Detailed Findings */}
                <div className="space-y-6">
                  <FadeUp delay={0.2}>
                    <h3 className="font-display font-bold text-[22px] text-1 px-1">Detailed Findings</h3>
                  </FadeUp>
                  
                  {result.findings.map((finding, idx) => (
                    <FadeUp key={idx} delay={0.2 + idx * 0.1}>
                      <div
                        className="p-6 sm:p-8 bg-card-inner border rounded-[20px] relative overflow-hidden group"
                        style={{ borderLeftWidth: 4, borderLeftColor: finding.risk === "critical" || finding.risk === "high" ? "var(--risk-red)" : finding.risk === "medium" ? "var(--risk-amber)" : "var(--risk-green)" }}
                      >
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                          <div className="space-y-1">
                            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-violet block">{finding.category}</span>
                            <h4 className="font-display font-bold text-[20px] text-1">{finding.name}</h4>
                          </div>
                          <span className={cn(
                            "px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider",
                            (finding.risk === "critical" || finding.risk === "high") ? "bg-risk-red/10 text-risk-red" : finding.risk === "medium" ? "bg-risk-amber/10 text-risk-amber" : "bg-risk-green/10 text-risk-green"
                          )}>
                            {finding.risk} risk
                          </span>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <p className="font-body font-medium text-[13px] text-2 mb-2">What the contract says</p>
                            <p className="font-body text-[15px] text-2 leading-relaxed">{finding.whatItSays}</p>
                          </div>

                          <div className="bg-s0/50 rounded-[12px] p-5 border border-[var(--border)]">
                            <p className="font-body font-medium text-[12px] uppercase tracking-wider text-violet mb-3">Evidence</p>
                            <p className="font-mono text-[13px] text-3 leading-relaxed italic">&quot;{finding.evidence}&quot;</p>
                          </div>

                          <div>
                            <p className="font-body font-medium text-[13px] text-2 mb-2">Why it matters</p>
                            <p className="font-body text-[15px] text-2 leading-relaxed">{finding.whyItMatters}</p>
                          </div>

                          <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-violet shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <p className="font-body font-medium text-[13px] text-1">What you can consider</p>
                                <p className="font-body text-[14px] text-2">{finding.recommendation}</p>
                              </div>
                            </div>
                            
                            {finding.suggestedWording && (
                              <div className="shrink-0">
                                <CopyButton text={finding.suggestedWording} />
                              </div>
                            )}
                          </div>

                          {finding.suggestedWording && (
                            <div className="mt-4 p-4 bg-violet/5 border border-violet/10 rounded-[12px]">
                              <p className="font-body font-medium text-[12px] uppercase tracking-wider text-violet mb-2">Suggested Wording</p>
                              <p className="font-body text-[14px] text-2 leading-relaxed mb-3 italic">&quot;{finding.suggestedWording}&quot;</p>
                              <p className="font-body text-[11px] text-4">
                                This is suggested wording for discussion and may need professional legal review.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>

                {/* 4. Contract Q&A */}
                <ContractQA contractText={text} />

                {/* Actions */}
                <FadeUp delay={0.6}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <button
                      onClick={() => { setResult(null); setText(""); setManualUser(null); }}
                      className="btn-secondary h-[52px] w-full sm:w-auto px-8"
                    >
                      Analyze Another Contract
                    </button>
                    <button disabled className="btn-secondary h-[52px] w-full sm:w-auto px-8 opacity-50 cursor-not-allowed flex items-center justify-center gap-2">
                      Download PDF Report <span className="text-[11px] bg-violet/10 px-2 py-0.5 rounded text-violet font-bold">PRO</span>
                    </button>
                  </div>
                </FadeUp>
              </div>

              {/* Gated Modal */}
              {!activeUser && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                  <div className="fixed inset-0 bg-s0/60 backdrop-blur-md" />
                  <div className="relative w-full max-w-md my-auto animate-in fade-in zoom-in duration-500">
                    <Suspense fallback={<div className="bg-card border border-[var(--border)] rounded-[24px] p-10 flex items-center justify-center"><div className="w-8 h-8 border-2 border-violet border-t-transparent rounded-full animate-spin" /></div>}>
                      <GatedSignup onAuthSuccess={(u) => setManualUser(u)} />
                    </Suspense>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {showLimitModal && (
        <LimitExceededModal onClose={() => setShowLimitModal(false)} />
      )}

      <Footer />
    </div>
  );
}
