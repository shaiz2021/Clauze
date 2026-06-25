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

    const { text, type } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No contract text provided" }, { status: 400 });
    }

    const prompt = `
      You are a contract analysis tool for Clauze (clauze.xyz). 
      Return ONLY raw JSON. No markdown. No code fences. 

      {
        "score": number (0-100),
        "summary": "1-2 sentences, plain English",
        "clauses": [{
          "risk": "high|medium|low",
          "name": "clause type",
          "excerpt": "quote max 100 chars",
          "explanation": "plain English max 55 words",
          "recommendation": "one actionable sentence"
        }],
        "counts": { "high": n, "medium": n, "low": n }
      }

      Score: 75-100 = fair, 40-74 = review needed, 0-39 = seek advice.
      Contract type: ${type}
      Contract text: ${text.substring(0, 30000)}

      CONTENT RULES:
      - Never use words like: AI-powered, AI-driven, leverages, cutting-edge, revolutionary, game-changing.
      - Write "plain English" not "plain-English".
      - Avoid corporate jargon or robotic phrasing.
      - Never mention model names (Gemini, GPT, Mistral, etc.).
      - Use a human, direct, and trustworthy voice.
    `;

    const client = new Mistral({ apiKey: mistralKey });
    const result = await client.chat.complete({
      model: "mistral-large-latest",
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
