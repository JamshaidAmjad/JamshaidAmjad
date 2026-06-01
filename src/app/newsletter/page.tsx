import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Newsletter",
  description: "Subscribe for AI learning notes, founder updates, Codexier AB, and Forare progress.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Newsletter"
          title="Follow the learning and building journey."
          description="A practical newsletter for AI notes, software systems, founder thinking, Codexier updates, and Forare progress."
        />
        <div className="mt-10">
          <NewsletterSignup />
        </div>
      </Container>
    </main>
  );
}
