import { IconSymbol } from "@/components/brand/icon-symbol";

export function NowPageSection({
  section,
}: {
  section: { title: string; icon: string; items: string[] };
}) {
  return (
    <section className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25 dark:hover:shadow-black/40">
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-xl bg-zinc-950 text-white transition duration-300 group-hover:scale-105 dark:bg-white dark:text-zinc-950">
          <IconSymbol name={section.icon} className="size-5" />
        </div>
        <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">{section.title}</h2>
      </div>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
