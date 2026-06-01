import { Timeline } from "@/components/sections/timeline";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
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

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Jamshaid Amjad is turning AI learning into useful products, services, and public notes."
          description="The brand connects three worlds: education, entrepreneurship, and practical software delivery."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Founder/operator profile</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Jamshaid, also known as Jimzzz, is building around Applied AI, Codexier AB,
              Forare, automation, and practical digital systems. This site is designed as a
              complete funnel: people can learn, explore projects, book, subscribe, or make contact.
            </p>
          </div>
          <Timeline items={timeline} />
        </div>
      </Container>
    </main>
  );
}
