# Website worklog — append only

Timezone: America/Los_Angeles. Each entry uses an actual ISO 8601 timestamp with the UTC offset.
Keep every existing entry intact. Append corrections rather than changing history.
This journal records concise outcomes, not full chat transcripts.

<!-- New timestamped entries go below. -->

## 2026-10-26T15:58:55-07:00 — Initial project planning and starter kit

- Request: prepare Codex rules, a first prompt, a simpler scrolling portfolio design, and persistent session notes.
- Outcome: created the starter documents and chosen palette; recorded the reference feedback and logging procedure.
- Changed paths: AGENTS.md, README.md, FIRST_PROMPT.md, docs/PROJECT_BRIEF.md, docs/WORKLOG.md, docs/SESSION_TEMPLATE.md, .gitignore, docs/sessions/2026-10-26_001.md.
- Checks: palette contrast checked; no application build or local-machine checks performed.
- Next: install these notes in Tyler's website folder and let local Codex inspect the environment.
- Handoff: [2026-10-26_001.md](sessions/2026-10-26_001.md).

## 2026-10-26T15:58:55-07:00 — Starter kit verification

- Outcome: verified all eight expected files, relative handoff link, and the rule/prompt references.
- Checks: text files decode as UTF-8; handoff filename has date and sequence; previous worklog bytes preserved after append; ZIP content/CRC verification performed during packaging.
- Application state: no website code generated; no build, Git mutation, or deployment performed.
- Next: copy the files into website/ and begin with FIRST_PROMPT.md.

## 2026-10-26T20:06:27-07:00 — First local Astro homepage

- Request: inspect the starter folder and tools, then build a minimal local homepage without Git mutations or publication.
- Work/decision: preserved the starter notes; found no Git repository; confirmed Node v24.11.1 and npm v11.6.2; installed Astro 7.4.2 locally; added a static, one-page portfolio with the brief's five sections, palette, responsive CSS, active navigation, and visibly marked draft content. Updated README with working commands. No site was published.
- Changed paths: .gitignore, package.json, package-lock.json, astro.config.mjs, src/components/Header.astro, src/pages/index.astro, src/styles/global.css, README.md, docs/WORKLOG.md (this append).
- Checks: npm install passed (0 reported vulnerabilities); production build passed (one static page); local homepage returned HTTP 200; built section IDs and anchor links matched; GitHub profile returned HTTP 200; preview server stopped. Browser desktop/mobile visual and keyboard checks were not run because browser access was denied.
- Next/blocker: Tyler should preview the page at desktop and mobile widths and check keyboard navigation; confirm email, LinkedIn, résumé, and real project/writeup details before adding them. Tyler will run Git initialization and commits when ready.


## 2026-10-26T20:10:12-07:00 — Firefox privacy preference and local preview

- Request: do not access/control Tyler's personal Firefox browser or its data; record the preference and provide a local preview for Tyler to test.
- Work/decision: added the Firefox restriction and manual-preview workflow to AGENTS.md; started the local Astro preview at http://127.0.0.1:4321/ and left it running for Tyler. Used project files and terminal tools only.
- Changed paths: AGENTS.md, docs/WORKLOG.md (this append).
- Checks: confirmed the saved instructions and local HTTP 200 response. No build rerun for this documentation-only change; browser appearance and keyboard checks await Tyler's manual review.
- Next/blocker: Tyler can open the preview URL and report any desktop/mobile or navigation issues. No Git mutation or publication performed.


## 2026-10-26T20:40:42-07:00: Graphite/copper design update and local review

