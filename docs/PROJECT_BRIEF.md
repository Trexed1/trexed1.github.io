# Tyler Rex: website brief

Current design requirements merged from the supplied root-level PROJECT_BRIEF.md on October 26, 2026. This brief is the current project reference. The graphite/copper design supersedes the earlier charcoal-and-sage theme and older prompts or handoffs recommending green accents. Historical worklogs and handoffs remain unchanged.

## Purpose and audience

A personal portfolio for internship recruiters, professional contacts, and readers of technical writeups.

Make it easy to find:
1. Contact information, general location, résumé, GitHub, and LinkedIn.
2. Education, experience, certifications, competitions, and internship interests.
3. Real personal/course/lab projects Tyler can explain.
4. HTB/CTF writeups and technical notes.

## Confirmed context and content boundaries

- Name: Tyler Rex.
- Computer science student at San Diego State University.
- Interests: cybersecurity, Linux/system administration, IT, and software development.
- GitHub username: Trexed1.
- School is in San Diego; San Jose/Bay Area is a desired work area. Confirm exact public wording and current availability.
- Desired hosting: GitHub Pages first; optional domain later.

Tyler has now supplied src/data/portfolio-content.json and public/resume.pdf and authorized their use in the local portfolio. The JSON is the maintained source for page content, including contact details and phone; the actual PDF is the résumé download. Preserve these supplied inputs and never render the editorialNotes object.

Expected graduation in May 2029 was confirmed by Tyler on October 26, 2026. Keep it explicitly expected, minors planned, clinic status accepted, and training/exam preparation in progress. Participation does not imply a ranking or award; an accepted clinic role does not establish completed client work. Review any remaining changes with Tyler before making new public claims.

Use only the supplied descriptions for education, work, activities, and projects. Null project URLs/images mean no verified resource; omit those links and images rather than adding placeholders. Discord is a username, not an invented invite/profile link. Keep the writing section empty until real articles exist.

Use short, natural, student-appropriate wording. Missing data can be clearly marked as draft in a local preview. Do not create fake achievements, fake projects, sample CTF solutions, dead links, or résumé buttons pointing nowhere. A real project/writeup list may initially be small.

## Reference and what to borrow

Primary reference: https://domthedeveloper.com/

Tyler supplied screenshots of the intro/header and About area. Borrow the long, naturally scrolling page structure, clear section separation, top-right navigation, and understated active-section indicator.

User feedback:
- Dislikes the top-left code-style logo. Use plain text “Tyler Rex,” linked to the page top.
- Likes scrolling down through the sections listed in the navigation.
- Dislikes the interactive command-line/help widget. Omit it entirely.
- Wants a simpler, less elaborate version.
- Wants us to choose the palette rather than copy the reference.

Do not copy the reference's source code, text, identity, giant gradient title, decorative code tags, or skills. The screenshot's full-stack-engineer biography is not Tyler's biography.

## Chosen visual direction

Use neutral graphite, warm light gray, and restrained copper. Remove the green/sage cast from all implemented backgrounds, surfaces, borders, links, and active/focus states. Use solid colors only.

- Page background: #1B1D21; CSS token --color-bg.
- Optional subtle surface for actual code or necessary controls: #24272C; --color-surface.
- Primary text: #E6E3DC; --color-text.
- Secondary text: #B1B0AD; --color-muted.
- Links, focus, and active navigation: #C98B61; --color-accent.
- Decorative dividers: #45484F; --color-divider.

The supplied palette's primary, secondary, and accent text contrast against both backgrounds ranges from 5.24:1 to 13.17:1. Recheck contrast if colors change. Divider color is decorative and cannot be the only focus indicator. Copper is for useful accents, not a background wash or every heading.

Use Georgia, "Times New Roman", serif for headings and the name. Use Arial, Helvetica, sans-serif for body text and navigation. Reserve a readable system monospace stack for actual code. Use local fonts for this pass; add no remote font requests or font-loading packages.

Use sentence case, a restrained hierarchy, and comfortable line height. Body text should generally be 17-18px. Start the desktop name heading around 44-56px and reduce it for mobile. Keep long prose and article text around 65-75 characters wide.

