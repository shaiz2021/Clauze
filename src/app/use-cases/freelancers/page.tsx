import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, CreditCard, ShieldAlert, Zap, MousePointerClick, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Contract Review Tool | Clauze",
  description: "Protect your freelance business with Clauze. Our AI contract checker for freelancers flags scope creep, unfair payment terms, and non-compete overreach in seconds.",
  alternates: { canonical: "https://clauze.xyz/use-cases/freelancers" },
};

export default function FreelancersPage() {
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
        "name": "Freelancers",
        "item": "https://clauze.xyz/use-cases/freelancers"
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
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">For Independent Professionals</span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[56px] text-1 mb-6 leading-[1.1] md:leading-[1.05]">
                The AI Freelance Contract Review Tool for Growth
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 max-w-2xl mx-auto leading-[1.8]">
                Stop guessing and start signing with confidence. Clauze is the contract checker for freelancers that hunts down scope creep and payment traps in seconds.
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
                Why freelancers trust Clauze for contract review
              </h2>
              <div className="space-y-6 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  As a freelancer, your time is your most valuable asset. But every new client project comes with a dense legal agreement that can hide risks to your income and your future career. Whether you are working through platforms like Upwork and Freelancer or signing direct client agreements, manual review is slow, expensive, and prone to error.
                </p>
                <p>
                  Clauze provides a production-ready AI contract checker designed specifically for the unique needs of independent contractors. We help you spot the &quot;hidden costs&quot; of a project before you commit your time.
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
                  Protecting your time and income
                </h2>
                <p className="font-body font-light text-[17px] md:text-[18px] text-2 max-w-2xl mx-auto leading-[1.8]">
                  Freelance contracts often contain one-sided language that benefits the client. Clauze levels the playing field by surfacing these three critical pain points.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <FadeUp delay={0.1}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Eliminating Scope Creep</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Vague &quot;Services&quot; definitions and &quot;unlimited revisions&quot; can turn a profitable project into a loss.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Our AI identifies vague deliverables and missing revision caps, recommending clear boundaries to protect your billable hours.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Fixing Unfair Payment Terms</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Net-90 delays and &quot;pay-when-paid&quot; clauses are zero-interest loans for your clients at your expense.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Clauze flags predatory payment windows and recommends milestone-based structures to ensure consistent cash flow.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Spotting Non-Compete Overreach</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Broad non-competes can prevent you from working in your niche for years after a single small project.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      We detect hidden restrictive covenants and explain exactly how they limit your future earning potential across industries.
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
                The standard for modern freelance contract review
              </h2>
              <div className="space-y-8 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  For too long, freelancers have been forced to choose between paying for expensive legal counsel or signing blindly. Clauze was built to provide a production-ready alternative that fits the fast-paced nature of the gig economy.
                </p>
                <div className="bg-s1 border rounded-[16px] p-8 space-y-4">
                  <h4 className="font-display font-bold text-1">What we check in every freelance contract:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Liability Caps:</strong> Ensuring you aren&apos;t personally responsible for client losses beyond your fee.</li>
                    <li><strong>IP Assignment:</strong> Protecting your right to reuse your own tools, templates, and libraries.</li>
                    <li><strong>Termination Rights:</strong> Spotting &quot;kill fees&quot; and ensuring you get paid for work in progress if a project ends early.</li>
                    <li><strong>Governing Law:</strong> Flagging clauses that force you to defend yourself in distant jurisdictions.</li>
                  </ul>
                </div>
                <p>
                  Our AI doesn&apos;t just summarize; it analyzes. By leveraging specialized models trained on thousands of real-world contracts, Clauze provides a level of depth that general-purpose AI tools simply cannot match. It understands the nuances of the &quot;freelancer-client&quot; relationship and highlights the specific patterns that create risk for independent creators.
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
                Ready to protect your freelance business?
              </h2>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 mb-8 md:mb-10 leading-[1.8]">
                Join thousands of freelancers using Clauze as their primary contract review tool. 1 scan per month included for free.
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
