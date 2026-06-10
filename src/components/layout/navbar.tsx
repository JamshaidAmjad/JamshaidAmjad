"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/ui/container";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-zinc-50/85 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <BrandMark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems
            .filter((item) => item.href !== "/book")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                  pathname === item.href && "bg-zinc-200/70 text-zinc-950 dark:bg-white/10 dark:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/book"
            className="hidden min-h-10 items-center rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 lg:inline-flex dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Book a call
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border border-zinc-300 text-zinc-700 lg:hidden dark:border-white/15 dark:text-zinc-300"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-zinc-200 bg-zinc-50 lg:hidden dark:border-white/10 dark:bg-zinc-950">
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-200/70 dark:text-zinc-300 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
