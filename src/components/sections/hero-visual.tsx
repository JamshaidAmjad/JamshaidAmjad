export function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_35%),linear-gradient(135deg,rgba(24,24,27,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="relative grid h-full gap-4">
        <div className="grid grid-cols-3 gap-3">
          {["AI", "AB", "FX"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-zinc-300 bg-zinc-50 p-4 text-sm font-semibold text-zinc-950 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-950/80">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Founder console</span>
            <span className="size-2 rounded-full bg-zinc-950 dark:bg-white" />
          </div>
          <div className="space-y-3">
            {[82, 64, 92, 46].map((width) => (
              <div key={width} className="h-2 rounded-full bg-zinc-200 dark:bg-white/10">
                <div
                  className="h-2 rounded-full bg-zinc-950 dark:bg-white"
                  style={{ width: `${width}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
