# Tyler Rex: current website brief

## Current direction and authority
The October 28, 2026 redesign is the latest authorized direction. This file is canonical; docs/REDESIGN_BRIEF.md is its detailed implementation packet, docs/REDESIGN_PROMPT.md supplies the workflow, and docs/reference-images/ contains the four supplied visual references. Root PROJECT_BRIEF.md points here. This supersedes conflicting copper/Georgia, one-page-only, icon, rounding, and typing restrictions from earlier prompts. Worklogs and dated handoffs remain immutable.

## Purpose and facts
Introduce Tyler Rex as a Computer Science student at San Diego State University exploring software, systems, and cybersecurity. Do not assign a specialty, professional seniority, or another person's identity.
Use src/data/portfolio-content.json for actual facts and public/resume.pdf for the existing Resume download. Expected graduation in May 2029 was confirmed. Preserve planned minors, accepted Clinic status, and in-progress training/exam preparation. Preserve education, Target work, activities, and skills records even where the homepage is abbreviated.
Hobbies: volleyball, the gym, cars, video games. Current learning record is exactly Astro, Wireshark, Portainer.
The supplied contact fields are authorized: email, phone, GitHub, LinkedIn, and Discord username trexed. Use no invented Discord URL. San Diego is the school location only, not Tyler's home city. Display seeking opportunities in San Jose and nearby areas without claiming a current residence. Mention Summer 2027 internships at most once on the homepage. The October 28 updated Resume is copied unchanged to public/resume.pdf.
Never render editorialNotes. Omit null project URLs/images. No invented projects, achievements, awards, scores, screenshots, articles, challenge titles, solutions, or completed certifications.

## Visual system
Use solid dark blue/slate surfaces, local Arial/Helvetica sans-serif headings/body, and these shared tokens:
- Background #0E1520
- Surface #151F2E
- Raised surface #1B293A
- Text #EDF2F7
- Muted text #A9B6C8
- Accent #8CBCE8
- Divider #33445A

Use background-colored text on filled accent buttons and visible keyboard focus. Keep body around 16-18px, section headings around 32-48px, and max width near 70rem. The first-screen name is large and bold, approximately clamp(3.5rem, 9vw, 8rem), adjusted for short screens.
The intro occupies approximately the first viewport below navigation, using svh with a fallback and natural growth. Controls must not be clipped. Later sections are denser and readable. Use a restrained number of broad section panels, approximately 12px corners, and approximately 8px control corners.
Prefer real supplied document images and official competition logos over generic clip art. Remove generic project/contact pictograms; retain useful GitHub, LinkedIn, and Discord brand icons with text. Preserve original logo colors/proportions and supplied document images. No dependency or runtime icon bundle.

Retain these exclusions: gradients, glass/blur, shadows, pure white backgrounds, rainbow colors, copper/green/neon accents, pastel-themed surfaces, purple/black schemes, three-feature-card sections, bento grids, decorative left stripes, emojis, sparkles, animated arrows, particles/dots/network fields, radial orbs, fake terminal chrome, testimonials, pricing, skeleton loaders, marketing slogans, and Inter/Geist/Space Grotesk. No em dashes in visible copy. Ordinary hover feedback is immediate without movement or animated transitions. No analytics, cookie banners, or unused policy boilerplate.

## Routes and navigation
Homepage section order and IDs:
1. Intro: #top
2. About Me: #about
3. What I'm Doing: #now
4. Competitions and Projects: #portfolio
5. Write-ups: #writeups
6. Contact: #contact

Separate routes:
- /portfolio/: h1 exactly Competitions and Projects
- /portfolio/sdsu-infrastructure/: actual infrastructure project detail
- /portfolio/segmented-cybersecurity-homelab/: personal lab design, explicitly not completed
- /writeups/: truthful writing index
- /contact/: full contact details and email draft form

Header: plain Tyler Rex at left; About, Portfolio, Write-ups, Contact at right. About targets the homepage #about anchor; other navigation items are real routes. The first Portfolio action opens /portfolio/. Keep native links, back/forward behavior, base-aware paths, sticky-header offsets, and route-aware active states. Adapt homepage scroll highlighting to the new IDs. A wrapping mobile navigation is sufficient.

## Intro and typing
Use h1 Tyler Rex and subtitle Computer Science Student at San Diego State University. Primary Portfolio and secondary Contact actions open their routes. Include labeled Resume, GitHub, LinkedIn resources and a static Scroll to About link.
Type the name once with a short delay and about 90ms per character, finishing within about two seconds. No deletion/retyping loop or rotating role. Keep the full accessible name and readable no-JavaScript HTML. An aria-hidden visual layer must reserve final width to avoid shifts. Show the full name immediately for reduced motion; if that preference changes mid-effect, finish and stop the caret. Do not announce each character. No intro overlay or blocked navigation.

## About and current activities
Use short factual lines: CS student at SDSU; Cyber Defense Team member; exploring software, systems, cybersecurity. Optionally include the confirmed hobbies.
Put an organized contact/resource strip directly below these facts. Email opens mailto with a separate copy control; phone uses tel; opportunity area is San Jose and nearby areas. Resources include the actual base-aware Resume PDF, GitHub, LinkedIn, and Discord copy with visible username. Brand icons are hidden from accessibility APIs. No portrait or stock avatar.
What I'm Doing lists studying CS, Cyber Defense Team practice, Google Cybersecurity Professional Certificate work, and CompTIA Security+ preparation. Keep training in progress. Detailed education, Target experience, and the Resume remain available deeper in the site. Avoid a long homepage skill inventory.

