import { NowPageSection } from "@/components/sections/now-page-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { nowSections } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Now",
  description: "What Jamshaid Amjad is studying, building, and focusing on now.",
  path: "/now",
});

export default function NowPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Now"
          title="Current study, build, and focus areas."
          description="A lightweight status page so visitors can see what Jamshaid is actively working on."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {nowSections.map((section) => (
            <NowPageSection key={section.title} section={section} />
          ))}
        </div>
      </Container>
    </main>
  );
}
