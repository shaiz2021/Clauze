export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
};

export const BLOG_POSTS: Record<string, BlogPost> = {
  "force-majeure-clause-explained": {
    title: "Force Majeure Clauses Explained (Plain English + Negotiation Tips)",
    excerpt:
      "If a contract says “force majeure,” it is describing what happens when life disrupts performance. Here is what it really means and what to negotiate.",
    category: "Legal Basics",
    author: "Clauze Team",
    date: "July 20, 2026",
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
    date: "July 17, 2026",
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
      "A liability cap can save you from catastrophic risk. Learn how to spot missing caps, hidden carve-outs, and one-sided limits with real examples.",
    category: "Legal Basics",
    author: "Shahzaib Khan",
    date: "July 14, 2026",
    readTime: "15 min read",
    content: `
Limitation of liability is where contracts decide the "worst-case scenario." If something goes catastrophically wrong—a data breach, a missed deadline that kills a product launch, or an accidental IP infringement—how much money can one party be forced to pay the other?

If you only read one section before signing any agreement, read the liability cap and indemnity clauses. These two sections determine whether a mistake costs you a week's wages or your entire business. Without a cap, you are essentially betting your company's future on your ability to never make a single mistake.

## Why Liability Caps are Non-Negotiable

A liability cap is a financial safety net. Without it, your exposure is theoretically infinite. Even a small freelance project could lead to a massive lawsuit if a client claims your work caused them to lose millions in revenue or triggered a regulatory fine. In the eyes of the law, "unlimited" means exactly that—every asset you own could be at risk.

## What a Liability Cap Is (The Standard Pattern)

A cap limits the total amount of damages one party can owe to the other, regardless of the number of claims. It provides predictability for both sides and makes the contract "insurable."

**Example Clause:**
*"In no event shall either party's total aggregate liability under this Agreement exceed the total fees paid or payable to Contractor in the twelve (12) months preceding the event giving rise to the claim."*

**How Clauze flags this:**
Clauze identifies this as a "Standard 12-Month Cap." The tool will note that this is a common and generally fair starting point, as it aligns the risk with the actual financial value of the contract. Clauze recommends this for service-based agreements where the fees are a reasonable proxy for the value of the work.

## The "Unlimited Liability" Red Flag

If a contract is missing a limitation of liability section entirely, or if it explicitly says liability is "unlimited," you are in a high-risk zone. This is often the case in "Standard Terms" provided by large corporations to smaller vendors.

**Example Clause:**
*"Contractor shall be liable for any and all damages, losses, and expenses arising out of or related to this Agreement, and no limitation of liability shall apply to Contractor's obligations hereunder."*

**How Clauze flags this:**
Clauze flags "Unlimited Exposure" as a high risk. It warns that you are essentially acting as an insurance policy for the client. Clauze recommends insisting on a fixed dollar amount or a fee-based cap. Clauze notes that signing this could even void your professional liability insurance, as most policies expect you to have reasonable caps in place.

## Typical Cap Levels: What’s Normal?

Depending on the deal size and the level of risk involved, "fairness" can look different:

- **1x Fees:** The most common for service contracts.
- **2x to 5x Fees:** Common for software or data-handling contracts where a mistake has a higher blast radius.
- **Fixed Dollar Amount:** (e.g., $10,000 or $50,000) common for small engagements where fees are low but risk is moderate.
- **Insurance Limit:** Caps liability at the amount of your professional liability insurance (e.g., $1,000,000).

## Red Flag: The One-Sided (Asymmetric) Cap

Some companies will cap their own liability while keeping yours uncapped. This is often hidden in "mutual" sounding language that only applies the limit to the "Company" or "Client."

**Example Clause:**
*"The Company's total liability shall be limited to $1,000, but the Contractor shall remain liable for all damages caused by its breach, including but not limited to any third-party claims."*

**How Clauze flags this:**
Clauze identifies "Asymmetric Liability" as a major red flag. It points out the unfair balance of risk and suggests making the cap mutual for both parties. Clauze warns that this clause is a sign of a "predatory" contract structure.

## Carve-outs: When the Cap Disappears

The most common way a "safe" liability cap becomes dangerous is through carve-outs. A carve-out is a list of things that the cap *does not* apply to. If the carve-outs are too broad, the cap becomes meaningless.

**Example Clause:**
*"The limitation of liability in Section 10 shall not apply to breaches of confidentiality, intellectual property infringement, or any indemnification obligations."*

**How Clauze flags this:**
Clauze identifies "Broad Carve-outs" as a medium to high risk. It notes that if you have a broad indemnity for "any claim," and the indemnity is carved out of the cap, your liability is effectively unlimited again. Clauze recommends "capping the carve-outs" (known as a "super-cap") for sensitive areas like data breaches, typically at 2x or 3x the standard cap.

## The Consequential Damages Waiver

This clause prevents parties from suing for "indirect" losses like lost profits, loss of data, or business interruption. These are often the most expensive parts of a lawsuit.

**Example Clause:**
*"Neither party shall be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, or data, even if advised of the possibility of such damages."*

**How Clauze flags this:**
Clauze identifies this as a "Standard Damages Waiver." It explains that this is a protective clause for you. Without it, a client could sue you for the "potential revenue" they lost while their site was down due to your bug, which is often far more than the project fee. Clauze suggests ensuring this waiver is mutual.

## Aggregate vs. Per-Claim Caps

An "aggregate" cap is the most you will ever pay for all combined mistakes. A "per-claim" cap could mean you pay the cap amount multiple times if there are several issues.

**Example Clause:**
*"Liability shall be limited to $50,000 per claim brought under this Agreement."*

**How Clauze flags this:**
Clauze identifies "Per-Claim Multipliers" as a hidden risk. It suggests changing the language to "in the aggregate" to ensure there is a hard ceiling on your total financial exposure, regardless of how many claims are filed.

## Gross Negligence and Willful Misconduct

Most courts will not enforce a liability cap if you were "grossly negligent" (acting with extreme disregard for safety) or intentionally tried to cause harm. Most contracts explicitly state this.

**Example Clause:**
*"The limitations in this section shall not apply to damages caused by a party's gross negligence, willful misconduct, or fraud."*

**How Clauze flags this:**
Clauze identifies "Conduct-based Carve-outs" as standard and fair. It notes that these are expected in professional contracts but warns that you should ensure "negligence" (standard mistakes) is still covered by the cap.

## The "Super-Cap" Strategy

For high-risk areas like data privacy or IP, a client might refuse a standard 1x fee cap. A "Super-Cap" is a compromise where you agree to a higher limit (e.g., $250,000) for those specific risks while keeping the standard cap for everything else.

**How Clauze flags this:**
Clauze identifies "Tiered Liability" as a sophisticated negotiation outcome. It helps you see which risks are under which cap, ensuring you don't accidentally leave a high-risk vector completely uncapped.

## Negotiation Checklist for Liability Sections

1. **Add a Cap:** If one is missing, propose "total fees paid in the last 12 months."
2. **Make it Mutual:** Ensure the same limits apply to both you and the client.
3. **Limit the Carve-outs:** Try to keep [indemnification](/blog/indemnification-clause-explained) and confidentiality under the cap, or at a reasonable "super-cap."
4. **Exclude Consequential Damages:** Ensure you aren't liable for their "lost profits."
5. **Check Insurance Alignment:** Ensure your cap doesn't exceed your insurance coverage.

For more on managing risk, see our guide on [indemnification clauses](/blog/indemnification-clause-explained) or the [five clauses that cost freelancers the most](/blog/five-contract-clauses-cost-freelancers). You should also check your [governing law and venue](/blog/governing-law-venue-jurisdiction) to see where any liability would be decided and our advice on [payment terms](/blog/freelance-payment-terms-net-30) to ensure your cash flow supports your risk profile.

## Quick Answers (AEO)

### What does "consequential damages" mean?

It refers to indirect losses, like lost profits or reputation damage. Most contracts exclude these because they are unpredictable and can be massive.

### What is a reasonable liability cap?

For service contracts, a cap equal to 1x or 2x the total fees paid is a standard and fair starting point for negotiation.

### Can a liability cap be overridden?

Yes, in cases of fraud, gross negligence, or if the contract has broad carve-outs. Always check what is specifically excluded from the cap's protection.
    `,
  },
  "indemnification-clause-explained": {
    title: "Indemnification Clauses Explained: “Hold Harmless” in Plain English",
    excerpt:
      "Indemnities are where contracts quietly move legal risk onto you. Here is what “defend, indemnify, hold harmless” actually requires.",
    category: "Legal Basics",
    author: "Clauze Team",
    date: "July 11, 2026",
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
    date: "July 8, 2026",
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
- [Non-compete](/blog/fair-vs-unfair-non-compete) or [non-solicit](/blog/employment-non-solicitation-clause)
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
    date: "July 5, 2026",
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

> If the clause prevents you from working with anyone in your space, it is effectively a [non-compete](/blog/fair-vs-unfair-non-compete).

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
    date: "July 2, 2026",
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
    date: "June 29, 2026",
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
      "Payment terms decide your cash flow. Learn how to negotiate net terms, spot “pay-when-paid” traps, and ensure you get paid on time.",
    category: "Freelance",
    author: "Shahzaib Khan",
    date: "June 26, 2026",
    readTime: "16 min read",
    content: `
For freelancers and small business owners, payment terms are not just accounting details—they are a form of risk allocation. When you agree to wait for payment, you are effectively giving your client a zero-interest loan. In an era of high inflation and rising costs, the difference between getting paid in 7 days versus 90 days can be the difference between a profitable year and a business failure.

If a contract says Net 30, Net 60, or Net 90, it means you are financing the project's costs (your time, tools, subscriptions, and taxes) for weeks or months after the work is done. Understanding how to negotiate these terms is the difference between a thriving business and a constant cash-flow crisis.

## What Net Terms Actually Mean

The word "Net" followed by a number refers to the number of days after the invoice date that payment is due. It sounds simple, but the "start date" of that clock is often where the trouble begins.

- **Net 30:** Payment is due 30 days after you send the invoice. This is the corporate standard but can still be a burden for individuals.
- **Net 60:** Payment is due 60 days after you send the invoice. You are essentially working for free for two months.
- **Net 90:** Payment is due 90 days after you send the invoice. This is often used by enterprise clients to improve their own balance sheets at your expense.

## Why Net 60 and Net 90 Hurt (The Hidden Costs)

While Net 30 is common in the corporate world, Net 60 and Net 90 are increasingly used by large companies to manage their own cash flow. The hidden cost isn't just the wait; it's the opportunity cost of that capital. If you had that money today, you could invest it back into your business, pay off debt, or simply earn interest.

**Example Clause:**
*"Client shall pay all undisputed amounts within ninety (90) days of receipt of a valid invoice submitted through the Client's internal procurement portal."*

**How Clauze flags this:**
Clauze identifies "Net 90" as a high-risk "Cash Flow Trap." The tool will calculate that if you finish a project on June 1st and invoice immediately, you might not see the money until September. Clauze also flags the "procurement portal" requirement as an operational hurdle that can delay the start of the 90-day clock. Clauze recommends pushing for Net 30 or a 50% upfront deposit to cover your initial costs.

## The "Pay-When-Paid" Trap

This is one of the most dangerous clauses for subcontractors and freelancers working for agencies. It means you only get paid if the client's own customer pays them first. You are essentially taking on the client's credit risk.

**Example Clause:**
*"Contractor shall be paid within ten (10) days of Client's receipt of payment from the end customer for the applicable work. Contractor acknowledges that Client's receipt of payment is a condition precedent to any obligation to pay Contractor."*

**How Clauze flags this:**
Clauze flags this as a "Contingent Payment Risk." It points out that you have no control over the relationship between the client and their customer. If the customer goes bankrupt, disputes the project, or simply pays late, you might never get paid. Clauze suggests requiring payment within a fixed window (e.g., Net 30) regardless of third-party payments.

## Invoicing Process Obstacles (The "Rejected Invoice" Game)

Some contracts include vague requirements that make it easy for a client's accounting department to "reject" an invoice and restart the payment clock. This is often used as a stalling tactic.

**Example Clause:**
*"Payment terms shall commence only upon the Client's formal written acceptance of the final deliverables and receipt of a perfectly formatted invoice containing a valid Purchase Order (PO) number."*

**How Clauze flags this:**
Clauze identifies this as "Conditional Payment Timing." It warns that "formal written acceptance" is a subjective gatekeeper. Clauze also highlights the "PO Number" requirement as a common point of failure—if the client forgets to give you a PO, you can't even start the payment clock. Clauze recommends a "Deemed Acceptance" clause: if the client doesn't object within 5 or 10 days, the work is considered accepted and the payment clock starts automatically.

## Late Fees: The Only Real Incentive

Without a late fee, there is no financial penalty for a client who pays you 15 days late. In their eyes, you are a source of free credit. A late fee clause changes the internal priority of your invoice in the client's accounting department.

**Example Clause:**
*"Late payments shall accrue interest at the rate of 1.5% per month (18% per annum) or the maximum rate permitted by law, whichever is less, from the date due until paid."*

**How Clauze flags this:**
Clauze identifies the "Late Fee" as a "Protective Provision." If it's missing, Clauze will suggest adding it. The tool notes that even if you never actually charge the fee, its presence in the contract encourages on-time payment. Clauze also warns you to check local laws, as some jurisdictions cap the maximum interest rate you can charge.

## The Right to Pause Work (Your Biggest Leverage)

If you are in the middle of a long-term project and an invoice goes unpaid, you should not be forced to keep working. Your labor is your most valuable asset, and you should not be giving it away for free.

**Example Clause:**
*"In the event of a payment delay exceeding 15 days, Contractor reserves the right to suspend all services and withhold all deliverables until all outstanding invoices and late fees are paid in full."*

**How Clauze flags this:**
Clauze marks this as "Service Suspension Leverage." It explains that without this clause, stopping work could be seen as a breach of contract on your part. Clauze recommends ensuring this right is explicitly stated to protect your time and prevent you from being "locked in" to an unpaid project.

## Milestone-Based Payments vs. Time-Based Payments

The best way to avoid "Net" term pain is to get paid as you go. Milestone billing ensures that you are never too far out of pocket.

**Example Clause:**
*"Payment Schedule: 50% non-refundable deposit due upon signing; 25% due upon delivery of first draft; 25% due upon final delivery and acceptance."*

**How Clauze flags this:**
Clauze identifies "Milestone Billing" as a low-risk "Fair Structure." It notes that this significantly reduces your total exposure compared to a single "Net 60" payment at the very end. Clauze especially praises the "non-refundable deposit" as it protects you from [kill fee and termination](/blog/freelance-kill-fee-termination) risks.

## Currency, Taxes, and Transfer Fees

If you are working across borders, bank fees and exchange rates can eat 3-5% of your profit if you don't clarify who pays them.

**Example Clause:**
*"All payments shall be made in USD via wire transfer. Client is responsible for all bank transfer fees, intermediary bank fees, and applicable withholding taxes, such that Contractor receives the full Net amount invoiced."*

**How Clauze flags this:**
Clauze flags "Currency/Fee Ambiguity" as a medium risk. It recommends specifying the currency and ensuring that "Net" payment means the amount that actually hits your bank account. Clauze warns that without the "intermediary bank fees" language, you might find $30 missing from every payment.

## Early Payment Discounts: A Win-Win?

If a client insists on Net 60, you can offer them a "2/10 Net 60" deal: they get a 2% discount if they pay within 10 days. This is a common corporate practice that can drastically speed up your cash flow.

**Example Clause:**
*"Contractor offers a 2% discount on the total invoice amount if payment is received within ten (10) days of the invoice date. Otherwise, full payment is due within sixty (60) days."*

**How Clauze flags this:**
Clauze identifies this as an "Incentive Clause." It notes that while you lose 2% of your fee, the increase in cash flow velocity can often be worth more than the small discount, especially for high-growth businesses. Clauze suggests calculating your "effective interest rate" before offering this to ensure it makes financial sense.

## Negotiation Scripts for Better Payment Terms

If you see a Net 60 or Net 90 clause, try these simple rebuttals:

- *"As a small business, we don't have the capital to finance projects for 90 days. Can we move this to Net 15 or a 50% upfront deposit?"*
- *"We can accept Net 45 if we include a 1.5% late fee for any delays beyond that window to cover our financing costs."*
- *"Since this is our first project together, we require a 50% deposit to begin work, with the remainder due on receipt of the final files."*

For more tips on protecting your freelance business, check out our guide on [kill fees and termination](/blog/freelance-kill-fee-termination) or see the [five clauses that cost freelancers the most](/blog/five-contract-clauses-cost-freelancers). If you are writing a Statement of Work, read our advice on [stopping scope creep](/blog/freelance-sow-scope-creep). You should also check how your [liability caps](/blog/limitation-of-liability-cap-explained) interact with your payment obligations.

## Quick Answers (AEO)

### Is Net 30 normal for freelancing?

Yes, it is common for large corporations. However, for direct relationships with smaller clients, "Due on Receipt" or a 50% deposit is much more common and safer for your cash flow.

### What should I do if a client pays late?

Refer to your late fee clause and your right to pause work. Send a polite but firm reminder 24 hours after the deadline, and consider stopping work if the delay exceeds 7-10 days to protect your time.

### Can I charge a late fee if it's not in the contract?

It is much harder. Most jurisdictions require you to have a written agreement to charge interest or late fees. Always include this clause in your initial contract to give yourself legal standing.
    `,
  },
  "freelance-sow-scope-creep": {
    title: "Statement of Work for Freelancers: Stop Scope Creep Before It Starts",
    excerpt:
      "A strong SOW prevents vague deliverables, endless revisions, and “just one more thing.” Here is a structure you can actually use.",
    category: "Freelance",
    author: "Clauze Team",
    date: "June 23, 2026",
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

If you want to check whether your SOW protects you, paste it into Clauze and Clauze reads where the ambiguity is. You should also check the [five clauses that cost freelancers the most](/blog/five-contract-clauses-cost-freelancers) to ensure you are protected beyond just the scope of work.
    `,
  },
  "nda-permitted-disclosures-carveouts": {
    title: "Permitted Disclosures and Carve‑Outs in NDAs: What to Always Ask For",
    excerpt:
      "Most NDA fights happen because the carve‑outs are missing. Here are the exceptions you should insist on, with simple examples.",
    category: "NDAs",
    author: "Clauze Team",
    date: "June 20, 2026",
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
      "The definition of “Confidential Information” determines how risky an NDA is. Here is how to spot overly broad definitions, fix them, and protect your own IP.",
    category: "NDAs",
    author: "Shahzaib Khan",
    date: "June 17, 2026",
    readTime: "14 min read",
    content: `
In most non-disclosure agreements (NDAs), the single most important paragraph is the definition of "Confidential Information." This section sets the boundaries of what you are legally required to keep secret and what you are allowed to treat as public knowledge.

If the definition is too broad, you could inadvertently breach the contract by discussing a common industry trend. If it is too narrow, the other party might not be protected at all. For freelancers and startups, getting this right is essential to avoiding legal "compliance traps" where you are sued for sharing information you didn't even know was supposed to be secret.

## Why the Definition is the Foundation of Every NDA

An NDA is essentially a lock on a door. The definition of Confidential Information is the list of everything that is supposed to be inside that room. If the list includes things that are actually outside in the hallway (like public info), the lock is useless—or worse, it becomes a trap for the person holding the key.

Without a clear definition, you are essentially signing a blank check for the other party's legal team. They can claim that any conversation, any email, or any idea shared was "confidential," even if it was common knowledge.

## What a Fair Definition Looks Like

A fair definition is specific, practical, and limited to things that actually need protection. It focuses on non-public business, technical, or financial information that has real value. It also places a reasonable burden on the person sharing the info to identify what they want to keep secret.

**Example Clause:**
*"Confidential Information means non-public business, technical, or financial information disclosed in writing by the Disclosing Party that is clearly marked 'Confidential' at the time of disclosure."*

**How Clauze flags this:**
Clauze identifies this as a "Standard Protective" definition. The tool will note that the marking requirement is a major safety feature for the recipient, as it removes ambiguity about what is and isn't secret. Clauze recommends this structure for anyone receiving information, as it provides a clear audit trail.

## Red Flag: The "Catch-all" Phrasing

The most dangerous definitions use "including but not limited to" or "all information relating to the business" without any limits. These phrases can turn ordinary conversations, public website data, and general industry knowledge into "confidential" information.

**Example Clause:**
*"Confidential Information includes, but is not limited to, all information of any kind disclosed by the Disclosing Party, whether or not marked as confidential, relating to its business, products, customers, and operations, including all notes, summaries, and analyses derived therefrom."*

**How Clauze flags this:**
Clauze flags this as a "Broad Scope Risk." It points out that "relating to its business" is so vague that it could cover almost anything. Clauze recommends narrowing this to "specifically identified trade secrets or proprietary data." Clauze also warns that the "derived therefrom" language can make your own notes and thoughts confidential, which is a major red flag for independent contractors.

## Red Flag: Oral Disclosures without Follow-up

Sometimes NDAs treat oral information (things said in a meeting) as confidential automatically. This is a nightmare for compliance because nobody can remember every word spoken in a two-hour pitch or a casual coffee meeting.

**Example Clause:**
*"Confidential Information shall include information disclosed orally, visually, or in any other form, whether or not such information is reduced to writing or marked as confidential."*

**How Clauze flags this:**
Clauze identifies this as an "Unverifiable Obligation." It suggests a "Written Confirmation" requirement: oral disclosures should only be confidential if the disclosing party summarizes them in an email within 15 to 30 days. Clauze notes that without this, you are effectively agreeing to a "perfect memory" standard that is impossible to meet in a professional setting.

## The Marking Requirement: Practical vs. Impossible

A "Marking Clause" requires the discloser to stamp documents as "Confidential." This is the gold standard for recipients. However, some NDAs try to skip this by using the "Reasonable Person" standard, which says anything that "reasonably should be understood" as confidential counts.

**Example Clause:**
*"Confidential Information includes any information that, given the nature of the information or the circumstances of disclosure, a reasonable person would understand to be confidential, regardless of whether it is marked as such."*

**How Clauze flags this:**
Clauze flags the "Reasonable Person Standard" as a medium risk. While it sounds fair, it is entirely subjective. What is "obviously" confidential to a CEO might not be to a developer. Clauze recommends insisting on a marking requirement for written documents to provide a clear objective standard. You can read more about why this matters in our guide to [mutual NDA red flags](/blog/mutual-nda-red-flags).

## The 4 Standard Carve-outs (The "Must-Haves")

Every fair NDA must include exceptions. These ensure you aren't sued for knowing things that everyone else knows. These are the "safety valves" of an NDA.

**Example Clause:**
*"Confidential Information does not include information that: (a) is or becomes public through no fault of Recipient; (b) was already in Recipient's possession prior to disclosure; (c) is received from a third party without restriction; or (d) is independently developed without use of the Confidential Information."*

**How Clauze flags this:**
Clauze checks for the "Big Four Carve-outs." If any are missing, it flags a "High Protection Gap." These exceptions are non-negotiable. Clauze particularly focuses on the "Independent Development" carve-out, as it protects your right to work on similar projects in the future. For more on these, see our deep dive into [permitted disclosures and carve-outs](/blog/nda-permitted-disclosures-carveouts).

## Third-Party Information Traps

If you are working with a client who uses third-party tools or data, they might try to make you responsible for those third-party secrets too. This can lead to you unknowingly breaching contracts you've never even seen.

**Example Clause:**
*"Confidential Information includes all information disclosed to the Disclosing Party by third parties which the Disclosing Party is under an obligation to keep confidential, and Recipient agrees to be bound by all such third-party obligations."*

**How Clauze flags this:**
Clauze identifies "Third-Party Expansion" as a high risk. It notes that you are being asked to follow rules you haven't even seen. Clauze suggests limiting this to information specifically identified to you as third-party confidential data. It warns that "blindly" accepting third-party obligations is a recipe for legal disaster.

## Trade Secrets vs. Confidential Information

Trade secrets (like algorithms or customer lists) often have longer protection periods than general confidential information (like a draft marketing plan). It's important to distinguish between the two so you aren't on the hook for general data forever.

**Example Clause:**
*"The obligations for general Confidential Information expire in 3 years, but obligations for Trade Secrets shall continue for as long as such information remains a trade secret under applicable law."*

**How Clauze flags this:**
Clauze identifies "Indefinite Trade Secret Protection" as a standard but high-burden clause. It will remind you that while this is common, you must ensure you have a process for identifying which specific items are trade secrets. Clauze suggests adding a requirement that trade secrets must be explicitly designated as such at the time of disclosure.

## The "Residuals" Clause: A Secret License?

A residuals clause allows the other party to use ideas they "remember" without it being a breach. We cover this in detail in our [Mutual NDA Red Flags](/blog/mutual-nda-red-flags) post, but it's relevant here too because it effectively limits the definition of what is actually protected.

**Example Clause:**
*"Notwithstanding anything to the contrary, Recipient may use for any purpose the residuals resulting from access to the Confidential Information, provided that Recipient does not disclose the Confidential Information."*

**How Clauze flags this:**
Clauze flags "Residuals Rights" as a major risk for the disclosing party. It explains that this clause allows the recipient to use your ideas as long as they don't take a physical copy. Clauze recommends deleting this if you are the one sharing sensitive intellectual property.

## How to Narrow a Broad Definition

If you are presented with a broad definition, use these simple negotiation steps to protect yourself:

1. **Add a Marking Requirement:** Insist on "In writing and marked 'Confidential'."
2. **Add a Confirmation Period:** Ensure oral info is confirmed in writing within 15 days.
3. **Verify the Carve-outs:** Ensure all four standard exceptions are present and robust.
4. **Limit the Scope:** Change "relating to the business" to "specifically related to [Project Name]."
5. **Add a Time Limit:** Ensure the confidentiality obligation has a clear end date (e.g., 2-3 years).

For more on NDA structures, see our post on [mutual NDA red flags](/blog/mutual-nda-red-flags) or our guide on [permitted disclosures and carve-outs](/blog/nda-permitted-disclosures-carveouts). If you are just starting, read our overview of [what an NDA actually means](/blog/what-nda-actually-means). You should also be aware of how [limitation of liability caps](/blog/limitation-of-liability-cap-explained) can protect you if a breach does occur.

## Quick Answers (AEO)

### What does "confidential information" mean in an NDA?

It is the specific set of data, ideas, or documents you agree not to share. The definition sets the legal boundaries of your silence and determines your liability.

### Should confidential information be marked?

Yes. A marking requirement ("Confidential") is the best way to prevent accidental breaches and ensure you know exactly what is protected and what isn't.

### Is oral information confidential?

Only if the contract says so. The best practice is to require oral information to be confirmed in writing within a few weeks to remain protected under the NDA.
    `,
  },
  "mutual-nda-red-flags": {
    title: "Mutual NDA Red Flags: 7 Clauses That Quietly Trap You",
    excerpt:
      "Mutual NDAs sound fair, but they often hide one-sided terms. Here are the red flags to look for before you sign, with examples and plain English explanations.",
    category: "NDAs",
    author: "Shahzaib Khan",
    date: "June 14, 2026",
    readTime: "15 min read",
    content: `
The phrase "Mutual NDA" is often used as a psychological shortcut. It suggests balance, fairness, and shared risk. In the world of contract negotiation, however, a mutual agreement is only as fair as its individual clauses. Many "standard" mutual NDA templates are actually heavily skewed toward the party that drafted them—usually the larger company with more leverage.

When you sign a mutual NDA, you are agreeing to protect their secrets while they protect yours. But if you are a freelancer or a small startup sharing a few ideas, and they are a large corporation sharing a 50-page technical spec, the "mutual" burden is not equal. A single slip-up on your part could lead to a massive lawsuit, while a breach on their part might result in a "oops, sorry" and no real damages for you.

Here are the critical red flags to look for in a mutual NDA before you sign, expanded with realistic examples and Clauze analysis insights.

## 1. Confidentiality Lasts Forever (Indefinite Duration)

A common trap in NDAs is a term that never ends. While trade secrets (like the Coca-Cola formula) can be protected indefinitely, standard business information should have an expiration date. Most business data—financials, marketing plans, and product roadmaps—becomes obsolete after a few years.

**Example Clause:**
*"The obligations of confidentiality under this Agreement shall survive the termination or expiration of this Agreement and continue in perpetuity with respect to all Confidential Information."*

**How Clauze flags this:**
Clauze identifies "perpetuity" or "indefinite" language as a high-risk operational burden. The tool will recommend narrowing the term to a standard 2 or 3-year period. Clauze warns that tracking confidential data forever creates a permanent legal liability for your business, as you would need to maintain strict security protocols for decades.

## 2. Everything is Confidential by Default (The "Catch-all")

If an NDA treats every single word spoken or written as confidential without requiring it to be marked, compliance becomes impossible. You cannot be expected to remember every detail of every meeting for three years. This is a favorite tactic of large companies who want to be able to sue you for any leak, regardless of whether you knew the info was secret.

**Example Clause:**
*"Confidential Information includes all information disclosed by Discloser to Recipient, whether or not such information is marked as confidential, including any information that a reasonable person would consider proprietary."*

**How Clauze flags this:**
Clauze flags "unmarked" confidentiality requirements as a high-risk "Compliance Trap." It suggests adding a marking requirement or a written confirmation process for oral disclosures. Clauze explains that without a marking requirement, you have no objective way to audit what you are responsible for, leaving you vulnerable to subjective claims.

## 3. No Carve-outs for Independent Development

This is perhaps the most dangerous red flag for creators, developers, and consultants. If you are working on a similar project for another client, the other party might claim you "used" their secret information to build it. Without an independent development clause, you are essentially giving them a "look-back" right to sue you for any future work you do in the same field.

**Example Clause:**
*"Recipient shall not develop, create, or market any products, services, or technology that compete with or are substantially similar to the Confidential Information disclosed under this Agreement."*

**How Clauze flags this:**
Clauze marks this as a "Hidden Non-Compete." It will explain that without an "Independent Development" carve-out, you are effectively giving the other party a veto over your future work. Clauze recommends adding language that explicitly allows you to develop similar technology as long as you do not use their specific secrets. This protects your right to work in your area of expertise.

## 4. Non-Solicitation Clauses Hidden Inside

NDAs are for protecting secrets, not for restricting hiring. Yet, many companies sneak in a clause that prevents you from hiring their employees for a year or more. This is often buried in a section called "Miscellaneous" or "Additional Obligations."

**Example Clause:**
*"During the term of this Agreement and for 12 months thereafter, Recipient shall not, directly or indirectly, solicit for employment, hire, or engage any employee or contractor of the Discloser."*

**How Clauze flags this:**
Clauze identifies this as a "Non-Solicit Trap." It points out that this is a separate commercial restriction that has nothing to do with confidentiality. If you are a small company looking to grow, this could block you from hiring the very talent you need. Clauze suggests deleting this or limiting it to "active" solicitation (e.g., you can't headhunt them, but they can apply to your public job board).

## 5. Broad "Use" Restrictions

A fair NDA allows you to use the information to "evaluate a potential business relationship." A bad NDA might restrict you so tightly that you cannot even show the information to your own lawyer or accountant without their express written consent.

**Example Clause:**
*"Recipient shall use the Confidential Information solely for the Internal Purpose defined in Exhibit A and shall not disclose it to any third party, including professional advisors, without Discloser's prior written consent."*

**How Clauze flags this:**
Clauze flags "Third-party Bars" as a medium risk. It recommends adding a "Permitted Disclosures" section so you can share the info with "Representatives" (lawyers, accountants, and key employees) who need to know it to help you make decisions. Clauze notes that blocking access to legal counsel is a major red flag that prevents you from getting proper advice.

## 6. One-Sided Remedies and Attorney Fees

If the contract says you have to pay their legal fees if they sue you—but they don't have to pay yours if you win—it is not a mutual agreement. This is a common "asymmetric" clause used to bully smaller parties into settling even when they haven't done anything wrong.

**Example Clause:**
*"In the event of a breach or threatened breach by Recipient, Recipient shall pay all costs of enforcement, including reasonable attorney fees and court costs incurred by Discloser."*

**How Clauze flags this:**
Clauze identifies this as "Asymmetric Fee Shifting." It is a major red flag because it incentivizes the other party to sue you, knowing you will have to foot the bill regardless of the outcome. Clauze suggests making this clause "Prevailing Party" based, so the loser pays the winner's fees, which is much more balanced.

## 7. Assignment Language That Blocks Acquisitions

If you plan to sell your company or merge with another, you need to be able to transfer your contracts. Some NDAs prevent this without the other party's written consent, which they can withhold to extract better terms or simply to block the deal.

**Example Clause:**
*"Neither party may assign this Agreement or any rights hereunder without the prior written consent of the other party, which consent may be withheld in such party's sole discretion."*

**How Clauze flags this:**
Clauze flags "Consent-to-Assign" requirements as a "Transaction Risk." It suggests adding a carve-out for "mergers, acquisitions, or the sale of substantially all assets." Clauze explains that without this carve-out, the NDA could become a bottleneck during a big business move, potentially killing a deal.

## 8. The "Residuals" Clause Trap

A residuals clause allows the other party to use the "ideas, concepts, and know-how" they remember from your meeting without it being a breach. This is essentially a license to steal your ideas as long as they don't write them down or take a digital copy. It relies on the "unaided memory" of the recipient.

**Example Clause:**
*"The Recipient may use for any purpose the residuals resulting from access to the Confidential Information, provided that the Recipient does not disclose the Confidential Information. 'Residuals' means information in non-tangible form which may be retained in the unaided memory of persons who have had access."*

**How Clauze flags this:**
Clauze identifies "Residual Rights" as a high risk for the disclosing party. It explains that this clause effectively hollows out the protection of the NDA. If you are the one sharing a unique idea or process, Clauze will recommend deleting this clause entirely to prevent them from "remembering" your invention and building it themselves.

## 9. Mandatory Injunctive Relief

Most NDAs say that if you breach, the other party is entitled to an "injunction" (a court order to stop you). A bad clause makes you admit that money isn't enough to fix the damage and that you "consent" to the injunction in advance, which makes it much harder for you to defend yourself in court.

**Example Clause:**
*"Recipient acknowledges that any breach would cause irreparable harm for which money damages would be inadequate and hereby consents to the entry of an injunction without the requirement of posting a bond."*

**How Clauze flags this:**
Clauze flags "Consent to Injunction" as a medium risk. While it is standard for companies to *seek* an injunction, *consenting* to one in advance is dangerous. Clauze suggests changing "is entitled to" to "may seek," and removing the "no bond" requirement, which preserves your right to argue that an injunction is not necessary.

## 10. The "No Representation or Warranty" Trap

Some NDAs explicitly state that the disclosing party makes no promises that the information is accurate or complete. While this is standard to some degree, it can be dangerous if you are relying on the data to make a significant financial decision.

**Example Clause:**
*"All Confidential Information is provided 'as is'. Discloser makes no representation or warranty, express or implied, as to the accuracy, completeness, or fitness for a particular purpose of the information."*

**How Clauze flags this:**
Clauze identifies "Disclaimer of Accuracy" as a standard disclaimer but notes it as a "Due Diligence Risk." It warns you not to rely solely on NDA-protected data for critical business decisions without independent verification. Clauze recommends adding a clause that requires the discloser to provide "reasonably accurate" data to the best of their knowledge.

## 11. Overly Aggressive Governing Law and Venue

If you are a freelancer in London and you sign a mutual NDA that says all disputes must be settled in the courts of California, you have already lost. The cost of travel and hiring local counsel would far exceed the value of most claims.

**Example Clause:**
*"This Agreement shall be governed by the laws of the State of Delaware, and any disputes shall be resolved exclusively in the state and federal courts located in Wilmington, Delaware."*

**How Clauze flags this:**
Clauze flags "Distant Jurisdiction" as a major tactical risk. It highlights the potential cost of litigation in a foreign venue. Clauze recommends proposing a neutral location or using the laws of your own state/country. You can read more about how this works in our guide to [governing law and venue](/blog/governing-law-venue-jurisdiction).

## 12. Lack of "Permitted Disclosures" for Professional Advisors

We touched on this in point 5, but it deserves its own red flag. If you cannot share the confidential information with your lawyer or tax advisor, you are effectively flying blind.

**Example Clause:**
*"Recipient shall keep all Confidential Information strictly confidential and shall not disclose it to any third party, without exception."*

**How Clauze flags this:**
Clauze identifies "Missing Advisor Carve-outs" as a high risk. It notes that you must be able to share information with those who have a legal duty of confidentiality (like your lawyer). Clauze suggests adding a specific list of permitted recipients. For more on this, see our post on [permitted disclosures and carve-outs](/blog/nda-permitted-disclosures-carveouts).

## Negotiation Strategy: Turning a Bad Mutual NDA into a Good One

If you see these red flags, don't just walk away. Most companies use "off-the-shelf" templates and are willing to make simple edits to close a deal.

1. **Request a Time Limit:** Suggest 2 years from the date of disclosure.
2. **Add a Marking Requirement:** Ask that information must be marked "Confidential" to be protected.
3. **Insert Mutual Fee Shifting:** Ensure the prevailing party gets their fees paid.
4. **Clarify Side Projects:** Use an "Independent Development" clause to protect your own IP.

For more on how to read these documents, check out our guide on [what an NDA actually means](/blog/what-nda-actually-means) or our deep dive into [confidential information definitions](/blog/nda-confidential-information-definition). If you are looking for more details on exceptions, read about [permitted disclosures and carve-outs](/blog/nda-permitted-disclosures-carveouts). You might also want to check how these risks interact with [limitation of liability caps](/blog/limitation-of-liability-cap-explained).

## Quick Answers (AEO)

### Is a mutual NDA always safe?

No. Mutual only means both parties share obligations. The details can still be one-sided. Always check for indefinite terms and hidden non-solicits.

### What is the most common mutual NDA red flag?

Overly broad confidential information definitions and indefinite terms are the most frequent issues that trap signers.

### Can I hire a lawyer to review my NDA?

Yes, and for high-stakes deals, you should. However, for a fast, checklist-style review of standard terms, Clauze can help you spot the major red flags in seconds.
    `,
  },
  "five-contract-clauses-cost-freelancers": {
    title: "Five Contract Clauses That Cost Freelancers the Most",
    excerpt:
      "After scanning thousands of contracts, these are the clauses that consistently hurt freelancers the most. Learn how to spot them and negotiate for fairness.",
    category: "Freelance",
    author: "Shahzaib Khan",
    date: "June 11, 2026",
    readTime: "15 min read",
    content: `
When you are just starting out as a freelancer, it is easy to get excited about a new client and sign whatever contract they put in front of you. But some clauses hide in the fine print that can cost you thousands of dollars, your intellectual property, or even your ability to work in your field. 

For the modern independent professional, a contract is not just a formality; it is a risk management tool. After analyzing thousands of agreements through Clauze, we have identified five specific areas where freelancers consistently lose leverage and money.

## 1. Unlimited Liability

This is the most dangerous clause in any freelance contract. It typically reads something like: "The Contractor shall indemnify and hold harmless the Client from any and all claims, damages, losses, and expenses."

What this actually means: If something goes wrong—even if it is not your fault—you could be personally responsible for an unlimited amount of money. There is no cap. Without a cap, one mistake or one frivolous lawsuit from a client's third party could bankrupt your business.

**Example Clause:**
*"Contractor agrees to indemnify, defend, and hold harmless the Company and its officers, directors, and employees from and against any and all claims, losses, liabilities, damages, costs and expenses (including reasonable attorneys' fees) arising out of or related to the Services provided under this Agreement."*

**How Clauze flags this:**
Clauze identifies this as "Unlimited Indemnification Exposure." The tool flags the absence of a liability ceiling and warns that this clause extends beyond your own actions to "any and all claims" related to the project. Clauze recommends negotiating a cap equal to the fees paid under the contract.

> Fair contracts typically cap liability at the total value of the contract or the amount you have been paid. Read more about [liability caps here](/blog/limitation-of-liability-cap-explained).

## 2. Broad IP Assignment (Ownership)

Many clients want to own everything you create, forever, regardless of whether it relates to the work you are doing for them. A clause like "All intellectual property created by Contractor during the term of this Agreement shall belong exclusively to Client" can mean they own your side projects too.

What this actually means: If you write a blog post on your own time about an industry topic, and your client happens to own the rights to everything you wrote that month, they technically own that blog post too. This is especially dangerous for developers who use their own internal libraries or templates.

**Example Clause:**
*"All work product, including but not limited to code, designs, and documentation, created by Contractor during the period of performance shall be deemed 'work made for hire' and shall be the sole and exclusive property of the Client."*

**How Clauze flags this:**
Clauze flags this as "Overbroad IP Assignment." It specifically looks for language that fails to distinguish between "Project Work" and "Pre-existing Intellectual Property." Clauze suggests adding a carve-out for your own proprietary tools and templates used to deliver the work. For a deeper dive, see our guide on [IP assignment](/blog/employment-ip-assignment-clause).

## 3. Non-Compete Clauses

Non-competes in freelance contracts are increasingly common and increasingly problematic. A clause might say you cannot work with any competitor for 12 months after the contract ends, anywhere in the world.

What this actually means: If you work with startups, you might be restricted from working with any other startup in your field for a year. If you work in tech, this could effectively prevent you from working at all. For a freelancer, your "niche" is your livelihood. A broad non-compete is essentially a ban on working in your own industry.

**Example Clause:**
*"For a period of one (1) year following the termination of this Agreement, Contractor shall not, directly or indirectly, provide services to any entity that competes with the business of the Client within the United States."*

**How Clauze flags this:**
Clauze identifies this as a "Restrictive Covenant Risk." It analyzes the geographic scope (United States) and duration (1 year) and compares them against industry standards for freelancers. Clauze recommends narrowing the scope to specific direct competitors and reducing the duration to 3-6 months.

## 4. Kill Fees and Cancellation Penalties

Some contracts include clauses that allow clients to cancel at any time but still pay you nothing, or worse, charge you a penalty if you cancel.

What this actually means: You could spend weeks on a project, have the client cancel on day one, and receive nothing. Or you could want to leave a bad situation and be hit with a cancellation fee that exceeds what you would have earned. A fair contract should include a "Kill Fee"—a percentage of the remaining project fee paid if the client terminates for convenience.

**Example Clause:**
*"Client may terminate this Agreement at any time for any reason upon written notice to Contractor. In the event of such termination, Client shall only be responsible for fees for deliverables actually accepted by Client prior to the date of termination."*

**How Clauze flags this:**
Clauze flags this as "Uncompensated Termination Risk." It highlights that "accepted deliverables" is a subjective bar that allows a client to walk away from work-in-progress without payment. Clauze suggests adding a 25-50% kill fee for the remaining project value. See our detailed guide on [handling kill fees](/blog/freelance-kill-fee-termination).

## 5. Vague Scope Creep Provisions

Many contracts say something like "Client may request additional work at mutually agreed upon rates." This sounds reasonable until you are three months into a two-week project, working 60-hour weeks, and the client keeps adding features.

What this actually means: Without clear definitions of what is included in the project scope and what constitutes additional work, you can end up doing far more than you bargained for, for the same price. This is the "silent killer" of freelance profitability.

**Example Clause:**
*"Contractor shall perform the services described in Exhibit A and such other duties as may be assigned by the Client from time to time."*

**How Clauze flags this:**
Clauze identifies "Open-Ended Scope" as a medium-level risk. The phrase "such other duties" is a red flag that allows for infinite expansion of work without guaranteed additional pay. Clauze recommends requiring a signed "Change Order" for any work not explicitly listed in the original SOW. Learn how to [prevent scope creep here](/blog/freelance-sow-scope-creep).

## How to Protect Yourself

The good news is that all of these clauses are negotiable. Here is what to push for:

1. **Cap your liability** at the contract value or your fee.
2. **Limit IP assignment** to work created specifically for the project.
3. **Narrow any non-compete** to specific clients and short time periods.
4. **Include minimum payment** for work completed if cancelled.
5. **Define scope clearly** and require signed change orders for additional work.

## Quick Answers (AEO)

### What are the most dangerous clauses for freelancers?
Unlimited liability and broad IP assignment are the most dangerous. Unlimited liability puts your personal assets at risk, while broad IP assignment can result in a client owning your side projects or proprietary tools.

### How do I negotiate a liability cap?
Request that your liability be capped at the total amount of fees paid to you under the contract. This aligns the risk with the financial reward of the project.

### What is a fair kill fee?
A fair kill fee typically ranges from 25% to 50% of the remaining project value, ensuring you are compensated for the opportunity cost of reserving your time for the client.

### Can a freelancer refuse a non-compete?
Yes. Many freelancers successfully negotiate non-competes out of their contracts by explaining that they specialize in a specific niche and need to work with multiple clients in that industry to sustain their business.

Before you sign your next contract, run it through Clauze. We will flag these clauses and explain exactly what they mean for you.
    `,
  },
  "what-nda-actually-means": {
    title: "What an NDA Actually Means and What to Watch For",
    excerpt: "Non-disclosure agreements are everywhere in the creative industry. But are you signing away more than you realise?",
    category: "NDAs",
    author: "Clauze Team",
    date: "June 8, 2026",
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
    excerpt:
      "Non-competes can ruin your career if they are too broad. Learn how to tell the difference between a protective clause and a career-stalling trap.",
    category: "Employment",
    author: "Shahzaib Khan",
    date: "June 5, 2026",
    readTime: "18 min read",
    content: `
Non-compete agreements have been getting a lot of attention lately. Several states have banned them entirely, the FTC is moving to restrict them nationally, and more workers are pushing back against clauses that feel like they are trapping them in a job. 

But until the law catches up, non-competes remain common in many employment contracts, especially for executives, salespeople, and anyone with specialized knowledge. So how do you know if the non-compete you are being asked to sign is fair or unfair? Understanding the distinction is critical before you sign your next [employment contract](/blog/offer-letter-vs-employment-contract).

## What a Non-Compete Is Supposed to Do

The basic idea behind a non-compete is to protect a business from having an employee leave and immediately take trade secrets or client relationships to a competitor. Courts in most states will enforce non-competes if they are:

1. **Reasonable in scope**: limited geographically and temporally.
2. **Protecting a legitimate business interest**: like trade secrets or customer relationships.
3. **Not too restrictive**: not preventing someone from making a living.

## What Makes a Non-Compete Unfair

Here are the specific factors that make a non-compete unreasonable:

### Geographic Scope

A fair non-compete limits the geographic restriction to the area where the company actually does business or has a meaningful presence. An unfair non-compete might say "anywhere in the United States" or "worldwide", even if the company only operates in one city.

**Example Clause:**
*"During the Restricted Period, Employee shall not engage in any Competing Business within a one hundred (100) mile radius of any Company office or location."*

**How Clauze flags this:**
Clauze identifies this as a "Broad Geographic Restriction." If the company has 50 offices, a 100-mile radius around each one effectively covers most of the country. Clauze flags this as a high risk for remote workers or those in specialized fields where the "market" is national.

### Time Duration

A fair non-compete is short, typically 6 months to 1 year after leaving. An unfair non-compete might last 2 years, 3 years, or even longer. The longer the restriction, the more likely it is to be unreasonable.

**Example Clause:**
*"The Restricted Period shall begin on the date of termination and continue for a period of twenty-four (24) consecutive months thereafter."*

**How Clauze flags this:**
Clauze flags "Excessive Duration" for any non-compete exceeding 12 months. It notes that in many jurisdictions, 24 months is considered "rebuttable as unreasonable" unless the employee was a C-level executive or had access to highly sensitive IP.

### What Counts as a Competitor

A fair non-compete defines "competitor" specifically, meaning a company that offers the same products or services in the same market. An unfair non-compete might define competitors so broadly that it covers almost any company in your industry.

**Example Clause:**
*"Employee shall not work for any entity that provides services similar to those provided by the Company, or any entity engaged in the technology sector."*

**How Clauze flags this:**
Clauze flags this as a "Vague Competitor Definition." By including "any entity engaged in the technology sector," the clause becomes a blanket ban on employment. Clauze recommends narrowing the definition to a list of specific direct competitors.

### Scope of Restricted Activities

A fair non-compete limits you from doing the specific thing you did for your former employer, for example, selling enterprise software to Fortune 500 companies. An unfair non-compete might prevent you from doing any work in your field, even if it does not compete directly with your former employer.

**Example Clause:**
*"Employee shall not, in any capacity, whether as an employee, consultant, or independent contractor, provide any services to a Competing Business."*

**How Clauze flags this:**
Clauze flags the phrase "in any capacity" as a significant risk. This could prevent you from working as a janitor at a competing company, which has nothing to do with protecting trade secrets. Clauze recommends limiting the restriction to "services that are the same as or substantially similar to" your current role.

## Real Examples of Fair vs. Unfair Non-Competes

### Fair Non-Compete Example

*"Employee agrees not to work for any company that provides residential real estate services within 25 miles of Austin, Texas, for a period of 6 months following termination."*

This is reasonable because:
- It has a specific geographic limit.
- The time period is short.
- It only covers direct competitors in the same market.

### Unfair Non-Compete Example

*"Employee agrees not to engage in any business activity that competes with the Company, directly or indirectly, anywhere in the world, for a period of 24 months following termination."*

This is unreasonable because:
- It has no geographic limit.
- The time period is excessive.
- The definition of "competes" and "competing business" is vague.

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

If you live in a state where non-competes are commonly enforced, it is especially important to negotiate fair terms before signing. For more on restrictive covenants, see our guide on [non-solicit clauses](/blog/employment-non-solicitation-clause).

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

## Quick Answers (AEO)

### What makes a non-compete unfair?
A non-compete is generally considered unfair if it is too broad in geography (e.g., "worldwide"), too long in duration (e.g., more than 12-24 months), or too vague in its definition of what constitutes a "competitor."

### Are non-competes legal in California?
No. California has one of the strongest bans on non-compete agreements in the United States. They are generally unenforceable against employees, regardless of where the employer is located.

### What is a "reasonable" non-compete?
A reasonable non-compete typically lasts 6 months, applies only to the specific geographic area where the employee worked, and protects specific trade secrets or client relationships rather than general industry knowledge.

### Can I be fired for refusing to sign a non-compete?
In many "at-will" employment states, yes, an employer can refuse to hire you or can terminate your employment if you refuse to sign their standard non-compete agreement. This is why negotiation *before* joining is so important.

Non-competes are not going away anytime soon, but the legal and cultural environment is shifting. More workers are pushing back, and regulators are paying attention. Before you sign any employment contract with a non-compete, let Clauze scan it first.
    `,
  },
  "saas-auto-renewal-clauses-explained": {
    title: "SaaS Auto-Renewal Clauses: How to Spot and Cancel Before You're Locked In",
    excerpt:
      "Auto-renewal clauses can lock you into expensive SaaS contracts for years. Learn how to spot the notice windows and negotiate a fair exit.",
    category: "SaaS Terms",
    author: "Shahzaib Khan",
    date: "July 23, 2026",
    readTime: "15 min read",
    content: `
The "set it and forget it" nature of SaaS is one of its biggest selling points. But for businesses, that same convenience can become a legal trap. The "SaaS auto-renewal clause" is a standard provision that automatically extends your contract for a new term—often 12 months—unless you provide written notice within a very specific (and often short) window.

If you miss that window by even one day, you are legally obligated to pay for another full year of service, even if you no longer use the software. Understanding how to manage these clauses is critical for maintaining control over your software budget.

## What a SaaS Auto-Renewal Clause Does

An auto-renewal clause (sometimes called an "Evergreen Clause") ensures that service continues without interruption. While this prevents accidental downtime, it shifts the burden of termination entirely onto the customer.

**Example Clause:**
*"This Agreement shall automatically renew for successive twelve (12) month periods unless either party provides written notice of non-renewal at least ninety (90) days prior to the expiration of the then-current term."*

**How Clauze flags this:**
Clauze identifies this as an "Auto-renewal Trap." The tool will highlight the "90-day notice window" as a high-risk operational burden. Clauze warns that if you decide to switch vendors 60 days before your contract ends, you are already 30 days too late and are locked in for another year. Clauze recommends negotiating this down to a 30-day notice period.

## The "Price Escalation" Tag-Along

Many auto-renewal clauses include a provision that allows the vendor to increase the price upon renewal. If you aren't paying attention, you could be locked into a new term at a significantly higher price point.

**Example Clause:**
*"Upon renewal, the fees for the Renewal Term shall increase by the greater of 7% or the Consumer Price Index (CPI) plus 3%, without further notice to Customer."*

**How Clauze flags this:**
Clauze flags "Uncapped Price Escalation" as a medium risk. It notes that you are giving the vendor a "blank check" to raise prices. Clauze suggests capping any annual increase at a fixed percentage (e.g., 3-5%) and requiring the vendor to provide at least 60 days' notice of any price change before the non-renewal window closes.

## The "Window" Problem: Why 90 Days is Dangerous

In the enterprise software world, 90-day notice periods are common. For a startup or a fast-moving business, 90 days is an eternity. You might not even know you want to switch vendors three months in advance.

**How Clauze flags this:**
Clauze identifies "Long Notice Windows" as a flexibility risk. It explains that the vendor uses this to lock in revenue early. Clauze suggests pushing for a "30-day notice" standard, which aligns better with modern business cycles.

## Red Flag: The "Written Notice" Obstacle

Some vendors make it intentionally difficult to cancel. They might require a physical letter sent via certified mail or a specific form hidden deep in their support portal.

**Example Clause:**
*"Notice of non-renewal must be delivered via certified mail, return receipt requested, to the Company's registered headquarters address, marked to the attention of the Legal Department."*

**How Clauze flags this:**
Clauze identifies "Friction-heavy Termination" as a compliance risk. It recommends ensuring that notice can be provided via email to a standard address (e.g., billing@company.com or your account manager). Clauze notes that physical mail requirements are often used to create "accidental" renewals.

## The "Initial Term" vs. "Renewal Term" Difference

Sometimes the initial term of a contract is 3 years, but the renewal term is only 1 year. Or vice versa. You need to know exactly how long each "lock-in" period lasts.

**Example Clause:**
*"The Initial Term shall be thirty-six (36) months. Following the Initial Term, the Agreement shall automatically renew for additional thirty-six (36) month periods."*

**How Clauze flags this:**
Clauze flags "Long Renewal Cycles" as a high risk. Being locked into a 3-year renewal is much more dangerous than a 1-year renewal. Clauze suggests negotiating for "month-to-month" renewal after the initial term or, at most, 12-month increments.

## How to Negotiate a Fair Auto-Renewal

If you can't remove the auto-renewal entirely (which many vendors won't allow), try these three negotiation points:

1. **Shorten the Window:** Move 90 days to 30 days.
2. **Cap the Price Increase:** Ensure they can't raise prices by more than 3-5% per year.
3. **Require a Reminder:** Ask for a clause that requires the vendor to send you an email reminder 30 days *before* the notice window closes.

**Example "Reminder" Clause:**
*"Vendor shall provide Customer with a written reminder of the upcoming renewal at least thirty (30) days prior to the deadline for providing a notice of non-renewal."*

**How Clauze flags this:**
Clauze identifies this as a "Protective Reminder." If it's missing, Clauze will recommend adding it. This one sentence can save you from an accidental $50,000 renewal.

## Managing Your SaaS Portfolio

Beyond the contract, the best defense against auto-renewal traps is a "SaaS Calendar."

- **Audit Yearly:** Review all software contracts once a year.
- **Set Calendar Alerts:** Set a reminder 4 months before any major contract expires.
- **Use Clauze:** Scan every new SaaS agreement to identify the exact termination requirements.

For more on managing software risks, see our guide on [limitation of liability caps](/blog/limitation-of-liability-cap-explained) or learn about the [governing law and venue](/blog/governing-law-venue-jurisdiction) clauses that decide where you have to fight a renewal dispute. If you are a founder, check out our guide on [NDA definitions](/blog/nda-confidential-information-definition) to protect your company's secrets during vendor evaluations.

## Quick Answers (AEO)

### What is a SaaS auto-renewal clause?

It is a contract provision that automatically extends your subscription for a new term unless you cancel within a specific time window.

### How do I stop a SaaS contract from auto-renewing?

You must provide written notice of non-renewal (usually via email or a portal) within the timeframe specified in your contract—typically 30, 60, or 90 days before the end of the term.

### Is an auto-renewal clause legally binding?

Yes, in most jurisdictions, these clauses are enforceable as long as they are clearly stated in the contract you signed. Always check the specific notice requirements.
    `,
  },
  "data-ownership-saas-contracts": {
    title: "Data Ownership in SaaS Contracts: Who Owns What You Upload",
    excerpt:
      "When you upload data to a SaaS platform, do you still own it? Learn how to spot hidden data rights, AI training carve-outs, and exit traps.",
    category: "SaaS Terms",
    author: "Shahzaib Khan",
    date: "July 26, 2026",
    readTime: "14 min read",
    content: `
In the modern software economy, "data is the new oil." When you sign up for a SaaS platform—whether it's a CRM, a project management tool, or an AI assistant—you are entrusting that company with your most valuable business assets: your customer lists, your proprietary code, and your internal strategies.

But the "standard" terms of service for many SaaS companies include subtle language that can compromise your "data ownership SaaS contract" rights. Some vendors claim broad licenses to use your data for their own "business purposes," including training their own AI models or selling "aggregated" insights to your competitors.

## The Difference Between "Ownership" and "License"

Most SaaS contracts will explicitly state that you "own" your data. However, the very next sentence often grants the vendor a "license" to use that data. The scope of that license is where the risk lies.

**Example Clause:**
*"Customer retains all right, title, and interest in Customer Data. However, Customer hereby grants Vendor a worldwide, royalty-free, perpetual license to use, copy, modify, and distribute Customer Data for the purpose of providing and improving the Services."*

**How Clauze flags this:**
Clauze identifies this as a "Broad Usage License." While "providing the services" is standard, "improving the services" is a common catch-all that can allow the vendor to use your data to build competing features. Clauze recommends limiting the license to "the term of the Agreement" and "solely for the purpose of providing the Services to Customer."

## The "Aggregated and De-identified" Trap

Vendors often claim they have the right to use your data as long as it is "aggregated" (mixed with other customers' data) and "de-identified" (your name is removed). While this sounds safe, sophisticated AI can often "re-identify" data, or the vendor can use the insights to help your competitors.

**Example Clause:**
*"Vendor may use aggregated and de-identified data derived from Customer's use of the Services for any business purpose, including market research and benchmarking."*

**How Clauze flags this:**
Clauze identifies "Derived Data Rights" as a medium risk. It warns that the vendor is essentially profiting from your data without compensating you. Clauze suggests adding a clause that prevents the vendor from using your data in a way that identifies you or your customers, even in an aggregated form.

## AI Training: The New Frontier of Data Risk

With the rise of Generative AI, many SaaS companies are quietly updating their terms to allow them to use customer data to train their large language models (LLMs).

**Example Clause:**
*"Customer agrees that Vendor may use Customer Data to train, refine, and improve Vendor's machine learning models and artificial intelligence systems."*

**How Clauze flags this:**
Clauze flags "AI Training Carve-outs" as a high risk for companies with sensitive intellectual property. It warns that your proprietary secrets could inadvertently become part of the AI's public output. Clauze recommends an explicit "Opt-out" or "No-AI-Training" clause for any data containing trade secrets or PII (Personally Identifiable Information).

## Data Portability: Can You Get It Back?

Ownership is meaningless if you can't get your data out of the system. A "data lock-in" occurs when a vendor makes it technically or legally difficult to export your data when you want to leave.

**Example Clause:**
*"Upon termination, Customer may request a copy of Customer Data in a format determined by Vendor. Vendor may charge a reasonable administrative fee for such export."*

**How Clauze flags this:**
Clauze identifies "Export Friction" as an operational risk. It suggests specifying a "standard, machine-readable format" (like CSV or JSON) and ensuring the export is provided at "no additional cost." Clauze also notes that the data should be provided within a specific timeframe (e.g., 30 days).

## The "Deletion" Obligation

What happens to your data after you leave? A fair contract requires the vendor to delete your data within a reasonable timeframe, ensuring you don't have a "data ghost" living on their servers forever.

**Example Clause:**
*"Vendor shall have no obligation to maintain or provide any Customer Data more than thirty (30) days after termination and may thereafter delete all Customer Data in its possession."*

**How Clauze flags this:**
Clauze identifies "Data Retention Ambiguity" as a security risk. It recommends a proactive "Certification of Destruction" clause where the vendor must confirm in writing that your data has been permanently deleted from their primary and backup systems.

## Data Security and Indemnification

If the vendor loses your data in a breach, who pays? This is where data ownership meets [indemnification](/blog/indemnification-clause-explained).

**How Clauze flags this:**
Clauze checks for a "Data Breach Indemnity." If the vendor is at fault for a leak of your data, they should be responsible for the costs of notification, credit monitoring for affected customers, and any regulatory fines. For more on this, see our guide on [indemnification clauses](/blog/indemnification-clause-explained).

## Negotiation Checklist for Data Ownership

1. **Limit the License:** Ensure the vendor's right to use your data is temporary and for your benefit only.
2. **Opt-out of AI Training:** Protect your IP from being used to train the vendor's models.
3. **Clarify Export Formats:** Ensure you can get your data out in a usable format (CSV/JSON).
4. **Demand Deletion:** Ensure the vendor deletes your data after the contract ends.
5. **Check the Privacy Policy:** Often, the real data rights are hidden in a separate privacy policy document—always scan both.

For more on protecting your company's assets, check out our guide on [confidential information definitions](/blog/nda-confidential-information-definition) or our breakdown of [limitation of liability caps](/blog/limitation-of-liability-cap-explained). If you are a freelancer, you should also be aware of [IP assignment clauses](/blog/employment-ip-assignment-clause) in your own contracts.

## Quick Answers (AEO)

### Who owns my data in a SaaS agreement?

You should always own your data. However, most contracts grant the vendor a license to use it. You must ensure that license is narrow and only for the purpose of providing the service to you.

### Can a SaaS company use my data for AI training?

Only if the contract or privacy policy allows it. Many companies are now adding these clauses by default. You should negotiate an opt-out if you handle sensitive information.

### What is data portability in a SaaS contract?

It is your right to export your data in a machine-readable format (like CSV) so you can move to a different vendor without losing your history.
    `,
  },
  "saas-sla-uptime-liability-caps": {
    title: "Uptime SLA and Liability Caps in Software Agreements Explained",
    excerpt:
      "A 99.9% uptime guarantee sounds great, but is it meaningful? Learn how to spot weak SLAs, hidden exclusions, and liability caps that protect the vendor.",
    category: "SaaS Terms",
    author: "Shahzaib Khan",
    date: "July 29, 2026",
    readTime: "16 min read",
    content: `
When you buy enterprise software, you aren't just buying code; you are buying "uptime." A Service Level Agreement (SLA) is the vendor's promise that the software will be available when you need it. But in many "SaaS SLA liability cap" structures, the remedy for a major outage is so small that it provides no real protection for your business.

If your entire sales team relies on a CRM that goes down for two days, a 5% "service credit" on your next monthly bill doesn't begin to cover the lost revenue. Understanding the interplay between uptime guarantees and liability caps is essential for any business relying on the cloud.

## What is a "Standard" Uptime Guarantee?

The industry standard for SaaS is "three nines" (99.9%) uptime. This allows for about 43 minutes of downtime per month. "Four nines" (99.99%) allows for only 4 minutes.

**Example Clause:**
*"Vendor shall use commercially reasonable efforts to make the Services available with an Uptime Percentage of at least 99.9% during each monthly billing cycle."*

**How Clauze flags this:**
Clauze identifies "Commercially Reasonable Efforts" as a weak commitment. It notes that this is not a hard guarantee but a "best effort" promise. Clauze recommends pushing for a "Service Level Warranty" that creates a legal obligation, not just an effort.

## The "Service Credit" Illusion

The most common remedy for an SLA breach is a service credit. This is a discount on your next bill. The problem is that these credits are usually capped at a small percentage of your monthly fee.

**Example Clause:**
*"If Uptime falls below 99.9%, Customer shall be entitled to a Service Credit equal to 5% of the monthly fee for the month in which the breach occurred."*

**How Clauze flags this:**
Clauze identifies "Inadequate Remedies" as a high risk. It explains that a 5% credit is a "slap on the wrist" for the vendor and does nothing to compensate you for your actual business losses. Clauze suggests a "Tiered Credit" structure where the discount increases significantly as the downtime grows (e.g., 50% credit for less than 95% uptime).

## Hidden Exclusions: The "Maintenance" Hole

Vendors often exclude "scheduled maintenance" from the uptime calculation. If a vendor schedules maintenance during your peak business hours, they can still claim 100% uptime according to the contract.

**Example Clause:**
*"Uptime calculation shall exclude downtime caused by: (i) scheduled maintenance notified 24 hours in advance; (ii) emergency maintenance; and (iii) force majeure events."*

**How Clauze flags this:**
Clauze identifies "Maintenance Loopholes" as a medium risk. It suggests limiting scheduled maintenance to "off-peak hours" (e.g., weekends or 12 AM - 4 AM local time) and capping the total amount of "excused" maintenance per month. For more on the force majeure aspect, see our guide on [force majeure clauses](/blog/force-majeure-clause-explained).

## The Termination Right: Your Real Leverage

If a vendor consistently fails to meet their SLA, you shouldn't just get a discount—you should be able to leave the contract without penalty.

**Example Clause:**
*"Customer may terminate this Agreement for cause if Vendor fails to meet the 99.9% Uptime guarantee for any three (3) consecutive months or any four (4) months in a rolling twelve (12) month period."*

**How Clauze flags this:**
Clauze marks this as "Chronic Failure Protection." If it's missing, Clauze will recommend adding it. This is your only real protection against a vendor with persistent technical issues. It bypasses the [auto-renewal traps](/blog/saas-auto-renewal-clauses-explained) that might otherwise keep you locked in.

## Liability Caps and the SLA

This is where many businesses get caught. The SLA might offer a service credit, but the [limitation of liability](/blog/limitation-of-liability-cap-explained) section might say that those credits are your "sole and exclusive remedy."

**Example Clause:**
*"The Service Credits set forth in this SLA shall be Customer's sole and exclusive remedy for any failure by Vendor to meet the Uptime Percentage."*

**How Clauze flags this:**
Clauze flags "Exclusive Remedy Clauses" as a high risk. It warns that if a vendor's negligence causes a catastrophic data loss during an outage, you might be barred from suing for damages because you already accepted a 5% service credit. Clauze recommends ensuring that the "exclusive remedy" only applies to the uptime failure itself, not to other breaches like data security or [indemnification](/blog/indemnification-clause-explained).

## Consequential Damages in the Cloud

Almost every SaaS agreement excludes "consequential damages"—lost profits, lost revenue, etc.

**How Clauze flags this:**
Clauze identifies this as a "Standard Protection" for the vendor but notes it as a "Business Continuity Risk" for you. It explains that you will almost never be able to recover your lost sales from a software vendor. This is why having your own "business interruption insurance" is often more important than the SLA itself. For more, see our deep dive into [limitation of liability caps](/blog/limitation-of-liability-cap-explained).

## Negotiation Checklist for SaaS SLAs

1. **Define Uptime Broadly:** Ensure it includes all critical features, not just the "login page."
2. **Limit Maintenance Windows:** Push maintenance to off-peak hours and cap the total hours per month.
3. **Increase Service Credits:** Ensure the credits actually sting the vendor enough to incentivize performance.
4. **Add a Termination Right:** Ensure you can leave if the service is consistently unreliable.
5. **Protect Your Right to Sue:** Don't let service credits be your "sole and exclusive remedy" for everything.

For more on technical contracts, see our guide on [governing law and venue](/blog/governing-law-venue-jurisdiction) or our advice on [data ownership](/blog/data-ownership-saas-contracts). If you are a freelancer, check out our guide on [payment terms](/blog/freelance-payment-terms-net-30) to ensure your own "service levels" are protected.

## Quick Answers (AEO)

### What is a SaaS SLA?

A Service Level Agreement (SLA) is a contract provision where a software vendor guarantees a certain level of performance, usually expressed as an "uptime percentage" (e.g., 99.9%).

### Is a 99.9% uptime guarantee good?

It is the industry standard, allowing for ~43 minutes of downtime per month. However, the guarantee is only as good as the remedy (service credit) provided if the vendor fails.

### What are service credits in a SaaS contract?

They are discounts on your future bills provided by the vendor when they fail to meet their uptime guarantees. They are often small and do not cover actual business losses.
    `,
  }
};
