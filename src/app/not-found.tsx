import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-white">
          This page is not in the system yet.
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Head back home or explore the AI learning hub.
        </p>
        <Link className="mt-8 inline-flex rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950" href="/">
          Go home
        </Link>
      </Container>
    </main>
  );
}
