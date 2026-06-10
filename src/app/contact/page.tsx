import { Mail, MapPin, Timer } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Jamshaid Amjad for projects, collaboration, AI consultation, speaking, or general messages.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Start the <Accent>conversation</Accent>.
          </>
        }
        description="Projects, collaboration, AI or software consultation, speaking, or founder conversations — I read everything."
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                <Mail className="size-4" strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Email</h2>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1.5 inline-block text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                <Timer className="size-4" strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  Response time
                </h2>
                <p className="mt-1.5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  I usually reply within a couple of business days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                <MapPin className="size-4" strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Location</h2>
                <p className="mt-1.5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {siteConfig.location} — working with clients anywhere.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </Container>
    </main>
  );
}
