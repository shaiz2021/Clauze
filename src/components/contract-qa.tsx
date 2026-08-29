"use client";

import { useState } from "react";
import { Send, Loader2, MessageSquare } from "lucide-react";
import { FadeUp } from "./fade-up";

interface ContractQAProps {
  contractText: string;
}

export function ContractQA({ contractText }: ContractQAProps) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<{ q: string; a: string; evidence?: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    const currentQuestion = question;
    setQuestion("");

    try {
      const response = await fetch("/api/qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentQuestion, contractText }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to get answer");

      setAnswers((prev) => [...prev, { q: currentQuestion, a: data.answer, evidence: data.evidence }]);
    } catch (error) {
      console.error("QA error:", error);
      setAnswers((prev) => [...prev, { q: currentQuestion, a: "I could not find a clear answer to this in the contract." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FadeUp delay={0.5}>
      <div className="mt-12 p-6 sm:p-8 bg-card border border-[var(--border)] rounded-[20px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center text-violet">
            <MessageSquare size={20} />
          </div>
          <div>
            <h3 className="font-display font-bold text-[20px] text-1">Contract Q&A</h3>
            <p className="font-body text-[14px] text-3">Ask anything about this contract</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {answers.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-violet text-white px-4 py-2 rounded-[12px] rounded-tr-none max-w-[80%] font-body text-[15px]">
                  {item.q}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-s1 border border-[var(--border)] p-4 rounded-[12px] rounded-tl-none max-w-[90%] space-y-3">
                  <p className="font-body text-[15px] text-2 leading-relaxed">{item.a}</p>
                  {item.evidence && (
                    <div className="pt-3 border-t border-[var(--border)]">
                      <p className="font-body font-medium text-[12px] uppercase tracking-wider text-violet mb-1">Evidence</p>
                      <p className="font-mono text-[12px] text-3 italic">&quot;{item.evidence}&quot;</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. Can they terminate without notice?"
            className="w-full h-12 pl-5 pr-12 bg-s0 border border-[var(--border)] rounded-[12px] font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!question.trim() || isLoading}
            className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center text-violet disabled:text-4 hover:bg-violet/10 rounded-lg transition-all"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </form>
      </div>
    </FadeUp>
  );
}
