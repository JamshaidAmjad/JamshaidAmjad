import { ButtonLink } from "@/components/ui/button-link";

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 px-8 py-14 text-center text-white sm:px-14 sm:py-16 dark:border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(255,255,255,0.14),transparent)]"
      />
      <div className="relative mx-auto max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Booking sessions now
        </span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="font-display font-normal italic">intelligent</span> together.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-300">
          Bring your AI, software, or founder question into a focused session — strategy,
          learning clarity, product direction, or a technical decision that needs sharper
          thinking.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/book" className="bg-white px-6 text-zinc-950 hover:bg-zinc-200">
            Book a session
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="border-white/20 px-6 text-white hover:border-white/45"
          >
            Contact me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
