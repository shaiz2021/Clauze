import { GoogleGenerativeAI } from "@google/generative-ai";
import { Mistral } from "@mistralai/mistralai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const geminiKey = process.env.GEMINI_API_KEY;
    const mistralKey = process.env.MISTRAL_API_KEY;

    if (!geminiKey && !mistralKey) {
      return NextResponse.json(
        { error: "No AI API keys configured (Gemini or Mistral)." },
        { status: 500 }
      );
    }

    const { text, type } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No contract text provided" }, { status: 400 });
    }

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
      - Never mention model names (Gemini, GPT, Mistral, etc.).
      - Use a human, direct, and trustworthy voice.
    `;

    let responseText = "";

    // 1. Try Gemini first if available
    if (geminiKey) {
      try {
        const genAI = new GoogleGenerativeAI(geminiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        responseText = response.text();
      } catch (geminiError: any) {
        console.error("Gemini failed, falling back to Mistral:", geminiError.message);
        // If Gemini failed and we don't have Mistral key, throw the error
        if (!mistralKey) throw geminiError;
      }
    }

    // 2. Try Mistral if Gemini failed or wasn't configured
    if (!responseText && mistralKey) {
      try {
        const client = new Mistral({ apiKey: mistralKey });
        const result = await client.chat.complete({
          model: "mistral-large-latest",
          messages: [{ role: "user", content: prompt }],
          responseFormat: { type: "json_object" }
        });
        
        const content = result.choices?.[0]?.message?.content;
        if (typeof content === "string") {
          responseText = content;
        } else if (Array.isArray(content)) {
          // Handle cases where content might be an array of parts
          responseText = content.map(part => ("text" in part ? part.text : "")).join("");
        }
      } catch (mistralError: any) {
        console.error("Mistral failed:", mistralError.message);
        throw mistralError;
      }
    }

    if (!responseText) {
      throw new Error("Failed to get response from any AI provider");
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
          error:
            "The AI service is currently at its limit. Please try again in a few minutes or contact support if the issue persists.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json({ error: rawMessage }, { status: 500 });
  }
}
