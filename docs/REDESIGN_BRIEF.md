# Tyler Rex: personal website redesign

Prepared October 28, 2026. Implement this in the existing local Astro project. This is a complete implementation brief, not authorization to publish.

## 1. Purpose and current direction

Build a useful personal website for Tyler Rex, a computer science student at SDSU who is exploring different interests. It should introduce Tyler, provide contact and professional links, and give his projects, competitions, and future write-ups a home. He does not want to claim a specialty or a senior professional identity.

The desired experience combines the scale and opening composition of Dom's intro with the compact factual About and contact controls in James's site. Use the supplied screenshots for hierarchy and proportions. Create Tyler's own design and copy. Preserve his actual content and the working GitHub Pages setup.

This request authorizes a coherent visual and structural redesign of the existing source, including new page routes. It does not authorize a framework migration, a new scaffold, new paid services, Git mutations, or publication. Finish the requested local implementation and present a working preview.

## 2. Read first and reconcile existing instructions

Follow the startup and history procedures in AGENTS.md. Read the canonical brief, latest handoff, recent worklog tail, actual source, and Git status/diff. Local files may be newer than the GitHub snapshot used to prepare this guide. Preserve unrelated work.

The current repository has Astro, plain CSS, three small components, a JSON content file, a public resume PDF, and automatic Pages deployment on pushes to main. No additional framework is required.

Existing AGENTS.md and briefs still describe copper links, Georgia headings, no icons, one page only, and strict visual exclusions. Merge this latest direction into their current requirements before implementation. Do not let stale instructions prevent the requested design. Keep one canonical source of current requirements, and synchronize any root brief that is still treated as active. Do not rewrite historical worklogs or dated handoffs.

### Explicit changes to older constraints

- Replace the copper/warm palette with the blue/slate palette below.
- Use Arial/Helvetica system sans-serif for headings and body. Large, bold name and section headings replace the previous Georgia-led design.
- Allow useful document, email, phone, location, GitHub, LinkedIn, and Discord icons. This is a specific exception to the old icon ban. Do not add Lucide or a large icon library.
- Allow one short name-typing animation and its brief caret. This is a specific exception to the old animation restrictions. Keep ordinary hover feedback immediate, with no movement or animated transitions.
- Allow subtle corner rounding: approximately 8px for controls and 12px for broad section panels. Avoid exaggerated pills and a collection of floating cards.
- Allow separate Portfolio, Write-ups, Contact, and project detail pages alongside the scrolling homepage.
- Replace every rendered accented resume label with plain `Resume`.
- Allow content data changes needed by this redesign. Preserve verified facts and the current resume PDF; do not replace the PDF or change factual statuses without a new basis.

Retain these exclusions: no harsh or decorative gradients; no liquid glass, blur, shadows, pure white backgrounds, rainbow colors, green/copper accents, neon, pastel-themed surfaces, purple-and-black scheme, feature-card triplets, bento grids, decorative left stripes, emojis, sparkles, animated arrows, dot/particle/network backgrounds, radial orbs, fake terminal chrome, fake testimonials, pricing sections, loading skeletons, or generic marketing slogans. Do not use Inter, Geist, or Space Grotesk. Do not use em dashes in visible copy. Do not add analytics, policy boilerplate, or cookie banners for features that do not exist.

The reference images contain several excluded effects. Borrow their organization and prominence, not every decorative treatment. No fake command path or terminal dots above About.

## 3. Reference images

- `reference-images/dom-intro.png`: large name, spacious opening viewport, obvious primary actions, scroll invitation. Do not copy Dom's logo, role, slogan, gradient lettering, particles, or code-tag decoration.
- `reference-images/james-about.png`: concise factual lines, clear heading, generous spacing. Do not copy his job title or career target.
- `reference-images/james-contact-strip.png`: contact information and recognizable icon actions near the introduction. Do not use his photo or personal details.
- `reference-images/james-contact-page.png`: separate contact destination with location and a real form-shaped email drafting interaction. Do not copy its glass/gradient styling.

Keep these screenshots under docs only. They are not website content and must not be imported into the site or copied to public.

## 4. Visual specification

Use these shared CSS variables as the initial palette:

