import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-zinc-950 px-2.5 py-1 text-xs font-semibold text-white dark:bg-white dark:text-zinc-950",
        className,
      )}
    >
      {children}
    </span>
  );
}
