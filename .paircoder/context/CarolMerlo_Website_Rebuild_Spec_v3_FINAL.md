# CAROLMERLO.COM — Website Rebuild Specification
**Version 3 — Final**
*Current State · Ideal Vision · Path to Completion*
*April 2026*

---

> **Before the build begins — confirm these five items in your first session:**
>
> 1. Complete all Weebly tasks in Section 7 and download all assets in Section 4 before writing any code
> 2. Calendly URL verified live: `https://calendly.com/carol-merlo/insight-call-with-carol` — button links only, same URL on every page
> 3. Confirm your son has reviewed the Decap CMS requirements (Section 5.3) before Step 5
> 4. Canonical domain decision: recommend non-www `carolmerlo.com` as primary
> 5. Google Analytics: use existing account if one exists; create new GA4 property if not

---

## 1. Executive Summary

Carol Merlo is moving from Weebly to a custom-built website developed with Claude Code and PairCoder, guided by her son. The new site reproduces the current content and structure with improvements in design quality, SEO architecture, maintainability, and the ability to add features over time without platform constraints.

The current Weebly site has been significantly improved during this review process — navigation, copy, and structure are now largely correct. The rebuild is not about fixing problems. It is about owning the platform, eliminating monthly fees, and building a foundation that grows with the business.

> **Content source:** The canonical source for all build content is the corrected versions documented in this spec, not the live Weebly site as-is. Complete Section 7 (Weebly tasks) before taking any content snapshots. After those tasks are done, the live site and this spec should be in full agreement.

### Core Objectives

1. Reproduce all current content, copy, and structure per this spec
2. Eliminate Weebly dependency and monthly platform fee
3. Maintain teal and gold brand identity throughout using confirmed color values
4. Build a site Carol can maintain herself for text and content updates via Decap CMS
5. Establish a strong SEO foundation with blog infrastructure ready for v2
6. Design for future email capture integration (phasing away from Mailchimp)
7. Enable ongoing feature additions without rebuilding

---

## 2. Current State — carolmerlo.com (Weebly)

### 2.1 Platform

| Field | Detail |
|---|---|
| Platform | Weebly (drag-and-drop website builder) |
| Hosting | Weebly-managed |
| Domain | carolmerlo.com — owned independently, registered outside Weebly |
| Monthly cost | Weebly subscription fee (ongoing) |
| Maintainability | Visual editor only — no code access, limited design flexibility |
| SEO control | Basic — limited control over technical SEO, schema, page speed |

### 2.2 Current Navigation Structure

```
Home
Work With Me  (dropdown)
  ├── Spiritual Coaching
  └── Enlightened Entrepreneurship (Business Coaching)
        └── Resources (sub-item)
Books
About
Contact

Hidden / unlisted pages currently live:
  /pricing.html  — linked from Business Coaching page
  /theprogram.html  — old program page, still accessible (404 on some paths)
```

### 2.3 Page-by-Page Current State

| Page | Current State | Ideal State | Gap / Action Required |
|---|---|---|---|
| Homepage | Strong copy. FIRE Formula section solid. Two pathways link to Work With Me. Testimonials good. My Books blurb undersells. | All copy per spec. My Books blurb updated. Mobile-responsive. Fast load. | Update My Books blurb (Section 7, item 4). |
| Work With Me | Good copy. Formatting note still visible as live text. Links correctly. | Clean gateway page. No formatting notes. Two CTA buttons. Calendly link working. | Delete the visible formatting note (Section 7, item 1). |
| Business Coaching | 8-week 1-on-1 copy correct. Empty "Framework" heading with no content. Pricing button still links to /theprogram.html. | All content correct. Framework section filled. Pricing link leads to /pricing. | Fill or remove empty heading. Fix pricing link (Section 7, items 3 and 5). |
| Spiritual Coaching | Old version still showing — new copy pending Weebly propagation. Old nav. | New copy live per spec. | Confirm propagation. If not resolved, republish (Section 7, item 2). |
| Books | All 5 correct books. Good descriptions. Missing closing connector to coaching. | 5 books with improved descriptions. Closing section added. | Add closing connector (Section 7, item 6 — already drafted). |
| About | Strong rewrite. Shelter-to-success arc. Dark Night of the Soul. Good testimonials. | Story-led bio, all content preserved, one strong photo, testimonials intact. | Minor: confirm photo displays well on mobile. |
| /pricing.html | Group references removed. Some old program structure remains. | Single-offer page. 8-week 1-on-1 only. Correct pricing. No group or 12-week references. | Full content update needed per Section 7, item 3. |
| Contact | Exists — not fully reviewed. | Primary CTA is Calendly booking link. Contact form secondary. | Verify contact page leads with Insight Call booking. |

