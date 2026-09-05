"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";
import { ArrowRight, Loader2 } from "lucide-react";

export function StarterCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCheckout = async () => {
    // Check auth first
    if (isSupabaseConfigured()) {
      const supabase = createSupabaseBrowserClient();
      const { data } = await supabase.auth.getUser();
      
      if (!data.user) {
        router.push("/login?redirect=/pricing");
        return;
      }
    }

    setIsLoading(true);
    setError(null);

    // Determine return path:
    // - If user has scan text in sessionStorage, they're mid-scan → return to /upload
    // - Otherwise → return to /dashboard
    const hasScanContent = typeof window !== "undefined" && 
      (sessionStorage.getItem("clauze_scan_text") || sessionStorage.getItem("clauze_scan_result"));
    const returnTo = hasScanContent ? "/upload" : "/dashboard";

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ return_to: returnTo }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout");
      }

      // Redirect to Lemon Squeezy checkout
      window.location.href = data.checkoutUrl;
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err instanceof Error ? err.message : "Failed to start checkout. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="btn-primary w-full h-[52px] flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Opening checkout...
          </>
        ) : (
          <>
            Buy a Scan
            <ArrowRight size={18} />
          </>
        )}
      </button>

      {error && (
        <p className="text-risk-red text-[13px] font-body text-center">
          {error}
        </p>
      )}

      <p className="font-body text-[12px] text-3 text-center">
        Secure payment via Lemon Squeezy
      </p>
    </div>
  );
}
