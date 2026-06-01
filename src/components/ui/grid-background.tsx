export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(24,24,27,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
    />
  );
}
