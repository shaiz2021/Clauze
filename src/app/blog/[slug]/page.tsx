import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/fade-up";
import { SectionDivider } from "@/components/section-divider";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const BLOG_POSTS: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "force-majeure-clause-explained": {
    title: "Force Majeure Clauses Explained (Plain English + Negotiation Tips)",
    excerpt:
      "If a contract says “force majeure,” it is describing what happens when life disrupts performance. Here is what it really means and what to negotiate.",
    category: "Legal Basics",
    author: "Clauze Team",
    date: "May 19, 2026",
    readTime: "7 min read",
    content: `
Force majeure clauses are the contract's way of answering one question: what happens if something outside either party's control makes performance impossible or unrealistic?

If you have ever seen language like "acts of God," "war," "pandemic," or "government order," you have seen force majeure.

## What a Force Majeure Clause Does

In plain English, a force majeure clause usually does three things:

1. Defines which events count as force majeure.
2. Pauses obligations while the event lasts (sometimes with deadlines extended).
3. Allows termination if the disruption lasts long enough.

## The Keyword People Miss: Notice

Many contracts require notice within a short window, like 5 or 10 days.

If you miss the notice requirement, you can lose the protection even if the event is real.

> If a force majeure event happens, send written notice immediately. Do not wait to see if the situation improves.

## What Events Should Be Included

Common examples:
- Natural disasters (earthquakes, floods)
- War or terrorism
- Government orders and regulations
- Labor strikes (sometimes excluded)
- Supply chain disruption (often excluded unless negotiated)
- Epidemics and pandemics (in newer contracts)

## Red Flags in Force Majeure Language

### 1. One-sided force majeure

If only one party gets relief, it is not a protection clause. It is leverage.

### 2. Payment obligations are excluded

Some clauses say force majeure does not apply to payment. That can be reasonable in some contexts, but it can also be abusive if the disruption prevents you from generating revenue.

### 3. No termination right

If the clause only "pauses" obligations with no end, you can get stuck in limbo.

## What to Negotiate (Practical Version)

Here is a negotiation-friendly checklist:

1. Add a clear notice window (and make it realistic).
2. Include government orders, internet outages for online services, and major supplier failure where relevant.
3. Add a termination right if the event lasts 30 to 60 days.
4. Clarify what happens to fees already paid and work in progress.

## Quick Answers (AEO)

### What does force majeure mean in a contract?

It means neither party is at fault if extraordinary events prevent performance, and obligations may be paused or ended.

### Does force majeure excuse payment?

Sometimes. Many contracts exclude payment. If cash flow risk is high, negotiate partial relief or milestone-based payments.

### Is "pandemic" included automatically?

Not always. Older templates may not mention it. If it matters, add it explicitly.

If you are unsure how the clause applies to your situation, paste the section into Clauze and Clauze reads it back in plain English with the practical consequences.
    `,
  },
  "governing-law-venue-jurisdiction": {
    title: "Governing Law vs Venue vs Jurisdiction: The Clause People Ignore",
    excerpt:
      "This clause decides where disputes happen and which rules apply. In many contracts, it matters more than the payment section.",
    category: "Legal Basics",
    author: "Clauze Team",
    date: "May 18, 2026",
    readTime: "8 min read",
    content: `
Governing law, venue, and jurisdiction are often bundled into one paragraph near the end of a contract. Most people skip it. That is a mistake.

This clause can decide:
- Which country's or state's law applies
- Where you can sue or be sued
- How expensive it is to resolve a dispute

## The Three Terms in Plain English

### 1. Governing law

Which set of laws the contract will be interpreted under.

Example: "This Agreement is governed by the laws of Delaware."

### 2. Jurisdiction

Which courts have authority to hear disputes.

Example: "The parties submit to the exclusive jurisdiction of the courts of California."

### 3. Venue

The specific location where the case must be filed.

Example: "Venue shall be in San Francisco County."

## Why This Matters in Real Life

If you are in Pakistan and the contract forces disputes in New York, the travel cost and lawyer cost can be enough to make you give up even if you are right.

> A dispute clause can be a practical weapon: not because you lose on the merits, but because you cannot afford to fight.

## Red Flags

### 1. "Exclusive jurisdiction" in a far-away court

Exclusive means you do not get a choice.

### 2. No symmetry

Sometimes the company keeps the right to sue you anywhere, but you must sue them in one place.

### 3. Arbitration hidden inside the same paragraph

Arbitration can be fine, but it must be clear: costs, rules, location, and appeal rights.

## What to Ask For (Low-friction Negotiation)

1. Make the venue your city, or a neutral location.
2. Use "non-exclusive jurisdiction" so both parties can choose.
3. If arbitration is required, set a reasonable seat and split fees.

## Quick Answers (AEO)

### What is the difference between governing law and jurisdiction?

Governing law is the rulebook. Jurisdiction is the court system that can enforce the contract.

### Can I change governing law and venue?

Often yes, especially in freelance and small-business contracts. Propose a neutral venue and keep the language simple.

If you want to sanity-check a dispute clause fast, paste it into Clauze and Clauze reads what it means for where you would actually have to fight.
    `,
  },
  "limitation-of-liability-cap-explained": {
    title: "Limitation of Liability Caps: What’s Fair (and What’s Dangerous)",
    excerpt:
      "A liability cap can save you from catastrophic risk. Here is how to spot missing caps, hidden carve-outs, and one-sided limits.",
    category: "Legal Basics",
    author: "Clauze Team",
    date: "May 17, 2026",
    readTime: "9 min read",
    content: `
Limitation of liability is where contracts decide the worst-case scenario. If something goes wrong, how bad can it get?

If you only read one section before signing, read the liability cap and indemnity clauses.

## What a Liability Cap Is

A cap limits how much one party can owe the other.

Common language: "In no event shall either party be liable for amounts exceeding the fees paid under this Agreement."

## Typical Cap Levels (What’s Normal)

Depending on the deal size and risk:
- Fees paid in the last 12 months
- Total fees paid under the contract
- A fixed number (for smaller engagements)

## Red Flags

### 1. No cap at all

If liability is unlimited, you are exposed to a number you cannot control.

### 2. A cap for them, not for you

If the company caps its liability but keeps yours uncapped, the risk is one-way.

### 3. The "carve-out list" removes the cap for everything

Look for carve-outs such as:
- Confidentiality
- IP infringement
- Indemnification
- Data breaches

Sometimes carve-outs are reasonable. The problem is when the list is so broad that the cap is meaningless.

## Practical Negotiation (What to Propose)

1. Add a cap: total fees paid.
2. Narrow carve-outs: limit confidentiality carve-out to intentional misconduct.
3. Add mutuality: whatever standard applies to you should apply to them.

## Quick Answers (AEO)

### What does "consequential damages" mean?

It refers to indirect losses like lost profits. Many contracts exclude these damages, which is common.

### What is a reasonable liability cap?

For many service contracts, a cap equal to fees paid (or 1x to 2x fees) is a typical starting point.

If you are unsure whether the cap is real protection or just a paragraph that looks safe, paste the section into Clauze and Clauze reads it back with the real-world risk.
    `,
  },
  "indemnification-clause-explained": {
    title: "Indemnification Clauses Explained: “Hold Harmless” in Plain English",
    excerpt:
      "Indemnities are where contracts quietly move legal risk onto you. Here is what “defend, indemnify, hold harmless” actually requires.",
    category: "Legal Basics",
    author: "Clauze Team",
    date: "May 16, 2026",
    readTime: "10 min read",
    content: `
Indemnification is one of the most misunderstood parts of a contract. It is also one of the most expensive if you get it wrong.

The phrase "defend, indemnify, and hold harmless" often means you must pay the other party's legal costs and losses if someone makes a claim related to your work.

## Indemnity in Plain English

An indemnity is a promise:

If a third party sues you because of me, I will handle it and pay.

It can include:
- Lawyer fees (defense)
- Settlements
- Court judgments

## The 3 Verbs Matter

### 1. Defend

You pay for lawyers and the legal defense process.

### 2. Indemnify

You pay for losses, settlements, judgments.

### 3. Hold harmless

You protect the other party from being responsible.

## Red Flags

### 1. Indemnity for "any and all claims"

That can include claims outside your control.

### 2. Indemnity for the other party's negligence

If the contract says you indemnify them even when they are negligent, push back.

### 3. No control over defense

If you must pay but cannot choose counsel or strategy, you are funding someone else's decisions.

## A Fair Indemnity (What It Usually Covers)

Fair scope often includes:
- Your breach of confidentiality
- Your IP infringement (if you deliver original work)
- Your gross negligence or intentional misconduct

## What to Negotiate

1. Make it mutual where appropriate.
2. Exclude the other party's negligence.
3. Add a liability cap or at least align it with the cap section.
4. Give yourself control of defense if you are paying.

## Quick Answers (AEO)

### Is indemnification always bad?

No. It is normal, but it must be scoped and fair.

### What is the biggest indemnity red flag?

"Any and all claims" plus no cap and no defense control.

If you want a fast read on whether the indemnity is standard or dangerous, paste it into Clauze and Clauze reads what it obligates you to pay and when.
    `,
  },
  "offer-letter-vs-employment-contract": {
    title: "Offer Letter vs Employment Contract: What’s Binding (and What Isn’t)",
    excerpt:
      "Not every offer letter is a full contract. Here is what parts typically bind you, what can change, and what to get in writing.",
    category: "Employment",
    author: "Clauze Team",
    date: "May 15, 2026",
    readTime: "7 min read",
    content: `
Offer letters are often written like a friendly summary. Employment contracts read like legal documents. But the line between them is not always clear.

If you are joining a company, you should know what is binding and what is just a plan.

## What an Offer Letter Usually Covers

Most offer letters include:
- Role title
- Compensation
- Start date
- Benefits overview
- At-will language (in many jurisdictions)
- Confidentiality and IP references

## What an Employment Contract Usually Adds

Employment contracts often add:
- Non-compete or non-solicit
- IP assignment details
- Termination and notice rules
- Bonus plan rules
- Arbitration and dispute clauses

## The Binding Parts (Common)

Even in a short offer letter, these can be binding:
- Confidentiality obligations
- IP assignment references (sometimes via attached documents)
- Dispute resolution and arbitration
- Non-solicit language

> If it is written in the offer letter and you sign, assume it matters.

## What Often Changes (And Why You Should Clarify)

Benefits and policies can change because they are usually in a handbook.

If compensation includes variable bonuses, you want the plan details.

## What to Ask For Before You Sign

1. Ask for any referenced attachments (IP agreement, handbook).
2. Confirm how bonuses are calculated and when they are earned.
3. Clarify remote work, location expectations, and travel.
4. Clarify probation periods and notice requirements.

## Quick Answers (AEO)

### Is an offer letter legally binding?

Parts of it can be. Especially confidentiality, IP, arbitration, and restrictive covenants.

### Can salary change after signing?

It depends on jurisdiction and contract language. Many offer letters include flexibility, but you can negotiate clarity.

If you want a quick check, paste your offer letter into Clauze and Clauze reads which clauses create ongoing obligations.
    `,
  },
  "employment-non-solicitation-clause": {
    title: "Non‑Solicit Clauses Explained: Clients, Coworkers, and Common Traps",
    excerpt:
      "Non‑solicits look small but can restrict your next move. Learn how they work, what to narrow, and how to spot hidden non‑compete language.",
    category: "Employment",
    author: "Clauze Team",
    date: "May 14, 2026",
    readTime: "9 min read",
    content: `
Non-solicitation clauses are often presented as a "reasonable" alternative to a non-compete. In practice, they can still meaningfully restrict your career.

The key is to understand what you are not allowed to solicit and for how long.

## The Two Common Types

### 1. Employee non-solicit

You cannot recruit or hire coworkers after leaving.

### 2. Customer non-solicit

You cannot contact or work with clients you interacted with.

## The Trap: Definitions

A non-solicit can become a hidden non-compete if:
- "Customer" is defined as any customer the company has ever had
- "Solicit" includes accepting inbound work
- The restriction covers your entire industry

> If the clause prevents you from working with anyone in your space, it is effectively a non-compete.

## What Is Usually Reasonable

Common ranges:
- 6 to 12 months
- limited to customers you worked with in the last 6 to 12 months
- limited to employees you directly managed or worked closely with

## What to Negotiate

1. Narrow the customer list to those you personally worked with.
2. Limit time to 6 months where possible.
3. Define "solicit" so that inbound requests are not automatically violations.
4. Remove "affiliate" and "any customer of any subsidiary" expansions unless justified.

## Quick Answers (AEO)

### Does a non-solicit stop me from taking a job at a competitor?

Usually not directly. But it can stop you from bringing clients or team members, which can make the move harder.

### Can non-solicits be enforced?

It varies by jurisdiction and scope. The broader it is, the easier it is to challenge.

If you are signing an employment contract and see a non-solicit, paste it into Clauze and Clauze reads what it blocks in practice.
    `,
  },
  "employment-ip-assignment-clause": {
    title: "IP Assignment in Employment Contracts: What You Actually Give Up",
    excerpt:
      "IP clauses can claim your side projects and future work. Here is what to carve out, what “works made for hire” means, and what to negotiate.",
    category: "Employment",
    author: "Clauze Team",
    date: "May 13, 2026",
    readTime: "10 min read",
    content: `
IP assignment clauses matter most when you create things: code, designs, writing, inventions, product ideas, processes.

Many employment templates try to capture more than what you create at work. Some try to capture everything you create, period.

## What "IP Assignment" Means

In plain English: you transfer ownership of certain inventions and work product to your employer.

## The Side Project Problem

A risky clause looks like:

*"Employee assigns to Company all inventions conceived or developed during employment."*

If not limited, that can include personal projects made at home.

## What a Fair Clause Usually Does

Fair IP assignment is typically limited to:
- work created within the scope of your job
- work created using company equipment or confidential information
- work that relates to the company's business or planned products

## What to Ask for (Carve-outs)

1. A schedule listing your existing projects.
2. Clear language that your pre-existing IP remains yours.
3. A carve-out for unrelated side projects created on your own time, without company resources.

> If you have a side project, ask to list it by name in an exhibit.

## "Works Made for Hire" (Plain English)

This phrase is often used to say the employer owns the work from the start.

It may not apply to all employment output, but it signals intent: they want ownership.

## Quick Answers (AEO)

### Can an employer own my side project?

Sometimes, depending on jurisdiction and contract language. If the contract is broad, negotiate a carve-out.

### What should I include in a carve-out list?

Apps, repositories, writing, templates, design systems, and anything you plan to continue building independently.

If you are unsure whether a clause captures your side projects, paste it into Clauze and Clauze reads what you are actually assigning.
    `,
  },
  "freelance-kill-fee-termination": {
    title: "Kill Fee Clauses: The Fair Way to Handle Client Cancellations",
    excerpt:
      "A kill fee protects freelancers when a client ends a project midstream. Here is a practical, negotiation-friendly approach.",
    category: "Freelance",
    author: "Clauze Team",
    date: "May 12, 2026",
    readTime: "8 min read",
    content: `
Freelance projects get cancelled. Budgets change. Priorities shift. Sometimes the client simply disappears.

If your contract does not address cancellation fairly, you can end up doing a week of work and getting paid nothing.

## What a Kill Fee Is

A kill fee is compensation owed if a project is terminated early.

It is not a penalty. It is a way to pay for:
- time already spent
- reserved availability
- opportunity cost

## A Simple Kill Fee Structure That Works

Here is an easy structure many clients accept:

1. If the client cancels before work begins: refund minus admin fee.
2. If the client cancels after work begins: pay for work completed plus a fixed percentage (10% to 25%) of remaining fees.
3. If the client cancels late in the project: full remaining milestone is due.

## Red Flags

### 1. "Terminate for convenience" with no payment

If they can terminate anytime and pay nothing, you are funding their uncertainty.

### 2. "Work product belongs to client" even if you are not paid

Never hand over final deliverables without clear payment terms.

## What to Negotiate

1. Tie deliverables to milestones.
2. Include a kill fee that increases as the project progresses.
3. Require payment before transfer of final files or source.

## Quick Answers (AEO)

### What is a fair kill fee percentage?

Often 10% to 25% of remaining fees, plus payment for work completed.

### Should a client get unfinished work if they cancel?

Only if they pay for it. Otherwise, you are giving away your time.

If you are unsure how your termination clause behaves, paste it into Clauze and Clauze reads what happens if the client cancels tomorrow.
    `,
  },
  "freelance-payment-terms-net-30": {
    title: "Net 30, Net 60, Net 90: Payment Terms Freelancers Should Avoid",
    excerpt:
      "Payment terms decide your cash flow. Learn how to negotiate net terms, late fees, milestones, and a simple “pay on receipt” fallback.",
    category: "Freelance",
    author: "Clauze Team",
    date: "May 11, 2026",
    readTime: "9 min read",
    content: `
Payment terms are not just accounting details. They are risk allocation.

If a contract says net 60 or net 90, it means you may be financing the project for two to three months.

## What Net Terms Mean

- Net 30: payment is due 30 days after invoice
- Net 60: due 60 days after invoice
- Net 90: due 90 days after invoice

## Why Net 60 and Net 90 Hurt

Even if the client eventually pays, you carry the cost of:
- your time
- subcontractors
- tools and subscriptions
- taxes

## Better Structures (That Clients Accept)

1. Deposit upfront (25% to 50%).
2. Milestones (paid at clear checkpoints).
3. Pay on receipt for smaller engagements.

## Add These Two Clauses

### 1. Late fee

A modest late fee (for example, 1% to 1.5% per month) changes incentives.

### 2. Pause work for non-payment

If the invoice is late, you can pause work without being in breach.

## Quick Answers (AEO)

### Is net 30 normal for freelancing?

It is common for larger companies, but you can still negotiate deposits and milestones.

### What is a reasonable deposit?

Many freelancers use 50% upfront for new clients.

If you want to see whether your contract gives you real leverage to get paid, paste the payment section into Clauze and Clauze reads the practical outcome.
    `,
  },
  "freelance-sow-scope-creep": {
    title: "Statement of Work for Freelancers: Stop Scope Creep Before It Starts",
    excerpt:
      "A strong SOW prevents vague deliverables, endless revisions, and “just one more thing.” Here is a structure you can actually use.",
    category: "Freelance",
    author: "Clauze Team",
    date: "May 10, 2026",
    readTime: "10 min read",
    content: `
Scope creep is rarely malicious. It is usually the product of a vague scope and unclear boundaries.

Your best defense is a clear Statement of Work (SOW) that defines what is included and what is not.

## What a Good SOW Includes

At minimum:

1. Deliverables (what you will produce)
2. Timeline (when it will be delivered)
3. Assumptions (what you are relying on from the client)
4. Revision limits (how many rounds)
5. Change requests (how new work is priced)

## The Most Useful Line in a Freelance SOW

*"Any work not explicitly listed in Deliverables is out of scope and requires a written change order."*

That one sentence saves projects.

## Define Success, Not Just Tasks

Instead of "design a landing page," use:
- number of sections
- number of revisions
- what files are delivered
- what is excluded (copywriting, development, analytics)

## Change Orders (Make It Simple)

A change order can be as simple as:
- one email
- the new scope
- the new fee
- the new date

## Quick Answers (AEO)

### What is scope creep in freelancing?

It is when the client keeps adding work outside the original agreement without adjusting time or price.

### How many revision rounds should you include?

Two rounds is common for many creative projects. More rounds should be paid.

If you want to check whether your SOW protects you, paste it into Clauze and Clauze reads where the ambiguity is.
    `,
  },
  "nda-permitted-disclosures-carveouts": {
    title: "Permitted Disclosures and Carve‑Outs in NDAs: What to Always Ask For",
    excerpt:
      "Most NDA fights happen because the carve‑outs are missing. Here are the exceptions you should insist on, with simple examples.",
    category: "NDAs",
    author: "Clauze Team",
    date: "May 9, 2026",
    readTime: "8 min read",
    content: `
An NDA is not just about what you cannot say. It is also about what you are allowed to do.

That second part is handled by carve-outs and permitted disclosures.

## What Are "Carve-outs" in an NDA?

Carve-outs are exceptions that say certain information is not confidential, or certain disclosures are allowed.

Without carve-outs, even normal business behavior can become a breach.

## The Essential Carve-outs

These are standard in fair NDAs:

1. Information already known to the recipient.
2. Information independently developed without using confidential information.
3. Information that becomes public through no fault of the recipient.
4. Information received from a third party lawfully.

## Permitted Disclosures You Should Ask For

### 1. Disclosures to employees and contractors

You need to share information internally to evaluate a deal or deliver work.

### 2. Disclosures to professional advisors

Accountants, lawyers, and financial advisors should be included.

### 3. Disclosures required by law

Subpoenas and regulatory demands happen. The NDA should explain notice and cooperation.

> A good NDA includes a clear legal-process clause: notify, cooperate, and disclose only what is required.

## Red Flags

### 1. No advisor disclosure

If you cannot share with a lawyer, you cannot safely evaluate the agreement.

### 2. "Confidential unless marked" but no marking process

Marking requirements must be practical and consistent.

## Quick Answers (AEO)

### What are carve-outs in an NDA?

Exceptions that prevent normal or independent information from being treated as confidential.

### Are disclosures to attorneys allowed?

They should be. If they are not, negotiate it in.

If you want to quickly check whether an NDA has the right carve-outs, paste it into Clauze and Clauze reads what you can share and with whom.
    `,
  },
  "nda-confidential-information-definition": {
    title: "Confidential Information Definition in an NDA (Plain English + Examples)",
    excerpt:
      "The definition of “Confidential Information” determines how risky an NDA is. Here is how to spot overly broad definitions and fix them.",
    category: "NDAs",
    author: "Clauze Team",
    date: "May 8, 2026",
    readTime: "9 min read",
    content: `
In most NDAs, the single most important paragraph is the definition of "Confidential Information."

If the definition is too broad, the NDA becomes risky even if every other section looks reasonable.

## What a Fair Definition Looks Like

Fair definitions are specific and practical, such as:

*"Confidential Information means non-public business, technical, or financial information disclosed in writing and marked confidential."*

## What an Overly Broad Definition Looks Like

Broad definitions often include phrases like:
- "including but not limited to"
- "all information relating to the business"
- "in any form, whether written, oral, visual"

These phrases can turn ordinary conversation into "confidential."

## What to Narrow (Simple Fixes)

1. Require information to be marked confidential (or confirmed in writing).
2. Exclude information you already know.
3. Exclude information you develop independently.
4. Exclude public information.

## The "Oral Disclosure" Problem

Sometimes NDAs treat oral information as confidential automatically.

A practical compromise:

*"Oral disclosures are confidential only if confirmed in writing within 30 days."*

## Quick Answers (AEO)

### What does "confidential information" mean in an NDA?

It is the information you agree not to disclose or misuse. The definition sets the scope of your obligation.

### Should confidential information be marked?

Yes, where possible. Marking makes compliance realistic.

If you want to see whether a definition is tight or dangerously broad, paste it into Clauze and Clauze reads the real scope.
    `,
  },
  "mutual-nda-red-flags": {
    title: "Mutual NDA Red Flags: 7 Clauses That Quietly Trap You",
    excerpt:
      "Mutual NDAs sound fair, but they often hide one-sided terms. Here are the red flags to look for before you sign.",
    category: "NDAs",
    author: "Clauze Team",
    date: "May 7, 2026",
    readTime: "8 min read",
    content: `
"Mutual NDA" sounds balanced. In reality, many "mutual" NDAs are mutual in name only.

Here are seven red flags that show up in mutual NDA templates, especially in early-stage deals.

## 1. Confidentiality lasts forever

An NDA that lasts forever is usually unnecessary. Two years is a common starting point.

## 2. Everything is confidential by default

If the NDA treats all information as confidential without clear marking rules, compliance becomes impossible.

## 3. No carve-outs for independent development

You should not be forced to prove you did not "use" their information if you build something similar later.

## 4. Non-solicit hidden inside the NDA

NDAs sometimes sneak in "you cannot hire our employees" language. That is a separate deal term.

## 5. Broad "use" restrictions

Some NDAs restrict you from using information even internally. That can block normal evaluation.

## 6. One-sided remedies and fees

Watch for attorney fee shifting that only applies when they sue you.

## 7. Assignment language that blocks acquisitions

If you cannot assign the NDA in a merger or acquisition, it can become a problem later.

## Quick Answers (AEO)

### Is a mutual NDA always safe?

No. Mutual only means both parties share obligations. The details can still be one-sided.

### What is the most common mutual NDA red flag?

Overly broad confidential information definitions and indefinite terms.

If you want a fast checklist-style review, paste the NDA into Clauze and Clauze reads the red flags and the practical negotiation options.
    `,
  },
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

