import { MessageSquare, Search, Wrench } from "lucide-react";

import { BookingCTA } from "@/components/sections/booking-cta";
import { ServiceCard } from "@/components/sections/service-card";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work With Me",
  description: "Book AI strategy, software consultation, or Codexier AB delivery with Jamshaid Amjad.",
  path: "/work-with-me",
});

const steps = [
  {
    icon: MessageSquare,
    title: "Reach out",
    description: "Book a session or send a message with what you're trying to figure out or build.",
  },
  {
    icon: Search,
    title: "Get clarity",
    description: "We map your situation, the options, and the right next moves — in plain language.",
  },
  {
    icon: Wrench,
    title: "Build it",
    description: "Act on the plan yourself, or let Codexier AB take it from idea to production.",
  },
];

export default function WorkWithMePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            How we can <Accent>work together</Accent>.
          </>
        }
        description="A focused session for clarity, a consultation for deeper technical direction, or Codexier AB for end-to-end delivery."
      />
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} featured={index === 0} />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-8 border-t border-zinc-200 pt-12 sm:grid-cols-3 dark:border-white/10">
            {steps.map((step, index) => (
              <div key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <step.icon className="size-4" strokeWidth={1.8} />
                  </span>
                  <span className="font-display text-2xl italic text-zinc-300 dark:text-zinc-700">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
      <Container className="pb-20 sm:pb-24">
        <Reveal>
          <BookingCTA />
        </Reveal>
      </Container>
    </main>
  );
}
