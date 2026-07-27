import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Privacy Policy | Clauze",
  description:
    "Learn how Clauze handles contract text, account data, and analytics. Clarity first, minimal collection, and transparent controls.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy | Clauze", url: "/privacy" },
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9] mt-6">
                This policy explains what Clauze collects, why we collect it, and how you can control it. Clauze is a
                contract review tool, so we keep data collection minimal and focused on providing your contract analysis.
              </p>
              <p className="font-body font-light text-[13px] text-3 mt-4">
                Last updated: {new Date().getFullYear()}
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
            {[
              {
                title: "Account data",
                body: "If you create an account, we collect your email address and the minimum authentication data needed to keep you signed in. This is used to provide a dashboard experience and protect access to your analysis.",
              },
              {
                title: "Contract text and analysis",
                body: "When you run a scan, your contract text is processed to generate a Clauze Score, risk badges, and plain English clause explanations. Only upload contracts you have the right to share. For sensitive NDA review or employment contract review, consider redacting names, addresses, and account details before scanning.",
              },
              {
                title: "What we do not do",
                body: "We do not sell contract data. We do not publish your documents. We do not ask for your full identity to run a basic scan. If you want extra privacy, use the tool without saving history.",
              },
              {
                title: "Retention",
                body: "Retention depends on how you use the product. If you scan without saving history, content is intended to be kept only as long as necessary to return the result. If scan history is enabled for your account, past scan metadata may be kept so you can find your results again.",
              },
              {
                title: "Security",
                body: "Data is encrypted in transit using TLS. Access to authenticated pages is protected by Supabase authentication. No system is perfect, so treat Clauze as a fast risk review layer and consult a qualified lawyer for high-stakes agreements.",
              },
              {
                title: "Your choices",
                body: "You can choose not to create an account and still use Clauze. If you want to delete your account data, contact us and include the email address tied to your account.",
              },
              {
                title: "Contact",
                body: "For privacy questions, data deletion requests, or security concerns, contact our support inbox. If you are sharing a clause snippet, remove personal details first.",
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
