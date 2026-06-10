import { ArrowRight } from "lucide-react";

import { HeroVisual } from "@/components/sections/hero-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";
import { Reveal } from "@/components/ui/reveal";

const marqueeItems = [
  "Applied AI",
  "Codexier AB",
  "Forare",
  "Automation",
  "Neural Networks",
  "Transformers",
  "Product Engineering",
  "AI in Healthcare",
];

const stats = [
  { value: "2+", label: "Ventures founded" },
  { value: "MSc", label: "Applied AI" },
  { value: "100%", label: "Builder mindset" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(24,24,27,0.07),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.08),transparent)]"
      />
      <Container className="grid gap-16 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-20 lg:pt-14">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-zinc-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7">
              <span className="block text-xl font-medium text-zinc-500 sm:text-2xl dark:text-zinc-400">
                Hi, I&apos;m Jamshaid Amjad —
              </span>
              <span className="mt-3 block text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
                I build{" "}
                <span className="font-display font-normal italic">intelligent</span>{" "}
                software &amp; companies.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Entrepreneur, Applied AI master&apos;s student, and founder of Codexier AB —
              turning everything I learn about AI into practical products, automation,
              and ventures like Forare.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projects" className="group gap-2 px-6">
                Explore my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="/book" variant="secondary" className="px-6">
                Book a session
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-zinc-200 pt-7 dark:border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <HeroVisual />
        </Reveal>
      </Container>

      <div className="relative border-y border-zinc-200 bg-white/50 py-4 dark:border-white/10 dark:bg-white/[0.02]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950"
        />
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center"
              >
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-8 pr-8 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500"
                  >
                    {item}
                    <span className="text-zinc-300 dark:text-zinc-700">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
