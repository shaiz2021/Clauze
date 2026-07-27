"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowRight, Shield, FileText, Search, CheckCircle2, Lock, Scale, Zap, Gavel, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Script from "next/script";

const STEPS = [
  {
    step: "01",
    icon: <FileText size={40} />,
    title: "Paste or Upload",
    body: "Drop in your PDF or paste the contract text. Clauze accepts NDAs, freelance agreements, employment contracts, SaaS terms and more."
  },
  {
    step: "02",
    icon: <Search size={40} />,
    title: "Clauze Reads It",
    body: "Every clause gets categorised and scored. Clauze looks for liability traps, payment terms, IP grabs, non-competes and termination clauses."
  },
  {
    step: "03",
    icon: <CheckCircle2 size={40} />,
    title: "You Understand It",
    body: "Get a plain English breakdown of every flagged clause with a risk score and a clear recommendation. Know exactly what you are agreeing to."
  }
];

const DEMO_CLAUSES = [
  {
    risk: "high" as const,
    name: "Unlimited Liability",
    excerpt: "...shall be liable for any and all damages without limitation...",
    explanation: "You are personally responsible for all damages with no cap. This is far outside standard practice.",
    recommendation: "Add a liability cap equal to the total contract value."
  },
  {
    risk: "high" as const,
    name: "IP Ownership Grab",
    excerpt: "...all work product including works created outside this agreement...",
    explanation: "The client claims ownership of everything you create, even work unrelated to this project.",
    recommendation: "Limit IP transfer to work specifically created under this contract."
  },
  {
    risk: "medium" as const,
    name: "Extended Payment Terms",
    excerpt: "...payment shall be made within 60 days of invoice receipt...",
    explanation: "60 days is longer than industry standard. This means you wait two months to get paid.",
    recommendation: "Request payment within 14 to 30 days of invoice."
  },
  {
    risk: "low" as const,
    name: "Notice Period",
    excerpt: "...either party may terminate with 30 days written notice...",
    explanation: "Standard and fair. Either side can exit with reasonable notice.",
    recommendation: "Nothing. This clause is fine."
  }
];

const FEATURES = [
  { icon: <Lock size={36} />, title: "NDAs and Confidentiality", body: "Clauze checks how broadly the NDA is written, what counts as confidential and how long the obligation runs." },
  { icon: <FileText size={36} />, title: "Freelance Agreements", body: "Payment terms, revision limits, kill fees, and scope creep protections. All checked and explained." },
  { icon: <Scale size={36} />, title: "Employment Contracts", body: "Salary, equity, non-competes, termination conditions and garden leave clauses." },
  { icon: <Zap size={36} />, title: "SaaS and Software Terms", body: "Auto-renewal traps, data ownership, uptime guarantees and liability caps in software agreements." },
  { icon: <Gavel size={36} />, title: "Intellectual Property", body: "Who owns what you create and when. Clauze flags anything that goes beyond what is normal in your industry." },
  { icon: <AlertTriangle size={36} />, title: "Liability and Indemnity", body: "The clauses that can cost you the most. Unlimited liability, one-sided indemnification and missing caps." }
];

