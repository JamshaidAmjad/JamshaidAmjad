# Claude Code Skills

Custom skills for designing and developing web and mobile applications:

| Skill | Purpose |
|---|---|
| `web-app-design` | Visual/UX design for web apps: layout, typography, color, responsive, accessibility |
| `web-app-development` | Building web apps: Next.js App Router, React, TypeScript, Tailwind conventions |
| `mobile-app-design` | Mobile UI/UX: navigation patterns, platform conventions (iOS/Android), touch ergonomics |
| `mobile-app-development` | Building mobile apps: React Native + Expo (default) and Flutter, through store release |

## How skills work and where they live

Claude Code loads skills from two places:

1. **Project skills** — `.claude/skills/<name>/SKILL.md` inside a repository (like this folder).
   Available automatically to anyone working in **this repo only**. They travel with the repo via git.
2. **Personal skills** — `~/.claude/skills/<name>/SKILL.md` on your machine.
   Available in **every repo/project** you open with Claude Code on that machine.

Skills trigger automatically when a task matches their description, or you can invoke one
explicitly by typing `/<skill-name>` (e.g. `/web-app-design`).

## Using these skills in another repo

Pick one:

- **Make them global (recommended):** copy each skill folder to `~/.claude/skills/` once —
  then they work in every project on your machine:
  ```bash
  cp -r .claude/skills/web-app-design ~/.claude/skills/
  ```
- **Per-repo:** copy the skill folders into that repo's `.claude/skills/` directory and commit —
  useful when teammates cloning that repo should get them too.

Note: cloud/web sessions of Claude Code start from a fresh container, so only **project skills
committed to the repo** are guaranteed to be present there — personal `~/.claude` skills apply
to your local machine.