### 2.4 What Is Not on the Current Site

- **Blog** — no blog exists. Infrastructure needed for v2 content.
- **Email capture** — no opt-in, no lead magnet, no list-building mechanism.
- **Structured data / schema markup** — missing entirely.
- **sitemap.xml** — Weebly may not generate a clean one.
- **robots.txt** — currently blocking some pages (contact page blocked).
- **Open Graph tags** — social sharing images and descriptions not optimized.

---

## 3. Ideal Vision — The New carolmerlo.com

### 3.1 Technology Stack

| Component | Choice |
|---|---|
| Build tool | Claude Code + PairCoder (guided by son) |
| Languages | HTML5, CSS3, vanilla JavaScript |
| Hosting | Netlify — free tier, custom domain, auto-deploy from GitHub |
| Domain | carolmerlo.com — point DNS from current registrar to Netlify |
| Version control | GitHub repository |
| CMS / editing | Decap CMS — Phase 1, Step 5 — visual browser editor for Carol's updates |
| Email capture (future) | Kit (ConvertKit) — replaces Mailchimp in Phase 2 |
| Forms | Netlify Forms — free, no server needed |
| Analytics | Google Analytics 4 |
| SSL | Automatic via Netlify |

> **Note on Decap CMS:** Setting up Decap CMS requires a specific file structure, YAML configuration, Netlify Identity for authentication, and all editable content stored as Markdown or JSON rather than embedded in HTML. This is a meaningful setup step with its own architectural requirements. It is scoped as Step 5 in Phase 1. Confirm your son is comfortable with this before the build starts.

### 3.2 Ideal Navigation Structure

```
Home                      /
Work With Me              /work-with-me  (dropdown)
  ├── Spiritual Coaching       /spiritual-coaching
  └── Business Coaching        /business-coaching
Books                     /books
Blog                      /blog  (index page only at launch — v2 content)
About                     /about
Contact                   /contact

Not in nav — linked from Business Coaching only:
  /pricing
```

### 3.3 Brand & Design Specifications

All values are confirmed. The CSS variables block below is ready to paste directly into `assets/css/main.css` as the first thing written in the project.

| Element | Hex Value | Usage |
|---|---|---|
| Primary teal | `#2E8B8B` | Headings, nav, buttons, links, section labels |
| Dark teal | `#1A5F5F` | Section backgrounds, button hover states, footer |
| Gold accent | `#C9A84C` | Sub-labels, highlights, calls to action, dividers |
| Light teal bg | `#E8F5F5` | Content boxes, alternating section backgrounds |
| Dark text | `#2C2C2C` | Primary body text, headings |
| Mid text | `#555555` | Secondary body text |
| Soft text | `#777777` | Captions, image descriptions, dates |
| White | `#FFFFFF` | Page background, reversed text on dark sections |
| Heading font | Georgia or similar serif | Dignified, warm — matches brand voice |
| Body font | Arial or Inter | Clean, readable, universally supported |
| Button — primary | `#2E8B8B` fill, `#FFFFFF` text, `4px` border-radius |
| Button — hover | Background darkens to `#1A5F5F` |
| Button — secondary | `#C9A84C` border, `#C9A84C` text, transparent fill |

**CSS Variables — paste this as the foundation of `main.css`:**

