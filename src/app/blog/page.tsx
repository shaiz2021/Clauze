"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowUpRight } from "lucide-react";

const BLOG_POSTS = [
  {
    slug: "force-majeure-clause-explained",
    title: "Force Majeure Clauses Explained (Plain English + Negotiation Tips)",
    excerpt:
      "If a contract says “force majeure,” it is describing what happens when life disrupts performance. Here is what it really means and what to negotiate.",
    category: "Legal Basics",
    date: "May 19, 2026",
    readTime: "7 min read",
  },
  {
    slug: "governing-law-venue-jurisdiction",
    title: "Governing Law vs Venue vs Jurisdiction: The Clause People Ignore",
    excerpt:
      "This clause decides where disputes happen and which rules apply. In many contracts, it matters more than the payment section.",
    category: "Legal Basics",
    date: "May 18, 2026",
    readTime: "8 min read",
  },
  {
    slug: "limitation-of-liability-cap-explained",
    title: "Limitation of Liability Caps: What’s Fair (and What’s Dangerous)",
    excerpt:
      "A liability cap can save you from catastrophic risk. Here is how to spot missing caps, hidden carve-outs, and one-sided limits.",
    category: "Legal Basics",
    date: "May 17, 2026",
    readTime: "9 min read",
  },
  {
    slug: "indemnification-clause-explained",
    title: "Indemnification Clauses Explained: “Hold Harmless” in Plain English",
    excerpt:
      "Indemnities are where contracts quietly move legal risk onto you. Here is what “defend, indemnify, hold harmless” actually requires.",
    category: "Legal Basics",
    date: "May 16, 2026",
    readTime: "10 min read",
  },
  {
    slug: "offer-letter-vs-employment-contract",
    title: "Offer Letter vs Employment Contract: What’s Binding (and What Isn’t)",
    excerpt:
      "Not every offer letter is a full contract. Here is what parts typically bind you, what can change, and what to get in writing.",
    category: "Employment",
    date: "May 15, 2026",
    readTime: "7 min read",
  },
  {
    slug: "employment-non-solicitation-clause",
    title: "Non‑Solicit Clauses Explained: Clients, Coworkers, and Common Traps",
    excerpt:
      "Non‑solicits look small but can restrict your next move. Learn how they work, what to narrow, and how to spot hidden non‑compete language.",
    category: "Employment",
    date: "May 14, 2026",
    readTime: "9 min read",
  },
  {
    slug: "employment-ip-assignment-clause",
    title: "IP Assignment in Employment Contracts: What You Actually Give Up",
    excerpt:
      "IP clauses can claim your side projects and future work. Here is what to carve out, what “works made for hire” means, and what to negotiate.",
    category: "Employment",
    date: "May 13, 2026",
    readTime: "10 min read",
  },
  {
    slug: "freelance-kill-fee-termination",
    title: "Kill Fee Clauses: The Fair Way to Handle Client Cancellations",
    excerpt:
      "A kill fee protects freelancers when a client ends a project midstream. Here is a practical, negotiation-friendly approach.",
    category: "Freelance",
    date: "May 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "freelance-payment-terms-net-30",
    title: "Net 30, Net 60, Net 90: Payment Terms Freelancers Should Avoid",
    excerpt:
      "Payment terms decide your cash flow. Learn how to negotiate net terms, late fees, milestones, and a simple “pay on receipt” fallback.",
    category: "Freelance",
    date: "May 11, 2026",
    readTime: "9 min read",
  },
  {
    slug: "freelance-sow-scope-creep",
    title: "Statement of Work for Freelancers: Stop Scope Creep Before It Starts",
    excerpt:
      "A strong SOW prevents vague deliverables, endless revisions, and “just one more thing.” Here is a structure you can actually use.",
    category: "Freelance",
    date: "May 10, 2026",
    readTime: "10 min read",
  },
  {
    slug: "nda-permitted-disclosures-carveouts",
    title: "Permitted Disclosures and Carve‑Outs in NDAs: What to Always Ask For",
    excerpt:
      "Most NDA fights happen because the carve‑outs are missing. Here are the exceptions you should insist on, with simple examples.",
    category: "NDAs",
    date: "May 9, 2026",
    readTime: "8 min read",
  },
  {
    slug: "nda-confidential-information-definition",
    title: "Confidential Information Definition in an NDA (Plain English + Examples)",
    excerpt:
      "The definition of “Confidential Information” determines how risky an NDA is. Here is how to spot overly broad definitions and fix them.",
    category: "NDAs",
    date: "May 8, 2026",
    readTime: "9 min read",
  },
  {
    slug: "mutual-nda-red-flags",
    title: "Mutual NDA Red Flags: 7 Clauses That Quietly Trap You",
    excerpt:
      "Mutual NDAs sound fair, but they often hide one-sided terms. Here are the red flags to look for before you sign.",
    category: "NDAs",
    date: "May 7, 2026",
    readTime: "8 min read",
  },
  {
    slug: "five-contract-clauses-cost-freelancers",
    title: "Five Contract Clauses That Cost Freelancers the Most",
    excerpt:
      "After scanning thousands of contracts, these are the clauses that consistently hurt freelancers the most. Learn what to watch for before you sign.",
    category: "Freelance",
    date: "January 15, 2024",
    readTime: "8 min read",
  },
  {
    slug: "what-nda-actually-means",
    title: "What an NDA Actually Means and What to Watch For",
    excerpt:
      "Non-disclosure agreements are everywhere in the creative industry. But are you signing away more than you realise?",
    category: "NDAs",
    date: "January 8, 2024",
    readTime: "6 min read",
  },
  {
    slug: "fair-vs-unfair-non-compete",
    title: "The Difference Between a Fair Non-Compete and an Unfair One",
    excerpt: "Non-competes can ruin your career if they are too broad. Here is how to tell the difference.",
    category: "Employment",
    date: "January 1, 2024",
    readTime: "10 min read",
  },
];

