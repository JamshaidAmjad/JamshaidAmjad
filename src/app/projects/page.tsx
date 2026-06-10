import { Route } from "lucide-react";

import { BookingCTA } from "@/components/sections/booking-cta";
import { ProjectCard } from "@/components/sections/project-card";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore Codexier AB, Forare, and Jamshaid Amjad's AI Learning Hub.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            What I&apos;m <Accent>building</Accent>.
          </>
        }
        description="A focused portfolio around software, AI, and mobility — business delivery, platform building, and public learning."
      />
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <section
            id="forare"
            className="relative mt-14 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_90%_at_80%_50%,black,transparent)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
            />
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  <Route className="size-5" strokeWidth={1.8} />
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  The <Accent>Forare</Accent> vision
                </h2>
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                Forare is positioned as a future mobility and driver platform concept for
                ride-hailing, logistics, driver onboarding, route intelligence, fleet
                coordination, and AI-assisted operations.
              </p>
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
