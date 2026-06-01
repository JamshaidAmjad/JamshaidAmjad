import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Learning hub" title={title} description={description} />
        <div className="mt-10">{children}</div>
      </Container>
    </main>
  );
}
