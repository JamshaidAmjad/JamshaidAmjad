import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { IconSymbol } from "@/components/brand/icon-symbol";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { nowSections } from "@/data/site";

export function HomeIntro() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <div>
            <Tag>About me</Tag>
            <p className="mt-6 text-2xl font-medium leading-relaxed tracking-tight text-zinc-950 sm:text-3xl sm:leading-relaxed dark:text-white">
              I&apos;m a master&apos;s student in Applied AI and the founder of Codexier AB.
              I{" "}
              <span className="font-display font-normal italic">learn in public</span> —
              turning lectures into articles, articles into products, and products into
              companies.
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 dark:text-white"
            >
              More about me
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Right now
              </span>
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {nowSections.map((section) => (
                <li key={section.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <IconSymbol name={section.icon} className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                      {section.title}
                    </span>
                    <span className="block text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {section.items.slice(0, 2).join(" · ")}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/now"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 dark:text-white"
            >
              See my /now page
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
