import { ServiceCard } from "@/components/sections/service-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work With Me",
  description: "Book AI strategy, software consultation, or Codexier AB delivery with Jamshaid Amjad.",
  path: "/work-with-me",
});

export default function WorkWithMePage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Clear ways to work with Jamshaid."
          description="Use a focused session for clarity, a consultation for deeper technical direction, or Codexier AB for delivery."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </main>
  );
}
