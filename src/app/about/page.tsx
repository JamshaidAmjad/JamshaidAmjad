import { GraduationCap, MapPin, Terminal } from "lucide-react";
import Image from "next/image";

import { BookingCTA } from "@/components/sections/booking-cta";
import { Timeline } from "@/components/sections/timeline";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { credibilityStats, profileProofPoints } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Jamshaid Amjad, Jimzzz: AI student, entrepreneur, founder of Codexier AB, and builder of Forare.",
  path: "/about",
});

const timeline = [
  {
    year: "Now",
    title: "Studying Applied AI",
    description:
      "Building public learning notes around deep learning, neural networks, data science, healthcare AI, and transformers.",
  },
  {
    year: "Codexier",
    title: "Founder of Codexier AB",
    description:
      "Creating a software and AI services company focused on useful systems, automation, and digital delivery.",
  },
  {
    year: "Forare",
    title: "Building a mobility platform vision",
    description:
      "Exploring driver onboarding, transport operations, intelligent dispatch, and AI-assisted mobility workflows.",
  },
];

const facts = [
  { icon: GraduationCap, label: "MSc Applied AI student" },
  { icon: Terminal, label: "Founder of Codexier AB & Forare" },
  { icon: MapPin, label: "Based in Sweden" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About me"
        title={
          <>
            Turning AI learning into <Accent>useful things</Accent>.
          </>
        }
        description="I connect three worlds — education, entrepreneurship, and practical software delivery — and document the journey in public."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
              <div className="relative">
                <Image
                  src="/images/jamshaid-portrait.webp"
                  alt="Portrait of Jamshaid Amjad"
                  width={1024}
                  height={1280}
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  Jamshaid Amjad <span className="text-zinc-400 dark:text-zinc-500">/ Jimzzz</span>
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  I&apos;m building around Applied AI, Codexier AB, Forare, automation, and
                  practical digital systems. This site is my complete funnel: learn with me,
                  explore my projects, book a session, subscribe, or just say hi.
                </p>
                <ul className="mt-5 space-y-3">
                  {facts.map((fact) => (
                    <li
                      key={fact.label}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="grid size-8 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                        <fact.icon className="size-4" strokeWidth={1.8} />
                      </span>
                      {fact.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                The journey
              </h2>
              <div className="mt-6">
                <Timeline items={timeline} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
      <Container className="pb-20 sm:pb-24">
        <Reveal>
          <section className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03] lg:p-9">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Credibility
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  A practical builder profile shaped by client delivery.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  The strongest signal from Jamshaid&apos;s profile is not one single job title.
                  It is a repeated pattern: understand the business need, shape the experience,
                  build the system, and keep improving it after launch.
                </p>
              </div>
              <div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {credibilityStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-950/60"
                    >
                      <p className="font-display text-4xl italic text-zinc-950 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="mt-7 grid gap-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {profileProofPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Reveal>
      </Container>
      <Container className="pb-20 sm:pb-24">
        <Reveal>
          <BookingCTA />
        </Reveal>
      </Container>
    </main>
  );
}
