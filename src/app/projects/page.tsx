import { ProjectCard } from "@/components/sections/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore Codexier AB, Forare, and Jamshaid Amjad's AI Learning Hub.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="A focused project portfolio around software, AI, and mobility."
          description="Each project gives the personal brand a concrete direction: business delivery, platform building, and public learning."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <section id="forare" className="mt-12 rounded-lg border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Forare vision</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Forare is positioned as a future mobility and driver platform concept for ride-hailing,
            logistics, driver onboarding, route intelligence, fleet coordination, and AI-assisted operations.
          </p>
        </section>
      </Container>
    </main>
  );
}
