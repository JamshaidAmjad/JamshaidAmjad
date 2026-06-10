import { IconSymbol } from "@/components/brand/icon-symbol";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  featured = false,
}: {
  service: {
    title: string;
    icon: string;
    price: string;
    description: string;
    bestFor: string;
    href: string;
    cta: string;
  };
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25 dark:hover:shadow-black/40",
        featured &&
          "border-zinc-950/30 ring-1 ring-zinc-950/20 dark:border-white/25 dark:ring-white/20",
      )}
    >
      {featured ? (
        <span className="absolute -top-3 left-7 rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-zinc-950">
          Most popular
        </span>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-11 place-items-center rounded-xl bg-zinc-950 text-white transition duration-300 group-hover:scale-105 dark:bg-white dark:text-zinc-950">
          <IconSymbol name={service.icon} className="size-5" />
        </div>
        <Badge>{service.price}</Badge>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-zinc-950 dark:text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{service.description}</p>
      <p className="mt-4 text-sm leading-7 text-zinc-500 dark:text-zinc-500">
        <span className="font-semibold text-zinc-800 dark:text-zinc-300">Best for:</span>{" "}
        {service.bestFor}
      </p>
      <div className="mt-auto pt-6">
        <ButtonLink href={service.href} className="w-full">
          {service.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
