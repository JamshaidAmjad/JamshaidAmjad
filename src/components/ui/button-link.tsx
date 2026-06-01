import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
        variant === "secondary" &&
          "border border-zinc-300 text-zinc-950 hover:border-zinc-500 dark:border-white/15 dark:text-white dark:hover:border-white/35",
        className,
      )}
      {...props}
    />
  );
}
