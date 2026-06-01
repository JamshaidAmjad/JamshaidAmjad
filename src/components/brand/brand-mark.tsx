import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Jamshaid Amjad home">
      <span className="grid size-9 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
        JA
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
          Jamshaid Amjad
        </span>
        <span className="block text-xs text-zinc-500 dark:text-zinc-500">Jimzzz</span>
      </span>
    </Link>
  );
}