Center the main content at a maximum width around 1040-1120px with responsive side padding. Let content determine section height. Avoid a full-screen empty intro. Prefer simple lists, text-led project rows, whitespace, and thin horizontal dividers. Do not put surfaces around ordinary paragraphs. Controls must have square corners, no shadows, and visible text labels.

## All 30 design exclusions

Every item below is excluded. There were no INCLUDE overrides. These requirements apply to the current site and newly written site copy.

1. Gradients of any kind, including harsh gradients.
2. Lucide icons or another icon library used to recreate that treatment. Use text labels.
3. Pure white backgrounds. Light-colored text is allowed.
4. Rainbow coloring or multicolor category decoration.
5. Drop shadows, including box shadows, text shadows, and drop-shadow filters.
6. Default three-across feature-card sections.
7. Emojis in site copy, navigation, or bullets.
8. Liquid-glass effects, frosted-glass panels, and backdrop blur.
9. Em dashes in newly written site copy and the current brief. Use normal sentence punctuation.
10. Inter, Geist, and Space Grotesk fonts.
11. Colored left stripes on headings, entries, panels, or timelines.
12. Fake testimonials or invented social proof.
13. Bento grids.
14. Terminal windows, command prompts, and interactive command-line/help widgets. Ordinary article code blocks remain allowed.
15. The "it's not X, it's Y" formula and variations of that contrastive copy.
16. Checkmark bullets. Use ordinary bullets, numbers, or prose.
17. Three pricing tiers or other pricing sections for this portfolio.
18. Product-demo sections in this pass. Do not invent demonstrations. Real project explanations and repository links remain allowed.
19. Soft or rounded corner treatments on interface panels, buttons, and controls. Use square corners.
20. Purple-and-black visual schemes.
21. Skeleton loaders.
22. Radial orbs, glowing blobs, and ambient gradient effects.
23. Dot grids, particle fields, stars, and connected-node backgrounds.
24. Sparkle icons.
25. Animated arrows or arrow decorations.
26. Terms-of-service pages, links, or footer boilerplate in this portfolio scope.
27. Privacy-policy pages, links, banners, or boilerplate in this portfolio scope.
28. Hover animations, including transforms, scaling, movement, fades, and animated transitions.
29. Neon colors, glow effects, and high-intensity accent washes.
30. Basic pastel color schemes or pastel accent collections.

Item 18 was supplied as "no real product demos" and currently excludes dedicated demo sections. A later explicit request for a real project demonstration can supersede that interpretation; record the decision.

Standing exclusions also include typewriter effects, artificial achievement counters, skill percentage bars, oversized badge collections, invented credentials, fake projects, and generic promotional claims.

Immediate, non-animated hover/focus feedback is allowed. Preserve visible link underlines and focus outlines. Actual article code must remain plain, square, readable, and horizontally scrollable within its own container when needed; do not restyle it as a fake terminal.

## Homepage structure and navigation

The homepage is one scrolling document.

Header: plain name at left, section links at right on desktop. Sticky header, modest height, solid background, and unobtrusive divider.

Navigation/order:
- About: #about
- Experience: #experience
- Projects: #projects
- Writing: #writing
- Contact: #contact

Use ordinary anchor links. Clicking a link should move to the corresponding section and preserve useful URL hashes. Account for the sticky header so headings remain visible. Highlight the current section during scrolling with a restrained underline/accent; keep navigation usable without JavaScript.

A small amount of vanilla JavaScript can track the active section. Use native scrolling with immediate active-link feedback; no scroll hijacking, mandatory snap points, full-screen section heights, or scroll-triggered entrance effects. Honor reduced-motion preferences. On mobile, wrap links neatly or use a simple accessible text "Menu" control only if necessary; prevent horizontal page overflow.

Intro above About: moderately sized “Tyler Rex,” a short factual description, location/opportunity wording when confirmed, and clear professional links. Use a résumé link only when the file exists. Do not add a separate navigation section just for an empty hero.

