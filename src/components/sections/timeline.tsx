export function Timeline({
  items,
}: {
  items: Array<{ year: string; title: string; description: string }>;
}) {
  return (
    <div className="relative space-y-10 before:absolute before:inset-y-1 before:left-[5px] before:w-px before:bg-zinc-200 dark:before:bg-white/10">
      {items.map((item) => (
        <div key={`${item.year}-${item.title}`} className="relative pl-8">
          <span className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-zinc-950 bg-zinc-50 dark:border-white dark:bg-zinc-950" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {item.year}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
