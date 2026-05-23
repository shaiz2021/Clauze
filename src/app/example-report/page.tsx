"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Info, Download, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_RESULT = {
  score: 64,
  summary: "This employment agreement contains standard terms but includes several highly restrictive clauses regarding non-compete and intellectual property that are more favorable to the employer than is typical for this role.",
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
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet/10 text-violet text-xs font-medium mb-4">
            Example Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Software Engineer Agreement</h1>
          <p className="text-cream/50">A typical employment contract analysis by Clauze.</p>
        </div>

        <div className="space-y-8">
          {/* Score Section */}
          <Card className="bg-violet/5 border-violet/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex items-end gap-4">
                  <div className="text-8xl font-serif text-violet leading-none">{MOCK_RESULT.score}</div>
                  <div className="pb-2">
                    <div className="text-lg font-medium">Risk Score</div>
                    <div className="text-sm text-cream/50">Moderately Risky</div>
                  </div>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <div className="flex-1 md:w-24 p-4 rounded-2xl bg-red-400/5 border border-red-400/10 text-center">
                    <div className="text-2xl font-bold text-red-400">{MOCK_RESULT.risks.high}</div>
                    <div className="text-[10px] uppercase tracking-wider text-red-400/50">High</div>
                  </div>
                  <div className="flex-1 md:w-24 p-4 rounded-2xl bg-yellow-400/5 border border-yellow-400/10 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{MOCK_RESULT.risks.medium}</div>
                    <div className="text-[10px] uppercase tracking-wider text-yellow-400/50">Medium</div>
                  </div>
                  <div className="flex-1 md:w-24 p-4 rounded-2xl bg-green-400/5 border border-green-400/10 text-center">
                    <div className="text-2xl font-bold text-green-400">{MOCK_RESULT.risks.low}</div>
                    <div className="text-[10px] uppercase tracking-wider text-green-400/50">Low</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-10 border-t border-violet/10">
                <h3 className="text-sm font-medium uppercase tracking-widest text-cream/30 mb-4">Executive Summary</h3>
                <p className="text-lg text-cream/80 leading-relaxed italic">
                  &quot;{MOCK_RESULT.summary}&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Clauses */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium uppercase tracking-widest text-cream/30 flex items-center gap-2 px-2">
              Detailed Findings <ChevronRight className="w-3 h-3" />
            </h3>
            {MOCK_RESULT.clauses.map((clause, idx) => (
              <Card key={idx} className="bg-white/[0.02] border-white/5 hover:border-violet/20 transition-all">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet">{clause.tag}</span>
                    <span className={cn(
                      "text-[10px] px-3 py-1 rounded-full border font-bold uppercase tracking-wider",
                      clause.risk === "high" ? "text-red-400 bg-red-400/10 border-red-400/20" : "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
                    )}>
                      {clause.risk} risk
                    </span>
                  </div>
                  <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/5">
                    <p className="text-sm text-cream/40 italic leading-relaxed">
                      &quot;{clause.original}&quot;
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0"><Info className="w-5 h-5 text-violet" /></div>
                    <div>
                      <h4 className="text-sm font-medium text-violet mb-1">Plain English Explanation</h4>
                      <p className="text-cream/80 leading-relaxed">{clause.explanation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Steps */}
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-8">
              <h3 className="text-lg font-serif mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                Negotiation Strategy
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {MOCK_RESULT.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-cream/70 flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 shrink-0" />
                    {rec}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center pt-8">
            <Button size="lg" className="rounded-full px-12">
              <Download className="w-4 h-4 mr-2" />
              Download Full Report (PDF)
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
