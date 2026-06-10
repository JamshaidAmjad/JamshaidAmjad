"use client";

import { useState } from "react";

import { contactReasons } from "@/data/site";
import type { ApiResponse } from "@/lib/schemas";

export function ContactForm() {
  const [status, setStatus] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    const data = (await response.json()) as ApiResponse;
    setStatus(data);
    setLoading(false);
    if (data.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className="form-input" />
        <input name="email" required type="email" placeholder="Email" className="form-input" />
      </div>
      <input name="company" placeholder="Company (optional)" className="form-input" />
      <select name="reason" required className="form-input">
        {contactReasons.map((reason) => (
          <option key={reason}>{reason}</option>
        ))}
      </select>
      <textarea name="message" required rows={6} placeholder="Tell me what you want to build or discuss." className="form-input" />
      <button disabled={loading} className="min-h-12 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
        {loading ? "Sending..." : "Send message"}
      </button>
      {status ? (
        <p className={status.ok ? "text-sm text-emerald-600" : "text-sm text-red-500"}>
          {status.ok ? status.message : status.error}
        </p>
      ) : null}
    </form>
  );
}
