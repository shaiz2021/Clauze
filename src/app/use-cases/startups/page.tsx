import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, Scale, Briefcase, Zap, ShieldCheck, DollarSign, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Contract Review Tool | NDA Review for Founders | Clauze",
  description: "Move fast without burning your legal budget. Clauze is the AI startup contract review tool for fast NDA review, vendor agreements, and partnership deals.",
  alternates: { canonical: "https://clauze.xyz/use-cases/startups" },
};

export default function StartupsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://clauze.xyz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Use Cases",
        "item": "https://clauze.xyz/use-cases"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Startups",
        "item": "https://clauze.xyz/use-cases/startups"
      }
    ]
  };

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">For Founders and Early-Stage Teams</span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[56px] text-1 mb-6 leading-[1.1] md:leading-[1.05]">
                The Fast-Moving Startup Contract Review Tool
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 max-w-2xl mx-auto leading-[1.8]">
                Don&apos;t let legal bottlenecks slow down your growth. Clauze provides instant NDA review for founders and startups moving at the speed of light.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/upload" className="btn-primary flex items-center justify-center gap-2">
                  Analyse My Contract <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" className="btn-secondary flex items-center justify-center gap-2">
                  View Pricing
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Introduction */}
        <section className="py-16 md:py-[100px] px-5 sm:px-6 bg-s0">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="font-display font-bold text-[24px] md:text-[32px] text-1 mb-6">
                Speed is the only startup advantage
              </h2>
              <div className="space-y-6 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  In the early stages of a startup, every partnership, vendor, and potential hire is a critical milestone. But these milestones often come with a heavy legal burden. Waiting days for a lawyer to review a "standard" NDA or a SaaS vendor agreement can kill momentum and burn through your limited seed capital.
                </p>
                <p>
                  Clauze is the startup contract review tool built to eliminate these bottlenecks. We provide a first-pass analysis that surfaces the risks that actually matter to founders, allowing you to move fast while staying protected.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Pain Points */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <div className="text-center mb-12 md:mb-20">
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[48px] text-1 leading-tight mb-6">
                  Scaling without the legal drag
                </h2>
                <p className="font-body font-light text-[17px] md:text-[18px] text-2 max-w-2xl mx-auto leading-[1.8]">
                  Traditional legal review doesn&apos;t scale with startup growth. Clauze solves these three core founder pain points.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <FadeUp delay={0.1}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Instant NDA Review</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Partnership talks shouldn&apos;t stall while you wait for a legal sign-off on a non-disclosure agreement.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Our AI provides instant NDA review for founders, flagging one-sided confidentiality terms and residuals clauses in seconds.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <DollarSign size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Preserving Legal Budget</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Spending $500 an hour on "routine" vendor review is a waste of capital for early-stage teams.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Clauze acts as your first-pass filter, identifying low-risk agreements that don&apos;t need expensive human review, saving your budget for high-stakes deals.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Rocket size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Moving Fast on Vendors</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    SaaS vendor terms can hide auto-renewal traps and broad data rights that hurt your startup long-term.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Our system scans vendor agreements for liability caps and data usage rights, ensuring your supply chain is secure and fair.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Detailed Content */}
        <section className="py-16 md:py-[100px] px-5 sm:px-6 bg-s0">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <FadeUp>
              <h2 className="font-display font-bold text-[24px] md:text-[32px] text-1 mb-8">
                The founder&apos;s choice for intelligent risk management
              </h2>
              <div className="space-y-8 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  Founders often balance extreme risk with the need for speed. Clauze was designed to sit right in the middle of that tension. We don&apos;t provide legal advice, but we provide the data-driven insights you need to make informed decisions about the contracts you sign every day.
                </p>
                <div className="bg-s1 border rounded-[16px] p-8 space-y-4">
                  <h4 className="font-display font-bold text-1">How Clauze supports startup growth:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Liability and Indemnity:</strong> Flagging unlimited liability traps in vendor and partner agreements.</li>
                    <li><strong>IP Protection:</strong> Ensuring your core IP remains yours, even when working with third-party contractors.</li>
                    <li><strong>Auto-Renewal Detection:</strong> Spotting the "hidden" 90-day cancellation windows that lock you into unwanted subscriptions.</li>
                    <li><strong>Exit Readiness:</strong> Helping you keep your "contract hygiene" clean for future due diligence and acquisitions.</li>
                  </ul>
                </div>
                <p>
                  By integrating Clauze into your operational workflow, you can decentralize the "first look" at contracts within your team. Empower your Ops or Product leads to run initial scans, escalating only the high-risk items to legal. This creates a more efficient, scalable organization that can seize opportunities without being held back by paperwork.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* CTA */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[48px] text-1 mb-6 leading-tight">
                Don&apos;t let legal slow you down
              </h2>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 mb-8 md:mb-10 leading-[1.8]">
                Join hundreds of fast-growing startups using Clauze to automate their routine contract review. 1 scan per month included for free.
              </p>
              <Link href="/upload" className="btn-primary inline-flex w-full sm:w-auto justify-center gap-2">
                Analyse My Contract <ArrowRight size={18} />
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
