"use client";

import Link from "next/link";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp } from "./fade-up";

interface LimitExceededModalProps {
  onClose: () => void;
}

export function LimitExceededModal({ onClose }: LimitExceededModalProps) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-s0/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl my-auto">
        <FadeUp>
          <div className="bg-card border border-[var(--border)] rounded-[24px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-3 hover:text-1 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">Limit Reached</span>
              <h2 className="font-display font-extrabold text-[32px] sm:text-[40px] text-1 leading-tight mb-4">
                You&apos;ve used your free scan for this month.
              </h2>
              <p className="font-body font-light text-[17px] text-2 max-w-lg mx-auto leading-relaxed">
                Upgrade to Starter for pay-per-use PDF support, or go Pro for unlimited scans and history.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {/* Starter */}
              <div className="p-6 bg-s1 border border-[var(--border)] rounded-[16px] flex flex-col h-full">
                <h3 className="font-display font-bold text-[20px] text-1 mb-2">Starter</h3>
                <div className="font-display font-bold text-[28px] text-1 mb-1">$2.99<span className="text-[14px] text-3 font-light">/scan</span></div>
                <ul className="space-y-3 mt-6 mb-8 flex-1">
                  <li className="flex items-center gap-2 text-[14px] text-2">
                    <CheckCircle2 size={16} className="text-violet shrink-0" /> PDF upload & report
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-2">
                    <CheckCircle2 size={16} className="text-violet shrink-0" /> Pay-per-use
                  </li>
                </ul>
                <Link href="/pricing" className="btn-primary w-full justify-center py-3">Upgrade</Link>
              </div>

              {/* Pro */}
              <div className="p-6 bg-s1 border border-violet/30 rounded-[16px] flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-violet text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-[12px]">Best Value</div>
                <h3 className="font-display font-bold text-[20px] text-1 mb-2">Pro</h3>
                <div className="font-display font-bold text-[28px] text-1 mb-1">$15.99<span className="text-[14px] text-3 font-light">/month</span></div>
                <ul className="space-y-3 mt-6 mb-8 flex-1">
                  <li className="flex items-center gap-2 text-[14px] text-2">
                    <CheckCircle2 size={16} className="text-violet shrink-0" /> Unlimited scans
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-2">
                    <CheckCircle2 size={16} className="text-violet shrink-0" /> Scan history
                  </li>
                </ul>
                <Link href="/pricing" className="btn-secondary w-full justify-center py-3">Go Pro</Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/pricing" className="font-body text-[14px] text-violet hover:underline inline-flex items-center gap-2">
                View all plans and features <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
