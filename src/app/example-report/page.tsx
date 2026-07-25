import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, CheckCircle2, Info, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Example Report | Clauze",
  description: "See what a Clauze contract analysis looks like. Plain English, risk scores, and actionable tips.",
  alternates: { canonical: "/example-report" },
  openGraph: { title: "Example Report | Clauze", url: "/example-report" },
};

const MOCK_RESULT = {
  score: 64,
  summary:
    "This employment agreement looks standard at first glance, but it contains a broad non-compete and a sweeping IP assignment. Those two clauses increase risk and should be negotiated before signing.",
  risks: {
    high: 2,
    medium: 3,
    low: 4
  },
  clauses: [
    {
      tag: "NON-COMPETE",
      risk: "high",
      original: "Employee shall not, for a period of 24 months following termination, engage in any business activity that competes with the Company anywhere in the continental United States.",
      explanation: "This is a very broad non-compete. 24 months is longer than the typical 6-12 months, and 'continental US' is a huge geographic area that might make it hard for you to find a new job."
    },
    {
      tag: "TERMINATION",
      risk: "high",
      original: "The Company may terminate this Agreement at any time for any reason without notice or severance pay.",
      explanation: "This is an 'at-will' clause but specifically excludes severance. You could be let go tomorrow with zero financial cushion."
    },
    {
      tag: "INTELLECTUAL PROPERTY",
      risk: "medium",
      original: "All ideas, inventions, and work product developed by the Employee during the term of employment, whether or not during business hours or using Company resources, shall belong to the Company.",
      explanation: "This means even projects you work on at home on your own time might legally belong to your employer."
    }
  ],
  recommendations: [
    "Negotiate the non-compete period down to 6 or 12 months.",
    "Ask for a specific list of competitors rather than a blanket geographic ban.",
    "Request a notice period of at least 30 days for termination without cause.",
    "Clarify that IP ownership only applies to work related to the company's business."
  ]
};

export default function ExampleReportPage() {
  return (
    <div className="min-h-screen bg-s0 text-1">
      <Navbar />
      
      <main className="pt-[68px]">
        <section className="pt-32 pb-24 px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                Example report
              </span>
              <h1 className="font-serif italic font-normal text-[44px] md:text-[64px] text-1 leading-[0.98] tracking-[-0.02em]">
                Employment contract review example
              </h1>
              <p className="font-body font-light text-[18px] md:text-[20px] text-2 leading-[1.85] mt-6 max-w-2xl mx-auto">
                This is what a Clauze scan looks like. It highlights risky clauses and explains them in plain English,
                so you can negotiate with clarity.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s0">
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeUp>
              <div className="bg-card border border-[var(--border)] rounded-[16px] p-[28px]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="flex items-end gap-4">
                    <div className="font-display font-extrabold text-[72px] md:text-[96px] text-violet leading-none">
                      {MOCK_RESULT.score}
                    </div>
                    <div className="pb-2">
                      <div className="font-body font-medium text-[12px] uppercase tracking-[0.2em] text-3">
                        Clauze Score
                      </div>
                      <div className="font-body font-light text-[16px] text-2 mt-2">
                        Review recommended
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                    <div className="p-4 rounded-[16px] bg-risk-red/10 border border-risk-red/20 text-center">
                      <div className="font-display font-extrabold text-[28px] text-risk-red leading-none">
                        {MOCK_RESULT.risks.high}
                      </div>
                      <div className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-risk-red mt-2">
                        High
                      </div>
                    </div>
                    <div className="p-4 rounded-[16px] bg-risk-amber/10 border border-risk-amber/20 text-center">
                      <div className="font-display font-extrabold text-[28px] text-risk-amber leading-none">
                        {MOCK_RESULT.risks.medium}
                      </div>
                      <div className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-risk-amber mt-2">
                        Review
                      </div>
                    </div>
                    <div className="p-4 rounded-[16px] bg-risk-green/10 border border-risk-green/20 text-center">
                      <div className="font-display font-extrabold text-[28px] text-risk-green leading-none">
                        {MOCK_RESULT.risks.low}
                      </div>
                      <div className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-risk-green mt-2">
                        Safe
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-[var(--border)]">
                  <h2 className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3 mb-4">
                    Summary
                  </h2>
                  <p className="font-body font-light text-[18px] text-2 leading-[1.9]">
                    {MOCK_RESULT.summary}
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="flex items-center gap-2 font-body font-medium text-[11px] uppercase tracking-[0.2em] text-3">
                Detailed findings <ChevronRight className="w-4 h-4" />
              </div>
            </FadeUp>

            <div className="space-y-6">
              {MOCK_RESULT.clauses.map((clause, idx) => (
                <FadeUp key={idx} delay={0.12 + idx * 0.06}>
                  <div className="bg-card border border-[var(--border)] rounded-[16px] p-[28px]">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <p className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet">
                          {clause.tag}
                        </p>
                        <h3 className="font-display font-bold text-[22px] text-1 mt-2">
                          {clause.tag.replace(/_/g, " ").toLowerCase().replace(/(^\\w|\\s\\w)/g, (m) => m.toUpperCase())}
                        </h3>
                      </div>
                      <span
                        className={cn(
                          "inline-flex items-center px-3 h-8 rounded-full text-[12px] font-body font-medium text-white",
                          clause.risk === "high"
                            ? "bg-risk-red"
                            : clause.risk === "medium"
                              ? "bg-risk-amber"
                              : "bg-risk-green"
                        )}
                      >
                        {clause.risk === "medium" ? "review" : clause.risk} risk
                      </span>
                    </div>

                    <div className="mb-6 p-5 rounded-[12px] bg-card-inner border border-[var(--border)]">
                      <p className="font-mono text-[13px] text-2 leading-[1.9]">
                        &quot;{clause.original}&quot;
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 shrink-0">
                        <Info className="w-5 h-5 text-violet" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-[12px] uppercase tracking-[0.2em] text-3 mb-2">
                          Plain English
                        </p>
                        <p className="font-body font-light text-[18px] text-2 leading-[1.85]">
                          {clause.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.4}>
              <div className="bg-card border border-[var(--border)] rounded-[16px] p-[28px]">
                <h2 className="font-display font-bold text-[22px] text-1 mb-3 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-risk-green" />
                  Negotiation checklist
                </h2>
                <p className="font-body font-light text-[18px] text-2 leading-[1.85]">
                  These are example next steps based on the flagged clauses above. Use them as a starting point for
                  questions and edits.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {MOCK_RESULT.recommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-[12px] bg-card-inner border border-[var(--border)] text-[16px] text-2 flex gap-3 font-body font-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-violet mt-2.5 shrink-0" />
                      {rec}
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <Link href="/upload" className="btn-primary">
                    Analyse my contract <ArrowRight size={18} />
                  </Link>
                  <Link href="/how-it-works" className="btn-secondary">
                    How it works
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
