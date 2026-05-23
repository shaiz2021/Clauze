import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, Shield, FileText, Search, CheckCircle2 } from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "About Clauze — Read the Fine Print",
  description:
    "Clauze helps you understand contracts before you sign. Paste any agreement and Clauze flags risky clauses and explains them in plain English.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Clauze",
    description:
      "Clauze helps you understand contracts before you sign. Clear risk flags. Plain English explanations.",
    url: "/about",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Clauze",
    description:
      "Clauze helps you understand contracts before you sign. Clear risk flags. Plain English explanations.",
  },
  keywords: [
    "contract reader",
    "contract analysis",
    "plain English contracts",
    "NDA review",
    "freelance contract review",
    "terms and conditions",
    "legal tech",
  ],
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clauze",
  url: siteUrl,
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Clauze",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/blog?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteUrl}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([ORG_JSON_LD, WEBSITE_JSON_LD, BREADCRUMB_JSON_LD]),
          }}
        />

        <section className="pt-32 pb-24 px-6 bg-s0">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <div>
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                  About Clauze
                </span>
                <h1 className="font-display font-extrabold text-[40px] md:text-[56px] text-1 leading-[1.05] mb-8">
                  Contracts are written to be signed.
                  <br />
                  <span className="text-violet">Clauze is built to be read.</span>
                </h1>
                <div className="space-y-6">
                  <p className="font-body font-light text-[18px] text-2 leading-[1.9]">
                    Most people do not avoid contracts because they do not care. They avoid them because the
                    language is dense, the risks are buried, and the cost of being wrong feels high.
                  </p>
                  <p className="font-body font-light text-[18px] text-2 leading-[1.9]">
                    Clauze helps you understand what you are agreeing to. Paste any agreement and Clauze flags the
                    clauses that deserve attention, explains them in plain English, and suggests what to ask for.
                  </p>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/upload" className="btn-primary">
                    Try Clauze Free <ArrowRight size={18} />
                  </Link>
                  <Link href="/how-it-works" className="btn-secondary">
                    How it works
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border rounded-[16px] p-[28px]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-violet/10 flex items-center justify-center shrink-0">
                    <Shield size={20} className="text-violet" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-[22px] text-1 mb-2">
                      Clear risk, not legal theatre
                    </h2>
                    <p className="font-body font-light text-[16px] text-2 leading-[1.9]">
                      Clauze is a reading tool. It highlights where your risk sits and what would make a clause more
                      balanced. For high-stakes agreements, pair a Clauze scan with professional legal review.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      icon: <FileText size={18} className="text-violet" />,
                      title: "Bring your own contract",
                      body: "Paste text or upload a PDF. The scan stays focused on your document.",
                    },
                    {
                      icon: <Search size={18} className="text-violet" />,
                      title: "Clauze reads for patterns",
                      body: "Liability, payment terms, IP ownership, termination, non-competes, and more.",
                    },
                    {
                      icon: <CheckCircle2 size={18} className="text-violet" />,
                      title: "Get a plain English plan",
                      body: "Clear explanations and specific questions to ask before you sign.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-card-inner rounded-[12px] p-5 border border-[var(--border)]">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">{item.icon}</div>
                        <div>
                          <p className="font-display font-bold text-[16px] text-1 mb-1">{item.title}</p>
                          <p className="font-body font-light text-[15px] text-2 leading-[1.8]">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s1">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
                  What We Optimise For
                </span>
                <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-1">
                  Fast clarity, fewer surprises.
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Scan-level focus",
                  body: "You should understand the risky parts first: liability, IP, payment, termination, and non-competes.",
                },
                {
                  title: "Plain English",
                  body: "Every flagged clause comes with a short explanation you can actually use in a negotiation.",
                },
                {
                  title: "Actionable next step",
                  body: "Clauze suggests what to ask for, not generic advice.",
                },
              ].map((card, i) => (
                <FadeUp key={card.title} delay={i * 0.1}>
                  <div className="bg-card border rounded-[16px] p-[28px] card-hover">
                    <h3 className="font-display font-bold text-[22px] text-1 mb-3">{card.title}</h3>
                    <p className="font-body font-light text-[18px] text-2 leading-[1.85]">{card.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s2">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <FadeUp>
              <div>
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
                  Privacy
                </span>
                <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-1 mb-6">
                  Designed for sensitive text.
                </h2>
                <p className="font-body font-light text-[18px] text-2 leading-[1.9]">
                  Contracts contain details that matter. Clauze is built to minimise exposure: keep the interface simple,
                  avoid unnecessary data capture, and make it clear what happens to your text.
                </p>
              </div>
            </FadeUp>

            <div className="grid gap-6">
              {[
                {
                  title: "No cluttered dashboards",
                  body: "Upload, read, decide. The product stays focused on understanding the contract in front of you.",
                },
                {
                  title: "Clear boundaries",
                  body: "Clauze flags risk and explains language. It does not replace a lawyer or provide legal advice.",
                },
                {
                  title: "Your next step is obvious",
                  body: "Use the recommendations to negotiate, ask for clarifications, or decide to walk away.",
                },
              ].map((item, i) => (
                <FadeUp key={item.title} delay={0.1 + i * 0.1}>
                  <div className="bg-card border rounded-[16px] p-[28px]">
                    <h3 className="font-display font-bold text-[22px] text-1 mb-3">{item.title}</h3>
                    <p className="font-body font-light text-[18px] text-2 leading-[1.85]">{item.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s0">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-14">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
                  Next Step
                </span>
                <h2 className="font-serif italic text-[44px] md:text-[64px] text-1 leading-[1.05]">
                  Read the fine print. Finally.
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border rounded-[16px] p-[28px]">
                <p className="font-body font-light text-[18px] text-2 leading-[1.9]">
                  Try a free scan and see what changes when your contract is explained in plain English.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/upload" className="btn-primary">
                    Analyse My Contract <ArrowRight size={18} />
                  </Link>
                  <Link href="/pricing" className="btn-secondary">
                    See pricing
                  </Link>
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
