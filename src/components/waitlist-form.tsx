"use client";

import { useState } from "react";
import { FadeUp } from "./fade-up";
import { CheckCircle2, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  defaultPlan?: "Starter" | "Pro";
}

export function WaitlistForm({ defaultPlan }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState<"Starter" | "Pro">(defaultPlan || "Starter");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      // Keep the email for the success message display
    } catch (error: any) {
      console.error("Waitlist error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <FadeUp>
        <div className="bg-violet/10 border border-violet/20 rounded-[16px] p-8 text-center max-w-md mx-auto">
          <CheckCircle2 className="w-12 h-12 text-violet mx-auto mb-4" />
          <h3 className="font-display font-bold text-[24px] text-1 mb-2">You're on the list!</h3>
          <p className="font-body text-2 leading-[1.6]">
            We'll notify you at <strong>{email}</strong> as soon as {plan} is ready for launch.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-6 text-violet font-medium hover:underline"
          >
            Join for another plan
          </button>
        </div>
      </FadeUp>
    );
  }

  return (
    <FadeUp>
      <div className="bg-card border rounded-[24px] p-8 md:p-12 max-w-2xl mx-auto shadow-sm">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-[32px] text-1 mb-4">Join the Waitlist</h2>
          <p className="font-body text-3 text-[18px] leading-[1.7]">
            Payments aren't live yet — leave your email and we'll notify you the moment <strong>{plan}</strong> is ready.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            <label className="font-display font-bold text-[14px] text-3 uppercase tracking-wider">
              Which plan are you interested in?
            </label>
            <div className="flex gap-4">
              {["Starter", "Pro"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlan(p as "Starter" | "Pro")}
                  className={`flex-1 py-3 px-6 rounded-full border font-display font-bold text-[14px] transition-all ${
                    plan === p 
                      ? "bg-violet border-violet text-white" 
                      : "bg-transparent border-[var(--border)] text-2 hover:border-violet/50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-[var(--border)] rounded-full px-6 py-4 font-body text-[16px] text-1 focus:outline-none focus:border-violet transition-colors"
            />
          </div>

          {status === "error" && (
            <p className="text-risk-red text-[14px] font-body text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full py-4 rounded-full flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              "Notify me when it's ready"
            )}
          </button>
        </form>
      </div>
    </FadeUp>
  );
}
