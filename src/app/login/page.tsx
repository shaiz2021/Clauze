"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { siteUrl } from "@/lib/site-url";
import { AuthShell } from "@/components/auth-shell";
import { ArrowRight } from "lucide-react";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const errorParam = searchParams.get("error");
    const errorDesc = searchParams.get("error_description");
    if (errorParam) {
      if (errorDesc?.includes("Email not provided")) {
        setError("LinkedIn did not provide an email address. Please ensure your email is public on LinkedIn or sign up with email.");
      } else {
        setError(errorDesc || "An error occurred during authentication.");
      }
    }
  }, [searchParams]);

  const signInWithEmail = async () => {
    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setIsSubmitting(true);
    setError(null);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsSubmitting(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.push("/dashboard");
  };

  const signInWithGoogle = async () => {
    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setIsSubmitting(true);
    setError(null);
    const redirectTo = `${siteUrl}/auth/callback?next=/dashboard`;
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
    if (oauthError) {
      setError(oauthError.message);
      setIsSubmitting(false);
    }
  };

  const signInWithLinkedIn = async () => {
    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setIsSubmitting(true);
    setError(null);
    const redirectTo = `${siteUrl}/auth/callback?next=/dashboard`;
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc",
      options: { redirectTo },
    });
    if (oauthError) {
      setError(oauthError.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button onClick={signInWithGoogle} className="btn-secondary w-full flex items-center justify-center gap-2 text-[14px]" disabled={isSubmitting}>
          Google <ArrowRight size={14} />
        </button>
        <button onClick={signInWithLinkedIn} className="btn-secondary w-full flex items-center justify-center gap-2 text-[14px]" disabled={isSubmitting}>
          LinkedIn <LinkedInIcon />
        </button>
      </div>

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
            autoComplete="current-password"
            className="w-full h-11 rounded-[10px] bg-[var(--s0)] border border-[var(--border)] px-4 font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-colors"
            placeholder="Your password"
          />
        </div>
      </div>

      {error && (
        <div className="bg-risk-red/10 border border-risk-red/20 rounded-[12px] p-4">
          <p className="font-body text-[14px] text-risk-red leading-[1.6]">{error}</p>
        </div>
      )}

      <button
        onClick={signInWithEmail}
        className="btn-primary w-full"
        disabled={isSubmitting || !email || !password}
      >
        Sign in
      </button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Account"
      title="Sign in"
      subtitle="Access your saved scans and continue where you left off."
      footer={
        <div className="flex items-center justify-between gap-4">
          <Link href="/forgot-password" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
            Forgot password?
          </Link>
          <Link href="/signup" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
            Create account
          </Link>
        </div>
      }
    >
      <Suspense fallback={<div className="h-48 flex items-center justify-center"><div className="w-8 h-8 border-2 border-violet border-t-transparent rounded-full animate-spin" /></div>}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
