import { MapPin } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/data/site";

const footerLinks = [...navItems, { label: "Now", href: "/now" }, { label: "Newsletter", href: "/newsletter" }];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            I build <span className="font-display italic">intelligent</span> software &amp;
            companies — AI learning notes, Codexier AB, Forare, services, and practical
            founder updates.
          </p>
          <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            <MapPin className="size-3.5" strokeWidth={1.8} />
            {siteConfig.location}
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1 text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="border-t border-zinc-200 dark:border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Built in public <span className="text-zinc-300 dark:text-zinc-700">✦</span> {siteConfig.shortName}
          </p>
        </Container>
      </div>
    </footer>
  );
}
