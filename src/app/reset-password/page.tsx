"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { AuthShell } from "@/components/auth-shell";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setReady(Boolean(data.session)));
  }, [supabase]);

  const updatePassword = async () => {
    setError(null);

    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setIsSubmitting(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    router.push("/upload");
  };

  return (
    <AuthShell
      eyebrow="Account"
      title="Set a new password"
      subtitle="Choose a strong password you will remember."
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
      {!ready ? (
        <div className="bg-violet-dim border border-[var(--border-violet)] rounded-[12px] p-4">
          <p className="font-body text-[14px] text-2 leading-[1.7]">
            Open this page from the password reset email to continue.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3 block mb-2">
              New password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              className="w-full h-11 rounded-[10px] bg-[var(--s0)] border border-[var(--border)] px-4 font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-colors"
              placeholder="At least 8 characters"
            />
          </div>
          <div>
            <label className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3 block mb-2">
              Confirm password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              className="w-full h-11 rounded-[10px] bg-[var(--s0)] border border-[var(--border)] px-4 font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-colors"
              placeholder="Repeat password"
            />
          </div>

          {error && (
            <div className="bg-risk-red/10 border border-risk-red/20 rounded-[12px] p-4">
              <p className="font-body text-[14px] text-risk-red leading-[1.6]">{error}</p>
            </div>
          )}

          <button
            onClick={updatePassword}
            className="btn-primary w-full"
            disabled={isSubmitting || !password || !confirmPassword}
          >
            Update password
          </button>
        </div>
      )}
    </AuthShell>
  );
}
