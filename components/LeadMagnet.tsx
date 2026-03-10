 "use client";

import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./Button";
import { Card } from "./Card";
import { Section } from "./Section";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type LeadMagnetProps = { tone?: "light" | "dark" };

export function LeadMagnet({ tone = "light" }: LeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("Email capture is not configured yet.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: email,
          source: "AI Readiness Checklist",
          to_email: "contact@mytasklabs.us",
        },
        { publicKey: PUBLIC_KEY }
      );

      if (result.status === 200) {
        setStatus("Checklist link sent. Check your inbox.");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section tone={tone}>
      <Card variant="containerDark" as="div" className="max-w-3xl mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
          5-Minute AI Readiness Checklist
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Not ready to book a call yet? Get a short checklist to see where AI
          can remove friction in your intake, routing, and follow-up workflows.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="flex-1 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Email me the checklist"}
          </Button>
        </form>
        {status && (
          <p className="mt-2 text-xs text-slate-300" aria-live="polite">
            {status}
          </p>
        )}
      </Card>
    </Section>
  );
}

