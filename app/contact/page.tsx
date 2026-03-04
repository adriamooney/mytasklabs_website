"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("Email service is not configured.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          phone,
          message,
          sms_opt_in: smsOptIn ? "Yes" : "No",
          to_email: "contact@mytasklabs.us",
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      if (result.status === 200) {
        setStatus("Message sent successfully.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSmsOptIn(false);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (_error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold text-neutral-850">Contact</h1>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Share a bit about your team, workflow, and what you&apos;re looking to
          improve. I&apos;ll follow up to schedule a time to talk.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-850">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-neutral-850 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-850">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-neutral-850 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-850">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-neutral-850 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-850">
              Message
            </label>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={5}
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-neutral-850 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-800"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="sms-opt-in"
              type="checkbox"
              checked={smsOptIn}
              onChange={(event) => setSmsOptIn(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-stone-300 text-neutral-850 focus:ring-neutral-800"
            />
            <label
              htmlFor="sms-opt-in"
              className="text-sm text-stone-600 leading-relaxed"
            >
              I agree to receive SMS messages related to my inquiry and
              understand that message and data rates may apply.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-neutral-850 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {status && (
            <p className="text-sm text-stone-600 mt-2" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

