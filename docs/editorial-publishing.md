# Editorial Publishing Workflow

This workflow uses the local workbook as the human editing source and a committed CSV as the automation source.

## Files

- Local editing workbook: `/tmp/jamshaid-editorial-sheet/jamshaid-amjad-editorial-calendar.xlsx`
- Repo automation CSV: `content/editorial/articles.csv`
- Export script: `scripts/export-local-editorial-sheet.py`
- Publisher script: `scripts/publish-scheduled-article.mjs`
- GitHub Action: `.github/workflows/daily-article.yml`

## Daily Process

1. Edit articles in the local workbook.
2. Keep in-progress rows as `draft`.
3. Mark only final approved rows as `ready`.
4. Run `npm run export:editorial`.
5. Commit and push `content/editorial/articles.csv`.

The GitHub Action runs at 20:00 and 21:00 UTC. The script publishes only when the local Europe/Stockholm hour is 22, which handles daylight saving time.

## Publish Rule

The publisher selects the first row where:

- `status` is `ready`
- `publish_date` is blank, today, or earlier
- `src/content/articles/<slug>.mdx` does not already exist

It then creates one MDX article and commits it to the repository. If the article already exists, the row is skipped and the next ready row is checked.

## Required Columns

The CSV header must stay aligned with the workbook:

```text
status,publish_date,slug,title,description,category,tags,seo_title,seo_description,key_takeaways,body,related_slugs,notes,published_url,published_at,commit_sha,error
```

When `status=ready`, the required fields are:

- `title`
- `description`
- `tags`
- `key_takeaways`
- `body`

`category` falls back to `AI Learning Notes` when blank.

## Manual Publish

Use the `Publish Scheduled Article` workflow in GitHub Actions and set `force_publish` to `true` to publish the next ready article immediately.

## Vercel Deploy

The workflow can deploy directly to Vercel after publishing if these repository secrets exist:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Known project values from the existing deployment:

```text
VERCEL_ORG_ID=team_llyoHZR9jo1ER5ggfD8u0tYI
VERCEL_PROJECT_ID=prj_8wl1DHltJdCaIEiWdQSRFh0Bd8Hs
```

If the Vercel secrets are missing, the workflow still commits the article to GitHub and skips the direct deploy step.
