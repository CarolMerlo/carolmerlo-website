# carolmerlo.com — Sprint 7: SEO Remediation & Launch Readiness

> Created: 2026-04-18
> Input for: `/pc-plan`
> Branch: sprint-7-seo-launch
> Plan type: chore

---

## Overview

This sprint prepares the new carolmerlo.com for DNS cutover and resolves all SEO gaps identified in a side-by-side audit of the new site vs. the live Weebly site.

**Audit summary:** The new site is significantly stronger than Weebly on every measured signal — canonical URLs, OG tags, meta descriptions, alt text, and schema are all absent on the old site and present on the new one. However, five structured data gaps and a critical URL redirect requirement must be addressed before DNS cutover to protect Google rankings and prevent broken links.

**Sprint goal:** Complete all P0 tasks before DNS cutover. Complete P1 tasks within one week of launch. P2 tasks are post-launch monitoring.

---

## SEO Audit: Old vs. New (Reference)

| Signal | Old Weebly Site | New Site | Verdict |
|---|---|---|---|
| Title tags | Missing on 2 of 6 pages | ✅ All 7 pages | New wins |
| Meta descriptions | Truncated or missing on 3 pages | ✅ All 7 pages, correct length | New wins |
| Canonical URLs | None on any page | ✅ All 7 pages | New wins |
| OG tags (social sharing) | None on any page | ✅ All 7 pages | New wins |
| Schema / structured data | None on any page | ✅ Home + About (partial) | New wins — gaps remain |
| Image alt text | "Picture" on every image | ✅ Descriptive on all images | New wins — 1 gap |
| H1 quality | Typo: "Real Change Begins InsidE" | ✅ Clean, keyword-relevant | New wins |
| URL structure | `.html` extensions, `/business.html` | ✅ Clean: `/business-coaching/` | New wins |
| Internal linking | Broken on old URL paths | ✅ Consistent nav + footer | New wins |

---

## P0 — Pre-Launch Blockers (must complete before DNS cutover)

---

### T7.1 — Netlify URL Redirects: Old Weebly URLs → New Clean URLs

**What:** The Weebly site uses `.html` extensions and different path names (e.g. `/business.html` vs. `/business-coaching/`). When DNS flips to Netlify, Google will still have the old Weebly URLs indexed. Without redirects, every old URL becomes a 404, which signals a mass site error and can cause significant ranking drops.

Add all redirects to `netlify.toml` using Netlify's `[[redirects]]` syntax.

**Redirects required:**

| Old Weebly URL | New URL | HTTP Code |
|---|---|---|
| `/spiritual-coaching.html` | `/spiritual-coaching/` | 301 |
| `/business.html` | `/business-coaching/` | 301 |
| `/about.html` | `/about/` | 301 |
| `/books.html` | `/books/` | 301 |
| `/contact.html` | `/contact/` | 301 |
| `/work-with-me.html` | `/work-with-me/` | 301 |
| `/pricing.html` | `/pricing/` | 301 |
| `/resources.html` | `/business-coaching/` | 301 |
| `/theprogram.html` | `/business-coaching/` | 301 |
| `/blog.html` | `/blog/` | 301 |

**Implementation notes:**
- Append `[[redirects]]` blocks to the existing `netlify.toml` file
- Use `force = true` on each redirect to ensure it applies even if a matching file exists
- All are 301 (permanent) — this passes link equity to the new URLs
- Do not remove the existing `[[headers]]` blocks in `netlify.toml`

**Acceptance criteria:**
- [ ] All 10 redirects present in `netlify.toml`
- [ ] Each old URL returns 301 (verify via `curl -I` or browser devtools after deploy)
- [ ] Existing `[[headers]]` security rules in `netlify.toml` are unchanged
- [ ] Netlify deploy preview confirms redirects work before DNS cutover

---

### T7.2 — Fix Social URL Inconsistency in About Page Schema

**What:** The About page schema (`ld+json`) references different social URLs than the homepage schema and the site footer. Specifically, the About page uses `carolmerlo` handles while the homepage uses `CarolMerloCoaching`. Google uses schema `sameAs` to link profiles — inconsistent values weaken entity disambiguation.

