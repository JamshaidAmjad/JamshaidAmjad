# Jamshaid Amjad Personal Brand Website

Premium monochrome Next.js personal brand site for Jamshaid Amjad / Jimzzz.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX-style markdown content with frontmatter
- next-themes dark/light mode
- Zod-validated API routes for newsletter, booking, and contact

## Local Commands

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev
```

## Editing Content

- Site data, navigation, projects, services, and now-page status live in `src/data/site.ts`.
- Articles live in `src/content/articles/*.mdx`.
- Article cards and article pages are generated from frontmatter using `src/lib/articles.ts`.
- Add a new article by copying an existing MDX file and changing `title`, `description`, `date`, `category`, `tags`, `related`, and `keyTakeaways`.

## Forms and Providers

The API routes are backend-ready:

- `POST /api/newsletter`
- `POST /api/booking`
- `POST /api/contact`

Payloads are validated in `src/lib/schemas.ts`. Provider adapters are isolated in `src/lib/integrations/submissions.ts`.

Development fallback logs submissions to the server console. To connect production providers, set environment variables such as:

```bash
SUBMISSION_PROVIDER=resend
NEXT_PUBLIC_SITE_URL=https://jamshaidamjad.com
```

Then replace the placeholder branch in `src/lib/integrations/submissions.ts` with the chosen email/newsletter provider.

## Visual Assets

The first version uses code-native grayscale UI graphics instead of generic stock imagery. Prompt templates for future hero, avatar, blog cover, project, and Open Graph images live in `docs/visual-prompts.md`.

## Deploying

Deploy to Vercel, set `NEXT_PUBLIC_SITE_URL`, and connect production provider credentials when ready.
