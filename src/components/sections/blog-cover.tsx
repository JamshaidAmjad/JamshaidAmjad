export function BlogCover({ label }: { label: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,24,27,0.12),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(24,24,27,0.16),transparent_30%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="absolute inset-x-6 bottom-6 rounded-md border border-zinc-300 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-950/80">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      </div>
    </div>
  );
}
