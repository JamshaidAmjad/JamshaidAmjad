import Link from "next/link";

import { IconSymbol } from "@/components/brand/icon-symbol";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({
  project,
}: {
  project: {
    title: string;
    icon: string;
    description: string;
    tags: string[];
    href: string;
    cta: string;
  };
}) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-6 grid size-11 place-items-center rounded-md bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
        <IconSymbol name={project.icon} className="size-5" />
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
        className="mt-6 inline-flex text-sm font-semibold text-zinc-950 hover:underline dark:text-white"
      >
        {project.cta}
      </Link>
    </article>
  );
}
