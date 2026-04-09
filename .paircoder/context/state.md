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
| T1.4 | Build Homepage | pending | P0 |
| T1.5 | Build About page | pending | P1 |
| T1.6 | Build Work With Me page | pending | P1 |
| T1.7 | Build Business Coaching page | pending | P1 |
| T1.8 | Build Spiritual Coaching page | pending | P1 |
| T1.9 | Build Books page | pending | P1 |
| T1.10 | Build Pricing page | pending | P1 |
| T1.11 | Build Contact page | pending | P1 |
| T1.12 | Build Blog index page | pending | P1 |
| T1.13 | Decap CMS Setup | pending | P1 |
| T1.14 | SEO & Technical Polish | pending | P1 |
| T1.15 | DNS Cutover | pending | P1 |

### Backlog (Phase 2+)

- Phase 2: Email capture, Kit (ConvertKit) integration, lead magnet landing page
- Phase 3: 8 blog articles (fully written before publishing)
- Phase 4: Stripe payments, meditation audio library, testimonial submission form

## What Was Just Done

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

1. **T1.4** — Homepage (most complex, sets visual standard for the whole site)
2. Then T1.5–T1.12 pages in sequence

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