- Request: merge the supplied current requirements, follow all 30 exclusions, restyle the existing Astro source, preserve content/history/functionality, and provide a local design preview.
- Source/decision: PROJECT_BRIEF_UPDATE.md was not present; the matching supplied update was found in root PROJECT_BRIEF.md and preserved unchanged. Merged it into docs/PROJECT_BRIEF.md and updated AGENTS.md, FIRST_PROMPT.md, and README.md so the graphite/copper palette, Georgia headings, Arial body, exclusions, and design-before-content workflow supersede sage guidance.
- Work: restyled the existing CSS with shared color tokens, restrained serif headings, plain draft text, neutral dividers, copper links/focus/active states, responsive spacing, and readable code styling. Removed arrow decorations. Preserved existing paragraph content, links, section anchors, header, and active-navigation script.
- Changed paths: docs/PROJECT_BRIEF.md, AGENTS.md, FIRST_PROMPT.md, README.md, src/styles/global.css, src/pages/index.astro, docs/WORKLOG.md (this append). The production build regenerated dist/index.html; no generated file was hand-edited.
- Checks: production build passed (one static page); http://127.0.0.1:4321/ returned HTTP 200; built anchor targets all valid; all 30 exclusions recorded and reviewed against source; no old theme tokens or excluded visual-effect properties found in src/; current brief has no em dashes; text contrast measured 5.24:1 to 13.17:1. Fingerprints confirmed the supplied update, earlier worklog bytes, and session handoffs were unchanged before this append; normalized page paragraphs, links, and section IDs were preserved.
- Limits/next: preview remains running for Tyler's design review. Rendered desktop/mobile appearance, keyboard behavior, and narrow-screen overflow await his manual inspection; personal Firefox was not accessed. After design approval, confirm contact details and the actual résumé PDF, then draft each section from accurate supplied evidence. No Git mutations or publication performed.


## 2026-10-26T21:10:21-07:00: Portfolio content integration and visual review

- Request/decision: populate the existing site from supplied JSON/PDF and pause before Git/Pages. docs/TONIGHT_PLAN.md was missing; matching docs/INSTALL.md, docs/NEXT_CODEX_PROMPT.md, and Tyler's direct instructions supplied the sequence.
- Completed: compact data-driven intro, About/skills, education/work/activities/training, two native expandable projects, real résumé download, readable contact values and copy-email/Discord controls. Kept graphite/copper styling, statuses, anchors, and empty writing; omitted editorial notes, null project resources, search, and RSS.
- Changed paths: src/pages/index.astro, src/styles/global.css, src/components/ProjectRow.astro, src/components/CopyButton.astro, AGENTS.md, docs/PROJECT_BRIEF.md, README.md, docs/WORKLOG.md (append). Build regenerated dist/; supplied JSON/PDF and header were unchanged.
- Checks: production build passed; built content/statuses/anchors/disclosures/downloads passed; copy handlers passed terminal simulations for success/denial/unsupported access; homepage and résumé HTTP 200; served PDF matches original bytes. Existing history fingerprints preserved. Visual/mobile/keyboard/actual clipboard review awaits Tyler; Firefox was not accessed.
- Next: await visual approval and confirm expected May 2029 graduation remains current. Then help Tyler run Git commands, inspect/configure/verify actual GitHub Pages, check student domain options only after github.io works (no purchase/registration), create a new dated handoff with a worklog link, and stop for tonight. No Git mutation or publication performed yet.


## 2026-10-26T21:23:41-07:00: About edits and first-commit preparation

- Request/work: replaced the Pokémon-card hobby with volleyball, gym, cars, and video games; added tmux, Wireshark, and Active Directory to currently learning.
- Changed paths: src/data/portfolio-content.json, docs/WORKLOG.md (append); build regenerated dist/.
- Checks: production build passed; built requested text present and Pokémon removed. No local Git repository or configured author found; gh is absent. Connected GitHub account is Trexed1; intended user-site repository lookup returned 404.
- Next: Tyler runs repository-local Git setup and first commit. Clarification pending whether the requested link means GitHub Pages (public portfolio) or Codespaces (coding workspace). No Git mutation, repository/Codespace creation, publication, or Firefox access performed. Final handoff remains after the remaining setup sequence.


## 2026-10-26T21:24:41-07:00: Learning list correction

- Request/work: removed tmux and Git workflows from currently learning.
- Changed paths: src/data/portfolio-content.json, docs/WORKLOG.md (append); production build regenerated dist/.
- Checks: npm run build passed. Next: Tyler reviews the local preview; Git/hosting setup remains pending. No Git mutations or publication.

## 2026-10-26T21:30:00-07:00: GitHub Pages preparation

- Request/decision: Tyler selected a public GitHub Pages portfolio and confirmed expected graduation in May 2029. Recorded confirmation in content notes and current docs.
- Changed paths: astro.config.mjs, .github/workflows/deploy.yml, src/data/portfolio-content.json (editorial confirmation), AGENTS.md, docs/PROJECT_BRIEF.md, README.md, docs/WORKLOG.md (append); build regenerated dist/.
- Checks: production build and workflow YAML/config checks passed; current official action versions verified. Git shows main initialized by Tyler, no commits, no remote; generated/dependency files are ignored. Intended remote lookup returned 404; target https://trexed1.github.io/ is not verified live.
- Next: Tyler creates the empty public Trexed1/Trexed1.github.io repository, selects Pages > GitHub Actions, and runs local author/commit/remote/push commands. Then verify actual deployment/homepage/résumé, research student domain options only after github.io works, and create the final new handoff. No agent Git mutations, publication, purchase, registration, or Firefox access.


