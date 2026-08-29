# Clauze Immediate Upgrade Plan

## Purpose

This document is for Trae AI IDE.

Do not rebuild Clauze from scratch.

First inspect the existing Clauze codebase and understand the current implementation. Keep all working features unless a change is necessary.

The goal is to make only the most important upgrades right now.

Do not add unnecessary features, pages, libraries, or complexity.

## Core Goal

Clauze should feel like a product made specifically for contract analysis, not just a general AI chatbot with a contract prompt.

The improved experience should be:

**Upload contract → Analyze → See important risks → See evidence → Understand why it matters → Know what to consider doing → Ask questions**

---

# 1. PDF Upload

This is the first priority.

Users should be able to upload a PDF contract directly instead of only pasting text.

### Requirements

Add:

• PDF file picker  
• Drag and drop if it fits the existing UI  
• File type validation  
• Reasonable file size limit  
• Upload progress  
• Processing state  
• Text extraction  
• Error handling  

After successful extraction, send the extracted contract text through the existing analysis system.

Do not change the current pasted text workflow. Keep both options.

### Important

If the PDF cannot be read properly, do not send bad or empty text to the AI.

Show a simple error:

> We could not read this PDF correctly. Please try another file or paste the contract text instead.

If OCR is difficult with the current stack, do not build a large OCR system now. Leave scanned PDF support for later.

---

# 2. Contract Overview

After analysis, show a short structured overview before the detailed findings.

Extract where available:

• Contract type  
• Parties  
• User's role  
• Start date  
• End date  
• Renewal  
• Payment terms  
• Termination  
• Governing law  

Example:

**Contract Type:** Service Agreement

**Your Role:** Service Provider

**Duration:** January 1, 2027 to December 31, 2027

**Payment:** Net 30

**Renewal:** Automatically renews

Do not invent information.

If something is not found, say:

> Not clearly stated

---

# 3. Improve Risk Analysis

Improve the current analysis rather than replacing it unnecessarily.

Focus on the most useful categories:

• Payment  
• Liability  
• Indemnification  
• Intellectual property  
• Termination  
• Renewal  
• Confidentiality  
• Non compete  
• Unusual obligations  

Each important finding should have a consistent structure.

### Finding structure

**Risk level**

Low, Medium, High, or Critical.

**What the contract says**

Simple explanation.

**Evidence**

Relevant text from the contract.

**Why it matters**

Explain the practical effect in simple English.

**What you can consider**

Give a practical action the user may consider.

Example:

### High Risk: Liability

**What the contract says**

Your liability is not clearly limited.

**Evidence**

Show the relevant contract wording.

**Why it matters**

You may be responsible for losses beyond the value of the agreement.

**What you can consider**

Consider asking for a reasonable liability cap.

---

# 4. Evidence Must Be Reliable

This is a critical requirement.

Every important risk should be connected to actual contract text.

The AI must not invent a clause or evidence.

If possible, show:

• Section name or number  
• Page number  
• Relevant text  

If exact location information is unavailable, show the relevant text without inventing a page or section number.

The user should be able to understand:

> "Clauze found this because of this part of my contract."

---

# 5. Risk Score

Keep the current risk score if Clauze already has one.

Improve it only if necessary.

The score should be based on the actual findings.

Example:

**72/100**

Moderate Risk

Then show the main reasons:

• High risk: Liability  
• High risk: Termination  
• Medium risk: Payment  

Do not present the score as a legal verdict.

Avoid wording such as:

> This contract is safe.

Use:

> Clauze identified several areas that may deserve review.

---

# 6. Recommended Action

This is one of the most important upgrades.

Every significant finding should tell the user what they can consider doing.

Examples:

> Consider requesting a liability cap.

> Consider asking for Net 30 payment terms.

> Consider clarifying IP ownership.

> Consider requesting a termination notice period.

Keep recommendations short.

Do not pretend Clauze knows the user's exact legal or business situation.

---

# 7. Suggested Wording

For important findings, add a simple action:

**Suggest Better Wording**

The AI can provide possible alternative wording.

Example:

**Issue**

No clear termination notice.

**Possible wording**

> Either party may terminate this agreement by providing fourteen days written notice.

Add:

**Copy wording**

Make it clear that this is suggested wording for discussion and may need professional legal review.

Do not automatically replace the original contract clause.

---

# 8. Contract Q&A

Add a simple question box after analysis.

Example:

> Ask anything about this contract...

Users should be able to ask:

> Can they terminate this contract without notice?

> Who owns the work?

> When do I get paid?

> Does this contract automatically renew?

The answer must be based on the uploaded or pasted contract.

Whenever possible, show the relevant evidence.

If the contract does not contain the answer, say:

> I could not find a clear answer to this in the contract.

Do not make up an answer.

---

# 9. Keep the Existing Product Simple

Do not add these features right now:

• DOCX upload  
• Contract benchmarking  
• Personal playbooks  
• Version comparison  
• Lawyer marketplace  
• Contract reminders  
• Team collaboration  
• Enterprise features  
• Large jurisdiction database  
• Compliance engine  
• Contract templates marketplace  
• Complex contract management  

These can be considered later.

