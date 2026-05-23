"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const BLOG_POSTS = [
  {
    slug: "five-contract-clauses-cost-freelancers",
    title: "Five Contract Clauses That Cost Freelancers the Most",
    excerpt: "After scanning thousands of contracts, these are the clauses that consistently hurt freelancers the most. Learn what to watch for before you sign.",
    category: "Freelance",
    date: "January 15, 2024",
    readTime: "8 min read"
  },
  {
    slug: "what-nda-actually-means",
    title: "What an NDA Actually Means and What to Watch For",
    excerpt: "Non-disclosure agreements are everywhere in the creative industry. But are you signing away more than you realise?",
    category: "NDAs",
    date: "January 8, 2024",
    readTime: "6 min read"
  },
  {
    slug: "fair-vs-unfair-non-compete",
    title: "The Difference Between a Fair Non-Compete and an Unfair One",
    excerpt: "Non-competes can ruin your career if they are too broad. Here is how to tell the difference.",
    category: "Employment",
    date: "January 1, 2024",
    readTime: "10 min read"
  }
];

const CATEGORIES = ["All", "NDAs", "Freelance", "Employment", "Legal Basics"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="bg-ink text-chalk min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="text-label uppercase text-violet mb-6 block">The Clauze Blog</span>
              <h1 className="text-[48px] md:text-[72px] font-serif italic text-chalk mb-6 leading-none">
                The Clauze Blog.
              </h1>
              <p className="text-[20px] text-chalk-2 font-light">
                Plain English takes on the contracts people actually sign.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3 justify-center">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                      activeCategory === cat 
                        ? "bg-violet text-white" 
                        : "bg-ink-4 text-chalk-3 hover:text-chalk hover:bg-ink-5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post, i) => (
                  <FadeUp key={post.slug} delay={i * 0.1}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="group block bg-ink-4 border border-ink-5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-violet/30 hover:shadow-[0_20px_60px_rgba(123,110,246,0.12)] transition-all duration-300 min-h-[320px]"
                    >
                      <div className="p-8 flex flex-col h-full">
                        <span className="inline-block px-3 py-1 bg-violet/10 text-violet text-[11px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
                          {post.category}
                        </span>
                        <h2 className="text-[22px] font-syne font-bold text-chalk mb-4 leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-[16px] text-chalk-2 leading-relaxed mb-6 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink-5">
                          <div className="text-[13px] text-chalk-3">
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
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
