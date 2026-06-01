import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-300/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:border-white/15 dark:text-zinc-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