```css
:root {
  /* Brand colors */
  --teal:          #2E8B8B;
  --teal-dark:     #1A5F5F;
  --gold:          #C9A84C;
  --teal-light:    #E8F5F5;

  /* Text */
  --text-dark:     #2C2C2C;
  --text-mid:      #555555;
  --text-soft:     #777777;
  --white:         #FFFFFF;

  /* Typography */
  --font-heading:  Georgia, 'Times New Roman', serif;
  --font-body:     Arial, Inter, sans-serif;

  /* Spacing scale */
  --space-xs:      0.5rem;
  --space-sm:      1rem;
  --space-md:      2rem;
  --space-lg:      4rem;
  --space-xl:      8rem;

  /* Layout */
  --max-width:     1100px;
  --border-radius: 4px;
}
```

### 3.4 Page-by-Page Ideal Specification

---

#### Homepage `/`

All current copy preserved exactly (after Section 7 fixes applied).

**Layout sections in order:**

| Section | Layout | Notes |
|---|---|---|
| Hero | Photo left, opening paragraph right — stacked on mobile | Carol's primary photo |
| Who This Is For | Full-width, `var(--teal-light)` background | Current copy as-is |
| Why Change Stalls | Text left, image right | Teal water image (see Section 4) |
| FIRE Formula | Full-width section, GIF/graphic centered | See Section 4 for asset — critical |
| Two Pathways | Two cards side by side, link to `/work-with-me` | Not directly to subpages |
| Testimonials | Card layout — 2-col desktop, 1-col mobile | All current testimonials |
| My Books | Updated blurb + link to `/books` | See updated copy below |
| About Me | Current copy, link to `/about` | As-is |
| The Invitation | Full-width `var(--teal-dark)` bg, white text, CTA button | Closing section |

**Updated My Books blurb:**
> *Five books covering conscious entrepreneurship, meditation, the FIRE Formula, and personal transformation. Each one is a framework you can work with on your own.* → [link to `/books`]

**Calendly CTA:** Button link only — `https://calendly.com/carol-merlo/insight-call-with-carol`

| SEO Field | Value |
|---|---|
| Title | `Transformational Coaching \| Carol Merlo, M.Ed. \| Spiritual & Business Coaching` |
| Meta Description | `Carol Merlo helps conscious entrepreneurs and individuals align their inner world with real-world results. Spiritual coaching, business coaching, and the FIRE Formula.` |
| OG Image | Carol's primary photo |
| Schema | Person + LocalBusiness |

---

#### Work With Me `/work-with-me`

Short gateway page. Current copy preserved. Formatting note removed.

**Layout:**
- Headline + subhead
- Body paragraph (current copy)
- Two buttons side by side: **Business Coaching** → `/business-coaching` | **Spiritual Coaching** → `/spiritual-coaching`
- One line below: *"Not sure where to start? Schedule a complimentary 20-minute Insight Call."* → Calendly button

| SEO Field | Value |
|---|---|
| Title | `Work With Me \| Carol Merlo — Conscious Entrepreneurship & Spiritual Coaching` |
| Meta Description | `Carol Merlo offers two coaching paths for conscious entrepreneurs and spiritual seekers. Find the right starting point for your work.` |

---

#### Business Coaching `/business-coaching`

Current updated copy preserved. Empty Framework heading filled. Week-by-week flow added. Pricing button links to `/pricing`.

**Layout sections in order:**
1. Opening — problem/solution framing (current copy)
2. Framework — FIRE Formula description: Focus, Ignition, Relationships, Execution (fills currently empty section — use current copy from homepage FIRE Formula section, condensed)
3. 8-Week Program — description, three-phase arc, what's included
4. Week-by-week flow — copy from live Weebly Business Coaching page after Section 7 fixes:
   - Week 1 — Do You Have What It Takes?
   - Week 2 — Build Your Power Platform
   - Week 3 — Break the Invisible Barriers: Expand Your Comfort Zone
   - Week 4 — Focus and Ignition: Empower Your Dream
   - Week 5 — From Dreaming to Driving
   - Week 6 — Client Magnetism: Define and Attract Your Ideal Audience
   - Week 7 — Relationships, Communication & Follow-Up
   - Week 8 — Your DMO: Operational Habits That Build Momentum