About: short introduction and what Tyler is learning/building.
Experience: concise entries for education, relevant work/activities, certifications, and competitions, with confirmed dates/status.
Projects: compact entries for real projects; title, purpose, Tyler's role, technologies actually used, and links.
Writing: dated list of real writeups/notes, with platform/topic labels where helpful.
Contact: email and professional links, plus confirmed location/availability wording.

Full articles and substantial project details may have separate pages. Their header links should return to the homepage's matching anchors. The homepage remains the main scrolling overview; article links do not replace its sections.

## Implementation

- Astro, static output, plain CSS, npm, and Markdown for writing.
- Shared components only where useful: header, footer, project row, article layout.
- Reuse the existing Astro project, valid content, and working navigation. Do not create a second project, reinstall everything, or change frameworks for a visual redesign.
- Edit source in src/ and shared styles/components. Do not hand-edit generated dist/ files; the production build regenerates them.
- Keep client-side JavaScript small and purposeful.
- Node.js is for local development/build tooling. No persistent application server is needed for this portfolio.
- No database, login, runtime AI feature, paid service, or contact-form backend in version one. Email links suffice.
- No analytics or extra dependencies by default.
- Defer search and RSS until real writing exists.
- GitHub Pages is the intended host. Before deployment, inspect the actual GitHub account/repository state. A user-site repository would be Trexed1.github.io; do not assume it already exists or create it without discussing the Git step.
- Use current official deployment guidance when that milestone arrives. No deployment in the first local-build task.
- Keep docs, worklogs, templates, and handoffs out of public/ and src/pages/. They are project notes, not portfolio pages.

For writeups, support readable headings, code blocks, images/captions, dates, and a shared layout. Check platform/event publishing rules. A draft flag can omit a page from a build, but cannot hide source in a public repository. Keep confidential/unreleased material out of public Git history.

## Workflow and content intake

Tyler runs Git mutations himself unless he explicitly asks otherwise. Explain commands, their directory, and whether they affect local files, history, or a public site. Read-only Git inspection is allowed. Tyler has selected GitHub Pages and requested setup for the public portfolio; prepare local configuration and guide his Git commands using actual repository state. No purchase or domain registration is authorized.

Do not access or control Tyler's personal Firefox browser or read its profile, tabs, history, or other data. Use source/build/terminal checks and provide a local preview URL for Tyler's manual inspection. State which visual checks remain unverified.

Append actual current Los Angeles timestamps, including the UTC offset, to docs/WORKLOG.md before every final reply. Preserve existing entries and session handoffs. When asked to wrap, create a new dated and numbered handoff.

Tonight's sequence:
1. Integrate the supplied JSON and actual résumé into the existing site.
2. Make focused improvements: compact introduction, readable flat experience/project sections, native expandable project details, and copy-email/Discord buttons with readable text fallback.
3. Build, report checks, provide the local preview, and pause for Tyler's visual approval.
4. After approval, inspect actual repository state, help Tyler run Git commands himself, and configure/verify GitHub Pages.
5. Check student domain options only after the github.io address works. Do not buy or register anything.
6. Create a new dated/numbered session handoff, append its link to the worklog, and stop for tonight.

Prepare public copy from evidence Tyler supplies. Keep unknowns in project notes. A local draft may clearly identify incomplete sections, but do not add repeated "coming soon" blocks.

## Current milestone and checks

The supplied content is integrated into the graphite/copper homepage with Georgia/Arial typography, native project disclosures, and copy controls. The current milestone is GitHub Pages setup for the intended Trexed1/Trexed1.github.io repository, followed by verification of the actual public homepage and résumé. Keep deployment status in the worklog; do not claim the target URL is live until verified.

Confirm the production build completes. Review all 30 exclusions against the source and rendered result where permitted. Check that no old green/sage theme tokens remain in implemented source. Check navigation targets, sticky-header offsets, visible keyboard focus, active-section behavior, reduced-motion handling, readable code, and narrow/mobile overflow. Check links and résumé availability. Preserve worklog/handoff history and report checks actually performed, including manual visual checks awaiting Tyler.

Later milestones: confirmed résumé/content; project details and Markdown writeups; accessibility/link review; GitHub Pages deployment; optional domain.
