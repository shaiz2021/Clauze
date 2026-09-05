"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2, Lock, Zap, Infinity } from "lucide-react";

interface BillingData {
  plan: string;
  planInfo: {
    name: string;
    scansPerMonth: number;
    pdfUpload: boolean;
    pdfDownload: boolean;
    scanHistory: boolean;
    hasUnlimitedScans: boolean;
  };
  scanType: string;
  scanLimit: number;
  scansRemaining: number;
  freeUsed: number;
  freeLimit: number;
  paidCredits: number;
  totalPurchases: number;
  month: string;
}

export function BillingStatus() {
  const [data, setData] = useState<BillingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/usage")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching usage:", err);
        setError("Failed to load billing information");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
            <Loader2 size={18} className="text-violet animate-spin" />
          </div>
          <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Your Plan</h2>
        </div>
        <div className="flex items-center justify-center py-8">
          <Loader2 size={24} className="text-violet animate-spin" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
            <Lock size={18} className="text-violet" />
          </div>
          <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Your Plan</h2>
        </div>
        <p className="font-body text-[14px] text-risk-red">{error || "Failed to load billing information"}</p>
      </div>
    );
  }

  const { plan, planInfo, scansRemaining, freeUsed, freeLimit, paidCredits, scanType } = data;

  // Calculate progress for visual display
  const getProgressPercentage = () => {
    if (scanType === "pro") return 100;
    if (scanType === "paid") return paidCredits > 0 ? 100 : 0;
    if (freeLimit > 0) return Math.round(((freeLimit - scansRemaining) / freeLimit) * 100);
    return 0;
  };

  const getPlanColor = () => {
    switch (plan) {
      case "Pro": return "bg-violet";
      case "Starter": return "bg-violet";
      default: return "bg-[var(--border)]";
    }
  };

  const getRemainingText = () => {
    if (scanType === "pro") {
      return (
        <div className="flex items-center gap-2 text-risk-green">
          <Infinity size={20} />
          <span className="font-display font-bold text-[24px] text-risk-green">Unlimited</span>
        </div>
      );
    }
    if (scanType === "paid") {
      if (paidCredits > 0) {
        return (
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-[24px] text-1">{paidCredits}</span>
            <span className="font-body text-[14px] text-3">paid {paidCredits === 1 ? "scan" : "scans"} remaining</span>
          </div>
        );
      }
      return (
        <div className="flex items-center gap-2 text-risk-amber">
          <span className="font-display font-bold text-[24px] text-risk-amber">0</span>
          <span className="font-body text-[14px] text-risk-amber">paid scans remaining</span>
        </div>
      );
    }
    // Free plan
    if (scansRemaining > 0) {
      return (
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-[24px] text-1">{scansRemaining}</span>
          <span className="font-body text-[14px] text-3">of {freeLimit} free scan{freeLimit !== 1 ? "s" : ""} this month</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 text-risk-red">
        <span className="font-display font-bold text-[24px] text-risk-red">0</span>
        <span className="font-body text-[14px] text-risk-red">free scans remaining</span>
      </div>
    );
  };

  const getActionRequired = () => {
    if (scanType === "pro") return null;
    
    if (scanType === "paid" && paidCredits === 0) {
      return (
        <div className="mt-4 p-4 bg-risk-amber/10 border border-risk-amber/30 rounded-[12px]">
          <p className="font-body text-[14px] text-risk-amber mb-3">
            You have no paid scans remaining. Purchase a scan to continue.
          </p>
          <Link href="/pricing" className="btn-primary w-full justify-center text-center">
            Buy a Scan <ArrowRight size={16} />
          </Link>
        </div>
      );
    }
    
    if (scanType === "free" && scansRemaining === 0) {
      return (
        <div className="mt-4 p-4 bg-risk-amber/10 border border-risk-amber/30 rounded-[12px]">
          <p className="font-body text-[14px] text-risk-amber mb-3">
            You have used your free scan for this month. Upgrade to continue scanning.
          </p>
          <Link href="/pricing" className="btn-primary w-full justify-center text-center">
            Upgrade Your Plan <ArrowRight size={16} />
          </Link>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
            <Zap size={18} className="text-violet" />
          </div>
          <div>
            <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Your Plan</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`inline-block w-2 h-2 rounded-full ${getPlanColor()}`} />
              <span className="font-body text-[13px] text-3 uppercase tracking-wider">{plan}</span>
            </div>
          </div>
        </div>
        
        {plan === "Free" && (
          <Link href="/pricing" className="btn-secondary text-[13px] h-9 px-4">
            Upgrade
          </Link>
        )}
      </div>

      {/* Scans Remaining */}
      <div className="mb-6">
        {getRemainingText()}
      </div>

      {/* Progress Bar */}
      {(scanType === "free" || scanType === "paid") && (
        <div className="mb-6">
          <div className="h-2 bg-[var(--s0)] rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${paidCredits > 0 || scansRemaining > 0 ? "bg-violet" : "bg-risk-red"}`}
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          {scanType === "free" && (
            <p className="font-body text-[12px] text-3 mt-2">
              {freeUsed} of {freeLimit} free scan{freeLimit !== 1 ? "s" : ""} used this month
            </p>
          )}
        </div>
      )}

      {/* Features List */}
      <div className="space-y-2 mb-6">
        <h3 className="font-body text-[12px] uppercase tracking-widest text-3 mb-3">Included</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 font-body text-[14px] text-2">
            <Check size={16} className="text-violet shrink-0" />
            PDF upload
          </li>
          <li className="flex items-center gap-2 font-body text-[14px] text-2">
            <Check size={16} className="text-violet shrink-0" />
            PDF report download
          </li>
          {planInfo.scanHistory && (
            <li className="flex items-center gap-2 font-body text-[14px] text-2">
              <Check size={16} className="text-violet shrink-0" />
              Scan history
            </li>
          )}
          {!planInfo.scanHistory && (
            <li className="flex items-center gap-2 font-body text-[14px] text-3">
              <Lock size={16} className="shrink-0" />
              Scan history (Pro)
            </li>
          )}
        </ul>
      </div>

      {/* Action Required */}
      {getActionRequired()}

      {/* Upgrade CTA for Free plan with scans remaining */}
      {scanType === "free" && scansRemaining > 0 && (
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <p className="font-body text-[13px] text-3 mb-3">
            Need more scans? Upgrade to Starter for pay-per-use or Pro for unlimited.
          </p>
          <Link href="/pricing" className="btn-secondary w-full justify-center text-center">
            View All Plans <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
