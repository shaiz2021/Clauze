"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { AuthShell } from "@/components/auth-shell";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      <div className="space-y-4">
        <button onClick={signInWithGoogle} className="btn-secondary w-full" disabled={isSubmitting}>
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
    </AuthShell>
  );
}
