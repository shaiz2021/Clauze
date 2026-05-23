import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Privacy Policy — Clauze",
  description:
    "Learn how Clauze handles contract text, account data, and analytics. Clarity first, minimal collection, and transparent controls.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy — Clauze", url: "/privacy" },
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="font-body font-light text-[18px] text-2 leading-[1.9] mt-6">
                This policy explains what Clauze collects, why, and how you control it. If you have questions, contact
                us via the Contact page.
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
                title: "What we collect",
                body: "Account email (if you create an account), basic authentication logs, and the information necessary to provide the product. Contract text is processed to generate your analysis. Avoid including unnecessary personal data.",
              },
              {
                title: "How contract text is used",
                body: "Contract text is used to produce the Clauze Score and clause breakdown. Do not upload contracts you do not have the right to share. If you need stronger guarantees, use a redacted copy.",
              },
              {
                title: "Analytics",
                body: "We may use basic analytics to understand performance and reliability. We avoid collecting sensitive contract content for analytics.",
              },
              {
                title: "Retention",
                body: "Retention depends on your plan and settings. If you scan without an account, content is not intended to be stored beyond the active session. If you have an account, scan history may be stored for your convenience.",
              },
              {
                title: "Security",
                body: "We use standard security practices. No system is perfect; use Clauze as part of a broader review process for high-stakes agreements.",
              },
              {
                title: "Your choices",
                body: "You can request deletion of your account data. You can also choose not to create an account and use the product without saving history.",
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