## Portfolio and project
The prominent homepage/index heading is exactly Competitions and Projects.
Feature two projects inside one shared Projects and Competitions panel: SDSU Infrastructure Project and Segmented Cybersecurity Homelab. The infrastructure summary is: A multi-system Unix/Linux lab covering network services, authentication, virtualization, and automation.
No CS470/CS 470 in visible project presentation; it remains an academic lab and is not SDSU production infrastructure. Link View project to /portfolio/sdsu-infrastructure/. No fabricated screenshot, repository, or demo.
The detail page covers overview, systems/services, documented work, and tools:
- OpenBSD, FreeBSD, AlmaLinux, Ubuntu, OpenIndiana, AIX.
- DNS, LDAP, PKI/TLS, SSH, NFS, mail, centralized logging, Docker-based web services.
- Ansible configuration; Proxmox backups/restores/migrations; GitLab and Microsoft Azure.
No invented host architecture, performance, uptime, user counts, clients, or security guarantees.
Competition participation: show dedicated NCL and WRCCDC Invitational entries with official logos; WRCCDC participation is two invitationals, and NCL remains three sessions involving individual/team participation. Cyber Defense Team membership remains a school activity. No invented ranks, awards, or exact event dates.

The Segmented Cybersecurity Homelab is a user-supplied design-phase project on an Apple Silicon 24 GB Mac. Preserve future tense: UTM/Ubuntu ARM64 routing, four private networks, Docker Compose/Portainer services, identity/TLS, isolated vulnerable lab targets, monitoring/incident response, automation, and recovery. Planned tools and possible extensions stay distinct. No completed-build claims, fabricated screenshots, or project URLs.
Preserve the Personal Portfolio data record but omit it from major featured projects. Footer Site source may link to https://github.com/Trexed1/trexed1.github.io.

## Write-ups
Two actual NCL PDFs have now been supplied. Tyler confirmed there is no written publication permission and asked to keep them local. Public copy states that two write-ups are written but cannot be shared publicly.
Preserve originals in the Git-ignored root /writeups/ upload folder. Local gallery PDFs, page images, transcripts, and metadata belong under Git-ignored docs/content-drafts/ncl-materials/. Development-only routes may show complete local previews; production static paths/assets must exclude them. Do not publish challenge names, questions, answers, or source files through public assets or Git. Any future public release needs a new explicit decision and permission review. See docs/ASSET_SOURCES.md for the checked NCL rules.
No search, RSS, tagging framework, MDX, or CMS until real writing warrants it. Keep confidential or unreleased challenge content out of public Git history.

## Contact and email draft
End the homepage with contact information and a Contact me route link. The full /contact/ page includes the real details and an email-drafting form.
Visible labels: Name, Email, optional Subject, Message. Use native email/required validation, autocomplete, practical input/message limits, and readable feedback. Primary control: Open email draft.
Near the form state exactly: Opens your email app with a draft. Send it from there.
On valid submit, construct an encoded mailto to the supplied recipient, with subject and a body containing the visitor's name, email, and message. Sender email belongs in the body, not a fabricated From header. Never claim sent, clear the form upon opening, send a backend request, or store messages. Keep direct mailto and copy-email fallbacks; no-JavaScript users must still have a usable direct contact option.
Use an opportunity-area panel for San Jose and nearby areas. Any map link searches the San Jose opportunity area and must not imply a current residence. San Diego appears only as school context. Do not invent a precise address or add a paid map API.

## Architecture and verification
Keep the existing Astro static/npm/plain CSS setup. No new scaffold, React, router, UI kit, icon/font/animation dependency, Astro upgrade, lockfile churn, or deployment change. Edit src/ and data; dist/ is generated only by the real build.
Reuse CopyButton behavior and adapt Header/ProjectRow. Share document layout, footer, styles, and base-aware resources. Use one meaningful h1 per page, logical headings, labels, visible focus, and sufficient contrast.
Run npm run build for this redesign. Verify all routes, links/anchors, Resume bytes, correct contact targets, encoding of special characters/newlines, reduced-motion/no-JS fallback, and exclusion of docs/images/drafts/editorial notes from published output. Review 375px, 768px, and 1440px behavior only with already-permitted isolated tools. State honestly when browser checks remain manual. Do not access personal Firefox or profile data.
Leave a working local preview running with its actual URL. Local approval precedes any publication.

## History and publication
Use the existing local VS Code repository. GitHub Pages at https://trexed1.github.io/ was verified for commit 79925eb on October 26; this redesign remains local until Tyler publishes. Preserve the existing workflow/configuration and inspect actual Git state rather than recreating them.
Tyler runs Git mutations. No stage/commit/push/publication, purchases, or domain registration is authorized by this redesign. After approval, explain the complete status/diff/build/add/commit/push sequence for him to run, with a useful message such as Redesign personal website.
Append concise actual America/Los_Angeles timestamps with offsets to docs/WORKLOG.md before every final reply; never rewrite previous entries or handoffs. Only create a new exclusively named dated/numbered handoff when Tyler requests a wrap.
