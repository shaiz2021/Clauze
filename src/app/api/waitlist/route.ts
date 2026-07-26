import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, plan } = await req.json();

    if (!email || !plan) {
      return NextResponse.json(
        { error: "Email and plan are required" },
        { status: 400 }
      );
    }

    // 1. Insert into Supabase (Waitlist table)
    // We use the browser client logic here but on the server side 
    // it will still work if the env vars are present.
    const supabase = createSupabaseBrowserClient();
    const { error: supabaseError } = await supabase
      .from("waitlist")
      .insert([{ email, plan_interested: plan }]);

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // 2. Send notification email via Resend
    try {
      await resend.emails.send({
        from: "Clauze <onboarding@resend.dev>",
        to: "mshahzaibkk2003@gmail.com",
        subject: "New Clauze Waitlist Signup",
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #7b6ef6;">New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Plan Interested:</strong> ${plan}</p>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              Sent from Clauze Waitlist System
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // We don't want to fail the whole request if only the email fails, 
      // as the user is already in the database.
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