**Current mismatch (About page schema):**
```
https://www.facebook.com/carolmerlo  ← wrong
https://www.linkedin.com/in/carolmerlo  ← may be correct, verify
https://www.instagram.com/carolmerlo  ← wrong
```

**Correct values (from homepage schema and footer links):**
```
https://www.facebook.com/CarolMerloCoaching/
https://www.linkedin.com/in/carolmerlo/
https://www.youtube.com/@carolmerlocoaching
https://www.instagram.com/carolmerlocoaching
```

**Implementation notes:**
- Edit `about/index.html` — find the `<script type="application/ld+json">` block
- Update `sameAs` array to match the homepage schema exactly
- Same 4 URLs, same order, same casing as homepage

**Acceptance criteria:**
- [ ] About page `sameAs` array is identical to homepage `sameAs` array
- [ ] No other content on the About page is changed

---

## P1 — High Priority SEO Gaps (complete within one week of launch)

---

### T7.3 — Add Service Schema to Spiritual Coaching Page

**What:** The spiritual coaching page has no structured data. Adding `Service` schema helps Google understand what the page offers, who provides it, and where — which can improve rich results and local search visibility.

**Schema to add:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Spiritual Coaching",
  "description": "1-on-1 spiritual coaching with Carol Merlo, M.Ed. — licensed spiritual practitioner. Spiritual Mind Treatment, sound frequency work, and inner alignment practices.",
  "provider": {
    "@type": "Person",
    "name": "Carol Merlo",
    "url": "https://carolmerlo.com"
  },
  "areaServed": ["Dallas, TX", "Online"],
  "serviceType": "Spiritual Coaching",
  "url": "https://carolmerlo.com/spiritual-coaching/"
}
```

**Implementation notes:**
- Add `<script type="application/ld+json">` block in the `<head>` of `spiritual-coaching/index.html`
- Place after the existing `<link>` tags, before `</head>`

**Acceptance criteria:**
- [ ] Schema validates with no errors in Google's Rich Results Test
- [ ] Page content and layout are unchanged
- [ ] No existing head tags are removed or modified

---

### T7.4 — Add Service Schema to Business Coaching Page

**What:** Same gap as spiritual coaching — no structured data on the business coaching page despite it being a primary conversion page.

**Schema to add:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enlightened Entrepreneurship Coaching",
  "description": "8-week private coaching program for spiritually-oriented entrepreneurs. Inner work and outer execution built around the FIRE Formula.",
  "provider": {
    "@type": "Person",
    "name": "Carol Merlo",
    "url": "https://carolmerlo.com"
  },
  "areaServed": ["Dallas, TX", "Online"],
  "serviceType": "Business Coaching",
  "offers": {
    "@type": "Offer",
    "name": "8-Week Private Coaching Program",
    "url": "https://carolmerlo.com/pricing/"
  },
  "url": "https://carolmerlo.com/business-coaching/"
}
```

**Implementation notes:**
- Add `<script type="application/ld+json">` block in `<head>` of `business-coaching/index.html`

**Acceptance criteria:**
- [ ] Schema validates with no errors in Google's Rich Results Test
- [ ] Page content and layout are unchanged

---

### T7.5 — Add Book Schema to Books Page

**What:** The books page lists five books with no structured data. `Book` schema enables Google to display rich results for book searches — including cover images, author, and links — which directly supports Carol's author brand.