5. Program Support Tools — mention of guided sound meditations
6. Book connection section (current copy, Amazon link)
7. Three CTAs: **Watch the Webinar** → `https://youtu.be/yP8W3WOSzLQ` | **Pricing and Application** → `/pricing` | **Schedule Insight Call** → Calendly

| SEO Field | Value |
|---|---|
| Title | `8-Week Enlightened Entrepreneurship Coaching \| Carol Merlo` |
| Meta Description | `Private 8-week coaching program for spiritually-oriented entrepreneurs. Inner work and outer execution. Built around the FIRE Formula. Carol Merlo, M.Ed.` |

---

#### Spiritual Coaching `/spiritual-coaching`

New copy reproduced exactly — pull from live Weebly after confirming propagation (Section 7, item 2).

**Layout sections in order:**
1. Headline: *1-on-1 Spiritual Coaching with Carol Merlo*
2. Opening — witness framing, 15 years licensed practitioner, psychology background
3. What Happens in a Session — full description including PEMF and sound frequencies for Dallas clients; Zoom + frequency for remote
4. This Work Is Right For You If — bulleted list (6 items)
5. Testimonials — M Jordy, L Haze, T Schauster, J Kuban, Jim B, Daniel J, Leah S
6. Closing: *Schedule a Complimentary 20-Minute Insight Call* → Calendly button

| SEO Field | Value |
|---|---|
| Title | `Spiritual Coaching with Carol Merlo \| Licensed Spiritual Practitioner \| Dallas & Online` |
| Meta Description | `1-on-1 spiritual coaching with Carol Merlo, M.Ed. — licensed spiritual practitioner with 15+ years experience. In-person Dallas or online via Zoom. Spiritual Mind Treatment and sound frequency work.` |

---

#### Books `/books`

All 5 books with current improved descriptions. Closing connector section added at bottom.

**Layout:**
- Intro paragraph (current copy)
- **Section 1 — Transformation & Inner Work:**
  - The FIRE Formula
  - Taking the Mystery Out of Meditation
  - Create a Happy Life
- **Section 2 — Entrepreneurship & Business:**
  - Enlightened Entrepreneurship
  - The Networking Conversation
- Each book: cover image left + description right + Amazon link — stacked on mobile
- **Closing section:** *"These books are the foundation. The coaching is where the work becomes real."* → links to `/business-coaching` and Calendly

| SEO Field | Value |
|---|---|
| Title | `Books by Carol Merlo \| Conscious Entrepreneurship, Meditation & Personal Transformation` |
| Meta Description | `Carol Merlo is the author of five books on conscious entrepreneurship, meditation, the FIRE Formula, and personal transformation. Available on Amazon.` |

---

#### About `/about`

Current rewritten bio preserved exactly. All testimonials preserved. One strong photo.

**Layout sections in order:**
1. Opening paragraph
2. How I Got Here — shelter-to-success arc
3. The Work Underneath the Work — Dark Night of the Soul
4. The Spiritual Foundation
5. What I've Built From That Work
6. A Few Things Worth Knowing About Me
7. CTA: *Schedule a Complimentary 20-Minute Insight Call* → Calendly button
8. Testimonials — full list, all current

| SEO Field | Value |
|---|---|
| Title | `About Carol Merlo \| Transformational Coach, Author & Spiritual Practitioner` |
| Meta Description | `Carol Merlo, M.Ed. is a transformational coach, licensed spiritual practitioner, and author of five books on conscious entrepreneurship, meditation, and personal transformation. Based in the Dallas area.` |
| Schema | Person schema with sameAs links to Facebook, LinkedIn, YouTube, Instagram |

---

#### Pricing `/pricing`

Single-offer page. 8-week 1-on-1 program only. Not in main nav — linked from Business Coaching only. **Included in sitemap.xml — do not noindex.**

**Layout:**
- Headline: *The 8-Week Enlightened Entrepreneurship Coaching Program*
- One-line description
- What's included: 8 weekly sessions, worksheets, guided meditations, direct application to client's specific business
- Investment:
  - Pay in Full: **$1,799**
  - 3-Month Payment Plan: **$625/month**
