import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/";
  const error = url.searchParams.get("error");
  const error_description = url.searchParams.get("error_description");

  if (error) {
    const errorUrl = new URL(next, url.origin);
    errorUrl.searchParams.set("error", error);
    if (error_description) {
      errorUrl.searchParams.set("error_description", error_description);
    }
    return NextResponse.redirect(errorUrl);
  }

  if (code) {
    const supabase = createSupabaseServerClient();
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (exchangeError) {
      const errorUrl = new URL(next, url.origin);
      errorUrl.searchParams.set("error", "auth_error");
      errorUrl.searchParams.set("error_description", exchangeError.message);
      return NextResponse.redirect(errorUrl);
    }
  }

  return NextResponse.redirect(new URL(next, url.origin));
}

