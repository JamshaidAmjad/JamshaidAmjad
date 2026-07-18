---
name: web-app-development
description: Build, extend, and debug web applications with React, Next.js, TypeScript, and Tailwind CSS — pages, components, routing, data fetching, forms, APIs, performance, and deployment. Use this skill whenever the user asks to create a website or web app, add a page or feature, build a component, fix a frontend bug, work with Next.js App Router, integrate an API, or do anything involving React/TypeScript code for the browser — even for "small tweaks", since it defines the conventions the codebase should follow.
---

# Web App Development

You are acting as a senior full-stack web engineer. Default stack: **Next.js (App Router) + TypeScript + Tailwind CSS**, matching this repository. If the project uses something else, follow the project's existing stack and conventions instead — consistency beats preference.

## Before writing code

1. Read the existing code first: check `package.json` for available libraries, look at 1–2 similar existing components/pages, and match their patterns (file naming, import style, how data flows). Never introduce a new library when an installed one already covers the need.
2. For UI work, settle the design direction first (the `web-app-design` skill covers this).
3. For non-trivial features, briefly state the plan — which files change and why — before editing.

## Next.js App Router conventions

- **Server Components by default.** Add `"use client"` only when the component needs state, effects, event handlers, or browser APIs — and push the client boundary as deep (small) as possible.
- Data fetching happens in Server Components with `async/await`; pass data down as props. Avoid client-side fetching for initial page data.
- Use file conventions properly: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`. Route handlers in `app/api/*/route.ts` only for genuine API needs (webhooks, client mutations) — not for data a Server Component can read directly.
- Mutations: prefer Server Actions with `revalidatePath`/`revalidateTag` over hand-rolled API endpoints.
- Always set `metadata` (or `generateMetadata`) per page: title, description, and Open Graph fields.

## TypeScript rules

- No `any`. Model data with explicit types/interfaces; use `zod` (installed here) to validate anything crossing a trust boundary (API responses, form input, frontmatter, env vars) and infer types from schemas with `z.infer`.
- Prefer union types over booleans for multi-state values (`status: "idle" | "loading" | "error"`).
- Let inference work — annotate function boundaries, not every local variable.

## Component & styling conventions

- Small, single-purpose components; extract when a component handles more than one concern or exceeds ~150 lines.
- Tailwind: use theme tokens, not arbitrary values (`p-4` not `p-[17px]`). Merge conditional classes with `clsx` + `tailwind-merge` (both installed).
- Lists need stable `key`s (never array index for reorderable data). Forms need labels; images use `next/image`; internal links use `next/link`.
- Handle the full state cycle in UI that loads data: loading, error, empty, and success — empty states are designed, not blank.

## Quality gates (run before declaring done)

```bash
npm run lint
npm run typecheck
npm run build   # for structural changes — catches App Router and prerender errors
```

Fix what these surface; do not report success while any of them fail. For visual changes, actually run `npm run dev` and check the affected route when feasible.

## Performance defaults

- Ship less JavaScript: server components, dynamic `import()` for heavy, below-the-fold, or interaction-gated components.
- `next/image` for all images; explicit width/height to avoid layout shift.
- Memoize only measured hot paths — premature `useMemo`/`useCallback` is noise.

## Security defaults

- Validate all external input server-side (zod). Never trust client-provided IDs for authorization decisions.
- Secrets only in server-side env vars; anything prefixed `NEXT_PUBLIC_` is public.
- Never render untrusted HTML without sanitizing; avoid `dangerouslySetInnerHTML` unless the source is fully controlled.

## Debugging approach

Reproduce first, then locate (is it data, state, or render?), then fix the cause — not the symptom. Read the actual error text carefully; Next.js hydration and server/client-boundary errors almost always name the real problem. After fixing, re-run the quality gates.
