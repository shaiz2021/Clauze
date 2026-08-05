import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, Globe, Briefcase, ShieldCheck, MapPin, AlertCircle, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Review Employment Contract AI | Remote Job Offer Red Flags | Clauze",
  description: "Get a fast, intelligent review of your employment contract with Clauze. Our AI flags remote job offer red flags and non-competes across jurisdictions.",
  alternates: { canonical: "https://clauze.xyz/use-cases/remote-employees" },
};

export default function RemoteEmployeesPage() {
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
        "name": "Remote Employees",
        "item": "https://clauze.xyz/use-cases/remote-employees"
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
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">For Modern Professionals</span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[56px] text-1 mb-6 leading-[1.1] md:leading-[1.05]">
                Review Your Employment Contract with AI
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 max-w-2xl mx-auto leading-[1.8]">
                Spot remote job offer red flags before you sign. Clauze provides a fast, intelligent review of your employment agreement, regardless of where the company is based.
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
                Navigating the global job market safely
              </h2>
              <div className="space-y-6 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  Remote work has opened up a world of opportunities. But it has also introduced a new level of legal complexity. When you receive an offer from a company in a different state or country, you are often signing a contract governed by laws you don&apos;t fully understand.
                </p>
                <p>
                  Clauze is the leading platform to review employment contracts with AI. We help you identify the specific clauses that could restrict your future career or create unexpected liabilities, giving you the peace of mind to focus on your new role.
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
                  Protecting your career and rights
                </h2>
                <p className="font-body font-light text-[17px] md:text-[18px] text-2 max-w-2xl mx-auto leading-[1.8]">
                  Remote employment contracts often include standard "corporate" language that can be highly restrictive for individuals. Clauze flags these three key areas.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <FadeUp delay={0.1}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Cross-Border Jurisdiction</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Signing a contract governed by Delaware or New York law when you live in London or Berlin creates massive legal risk.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      We flag governing law and venue clauses that force you to defend yourself in distant jurisdictions, highlighting potential travel and local counsel costs.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <AlertCircle size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">Restrictive Non-Competes</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Overly broad non-competes can prevent you from working in your entire industry for 12-24 months after you leave.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Clauze identifies non-compete duration and geographic scope, warning you about language that limits your future career mobility and earning potential.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Search size={24} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-1 mb-4">IP and Side Project Rights</h3>
                  <p className="font-body font-light text-[15px] text-2 leading-[1.8] mb-6 flex-grow">
                    Some contracts claim ownership over everything you create, even outside of work hours or using your own equipment.
                  </p>
                  <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                    <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-violet mb-2">How Clauze helps</p>
                    <p className="font-body font-light text-[14px] text-2 leading-[1.6]">
                      Our AI scans for broad IP assignment language that could threaten your side projects, open-source contributions, or personal inventions.
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
                Empowering the remote workforce
              </h2>
              <div className="space-y-8 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  Clauze is built on the belief that individuals should have the same access to intelligent contract analysis as the companies that hire them. Our production-ready AI tools are designed to provide a fast, objective "second look" at your employment terms.
                </p>
                <div className="bg-s1 border rounded-[16px] p-8 space-y-4">
                  <h4 className="font-display font-bold text-1">Key remote job offer red flags we scan for:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Notice Periods:</strong> Ensuring you aren&apos;t trapped in a role longer than you intended.</li>
                    <li><strong>Probationary Clauses:</strong> Highlighting terms that allow the company to terminate you without cause or notice early on.</li>
                    <li><strong>Equipment and Expense Policies:</strong> Clarifying who owns the hardware and who pays for the remote office setup.</li>
                    <li><strong>Non-Solicitation:</strong> Flagging language that prevents you from working with former colleagues at a new company.</li>
                  </ul>
                </div>
                <p>
                  Whether you are a software engineer, a marketing lead, or a remote operations manager, Clauze provides the clarity you need to sign your next offer with confidence. Don&apos;t just hope for the best—know exactly what is in your contract.
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
                Sign your next offer with confidence
              </h2>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 mb-8 md:mb-10 leading-[1.8]">
                Join the thousands of remote professionals using Clauze as their go-to AI contract review tool. 1 scan per month included for free.
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
