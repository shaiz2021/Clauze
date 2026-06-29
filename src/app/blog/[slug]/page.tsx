import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

import { BLOG_POSTS } from "@/lib/blog-posts";
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POSTS[params.slug];
  if (!post) return { title: "Post not found | Clauze" };

  return {
    title: `${post.title} | Clauze`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: `${post.title} | Clauze`,
      description: post.excerpt,
      url: `/blog/${params.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug];
  if (!post) notFound();

  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />
      
      <main className="pt-[68px]">
        <section className="pt-32 pb-24 px-6 bg-s0">
          <article className="max-w-[820px] mx-auto">
          <FadeUp>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-3 hover:text-violet transition-colors mb-10 font-body text-[14px]"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>
          </FadeUp>

          <FadeUp delay={0.1}>
            <span className="inline-flex items-center px-3 h-8 bg-violet/10 text-violet text-[11px] font-body font-medium uppercase tracking-[0.2em] rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-display font-extrabold text-[34px] md:text-[48px] text-1 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="font-body font-light text-[18px] text-2 leading-[1.9] max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 pb-8 mt-10 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-card border border-[var(--border)] flex items-center justify-center">
                  <span className="text-violet font-display font-bold">C</span>
                </div>
                <span className="text-2 font-body font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-3 text-[14px] font-body">
                <Calendar size={14} />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-3 text-[14px] font-body">
                <Clock size={14} />
                {post.readTime}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="prose-content mt-10">
              {post.content.trim().split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-display font-extrabold text-[28px] text-1 mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display font-bold text-[22px] text-1 mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={index} className="border-l-2 border-violet pl-6 py-3 my-8 bg-violet/5 rounded-r-xl">
                      <p className="text-2 italic font-body">{paragraph.replace('> ', '')}</p>
                    </blockquote>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="text-[18px] text-1 font-body font-medium my-6">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                  const items = paragraph.split('\n').filter(line => line.trim());
                  return (
                    <ul key={index} className="space-y-3 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[18px] text-2 font-body">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet mt-2.5 shrink-0" />
                          {item.replace(/^[0-9]+\. |[-*] /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-[18px] text-2 leading-[1.9] mb-6 font-body font-light">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-20 p-[28px] bg-card border border-[var(--border)] rounded-[16px] text-center">
              <h3 className="text-[24px] font-display font-bold text-1 mb-4">
                Ready to run your own contract review?
              </h3>
              <p className="text-2 mb-8 font-body font-light text-[18px] leading-[1.85]">
                Paste any contract and get a plain English breakdown, risk badges, and practical next steps.
              </p>
              <Link
                href="/upload"
                className="btn-primary inline-flex"
              >
                Analyse a contract
              </Link>
            </div>
          </FadeUp>
          </article>
        </section>

        <SectionDivider />

        <section className="py-[120px] px-6 bg-s1">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                title: "NDA review",
                body: "Spot broad confidentiality definitions, missing carve-outs, and one-sided remedies.",
                href: "/upload",
                cta: "Scan an NDA",
              },
              {
                title: "Freelance contract review",
                body: "Check payment terms, kill fees, scope creep clauses, IP ownership, and liability caps.",
                href: "/upload",
                cta: "Scan a freelance contract",
              },
              {
                title: "Employment contract review",
                body: "Review non-competes, non-solicits, IP assignment, termination terms, and dispute clauses.",
                href: "/upload",
                cta: "Scan an offer",
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.06}>
                <div className="bg-card border rounded-[16px] p-[28px] h-full flex flex-col">
                  <h3 className="font-display font-bold text-[22px] text-1 mb-3">{card.title}</h3>
                  <p className="font-body font-light text-[18px] text-2 leading-[1.85] flex-1">{card.body}</p>
                  <div className="mt-6">
                    <Link href={card.href} className="font-display font-semibold text-[15px] text-1 hover:text-violet transition-colors">
                      {card.cta} <span className="text-violet">→</span>
                    </Link>
                  </div>
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
