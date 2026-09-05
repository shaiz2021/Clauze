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

  // Get purchase history for Starter users
  const { data: purchases } = await supabase
    .from("paid_purchases")
    .select("id, status, credits_granted, created_at")
    .eq("user_id", user.id)
    .eq("status", "completed")
    .order("created_at", { ascending: false });

  // Calculate scans remaining
  const freeUsed = usage?.count || 0;
  const paidBalance = paidCredits?.balance || 0;
  
  let scansRemaining = 0;
  let scanLimit = 0;
  let scanType = "free";

  if (plan === "Free") {
    scanLimit = 1;
    scansRemaining = Math.max(0, scanLimit - freeUsed);
    scanType = "free";
  } else if (plan === "Starter") {
    scanLimit = -1; // unlimited via paid credits
    scansRemaining = paidBalance;
    scanType = "paid";
  } else if (plan === "Pro") {
    scanLimit = -1; // unlimited
    scansRemaining = -1; // unlimited indicator
    scanType = "pro";
  }

  // Plan features
  const features = {
    free: {
      name: "Free",
      scansPerMonth: 1,
      pdfUpload: true,
      pdfDownload: true,
      scanHistory: false,
      hasUnlimitedScans: false,
    },
    starter: {
      name: "Starter",
      scansPerMonth: -1, // pay-per-use
      pdfUpload: true,
      pdfDownload: true,
      scanHistory: false,
      hasUnlimitedScans: false,
    },
    pro: {
      name: "Pro",
      scansPerMonth: -1, // unlimited
      pdfUpload: true,
      pdfDownload: true,
      scanHistory: true,
      hasUnlimitedScans: true,
    },
  };

  return NextResponse.json({
    plan,
    planInfo: features[plan.toLowerCase() as keyof typeof features] || features.free,
    scanType,
    scanLimit,
    scansRemaining,
    freeUsed,
    freeLimit: plan === "Free" ? 1 : -1,
    paidCredits: paidBalance,
    totalPurchases: purchases?.length || 0,
    month,
  });
}
