import { Mistral } from "@mistralai/mistralai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const mistralKey = process.env.MISTRAL_API_KEY;

    if (!mistralKey) {
      return NextResponse.json(
        { error: "MISTRAL_API_KEY is not configured in the environment." },
        { status: 500 }
      );
    }

    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No contract text provided" }, { status: 400 });
    }

    const prompt = `
      You are a specialized contract analysis tool for Clauze (clauze.xyz). 
      Return ONLY raw JSON. No markdown. No code fences. 

      Structure your response exactly like this:
      {
        "overview": {
          "type": "Contract type or 'Not clearly stated'",
          "parties": "List of parties or 'Not clearly stated'",
          "userRole": "User's role (e.g. Service Provider, Client) or 'Not clearly stated'",
          "startDate": "Start date or 'Not clearly stated'",
          "endDate": "End date or 'Not clearly stated'",
          "renewal": "Renewal terms or 'Not clearly stated'",
          "payment": "Payment terms or 'Not clearly stated'",
          "termination": "Termination terms or 'Not clearly stated'",
          "governingLaw": "Governing law or 'Not clearly stated'"
        },
        "score": number (0-100),
        "summary": "1-2 sentences, plain English",
        "findings": [{
          "risk": "critical|high|medium|low",
          "category": "Payment|Liability|Indemnification|IP|Termination|Renewal|Confidentiality|Non-compete|Unusual",
          "name": "Brief title of the finding",
          "whatItSays": "Simple explanation of what the contract says",
          "evidence": "Relevant text directly from the contract. Must be accurate.",
          "whyItMatters": "Practical effect in simple English",
          "recommendation": "Short actionable sentence for the user to consider",
          "suggestedWording": "Alternative wording for discussion (optional)"
        }],
        "counts": { "critical": n, "high": n, "medium": n, "low": n }
      }

      SCORING: 75-100 = Fair, 40-74 = Review Needed, 0-39 = Seek Advice.
      Base the score on the severity and number of findings.

      EVIDENCE RULES:
      - Every finding MUST have evidence from the contract text.
      - NEVER invent evidence. If not found, do not include the finding.
      - Include section name/number if available in the evidence text.

      CONTENT RULES:
      - Use a human, direct, and trustworthy voice.
      - Avoid corporate jargon or robotic phrasing.
      - Never use words like: AI-powered, AI-driven, leverages, cutting-edge, revolutionary, game-changing.
      - Write "plain English" not "plain-English".
      - Never mention model names (Mistral, GPT, etc.).
      - Keep recommendations short.

      Contract text: ${text.substring(0, 30000)}
    `;

    const client = new Mistral({ apiKey: mistralKey });
    const result = await client.chat.complete({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
      responseFormat: { type: "json_object" }
    });
    
    const content = result.choices?.[0]?.message?.content;
    let responseText = "";

    if (typeof content === "string") {
      responseText = content;
    } else if (Array.isArray(content)) {
      responseText = content.map(part => ("text" in part ? part.text : "")).join("");
    }

    if (!responseText) {
      throw new Error("Failed to get response from Mistral");
    }

    const cleaned = responseText
      .replace(/```(?:json)?/g, "")
      .replace(/```/g, "")
      .trim();
    
    // Extract JSON from the response
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? jsonMatch[0] : cleaned;
    
    const analysis = JSON.parse(jsonStr);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Analysis error:", error);
    const rawMessage = error instanceof Error ? error.message : "Failed to analyze contract";
    const msg = rawMessage.toLowerCase();

    if (msg.includes("quota") || msg.includes("rate limit") || msg.includes("429")) {
      return NextResponse.json(
        {
          error: "Mistral API limit reached. Please check your quota or try again later.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json({ error: rawMessage }, { status: 500 });
  }
}
