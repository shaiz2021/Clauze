"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all",
        copied 
          ? "bg-risk-green/10 text-risk-green border border-risk-green/20" 
          : "bg-s1 border border-[var(--border)] text-2 hover:border-violet hover:text-violet",
        className
      )}
    >
      {copied ? (
        <>
          <Check size={14} />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>Copy wording</span>
        </>
      )}
    </button>
  );
}
