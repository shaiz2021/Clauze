import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, AlertTriangle, Copyright, Briefcase, FileWarning, CreditCard, Scale, CheckCircle2, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "How AI Contract Review Works | Contract Analysis Software",
  description: "Learn how Clauze's AI contract review tool and analysis software works. See what our system checks for, how risk scores are calculated, and the limits of automated review.",
  alternates: { canonical: "https://clauze.xyz/how-it-works" },
  openGraph: { title: "How AI Contract Review Works | Clauze", url: "https://clauze.xyz/how-it-works" },
};

const CHECKS = [
  {
    icon: <AlertTriangle size={24} />,
    title: "Liability Traps and Indemnification",
    description: "The AI scans for clauses that shift an unfair amount of financial risk onto your shoulders. This includes unlimited liability, one-sided indemnification, and missing caps on damages.",
    example: '"You agree to indemnify the company for any and all claims, without limit."',
    explanation: "Clauze flags this as high risk because a single mistake could bankrupt you. A fair contract caps liability at the total amount paid under the agreement."
  },
  {
    icon: <Copyright size={24} />,
    title: "Intellectual Property Assignment",
    description: "When you sign an employment or freelance agreement, the AI checks exactly what work product belongs to the company. It flags language that claims ownership over your side projects, past inventions, or ideas created outside of working hours.",
    example: '"All ideas developed by the Employee during the term of employment shall belong to the Company."',
    explanation: "Clauze flags this because it does not limit ownership to work done using company resources or directly related to the company's business."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Restrictive Covenants and Non-Competes",
    description: "The system looks for language that restricts your future ability to earn a living. It identifies non-compete duration, geographic scope, and non-solicitation clauses that prevent you from working with clients or colleagues after you leave.",
    example: '"Employee shall not engage in competing business anywhere in the world for 24 months."',
    explanation: "Clauze flags this as an overly broad restriction. A 24-month global ban limits your career options far beyond what is necessary to protect the employer."
  },
  {
    icon: <FileWarning size={24} />,
    title: "Termination Conditions and Penalties",
    description: "The AI reviews how the contract ends. It checks for auto-renewal traps, cancellation fees, kill fees for freelancers, and at-will termination clauses that lack a reasonable notice period or severance.",
    example: '"This agreement automatically renews for successive 12-month terms unless cancelled 90 days before expiration."',
    explanation: "Clauze flags the 90-day window as an operational risk you might easily miss, locking you into another year of service."
  },
  {
    icon: <CreditCard size={24} />,
    title: "Payment Structures and Scope Creep",
    description: "For independent contractors and freelancers, the AI analyzes payment terms. It looks for vague scope of work definitions, net-90 payment delays, and clauses that allow the client to demand endless revisions without additional compensation.",
    example: '"Contractor will provide revisions until the Client is completely satisfied."',
    explanation: "Clauze flags this as high risk for unpaid scope creep. Revisions should always be capped to protect your time."
  },
  {
    icon: <Scale size={24} />,
    title: "Legal Jurisdiction and Venue",
    description: "The system identifies where legal disputes must be resolved. It flags governing law and venue clauses that force you to defend yourself in a distant state or country, which dramatically increases the cost of any legal fight.",
    example: '"Any disputes shall be resolved exclusively in the courts of Delaware."',
    explanation: "Clauze flags this if you are based in a different state, as it adds travel and local counsel costs to any potential dispute."
  }
];

