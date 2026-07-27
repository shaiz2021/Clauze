"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BLOG_POSTS_LIST = Object.entries(BLOG_POSTS).map(([slug, post]) => ({
  slug,
  ...post,
}));

const CATEGORIES = ["All", "NDAs", "Freelance", "Employment", "Legal Basics"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS_LIST 
    : BLOG_POSTS_LIST.filter(post => post.category === activeCategory);

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />
      
      <main className="pt-[68px]">
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 sm:px-6 bg-s1">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-6 block">
                The Clauze Blog
              </span>
              <h1 className="font-serif italic font-normal text-[36px] sm:text-[44px] md:text-[64px] text-1 leading-[1.1] md:leading-[0.98] tracking-[-0.02em]">
                Plain English contract guides.
              </h1>
              <p className="font-body font-light text-[17px] md:text-[20px] text-2 leading-[1.8] md:leading-[1.85] mt-6 max-w-2xl mx-auto">
                Practical articles on NDA review, freelance contract review, employment contract review, and the legal basics
                people miss in the fine print.
              </p>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 md:py-[120px] px-5 sm:px-6 bg-s0">
          <div className="max-w-7xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 md:mb-14">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 md:px-5 h-9 md:h-10 rounded-full text-[12px] md:text-[13px] font-body font-medium transition-all duration-200 ${
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post, i) => (
                <FadeUp key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-card border border-[var(--border)] rounded-[16px] overflow-hidden hover:-translate-y-1 hover:border-[var(--border-violet)] hover:shadow-[0_20px_60px_rgba(123,110,246,0.12)] transition-all duration-300 min-h-[300px] md:min-h-[320px]"
                  >
                    <div className="p-6 sm:p-[28px] flex flex-col h-full">
                      <span className="inline-flex items-center px-3 h-7 md:h-8 bg-violet/10 text-violet text-[10px] md:text-[11px] font-body font-medium uppercase tracking-[0.2em] rounded-full mb-4 w-fit">
                        {post.category}
                      </span>
                      <h2 className="font-display font-bold text-[20px] md:text-[22px] text-1 mb-3 leading-tight">
                        {post.title}
                      </h2>
                      <p className="font-body font-light text-[15px] md:text-[16px] text-2 leading-[1.8] md:leading-[1.85] mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                        <div className="font-body text-[12px] md:text-[13px] text-3">
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
