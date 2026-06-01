import { ButtonLink } from "@/components/ui/button-link";

export function BookingCTA() {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-950 p-8 text-white dark:border-white/10">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Next move</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">
        Bring your AI, software, or founder question into a focused session.
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
        Use the booking flow for strategy, learning clarity, product direction, or a technical
        decision that needs sharper thinking.
      </p>
      <ButtonLink href="/book" className="mt-6 bg-white text-zinc-950 hover:bg-zinc-200">
        Book a session
      </ButtonLink>
    </section>
  );
}
