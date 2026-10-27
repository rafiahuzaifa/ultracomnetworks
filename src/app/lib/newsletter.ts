"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

// Newsletter sign-ups go through the same /api/form pipeline as other leads, so the
// team gets the usual email notification and the subscriber gets the auto-reply.
export function useNewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const subscribe = async (email: string) => {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter subscriber",
          email,
          service: "Newsletter Subscription",
          message: "Please add me to the Ultracom Networks newsletter.",
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || "Subscription failed.");
      setStatus("success");
      setMessage("You're subscribed! Check your inbox for a confirmation.");
      return true;
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
      return false;
    }
  };

  return { status, message, subscribe };
}
