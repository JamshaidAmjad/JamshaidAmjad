#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_EXTENSIONS = {".ts", ".tsx", ".mdx", ".css", ".mjs", ".json"}
IGNORED_PARTS = {"node_modules", ".next", ".git", ".git.disabled"}


def iter_files():
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        if any(part in IGNORED_PARTS for part in path.parts):
            continue
        if path.suffix in SOURCE_EXTENSIONS:
            yield path


def main():
    files = list(iter_files())
    if not files:
        raise SystemExit("No source files found.")

    problems = []
    for path in files:
        text = path.read_text(encoding="utf-8")
        if "\t" in text:
            problems.append(f"{path.relative_to(ROOT)} contains tabs")
        if "\r\n" in text:
            problems.append(f"{path.relative_to(ROOT)} uses CRLF line endings")

    if problems:
        raise SystemExit("\n".join(problems))

    print(f"Static lint checks passed for {len(files)} files.")


if __name__ == "__main__":
    main()
