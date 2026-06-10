import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden py-28 sm:py-36">
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(24,24,27,0.07),transparent)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]"
      />
      <Container className="max-w-2xl text-center">
        <p className="font-display text-7xl italic text-zinc-300 sm:text-8xl dark:text-zinc-700">
          404
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          This page is not in the system yet.
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Head back home, or explore what I&apos;m learning about AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/" className="px-6">
            Go home
          </ButtonLink>
          <ButtonLink href="/ai-articles" variant="secondary" className="px-6">
            Read AI articles
          </ButtonLink>
        </div>
        <p className="mt-10 text-sm text-zinc-500">
          Lost? <Link href="/contact" className="font-semibold text-zinc-950 underline-offset-4 hover:underline dark:text-white">Tell me what you were looking for</Link>.
        </p>
      </Container>
    </main>
  );
}
