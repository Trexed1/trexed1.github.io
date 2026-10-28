# Tyler Rex — portfolio

This folder contains Tyler Rex's Astro portfolio and its project notes. The public site is https://trexed1.github.io/. The public homepage and résumé were verified on October 26, 2026.

The latest local direction is dark blue/slate with light blue accents and Arial system fonts. It includes a tall intro, labeled icons, and separate Portfolio, Write-ups, Contact, and infrastructure project pages alongside the scrolling homepage. See docs/PROJECT_BRIEF.md and docs/REDESIGN_BRIEF.md. This redesign is local until Tyler approves and publishes it; the live URL still serves the previously pushed version.

## Run the site locally

Astro 7.4.2 is installed for this project. Node.js 24.11.1 and npm 11.6.2 were used for the first successful build. Astro's current guide requires Node.js 22.23.4 or newer.

From this folder, run:

```sh
npm ci
npm run dev
```

`npm ci` installs the exact dependencies recorded in `package-lock.json` into `node_modules/`. `npm run dev` starts a local development preview; open the URL it prints (normally `http://localhost:4321/`). Press Ctrl+C in that terminal to stop it.

To verify the production build and preview the built files locally:

```sh
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. `npm run preview` serves that build locally. Neither command publishes the site. `node_modules/`, `dist/`, and Astro's cache are excluded from Git by `.gitignore`.

## GitHub Pages

The repository is https://github.com/Trexed1/trexed1.github.io and the live site is https://trexed1.github.io/. The initial deployment succeeded for commit 79925eb.

The local configuration uses that site URL. No repository subpath is needed for this user-site repository. The workflow in .github/workflows/deploy.yml uses Node 24 and the npm lockfile to build and deploy on pushes to main.

GitHub Actions deployment is working. Tyler runs future commit and push commands himself; a push to main triggers the deployment workflow. After future updates, verify the workflow succeeds and both the public homepage and resume.pdf respond successfully. Do not initialize Git or create the repository again.

Reference: https://docs.astro.build/en/guides/deploy/github/

## Original starter-kit setup (already completed)

1. Extract the ZIP.
2. Copy the contents of `website-starter-kit/` into your existing `website/` folder. Keep the same relative paths. `AGENTS.md` must be directly inside `website/`, not inside another nested starter-kit folder.
3. If your folder already has files with these names, preserve them and ask Codex to merge the instructions instead of blindly replacing them.
4. Open `website/` with VS Code's File → Open Folder.
5. Open Codex, verify the school ChatGPT account is active, and start a new chat.
6. Paste the contents of `FIRST_PROMPT.md`.

The kit also includes a .gitignore. On macOS, Command+Shift+Period toggles hidden files if you need to see it.

## What each file does

| File | Purpose |
| --- | --- |
| AGENTS.md | Instructions Codex reads for project work and logging. |
| FIRST_PROMPT.md | The first message to paste into Codex. |
| docs/PROJECT_BRIEF.md | Agreed goals, layout, palette, scope, and content rules. |
| docs/WORKLOG.md | One continuous append-only history with timestamps. |
| docs/SESSION_TEMPLATE.md | Structure for a new session handoff. |
| docs/sessions/2026-10-26_001.md | Initial planning handoff; clearly separates plans from implementation. |
| .gitignore | Excludes generated files, installed packages, and local environment files from Git. |

The website source is in `src/`, and the project commands are in `package.json`.

## Maintaining content

Edit personal content in src/data/portfolio-content.json. Keep status wording such as planned, accepted, and in progress accurate. The editorialNotes object stays internal and is never rendered. Null project links/images are omitted. Replace public/resume.pdf only when supplying an updated résumé; the page uses a base-aware download link.

Projects and competitions share one panel with official event logos. The infrastructure project and design-phase homelab have separate detail routes. Email and Discord retain clipboard controls; the contact form opens an email draft without sending or storing messages. San Diego is school context only; opportunities are sought in San Jose and nearby areas.

Two supplied NCL write-ups are written but cannot be shared publicly. Their originals under root writeups/ and local gallery material under docs/content-drafts/ are Git-ignored. Development-only write-up and asset routes serve local previews; production builds omit all private pages/files. No search or RSS has been added. public/resume.pdf is the exact updated Resume supplied October 28.

## Daily use

Open the same website folder and continue a Codex chat, or start a new one for a distinct task. At the start of a new chat, say: “Read AGENTS.md, the project brief, the latest handoff, and recent worklog entries. Inspect the files, then continue the next unfinished task.”

Codex is instructed to append to WORKLOG.md before each final reply. These notes stay in this folder; they are not an automatic cross-device sync service. Committing/pushing them with the project makes them available with the repository.

Before closing a chat, say: “Wrap this session. Create a new dated handoff and append its link to WORKLOG.md.”

A chat cannot reliably detect that you closed its window. The worklog is the recovery path if you forget to wrap.

## Naming and history

Use filenames such as `2026-10-26_001.md`, `2026-10-26_002.md`, then `2026-10-27_001.md`. This sorts correctly by year/date and supports multiple sessions per day.

All worklog entries and handoffs use current Los Angeles time and include the UTC offset. Old log entries and handoffs must remain intact. Update a mistaken claim by appending a correction.

PROJECT_BRIEF.md and this README describe the current project and can be edited as decisions change. WORKLOG.md and existing session files preserve history and must not be rewritten.

## First implementation milestone

Completed locally: checked tools, added Astro, built a first homepage, and generated static output. This folder was not a Git repository when inspected. Tyler will run any Git initialization, staging, commits, or pushes himself.

The production build passed. Tyler opens the local preview and performs desktop/mobile visual and keyboard checks himself. Codex must not access or control his personal Firefox browser or its data.

## Sources for tooling behavior

- Codex project instructions: https://learn.chatgpt.com/docs/agent-configuration/agents-md
- Codex projects/chats: https://learn.chatgpt.com/docs/projects
- Astro documentation: https://docs.astro.build/
- Astro on GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