What this actually means: If something goes wrong, even if it is not your fault, you could be personally responsible for an unlimited amount of money. There is no cap.

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
You have probably signed dozens of NDAs. They pop up in the creative industry all the time. Before discussing a project, when visiting a client office, or even just to hear a pitch. But here is the thing: not all NDAs are created equal, and some of them are far more restrictive than they appear.

## What an NDA Is Supposed to Do

At its core, a non-disclosure agreement is simple. It says: "I will not share the confidential information I receive from this person or company."

The problem is that "confidential information" can be defined in very different ways, and the scope of what counts as "disclosure" can be surprisingly broad.

## The Three Parts of an NDA That Matter

### 1. What Counts as Confidential

A fair NDA limits confidential information to specific things: trade secrets, proprietary processes, client lists, financial data, or specific ideas shared during the relationship.

A problematic NDA might include: "All information shared during the term of this agreement", which could mean even public information you already knew, or information you develop independently later.

**What to watch for:** Broad definitions of confidential information that include anything the other party decides is secret, or that extend to information you already have or will develop independently.

### 2. How Long It Lasts

NDAs typically have a time limit. Common terms are 2-5 years for the confidentiality obligation.

A problematic NDA might say: "Confidentiality obligations shall survive indefinitely" or "for as long as the information remains confidential", which could be forever.

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
This is standard, but watch for clauses that require you to destroy copies, including things stored in backup systems or cached on your devices.

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