| Token | Value | Use |
| --- | --- | --- |
| Background | `#0E1520` | Main page background |
| Surface | `#151F2E` | Broad section panels or header |
| Raised surface | `#1B293A` | Form fields and secondary controls |
| Text | `#EDF2F7` | Headings and primary text |
| Muted text | `#A9B6C8` | Secondary text and metadata |
| Accent | `#8CBCE8` | Links, active state, focus, primary buttons |
| Divider | `#33445A` | Borders and separators |

Use the dark background as text on filled accent buttons. Keep links identifiable through context and underlines where appropriate. Preserve visible keyboard focus. No opacity tricks that make important text faint.

Use system fonts. Intro name should be very large and bold, roughly `clamp(3.5rem, 9vw, 8rem)` adjusted to fit the actual viewport. Section headings should feel substantial, roughly 2rem to 3rem. Body text should stay around 1rem to 1.125rem with comfortable line spacing. A maximum content width around 70rem is appropriate. Use meaningful spacing and borders to create hierarchy, with a restrained number of broad panels.

The intro should occupy approximately the first viewport below the navigation. Use a small-viewport-height unit with a sensible fallback and natural growth for short/mobile screens. Do not force a height that clips buttons or hides content. The rest of the site should become denser than the intro and remain easy to scan.

## 5. Information architecture and navigation

### Homepage `/`

Use this exact section order:

1. Intro: `#top`
2. About Me: `#about`
3. What I'm Doing: `#now`
4. Competitions and Projects: `#portfolio`
5. Write-ups: `#writeups`
6. Contact: `#contact`

This satisfies the scrolling experience: users can keep scrolling to see every major area. The homepage should show useful previews, with routes for deeper content.

### Separate routes

- `/portfolio/`: page heading `Competitions and Projects`.
- `/portfolio/sdsu-infrastructure/`: actual infrastructure project details.
- `/writeups/`: writing index; show only real published articles.
- `/contact/`: full contact destination, with the email drafting form.

Header: plain `Tyler Rex` at left. Desktop navigation at right: About, Portfolio, Write-ups, Contact. Use `/#about` for About and real route links for the others. Inside the homepage previews, use clear `View portfolio`, `View write-ups`, or `Contact me` links styled appropriately. The first intro Portfolio button must open `/portfolio/`, not silently scroll to a similarly named section.

Use normal anchors and Astro's existing routing. Do not install a router, adopt hash-based application routing, or add page transition machinery. Preserve native back/forward behavior and visible focus. Existing active-section logic must be adapted to the new routes, not left pointing at removed IDs. A wrapping mobile navigation is fine; a complex menu is unnecessary.

## 6. Intro: first viewport

The first impression should be Tyler's name, a clear student identity, and useful destinations.

- Primary heading: `Tyler Rex`.
- Subtitle: `Computer Science Student at San Diego State University`.
- Optional small location line: `San Diego, CA`.
- Primary action: `Portfolio` with a small appropriate icon, opening `/portfolio/`.
- Secondary action: `Contact` opening `/contact/`.
- Compact resource controls: Resume, GitHub, LinkedIn. Use icons with readable labels, not unlabeled mystery symbols.
- A small static `Scroll to About` link can point to `#about`. Do not add a bouncing arrow or blocking intro overlay.

Do not describe Tyler as a software engineer, security specialist, deputy administrator, incident response analyst, or an expert. No generic promise about building the future. Avoid repeating the internship request throughout the page.

### Name typing requirements

Type `Tyler Rex` once on initial load, roughly 80 to 110ms per character, with a short initial delay. Finish promptly, within about two seconds, and stop the caret animation after the effect. Do not delete/retype in a loop or rotate through job titles.

Keep the full name available in the initial HTML and to assistive technology. A good approach is a stable accessible heading with the full name and an aria-hidden visual typing layer. Prevent duplicate screen-reader announcements and preserve one meaningful h1. The layout must reserve the final name's space to avoid shifts.

With JavaScript unavailable, the full name must remain visible. With `prefers-reduced-motion: reduce`, show the complete name immediately and disable the caret and smooth-scrolling motion. If that preference changes while typing, finish and stop the animation. Do not announce each character through an aria-live region. Scrolling and navigation must work throughout the effect. Use a small local script, no animation dependency.

## 7. About Me and contact/resource strip

