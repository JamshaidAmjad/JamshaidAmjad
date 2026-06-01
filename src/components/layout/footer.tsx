import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-12 dark:border-white/10">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            AI learning, entrepreneurship, Codexier AB, Forare, articles, services,
            booking, and practical notes from Jamshaid Amjad.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:text-right">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/now"
            className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Now
          </Link>
        </div>
        <p className="text-xs text-zinc-500 md:col-span-2">
          © {new Date().getFullYear()} {siteConfig.name}. Built for a premium monochrome founder/operator brand.
        </p>
      </Container>
    </footer>
  );
}
