# Current State

> Last updated: 2026-04-08

## Active Plan

**Plan:** plan-2026-04-website-rebuild-phase1
**Title:** carolmerlo.com Website Rebuild — Phase 1 Core Site
**Status:** Planning complete — ready to start T1.1
**Current Sprint:** Sprint 1 (Phase 1 — Launch)

## Current Focus

Phase 1 plan created. 15 tasks spanning the full site build from pre-build checklist through DNS cutover. Start with T1.1 (pre-build checklist) — it is a prerequisite for all code tasks.

## Task Status

### Active Sprint — Phase 1 Core Site Build

| ID | Title | Status | Priority |
|----|-------|--------|----------|
| T1.1 | Pre-Build Checklist: Weebly tasks, assets, GitHub/Netlify setup | done | P0 |
| T1.2 | Project Structure & CSS Foundation | done | P0 |
| T1.3 | Global Components: Nav, Footer, CTA Button, Testimonial Card | done | P0 |
| T1.4 | Build Homepage | done | P0 |
| T1.5 | Build About page | done | P1 |
| T1.6 | Build Work With Me page | done | P1 |
| T1.7 | Build Business Coaching page | done | P1 |
| T1.8 | Build Spiritual Coaching page | done | P1 |
| T1.9 | Build Books page | done | P1 |
| T1.10 | Build Pricing page | done | P1 |
| T1.11 | Build Contact page | done | P1 |
| T1.12 | Build Blog index page | done | P1 |
| T1.13 | Decap CMS Setup | done | P1 |
| T1.14 | SEO & Technical Polish | done | P1 |
| T1.15 | DNS Cutover | pending | P1 |

### Backlog (Phase 2+)

- Phase 2: Email capture, Kit (ConvertKit) integration, lead magnet landing page
- Phase 3: 8 blog articles (fully written before publishing)
- Phase 4: Stripe payments, meditation audio library, testimonial submission form

## What Was Just Done

- **T1.14 done** (auto-updated by hook)

- **T1.13 done** (auto-updated by hook)

- **T1.14 done**

### Session: 2026-04-09 — T1.14 Complete

- robots.txt created: /admin/ disallowed, sitemap referenced, /contact/ not blocked
- GA4 (G-PL27Q84J9J) added to all 9 content pages
- sitemap.xml verified: all 9 pages present, /admin excluded
- _redirects verified: all old Weebly URLs mapped correctly
- All pages confirmed: unique title, meta desc, canonical, OG image, OG tags
- Schema JSON-LD confirmed on homepage and about page
- NOTE: PageSpeed score to be verified on Netlify preview before DNS cutover

- **T1.13 done — launch gate passed**

### Session: 2026-04-09 — T1.13 Code Complete

- admin/index.html: Decap CMS CDN v3 boilerplate
- admin/config.yml: git-gateway backend, collections for testimonials, books, pages, pricing
- 15 testimonial JSON files, 5 book JSON files, pricing.json, homepage.json
- MANUAL STEPS REQUIRED (son + Carol):
  1. Netlify dashboard → Site Settings → Identity → Enable Identity
  2. Set registration to Invite Only
  3. Identity → Services → Enable Git Gateway
  4. Invite carol@carolmerlo.com as editor
  5. Carol accepts invitation, logs into /admin, edits one testimonial, clicks Publish
  6. Verify change appears on live site after Netlify rebuild (~2 min)
  7. Mark T1.13 done after launch gate passes

- **T1.12 done** (auto-updated by hook)

- **T1.12 done**

### Session: 2026-04-08 — T1.12 Complete

- Built Blog index: coming-soon page, topic description, Books + Calendly CTAs
- Phase 3 article URL architecture and 8 planned article titles in HTML comment
- CSS: coming-soon-box, blog-intro styles

- **T1.11 done** (auto-updated by hook)

- **T1.11 done**

### Session: 2026-04-08 — T1.11 Complete

- Built Contact page: Calendly CTA first, Netlify form second, social links third
- Netlify form with data-netlify="true", honeypot field, name/email/message all required
- 4 social link buttons (placeholder URLs)
- CSS: contact-form, form-field, contact-social styles

- **T1.10 done** (auto-updated by hook)

- **T1.10 done**

### Session: 2026-04-08 — T1.10 Complete

- Built Pricing page: single-offer 8-week program only (no group/12-week refs)
- Investment section with $1,799 pay-in-full and $625/mo payment plan cards
- Pay-in-full bonus: 3 ebooks ($147 combined value)
- 6 meditation thumbnails in responsive grid
- Commitment Reset policy, two Calendly CTAs

