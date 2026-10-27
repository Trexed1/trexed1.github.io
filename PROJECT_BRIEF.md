# Tyler Rex website: updated project brief

Updated: October 26, 2026
Timezone for future worklog entries: America/Los_Angeles

## Apply this update to the existing project

This is the current design/content brief. Its design decisions supersede the earlier charcoal-and-sage theme and any older prompt or handoff that recommends green accents.

This document was prepared outside Tyler's Mac project. The existing source files, live preview, current local notes, and Git state have not been inspected here. A screenshot previously showed an Astro project with src/, dist/, node_modules/, docs/, and configuration files.

Codex working in the actual website folder should:
1. Read AGENTS.md, this brief, the newest session handoff, and recent worklog entries. Inspect current source files and Git status.
2. Merge these current requirements into docs/PROJECT_BRIEF.md. Preserve still-valid project facts, setup instructions, and user changes. Keep a concise reference to this brief's constraints in AGENTS.md.
3. Preserve docs/WORKLOG.md and every existing handoff. Append a timestamped entry describing this revision. Do not replace those files with older starter-kit copies.
4. Update any current setup/prompt document that still recommends sage/green so it no longer contradicts the brief.
5. Redesign the existing Astro source. Do not create a second project, erase working content, reinstall everything, or change frameworks to accomplish a visual redesign.
6. Work in src/ and the actual shared styles/components. Do not hand-edit generated files in dist/.
7. Keep the existing site local. Do not stage, commit, push, deploy, purchase a domain, or access Tyler's personal Firefox browser unless he explicitly asks for that action.

The immediate task is a new visual pass. Content preparation follows once Tyler is comfortable with the design.

## Purpose and audience

Build a personal portfolio for internship recruiters, professional contacts, and readers of technical notes.

Priorities:
1. Communication/resources: contact, general location, resume PDF, GitHub, and LinkedIn.
2. Relevant background: education, experience, certifications, competitions, and internship interests.
3. Real projects Tyler can explain.
4. HTB/CTF writeups and other useful technical notes.

Keep the site readable, direct, credible, and easy for a beginner to maintain.

## Reference and structure

Primary visual reference: https://domthedeveloper.com/

Borrow its long scrolling document, clear sections, top-right desktop navigation, and restrained current-section indication. Tyler wants a simpler execution with his own colors and content.

Use plain text "Tyler Rex" at top left, linked to the page top. Do not use code brackets or a developer-logo treatment.

Homepage navigation and order:
- About: #about
- Experience: #experience
- Projects: #projects
- Writing: #writing
- Contact: #contact

Use ordinary anchor links and native scrolling. Keep headings visible below the sticky header. An immediate underline or color change can identify the active section without animation.

A small vanilla-JavaScript observer may update the active link while scrolling. Navigation must remain usable without it. Do not introduce scroll hijacking, mandatory snap points, full-screen section heights, or scroll-triggered entrance effects.

On mobile, allow a tidy wrapped navigation or a simple text "Menu" control if necessary. Preserve keyboard access, clear focus states, and no horizontal page overflow.

Substantial articles and project details can have separate pages. Their navigation should link back to the corresponding homepage anchors.

## Palette: graphite, warm gray, copper

Remove the green/sage cast from backgrounds, surfaces, borders, links, focus indicators, and other theme tokens. Apply the replacement consistently across the site.

Use solid colors only.

| Role | Color | Notes |
| --- | --- | --- |
| Page background | #1B1D21 | Neutral graphite |
| Subtle surface | #24272C | Optional for actual code blocks or necessary controls |
| Primary text | #E6E3DC | Warm light gray |
| Secondary text | #B1B0AD | Readable neutral gray |
| Links/focus/active accent | #C98B61 | Restrained copper |
| Decorative divider | #45484F | Neutral gray separator |

The primary, secondary, and accent text were checked against both backgrounds. Contrast ratios range from 5.24:1 to 13.17:1. Recheck contrast if any color changes. Divider color is decorative; do not rely on it as the only focus indicator.

Copper is an accent, not a background wash or a color applied to every heading. Use it for useful links, focus, and active navigation. Keep most of the interface neutral.

Suggested CSS tokens, adapted to existing variable names where appropriate:

