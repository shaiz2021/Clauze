import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import crypto from "crypto";

// Lemon Squeezy webhook signature verification
function verifySignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  
  // Use timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(digest, "hex"),
      Buffer.from(signature.replace(/^sha256=/, ""), "hex")
    );
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const starterVariantId = process.env.LEMONSQUEEZY_STARTER_VARIANT_ID;

  // Reject if webhook secret not configured
  if (!webhookSecret) {
    console.error("Webhook secret not configured");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  // Get raw body for signature verification
  const rawBody = await req.text();
  const signature = req.headers.get("X-Signature");

  if (!signature) {
    console.error("Missing X-Signature header");
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  // Verify webhook signature
  if (!verifySignature(rawBody, signature, webhookSecret)) {
    console.error("Invalid webhook signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventName = payload?.meta?.event_name;
  const orderId = payload?.data?.id?.toString();
  const variantId = payload?.data?.attributes?.first_order_item?.variant_id?.toString();
  const userId = payload?.meta?.custom_data?.user_id;
  const status = payload?.data?.attributes?.status;

  // Initialize Supabase admin client
  let supabase: ReturnType<typeof createSupabaseAdminClient>;
  try {
    supabase = createSupabaseAdminClient();
  } catch (error) {
    console.error("Failed to create Supabase client:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  // Handle order_created event
  if (eventName === "order_created") {
    // Validate required fields
    if (!orderId || !userId || !variantId) {
      console.error("Missing required fields in order_created:", { orderId, userId, variantId });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify this is the Starter variant
    if (variantId !== starterVariantId) {
      console.error("Unknown variant ID:", variantId);
      return NextResponse.json({ error: "Unknown variant" }, { status: 400 });
    }

    // Verify order status is paid
    if (status !== "paid") {
      console.log("Order not paid yet, skipping:", orderId, status);
      return NextResponse.json({ received: true, status: "waiting_for_payment" });
    }

    // Check if order already processed (idempotency)
    const { data: existingOrder } = await supabase
      .from("paid_purchases")
      .select("id, status")
      .eq("lemonsqueezy_order_id", orderId)
      .single();

    if (existingOrder) {
      console.log("Order already processed:", orderId);
      return NextResponse.json({ received: true, status: "already_processed" });
    }

    // Verify user exists
    const { data: userData } = await supabase.auth.admin.getUserById(userId);
    if (!userData?.user) {
      console.error("User not found:", userId);
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    // Record the purchase and grant credit atomically
    const { error: purchaseError } = await supabase
      .from("paid_purchases")
      .insert({
        user_id: userId,
        lemonsqueezy_order_id: orderId,
        variant_id: variantId,
        status: "completed",
        credits_granted: 1,
      });

    if (purchaseError) {
      console.error("Failed to record purchase:", purchaseError);
      return NextResponse.json({ error: "Failed to record purchase" }, { status: 500 });
    }

    // Add the paid credit to user's balance
    const { error: creditError } = await supabase.rpc("add_paid_credits", {
      p_user_id: userId,
      p_amount: 1,
    });

    if (creditError) {
      console.error("Failed to add credits:", creditError);
      // The purchase is recorded but credits failed - this needs manual intervention
      return NextResponse.json({ error: "Failed to add credits" }, { status: 500 });
    }

    console.log("Successfully processed Starter purchase:", orderId, "for user:", userId);
    return NextResponse.json({ received: true, status: "credits_granted" });
  }

  // Handle order_refunded event
  if (eventName === "order_refunded") {
    if (!orderId) {
      console.error("Missing order ID in refund event");
      return NextResponse.json({ error: "Missing order ID" }, { status: 400 });
    }

    // Check if order exists and is not already refunded
    const { data: existingPurchase } = await supabase
      .from("paid_purchases")
      .select("id, status, user_id, credits_granted")
      .eq("lemonsqueezy_order_id", orderId)
      .single();

    if (!existingPurchase) {
      console.log("Purchase not found for refund:", orderId);
      return NextResponse.json({ received: true, status: "purchase_not_found" });
    }

    if (existingPurchase.status === "refunded") {
      console.log("Order already refunded:", orderId);
      return NextResponse.json({ received: true, status: "already_refunded" });
    }

    // Mark purchase as refunded
    const { error: refundError } = await supabase
      .from("paid_purchases")
      .update({ 
        status: "refunded",
        refunded_at: new Date().toISOString(),
      })
      .eq("id", existingPurchase.id);

    if (refundError) {
      console.error("Failed to update refund status:", refundError);
      return NextResponse.json({ error: "Failed to process refund" }, { status: 500 });
    }

    // Subtract the credit (only if credits were granted and not already consumed)
    if (existingPurchase.credits_granted > 0) {
      await supabase.rpc("refund_paid_credits", {
        p_user_id: existingPurchase.user_id,
        p_amount: existingPurchase.credits_granted,
      });
      console.log("Refunded credits for order:", orderId);
    }

    console.log("Successfully processed refund for order:", orderId);
    return NextResponse.json({ received: true, status: "refund_processed" });
  }

  // Unknown event type
  console.log("Unhandled event:", eventName);
  return NextResponse.json({ received: true, status: "event_not_handled" });
}

// Disable body parsing for raw body access
export const dynamic = "force-dynamic";
