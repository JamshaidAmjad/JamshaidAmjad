export function Timeline({
  items,
}: {
  items: Array<{ year: string; title: string; description: string }>;
}) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={`${item.year}-${item.title}`} className="grid gap-3 border-l border-zinc-300 pl-5 dark:border-white/15">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {item.year}
          </span>
          <div>
            <h3 className="font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