**Schema to add (one entry per book):**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      "name": "The FIRE Formula",
      "author": { "@type": "Person", "name": "Carol Merlo" },
      "url": "https://carolmerlo.com/books/",
      "image": "https://carolmerlo.com/assets/images/book-fire-formula.jpg"
    },
    {
      "@type": "Book",
      "name": "Taking the Mystery Out of Meditation",
      "author": { "@type": "Person", "name": "Carol Merlo" },
      "url": "https://carolmerlo.com/books/",
      "image": "https://carolmerlo.com/assets/images/book-meditation.jpg"
    },
    {
      "@type": "Book",
      "name": "Create a Happy Life",
      "author": { "@type": "Person", "name": "Carol Merlo" },
      "url": "https://carolmerlo.com/books/",
      "image": "https://carolmerlo.com/assets/images/book-happy-life.png"
    },
    {
      "@type": "Book",
      "name": "Enlightened Entrepreneurship",
      "author": { "@type": "Person", "name": "Carol Merlo" },
      "url": "https://carolmerlo.com/books/",
      "image": "https://carolmerlo.com/assets/images/book-enlightened-entrepreneurship.png"
    },
    {
      "@type": "Book",
      "name": "The Networking Conversation",
      "author": { "@type": "Person", "name": "Carol Merlo" },
      "url": "https://carolmerlo.com/books/",
      "image": "https://carolmerlo.com/assets/images/book-networking-conversation.png"
    }
  ]
}
```

**Implementation notes:**
- Add `<script type="application/ld+json">` block in `<head>` of `books/index.html`
- Image paths must match actual filenames in `assets/images/` — verify each one before committing

**Acceptance criteria:**
- [ ] All 5 books present in schema
- [ ] All 5 image paths resolve to real files (no 404s)
- [ ] Schema validates in Google's Rich Results Test
- [ ] Page content and layout unchanged

---

### T7.6 — Add BlogPosting Schema to All 8 Blog Articles

**What:** Individual blog articles have no structured data. `BlogPosting` schema enables Google to identify articles as authored content, display publication dates in search results, and index them with proper authorship attribution — all of which improve click-through rates.

**Schema template (apply to each article with correct values):**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Article title]",
  "description": "[Meta description text]",
  "author": {
    "@type": "Person",
    "name": "Carol Merlo",
    "url": "https://carolmerlo.com/about/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Carol Merlo Coaching",
    "url": "https://carolmerlo.com"
  },
  "datePublished": "[Publication date — ISO 8601: YYYY-MM-DD]",
  "image": "[og:image URL already on the page]",
  "url": "[canonical URL already on the page]",
  "mainEntityOfPage": "[canonical URL already on the page]"
}
```

**Articles to update (8 total):**

| Article | Path | Date |
|---|---|---|
| The FIRE Formula: How to Break Free | `/blog/fire-formula-break-free-from-stuck/` | 2026-04-12 |
| The 5 Shifts Every Conscious Entrepreneur | `/blog/5-shifts-conscious-entrepreneur/` | 2026-04-12 |
| Taking the Mystery Out of Meditation | `/blog/taking-the-mystery-out-of-meditation/` | 2026-04-12 |
| The 7 Success Saboteurs | `/blog/7-success-saboteurs/` | 2026-04-12 |
| Mastering Meditation with Frequencies | `/blog/mastering-meditation-with-frequencies/` | 2026-04-12 |
| How to Build a Prosperity Consciousness | `/blog/build-prosperity-consciousness/` | 2026-04-12 |
| The Networking Conversation | `/blog/networking-conversation-follow-up/` | 2026-04-12 |
| Enlightened Entrepreneurship: Alignment Before Action | `/blog/enlightened-entrepreneurship-alignment-before-action/` | 2026-04-12 |

**Implementation notes:**
- Pull `headline`, `description`, `image`, and `url` values directly from the existing meta tags on each page — do not retype them
- Add schema block to `<head>` of each article's `index.html`

**Acceptance criteria:**
- [ ] All 8 articles have `BlogPosting` schema in `<head>`
- [ ] `headline` matches `<title>` tag on each page
- [ ] `url` and `mainEntityOfPage` match `canonical` on each page
- [ ] `image` matches `og:image` on each page
- [ ] Schema validates in Google's Rich Results Test for at least 2 spot-checked articles

---

### T7.7 — Fix Missing Alt Text on Spiritual Coaching Hero Image

**What:** The audit found the spiritual coaching page has no alt text on its hero/featured image. This is both an SEO gap (Google cannot interpret the image) and an accessibility failure (screen readers get no description).

**Implementation notes:**
- Open `spiritual-coaching/index.html`
- Find the hero/featured image `<img>` tag
- Add: `alt="Carol Merlo, spiritual coach and licensed spiritual practitioner — 1-on-1 sessions in Dallas and online"`