const FAQ_ITEMS = [
  { q: "Is my contract stored or shared?", a: "Clauze does not store your contract text beyond your active session. All users, including Free tier, require an account to process scans and view their private scan history." },
  { q: "What contract types can Clauze read?", a: "Clauze reads NDAs, freelance contracts, employment agreements, SaaS terms, partnership agreements, rental agreements and most standard commercial contracts." },
  { q: "Is this legal advice?", a: "Clauze is not a law firm and does not provide legal advice. Clauze is a reading and summarisation tool that helps you understand what a contract says." },
  { q: "How accurate is the analysis?", a: "Clauze identifies clauses that deviate from standard practices with high consistency. For high-stakes contracts always pair a Clauze scan with professional legal review." },
  { q: "How long does an analysis take?", a: "Most contracts are fully analysed in under 30 seconds. Contracts over 15,000 words may take up to 90 seconds." },
  { q: "Can I download my report?", a: "Starter and Pro users receive a formatted PDF report with the full analysis, scores and recommendations. This feature ensures you have a permanent record of your contract review." }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clauze",
    "url": "https://clauze.xyz",
    "logo": "https://clauze.xyz/icon.svg"
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Clauze",
    "applicationCategory": "BusinessApplication",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "1 scan per month, paste-text only"
      },
      {
        "@type": "Offer",
        "price": "2.99",
        "priceCurrency": "USD",
        "description": "Pay-per-use, includes PDF upload + report download"
      },
      {
        "@type": "Offer",
        "price": "15.99",
        "priceCurrency": "USD",
        "description": "Unlimited scans, includes PDF upload, report download, and scan history"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2400"
    }
  };

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="software-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 hero-dots overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none" />

          <div className="max-w-[800px] w-full text-center relative z-10">
            <FadeUp>
              <div className="flex items-center justify-center gap-2 mb-7">
                <div className="w-1.5 h-1.5 rounded-full bg-violet pulse-dot" />
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet">Contract Intelligence</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-serif italic text-[36px] sm:text-[48px] md:text-[80px] leading-[0.95] tracking-[-0.02em] mb-0">
                Read the fine print.<br />
                <span className="text-violet">Finally.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 mb-10 leading-[1.8] max-w-[600px] mx-auto">
                Paste any contract. Clauze flags every risky clause and explains it in plain English. Results in 30 seconds.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                <Link href="/upload" className="btn-primary w-full sm:w-auto justify-center px-8">
                  Try it for free
                </Link>
                <Link href="/pricing" className="btn-secondary w-full sm:w-auto justify-center px-8">
                  View pricing
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-body text-[12px] sm:text-[13px] text-4 tracking-wide uppercase">
                1 scan per month · Account required · No credit card
              </p>
            </FadeUp>

              {/* Hero Card */}
            <FadeUp delay={0.5}>
              <div className="max-w-[560px] mx-auto mt-12 md:mt-16 bg-card border border-violet rounded-[16px] p-5 sm:p-7 shadow-[0_0_80px_rgba(123,110,246,0.12),0_32px_64px_rgba(0,0,0,0.4)] animate-float overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[var(--card-hover)]" />
                    <div className="w-3 h-3 rounded-full bg-[var(--card-hover)]" />
                    <div className="w-3 h-3 rounded-full bg-[var(--card-hover)]" />
                  </div>
                  <div className="px-3 py-1 bg-risk-amber/10 border border-risk-amber/20 rounded-full text-risk-amber text-[11px] sm:text-[12px] font-bold">
                    Clauze Score: 41
                  </div>
                </div>
                <div className="space-y-4 font-mono text-[12px] sm:text-[13px]">
                  <div className="flex gap-4">
                    <span className="text-4 shrink-0">12</span>
                    <span className="text-2 leading-relaxed text-left">
                      The Company reserves the <span className="bg-risk-red/15 text-risk-red border-b-2 border-risk-red">right to terminate</span> this agreement...
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-4 shrink-0">13</span>
                    <span className="text-2 leading-relaxed text-left">
                      Employee shall not engage in any <span className="bg-risk-amber/15 text-risk-amber border-b-2 border-risk-amber">competing activity</span> for 24 months...
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-4 shrink-0">14</span>
                    <span className="text-2 leading-relaxed text-left">
                      All <span className="bg-risk-green/15 text-risk-green border-b-2 border-risk-green">Intellectual Property</span> created during employment...
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* SOCIAL PROOF */}
        <section className="py-6 md:h-[72px] flex items-center justify-center bg-s1 px-5">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
            <Shield size={16} className="text-violet shrink-0" />
            <p className="font-body text-[13px] md:text-[14px] text-3">
              Used by freelancers, founders and remote workers in 40 countries
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <div className="text-center mb-12 md:mb-20">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">The Process</span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[52px] text-1">Three steps. No confusion.</h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {STEPS.map((item, i) => (
                <FadeUp key={item.step} delay={i * 0.15}>
                  <div className="group relative min-h-[260px] md:min-h-[280px] p-6 sm:p-[28px] bg-card border rounded-[16px] card-hover">
                    <span className="absolute top-[28px] right-[28px] text-[64px] sm:text-[96px] font-display font-extrabold text-violet/5 select-none leading-none">{item.step}</span>
                    <div className="text-violet mb-8">{item.icon}</div>
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-4">{item.title}</h3>
                    <p className="font-body font-light text-[16px] md:text-[18px] text-2 leading-[1.8]">{item.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* DEMO SECTION */}
        <section id="demo" className="py-16 md:py-[120px] px-5 sm:px-6 bg-s1">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">See It In Action</span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[52px] text-1">A real contract. A real analysis.</h2>
              </div>
            </FadeUp>

            {/* Column labels */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto mb-6">
              <div className="text-center">
                <span className="font-body font-medium text-[12px] uppercase tracking-widest text-3 flex items-center justify-center gap-2">
                  <FileText size={14} /> The Contract
                </span>
              </div>
              <div className="text-center">
                <span className="font-body font-medium text-[12px] uppercase tracking-widest text-3 flex items-center justify-center gap-2">
                  The Analysis
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto items-start">
              {/* LEFT - Contract */}
              <FadeUp delay={0.1} className="md:sticky md:top-24 order-2 md:order-1">
                <div className="bg-card border rounded-[16px] p-5 sm:p-[28px] overflow-hidden">
                  <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-[var(--border)]">
                    <FileText size={20} className="text-violet" />
                    <span className="font-body font-medium text-[14px] text-2">Non-Disclosure Agreement</span>
                    <span className="ml-auto px-2 py-0.5 bg-violet-dim text-violet text-[10px] font-bold uppercase rounded">NDA</span>
                  </div>
                  <p className="text-[10px] text-3 mb-4">Client · Freelancer · 2025</p>
                  <div className="space-y-3 font-mono text-[12px] sm:text-[13px] leading-[1.8]">
                    {[
                      { n: 1, t: "This Non-Disclosure Agreement (&quot;Agreement&quot;) is entered into...", h: null },
                      { n: 2, t: "between the Disclosing Party and the Receiving Party.", h: null },
                      { n: 3, t: "The Receiving Party agrees to hold all Confidential Information...", h: null },
                      { n: 4, t: "in strict confidence and not disclose to any third party.", h: null },
                      { n: 5, t: "The Client shall indemnify and hold harmless the Contractor", h: "red" },
                      { n: 6, t: "from any and all claims, damages, losses, and expenses...", h: "red" },
                      { n: 7, t: "Payment shall be due within 60 days of invoice receipt.", h: "amber" },
                      { n: 8, t: "Either party may terminate with 30 days written notice.", h: "green" },
                      { n: 9, t: "This Agreement shall be governed by the laws of the State.", h: null },
                      { n: 10, t: "Any disputes arising shall be settled in the competent courts.", h: null },
                      { n: 11, t: "The prevailing party shall be entitled to recover legal fees.", h: null },
                      { n: 12, t: "This Agreement constitutes the entire understanding of parties.", h: null },
                      { n: 13, t: "No amendment shall be valid unless in writing and signed.", h: null },
                      { n: 14, t: "If any provision is held invalid, the remainder remains in effect.", h: null },
                      { n: 15, t: "Neither party may assign rights without prior written consent.", h: null },
                      { n: 16, t: "The obligations of confidentiality shall survive termination.", h: null },
                      { n: 17, t: "for a period of five (5) years from the date of disclosure.", h: null },
                      { n: 18, t: "IN WITNESS WHEREOF, the parties have executed this Agreement.", h: null },
                    ].map((line) => (
                      <div key={line.n} className="flex gap-4">
                        <span className="text-4 w-5 shrink-0 text-right">{line.n}</span>
                        <span className={cn(
                          "leading-relaxed text-left",
                          line.h === "red" && "bg-risk-red/15 text-risk-red border-b-2 border-risk-red",
                          line.h === "amber" && "bg-risk-amber/15 text-risk-amber border-b-2 border-risk-amber",
                          line.h === "green" && "bg-risk-green/15 text-risk-green border-b-2 border-risk-green"
                        )}>{line.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* RIGHT - Analysis */}
              <FadeUp delay={0.2} className="order-1 md:order-2">
                <div className="bg-card border rounded-[16px] p-5 sm:p-[28px] flex flex-col gap-4">
                  {/* Score */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] shrink-0 mx-auto sm:mx-0">
                      <svg className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="42" className="fill-none stroke-[var(--border)]" strokeWidth="8" />
                        <circle cx="50" cy="50" r="42" className="fill-none stroke-risk-amber" strokeWidth="8" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="156" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[24px] sm:text-[28px] font-display font-extrabold text-1 leading-none">41</span>
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-body font-medium text-[11px] sm:text-[12px] uppercase tracking-widest text-3 mb-1">Clauze Score</p>
                      <p className="font-display font-extrabold text-[36px] sm:text-[48px] text-1 leading-none">41</p>
                      <p className="font-body font-light text-[13px] sm:text-[14px] text-3">2 high risk · 1 review · 1 safe</p>
                    </div>
                  </div>

                  {/* Clause cards */}
                  {DEMO_CLAUSES.map((clause, i) => (
                    <div key={i} className="bg-card-inner rounded-[12px] p-4 pl-5 relative border-l-[3px]"
                      style={{ borderLeftColor: clause.risk === "high" ? "var(--risk-red)" : clause.risk === "medium" ? "var(--risk-amber)" : "var(--risk-green)" }}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                          clause.risk === "high" ? "bg-risk-red/15 text-risk-red" : clause.risk === "medium" ? "bg-risk-amber/15 text-risk-amber" : "bg-risk-green/15 text-risk-green"
                        )}>{clause.risk}</span>
                        <span className="font-display font-bold text-[16px] text-1">{clause.name}</span>
                      </div>
                      <p className="font-mono text-[11px] sm:text-[12px] text-3 line-clamp-1 mb-2">&quot;{clause.excerpt}&quot;</p>
                      <p className="font-body font-light text-[14px] sm:text-[15px] text-2 line-clamp-2 mb-2">{clause.explanation}</p>
                      <p className="font-body font-medium text-[13px] sm:text-[14px] text-1 flex items-center gap-2 text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                        {clause.recommendation}
                      </p>
                    </div>
                  ))}

                  <Link href="/upload" className="btn-primary h-[48px] mt-2 w-full justify-center">
                    Analyse Your Own Contract <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FEATURES */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <div className="text-center mb-12 md:mb-20">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">What Clauze Covers</span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[52px] text-1">Every clause type. Every contract.</h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, i) => (
                <FadeUp key={feature.title} delay={i * 0.1}>
                  <div className="group min-h-[180px] md:min-h-[200px] p-6 sm:p-[28px] bg-card border rounded-[16px] card-hover">
                    <div className="text-violet mb-6">{feature.icon}</div>
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-3">{feature.title}</h3>
                    <p className="font-body font-light text-[17px] md:text-[18px] text-2 leading-relaxed">{feature.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* STATS */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "40+", label: "Countries" },
              { val: "2,400+", label: "Contracts Scanned" },
              { val: "6", label: "Clause Types Covered" },
              { val: "30s", label: "Average Analysis Time" },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center relative md:border-r last:border-0 border-[var(--border)]">
                  <div className="font-display font-extrabold text-[40px] md:text-[72px] text-violet leading-none mb-2">{stat.val}</div>
                  <div className="font-body text-[14px] md:text-[16px] text-3">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* PRICING */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s2">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10 md:mb-12">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">Simple Pricing</span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[52px] text-1">Start free. Upgrade when ready.</h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="font-body font-light text-[17px] md:text-[18px] text-2 text-center mb-12 md:mb-16 leading-[1.8] max-w-2xl mx-auto">
                Start with a Free scan today or upgrade for PDF uploads, report downloads, and unlimited access.
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Free */}
              <FadeUp delay={0.2}>
                <div className="p-6 sm:p-[28px] bg-card border rounded-[16px]">
                  <h3 className="font-display font-bold text-[22px] md:text-[24px] text-1 mb-2">Free</h3>
                  <div className="font-display font-bold text-[36px] md:text-[40px] text-1 mb-1">$0<span className="text-[18px] text-3 font-light">/month</span></div>
                  <p className="font-body font-light text-[15px] md:text-[16px] text-3 mb-8 leading-[1.8]">1 scan per month. Paste text only. Essential risk summary.</p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> 1 scan per month</li>
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> Paste-text only</li>
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-3"><X size={18} className="text-4 shrink-0" aria-label="Not included" /> PDF upload</li>
                  </ul>
                  <Link href="/signup" className="btn-secondary w-full justify-center">Sign up free</Link>
                </div>
              </FadeUp>

              {/* Starter */}
              <FadeUp delay={0.3}>
                <div className="p-6 sm:p-[28px] bg-card border-2 border-violet rounded-[16px] shadow-[0_0_40px_rgba(123,110,246,0.15)] relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Best Value</div>
                  <h3 className="font-display font-bold text-[22px] md:text-[24px] text-1 mb-2">Starter</h3>
                  <div className="font-display font-bold text-[36px] md:text-[40px] text-1 mb-1">$2.99<span className="text-[18px] text-3 font-light">/scan</span></div>
                  <p className="font-body font-light text-[15px] md:text-[16px] text-3 mb-8 leading-[1.8]">Pay-per-use deep scan. Includes PDF upload and report download.</p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> PDF upload</li>
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> PDF report download</li>
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> Pay-per-use</li>
                  </ul>
                  <Link href="/signup" className="btn-primary w-full justify-center">Buy a Scan</Link>
                </div>
              </FadeUp>

              {/* Pro */}
              <FadeUp delay={0.4}>
                <div className="p-6 sm:p-[28px] bg-card border rounded-[16px]">
                  <h3 className="font-display font-bold text-[22px] md:text-[24px] text-1 mb-2">Pro</h3>
                  <div className="font-display font-bold text-[36px] md:text-[40px] text-1 mb-1">$15.99<span className="text-[18px] text-3 font-light">/month</span></div>
                  <p className="font-body font-light text-[15px] md:text-[16px] text-3 mb-8 leading-[1.8]">Unlimited scans and history. For professionals who review frequently.</p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> Unlimited scans</li>
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> Scan history</li>
                    <li className="flex items-center gap-3 font-body text-[15px] md:text-[16px] text-2"><CheckCircle2 size={18} className="text-violet shrink-0" aria-label="Included" /> Priority support</li>
                  </ul>
                  <Link href="/signup" className="btn-secondary w-full justify-center">Get Pro</Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ */}
        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-[740px] mx-auto">
            <FadeUp>
              <div className="text-center mb-12 md:mb-20">
                <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">Common Questions</span>
                <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[52px] text-1">The questions people actually ask.</h2>
              </div>
            </FadeUp>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="border rounded-[16px] overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[var(--card-hover)] transition-colors"
                    >
                      <span className={cn(
                        "font-display font-bold text-[18px] md:text-[20px] transition-colors pr-4",
                        openFaq === i ? "text-violet" : "text-1"
                      )}>
                        {item.q}
                      </span>
                      <div className={cn(
                        "w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0",
                        openFaq === i ? "bg-violet border-violet rotate-45" : "border-[var(--border)]"
                      )}>
                        <span className={cn("text-[18px]", openFaq === i ? "text-white" : "text-3")}>+</span>
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 font-body font-light text-[16px] md:text-[17px] text-2 leading-[1.8]">
                        {item.a}
                      </div>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FINAL CTA */}
        <section className="py-20 md:py-[140px] px-5 sm:px-6 bg-s2 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet/10 rounded-full blur-[60px] md:blur-[120px]" />
          </div>
          <div className="max-w-[700px] mx-auto text-center relative z-10">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">Start Today</span>
              <h2 className="font-serif italic text-[36px] sm:text-[48px] md:text-[72px] text-1 mb-6 leading-none">Know what you are signing.</h2>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 mb-10">Your first scan is free. No account needed.</p>
              <Link href="/upload" className="btn-primary h-[56px] px-10 md:px-12 text-[15px] md:text-[16px] rounded-full w-full sm:w-auto justify-center">
                Analyse My Contract <ArrowRight size={18} />
              </Link>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex text-risk-amber text-[20px]">★★★★★</div>
                <p className="font-body font-light text-[12px] sm:text-[13px] text-3">4.9 from 2,400 scans</p>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