```css
:root {
  --color-bg: #1b1d21;
  --color-surface: #24272c;
  --color-text: #e6e3dc;
  --color-muted: #b1b0ad;
  --color-accent: #c98b61;
  --color-divider: #45484f;
  --radius: 0;
}
```

## Typography and layout

Headings/name: Georgia, "Times New Roman", serif.
Body/navigation: Arial, Helvetica, sans-serif.
Actual code: an existing readable system monospace stack.

Use these local fonts for the first redesign. Do not add a font-loading package or remote font request for this pass. Do not load Inter, Geist, or Space Grotesk.

Use normal sentence case, a clear hierarchy, and comfortable line height. A starting point is 17-18px body text and a 44-56px desktop name heading, reduced appropriately on mobile. Avoid giant promotional titles.

Center the main content with a maximum width around 1040-1120px. Keep long prose and article reading widths around 65-75 characters. Use responsive side padding and spacing that follows the content. Do not make every section fill the screen.

Use simple lists, text-led project rows, and thin horizontal dividers. Buttons/controls should have square corners, no shadows, and visible text labels. Do not add surfaces around ordinary paragraphs.

## Explicit exclusions

Treat every item Tyler supplied as an exclusion. There were no INCLUDE overrides. Where his wording already contained "no," retain the practical exclusion instead of reversing it into a double negative.

| # | Exclude |
| --- | --- |
| 1 | Harsh gradients. For this design, use no gradients at all. |
| 2 | Lucide icons. Use text labels; do not substitute another icon library to recreate the same treatment. |
| 3 | Pure white backgrounds. Light-colored text is permitted. |
| 4 | Rainbow coloring or multicolor category decoration. |
| 5 | Drop shadows, including box shadows, text shadows, and drop-shadow filters. |
| 6 | Default three-across feature-card sections. |
| 7 | Emojis in site copy, navigation, or bullets. |
| 8 | Liquid-glass effects, frosted-glass panels, and backdrop blur. |
| 9 | Em dashes in newly written site copy and current brief text. Use normal sentence punctuation. |
| 10 | Inter, Geist, and Space Grotesk fonts. |
| 11 | Colored left stripes on headings, entries, panels, or timelines. |
| 12 | Fake testimonials or invented social proof. |
| 13 | Bento grids. |
| 14 | Terminal windows, command prompts, and interactive command-line/help widgets. Ordinary article code blocks remain allowed. |
| 15 | The "it's not X, it's Y" formula and variations of that contrastive copy. |
| 16 | Checkmark bullets. Use ordinary bullets, numbers, or prose. |
| 17 | Three pricing tiers or other pricing sections for this portfolio. |
| 18 | Product-demo sections in this pass. Do not invent demonstrations; real project explanations and repository links remain allowed. |
| 19 | Soft/rounded corner treatments on interface panels, buttons, and controls. Use square corners. |
| 20 | Purple-and-black visual schemes. |
| 21 | Skeleton loaders. |
| 22 | Radial orbs, glowing blobs, or ambient gradient effects. |
| 23 | Dot grids, particle fields, stars, and connected-node backgrounds. |
| 24 | Sparkle icons. |
| 25 | Animated arrows or arrow decorations. |
| 26 | Terms-of-service pages, links, or footer boilerplate in this portfolio scope. |
| 27 | Privacy-policy pages, links, banners, or boilerplate in this portfolio scope. |
| 28 | Hover animations: no transforms, scaling, movement, fades, or animated transitions on hover. |
| 29 | Neon colors, glow effects, or high-intensity accent washes. |
| 30 | Basic pastel color schemes or pastel accent collections. |

Item 18 was supplied as "no real product demos." For now it is interpreted as excluding dedicated demo sections. If Tyler later explicitly requests a real project demonstration, follow that updated instruction and record the decision.

Additional standing constraints remain: no typewriter effects, artificial achievement counters, skill percentage bars, oversized badge collections, invented credentials, fake projects, or generic promotional claims.

Instant non-animated hover/focus feedback is allowed and useful. Underline a text link immediately or show a visible focus outline. Do not remove accessibility feedback in the name of avoiding animation.

Do not restyle actual article code into a fake terminal. Code blocks should be plain, square, readable, and scroll horizontally within their container when needed.

## Content and truthfulness

