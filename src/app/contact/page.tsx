import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Clauze",
  description:
    "Contact Clauze for support, feedback, or partnerships. We respond as quickly as possible.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Clauze", url: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s0">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                Company
              </span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[56px] text-1 leading-[1.1] md:leading-[1.05]">
                Contact
              </h1>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9] mt-6 max-w-2xl">
                Contact Clauze for support, feedback, or partnerships. If you are stuck on a clause, include the clause
                text and the contract type so we can help faster.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <FadeUp>
              <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
                <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-3">Email</h2>
                <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9]">
                  Use email for support, login issues, billing questions, and product feedback.
                </p>
                <div className="mt-6">
                  <a
                    className="btn-primary w-full sm:w-auto justify-center"
                    href="mailto:support@clauze.xyz"
                  >
                    support@clauze.xyz <ArrowRight size={18} />
                  </a>
                </div>
                <div className="mt-6 space-y-2">
                  <p className="font-body font-light text-[14px] md:text-[16px] text-3 leading-[1.7] md:leading-[1.8]">
                    Typical response time: within 24 to 48 hours.
                  </p>
                  <p className="font-body font-light text-[14px] md:text-[16px] text-3 leading-[1.7] md:leading-[1.8]">
                    For sensitive contracts, remove names and addresses before sending anything by email.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] mt-6 md:mt-0">
                <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-3">Common links</h2>
                <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9] mb-6">
                  Quick paths to the pages people use most often.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Pricing", href: "/pricing" },
                    { label: "FAQ", href: "/faq" },
                    { label: "How It Works", href: "/how-it-works" },
                    { label: "Sign up free", href: "/signup" },
                    { label: "Privacy Policy", href: "/privacy" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block font-body text-[15px] md:text-[16px] text-2 hover:text-1 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
                  What to include
                </span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[32px] md:text-[40px] text-1 leading-tight">
                  Get a faster answer
                </h2>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
              {[
                {
                  title: "Contract type",
                  body: "NDA review, freelance contract, employment offer, SaaS terms, or something else.",
                },
                {
                  title: "Clause snippet",
                  body: "Paste the exact clause text that confused you, plus the section heading if available.",
                },
                {
                  title: "Your goal",
                  body: "Are you trying to negotiate, understand risk, or decide whether to walk away?",
                },
              ].map((card, i) => (
                <FadeUp key={card.title} delay={i * 0.06}>
                  <div className="bg-card border rounded-[16px] p-6 sm:p-[28px] h-full">
                    <h3 className="font-display font-bold text-[18px] md:text-[22px] text-1 mb-3">{card.title}</h3>
                    <p className="font-body font-light text-[15px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85]">{card.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
