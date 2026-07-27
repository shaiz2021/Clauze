import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { Check, X, ArrowRight } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Pricing | Clauze",
  description: "Start free. Upgrade when ready. Simple pricing for contract review.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing | Clauze", url: "/pricing" },
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    description: "Essential tools for occasional contract review. Paste your text and get a risk summary.",
    features: [
      { name: "1 scan per month", included: true },
      { name: "Paste-text only", included: true },
      { name: "Risk summary", included: true },
      { name: "Clauze Score", included: true },
      { name: "Requires account", included: true },
      { name: "PDF upload", included: false },
      { name: "PDF report download", included: false },
      { name: "Scan history", included: false },
    ],
    cta: "Sign up free",
    href: "/signup",
    featured: false,
    comingSoon: false
  },
  {
    name: "Starter",
    price: "$2.99",
    period: "scan",
    description: "Perfect for one-off deep dives into high-stakes agreements. Pay only for what you need.",
    features: [
      { name: "PDF upload", included: true },
      { name: "PDF report download", included: true },
      { name: "Full clause breakdown", included: true },
      { name: "Negotiation tips", included: true },
      { name: "Pay-per-use", included: true },
      { name: "Requires account", included: true },
      { name: "Unlimited scans", included: false },
      { name: "Scan history", included: false },
    ],
    cta: "Buy a Scan",
    href: "#waitlist",
    featured: true,
    comingSoon: true
  },
  {
    name: "Pro",
    price: "$15.99",
    period: "month",
    description: "For professionals who review contracts frequently and need saved history.",
    features: [
      { name: "Unlimited scans", included: true },
      { name: "Scan history", included: true },
      { name: "PDF upload", included: true },
      { name: "PDF report download", included: true },
      { name: "Full clause breakdown", included: true },
      { name: "Negotiation tips", included: true },
      { name: "Requires account", included: true },
      { name: "Priority support", included: true },
    ],
    cta: "Get Pro",
    href: "#waitlist",
    featured: false,
    comingSoon: true
  }
];