- Pay-in-full bonus: Enlightened Entrepreneur Clarity Library — Sacred Six Questions Ebook, Overcome the 7 Saboteurs Ebook, The Networking Conversation Ebook (combined value $147)
- Program Support Tools: six guided sound meditation thumbnails (see Section 4 for confirmed asset URLs)
- Commitment Reset policy: first 14 days, credit toward future engagement, no cash refunds
- Two CTAs: **Schedule Insight Call** → Calendly | **Apply Now** → Calendly (same URL)

| SEO Field | Value |
|---|---|
| Title | `8-Week Enlightened Entrepreneurship Coaching — Program Pricing \| Carol Merlo` |
| Meta Description | `Private 8-week coaching program with Carol Merlo. Investment, what's included, payment options, and how to enroll.` |

---

#### Contact `/contact`

Simple, clean page. Primary CTA is the Insight Call booking.

**Layout:**
- Headline: *Let's Connect*
- Primary CTA: **Schedule a Complimentary 20-Minute Insight Call** → Calendly button
- Secondary: Contact form (name, email, message) via Netlify Forms
- Social links: Facebook, LinkedIn, YouTube, Instagram — icon links

| SEO Field | Value |
|---|---|
| Title | `Contact Carol Merlo \| Schedule a Complimentary Insight Call` |
| Meta Description | `Schedule a complimentary 20-minute insight call with Carol Merlo, or send a message. Spiritual and business coaching for conscious entrepreneurs.` |

---

#### Blog `/blog` — Infrastructure Only at Launch

The blog index page is built at launch to establish the URL and SEO foundation. No stub content pages are published — stubs without substantive content risk thin-content penalties during the domain transition. Articles are written and published as a v2 initiative.

**What gets built at launch:**
- Blog index page at `/blog`
- Headline, brief description, and "Articles coming soon" message
- Full SEO fields on the index page
- URL architecture in place for `/blog/[slug]` when content is ready

**v2 article list — write these fully before publishing, do not publish as placeholders:**

| Slug | Title |
|---|---|
| `/blog/conscious-entrepreneurship` | What Is Conscious Entrepreneurship — and Is It Right for You? |
| `/blog/fire-formula-explained` | The FIRE Formula: A Framework for Inner Alignment and Outer Results |
| `/blog/meditation-for-entrepreneurs` | Why Meditation Is the Most Practical Tool a Solopreneur Can Use |
| `/blog/inner-game-outer-game` | The Inner Game and the Outer Game: How They Work Together |
| `/blog/spiritual-mind-treatment` | What Is a Spiritual Mind Treatment? |
| `/blog/7-saboteurs` | The 7 Saboteurs of Entrepreneurial Success |
| `/blog/sound-frequencies-transformation` | How Sound Frequencies Support Transformation |
| `/blog/new-thought-philosophy` | New Thought Philosophy: What It Is and Why It Works |

| SEO Field | Value |
|---|---|
| Blog index title | `Blog \| Carol Merlo — Conscious Entrepreneurship, Meditation & Transformation` |
| Blog index meta | `Articles on conscious entrepreneurship, the FIRE Formula, meditation, spiritual practice, and personal transformation. Carol Merlo, M.Ed.` |

---

## 4. Asset Inventory — Download Before Canceling Weebly

> **Critical:** All images are hosted on Weebly's CDN. They will break permanently when the Weebly subscription is canceled. Download every asset below before canceling. Save to `/assets/images/` in the GitHub repo. Convert JPG/PNG to WebP for production — keep originals as backup.

### 4.1 Site Images

| Asset | Weebly URL | Used On |
|---|---|---|
| Carol's primary photo | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/screenshot-2022-04-16-140533.png` | Homepage hero, About |
| Teal water/tree image | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/tree-in-water-teal-and-soothing.jpg` | Homepage |
| FIRE Formula GIF | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/editor/fire-formula.gif` | Homepage — **download and verify before anything else** |
| Footer banner | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/banner.png` | All pages footer |
| Work With Me banner | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/green-wide.jpg` | Work With Me |
| Pricing banner | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/banner-light-blue-and-gray.png` | Pricing |
| EE book large photo | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/enlightened-entrepreneurship-2.jpg` | Business Coaching |

