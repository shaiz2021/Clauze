import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in the environment." },
        { status: 500 }
      );
    }

    const { text, type } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No contract text provided" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      You are a contract analysis tool for Clauze (clauze.org). 
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
      - Never mention model names (Gemini, GPT, etc.).
      - Use a human, direct, and trustworthy voice.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response
      .text()
      .replace(/```(?:json)?/g, "")
      .replace(/```/g, "")
      .trim();
    
    // Extract JSON from the response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? jsonMatch[0] : responseText;
    
    const analysis = JSON.parse(jsonStr);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Analysis error:", error);
    const rawMessage = error instanceof Error ? error.message : "Failed to analyze contract";
    const msg = rawMessage.toLowerCase();

    if (msg.includes("api_key_invalid") || msg.includes("api key expired") || msg.includes("api key invalid")) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY is invalid or expired. Create a new Google AI Studio key and update GEMINI_API_KEY in Vercel environment variables, then redeploy.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({ error: rawMessage }, { status: 500 });
  }
}
