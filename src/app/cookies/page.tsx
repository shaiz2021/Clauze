import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "Cookie Policy | Clauze",
  description:
    "Cookie policy for Clauze covering essential cookies, authentication, and preferences.",
  alternates: { canonical: "/cookies" },
  openGraph: { title: "Cookie Policy | Clauze", url: "/cookies" },
};

export default function CookiesPage() {
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
                Cookie Policy
              </h1>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-[1.8] md:leading-[1.9] mt-6">
                Cookies help Clauze run securely and remember your preferences. This page explains what we use and why.
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
                title: "Essential cookies",
                body: "Essential cookies are required for core functionality like authentication, session security, and routing. Without them, sign-in and account pages will not work correctly.",
              },
              {
                title: "Authentication cookies",
                body: "When you sign in, Supabase authentication uses cookies to keep your session active and protect account access. These cookies help prevent repeated logins and support secure sign out.",
              },
              {
                title: "Preferences",
                body: "We may store basic preferences such as theme selection so the interface stays consistent across visits. Preference storage may use cookies or local storage depending on your browser.",
              },
              {
                title: "Analytics and performance",
                body: "If analytics are enabled, they are used to improve reliability and performance. We avoid collecting sensitive contract text for analytics.",
              },
              {
                title: "How to manage cookies",
                body: "Most browsers allow you to block or delete cookies. Blocking essential cookies may prevent sign-in or other features from working properly.",
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
