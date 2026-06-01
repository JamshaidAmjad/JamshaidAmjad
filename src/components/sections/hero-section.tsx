import { HeroVisual } from "@/components/sections/hero-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";
import { Tag } from "@/components/ui/tag";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <GridBackground />
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Tag>AI student / founder / operator</Tag>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
            Jamshaid Amjad builds AI learning into practical software, systems, and companies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A premium personal brand funnel for Jimzzz: Applied AI notes, Codexier AB,
            Forare, services, booking, newsletter, and founder updates.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">Explore my work</ButtonLink>
            <ButtonLink href="/book" variant="secondary">
              Book a session
            </ButtonLink>
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
