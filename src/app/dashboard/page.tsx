import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ArrowRight, BadgeCheck, CreditCard, FileText, LifeBuoy, Lock, Mail, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard | Clauze",
  description: "Your account, your scans, and the fastest way back into analysis.",
  alternates: { canonical: "/dashboard" },
  openGraph: { title: "Dashboard | Clauze", url: "/dashboard" },
};

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const isEmailVerified = Boolean((user as any).email_confirmed_at ?? (user as any).confirmed_at);
  const lastSignIn = (user as any).last_sign_in_at as string | undefined;

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s0">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                Account
              </span>
              <h1 className="font-serif italic font-normal text-[32px] sm:text-[44px] md:text-[64px] text-1 leading-[0.98] tracking-[-0.02em]">
                Welcome back.
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 leading-[1.8] md:leading-[1.85] mt-6 max-w-2xl">
                You are signed in as <span className="text-1">{user.email}</span>. Jump back into a scan or review the
                basics below.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link href="/upload" className="btn-primary w-full sm:w-auto justify-center">
                  Analyse a contract <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" className="btn-secondary w-full sm:w-auto justify-center">
                  View pricing
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              <FadeUp>
                <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
                      <Mail size={18} className="text-violet" />
                    </div>
                    <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Account</h2>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                      <p className="font-body text-[13px] md:text-[14px] text-3 uppercase tracking-widest">Email</p>
                      <p className="font-body text-[15px] md:text-[16px] text-2 sm:text-right break-all">{user.email}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                      <p className="font-body text-[13px] md:text-[14px] text-3 uppercase tracking-widest">Status</p>
                      <div className="flex items-center gap-2">
                        <div
                          className={`inline-flex items-center gap-2 px-3 h-8 rounded-full text-[12px] font-body font-medium ${
                            isEmailVerified ? "bg-risk-green text-white" : "bg-risk-amber text-white"
                          }`}
                        >
                          <BadgeCheck size={14} />
                          {isEmailVerified ? "Email verified" : "Verify email"}
                        </div>
                      </div>
                    </div>

                    {lastSignIn && (
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                        <p className="font-body text-[13px] md:text-[14px] text-3 uppercase tracking-widest">Last sign in</p>
                        <p className="font-body text-[15px] md:text-[16px] text-2 sm:text-right">{new Date(lastSignIn).toLocaleString()}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/forgot-password" title="Reset password" className="btn-secondary flex-1 sm:flex-none justify-center text-center">
                      Reset password
                    </Link>
                    <Link href="/contact" title="Contact support" className="btn-secondary flex-1 sm:flex-none justify-center text-center">
                      Contact support
                    </Link>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.06}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
                      <FileText size={18} className="text-violet" />
                    </div>
                    <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Quick actions</h2>
                  </div>

                  <div className="space-y-3">
                    <Link href="/upload" className="btn-primary w-full justify-center">
                      Analyse a contract <ArrowRight size={18} />
                    </Link>
                    <Link href="/how-it-works" className="btn-secondary w-full justify-center">
                      How it works
                    </Link>
                    <Link href="/faq" className="btn-secondary w-full justify-center">
                      Common questions
                    </Link>
                  </div>

                  <p className="font-body font-light text-[13px] md:text-[14px] text-3 leading-[1.7] mt-6">
                    Tip: If a clause feels “standard” but you cannot explain it, run that section alone first.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.12}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
                      <CreditCard size={18} className="text-violet" />
                    </div>
                    <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Plan</h2>
                  </div>

                  <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85]">
                    Upgrade when you want saved scans, advanced filters, and faster review workflows.
                  </p>

                  <div className="mt-6">
                    <Link href="/pricing" className="btn-secondary w-full justify-center">
                      View pricing
                    </Link>
                  </div>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.18}>
              <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
                      <Lock size={18} className="text-violet" />
                    </div>
                    <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Saved scans</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-[var(--s0)] border border-[var(--border)] text-[12px] font-body font-medium text-3">
                      <Shield size={14} className="text-violet" />
                      Coming next
                    </div>
                  </div>
                </div>

                <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85] mt-4 max-w-3xl">
                  Your account is ready. Saved scans and scan history are the next step so you can revisit reports without re-pasting the contract.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/upload" className="btn-primary w-full sm:w-auto justify-center">
                    Run a scan <ArrowRight size={18} />
                  </Link>
                  <Link href="/privacy" className="btn-secondary w-full sm:w-auto justify-center">
                    Privacy policy
                  </Link>
                </div>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <FadeUp delay={0.22}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
                      <LifeBuoy size={18} className="text-violet" />
                    </div>
                    <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Help</h2>
                  </div>
                  <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85]">
                    Need help with a clause or a weird template? Send the clause snippet and the contract type.
                  </p>
                  <div className="mt-6">
                    <Link href="/contact" className="btn-secondary w-full justify-center">
                      Contact
                    </Link>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.26}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--s0)] flex items-center justify-center">
                      <Shield size={18} className="text-violet" />
                    </div>
                    <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1">Legal</h2>
                  </div>
                  <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85]">
                    Clauze is not a law firm and does not provide legal advice. Use it to understand language and spot risk early.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/disclaimer" className="btn-secondary flex-1 justify-center">
                      Not legal advice
                    </Link>
                    <Link href="/terms" className="btn-secondary flex-1 justify-center">
                      Terms
                    </Link>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