**Acceptance criteria:**
- [ ] Hero image has descriptive alt text
- [ ] Alt text is under 125 characters
- [ ] No other content on the page is changed

---

## P2 — Post-Launch (complete within two weeks of DNS cutover)

---

### T7.8 — Submit XML Sitemap to Google Search Console

**What:** After DNS cutover, Google needs to be told the new site exists at the same domain. Submitting a sitemap accelerates re-indexing and prevents a crawl lag of days or weeks.

**Steps (manual — Carol does this in Google Search Console):**
1. Confirm `https://carolmerlo.com/sitemap.xml` exists and is reachable (check if Netlify auto-generates one, or build one manually)
2. Log into Google Search Console → select carolmerlo.com property
3. Go to Sitemaps → enter `sitemap.xml` → Submit
4. Monitor Coverage report for 404 errors over the following week

**If sitemap.xml does not yet exist:**
- Create a static `sitemap.xml` in the project root listing all 7 main pages + 8 blog articles
- Commit to master so Netlify deploys it

**Acceptance criteria:**
- [ ] `sitemap.xml` is reachable at `https://carolmerlo.com/sitemap.xml`
- [ ] Sitemap submitted in Google Search Console
- [ ] No 404 errors in Search Console Coverage report after 7 days

---

### T7.9 — DNS Cutover (Carry-forward from T1.15)

**What:** Point `carolmerlo.com` from Weebly to Netlify by updating DNS in GoDaddy. This is the go-live step. The Weebly site does not disappear — it continues running until traffic stops routing to it.

**Pre-conditions (all must be true before touching GoDaddy):**
- [ ] All P0 tasks (T7.1, T7.2) are complete and deployed to Netlify
- [ ] Netlify deploy preview URL reviewed and approved by Carol
- [ ] `netlify.toml` redirects verified on deploy preview
- [ ] PageSpeed score ≥ 85 mobile on Netlify preview URL
- [ ] Contact form tested and confirmed working on Netlify preview

**Steps:**
1. Log into Netlify → Site Settings → Domain Management → Add custom domain → `carolmerlo.com`
2. Netlify will display its nameservers (4 addresses like `dns1.p01.nsone.net`)
3. Log into GoDaddy → My Products → DNS → change nameservers from GoDaddy defaults to the 4 Netlify nameservers
4. Wait 24–48 hours for DNS propagation
5. Netlify auto-provisions SSL certificate once DNS resolves

**After DNS propagates:**
- Verify `https://carolmerlo.com` loads the new site
- Verify `https://carolmerlo.com/about/` loads correctly
- Verify one redirect works: visit `carolmerlo.com/spiritual-coaching.html` → should redirect to `/spiritual-coaching/`
- Check Netlify dashboard confirms SSL certificate is active (green lock)

**Acceptance criteria:**
- [ ] `carolmerlo.com` loads new Netlify site (not Weebly)
- [ ] SSL certificate active (HTTPS, no browser warning)
- [ ] At least 3 old Weebly URLs confirmed redirecting correctly
- [ ] Google Search Console: submit sitemap within 24 hours of cutover

---

## Task Summary

| ID | Title | Priority | Type | Est. |
|---|---|---|---|---|
| T7.1 | Netlify URL redirects (old Weebly → new) | P0 pre-launch | code | Small |
| T7.2 | Fix social URLs in About schema | P0 pre-launch | code | XS |
| T7.3 | Service schema — Spiritual Coaching page | P1 | code | XS |
| T7.4 | Service schema — Business Coaching page | P1 | code | XS |
| T7.5 | Book schema — Books page (5 books) | P1 | code | Small |
| T7.6 | BlogPosting schema — all 8 articles | P1 | code | Small |
| T7.7 | Fix alt text on Spiritual Coaching hero image | P1 | code | XS |
| T7.8 | Submit sitemap to Google Search Console | P2 post-launch | manual | XS |
| T7.9 | DNS cutover (GoDaddy → Netlify) | P2 launch gate | manual | — |