Use short factual lines rather than a long narrative biography. Suggested initial copy:

- Computer Science student at SDSU
- Member, SDSU Cyber Defense Team
- Exploring software, systems, and cybersecurity

The exploration line communicates interests without forcing a specialty. Add a brief interests line only if it fits naturally: `Outside class: volleyball, the gym, cars, and video games.` Avoid long skill inventories, progress bars, proficiency percentages, and duplicate claims about loving technology.

Directly beneath these facts, near the top of the About area, add an organized contact/resource strip. This is a compact set of aligned information rows or wrapping controls, not three decorative feature cards.

Use Tyler's details only:

| Item | Text / destination |
| --- | --- |
| Email | `tylernrex@gmail.com`, `mailto:tylernrex@gmail.com` |
| Phone | `408-479-1519`, `tel:+14084791519` |
| Location | `San Diego, CA` |
| GitHub | `https://github.com/Trexed1` |
| LinkedIn | `https://www.linkedin.com/in/tylerrexcs/` |
| Resume | Existing `public/resume.pdf`, exposed at the site's base-aware resume URL |
| Discord | `trexed`; copy action, no invented profile or invite URL |

Show recognizable icons with text. Use small self-contained SVGs or a local shared icon component. Preserve the appropriate brand shapes for GitHub and LinkedIn. Do not use emoji, fetch a runtime icon bundle, or copy screenshots of icons. Decorative SVGs should be hidden from accessibility APIs; controls still need meaningful names.

Keep the current working clipboard fallback behavior. Clicking email can open an email app, with a separate copy action. Location is city-level only. External links may open normally in the same tab; if using a new tab, use appropriate rel attributes and a clear accessible label. Do not add a portrait or generic stock avatar when Tyler has not supplied one.

## 8. What I'm Doing

Use a clear section heading and a short list of current activities. Suggested starting content, supported by the existing project data:

- Studying computer science at SDSU
- Practicing with the Cyber Defense Team
- Working through the Google Cybersecurity Professional Certificate
- Preparing for CompTIA Security+

Keep the certificate and exam preparation in-progress. No earned-certification badges. Do not invent completed Clinic client work, weekly goals, attendance, or project progress. Existing newer user-confirmed local facts take precedence.

If desired, include `Open to Summer 2027 internships` once as a quiet factual note. Do not make the whole website a job advertisement. More detailed education, Target experience, and the resume remain available without turning this section into another full resume.

## 9. Competitions and Projects

Use `Competitions and Projects` as the exact prominent heading on both the homepage preview and `/portfolio/`. Separate the actual project from competition participation with clear subheadings or rows.

### Featured project

Title: `SDSU Infrastructure Project`.

Short description: `A multi-system Unix/Linux lab covering network services, authentication, virtualization, and automation.`

Do not use `CS470`, `CS 470`, or a course-number title in the visible project presentation. It is still a lab project. Do not imply Tyler ran SDSU's production infrastructure, served real institutional clients, or administered university-wide systems.

Use a substantial project row or panel with its summary, a concise tools list, and a `View project` link to `/portfolio/sdsu-infrastructure/`. Do not invent a screenshot, fake dashboard, repository, or live demo. Omit unverified destinations.

The detail page should contain an overview, systems/services, Tyler's documented work, and tools. The existing verified material supports:

- OpenBSD, FreeBSD, AlmaLinux, Ubuntu, OpenIndiana, and AIX environments.
- DNS, LDAP authentication, PKI/TLS, SSH, NFS, mail, centralized logging, and Docker-based web services.
- Ansible configuration; Proxmox backups, restores, and migrations; experience with GitLab and Azure.

Keep descriptions factual and concise. Do not add unsupported performance results, user counts, uptime, security guarantees, or a detailed architecture diagram with invented hosts and service mappings. If an illustration is needed before Tyler provides actual lab evidence, use a clearly labeled high-level conceptual diagram based only on the listed capabilities.

### Competition participation

- SDSU Cyber Defense Team: member since Fall 2025; participated in two CCDC invitationals.
- National Cyber League: three sessions, involving individual and team participation. Do not translate this into three seasons or invent ranks, scores, awards, or exact event dates.

These can be concise participation entries. Link to related write-ups only after actual articles exist. Do not present them as fake project demos.

