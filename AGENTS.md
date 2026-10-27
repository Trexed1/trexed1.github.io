# Instructions for Codex — Tyler Rex's website

## Start every new chat

1. Read this file, `docs/PROJECT_BRIEF.md`, and `README.md`.
2. List `docs/sessions/` and read the newest dated handoff matching `YYYY-MM-DD_NNN.md`. Sort by filename; read the final summary if that file contains multiple entries.
3. Read the last 100 lines of `docs/WORKLOG.md`; expand only if relevant context is missing. Entries after the latest handoff describe subsequent work.
4. Inspect the actual files and, if a Git repository exists, its status/diff. Files may have changed since the handoff. Preserve unrelated edits.
5. Briefly state what exists and the next task. Do not assume memory from another chat or account.

## Teaching and scope

Tyler is a beginner at web development, agents, and Git. Explain unfamiliar terms and new commands in plain language. Before a new command, state its purpose, folder, and whether it changes local files, history, or the public site. Keep explanations focused; work in small milestones.

Tyler runs Git mutations himself unless he explicitly asks you to do one: initialization, staging, committing, merging, and pushing. Read-only Git inspection is fine. Explain the proposed commands and a useful commit message. Do not change global Git settings or install system-wide tools without an explicit request. Local package setup is within the approved website work; explain it before proceeding.

For GitHub Pages setup, give Tyler the full command sequence with concise explanations in one reply. He executes the commands in his existing local VS Code terminal.

Make normal local edits within the requested milestone without repeated confirmation. Preserve existing starter notes if a scaffold expects an empty directory; scaffold temporarily and merge safely if needed. Do not deploy or purchase anything unless Tyler asks.

Use the architecture and design in the project brief. Favor plain CSS, semantic HTML, and small understandable components. Explain a dependency's purpose before adding it. Confirm claims about Tyler; do not invent credentials, scores, job history, or projects.

## Current design and content milestone

docs/PROJECT_BRIEF.md is the current design reference. Follow all 30 exclusions in its "All 30 design exclusions" section. The graphite/warm-gray/copper palette supersedes earlier sage/green guidance: #1B1D21 background, #24272C optional surface, #E6E3DC text, #B1B0AD muted text, #C98B61 links/focus/active accent, and #45484F dividers. Use Georgia headings/name and Arial body/navigation with local font fallbacks.

Keep one scrolling homepage, plain Tyler Rex branding, top-right desktop navigation, native anchors, and immediate active/focus feedback. Do not add gradients, shadows, rounded controls, colored left stripes, icon/arrow decorations, or hover animation. Read the full exclusion list rather than treating this summary as exhaustive.

Redesign the existing src/ files and shared CSS/components. Preserve valid content and functionality. Do not create another project or hand-edit generated dist/ files. Run the production build, which regenerates dist/, and provide a local preview URL. Keep Git mutations and publication with Tyler unless explicitly authorized.

The current request authorizes local content integration from src/data/portfolio-content.json and public/resume.pdf. Keep those supplied files intact, omit editorialNotes from rendered output, preserve planned/accepted/in-progress statuses, and omit null project links/images. Use a compact intro, readable flat sections, a working résumé download, native expandable project details, and copy-email/Discord buttons. Defer search and RSS until real writing exists.

Tyler has selected GitHub Pages for the public portfolio and requested hosting setup. Expected graduation in May 2029 was confirmed on October 26, 2026. Inspect the actual repository state and help Tyler run Git mutations himself, then configure and verify GitHub Pages. The intended user-site repository is Trexed1/Trexed1.github.io. Check student domain options only after the github.io address works. Do not buy or register anything. At the end of that sequence, create a new dated/numbered handoff, append its link to the worklog, and stop for tonight.

## Browser access and local preview

Do not access or control Tyler's personal Firefox browser or read its data, including tabs, history, bookmarks, cookies, saved sessions, or profile files.

Continue website work through project files and terminal checks. Provide the local preview URL so Tyler can open and test the site himself. When browser checks are left to Tyler, report desktop/mobile appearance and keyboard behavior as awaiting his manual review.

When Tyler requests a local preview for testing, leave that preview server running and provide its URL. This does not authorize publication.

## Append a worklog entry before EVERY final reply

Append to `docs/WORKLOG.md` while the chat is active. Include code tasks, planning, decisions, questions awaiting answers, and blockers. Keep small turns to a few lines. Do not copy entire conversations.

Every entry must have an actual current timestamp in `America/Los_Angeles`, including the UTC offset, for example `2026-10-26T16:20:00-07:00`. Obtain the time from the clock, not this example or a previous entry.

Include: request/task; work or decision; changed paths (or “none”); checks actually run and results (or “not run”); current blocker/next step. Distinguish planned work from completed work.

Use an append operation. Never replace, truncate, reorder, condense, or edit existing log text. Add a new timestamped correction if an earlier entry was wrong. Read the tail afterward to confirm the append succeeded. If logging is unavailable, tell Tyler; do not claim it happened. Do not log secrets or private client/competition data.

This is an instruction to follow during work, not a background process or a close-event hook. An interrupted or closed chat cannot be assumed to run cleanup.

## When Tyler says “wrap this session” (or asks for a handoff)

1. Inspect current project/Git state and record what is actually complete, incomplete, and unverified.
2. Create a NEW `docs/sessions/YYYY-MM-DD_NNN.md`, using today's Los Angeles date and the next unused three-digit number for that day. Example: `2026-10-26_002.md`. Use exclusive creation so an existing file cannot be overwritten.
3. Fill `docs/SESSION_TEMPLATE.md` with facts: created timestamp, summary, decisions, changed files, checks/results, Git/deployment state, blockers, and exact next steps. Include a brief copyable prompt for the next chat.
4. Treat saved handoffs as immutable history. Corrections go in the worklog or a new handoff. Never overwrite an earlier handoff, even on the same day.
5. Append a timestamped wrap entry to the worklog linking the handoff. Tell Tyler its path and what the next chat should do.

If the chat ends unexpectedly, the next chat should recover from the worklog and actual files without requiring a handoff.

## Verification and final responses

Run checks appropriate to the actual change. After implementation, run the production build if available and inspect desktop/mobile behavior. Report limitations honestly. Do not write tests that only repeat styling choices.

End each task with a concise explanation of changes, verification, and Tyler's next action. Keep project instructions/brief accurate as choices evolve; record meaningful changes in the append-only worklog. Keep notes under `docs/`, outside public asset and generated-page directories.
