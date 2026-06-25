"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { cn } from "@/lib/utils";

const FAQ_SECTIONS = [
  {
    title: "About Clauze",
    questions: [
      {
        q: "What is Clauze?",
        a: "Clauze is a contract review tool that reads your agreement and explains the key clauses in plain English. You paste a contract or upload a PDF, and Clauze highlights risk areas like liability, IP ownership, payment terms, termination, and non-competes. It is designed to help you understand what you are signing, not to replace a lawyer."
      },
      {
        q: "What contract types can Clauze read?",
        a: "Clauze works well for NDA review, freelance contract review, employment contract review, and SaaS terms. It can also handle most standard commercial agreements written in English. If a contract is highly specialized, scan it anyway and treat the output as a structured first pass."
      },
      {
        q: "Is this legal advice?",
        a: "No. Clauze is not a law firm and does not provide legal advice. Use it to understand the language, spot risk early, and prepare better questions for negotiation or professional review."
      }
    ]
  },
  {
    title: "Privacy and Security",
    questions: [
      {
        q: "Is my contract stored or shared?",
        a: "Your contract text is sent for analysis to generate your results. Clauze does not sell or share contract data. If you use the product without saving history, the platform is designed to avoid long-term storage of your contract text beyond what is needed to generate the analysis."
      },
      {
        q: "How is my data protected?",
        a: "Traffic is encrypted in transit using TLS. Authentication is handled through Supabase. For sensitive contracts, use a redacted copy and avoid including unnecessary personal data."
      },
      {
        q: "Who can see my contracts?",
        a: "Only you can view your results inside your account. Do not paste contracts you do not have the right to share. If you want extra caution, remove names, addresses, and bank details before scanning."
      }
    ]
  },
  {
    title: "Accuracy",
    questions: [
      {
        q: "How accurate is the analysis?",
        a: "Clauze is best for identifying common contract red flags and summarising clauses in plain English. Accuracy depends on contract quality and how clearly clauses are written. For high-stakes agreements, treat the output as a first pass and consult a qualified lawyer."
      },
      {
        q: "What does the Clauze Score mean?",
        a: "The Clauze Score is a number from 0 to 100. Scores above 75 indicate a generally fair contract. Scores between 40 and 75 mean review is recommended. Scores below 40 indicate significant risk factors where professional advice should be sought."
      },
      {
        q: "Can Clauze replace a lawyer?",
        a: "No. Clauze helps you read and understand a contract. A lawyer helps you apply law to your situation, negotiate strategy, and assess risk in context."
      }
    ]
  },
  {
    title: "Plans and Billing",
    questions: [
      {
        q: "How long does an analysis take?",
        a: "Most contracts complete in under a minute. Longer documents can take more time, depending on length and complexity."
      },
      {
        q: "Can I download my report?",
        a: "Report export is planned. For now, you can copy key clauses and recommendations, and keep your contract text in your own notes. If you want PDF exports first, tell me your preferred report layout and I will prioritize it."
      },
      {
        q: "What happens when my free scan limit is reached?",
        a: "Free accounts are limited to 1 scan per month. When you reach your limit, you can upgrade to Pro for unlimited scans, wait until your monthly reset, or purchase a one-time scan."
      },
      {
        q: "Can I cancel my Pro subscription at any time?",
        a: "Yes. Pro subscriptions can be cancelled at any time from your account settings. Your access continues until the end of your current billing period."
      }
    ]
  }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">Common Questions</span>
              <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-1 mb-6">
                The questions people actually ask.
              </h1>
              <p className="font-body font-light text-[20px] text-2 max-w-2xl mx-auto">
                Everything you need to know about Clauze, grouped by topic.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ Sections */}
        {FAQ_SECTIONS.map((section, sectionIndex) => (
          <section key={section.title} className={`py-[120px] px-6 ${sectionIndex % 2 === 0 ? "bg-s0" : "bg-s2"}`}>
            <div className="max-w-[740px] mx-auto">
              <FadeUp>
                <h2 className="font-display font-bold text-[24px] text-1 mb-10 pb-4 border-b border-[var(--border)]">
                  {section.title}
                </h2>
              </FadeUp>

              <div className="space-y-4">
                {section.questions.map((item, questionIndex) => {
                  const id = `${sectionIndex}:${questionIndex}`;
                  return (
                    <FadeUp key={item.q} delay={questionIndex * 0.05}>
                      <div className="border rounded-[16px] overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === id ? null : id)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--card-hover)] transition-colors"
                        >
                          <span className={cn(
                            "font-display font-bold text-[18px] transition-colors pr-4",
                            openFaq === id ? "text-violet" : "text-1"
                          )}>
                            {item.q}
                          </span>
                          <div className={cn(
                            "w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0",
                            openFaq === id ? "bg-violet border-violet rotate-45" : "border-[var(--border)]"
                          )}>
                            <span className={cn("text-[18px]", openFaq === id ? "text-white" : "text-3")}>+</span>
                          </div>
                        </button>
                        {openFaq === id && (
                          <div className="px-6 pb-6 font-body font-light text-[17px] text-2 leading-[1.8]">
                            {item.a}
                          </div>
                        )}
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <SectionDivider />

        {/* Still have questions CTA */}
        <section className="py-[120px] px-6 bg-s1">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display font-extrabold text-[32px] text-1 mb-6">
                Still have questions?
              </h2>
              <p className="font-body font-light text-[18px] text-2 mb-8">
                If you cannot find what you are looking for, reach out and we will get back to you.
              </p>
              <a
                href="mailto:hello@clauze.xyz"
                className="btn-primary inline-flex"
              >
                Contact Us
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
