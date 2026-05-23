import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Terms of Service — Clauze",
  description:
    "Clauze Terms of Service covering acceptable use, limitations, and account responsibilities.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Service — Clauze", url: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        <section className="pt-32 pb-24 px-6 bg-s0">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                Legal
              </span>
              <h1 className="font-display font-extrabold text-[40px] md:text-[56px] text-1 leading-[1.05]">
                Terms of Service
              </h1>
              <p className="font-body font-light text-[18px] text-2 leading-[1.9] mt-6">
                By using Clauze, you agree to these terms. If you do not agree, do not use the service.
              </p>
              <p className="font-body font-light text-[14px] text-3 mt-4">
                Last updated: {new Date().getFullYear()}
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s1">
          <div className="max-w-3xl mx-auto space-y-10">
            {[
              {
                title: "What Clauze provides",
                body: "Clauze provides a contract-reading and summarisation experience that highlights clause risk and explains language in plain English. It is a productivity tool for understanding documents.",
              },
              {
                title: "Acceptable use",
                body: "Do not upload content you do not have the right to share. Do not use Clauze to break laws, violate privacy, or attempt to compromise the service.",
              },
              {
                title: "No legal advice",
                body: "Clauze is not a law firm and does not provide legal advice. You are responsible for your decisions. For high-stakes matters, consult a qualified lawyer.",
              },
              {
                title: "Accounts",
                body: "If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for activity under your account.",
              },
              {
                title: "Limitations",
                body: "Outputs may be incomplete or incorrect. Use Clauze as a first pass to find issues and questions to raise, not as a substitute for professional review.",
              },
              {
                title: "Changes",
                body: "We may update these terms as the product evolves. Continued use after updates means you accept the updated terms.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.05}>
                <div className="bg-card border rounded-[16px] p-[28px]">
                  <h2 className="font-display font-bold text-[22px] text-1 mb-3">{item.title}</h2>
                  <p className="font-body font-light text-[18px] text-2 leading-[1.9]">{item.body}</p>
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

