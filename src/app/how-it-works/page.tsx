"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, FileText, Search, CheckCircle2, Upload, Shield, Clock } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: <FileText size={48} />,
    title: "Paste or Upload",
    description: "Getting your contract into Clauze takes seconds. You can either drag and drop a PDF file directly onto the page, or paste the contract text from your clipboard. Clauze accepts PDFs, DOCX files, and plain text.",
    details: [
      "PDF, DOCX, or plain text formats",
      "Maximum file size: 10MB",
      "No account required for your first scan",
      "All uploads are encrypted end-to-end"
    ]
  },
  {
    step: "02",
    icon: <Search size={48} />,
    title: "Clauze Reads It",
    description: "Once your contract is uploaded, Clauze gets to work. Every single clause gets analysed, categorised, and scored. Clauze looks for the patterns that experienced lawyers know to watch out for.",
    details: [
      "Liability traps and unlimited exposure",
      "Payment terms and kill fees",
      "Intellectual property grabs",
      "Non-compete and non-solicitation clauses",
      "Termination conditions and penalties",
      "Auto-renewal and cancellation traps"
    ]
  },
  {
    step: "03",
    icon: <CheckCircle2 size={48} />,
    title: "You Understand It",
    description: "Within seconds, you receive a complete breakdown. Each flagged clause is explained in plain English, given a risk rating, and accompanied by a clear recommendation for what to do next.",
    details: [
      "Overall Clauze Score from 0 to 100",
      "High, medium, and low risk counts",
      "Plain English explanations",
      "Actionable next steps for each issue",
      "Full analysis in under 30 seconds"
    ]
  }
];

const CAPABILITIES = [
  { icon: <FileText size={24} />, title: "NDAs", description: "Confidentiality scope, duration, and exclusions" },
  { icon: <Upload size={24} />, title: "Freelance Contracts", description: "Payment terms, revisions, scope, and kill fees" },
  { icon: <Shield size={24} />, title: "Employment Agreements", description: "Salary, equity, non-competes, and termination" },
  { icon: <Clock size={24} />, title: "SaaS Terms", description: "Auto-renewal, data ownership, and liability caps" }
];

export default function HowItWorksPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">The Process</span>
              <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-1 mb-6">
                Three steps. No confusion.
              </h1>
              <p className="font-body font-light text-[20px] text-2 max-w-2xl mx-auto">
                Clauze breaks down complex legal contracts into plain English. Here is exactly how it works.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Steps */}
        {STEPS.map((step, index) => (
          <section key={step.step} className={`py-[120px] px-6 ${index % 2 === 0 ? "bg-s0" : "bg-s2"}`}>
            <div className="max-w-4xl mx-auto">
              <FadeUp>
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                  <div>
                    <span className="font-display font-extrabold text-[96px] text-violet/10 leading-none block mb-4">{step.step}</span>
                    <div className="text-violet mb-6">{step.icon}</div>
                    <h2 className="font-display font-bold text-[28px] text-1 mb-4">{step.title}</h2>
                  </div>
                  <div>
                    <p className="font-body font-light text-[18px] text-2 leading-[1.8] mb-8">
                      {step.description}
                    </p>
                    <ul className="space-y-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4 font-body text-[16px] text-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet mt-2.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>
        ))}

        <SectionDivider />

        {/* Contract Types */}
        <section className="py-[120px] px-6 bg-s2">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">What Clauze Reads</span>
                <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-1">
                  Every contract type.
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6">
              {CAPABILITIES.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.1}>
                  <div className="p-[28px] bg-card border rounded-[16px] card-hover">
                    <div className="text-violet mb-4">{item.icon}</div>
                    <h3 className="font-display font-bold text-[20px] text-1 mb-2">{item.title}</h3>
                    <p className="font-body font-light text-[16px] text-2">{item.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* CTA */}
        <section className="py-[120px] px-6 bg-s1">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-1 mb-6">
                Ready to understand your contracts?
              </h2>
              <p className="font-body font-light text-[18px] text-2 mb-10">
                Paste your contract text or upload a PDF. 1 scan per month included for free.
              </p>
              <Link href="/upload" className="btn-primary inline-flex">
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
