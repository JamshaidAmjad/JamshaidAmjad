import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Newsletter",
  description: "Subscribe for AI learning notes, founder updates, Codexier AB, and Forare progress.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <main>
      <PageHeader
        align="center"
        eyebrow="Newsletter"
        title={
          <>
            Follow the <Accent>build notes</Accent>.
          </>
        }
        description="Practical AI learning, software systems, founder thinking, Codexier updates, and Forare progress — straight to your inbox. No noise."
      />
      <Container className="max-w-3xl py-16 sm:py-20">
        <Reveal>
          <NewsletterSignup />
        </Reveal>
      </Container>
    </main>
  );
}
