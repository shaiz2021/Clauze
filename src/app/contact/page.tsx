import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Clauze",
  description:
    "Contact Clauze for support, feedback, or partnerships. We respond as quickly as possible.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Clauze", url: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        <section className="pt-32 pb-24 px-6 bg-s0">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                Company
              </span>
              <h1 className="font-display font-extrabold text-[40px] md:text-[56px] text-1 leading-[1.05]">
                Contact
              </h1>
              <p className="font-body font-light text-[18px] text-2 leading-[1.9] mt-6 max-w-2xl">
                If you have a question about a scan, feedback on the product, or a partnership request, send a message
                and we will get back to you.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s1">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <FadeUp>
              <div className="bg-card border rounded-[16px] p-[28px]">
                <h2 className="font-display font-bold text-[22px] text-1 mb-3">Email</h2>
                <p className="font-body font-light text-[18px] text-2 leading-[1.9]">
                  Use email for support and account help.
                </p>
                <div className="mt-6">
                  <a
                    className="btn-primary"
                    href="mailto:support@clauze.org"
                  >
                    support@clauze.org <ArrowRight size={18} />
                  </a>
                </div>
                <p className="font-body font-light text-[14px] text-3 mt-6">
                  Replace this email with your real support inbox if needed.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border rounded-[16px] p-[28px]">
                <h2 className="font-display font-bold text-[22px] text-1 mb-3">Common links</h2>
                <div className="space-y-3">
                  {[
                    { label: "Pricing", href: "/pricing" },
                    { label: "FAQ", href: "/faq" },
                    { label: "How It Works", href: "/how-it-works" },
                    { label: "Try Free", href: "/upload" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block font-body text-[16px] text-2 hover:text-1 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

