import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export function BlogLayout({
  title,
  description,
  children,
}: {
  title: ReactNode;
  description: string;
  children: ReactNode;
}) {
  return (
    <main>
      <PageHeader eyebrow="Learning hub" title={title} description={description} />
      <Container className="py-16 sm:py-20">{children}</Container>
    </main>
  );
}
