"use client";

import { useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { siteUrl } from "@/lib/site-url";
import { ArrowRight, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

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

export function GatedSignup({ onAuthSuccess }: { onAuthSuccess?: (user: any) => void }) {
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"signup" | "signin">("signup");
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

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }
    setIsSubmitting(true);
    setError(null);

    if (mode === "signup") {
      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        setIsSubmitting(false);
        return;
      }

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${siteUrl}/auth/callback?next=/upload`,
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        // Even if email confirmation is required, Supabase returns a user object.
        // We pass this up to allow immediate access in the UI.
        if (data.user) {
          onAuthSuccess?.(data.user);
        }
      }
    } else {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else if (data.user) {
        onAuthSuccess?.(data.user);
      }
    }

    setIsSubmitting(false);
  };

  const signInWithGoogle = async () => {
    if (!supabase) return;
    setIsSubmitting(true);
    const redirectTo = `${siteUrl}/auth/callback?next=/upload`;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
  };

  const signInWithLinkedIn = async () => {
    if (!supabase) return;
    setIsSubmitting(true);
    const redirectTo = `${siteUrl}/auth/callback?next=/upload`;
    await supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc",
      options: { redirectTo },
    });
  };

  return (
    <div className="bg-card border border-[var(--border)] rounded-[24px] p-6 sm:p-8 md:p-10 w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 mx-auto max-w-[90vw] sm:max-w-md">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="font-display font-bold text-[28px] text-1 mb-3">
          {mode === "signup" ? "See Your Results" : "Welcome Back"}
        </h2>
        <p className="font-body text-3 text-[15px] leading-[1.6]">
          {mode === "signup" 
            ? "Sign up free to unlock your Clauze Score, risk summary, and full clause breakdown."
            : "Sign in to access your analysis and saved contract scans."}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={signInWithGoogle}
            className="btn-secondary w-full flex items-center justify-center gap-2 h-12 text-[14px]"
            disabled={isSubmitting}
          >
            Google <ArrowRight size={14} />
          </button>
          <button
            onClick={signInWithLinkedIn}
            className="btn-secondary w-full flex items-center justify-center gap-2 h-12 text-[14px]"
            disabled={isSubmitting}
          >
            LinkedIn <LinkedInIcon />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="font-body text-[12px] uppercase tracking-widest text-4">or</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3 block mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full h-12 rounded-[12px] bg-[var(--s0)] border border-[var(--border)] px-4 font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-colors"
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
              required
              className="w-full h-12 rounded-[12px] bg-[var(--s0)] border border-[var(--border)] px-4 font-body text-[15px] text-2 focus:outline-none focus:border-violet transition-colors"
              placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
            />
          </div>

          {error && (
            <div className="bg-risk-red/10 border border-risk-red/20 rounded-[12px] p-4 text-center">
              <p className="font-body text-[14px] text-risk-red">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="btn-primary w-full h-12 flex items-center justify-center gap-2"
            disabled={isSubmitting || !email || !password}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              mode === "signup" ? "Create account" : "Sign in"
            )}
          </button>
        </form>

        <p className="font-body text-[13px] text-4 text-center mt-6">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setMode("signin")} className="text-violet hover:underline">
                Sign in
              </button>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <button onClick={() => setMode("signup")} className="text-violet hover:underline">
                Sign up free
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
