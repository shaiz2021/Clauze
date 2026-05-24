"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { AuthShell } from "@/components/auth-shell";
import { ArrowRight } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const signUpWithEmail = async () => {
    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    const emailRedirectTo = `${window.location.origin}/auth/callback?next=/dashboard`;
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo },
    });

    setIsSubmitting(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setSuccess("Check your email to verify your account, then you can continue to your first scan.");
  };

  const signUpWithGoogle = async () => {
    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    const redirectTo = `${window.location.origin}/auth/callback?next=/dashboard`;
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
    if (oauthError) {
      setError(oauthError.message);
      setIsSubmitting(false);
    }
  };

  return (
    <AuthShell
      eyebrow="Account"
      title="Create your account"
      subtitle="Start with a free scan. Save your history when you are ready."
      footer={
        <div className="flex items-center justify-between gap-4">
          <Link href="/login" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
            Already have an account?
          </Link>
          <Link href="/upload" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
            Continue without an account
          </Link>
        </div>
      }
    >
      <div className="space-y-4">
        <button onClick={signUpWithGoogle} className="btn-secondary w-full" disabled={isSubmitting}>
          Continue with Google <ArrowRight size={16} />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="font-body text-[12px] uppercase tracking-widest text-4">or</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="space-y-3">
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
          <div>
            <label className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3 block mb-2">
              Password
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
          onClick={signUpWithEmail}
          className="btn-primary w-full"
          disabled={isSubmitting || !email || !password || !confirmPassword}
        >
          Create account
        </button>

        <button
          onClick={() => router.push("/login")}
          className="btn-secondary w-full"
          disabled={isSubmitting}
        >
          Sign in instead
        </button>
      </div>
    </AuthShell>
  );
}
