# Tyler Rex — portfolio

This folder now contains a first local Astro homepage and the planning/continuity notes that guided it. The page is a draft; missing personal details are labeled rather than filled in with guesses. Nothing has been published.

The current visual direction is graphite, warm gray, and copper, with Georgia headings and Arial body text. See docs/PROJECT_BRIEF.md for the full requirements and 30 exclusions. Older sage/green choices in historical handoffs are superseded. Content comes from src/data/portfolio-content.json, with the supplied résumé at public/resume.pdf. GitHub Pages setup is in progress; a successful public deployment has not yet been verified.

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

The intended repository is Trexed1/Trexed1.github.io, with target URL https://trexed1.github.io/. That URL is a deployment target, not a verified live site yet.

The local configuration uses that site URL. No repository subpath is needed for this user-site repository. The workflow in .github/workflows/deploy.yml uses Node 24 and the npm lockfile to build and deploy on pushes to main.

Create the matching empty public repository on GitHub, then set its Settings > Pages > Source to GitHub Actions. Tyler runs the commit, remote setup, and push commands himself. Once pushed, verify the workflow succeeds and that both the public homepage and resume.pdf respond successfully.

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

Project details use native expandable controls. Email and Discord have copy buttons when the browser supports clipboard access; the contact text remains readable without JavaScript. No articles, search, or RSS have been added.

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
