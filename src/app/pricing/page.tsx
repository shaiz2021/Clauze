import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { Check, X } from "lucide-react";

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
    description: "A fast contract check for NDAs, freelance agreements, and employment offers.",
    features: [
      { name: "1 scan per month", included: true },
      { name: "Risk badges", included: true },
      { name: "Clauze Score", included: true },
      { name: "PDF and text upload", included: true },
      { name: "No account required", included: true },
      { name: "Unlimited scans", included: false },
      { name: "Full clause breakdown", included: false },
      { name: "Negotiation tips", included: false },
      { name: "Scan history", included: false },
      { name: "PDF report download", included: false },
    ],
    cta: "Start Free",
    href: "/upload",
    featured: false,
    comingSoon: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    description: "For teams and professionals who review contracts weekly and want saved history.",
    features: [
      { name: "Unlimited scans", included: true },
      { name: "Full clause breakdown", included: true },
      { name: "Negotiation tips", included: true },
      { name: "Scan history", included: true },
      { name: "PDF report download", included: true },
      { name: "Priority analysis speed", included: true },
      { name: "No account required", included: false },
      { name: "1 scan per month", included: false },
      { name: "Risk badges", included: false },
      { name: "Clauze Score", included: false },
    ],
    cta: "Get Pro (coming soon)",
    href: "#",
    featured: true,
    comingSoon: true
  },
  {
    name: "One Scan",
    price: "$4",
    period: "scan",
    description: "A one time deep scan for a high stakes agreement when you want more detail.",
    features: [
      { name: "Full Pro analysis", included: true },
      { name: "PDF report download", included: true },
      { name: "No subscription", included: true },
      { name: "Unlimited scans", included: false },
      { name: "Scan history", included: false },
      { name: "Negotiation tips", included: false },
      { name: "1 scan per month", included: false },
      { name: "No account required", included: false },
      { name: "Risk badges", included: false },
      { name: "Clauze Score", included: false },
    ],
    cta: "Buy a Scan (coming soon)",
    href: "#",
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
        <section className="pt-32 pb-24 px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">Simple Pricing</span>
              <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-1 mb-6">
                Start free. Upgrade when ready.
              </h1>
              <p className="font-body font-light text-[20px] text-2 max-w-2xl mx-auto leading-[1.9]">
                Clauze is built for contract review in plain English. Use Free for quick checks, then upgrade when you
                want scan history, exports, and deeper workflows.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Pricing Cards */}
        <section className="py-[120px] px-6 bg-s0">
          <div className="max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <p className="font-body font-light text-[16px] text-3 text-center mb-16 leading-[1.8]">
                Pro and One Scan launch soon. Start with Free today and get a clean risk summary in minutes.
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              {PLANS.map((plan, i) => (
                <FadeUp key={plan.name} delay={i * 0.1}>
                  <div className={`p-[28px] bg-card border rounded-[16px] ${plan.comingSoon ? "opacity-75" : ""} ${!plan.comingSoon ? "border-2 border-violet shadow-[0_0_40px_rgba(123,110,246,0.15)]" : ""}`}>
                    <h3 className="font-display font-bold text-[24px] text-1 mb-2">{plan.name}</h3>
                    <div className="font-display font-bold text-[40px] text-1 mb-1">
                      {plan.price}
                      <span className="text-[18px] text-3 font-light">/{plan.period}</span>
                    </div>
                    <p className="font-body font-light text-[16px] text-3 mb-8 leading-[1.8]">{plan.description}</p>

                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 font-body text-[16px]">
                          {feature.included ? (
                            <Check size={18} className="text-violet shrink-0" />
                          ) : (
                            <X size={18} className="text-4 shrink-0" />
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
        <section className="py-[120px] px-6 bg-s2">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="font-display font-extrabold text-[32px] md:text-[40px] text-1">
                  Compare features
                </h2>
                <p className="font-body font-light text-[18px] text-2 leading-[1.85] mt-4 max-w-2xl mx-auto">
                  A quick view of what you get today on Free, and what unlocks as paid plans roll out.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-4 font-display font-bold text-[14px] text-3 uppercase tracking-wider">Feature</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-[14px] text-3 uppercase tracking-wider">Free</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-[14px] text-3 uppercase tracking-wider">Pro</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-[14px] text-3 uppercase tracking-wider">One Scan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Monthly scans", "1", "Unlimited", "1 (one-time)"],
                      ["Clauze Score", true, true, true],
                      ["Risk badges", true, true, true],
                      ["Plain English explanations", true, true, true],
                      ["Full clause breakdown", false, true, true],
                      ["Negotiation tips", false, true, true],
                      ["Scan history", false, true, false],
                      ["PDF report download", false, true, true],
                      ["Priority speed", false, true, false],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border)]">
                        <td className="py-4 px-4 font-body text-[15px] text-2">{row[0]}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[1] === "boolean" ? (
                            row[1] ? <Check size={18} className="mx-auto text-violet" /> : <X size={18} className="mx-auto text-4" />
                          ) : (
                            <span className="font-body text-[14px] text-1">{row[1]}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[2] === "boolean" ? (
                            row[2] ? <Check size={18} className="mx-auto text-violet" /> : <X size={18} className="mx-auto text-4" />
                          ) : (
                            <span className="font-body text-[14px] text-1">{row[2]}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[3] === "boolean" ? (
                            row[3] ? <Check size={18} className="mx-auto text-violet" /> : <X size={18} className="mx-auto text-4" />
                          ) : (
                            <span className="font-body text-[14px] text-1">{row[3]}</span>
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

        <section className="py-[120px] px-6 bg-s0">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
                  Pricing Questions
                </span>
                <h2 className="font-display font-extrabold text-[32px] md:text-[40px] text-1">
                  What people ask before upgrading
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {[
                {
                  q: "Is Free enough for an NDA review or a freelance contract?",
                  a: "Yes. Free is designed for a quick NDA review, a freelance contract check, or an employment offer scan. It flags the risky clauses and explains what they mean.",
                },
                {
                  q: "When does Pro make sense?",
                  a: "Pro is built for frequent contract review. If you are scanning weekly and want saved history, exports, and faster workflows, Pro is the right fit.",
                },
                {
                  q: "Do I need an account?",
                  a: "No for the first scan. Create an account if you want a dashboard and future features like scan history and saved reports.",
                },
                {
                  q: "Is this legal advice?",
                  a: "No. Clauze is a contract reading tool. Use it to understand language and spot risk early. For high stakes agreements, consult a qualified lawyer.",
                },
              ].map((item, i) => (
                <FadeUp key={item.q} delay={i * 0.06}>
                  <div className="bg-card border rounded-[16px] p-[28px]">
                    <h3 className="font-display font-bold text-[22px] text-1 mb-3">{item.q}</h3>
                    <p className="font-body font-light text-[18px] text-2 leading-[1.85]">{item.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link href="/upload" className="btn-primary">
                  Start a free scan
                </Link>
                <Link href="/faq" className="btn-secondary">
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
