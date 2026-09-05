import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST() {
  // 1. Verify user authentication
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 });
  }

  // 2. Get required environment variables
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;

  if (!apiKey) {
    console.error("Missing Lemon Squeezy configuration");
    return NextResponse.json({ error: "Billing service not configured." }, { status: 500 });
  }

  try {
    // 3. Get customer's subscriptions/orders from Lemon Squeezy
  // First, try to find the customer by email
  const response = await fetch(
    `https://api.lemonsqueezy.com/v1/customers?filter[email]=${encodeURIComponent(user.email || "")}`,
    {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Accept": "application/vnd.api+json",
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch customer:", await response.text());
      return NextResponse.json(
        { error: "Failed to retrieve billing information." },
        { status: 500 }
      );
    }

    const customersData = await response.json();
    const customers = customersData?.data || [];

    if (customers.length === 0) {
      // No billing history found - user is on Free plan
      return NextResponse.json({
        hasSubscription: false,
        customerId: null,
        portalUrl: null,
      });
    }

    // Get the first customer
    const customerId = customers[0].id;

    // 4. Create billing portal session
    const portalResponse = await fetch("https://api.lemonsqueezy.com/v1/billing-portal", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      body: JSON.stringify({
        data: {
          type: "billing-portal",
          attributes: {
            customer_id: customerId,
            return_url: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
          },
        },
      }),
    });

    if (!portalResponse.ok) {
      const errorText = await portalResponse.text();
      console.error("Failed to create portal session:", errorText);
      return NextResponse.json(
        { error: "Failed to open billing portal. Please try again." },
        { status: 500 }
      );
    }

    const portalData = await portalResponse.json();
    const portalUrl = portalData?.data?.attributes?.url;

    if (!portalUrl) {
      return NextResponse.json(
        { error: "Failed to get billing portal URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      hasSubscription: true,
      customerId,
      portalUrl,
    });

  } catch (error) {
    console.error("Billing portal error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
