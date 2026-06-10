import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { GridBackground } from "@/components/ui/grid-background";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 dark:border-white/10">
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,rgba(24,24,27,0.07),transparent)] dark:bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,rgba(255,255,255,0.08),transparent)]"
      />
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl")}>
            <Tag>{eyebrow}</Tag>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            ) : null}
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