export default function HowItWorksPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">Behind the technology</span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[56px] text-1 mb-6 leading-[1.1] md:leading-[1.05]">
                How Clauze&apos;s AI Contract Analysis Works
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 max-w-2xl mx-auto leading-[1.8]">
                A transparent look under the hood at how our system reads, scores, and simplifies complex legal agreements in seconds.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Introduction */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="font-display font-bold text-[24px] md:text-[32px] text-1 mb-6">
                The problem with manual review
              </h2>
              <div className="space-y-6 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9]">
                <p>
                  Traditional contract review is fundamentally broken for individuals and small businesses. When presented with a 20-page employment agreement or a dense freelance contract, you are faced with a difficult choice: spend hours trying to decode legal jargon, pay a lawyer hundreds of dollars an hour for a review, or simply sign the document and hope for the best.
                </p>
                <p>
                  Most people choose to just sign. This leads to unexpected non-competes, lost intellectual property, and unfair liability exposure down the road. Clauze was built to provide a third option.
                </p>
                <p>
                  By utilizing large language models trained on vast amounts of legal text, Clauze can read a contract in seconds and identify the specific patterns that create risk. It does not replace a lawyer, but it gives you a fast, reliable first pass so you know exactly what you are signing and what you need to negotiate.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* What the AI Checks For */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <div className="text-center mb-12 md:mb-20">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">Scanning logic</span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[48px] text-1 leading-tight">
                  What our AI contract review looks for
                </h2>
                <p className="font-body font-light text-[17px] md:text-[18px] text-2 max-w-2xl mx-auto leading-[1.8] mt-6">
                  Our system does not just summarize text; it hunts for specific risk vectors. Here are the core categories Clauze analyzes in every document.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {CHECKS.map((check, i) => (
                <FadeUp key={check.title} delay={i * 0.05}>
                  <div className="bg-card border rounded-[16px] p-6 sm:p-[32px] h-full flex flex-col">
                    <div className="text-violet mb-5 bg-violet/10 w-12 h-12 rounded-full flex items-center justify-center">
                      {check.icon}
                    </div>
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-4">{check.title}</h3>
                    <p className="font-body font-light text-[15px] md:text-[16px] text-2 leading-[1.8] mb-6 flex-grow">
                      {check.description}
                    </p>
                    <div className="bg-card-inner border rounded-[12px] p-4 mt-auto">
                      <p className="font-body font-medium text-[12px] uppercase tracking-[0.1em] text-3 mb-2">Example Flag</p>
                      <p className="font-mono text-[13px] text-2 mb-3 leading-[1.6]">{check.example}</p>
                      <p className="font-body font-light text-[14px] text-violet leading-[1.6] border-t border-[var(--border)] pt-3">
                        {check.explanation}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Scoring System */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="font-display font-bold text-[24px] md:text-[32px] text-1 mb-6">
                How is the Clauze Score calculated?
              </h2>
              <div className="space-y-4 font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                <p>
                  Every contract processed by Clauze receives an overall risk score from 0 to 100. This score is not a random number; it is a calculated metric based on the density and severity of the risks found in the text.
                </p>
                <p>
                  The AI categorizes every flagged clause as High, Medium, or Low risk. A high-risk clause (like an unlimited indemnity) heavily deducts from the total score, while a low-risk clause (like an unusual but harmless notice period) has a minimal impact.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-card border rounded-[16px] p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-risk-green/10 flex items-center justify-center text-risk-green font-display font-bold text-[24px]">75+</div>
                  <div>
                    <h4 className="font-display font-bold text-[18px] text-1">Safe to proceed</h4>
                    <p className="font-body font-light text-[14px] text-2 mt-1">The contract is relatively standard and balanced.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-risk-amber/10 flex items-center justify-center text-risk-amber font-display font-bold text-[24px]">40+</div>
                  <div>
                    <h4 className="font-display font-bold text-[18px] text-1">Review recommended</h4>
                    <p className="font-body font-light text-[14px] text-2 mt-1">Contains medium or high-risk clauses that should be negotiated.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-risk-red/10 flex items-center justify-center text-risk-red font-display font-bold text-[24px]">&lt;40</div>
                  <div>
                    <h4 className="font-display font-bold text-[18px] text-1">Seek legal advice</h4>
                    <p className="font-body font-light text-[14px] text-2 mt-1">The contract is heavily skewed against you.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Limitations */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="mb-10">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">Transparency</span>
                <h2 className="font-display font-bold text-[24px] md:text-[32px] text-1 mb-6">
                  The limits of automated contract review
                </h2>
                <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9]">
                  While Clauze is incredibly fast at spotting common legal traps, it is important to understand its limitations. Clauze is a first-pass reading tool, not a lawyer. We encourage you to read our full <Link href="/disclaimer" className="text-violet hover:underline">legal disclaimer</Link>.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border rounded-[16px] p-6 sm:p-8">
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-1 mb-3">Context matters</h3>
                  <p className="font-body font-light text-[15px] md:text-[16px] text-2 leading-[1.8]">
                    The AI does not know your specific business goals, risk tolerance, or negotiation leverage. A clause that is unacceptable for a freelancer might be standard for an enterprise software vendor.
                  </p>
                </div>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8">
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-1 mb-3">Jurisdiction laws vary</h3>
                  <p className="font-body font-light text-[15px] md:text-[16px] text-2 leading-[1.8]">
                    A non-compete that is perfectly legal in New York might be entirely unenforceable in California. Clauze flags the clause based on general risk severity, but it cannot give jurisdiction-specific legal advice.
                  </p>
                </div>
                <div className="bg-card border rounded-[16px] p-6 sm:p-8">
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-1 mb-3">Missing clauses</h3>
                  <p className="font-body font-light text-[15px] md:text-[16px] text-2 leading-[1.8]">
                    The system is excellent at flagging dangerous language that is present in the document, but it may not always tell you what beneficial language is missing. If you need a specific protective clause added, human review is still required.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* FAQs */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="font-display font-bold text-[24px] md:text-[32px] text-1 mb-10 text-center">
                Frequently asked questions about our AI
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-1 mb-3">Does the AI train on my contract data?</h3>
                  <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                    No. We take privacy seriously. Your uploads are encrypted in transit and at rest, and we do not use your personal contract data to train public language models. You retain full ownership of your documents.
                  </p>
                </div>
                
                <div className="h-px bg-[var(--border)] w-full" />
                
                <div>
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-1 mb-3">How long does the analysis take?</h3>
                  <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                    Most contracts, regardless of length, are processed and scored in under 30 seconds. The AI reads the entire document simultaneously to provide immediate, actionable feedback.
                  </p>
                </div>

                <div className="h-px bg-[var(--border)] w-full" />
                
                <div>
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-1 mb-3">Can I use Clauze for any type of contract?</h3>
                  <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">
                    Clauze is optimized for common business agreements: NDAs, employment agreements, freelance contracts, and SaaS terms. While it can read any text, it is not designed for complex real estate transactions or highly specialized corporate mergers. If you have questions about specific use cases, check our <Link href="/faq" className="text-violet hover:underline">full FAQ</Link>.
                  </p>
                </div>
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
                Ready to understand your contracts?
              </h2>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 mb-8 md:mb-10 leading-[1.8]">
                Paste your contract text or upload a PDF. 1 scan per month included for free.
              </p>
              <Link href="/upload" className="btn-primary inline-flex w-full sm:w-auto justify-center">
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
