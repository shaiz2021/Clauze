import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Allowed return paths (internal only, no external URLs)
const ALLOWED_RETURN_PATHS = ["/dashboard", "/upload", "/pricing"];

function validateReturnPath(path: string | undefined): string {
  // Default to dashboard if no path provided
  if (!path) return "/dashboard";
  
  // Must start with /
  if (!path.startsWith("/")) return "/dashboard";
  
  // Must be in allowed list
  if (!ALLOWED_RETURN_PATHS.includes(path)) return "/dashboard";
  
  return path;
}

export async function POST(req: Request) {
  // 1. Verify user authentication (server-side, never trust client)
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized. Please sign in first." }, { status: 401 });
  }

  // 2. Parse request body and validate return path
  let returnTo = "/dashboard";
  try {
    const body = await req.json();
    returnTo = validateReturnPath(body.return_to);
  } catch {
    // No body provided, use default
  }

  // 3. Get required environment variables
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  const variantId = process.env.LEMONSQUEEZY_STARTER_VARIANT_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL;

  if (!apiKey || !storeId || !variantId) {
    console.error("Missing Lemon Squeezy configuration");
    return NextResponse.json({ error: "Payment service not configured." }, { status: 500 });
  }

  try {
    // 4. Create Lemon Squeezy checkout
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
              // Redirect to the validated return path after checkout
              redirect_url: `${siteUrl}${returnTo}?payment=processing`,
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

    // 5. Extract checkout URL and return to client
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