Known identity/context:
- Tyler Rex.
- Computer science student at San Diego State University.
- Interests include cybersecurity, Linux/system administration, IT, and software development.
- Personal GitHub username: Trexed1.
- School is in San Diego; San Jose/Bay Area is the previously stated preferred work area.
- GitHub Pages is the intended host, with an optional domain later.

Tyler said he was providing contact information in the latest message, but no new contact fields or attachment were actually included. Do not claim this message confirmed or updated an email, phone, URL, or resume.

Previously provided details to confirm before publication:
- Email: tylernrex@gmail.com.
- LinkedIn candidate: https://www.linkedin.com/in/tylerrexcs/
- GitHub: https://github.com/Trexed1
- Public location wording: studying in San Diego; seeking work in San Jose/Bay Area.
- Phone: not supplied for this site. Omit unless Tyler explicitly wants it public.
- Current resume PDF: not available in this design update.

Do not add placeholder contact links or fabricate a resume path. Use a resume download link only after the actual PDF has been supplied and the path works.

Before writing public claims, confirm graduation timing, internship availability, GPA if included, certification status, dates, competition results, and actual responsibilities. Do not turn an in-progress certificate into a completed qualification.

Possible content leads from prior discussions, all requiring current confirmation:
- Cyber Defense Team participation.
- NCL and CCDC participation.
- Cybersecurity Clinic participation and actual work completed.
- Unix/Linux systems administration coursework and labs.
- Customer-facing work experience.
- MIPS programs or assembler/disassembler coursework as possible project material.

A participation entry does not imply an award or competition ranking. An accepted clinic role does not establish completed client work.

## After the design is approved: content intake

Collect and draft one section at a time:
1. Contact and resume: confirm email, LinkedIn, public location, opportunity/availability wording, and the latest PDF.
2. Introduction: a short factual summary of studies, interests, and current work.
3. Education/experience: degree, expected graduation, relevant courses, work/activities, dates, and responsibilities.
4. Certifications/competitions: names, current status, dates, and only verified outcomes.
5. Projects: title, problem, what Tyler personally did, tools used, result, and repository link.
6. Writing: actual article title, date, platform/topic, source notes, and publication permission where applicable.

Prepare public copy from evidence Tyler supplies. Keep unknowns in internal notes. A local draft may identify incomplete sections clearly; do not fill the public page with repeated "coming soon" blocks.

Keep client/private material and unreleased challenge solutions out of a public repository. A draft flag may omit a page from the site build but does not hide its source in public Git history.

## Architecture and workflow

Keep the existing Astro static project, plain CSS, npm, and Markdown-based writing approach. Reuse useful components and working navigation. Remove decorative complexity without destroying valid content or functionality.

Use small amounts of client-side JavaScript for actual needs such as active-section navigation. No database, login system, runtime AI feature, contact-form service, analytics package, or paid service in this redesign.

Tyler runs Git mutations himself unless he explicitly asks otherwise. Explain new commands, their directory, and whether they affect local files, history, or the live site. Read-only Git inspection is allowed.

Do not access or control Tyler's personal Firefox browser/profile/history. Run code/build checks and provide the preview URL for manual inspection. If visual checks cannot be performed with the available permitted tools, state that clearly.

Continue appending actual timestamped notes to docs/WORKLOG.md before final replies, using America/Los_Angeles and the UTC offset. Never rewrite existing entries. Create a new dated/numbered handoff when Tyler asks to wrap the session.

## Redesign acceptance checks

- No green/sage theme tokens remain in the implemented site.
- The chosen palette is consistent across backgrounds, borders, links, and active/focus states.
- All 30 exclusions have been reviewed against the source and rendered result where accessible.
- Header, native anchor navigation, active-section indicator, and sticky-header offsets still work.
- Keyboard navigation and visible focus are preserved.
- No horizontal page overflow on narrow screens.
- Real code blocks remain readable.
- No draft contact link, empty resume download, invented project, or unsupported claim is published.
- Production build passes if the environment permits running it.
- Existing worklog and handoff history remain intact.
- Changed source paths and verification results are reported. No deployment occurs.

First deliverable from local Codex: one coherent restyled homepage to review, a concise summary of changes/checks, and the preview URL. Content expansion follows Tyler's design feedback.
