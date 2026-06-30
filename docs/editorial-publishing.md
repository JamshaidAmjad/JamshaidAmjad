# Editorial Publishing Workflow

This site can publish approved articles from a Google Sheet every day at 22:00 Europe/Stockholm.

## Source Sheet

Workbook name:

```text
JamshaidAmjad.com Editorial Calendar
```

Required tab:

```text
Articles
```

Required columns:

```text
status
publish_date
slug
title
description
category
tags
seo_title
seo_description
key_takeaways
body
related_slugs
notes
published_url
published_at
commit_sha
error
```

## Publishing Rule

The GitHub Action runs at 20:00 and 21:00 UTC. The script publishes only when the local Europe/Stockholm hour is 22, which handles daylight saving time.

It publishes one article per run:

1. Find rows where `status` is `ready`.
2. Require `publish_date` to be today or earlier. Blank `publish_date` means publish immediately.
3. Skip rows whose slug already exists in `src/content/articles`.
4. Write one `.mdx` file.
5. Build the site.
6. Commit and push the article to `main`.
7. Deploy the prebuilt site to Vercel.

## Sheet Setup

To avoid Google API credentials, publish the `Articles` tab as a CSV and store that URL in GitHub Actions.

In Google Sheets:

1. File -> Share -> Publish to web.
2. Select the `Articles` tab.
3. Select `Comma-separated values (.csv)`.
4. Publish and copy the CSV URL.

Add the URL as either a repository variable or secret:

```text
EDITORIAL_SHEET_CSV_URL
```

Using a repository variable is enough if the sheet is intentionally public/read-only.

## Required Vercel Secrets

The workflow deploys directly to Vercel, so these GitHub Actions secrets are required:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Known project values from the existing deployment:

```text
VERCEL_ORG_ID=team_llyoHZR9jo1ER5ggfD8u0tYI
VERCEL_PROJECT_ID=prj_8wl1DHltJdCaIEiWdQSRFh0Bd8Hs
```

`VERCEL_TOKEN` must be created from the Vercel account that owns the project.

## Manual Test

After the sheet URL and Vercel secrets are configured:

1. Open GitHub Actions.
2. Choose `Publish Scheduled Article`.
3. Run workflow.
4. Enable `force_publish`.

The workflow will publish the next ready article immediately.
