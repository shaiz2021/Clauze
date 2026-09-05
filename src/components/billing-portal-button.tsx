"use client";

import { useState } from "react";
import { ExternalLink, Loader2, CreditCard } from "lucide-react";

export function BillingPortalButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenPortal = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/billing/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to open billing portal");
      }

      if (!data.portalUrl) {
        throw new Error("No billing history found. You may be on the Free plan.");
      }

      // Open billing portal in new tab
      window.open(data.portalUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Billing portal error:", err);
      setError(err instanceof Error ? err.message : "Failed to open billing portal.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleOpenPortal}
        disabled={isLoading}
        className="btn-secondary w-full justify-center text-center"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <CreditCard size={16} />
            Manage Billing
            <ExternalLink size={14} />
          </>
        )}
      </button>

      {error && (
        <p className="font-body text-[13px] text-risk-amber text-center">
          {error}
        </p>
      )}
    </div>
  );
}