### 4.2 Book Cover Images

| Book | Weebly URL |
|---|---|
| The FIRE Formula | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/sq-image.jpg` |
| Taking the Mystery Out of Meditation | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/square-2.jpg` |
| Create a Happy Life | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/square-for-fb.png` |
| Enlightened Entrepreneurship | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/sq-inage.png` |
| The Networking Conversation | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/cover-sq.png` |

### 4.3 Sound Meditation Thumbnails (Pricing Page)

These six assets appear on the Pricing page as program support tool thumbnails. All confirmed URLs:

| Meditation | Weebly URL |
|---|---|
| Thymus | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/thymus-thumb-sm_orig.png` |
| Self Love | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/self-love-thumb-sm_orig.png` |
| Regeneration | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/regeneration-thumbnail-sm_orig.png` |
| Transformation | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/transformation-thumb-sm_orig.png` |
| Brain Boost | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/brain-boost-thumb-sm_orig.png` |
| Abundance | `https://www.carolmerlo.com/uploads/1/2/9/6/12965579/abundance-thum-sm_orig.png` |

---

## 5. Technical Requirements

### 5.1 SEO Foundation

1. Every page has a unique title tag (60 characters max)
2. Every page has a unique meta description (155 characters max)
3. Clean URL slugs — no `.html` extensions, no underscores
4. One H1 per page, logical H2/H3 hierarchy below it
5. All images have descriptive alt text
6. `sitemap.xml` auto-generated and submitted to Google Search Console
7. `robots.txt` configured — no pages blocked unless intentional
8. Canonical tags on all pages
9. Open Graph tags (title, description, image) on every page
10. Person + LocalBusiness schema JSON-LD on homepage and About page
11. Canonical domain enforced via Netlify: one version of `www` vs non-www — recommend non-www as primary

### 5.2 Performance

- Target: 90+ Google PageSpeed score on mobile and desktop
- All images served as WebP with explicit `width` and `height` attributes to prevent layout shift
- No render-blocking scripts
- System font stack preferred; if web fonts used, load asynchronously

### 5.3 Maintainability via Decap CMS

Carol needs to update text, testimonials, and book descriptions herself without touching code.

**Architecture requirements:**
- All editable content stored in `/content/` as Markdown or JSON — never hardcoded in HTML templates
- `admin/index.html` — standard Decap CMS boilerplate
- `admin/config.yml` — collections configured for: testimonials, book descriptions, page body copy, pricing details
- Netlify Identity enabled on Netlify dashboard
- Carol invited as editor user

**Editing workflow when live:**
Carol logs in at `carolmerlo.com/admin` → makes edits → clicks Publish → triggers automatic GitHub commit → Netlify rebuilds and deploys automatically.

**Launch gate:** Carol must successfully edit one testimonial and publish it without her son's involvement before the site goes live.

### 5.4 Future Features — Phase 2+

Architecture must accommodate these without rebuilding:

- Email opt-in / lead capture connected to Kit (ConvertKit)
- Full blog with published articles
- Stripe payment integration on Pricing page
- Password-protected meditation audio library for coaching clients
- Testimonial submission form

---

## 6. Path to Completion

### Phase 1 — Core Site Build (Launch)

#### Step 1: Pre-Build Checklist

Do all of these before writing a single line of code:

1. Complete all Weebly tasks in Section 7
2. Download every asset in Section 4 — verify the FIRE Formula GIF opens correctly
3. Confirm Calendly URL is live: `https://calendly.com/carol-merlo/insight-call-with-carol`
4. Create GitHub repository: `carolmerlo-website`
5. Connect repository to Netlify — configure auto-deploy on push to `main`
6. Confirm your son has reviewed the Decap CMS requirements in Section 5.3
7. Decide canonical domain: recommend `carolmerlo.com` (non-www)

#### Step 2: Project Structure & CSS Foundation

Set up this folder structure exactly:

