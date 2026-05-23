"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { AuthShell } from "@/components/auth-shell";

export default function ForgotPasswordPage() {
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendResetLink = async () => {
    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const redirectTo = `${window.location.origin}/auth/callback?next=/reset-password`;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    setIsSubmitting(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setSuccess("If an account exists for this email, you will receive a reset link shortly.");
  };

  return (
    <AuthShell
      eyebrow="Account"
      title="Reset your password"
      subtitle="We will email you a link to set a new password."
      footer={
        <div className="flex items-center justify-between gap-4">
          <Link href="/login" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
            Back to sign in
          </Link>
          <Link href="/signup" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
            Create account
          </Link>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3 block mb-2">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            className="w-full h-11 rounded-[10px] bg-[var(--s0)] border border-[var(--border)] px-4 font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-colors"
            placeholder="you@company.com"
          />
        </div>

        {error && (
          <div className="bg-risk-red/10 border border-risk-red/20 rounded-[12px] p-4">
            <p className="font-body text-[14px] text-risk-red leading-[1.6]">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-risk-green/10 border border-risk-green/20 rounded-[12px] p-4">
            <p className="font-body text-[14px] text-risk-green leading-[1.6]">{success}</p>
          </div>
        )}

        <button
          onClick={sendResetLink}
          className="btn-primary w-full"
          disabled={isSubmitting || !email}
        >
          Send reset link
        </button>
      </div>
    </AuthShell>
  );
}