const CATEGORIES = ["All", "NDAs", "Freelance", "Employment", "Legal Basics"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />
      
      <main className="pt-[68px]">
        <section className="pt-32 pb-24 px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                The Clauze Blog
              </span>
              <h1 className="font-serif italic font-normal text-[44px] md:text-[64px] text-1 leading-[0.98] tracking-[-0.02em]">
                Plain English contract guides.
              </h1>
              <p className="font-body font-light text-[18px] md:text-[20px] text-2 leading-[1.85] mt-6 max-w-2xl mx-auto">
                Practical articles on NDA review, freelance contract review, employment contract review, and the legal basics
                people miss in the fine print.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s0">
          <div className="max-w-7xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3 justify-center mb-14">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 h-10 rounded-full text-[13px] font-body font-medium transition-all duration-200 ${
                      activeCategory === cat 
                        ? "bg-violet text-white"
                        : "bg-card border border-[var(--border)] text-2 hover:text-1 hover:border-[var(--border-violet)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <FadeUp key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-card border border-[var(--border)] rounded-[16px] overflow-hidden hover:-translate-y-1 hover:border-[var(--border-violet)] hover:shadow-[0_20px_60px_rgba(123,110,246,0.12)] transition-all duration-300 min-h-[320px]"
                  >
                    <div className="p-[28px] flex flex-col h-full">
                      <span className="inline-flex items-center px-3 h-8 bg-violet/10 text-violet text-[11px] font-body font-medium uppercase tracking-[0.2em] rounded-full mb-4 w-fit">
                        {post.category}
                      </span>
                      <h2 className="font-display font-bold text-[22px] text-1 mb-3 leading-tight">
                        {post.title}
                      </h2>
                      <p className="font-body font-light text-[16px] text-2 leading-[1.85] mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                        <div className="font-body text-[13px] text-3">
                          <span>{post.date}</span>
                          <span className="mx-2">·</span>
                          <span>{post.readTime}</span>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="text-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
