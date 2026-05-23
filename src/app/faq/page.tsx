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
        a: "Clauze is a contract reading tool that explains legal jargon in plain English. Paste any contract and Clauze will flag risky clauses, give them a risk score, and tell you what to do next. Clauze is not a law firm and does not provide legal advice."
      },
      {
        q: "What contract types can Clauze read?",
        a: "Clauze reads NDAs, freelance contracts, employment agreements, SaaS terms, partnership agreements, rental agreements and most standard commercial contracts. Clauze works best with English-language contracts from the US, UK, Canada and Australia."
      },
      {
        q: "Is this legal advice?",
        a: "No. Clauze is not a law firm and does not provide legal advice. Clauze is a reading and summarisation tool that helps you understand what a contract says before you decide whether to sign it or consult a professional."
      }
    ]
  },
  {
    title: "Privacy and Security",
    questions: [
      {
        q: "Is my contract stored or shared?",
        a: "Clauze does not store your contract text beyond your active session. Free users have no data saved after they close the tab. Users with an account get a private scan history. We do not sell or share contract data."
      },
      {
        q: "How is my data protected?",
        a: "All uploads are encrypted using industry-standard TLS encryption. Contract text is processed in memory and is never written to disk. We use Firebase's secure infrastructure for any stored data."
      },
      {
        q: "Who can see my contracts?",
        a: "Only you. Your contracts are processed privately and are never shared with third parties. We do not use your contract data to train any machine learning models."
      }
    ]
  },
  {
    title: "Accuracy",
    questions: [
      {
        q: "How accurate is the analysis?",
        a: "Clauze identifies clauses that deviate from standard practices with high consistency. The system has been trained on thousands of contracts and legal documents. For high-stakes contracts always pair a Clauze scan with professional legal review."
      },
      {
        q: "What does the Clauze Score mean?",
        a: "The Clauze Score is a number from 0 to 100. Scores above 75 indicate a generally fair contract. Scores between 40 and 75 mean review is recommended. Scores below 40 indicate significant risk factors where professional advice should be sought."
      },
      {
        q: "Can Clauze replace a lawyer?",
        a: "No. While Clauze can identify many common issues and risky clauses, it cannot replace the judgement of a qualified legal professional. For complex contracts, high-stakes decisions, or anything with significant financial implications, always consult a lawyer."
      }
    ]
  },
  {
    title: "Plans and Billing",
    questions: [
      {
        q: "How long does an analysis take?",
        a: "Most contracts are fully analysed in under 30 seconds. Contracts over 15,000 words may take up to 90 seconds. Pro users get priority processing speed."
      },
      {
        q: "Can I download my report?",
        a: "Pro users and one-time scan purchasers receive a formatted PDF report with the full analysis, scores and recommendations. PDF download is coming soon for all users."
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <section key={section.title} className={`py-[100px] px-6 ${sectionIndex % 2 === 0 ? "bg-s0" : "bg-s2"}`}>
            <div className="max-w-[740px] mx-auto">
              <FadeUp>
                <h2 className="font-display font-bold text-[24px] text-1 mb-10 pb-4 border-b border-[var(--border)]">
                  {section.title}
                </h2>
              </FadeUp>

              <div className="space-y-4">
                {section.questions.map((item, questionIndex) => {
                  const globalIndex = sectionIndex * 3 + questionIndex;
                  return (
                    <FadeUp key={item.q} delay={questionIndex * 0.05}>
                      <div className="border rounded-[16px] overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--card-hover)] transition-colors"
                        >
                          <span className={cn(
                            "font-display font-bold text-[18px] transition-colors pr-4",
                            openFaq === globalIndex ? "text-violet" : "text-1"
                          )}>
                            {item.q}
                          </span>
                          <div className={cn(
                            "w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0",
                            openFaq === globalIndex ? "bg-violet border-violet rotate-45" : "border-[var(--border)]"
                          )}>
                            <span className={cn("text-[18px]", openFaq === globalIndex ? "text-white" : "text-3")}>+</span>
                          </div>
                        </button>
                        {openFaq === globalIndex && (
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
        <section className="py-[100px] px-6 bg-s1">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display font-extrabold text-[32px] text-1 mb-6">
                Still have questions?
              </h2>
              <p className="font-body font-light text-[18px] text-2 mb-8">
                Can not find what you are looking for? Reach out and we will get back to you.
              </p>
              <a
                href="mailto:hello@clauze.org"
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
