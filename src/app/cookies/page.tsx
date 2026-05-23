import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Cookie Policy — Clauze",
  description:
    "Cookie policy for Clauze covering essential cookies, authentication, and preferences.",
  alternates: { canonical: "/cookies" },
  openGraph: { title: "Cookie Policy — Clauze", url: "/cookies" },
};

export default function CookiesPage() {
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
                Cookie Policy
              </h1>
              <p className="font-body font-light text-[18px] text-2 leading-[1.9] mt-6">
                Cookies help Clauze run securely and remember your preferences. This page explains what we use and why.
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
                title: "Essential cookies",
                body: "Required for core functionality such as authentication, session security, and routing.",
              },
              {
                title: "Authentication cookies",
                body: "When you sign in, authentication providers may set cookies to keep your session active. These cookies are required for login and account access.",
              },
              {
                title: "Preferences",
                body: "We may store basic preferences such as theme selection so the interface stays consistent.",
              },
              {
                title: "How to manage cookies",
                body: "Most browsers allow you to block or delete cookies. Blocking essential cookies may prevent sign-in or other features from working properly.",
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

