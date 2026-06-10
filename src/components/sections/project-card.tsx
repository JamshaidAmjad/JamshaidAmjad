import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { IconSymbol } from "@/components/brand/icon-symbol";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    icon: string;
    description: string;
    tags: string[];
    href: string;
    cta: string;
  };
  index?: number;
}) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25 dark:hover:shadow-black/40">
      <div className="mb-6 flex items-start justify-between">
        <div className="grid size-11 place-items-center rounded-xl bg-zinc-950 text-white transition duration-300 group-hover:scale-105 dark:bg-white dark:text-zinc-950">
          <IconSymbol name={project.icon} className="size-5" />
        </div>
        {index !== undefined ? (
          <span className="font-display text-3xl italic text-zinc-300 dark:text-zinc-700">
            0{index + 1}
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Link
        href={project.href}
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-zinc-950 dark:text-white"
      >
        {project.cta}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