Do not add a second major project placeholder. The existing Personal Portfolio entry can be removed from the featured project list while preserving the underlying record if useful. A small footer `Site source` link may point to the actual repository `https://github.com/Trexed1/trexed1.github.io`.

## 10. Write-ups

Create the section and the `/writeups/` destination now. Tyler intends to supply two NCL OSINT challenge write-ups, but their content and final titles are not part of this packet.

- Show a restrained truthful empty state such as `NCL OSINT write-ups are being prepared.`
- Do not create fake published articles, guessed challenge titles, fake dates, challenge solutions, teaser cards that lead nowhere, or public lorem ipsum pages.
- Prepare two short private Markdown outlines under `docs/content-drafts/`, outside Astro page/content publication paths. Fields: title, event/date, prompt or problem, starting evidence, investigation, tools, result, screenshots, lessons, publication status.
- Keep those outlines explicitly unpublished. A later content task will supply and review the real material.
- If the local project already has real user-supplied finished writing, preserve and integrate it instead of replacing it with the empty state.

Keep future expansion simple. Do not add search, tagging frameworks, RSS, MDX, or a content management service for an empty writing collection. Markdown article support can be added or minimally prepared without making up posts.

## 11. Contact section and `/contact/`

End the homepage with a clear Contact section containing the email, location, professional links, and a link to the full contact page. The separate `/contact/` page should include the contact details and a useful email-drafting form inspired by the screenshot.

Use visible labels for Name, Email, optional Subject, and Message. Do not rely only on placeholder text. Use the appropriate email input type, native validation, autocomplete where appropriate, a practical message limit, and readable error feedback.

The primary form control must say `Open email draft`. On submit, validate the form, then construct a properly URL-encoded mailto link addressed to `tylernrex@gmail.com`. Include the subject and a readable body containing the sender's name, provided email, and message. Open the user's email app using that link. The provided sender email belongs in the body; do not pretend the website controls an email From header.

Clearly state near the form: `Opens your email app with a draft. Send it from there.` Never show `Message sent`, silently discard the submission, store messages, send on the visitor's behalf, or invent a working server endpoint. Do not clear the form just because the draft was opened. Keep a visible direct email link and copy-email action for users without a configured email app and when JavaScript is unavailable.

This works within static GitHub Pages hosting. No API key, email delivery service, account signup, backend server, or deployment change is needed for this milestone.

Location: San Diego, CA; interested in opportunities in San Jose and the Bay Area. If a city map can be included with a verified working embed and no key/setup, make it lazy-loaded and titled, with a plain `Open in Maps` link. Use city-level geography, not an invented precise location. A simple location panel and external map link is an acceptable fallback; the contact flow takes priority over reproducing the screenshot's large map. Do not consume time on custom map styling or paid APIs.

## 12. Suggested source organization

Inspect before creating files. Reuse working pieces and choose the smallest coherent structure. A reasonable target is:

| Path | Responsibility |
| --- | --- |
| `src/pages/index.astro` | Homepage sections and previews |
| `src/pages/portfolio/index.astro` | Competition/project index |
| `src/pages/portfolio/sdsu-infrastructure.astro` | Real project details |
| `src/pages/writeups/index.astro` | Writing index |
| `src/pages/contact.astro` or `contact/index.astro` | Contact page, one route only |
| `src/layouts/SiteLayout.astro` | Shared document structure, styles, header/footer |
| Existing `src/components/Header.astro` | Route-aware navigation |
| Existing `src/components/CopyButton.astro` | Clipboard controls |
| Existing `src/components/ProjectRow.astro` | Project presentation, adapted as useful |
| `src/components/Intro.astro` | Accessible intro and typing behavior |
| `src/components/ContactForm.astro` | Email-drafting form and small browser script |
| Optional small Icon/ContactLinks components | Shared SVGs and resource links |
| `src/data/portfolio-content.json` | Current real data, updated without rendered editorial notes |
| `src/styles/global.css` | Shared visual system and responsive rules |
| Existing `public/resume.pdf` | Preserve the supplied PDF |

Avoid unnecessary components that merely wrap one line. Do not install React, Next.js, Tailwind, animation packages, a router, a UI kit, or an icon dependency. Do not change Astro versions or rewrite deployment configuration as part of this redesign. Preserve base-aware asset paths and the existing static output. Build dist through the actual build command; never edit dist as source.

