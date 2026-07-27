import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Not Legal Advice | Clauze",
  description:
    "Clauze is a contract reading tool and does not provide legal advice. Understand the limits and when to consult a lawyer.",
  alternates: { canonical: "/disclaimer" },
  openGraph: { title: "Not Legal Advice | Clauze", url: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s0">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                Legal
              </span>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] md:text-[56px] text-1 leading-[1.1] md:leading-[1.05]">
                Not Legal Advice
              </h1>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9] mt-6">
                Clauze helps you read and understand contracts. It does not provide legal advice, legal representation,
                or guarantee outcomes.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
            {[
              {
                title: "Clauze is a reading tool",
                body: "Clauze is a contract review tool that highlights clauses and explains language in plain English. It is designed to help you understand a contract faster and notice risk earlier.",
              },
              {
                title: "No lawyer-client relationship",
                body: "Using Clauze does not create a lawyer-client relationship. Clauze is not a substitute for advice from a qualified attorney.",
              },
              {
                title: "Accuracy limits",
                body: "Automated analysis can be wrong or incomplete. You should independently verify important terms and consult counsel when needed.",
              },
              {
                title: "What Clauze is good for",
                body: "A fast first pass on NDA review, freelance contract review, and employment contract review. It helps you identify liability caps, termination clauses, IP assignment, and payment terms that deserve attention.",
              },
              {
                title: "What Clauze is not",
                body: "Clauze does not interpret laws for your jurisdiction, negotiate on your behalf, or assess your full business context. It cannot guarantee that a clause is enforceable or invalid.",
              },
              {
                title: "When to consult a lawyer",
                body: "If the contract involves high financial risk, employment disputes, equity, litigation exposure, regulatory requirements, or you are unsure what a clause means, consult a qualified lawyer.",
              },
              {
                title: "How to use Clauze responsibly",
                body: "Use the output to build a list of questions, propose safer wording, and decide whether to sign. For important contracts, treat Clauze as a checklist and pair it with professional review.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.05}>
                <div className="bg-card border rounded-[16px] p-6 sm:p-[28px]">
                  <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-3">{item.title}</h2>
                  <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9]">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
