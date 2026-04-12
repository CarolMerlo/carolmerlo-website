# Current State

> Last updated: 2026-04-12 (T3.1 complete)

## Active Plan

**Plan:** plan-2026-04-sprint-3-blog
**Title:** Sprint 3: Blog Articles
**Status:** Planning
**Current Sprint:** Sprint 3
**Branch:** sprint-3

**Previous Plan:** plan-2026-04-sprint-2-homepage-enhancements (Sprint 2 — all 5 tasks done ✓)

## Current Focus

Sprint 3: Write 8 blog articles based on Carol's source documents in `C:/Carol Projects/Social Media posts and text/blog post content/`. Write one article at a time, Carol reviews and edits, then publish. Blog pages are static HTML matching the existing site design.

## Task Status

### Sprint 3 — Blog Articles

| ID | Title | Status | Priority |
|----|-------|--------|----------|
| T3.1 | The FIRE Formula: How to Break Free from What's Keeping You Stuck | done ✓ | P1 |
| T3.2 | The 5 Shifts Every Conscious Entrepreneur Needs Right Now | done ✓ | P1 |
| T3.3 | Taking the Mystery Out of Meditation | done ✓ | P1 |
| T3.4 | The 7 Success Saboteurs — Why Smart People Stay Stuck | done ✓ | P1 |
| T3.5 | Mastering Meditation with Frequencies | done ✓ | P1 |
| T3.6 | How to Build a Prosperity Consciousness | done ✓ | P1 |
| T3.7 | The Networking Conversation: Why Follow-Up Feels Pushy | done ✓ | P1 |
| T3.8 | Write Blog Article 8 | pending | P1 |

### Sprint 2 — Homepage Enhancements & Email Capture (COMPLETE ✓)

| ID | Title | Status | Priority |
|----|-------|--------|----------|
| T2.1 | Full-width hero banner on homepage | done ✓ | P1 |
| T2.2 | YouTube link on FIRE Formula image | done ✓ | P1 |
| T2.3 | Mailchimp email popup (homepage) | done ✓ | P1 |
| T2.4 | GA4 / GTM conversion tracking | done ✓ | P1 |
| T2.5 | Netlify form email notification (manual step) | done ✓ | P1 |

### Sprint 1 — Phase 1 Core Site Build (COMPLETE except DNS)

| ID | Title | Status | Priority |
|----|-------|--------|----------|
| T1.1–T1.14 | All build tasks | done ✓ | P0/P1 |
| T1.15 | DNS Cutover | deferred ⏸ | P1 |

### Backlog (Phase 2+)

- Phase 2: Kit (ConvertKit) integration, lead magnet landing page
- Phase 4: Stripe payments, meditation audio library, testimonial submission form

## What Was Just Done

- **T3.7 done** — Blog article: "The Networking Conversation: Why Follow-Up Feels Pushy (And How to Fix It)" (~1000 words). Built at /blog/networking-conversation-follow-up/. Covers the inner game (school dance metaphor, you're not responsible for their choice), outer game (ask questions, read personality types), and the reframe that follow-up is an offer not pressure. Blog index updated. Committed and pushed to sprint-3.

- **T3.6 done** (auto-updated by hook)

- **T3.5 done** (auto-updated by hook)

- **T3.4 done** (auto-updated by hook)

- **T3.3 done** (auto-updated by hook)

- **T3.2 done** (auto-updated by hook)

- **T3.1 done** (auto-updated by hook)

### Session: 2026-04-12 — T3.2 Complete

- Read The 5 Shifts Final.docx in full
- Wrote blog article (~1000 words): "The 5 Shifts Every Conscious Entrepreneur Needs Right Now"
- Covers all 5 shifts: priorities, act-as-if, consistency, energy, healthy boundaries
- Includes Carol's personal backstory (singer → single parent → top 80% income earner)
- Built static HTML page at /blog/5-shifts-conscious-entrepreneur/
- Blog index updated with new card (newest first)
- Carol approved; committed and pushed to sprint-3

### Session: 2026-04-12 — T3.1 Complete

- Read FIRE Formula Workbook in full
- Wrote blog article (~950 words) in Carol's voice: "The FIRE Formula: How to Break Free from What's Keeping You Stuck"
- Covers F=Focus, I=Ignition, R=Relationships, E=Execution with neuroscience framing
- Built static HTML page at /blog/fire-formula-break-free-from-stuck/
- Added blog article CSS to pages.css (.blog-article, .blog-lead, .blog-divider, etc.)
- Updated blog index: article card replaces coming-soon placeholder
- Carol reviewed locally and approved
- Committed and pushed to sprint-3 branch

### Session: 2026-04-12 — Sprint 2 Wrap-up & Sprint 3 Setup

- Reduced hero banner min-height: 420px → 240px desktop, 260px → 160px mobile (image is 1080x466px)
- Carol replaced hero banner image with lotus and candle photo
- Created and pushed sprint-3 branch
- Confirmed all Sprint 2 tasks complete (T2.2 YouTube link confirmed done by Carol)
- GTM (GTM-55CCPZL) added to all 9 pages; direct GA4 snippet removed
- Mailchimp connected site script added to all pages
- Mailchimp "Confirmation Thank You Page" updated by Carol to Dropbox meditation MP3 URL
- _redirects updated: /webinar_replay and /webinar-replay → YouTube
- sprint-2 branch merged to master via PR

## What's Next

1. ~~**T3.1**~~ — Done ✓
2. ~~**T3.2**~~ — Done ✓
3. ~~**T3.3**~~ — Done ✓
4. ~~**T3.4**~~ — Done ✓
5. ~~**T3.5**~~ — Done ✓
6. ~~**T3.6**~~ — Done ✓
7. ~~**T3.7**~~ — Done ✓
8. **T3.8** — Enlightened Entrepreneurship: Why Alignment Comes Before Action (source: Enlightened Entrepreneurship book + Your Foundation Mini Course transcription)
3. **T1.15** — DNS Cutover (deferred — Carol's decision when ready, needs PageSpeed ≥ 90)

## Source Documents for Blog Articles

Location: `C:/Carol Projects/Social Media posts and text/blog post content/`

- Abundance Webinar Workbook.docx
- Carol Overview 1 2 and David Scalar.docx
- Carol_Merlo_Video_Social_Copy.docx
- Divine Realms webinar transcript.docx
- Enlightened Entrepreneurship book format.docx
- From Mesmer to Quimby to Frequency Healing- The Evolution of Spiritual Healing script.docx
- How to Overcome the 7 Saboteurs to Success new.docx
- IG_Captions_Carol_Merlo.docx
- Instagram_TikTok_Captions_Carol_Merlo.docx
- Mastering Meditation with Frequencies.docx
- Taking the Mystery Out of Meditation digital format.docx
- The 5 Shifts Final.docx
- The Fire Formula WORKBOOK 2024.docx
- The Networking Conversation book 02.7.docx
- Your Foundation Mini Course.transcription.docx

## Blockers

- DNS cutover (T1.15): deferred by Carol until site is fully right

## Quick Commands

```bash
# Check status
bpsai-pair status

# Task commands
bpsai-pair task list
bpsai-pair task update T3.1 --status in_progress
bpsai-pair task update T3.1 --status done
```
