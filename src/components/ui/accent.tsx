import type { ReactNode } from "react";

export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-display font-normal italic">{children}</span>;
}