## 2026-10-26T21:31:15-07:00: Guided Git setup inspection

- Request/decision: use the existing local VS Code setup for GitHub Pages; explain one step at a time and let Tyler run Git commands.
- Checks: Git already initialized on main; no commits, no remote, no effective author name/email; source files untracked and Pages configuration present. Read-only inspection only; build not rerun.
- Changed paths: docs/WORKLOG.md (append). Next: Tyler sets the repository-local author name; then email, first commit, empty GitHub repository, push, and Pages verification. Do not initialize Git again.

## 2026-10-26T21:34:08-07:00: Batched Git guidance

- Request/decision: Tyler now wants the full explained Git/deployment sequence in one reply, superseding the prior one-command-per-turn preference. Tyler still runs commands in local VS Code.
- Checks: main initialized, author name saved by Tyler, email unset, no commits/remotes; target GitHub repository lookup returned 404. Build not rerun for documentation-only edits.
- Changed paths: AGENTS.md, docs/WORKLOG.md (append). Next: Tyler creates the empty public repository, commits locally, selects Pages Actions, and pushes; verify deployment before domain research and final handoff. No agent Git mutation or publication.

## 2026-10-26T21:39:15-07:00: Repository creation clarification

- Request/work: screenshot confirmed account-level Pages/domain settings; clarified that site Pages settings belong to the repository and a local commit does not create a GitHub repository.
- Checks: Tyler's local commit 79925eb exists on main; no remote; target repository lookup returned 404. No build needed for guidance-only work.
- Changed paths: docs/WORKLOG.md (append). Next: Tyler creates empty public Trexed1.github.io on GitHub, then configure repository Pages and connect/push. No agent Git mutations or browser access.

## 2026-10-26T21:52:25-07:00: Public deployment verified and session wrap

- Outcome: Tyler pushed commit 79925eb; GitHub Actions run 40451298921 succeeded. https://trexed1.github.io/ and /resume.pdf returned HTTP 200; live content/anchors/disclosures passed and résumé bytes matched the original.
- Domain check: after verifying github.io, reviewed official Student Pack offers (.me, .TECH, selected Name.com first-year domains). Eligibility/renewals remain unchecked; no purchase or registration.
- Changed paths: AGENTS.md, README.md, docs/PROJECT_BRIEF.md (live status), docs/WORKLOG.md (append), and new [2026-10-26_002.md](sessions/2026-10-26_002.md). Earlier handoff preserved. Final notes/handoff remain local and uncommitted; main tracks origin/main at deployed commit.
- Checks/limits: remote workflow and public files verified, documentation diff check passed; browser appearance/keyboard/clipboard review remains with Tyler. No agent Git mutations or Firefox access.
- Next: stop for tonight. Next chat reads the new handoff and actual Git state, reviews manual feedback, and helps Tyler save pending notes before optional future content/domain work.

- Final verification: earlier history fingerprints and all required handoff sections passed.

## 2026-10-27T11:01:07-07:00: Requested session wrap

- Request/work: wrapped for today and exclusively created [2026-10-27_001.md](sessions/2026-10-27_001.md); preserved all earlier handoffs and pending edits.
- Changed paths: docs/sessions/2026-10-27_001.md, docs/WORKLOG.md (append).
- Checks: read-only Git inspection shows main tracking origin/main at 79925eb; final notes/handoffs remain uncommitted. No code changes, build rerun, public-site recheck, Git mutation, or Firefox access during this wrap.
- Next: next chat reads the new handoff and actual Git state, then helps Tyler review/commit/push pending notes before further website work. Stop for today.

## 2026-10-28T14:27:27-07:00: Blue/slate local redesign

