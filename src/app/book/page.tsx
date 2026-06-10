import { CalendarCheck, Clock, Sparkles } from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { Accent } from "@/components/ui/accent";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book a Session",
  description: "Request a 1:1 AI, business, software, or founder strategy session with Jamshaid Amjad.",
  path: "/book",
});

const expectations = [
  {
    icon: Sparkles,
    title: "Focused on your situation",
    description: "AI learning clarity, business or software strategy, or founder and product direction.",
  },
  {
    icon: Clock,
    title: "No wasted time",
    description: "You bring the question, we work it through, and you leave with concrete next moves.",
  },
  {
    icon: CalendarCheck,
    title: "Simple scheduling",
    description: "Send the request and I'll reply by email with available times in your timezone.",
  },
];

export default function BookPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Booking"
        title={
          <>
            Book a <Accent>focused</Accent> session.
          </>
        }
        description="Bring your AI, software, or founder question into a 1:1 session built around sharper thinking and practical direction."
      >
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-zinc-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Booking sessions now
        </span>
      </PageHeader>
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-8">
            {expectations.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  <item.icon className="size-4" strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <BookingForm />
        </Reveal>
      </Container>
    </main>
  );
}
