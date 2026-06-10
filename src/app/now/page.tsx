import { NowPageSection } from "@/components/sections/now-page-section";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { nowSections } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Now",
  description: "What Jamshaid Amjad is studying, building, and focusing on now.",
  path: "/now",
});

export default function NowPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Now"
        title={
          <>
            What I&apos;m doing <Accent>right now</Accent>.
          </>
        }
        description="A lightweight status page — what I'm actively studying, building, and focusing on at the moment."
      >
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-zinc-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Live status
        </span>
      </PageHeader>
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {nowSections.map((section) => (
              <NowPageSection key={section.title} section={section} />
            ))}
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