```
/
├── index.html
├── work-with-me/
│   └── index.html
├── business-coaching/
│   └── index.html
├── spiritual-coaching/
│   └── index.html
├── books/
│   └── index.html
├── blog/
│   └── index.html
├── about/
│   └── index.html
├── pricing/
│   └── index.html
├── contact/
│   └── index.html
├── admin/
│   ├── index.html
│   └── config.yml
├── assets/
│   ├── images/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
├── content/
│   ├── testimonials/
│   ├── books/
│   └── pages/
├── _redirects
└── sitemap.xml
```

Then:
1. Paste the CSS variables block from Section 3.3 as the first content in `main.css`
2. Build base layout styles: typography scale, spacing, containers, responsive breakpoints
3. Mobile breakpoint: `768px` for tablet, `480px` for mobile

#### Step 3: Global Components

Build these four components before any page work begins — every page depends on them:

1. **Navigation** — logo (text or SVG), main nav links, Work With Me dropdown with two sub-links, mobile hamburger menu with smooth open/close
2. **Footer** — nav links, social icon links (Facebook, LinkedIn, YouTube, Instagram), copyright line
3. **CTA Button** — primary variant (`var(--teal)` fill) and secondary variant (`var(--gold)` border/text, transparent fill), both linking to Calendly
4. **Testimonial Card** — quote text, attribution name, subtle `var(--teal-light)` background — reusable across Homepage, About, Spiritual Coaching

#### Step 4: Build Pages (in this order)

Build in this sequence — each page informs the next:

1. **Homepage** — most complex; sets the visual standard for the entire site
2. **About** — story-led, single-column layout, straightforward
3. **Work With Me** — short gateway page, two buttons, one Calendly line
4. **Business Coaching** — program description, week-by-week list, three CTAs
5. **Spiritual Coaching** — new copy sections, testimonial cards, Calendly CTA
6. **Books** — two-section layout, image+description rows, closing connector
7. **Pricing** — single-offer layout, investment table, six meditation thumbnails, two CTAs
8. **Contact** — Insight Call primary CTA, Netlify Form
9. **Blog index** — index page only, "Articles coming soon," full SEO fields

#### Step 5: Decap CMS Setup

1. Create `admin/index.html` with standard Decap CMS CDN boilerplate
2. Create `admin/config.yml` — define collections:
   - `testimonials` — repeating items: quote, name, context
   - `books` — repeating items: title, description, Amazon URL, cover image
   - `pages` — individual files for hero text and body copy on key pages
   - `pricing` — single file: program name, investment amounts, what's included
3. Enable Netlify Identity on Netlify dashboard
4. Set Git Gateway as backend in `config.yml`
5. Invite Carol as editor
6. **Launch gate test:** Carol logs in, edits one testimonial, publishes — verify it deploys correctly without her son's involvement

#### Step 6: SEO & Technical Polish

1. Add all meta titles, descriptions, and OG tags to every page (values in Section 3.4)
2. Add Person + LocalBusiness schema JSON-LD to `index.html` and `about/index.html`
3. Generate `sitemap.xml` — include all pages except `/admin`
4. Configure `robots.txt`:
   ```
   User-agent: *
   Disallow: /admin/
   Sitemap: https://carolmerlo.com/sitemap.xml
   ```
5. Add Google Analytics 4 tracking snippet to all pages (or via `main.js`)
6. Create `_redirects` file from Section 8
7. Configure canonical domain in Netlify settings
8. Run Google PageSpeed Insights on homepage — resolve any issues before DNS cutover

#### Step 7: DNS Cutover

