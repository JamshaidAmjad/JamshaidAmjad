import { IconSymbol } from "@/components/brand/icon-symbol";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";

export function ServiceCard({
  service,
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
}) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-11 place-items-center rounded-md bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
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
      <ButtonLink href={service.href} className="mt-6 w-full">
        {service.cta}
      </ButtonLink>
    </article>
  );
}