export default function PricingPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">Simple Pricing</span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[52px] text-1 mb-6 leading-tight">
                Start free. Upgrade when ready.
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 max-w-2xl mx-auto leading-[1.8] md:leading-[1.9]">
                Clauze is built for contract review in plain English. Use Free for quick checks, then upgrade when you
                want scan history, exports, and deeper workflows.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Pricing Cards */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <p className="font-body font-light text-[15px] md:text-[16px] text-3 text-center mb-10 md:mb-16 leading-[1.8]">
                Start with a Free scan today or upgrade for PDF uploads, exports, and unlimited access.
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {PLANS.map((plan, i) => (
                <FadeUp key={plan.name} delay={i * 0.1}>
                  <div className={`p-6 sm:p-[28px] bg-card border rounded-[16px] ${plan.comingSoon ? "opacity-75" : ""} ${!plan.comingSoon ? "border-2 border-violet shadow-[0_0_40px_rgba(123,110,246,0.15)]" : ""}`}>
                    <h3 className="font-display font-bold text-[22px] md:text-[24px] text-1 mb-2">{plan.name}</h3>
                    <div className="font-display font-bold text-[36px] md:text-[40px] text-1 mb-1">
                      {plan.price}
                      <span className="text-[16px] md:text-[18px] text-3 font-light">/{plan.period}</span>
                    </div>
                    <p className="font-body font-light text-[15px] md:text-[16px] text-3 mb-8 leading-[1.8]">{plan.description}</p>

                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 font-body text-[15px] md:text-[16px]">
                          {feature.included ? (
                            <Check 
                              size={18} 
                              className="text-violet shrink-0" 
                              aria-label="Included"
                            />
                          ) : (
                            <X 
                              size={18} 
                              className="text-4 shrink-0" 
                              aria-label="Not included"
                            />
                          )}
                          <span className={feature.included ? "text-2" : "text-3"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.comingSoon ? (
                      <button disabled className="btn-secondary w-full opacity-50 cursor-not-allowed">
                        {plan.cta}
                      </button>
                    ) : (
                      <Link href={plan.href} className="btn-primary w-full">
                        {plan.cta}
                      </Link>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Comparison Table */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10 md:mb-16">
                <h2 className="font-display font-extrabold text-[28px] sm:text-[32px] md:text-[40px] text-1 leading-tight">
                  Compare features
                </h2>
                <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85] mt-4 max-w-2xl mx-auto">
                  A quick view of what you get today on Free, and what unlocks as paid plans roll out.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
                <table className="w-full min-w-[600px] sm:min-w-0">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-4 font-display font-bold text-[13px] md:text-[14px] text-3 uppercase tracking-wider">Feature</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-[13px] md:text-[14px] text-3 uppercase tracking-wider">Free</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-[13px] md:text-[14px] text-3 uppercase tracking-wider">Starter</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-[13px] md:text-[14px] text-3 uppercase tracking-wider">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Monthly scans", "1", "Pay-per-use", "Unlimited"],
                      ["Paste-text only", true, false, true],
                      ["PDF upload", false, true, true],
                      ["PDF report download", false, true, true],
                      ["Scan history", false, false, true],
                      ["Full clause breakdown", true, true, true],
                      ["Negotiation tips", true, true, true],
                      ["Requires sign-in", true, true, true],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border)]">
                        <td className="py-4 px-4 font-body text-[14px] md:text-[15px] text-2">{row[0]}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[1] === "boolean" ? (
                            row[1] ? <Check size={18} className="mx-auto text-violet" aria-label="Included" /> : <X size={18} className="mx-auto text-4" aria-label="Not included" />
                          ) : (
                            <span className="font-body text-[13px] md:text-[14px] text-1">{row[1]}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[2] === "boolean" ? (
                            row[2] ? <Check size={18} className="mx-auto text-violet" aria-label="Included" /> : <X size={18} className="mx-auto text-4" aria-label="Not included" />
                          ) : (
                            <span className="font-body text-[13px] md:text-[14px] text-1">{row[2]}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[3] === "boolean" ? (
                            row[3] ? <Check size={18} className="mx-auto text-violet" aria-label="Included" /> : <X size={18} className="mx-auto text-4" aria-label="Not included" />
                          ) : (
                            <span className="font-body text-[13px] md:text-[14px] text-1">{row[3]}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 md:py-[120px] bg-s0 border-y border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
            <WaitlistForm />
          </div>
        </section>

        <SectionDivider />

        {/* FAQ Section */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
                  Pricing Questions
                </span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[32px] md:text-[40px] text-1 leading-tight">
                  What people ask before upgrading
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">
              {[
                {
                  q: "Is Free enough for an NDA review or a freelance contract?",
                  a: "Yes. Free is designed for a quick risk summary of pasted text. It flags risky clauses and explains what they mean so you can spot red flags in minutes.",
                },
                {
                  q: "What is the difference between Starter and Pro?",
                  a: "Starter is a pay-per-use deep scan, perfect for one-off PDF reviews. Pro is a monthly subscription that unlocks unlimited scans and saved history.",
                },
                {
                  q: "Do I need an account?",
                  a: "Yes. All tiers, including Free, require a Clauze account to process scans and ensure your data remains secure and accessible to you.",
                },
                {
                  q: "Is this legal advice?",
                  a: "No. Clauze is a contract reading tool. Use it to understand language and spot risk early. For high stakes agreements, always consult a qualified lawyer.",
                },
              ].map((item, i) => (
                <FadeUp key={item.q} delay={i * 0.06}>
                  <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-3 leading-snug">{item.q}</h3>
                    <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.85]">{item.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link href="/upload" className="btn-primary w-full sm:w-auto justify-center">
                  Start a free scan
                </Link>
                <Link href="/faq" className="btn-secondary w-full sm:w-auto justify-center">
                  Read the FAQ
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
