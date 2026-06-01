import { IconSymbol } from "@/components/brand/icon-symbol";

export function NowPageSection({
  section,
}: {
  section: { title: string; icon: string; items: string[] };
}) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-md bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
          <IconSymbol name={section.icon} className="size-5" />
        </div>
        <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">{section.title}</h2>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 size-1.5 rounded-full bg-zinc-950 dark:bg-white" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
