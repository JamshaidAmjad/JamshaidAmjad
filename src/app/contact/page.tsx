import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Jamshaid Amjad for projects, collaboration, AI consultation, speaking, or general messages.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation."
            description="Reach out about projects, collaboration, AI or software consultation, speaking, or founder conversations."
          />
          <p className="mt-8 text-sm text-zinc-500">Email: {siteConfig.email}</p>
        </div>
        <ContactForm />
      </Container>
    </main>
  );
}