1. Keep Weebly live until new site is fully approved at the Netlify preview URL
2. Carol reviews every page on the preview URL and gives written approval
3. Point `carolmerlo.com` DNS to Netlify (A record or CNAME per Netlify's instructions)
4. Verify SSL certificate is active — Netlify provisions automatically within minutes
5. Test every page, every link, every form, and every CTA button on the live domain
6. Submit updated sitemap to Google Search Console
7. Cancel Weebly subscription — confirm site still loads correctly after cancellation

---

### Phase 2 — Email Capture & List Building

- **Lead magnet:** Solopreneur Self-Assessment (Module 1 worksheet) — strongest fit for target audience
- Add opt-in form to homepage, blog index, and a dedicated `/free-assessment` landing page
- Migrate from Mailchimp to Kit (ConvertKit)
- Build welcome email sequence: 3–5 emails introducing Carol, the FIRE Formula, books, and the coaching offer

### Phase 3 — Blog Content (v2)

- Write and publish the 8 articles listed in Section 3.4 — one at a time, fully written before publishing
- Repurpose existing social media content (Wednesday book posts, FIRE Formula posts) into expanded articles
- Add internal links from articles to Books, Business Coaching, and Spiritual Coaching pages

### Phase 4 — Online Enrollment & Additional Features

- Stripe payment integration on Pricing page — online enrollment for 8-week program
- Password-protected meditation audio library for active coaching clients
- Testimonial submission form — clients submit directly from the site

---

## 7. Remaining Weebly Tasks — Complete Before Build Starts

Complete all of these before taking any content snapshots for the build. After these are done the live Weebly site and this spec will be in full agreement.

1. **Work With Me** — delete the visible formatting note: *"BELOW THE BUTTONS — ONE LINE: Not sure where to start? Schedule a complimentary 30-minute insight call. (links to Calendly)"*
2. **Spiritual Coaching** — confirm new copy has propagated; if not, republish in Weebly and wait 30 minutes, then verify in an incognito window
3. **Pricing page** — replace all content with single 8-week 1-on-1 offer per Section 3.4 Pricing spec above
4. **Homepage My Books blurb** — replace current text with: *"Five books covering conscious entrepreneurship, meditation, the FIRE Formula, and personal transformation. Each one is a framework you can work with on your own."*
5. **Business Coaching** — fill the empty "Enlightened Entrepreneur Framework" heading with the condensed FIRE Formula description, or remove the heading entirely
6. **Homepage meta description** — update in Weebly SEO settings; currently truncated mid-sentence in Google search results

---

## 8. URL Redirect Map

Add this as the `_redirects` file in the project root. Netlify processes it automatically on every deploy. This preserves any Google rankings from the old Weebly URLs and prevents broken links.

Canonical domain redirect (non-www as primary) is handled separately in Netlify dashboard settings — not in this file.

```
# _redirects
# Place this file in the project root

# Core page redirects
/business.html                /business-coaching          301
/spiritual-coaching.html      /spiritual-coaching         301
/work-with-me.html            /work-with-me               301
/books.html                   /books                      301
/about.html                   /about                      301
/contact.html                 /contact                    301
/theprogram.html              /pricing                    301
/pricing.html                 /pricing                    301
/resources.html               /business-coaching          301
/coaching.html                /business-coaching          301

# Off-brand pages — redirect to homepage
/health.html                  /                           301
/superfoods.html              /                           301
/lifetracker.html             /                           301
/courses.html                 /                           301
/downloads.html               /                           301
/happylife.html               /                           301
/checkout.html                /pricing                    301
/mannatechassociate.html      /                           301

# Catch-all — send any unknown old URLs to homepage
/*                            /                           404
```

> **Note on the catch-all:** The `/*` line sends unknown URLs to a 404 rather than the homepage, which is technically more correct. If you prefer to redirect all unknown URLs to the homepage instead, change `404` to `301` on that line. Discuss with your son which approach is better for your situation.

---

## 9. Open Decisions — Confirm in First Session

These five items must be confirmed before or at the start of the first Claude Code session.

| # | Decision | Recommendation |
|---|---|---|
| 1 | Calendly implementation | **Button links confirmed** — `https://calendly.com/carol-merlo/insight-call-with-carol` — same URL on all pages, no embedded widget |
| 2 | Decap CMS readiness | Confirm son is comfortable with setup before Step 5 |
| 3 | Blog at launch | **Blog index page only** — no stub content, no placeholder articles |
| 4 | Canonical domain | **Non-www** — `carolmerlo.com` as primary, configure in Netlify settings |
| 5 | Google Analytics | Use existing account if one exists; create new GA4 property if not |

---

*This is the final specification for the Carol Merlo website rebuild. All critical issues have been resolved across three review cycles. Complete Section 7 (Weebly tasks) and Section 4 (asset downloads) before writing any code. Resolve Section 9 items in your first session. The build can proceed without ambiguity.*
