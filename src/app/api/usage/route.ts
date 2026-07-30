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

  // Get usage
  const { data: usage } = await supabase
    .from("scan_usage")
    .select("count")
    .eq("user_id", user.id)
    .eq("month", month)
    .single();

  return NextResponse.json({
    plan,
    count: usage?.count || 0,
    limit: plan === "Free" ? 1 : Infinity
  });
}

export async function POST() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const month = new Date().toISOString().slice(0, 7);

  // Increment usage using upsert
  const { data: usage, error: getError } = await supabase
    .from("scan_usage")
    .select("id, count")
    .eq("user_id", user.id)
    .eq("month", month)
    .single();

  if (getError && getError.code !== "PGRST116") { // PGRST116 is not found
    return NextResponse.json({ error: getError.message }, { status: 500 });
  }

  if (usage) {
    const { error: updateError } = await supabase
      .from("scan_usage")
      .update({ count: usage.count + 1, updated_at: new Date().toISOString() })
      .eq("id", usage.id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }
  } else {
    const { error: insertError } = await supabase
      .from("scan_usage")
      .insert({ user_id: user.id, month, count: 1 });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
