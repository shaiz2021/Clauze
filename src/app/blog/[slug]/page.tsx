"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const BLOG_POSTS: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "five-contract-clauses-cost-freelancers": {
    title: "Five Contract Clauses That Cost Freelancers the Most",
    excerpt: "After scanning thousands of contracts, these are the clauses that consistently hurt freelancers the most.",
    category: "Freelance",
    author: "Clauze Team",
    date: "January 15, 2024",
    readTime: "8 min read",
    content: `
When you are just starting out as a freelancer, it is easy to get excited about a new client and sign whatever contract they put in front of you. But some clauses hide in the fine print that can cost you thousands of dollars, your intellectual property, or even your ability to work in your field.

Here are the five clauses that appear most often in bad freelance contracts, and what you can do about each one.

## 1. Unlimited Liability

This is the most dangerous clause in any freelance contract. It typically reads something like: "The Contractor shall indemnify and hold harmless the Client from any and all claims, damages, losses, and expenses."

What this actually means: If something goes wrong — even if it is not your fault — you could be personally responsible for an unlimited amount of money. There is no cap.

What to watch for: Any clause that uses the words "any and all" or "unlimited" liability. Also watch for clauses that require you to indemnify the client for things outside your control.

> Fair contracts typically cap liability at the total value of the contract or the amount you have been paid.

## 2. Broad IP Assignment

Many clients want to own everything you create, forever, regardless of whether it relates to the work you are doing for them. A clause like "All intellectual property created by Contractor during the term of this Agreement shall belong exclusively to Client" can mean they own your side projects too.

What this actually means: If you write a blog post on your own time about an industry topic, and your client happens to own the rights to everything you wrote that month, they technically own that blog post too.

What to watch for: Clauses that assign "all IP" or "all work product" without limiting it to work created specifically for the client as part of the project.

## 3. Non-Compete Clauses

Non-competes in freelance contracts are increasingly common and increasingly problematic. A clause might say you cannot work with any competitor for 12 months after the contract ends, anywhere in the world.

What this actually means: If you work with startups, you might be restricted from working with any other startup in your field for a year. If you work in tech, this could effectively prevent you from working at all.

What to watch for: Geographic restrictions that are too broad (anything more than a specific city or region), time periods longer than 6 months, or vague definitions of "competitor."

## 4. Kill Fees and Cancellation Penalties

Some contracts include clauses that allow clients to cancel at any time but still pay you nothing, or worse, charge you a penalty if you cancel.

What this actually means: You could spend weeks on a project, have the client cancel on day one, and receive nothing. Or you could want to leave a bad situation and be hit with a cancellation fee that exceeds what you would have earned.

What to watch for: Clauses that allow termination "for any reason or no reason" without notice or compensation. Also watch for "minimum engagement" clauses that lock you in.

## 5. Vague Scope Creep Provisions

Many contracts say something like "Client may request additional work at mutually agreed upon rates." This sounds reasonable until you are three months into a two-week project, working 60-hour weeks, and the client keeps adding features.

What this actually means: Without clear definitions of what is included in the project scope and what constitutes additional work, you can end up doing far more than you bargained for, for the same price.

What to watch for: Any contract that does not clearly define project scope, deliverables, revision rounds, or what happens when the client wants something outside the original agreement.

## How to Protect Yourself

The good news is that all of these clauses are negotiable. Here is what to push for:

1. **Cap your liability** at the contract value or your fee.
2. **Limit IP assignment** to work created specifically for the project.
3. **Narrow any non-compete** to specific clients and short time periods.
4. **Include minimum payment** for work completed if cancelled.
5. **Define scope clearly** and require signed change orders for additional work.

Before you sign your next contract, run it through Clauze. We will flag these clauses and explain exactly what they mean for you.
    `
  },
  "what-nda-actually-means": {
    title: "What an NDA Actually Means and What to Watch For",
    excerpt: "Non-disclosure agreements are everywhere in the creative industry. But are you signing away more than you realise?",
    category: "NDAs",
    author: "Clauze Team",
    date: "January 8, 2024",
    readTime: "6 min read",
    content: `
You have probably signed dozens of NDAs. They pop up in the creative industry all the time — before discussing a project, when visiting a client office, or even just to hear a pitch. But here is the thing: not all NDAs are created equal, and some of them are far more restrictive than they appear.

## What an NDA Is Supposed to Do

At its core, a non-disclosure agreement is simple. It says: "I will not share the confidential information I receive from this person or company."

The problem is that "confidential information" can be defined in very different ways, and the scope of what counts as "disclosure" can be surprisingly broad.

## The Three Parts of an NDA That Matter

### 1. What Counts as Confidential

A fair NDA limits confidential information to specific things: trade secrets, proprietary processes, client lists, financial data, or specific ideas shared during the relationship.

A problematic NDA might include: "All information shared during the term of this agreement" — which could mean even public information you already knew, or information you develop independently later.

**What to watch for:** Broad definitions of confidential information that include anything the other party decides is secret, or that extend to information you already have or will develop independently.

### 2. How Long It Lasts

NDAs typically have a time limit. Common terms are 2-5 years for the confidentiality obligation.

A problematic NDA might say: "Confidentiality obligations shall survive indefinitely" or "for as long as the information remains confidential" — which could be forever.

**What to watch for:** Infinite or vague time limits. Even 5 years is a long time in a fast-moving industry. Push for 2 years maximum.

### 3. What Constitutes Disclosure

Most NDAs focus on not telling others. But some include provisions that restrict what you can do with information even without telling anyone.

For example: "Recipient shall not use any Confidential Information for any purpose other than evaluating the proposed business relationship."

This sounds fine until you realise it might restrict you from working in the same field.

**What to watch for:** Use restrictions, not just disclosure restrictions. Also watch for clauses that prevent you from hiring the other party's employees.

## Common Problematic NDA Clauses

Here are the specific clauses that appear most often in NDAs that go too far:

**"All information is confidential unless marked otherwise."**
This puts the burden on you to know what is secret and what is not. Fair NDAs require information to be explicitly marked as confidential.

**"Information is confidential if it would be obvious to a reasonable person."**
This is impossibly vague. What is obvious to one person might not be obvious to another.

**"You cannot hire our employees."**
Yes, some NDAs include non-solicitation clauses that prevent you from hiring people who work at the other company. This can seriously limit your recruiting options.

**"You must return all information on request."**
This is standard, but watch for clauses that require you to destroy copies — including things stored in backup systems or cached on your devices.

A fair NDA should have a specific definition of what information is confidential, typically requiring it to be marked or designated in writing.

## How to Negotiate a Better NDA

Most NDAs are not set in stone. Here is what to push for:

1. **Limit what is confidential** to specifically marked information.
2. **Add a time limit** of 2 years maximum.
3. **Exclude publicly available information** from the definition of confidential.
4. **Exclude information you develop independently.**
5. **Remove employee non-solicitation** if it is included.
6. **Add a "reasonable person" standard** for determining what is confidential.

## When to Walk Away

Some NDAs are simply too restrictive to sign. If an NDA would prevent you from doing your job or working in your field, it is not worth signing. And remember: you can always ask for changes before signing. Most companies expect negotiation on NDAs, especially from contractors and consultants.

Before you sign your next NDA, read it carefully. And if you are not sure what it means, Clauze can help you understand exactly what you are agreeing to.
    `
  },
  "fair-vs-unfair-non-compete": {
    title: "The Difference Between a Fair Non-Compete and an Unfair One",
    excerpt: "Non-competes can ruin your career if they are too broad. Here is how to tell the difference.",
    category: "Employment",
    author: "Clauze Team",
    date: "January 1, 2024",
    readTime: "10 min read",
    content: `
Non-compete agreements have been getting a lot of attention lately. Several states have banned them entirely, the FTC is moving to restrict them nationally, and more workers are pushing back against clauses that feel like they are trapping them in a job.

But until the law catches up, non-competes remain common in many employment contracts — especially for executives, salespeople, and anyone with specialized knowledge. So how do you know if the non-compete you are being asked to sign is fair or unfair?

## What a Non-Compete Is supposed to Do

The basic idea behind a non-compete is to protect a business from having an employee leave and immediately take trade secrets or client relationships to a competitor. Courts in most states will enforce non-competes if they are:

1. **Reasonable in scope** — limited geographically and temporally
2. **Protecting a legitimate business interest** — like trade secrets or customer relationships
3. **Not too restrictive** — not preventing someone from making a living

## What Makes a Non-Compete Unfair

Here are the specific factors that make a non-compete unreasonable:

### Geographic Scope

A fair non-compete limits the geographic restriction to the area where the company actually does business or has a meaningful presence.

An unfair non-compete might say "anywhere in the United States" or "worldwide" — even if the company only operates in one city.

**What to watch for:** Geographic restrictions that extend beyond the company's actual market or operations. If they only have offices in Austin, a restriction covering all of Texas might be too broad.

### Time Duration

A fair non-compete is short — typically 6 months to 1 year after leaving.

An unfair non-compete might last 2 years, 3 years, or even longer. The longer the restriction, the more likely it is to be unreasonable.

**What to watch for:** Restrictions longer than 12 months. In most states, anything over 2 years is going to face serious scrutiny.

### What Counts as a Competitor

A fair non-compete defines "competitor" specifically — a company that offers the same products or services in the same market.

An unfair non-compete might define competitors so broadly that it covers almost any company in your industry.

**Example of a problematic definition:** "Any company that provides professional services" or "any company that does business in the technology sector."

### Scope of Restricted Activities

A fair non-compete limits you from doing the specific thing you did for your former employer — say, selling enterprise software to Fortune 500 companies.

An unfair non-compete might prevent you from doing any work in your field, even if it does not compete directly with your former employer.

## Real Examples of Fair vs. Unfair Non-Competes

### Fair Non-Compete Example

*"Employee agrees not to work for any company that provides residential real estate services within 25 miles of Austin, Texas, for a period of 6 months following termination."*

This is reasonable because:
- It has a specific geographic limit
- The time period is short
- It only covers direct competitors in the same market

### Unfair Non-Compete Example

*"Employee agrees not to engage in any business activity that competes with the Company, directly or indirectly, anywhere in the world, for a period of 24 months following termination."*

This is unreasonable because:
- It has no geographic limit
- The time period is excessive
- The definition of "competes" and "competing business" is vague

If you are being asked to sign a non-compete, always negotiate the terms before you sign. Once you sign, your leverage drops significantly.

## States Where Non-Competes Are Enforceable vs. Not

The legal landscape varies dramatically by state:

**Non-competes are largely unenforceable in:**
- California (banned for most workers)
- North Dakota
- Minnesota
- Oklahoma

**States with strong protections for employees:**
- Colorado (limited enforceability)
- Illinois (must be notified of restrictions)

**States where non-competes are routinely enforced:**
- Texas
- Florida
- New York
- Georgia

If you live in a state where non-competes are commonly enforced, it is especially important to negotiate fair terms before signing.

## How to Negotiate a Better Non-Compete

If you are being asked to sign a non-compete, here is what to push for:

### 1. Narrow the Geographic Scope
Request that the restriction only apply to the specific markets where your company operates. If they only have offices in three cities, the restriction should not cover the entire country.

### 2. Shorten the Time Period
Push for 6 months maximum. If they insist on 12 months, that is a reasonable compromise. Anything over 12 months should require significant additional consideration.

### 3. Define "Competitor" Specifically
Make sure "competitor" is defined narrowly. It should only cover companies that directly compete with your employer in the same market.

### 4. Add a "Garden Leave" Clause
A garden leave clause means that if the employer wants to enforce the non-compete, they must pay you your full salary during the restriction period.

### 5. Carve Out Your Skills and Knowledge
Make sure the non-compete does not prevent you from using general skills and knowledge you have developed.

## What to Do If You Have an Unfair Non-Compete

If you have already signed a non-compete and it seems unreasonable, here are your options:

1. **Consult a lawyer** — especially if you are in a high-paying field where a violation could lead to a lawsuit.
2. **Negotiate an exit** — when you leave, negotiate specifically for a release from the non-compete as part of your departure.
3. **Check your state law** — if you live in California or another state where non-competes are unenforceable, you may have more freedom than you think.
4. **Document everything** — if you are worried about a potential violation, document that you are not using confidential information or targeting former clients.

Non-competes are not going away anytime soon, but the legal and cultural environment is shifting. More workers are pushing back, and regulators are paying attention.

If you are asked to sign a non-compete, read it carefully. A fair non-compete should have a narrow geographic scope, a short time period, and a specific definition of what counts as a competitor. Before you sign any employment contract with a non-compete, let Clauze scan it first.
    `
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS[slug];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!post) {
    return (
      <div className="bg-ink text-chalk min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-syne font-bold text-chalk mb-4">Post not found</h1>
          <Link href="/blog" className="text-violet hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ink text-chalk min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-[720px] mx-auto">
          {/* Back Link */}
          <FadeUp>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-chalk-3 hover:text-violet transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>
          </FadeUp>

          {/* Header */}
          <FadeUp delay={0.1}>
            <span className="inline-block px-3 py-1 bg-violet/10 text-violet text-[11px] font-bold uppercase tracking-widest rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-[38px] md:text-[48px] font-syne font-extrabold text-chalk mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 pb-8 mb-12 border-b border-ink-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink-4 border border-ink-5 flex items-center justify-center">
                  <span className="text-violet font-bold">C</span>
                </div>
                <span className="text-chalk-2 font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-chalk-3 text-[14px]">
                <Calendar size={14} />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-chalk-3 text-[14px]">
                <Clock size={14} />
                {post.readTime}
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <div className="prose-content">
              {post.content.trim().split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-[28px] font-syne font-bold text-chalk mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-[22px] font-syne font-bold text-chalk mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={index} className="border-l-2 border-violet pl-6 py-2 my-8 bg-violet/5 rounded-r-xl">
                      <p className="text-chalk-2 italic">{paragraph.replace('> ', '')}</p>
                    </blockquote>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="text-[18px] text-chalk font-medium my-6">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                  const items = paragraph.split('\n').filter(line => line.trim());
                  return (
                    <ul key={index} className="space-y-3 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[18px] text-chalk-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet mt-2.5 shrink-0" />
                          {item.replace(/^[0-9]+\. |[-*] /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-[18px] text-chalk-2 leading-[1.9] mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.3}>
            <div className="mt-20 p-10 bg-ink-4 border border-ink-5 rounded-2xl text-center">
              <h3 className="text-[24px] font-syne font-bold text-chalk mb-4">
                Ready to understand your contracts?
              </h3>
              <p className="text-chalk-2 mb-8">
                Paste any contract into Clauze and get a plain English breakdown in seconds.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 h-12 px-8 bg-violet text-white font-medium rounded-xl hover:scale-[1.02] transition-all"
              >
                Analyse a contract
              </Link>
            </div>
          </FadeUp>
        </article>
      </main>

      <Footer />
    </div>
  );
}
