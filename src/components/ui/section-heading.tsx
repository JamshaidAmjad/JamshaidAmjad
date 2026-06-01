import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Tag>{eyebrow}</Tag> : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