But until the law catches up, non-competes remain common in many employment contracts, especially for executives, salespeople, and anyone with specialized knowledge. So how do you know if the non-compete you are being asked to sign is fair or unfair?

## What a Non-Compete Is supposed to Do

The basic idea behind a non-compete is to protect a business from having an employee leave and immediately take trade secrets or client relationships to a competitor. Courts in most states will enforce non-competes if they are:

1. **Reasonable in scope**: limited geographically and temporally
2. **Protecting a legitimate business interest**: like trade secrets or customer relationships
3. **Not too restrictive**: not preventing someone from making a living

## What Makes a Non-Compete Unfair

Here are the specific factors that make a non-compete unreasonable:

### Geographic Scope

A fair non-compete limits the geographic restriction to the area where the company actually does business or has a meaningful presence.

An unfair non-compete might say "anywhere in the United States" or "worldwide", even if the company only operates in one city.

**What to watch for:** Geographic restrictions that extend beyond the company's actual market or operations. If they only have offices in Austin, a restriction covering all of Texas might be too broad.

### Time Duration

A fair non-compete is short, typically 6 months to 1 year after leaving.

An unfair non-compete might last 2 years, 3 years, or even longer. The longer the restriction, the more likely it is to be unreasonable.

**What to watch for:** Restrictions longer than 12 months. In most states, anything over 2 years is going to face serious scrutiny.

### What Counts as a Competitor

A fair non-compete defines "competitor" specifically, meaning a company that offers the same products or services in the same market.

An unfair non-compete might define competitors so broadly that it covers almost any company in your industry.

**Example of a problematic definition:** "Any company that provides professional services" or "any company that does business in the technology sector."

### Scope of Restricted Activities

A fair non-compete limits you from doing the specific thing you did for your former employer, for example, selling enterprise software to Fortune 500 companies.

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

1. **Consult a lawyer**, especially if you are in a high-paying field where a violation could lead to a lawsuit.
2. **Negotiate an exit**. When you leave, negotiate specifically for a release from the non-compete as part of your departure.
3. **Check your state law**. If you live in California or another state where non-competes are unenforceable, you may have more freedom than you think.
4. **Document everything**. If you are worried about a potential violation, document that you are not using confidential information or targeting former clients.

Non-competes are not going away anytime soon, but the legal and cultural environment is shifting. More workers are pushing back, and regulators are paying attention.

If you are asked to sign a non-compete, read it carefully. A fair non-compete should have a narrow geographic scope, a short time period, and a specific definition of what counts as a competitor. Before you sign any employment contract with a non-compete, let Clauze scan it first.
    `
  }
};

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