- Work: read START_HERE, redesign packet/images, current source/history; reconciled canonical/root briefs and instructions. Implemented tall one-time accessible name typing, short About/contact strip, current activities, one featured infrastructure lab, honest competitions/writing, and separate Portfolio/project/Write-ups/Contact routes with an email-draft form.
- Paths: src/pages (five routes), src/components/{Header,ProjectRow,Intro,Icon,ContactLinks,CompetitionList,ContactForm}.astro, src/layouts/SiteLayout.astro, src/lib/paths.ts, src/styles/global.css, src/data/portfolio-content.json; AGENTS.md, PROJECT_BRIEF.md, docs/PROJECT_BRIEF.md, README.md, FIRST_PROMPT.md, docs/NEXT_CODEX_PROMPT.md; .gitignore and two unpublished docs/content-drafts outlines; docs/WORKLOG.md (append).
- Checks: production build passed (five pages); built routes/links/assets/headings/labels/section order/Resume bytes and no public docs/editorial notes passed; all five preview routes and PDF HTTP 200. Built typing/reduced-motion, draft encoding/validation/failure, and clipboard logic passed terminal simulations. Text contrast 7.17:1 to 16.26:1; diff check passed. Resume, package/lockfile, deployment files, reference images, and earlier history fingerprints preserved; no dependencies added.
- Limits/next: preview left at http://127.0.0.1:4321/ for Tyler. Actual 375/768/1440 viewport appearance, keyboard/navigation behavior, clipboard permissions, and email-app opening await manual review. Draft outlines are Git-ignored and outside public routes. No Firefox access, Git mutations, publication, purchases, or domain registration.

## 2026-10-28T14:34:41-07:00: Preview and publication guidance

- Request/work: explain local viewing without Git and the complete user-run publication sequence after approval.
- Checks: local server listening at 127.0.0.1:4321; main tracks origin/main with the correct remote; redesign files/pending notes remain uncommitted and private article outlines are ignored. Build not rerun for guidance only.
- Changed paths: docs/WORKLOG.md (append). Next: Tyler reviews preview, then reviews/builds/stages/commits/pushes if approved; push triggers Pages. No agent Git mutations, publication, or browser access.

## 2026-10-28T15:37:55-07:00: Portfolio/content corrections and private write-up previews

- Work/decision: corrected San Diego to school-only context; opportunities are San Jose/nearby without a residence claim. Learning is Astro, Wireshark, Portainer. Combined two projects and NCL/CCDC entries into one panel; added official logos, two CCDC invitationals, and the supplied design-phase homelab with planned/optional wording. Reduced generic clip art and used actual supplied PDF page images.
- Privacy/Resume: Tyler confirmed no NCL publication permission and requested local-only documents. Two supplied write-ups have development-only galleries; public copy says written but not shareable. Root uploads/private material are Git-ignored and absent from production. Copied the supplied updated Resume unchanged; originals preserved.
- Paths: portfolio/content/contact/intro/layout/style files; new PortfolioOverview, LocalWriteupList, local-writeups helper, homelab/write-up/local-asset routes; public/images/competitions/, public/resume.pdf; .gitignore, AGENTS.md, README.md, docs/PROJECT_BRIEF.md, docs/ASSET_SOURCES.md, ignored docs/content-drafts/ncl-materials/, docs/WORKLOG.md (append).
- Checks: build passed (six public pages); location/learning/panel/status/link/logo/Resume-byte and private-output checks passed. Preview routes/resources HTTP 200; local galleries contain 24 full pages and private PDF/image bytes match inputs. Original inputs, history, package/lockfile and deployment fingerprints unchanged; diff check passed.
- Next/limits: local preview remains http://127.0.0.1:4321/; private previews are under /writeups/. Actual browser/viewport review awaits Tyler. No Firefox, Git mutations, publication, purchases, or registration.

## 2026-10-28T15:59:42-07:00: WRCCDC correction and session wrap

- Request/work: changed competition/team copy to WRCCDC (two invitationals), official regional link/logo; updated current guidance and asset sources. Created [2026-10-28_001.md](sessions/2026-10-28_001.md) exclusively; earlier history preserved.
- Paths: src/data/portfolio-content.json, public/images/competitions/wrccdc-logo.png, AGENTS.md, docs/PROJECT_BRIEF.md, docs/ASSET_SOURCES.md, docs/sessions/2026-10-28_001.md, docs/WORKLOG.md (append).
- Checks: six-page production build and diff check passed; WRCCDC output and private-production exclusions passed; no private files tracked or files staged. Preview restarted at http://127.0.0.1:4322/ and HTTP 200 verified. Browser/viewport review remains manual.
- Next: Tyler reviews, stages/inspects/commits/pushes using the explained sequence, then checks Pages Actions and public site/Resume. No agent Git mutations, publication, Firefox access, purchase, or registration. Stop for today.
