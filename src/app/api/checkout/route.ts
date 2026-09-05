import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST() {
  // 1. Verify user authentication (server-side, never trust client)
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 });
  }

  // 2. Get required environment variables
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  const variantId = process.env.LEMONSQUEEZY_STARTER_VARIANT_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL;

  if (!apiKey || !storeId || !variantId) {
    console.error("Missing Lemon Squeezy configuration");
    return NextResponse.json({ error: "Payment service not configured." }, { status: 500 });
  }

  try {
    // 3. Create Lemon Squeezy checkout
    const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      body: JSON.stringify({
        data: {
          type: "checkouts",
          attributes: {
            checkout_data: {
              email: user.email,
              custom: {
                user_id: user.id, // Pass user ID securely via custom data
              },
            },
            product_options: {
              redirect_url: `${siteUrl}/upload?payment=processing`,
            },
            checkout_options: {
              embed: false,
              media: true,
              logo: true,
            },
          },
          relationships: {
            store: {
              data: {
                type: "stores",
                id: storeId,
              },
            },
            variant: {
              data: {
                type: "variants",
                id: variantId,
              },
            },
          },
        },
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Lemon Squeezy checkout error:", responseData);
      return NextResponse.json(
        { error: "Failed to create checkout. Please try again." },
        { status: 500 }
      );
    }

    // 4. Extract checkout URL and return to client
    const checkoutUrl = responseData?.data?.attributes?.url;

    if (!checkoutUrl) {
      console.error("No checkout URL in response:", responseData);
      return NextResponse.json(
        { error: "Failed to get checkout URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutUrl });

  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
