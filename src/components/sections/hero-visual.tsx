import { GraduationCap, MapPin, Terminal } from "lucide-react";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(24,24,27,0.14),transparent_65%)] blur-2xl dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] border border-zinc-300/80 dark:border-white/15"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-8 -z-10 size-32 bg-[radial-gradient(rgba(24,24,27,0.35)_1.5px,transparent_1.5px)] bg-[size:12px_12px] dark:bg-[radial-gradient(rgba(255,255,255,0.35)_1.5px,transparent_1.5px)]"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-300 shadow-2xl shadow-zinc-950/20 ring-1 ring-zinc-950/5 dark:border-white/15 dark:shadow-black/60 dark:ring-white/10">
        <Image
          src="/images/jamshaid-portrait.webp"
          alt="Portrait of Jamshaid Amjad"
          width={1024}
          height={1280}
          priority
          sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 88vw"
          className="aspect-[4/5] w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-zinc-950/25 via-transparent to-transparent"
        />
      </div>

      <div className="animate-float absolute -right-4 top-8 flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md sm:-right-8 dark:border-white/15 dark:bg-zinc-950/80">
        <span className="grid size-9 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
          <Terminal className="size-4" strokeWidth={1.8} />
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Founder
          </span>
          <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
            Codexier AB
          </span>
        </span>
      </div>

      <div
        className="animate-float absolute -left-4 bottom-16 flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md sm:-left-8 dark:border-white/15 dark:bg-zinc-950/80"
        style={{ animationDelay: "-2.5s" }}
      >
        <span className="grid size-9 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
          <GraduationCap className="size-4" strokeWidth={1.8} />
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Studying
          </span>
          <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
            MSc Applied AI
          </span>
        </span>
      </div>

      <div className="absolute -bottom-4 right-8 flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-white/15 dark:bg-zinc-950/85 dark:text-zinc-300">
        <MapPin className="size-3.5" strokeWidth={1.8} />
        Sweden
      </div>
    </div>
  );
}
