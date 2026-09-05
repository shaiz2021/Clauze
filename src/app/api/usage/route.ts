import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const month = new Date().toISOString().slice(0, 7);

  // Get user plan
  const { data: profile } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", user.id)
    .single();

  const plan = profile?.plan || "Free";

  // Get free monthly usage
  const { data: usage } = await supabase
    .from("scan_usage")
    .select("count")
    .eq("user_id", user.id)
    .eq("month", month)
    .single();

  // Get paid credits
  const { data: paidCredits } = await supabase
    .from("paid_credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  return NextResponse.json({
    plan,
    freeUsed: usage?.count || 0,
    freeLimit: plan === "Free" ? 1 : Infinity,
    paidCredits: paidCredits?.balance || 0,
  });
}
