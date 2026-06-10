"use client";

import { useState } from "react";

import type { ApiResponse } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, source: "site" }),
    });
    const data = (await response.json()) as ApiResponse;
    setStatus(data);
    setLoading(false);
    if (data.ok) {
      setEmail("");
      setName("");
    }
  }

  return (
    <form
      onSubmit={submit}
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]",
        compact ? "grid gap-3" : "grid gap-4 md:grid-cols-[1fr_1fr_auto]",
      )}
    >
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        className="min-h-12 rounded-md border border-zinc-300 bg-transparent px-4 text-sm outline-none focus:border-zinc-950 dark:border-white/15 dark:text-white dark:focus:border-white"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="min-h-12 rounded-md border border-zinc-300 bg-transparent px-4 text-sm outline-none focus:border-zinc-950 dark:border-white/15 dark:text-white dark:focus:border-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="min-h-12 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        {loading ? "Joining..." : "Join newsletter"}
      </button>
      {status ? (
        <p className={cn("text-sm md:col-span-3", status.ok ? "text-emerald-600" : "text-red-500")}>
          {status.ok ? status.message : status.error}
        </p>
      ) : null}
    </form>
  );
}
