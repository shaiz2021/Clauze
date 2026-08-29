import { Mistral } from "@mistralai/mistralai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const mistralKey = process.env.MISTRAL_API_KEY;

    if (!mistralKey) {
      return NextResponse.json(
        { error: "MISTRAL_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const { question, contractText } = await req.json();

    if (!question || !contractText) {
      return NextResponse.json({ error: "Missing question or contract text" }, { status: 400 });
    }

    const prompt = `
      You are a specialized contract assistant for Clauze (clauze.xyz).
      Answer the user's question based ONLY on the provided contract text.
      
      Return ONLY raw JSON. No markdown. No code fences.
      
      Structure:
      {
        "answer": "Clear, direct answer in plain English",
        "evidence": "Exact relevant text from the contract (if found)"
      }

      RULES:
      - If the answer is not in the contract, say "I could not find a clear answer to this in the contract."
      - Do not invent information.
      - Use a human, trustworthy voice.
      - Keep the answer direct and concise.

      Question: ${question}
      Contract: ${contractText.substring(0, 30000)}
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
      throw new Error("Failed to get response from AI");
    }

    const cleaned = responseText
      .replace(/```(?:json)?/g, "")
      .replace(/```/g, "")
      .trim();
    
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? jsonMatch[0] : cleaned;
    
    const qaResponse = JSON.parse(jsonStr);

    return NextResponse.json(qaResponse);
  } catch (error) {
    console.error("QA error:", error);
    return NextResponse.json({ error: "Failed to answer question" }, { status: 500 });
  }
}