Give every page a meaningful title and description. Ensure icon/button controls have proper semantics: anchors navigate or download; buttons perform actions. Use one meaningful h1 per page, a logical heading order, visible focus, and sufficient color contrast. Keep the visible Resume spelling consistent in navigation, downloads, buttons, and accessibility labels.

## 13. Implementation milestones

1. Establish current state. Read instructions and local files, record existing edits, reconcile the updated design direction, and decide which components to reuse.
2. Implement the shared layout, blue/slate palette, route-aware navigation, responsive spacing, and the first-screen intro. Ensure typing remains optional progressive enhancement.
3. Implement About, icon contact/resource strip, and What I'm Doing with the supplied facts.
4. Build the real portfolio index and infrastructure project detail page; add honest competition entries and the homepage preview.
5. Build the Write-ups section/index and unpublished outlines. Build the full contact page and its email draft form, plus the homepage contact section.
6. Verify the full build, routes, resource targets, interaction fallbacks, and responsive behavior. Leave the preview running for Tyler.

Proceed through normal reversible local changes without asking for approval after each milestone. If something is uncertain, choose a conservative implementation and report it briefly. Ask only for a genuinely required missing fact, and continue unrelated work. Missing future writing is not a blocker to completing the website.

## 14. Verification and definition of done

Run `npm run build` after implementation. Inspect the generated routes and referenced assets. Run only other checks that actually exist in this project and are relevant. Do not create a large testing setup for styling.

Check what the environment permits, and distinguish source/build checks from actual browser checks:

- Homepage has the six sections in the requested order.
- First-screen controls remain visible at short desktop and mobile sizes.
- Name types once, has no layout jump, and is readable without JS or motion.
- Keyboard users can reach controls and see focus. Forms have labels.
- Header and buttons navigate correctly from every route; Back works normally.
- Portfolio main heading is exactly Competitions and Projects. Infrastructure presentation omits the course number and makes no production claims.
- Resume link returns the existing PDF. All rendered labels use Resume.
- GitHub, LinkedIn, mailto, tel, Discord copy, and email copy use the right targets.
- Form creates an email draft with correctly encoded special characters and line breaks. No sent claim, backend request, or data storage.
- No draft article is published. Missing links/images are omitted rather than replaced with fake buttons.
- No horizontal scrolling at approximately 375px and 768px widths; review approximately 1440px desktop as well.
- No screenshot, personal reference image, editorialNotes object, private draft, or worklog is bundled into public site content.
- No unrelated source edits, lockfile churn, re-scaffolding, or deployment changes.

Do not access or control Tyler's personal Firefox or read its profile data. Use project files, terminal checks, and only any already-permitted isolated testing tools. If visual/browser checks are unavailable under the project's current constraints, leave them for Tyler and say so explicitly. Provide the real local preview URL and leave that server running when requested. Do not claim visual QA based only on a successful build.

The local version is ready when the requested pages and interactions work, the build succeeds, the content is truthful, and Tyler can inspect the preview. Do not push it live automatically.

## 15. History, final reply, and later publication

Append a concise worklog entry before the final response, using the actual America/Los_Angeles timestamp including UTC offset. Record the changed files, updated design decisions, checks/results, and unverified items. Preserve all old entries. Update current brief/instructions as necessary, not immutable history.

Final reply should be short: major changes, checks actually completed, preview URL, and any manual checks Tyler needs to perform. Do not dump source files or a long recap of this guide.

Tyler runs Git mutations himself. After he approves the local result, explain the sequence from the website folder: `git status`, `git diff`, `npm run build`, `git add .`, `git commit -m "Redesign personal website"`, `git push origin main`. Before staging, ensure only intended changes are included. Explain that the push starts the already-configured Pages workflow. Do not run these mutations on his behalf without a new explicit instruction.

If Tyler requests a wrap, create a new `docs/sessions/YYYY-MM-DD_NNN.md` using the actual Los Angeles date and next available sequence, with exclusive creation. Include the route structure, current design, work completed, checks, unresolved writing, Git/publication state, and exact next task. Append its link to the worklog. Do not overwrite an earlier handoff or assume chat closure triggers cleanup.