The current goal is to make the core contract analysis experience excellent.

---

# 10. UI Requirements

Keep the existing Clauze design language.

Do not redesign the whole application unless required.

The analysis page should make the important information easy to scan.

Recommended order:

1. Contract overview
2. Overall risk
3. Top risks
4. Detailed findings
5. Important contract information
6. Suggested actions
7. Contract Q&A

Use clear visual hierarchy.

Avoid huge blocks of AI generated text.

Use cards, sections, labels, and short paragraphs.

The interface should work properly on desktop and mobile.

---

# 11. AI Implementation Requirements

Before changing prompts or architecture, inspect the current AI implementation.

Reuse the current model and API unless there is a clear technical reason to change them.

Prefer structured AI output.

For example, internally the analysis should contain fields similar to:

```json
{
  "category": "liability",
  "risk_level": "high",
  "summary": "Liability is not clearly limited.",
  "evidence": "Relevant contract text",
  "why_it_matters": "Practical explanation",
  "recommended_action": "Consider requesting a reasonable liability cap.",
  "suggested_wording": "Possible alternative wording"
}
```

The exact implementation should match the existing project.

Validate AI output before displaying it.

If evidence is missing, do not display fabricated evidence.

---

# 12. Security

Do not weaken the current security.

Make sure:

• Users can only access their own contracts.
• Uploaded files are not public.
• AI API keys remain server side.
• File types are validated.
• File sizes are limited.
• Temporary files are handled safely.
• Contract data is not exposed through client side requests.

If Supabase Row Level Security already exists, preserve it and verify it for the new upload functionality.

---

# 13. Error and Loading States

Add clear states for:

### Uploading

> Uploading your contract...

### Reading

> Reading your contract...

### Analysis

> Reviewing important clauses...

### Complete

> Your contract review is ready.

### Error

> We could not complete the review. Please try again.

Do not show raw API errors, stack traces, or technical information to users.

---

# 14. Testing

Before considering the upgrade complete, test with at least these contracts:

1. NDA
2. Freelancer agreement
3. SaaS agreement
4. Service agreement
5. Contract with unlimited liability
6. Contract with automatic renewal
7. Contract with unusual termination terms

Check:

• PDF upload works
• Existing text input still works
• Text extraction works
• Contract overview is accurate
• Risks use real evidence
• Risk score is consistent
• Recommendations are relevant
• Suggested wording works
• Q&A stays grounded in the contract
• Missing information is not invented
• Mobile UI works
• User data remains private

---

# 15. Development Order

Complete the work in this order.

### Step 1

Inspect the existing project.

Do not immediately start changing files.

Identify:

• Current upload/input flow
• Current AI analysis flow
• Current database
• Current authentication
• Current report system
• Current analysis UI

### Step 2

Add PDF upload without breaking pasted text.

### Step 3

Improve the analysis output structure.

### Step 4

Add evidence and "Why it matters".

### Step 5

Add recommended actions.

### Step 6

Add suggested wording.

### Step 7

Add contract Q&A.

### Step 8

Test everything together.

### Step 9

Fix bugs and improve UI.

### Step 10

Deploy only after testing.

---

# 16. Important Development Rule

Do not overengineer this.

Use the existing Clauze architecture wherever possible.

Do not install a new library when the current stack can already solve the problem.

Do not create unnecessary database tables.

Do not rewrite working features without a reason.

Do not change the AI provider just for the sake of changing it.

Do not add features outside this document.

If the existing implementation creates a technical limitation, explain the limitation first and choose the simplest reliable solution.

---

# 17. Final Target

After this upgrade, a user should be able to:

1. Open Clauze.
2. Upload a PDF or paste a contract.
3. Clauze reads the contract.
4. Clauze identifies the basic contract information.
5. Clauze gives an overall risk score.
6. Clauze identifies important risks.
7. Each risk shows actual contract evidence.
8. Clauze explains why the risk matters.
9. Clauze suggests what the user can consider doing.
10. Clauze can suggest alternative wording.
11. The user can ask questions about the contract.

That is the complete immediate upgrade.

Do not build beyond this scope until these features are reliable.

---

# Information Needed From the Founder

1. **Current AI model and API:** Mistral API (existing key already in use). Reuse this — do not switch providers.

2. **Current Supabase schema:** Supabase database already exists. Inspect the current schema and reuse it; add tables only if strictly necessary for the new upload flow.

3. **Maximum PDF size:** 10 MB. Reject larger files with a clear error message and tell them to upload a smaller file upto 10mbs or less.

4. **Account required before uploading:** Yes. Users must be signed in before they can upload or paste a contract.

5. **Storage / retention of uploaded contracts:** Not permanent. Uploaded documents are automatically deleted 7 days after upload. Notify the user before deletion so they can save copies to their own system, with reminders at 3 days and 1 day before deletion.

6. **Risk score:** Redesign the current risk score only if the existing one is not suitable for the upgraded finding structure. If the current score can be adapted, keep it; otherwise rebuild it based on the new structured findings.

7. **Preferred PDF extraction service:** None specified. Use a lightweight text-extraction library that runs on the current stack (server-side) rather than adding a paid external service. Do not build OCR for scanned PDFs now.