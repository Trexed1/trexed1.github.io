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

docs/PROJECT_BRIEF.md is canonical. The October 28, 2026 redesign in docs/REDESIGN_BRIEF.md supersedes conflicting older copper/Georgia, one-page-only, icon, rounding, and typing restrictions. The October 29 palette update supersedes its colors: use charcoal/neutral gray/off-white (#181818, #202020, #2A2A2A, #F2F2F2, #B8B8B8, #DEDEDE, #737373); no green, blue, or brown theme colors. Preserve original logo/document image colors. Continue with Arial/Helvetica system fonts. Useful labeled local SVG icons, one brief accessible name-typing effect, 8px controls, and 12px broad panels are authorized. Keep retained exclusions in the current brief.

Implement the existing project locally: homepage Intro/About Me/What I'm Doing/Competitions and Projects/Write-ups/Contact, plus Portfolio, project detail, Write-ups, and Contact routes. Use plain Resume spelling. Present Tyler as a CS student exploring interests. Preserve verified content/statuses and deployment/package files. Tyler supplied an updated Resume on October 28; public/resume.pdf now uses those exact bytes. Hide editorial notes and null links/images.

Latest corrections: San Diego is the school location only, never Tyler's residence. Use seeking opportunities in San Jose and nearby areas without inventing a current home city. Currently learning is exactly Astro, Wireshark, Portainer. Projects and competitions share one panel. Feature SDSU Infrastructure Project and Segmented Cybersecurity Homelab, with the latter explicitly in design phase and all work planned/possible. Include two WRCCDC invitationals. Prefer real supplied images and official competition logos over generic clip art; retain only useful brand icons.

Two actual NCL write-up PDFs were supplied. Tyler confirmed he has no publication permission and wants them local-only; public copy should say they are written but cannot be shared. Root /writeups/ uploads and docs/content-drafts/ are Git-ignored. Private galleries/files are served only in development and must be absent from production routes/assets. Do not move their answers, PDFs, transcripts, or page images into public/ or Git.

The contact form opens an encoded email draft; it does not send or store messages. Keep direct email/copy fallbacks. Name typing must retain accessible/no-JS text, reserve its width, finish once, and respect reduced motion including changes mid-effect.

Run the production build and relevant route/resource/interaction checks for this redesign. Leave the local preview running for Tyler's manual review. Do not access Firefox, run Git mutations, publish, purchase, or register anything. The live Pages site still shows the previously pushed version until Tyler explicitly publishes the local changes. The old October 26 stop-for-tonight instruction is historical and does not block this new task.

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

##Additional Rules

- Make the smallest change that completes my request.
- Preserve the current design, layout, and content unless I explicitly
  request a change to them.
- Do not rebuild the site, refactor unrelated code, or add dependencies
  for routine edits.
- Read the relevant source files. Avoid generated dist files and
  node_modules unless debugging specifically requires them.
- Use focused patches. Do not paste entire files into chat.
- Run checks appropriate to the change; avoid repeated full audits.
- Keep final replies to: what changed, files changed, verification.
  Aim for under 100 words unless I ask for a lesson.
- Keep worklog additions short and timestamped. Preserve old entries.
- Explain Git commands so I can run them myself.

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