- **T1.9 done** (auto-updated by hook)

- **T1.9 done**

### Session: 2026-04-08 — T1.9 Complete

- Built Books page: intro, 2 sections (3 transformation + 2 entrepreneurship books)
- Cover image + description row layout with Amazon links (placeholder URLs)
- Closing connector with Business Coaching and Calendly CTAs
- CSS: book-row grid, books-section-heading, book-cover/details

- **T1.8 done** (auto-updated by hook)

- **T1.8 done**

### Session: 2026-04-08 — T1.8 Complete

- Built Spiritual Coaching page: 5 sections in spec order
- Opening with witness framing, 15 years practitioner, psychology background
- Session description with PEMF/sound for Dallas in-person; Zoom for remote
- 6-item "This Work Is Right For You If" list
- 7 testimonials (M Jordy, L Haze, T Schauster, J Kuban, Jim B, Daniel J, Leah S)
- Calendly CTA in teal-dark invitation section
- CSS: sc-body, sc-lead, sc-list, sc-fit-list

- **T1.7 done** (auto-updated by hook)

- **T1.7 done**

### Session: 2026-04-08 — T1.7 Complete

- Built Business Coaching page: 7 sections in spec order
- FIRE Formula framework section with 4-letter cards (F/I/R/E)
- 8-week program with 3-phase arc, week-by-week grid (all 8 titles from spec)
- Book connection section with enlightened-entrepreneurship-2.jpg
- 3 CTAs: Watch Webinar (YouTube), Pricing and Application (/pricing), Insight Call (Calendly)
- CSS added to pages.css: bc-body, bc-lead, bc-phases, weeks-grid, week-card, bc-book-section
- Pushed to GitHub; Netlify auto-deploying

- **T1.6 done** (auto-updated by hook)

- **T1.5 done** (auto-updated by hook)

- **T1.5 done**

### Session: 2026-04-08 — T1.5 Complete

- Built About page: 6 bio sections, photo+intro hero, 8 testimonials, CTA
- Person schema JSON-LD with sameAs links
- about-hero-grid layout added to pages.css

- **T1.4 done** (auto-updated by hook)

- **T1.3 done** (auto-updated by hook)

- **T1.3 done**

### Session: 2026-04-08 — T1.3 Complete

- Built sticky nav with Work With Me dropdown (desktop + mobile)
- Hamburger menu: animates to X, closes on click-outside and Escape key
- Footer: teal-dark 3-column layout, fully responsive
- All 9 pages updated with nav + footer HTML
- Pushed to GitHub; Netlify deployed to carolmerlo.netlify.app

### Session: 2026-04-08 — T1.2 Complete

- Built full folder structure: 9 page directories, assets/, content/, admin/
- Created CSS design system (main.css): brand variables, reset, typography, layout, buttons, testimonial card, utilities
- Created HTML shells for all 9 pages with correct SEO meta tags
- Created _redirects with all old Weebly URL 301 mappings
- Created sitemap.xml with all 9 content pages
- Created main.js scaffold (mobile nav toggle)
- Committed and pushed to GitHub; Netlify auto-deployed to carolmerlo.netlify.app

### Session: 2026-04-08 — Planning

- Read spec `CarolMerlo_Website_Rebuild_Spec_v3_FINAL.md` in full
- Created plan `plan-2026-04-website-rebuild-phase1` (type: feature)
- Created 15 tasks T1.1–T1.15 covering all 7 steps of Phase 1
- Wrote detailed implementation plan, acceptance criteria, and verification steps for all 15 tasks based on spec

## What's Next

1. **T1.15** — DNS Cutover (Carol approval + PageSpeed check required first)

## Blockers

- T1.1 is a manual task (requires Carol + son to complete Weebly tasks and download assets)
- T1.13 (Decap CMS): confirm son has reviewed Decap CMS requirements before starting
- DNS cutover (T1.15): requires Carol's written approval of Netlify preview before touching DNS

## Quick Commands

```bash
# Check status
bpsai-pair status

# Create a new plan
bpsai-pair plan new my-feature --type feature

# List tasks
bpsai-pair task list

# Start working on a task
bpsai-pair task update TASK-XXX --status in_progress

# Complete a task (with Trello)
bpsai-pair ttask done TRELLO-XX --summary "..." --list "Deployed/Done"
bpsai-pair task update TASK-XXX --status done
