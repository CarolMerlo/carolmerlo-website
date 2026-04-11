# carolmerlo.com — Sprint 2 & Sprint 3 Specification

> Created: 2026-04-11
> Input for: `/pc-plan`
> Branch: sprint-2 (Sprint 2), sprint-3 (Sprint 3)

---

## Sprint 2: Homepage Enhancements & Email Capture

### Overview
Four code features plus one manual Netlify step. All changes are on the homepage except the GA4 work (which is sitewide) and the Netlify form notification (which is a dashboard-only change).

---

### T2.1 — Full-Width Hero Banner (Homepage)

**What:** A new full-width image section with centered text overlay placed at the very top of the homepage, above all existing content. Nothing is removed or moved.

**Design:**
- Full-width, approximately 400–450px tall on desktop, proportionally shorter on mobile
- Background image: `assets/images/beautiful-background.jpg` (file to be added by Carol before implementation begins)
- Centered text overlay: **"Real Change Begins Within"** — large, elegant serif font, white with subtle text-shadow for legibility on any photo
- No CTA button in this section — text only

**Implementation notes:**
- Add as first `<section>` inside `<main>` in `index.html`
- Use CSS `background-image` with `background-size: cover; background-position: center` for responsive behavior
- Add `.hero-banner` styles to `pages.css`
- Image must be delivered as optimized JPG; add to `assets/images/`

**Prerequisite:** Carol saves `beautiful-background.jpg` into `assets/images/` before this task starts.

**Acceptance criteria:**
- [ ] Banner appears at the top of the homepage above all other content
- [ ] Text "Real Change Begins Within" is legible on the photo at all screen sizes
- [ ] All existing homepage sections are unchanged below the banner
- [ ] Image is responsive (no horizontal scroll, no cropping issues on mobile)
- [ ] PageSpeed score does not drop below 85 mobile after image is added

---

### T2.2 — YouTube Link on FIRE Formula Image (Homepage)

**What:** Make the existing FIRE Formula image in the homepage FIRE Formula section a clickable link to `https://youtu.be/Xe6xvnVMElg`. No video is embedded — clicking the image opens the YouTube video in a new tab.

**Implementation notes:**
- Wrap the existing `<img>` tag for `fire-formula.webp` in an `<a>` tag pointing to the YouTube URL (`target="_blank" rel="noopener"`)
- Add a small "Watch Video" label or play icon below or overlaid on the image so visitors know it's clickable
- No JS, no embed, no new dependencies — pure HTML change
- Add `video_play` GA4 event on click (for T2.4 conversion tracking)

**Acceptance criteria:**
- [ ] Clicking the FIRE Formula image opens the YouTube video in a new tab
- [ ] A visual cue (text label or icon) makes the image clearly clickable
- [ ] GA4 `video_play` event fires on click
- [ ] No other content in the FIRE Formula section is changed

---

### T2.3 — Email Popup (Mailchimp, Homepage Only)

**What:** A dismissible popup modal on the homepage that invites visitors to subscribe in exchange for a free meditation recording. Mailchimp handles list storage and automatic delivery of the recording.

**Behavior:**
- Appears **10 seconds** after the homepage loads
- Shown **once per visitor** — suppressed on return visits using a browser cookie (`cm_popup_seen=1`, expires 30 days)
- **Easy to dismiss:** large visible × button in top-right corner; also closes on click-outside or Escape key
- **Homepage only** (`index.html`)

**Content:**
- Headline: *"Free Guided Meditation"*
- Subheadline: *"Enter your email to receive it"*
- Supporting line: *"Plus occasional coaching insights and book updates from Carol."*
- Email input field + Subscribe button
- Fine print below button: *"No spam. Unsubscribe any time."*

**Mailchimp integration:**
- Embed Mailchimp's hosted signup form as an iframe or use Mailchimp's Ajax embed snippet
- **Prerequisite:** Carol provides the Mailchimp embed code (from Mailchimp dashboard → Audience → Signup forms → Embedded forms → Copy code). This is pasted into the implementation.
- Mailchimp handles: collecting the email, sending the meditation recording, adding to the list

**Footer link:**
- Add a "Subscribe" text link in the footer Connect column that opens the popup when clicked (same popup, triggered programmatically)

**Implementation notes:**
- Popup HTML added to `index.html` (hidden by default via CSS)
- Styles in `pages.css` (`.popup-overlay`, `.popup-modal`, `.popup-close`)
- JS logic in `main.js`: timer, cookie check, open/close, footer trigger
- No third-party popup library — vanilla JS only

**Acceptance criteria:**
- [ ] Popup appears after exactly 10 seconds on first visit
- [ ] Popup does NOT appear on return visits within 30 days
- [ ] × button closes popup; click outside modal closes popup; Escape key closes popup
- [ ] Mailchimp form inside popup is functional (test with real email — verify delivery)
- [ ] Footer "Subscribe" link opens the popup
- [ ] Popup does not appear on any page other than the homepage
- [ ] Popup is responsive and usable on mobile

---

### T2.4 — GA4 Fixes & Conversion Tracking (Sitewide)

**What:** Fix the GA4 property configuration and add meaningful conversion event tracking so Carol can see which actions visitors take.

**Part A — Fix GA4 property settings (manual steps for Carol or son):**
These are dashboard changes inside Google Analytics, not code changes:
1. Go to GA4 → Admin → Property → Data Streams → select the stream → change URL from `carolmerlo.net` to `carolmerlo.com`
2. Fill in Business Details: industry = "Business & Industrial," business size = small
3. Link GA4 to Google Search Console (Admin → Property → Search Console Links)
4. Enable Enhanced Measurement if not already on (tracks scrolls, outbound clicks, video plays automatically)

**Part B — Conversion event tracking (code changes):**
Add GA4 event tracking via `gtag()` calls in `main.js` for these key actions:

| Event name | Trigger |
|---|---|
| `calendly_click` | Any click on a Calendly CTA button |
| `contact_form_submit` | Contact form successful submission |
| `book_link_click` | Any Amazon book link clicked |
| `video_play` | YouTube facade video clicked (play initiated) |
| `popup_subscribe` | Mailchimp popup form submitted |

Then in GA4 dashboard: mark `calendly_click` and `contact_form_submit` as Conversions (Admin → Conversions → Mark as conversion).

**Acceptance criteria:**
- [ ] GA4 data stream URL is carolmerlo.com
- [ ] Calendly button clicks fire `calendly_click` event (verify in GA4 DebugView)
- [ ] Contact form submission fires `contact_form_submit` event
- [ ] Book link clicks fire `book_link_click` event
- [ ] Video play fires `video_play` event
- [ ] `calendly_click` and `contact_form_submit` are marked as Conversions in GA4

---

### T2.5 — Netlify Form Email Notification (Manual Step)

**What:** Configure Netlify to email contact form submissions to `hwhcarol@gmail.com`. This is a dashboard-only change — no code required.

**Steps (Carol or son):**
1. Log into Netlify dashboard
2. Go to the carolmerlo.com site → **Forms**
3. Click on **contact** (the form name)
4. Click **Form notifications** → **Add notification** → **Email notification**
5. Enter `hwhcarol@gmail.com`
6. Save
7. Test by submitting the contact form and confirming email arrives

**Acceptance criteria:**
- [ ] Test form submission received at hwhcarol@gmail.com

---

## Sprint 3: Blog

### Overview
Full blog implementation. Carol has approximately 50 posts written and ready to publish. She will add them manually through Decap CMS over a period of days. The blog infrastructure already has a placeholder page at `/blog/`.

---

### T3.1 — Blog Post Page Template

**What:** A reusable HTML template for individual blog posts. Each post will be a Markdown file managed through Decap CMS; the page template defines how that content is displayed.

**Note:** This site has no build tool — blog posts cannot be statically generated from Markdown automatically without adding a build step. Two options:

**Option A (recommended — add a build step):** Use **Eleventy** (11ty), a simple static site generator. Eleventy reads Markdown files from Decap CMS and generates HTML pages. It integrates cleanly with Netlify (Netlify runs `eleventy` on every deploy). This is the standard approach for Decap CMS + static sites and handles 50+ posts cleanly.

**Option B (no build tool):** Each blog post is a hand-crafted HTML file. At 50 posts this is manageable but tedious; Carol cannot write posts through the CMS without a build step to convert Markdown to HTML.

**Recommendation: Option A (Eleventy).** It requires a one-time setup but enables Carol to write and publish posts entirely through the CMS without touching code. This is the right long-term approach.

**Post page design:**
- Featured image: full-width header image (Carol provides per post; fallback to a category default image)
- Category badge/label
- Post title (H1)
- Date published
- Body content (from Markdown)
- Social sharing buttons: Facebook and LinkedIn (open share dialogs with pre-filled URL and title)
- "Back to Blog" link
- Related posts or CTA section at the bottom (Schedule an Insight Call)

**Acceptance criteria:**
- [ ] Blog post URL pattern: `/blog/post-slug/`
- [ ] Featured image displays at top; falls back to category default if none provided
- [ ] Category, date, title, body all render correctly
- [ ] Social sharing buttons work (Facebook and LinkedIn)
- [ ] Mobile-responsive layout
- [ ] Each post has unique `<title>`, `<meta name="description">`, canonical URL, OG tags

---

### T3.2 — Decap CMS Blog Collection

**What:** Add a blog post collection to `admin/config.yml` so Carol can create, edit, and publish posts through the CMS at `/admin/`.

**Fields per post:**
- `title` — text (required)
- `date` — datetime (required)
- `category` — select: Conscious Entrepreneurship, Spiritual Practice, Mindset & Inner Work, Meditation (required)
- `featured_image` — image upload (optional; fallback to category default)
- `excerpt` — text (short summary for listing page; required)
- `seo_description` — text (meta description; required)
- `body` — Markdown editor (required)

**Storage:** Posts stored as Markdown files in `content/blog/` with YAML frontmatter.

**Acceptance criteria:**
- [ ] Carol can log into `/admin/` and create a new blog post
- [ ] All fields present and functional in the CMS editor
- [ ] Published post appears at correct URL after Netlify redeploys
- [ ] Draft posts do not appear on the live site

---

### T3.3 — Blog Listing Page

**What:** Replace the current coming-soon placeholder at `/blog/` with a functioning blog listing page showing all published posts.

**Design:**
- Page header with title "Blog" and brief intro sentence
- Category filter tabs or buttons: All | Conscious Entrepreneurship | Spiritual Practice | Mindset & Inner Work | Meditation
- Post cards in a responsive grid (2 columns desktop, 1 column mobile):
  - Featured image (thumbnail)
  - Category badge
  - Post title
  - Excerpt
  - Date
  - "Read More" link
- Pagination (if more than ~12 posts per page)

**Acceptance criteria:**
- [ ] All published posts appear on listing page
- [ ] Category filter works (shows only posts in selected category)
- [ ] Post cards link to correct individual post pages
- [ ] Responsive at all screen sizes
- [ ] "Blog" is active in the site navigation when on this page

---

### T3.4 — Category Default Images

**What:** Four default featured images — one per category — used when a post does not have its own featured image.

**Categories and suggested image style:**
- Conscious Entrepreneurship — professional/business tone
- Spiritual Practice — nature or contemplative
- Mindset & Inner Work — abstract or introspective
- Meditation — calm, soft, minimal

**Carol provides:** Four images (one per category) added to `assets/images/blog/` before this task begins. Dimensions: at least 1200×630px (standard OG image size, also works as blog header).

**Acceptance criteria:**
- [ ] Each category has a default image
- [ ] Posts without a featured image display the correct category default

---

### T3.5 — Eleventy Build Setup & Netlify Integration

**What:** Configure Eleventy as the site's build tool and wire it to Netlify's deploy pipeline.

**What this involves:**
- Add Eleventy as a dev dependency (`npm install --save-dev @11ty/eleventy`)
- Create Eleventy config (`.eleventy.js`) pointing to the site's file structure
- Add `netlify.toml` build command: `eleventy` (currently no build command — Netlify just deploys the repo as-is)
- Templates converted to Eleventy layout files (Nunjucks or Liquid)
- Existing HTML pages continue to work as before
- Blog posts (Markdown in `content/blog/`) generate HTML pages at `/blog/post-slug/`

**Note:** This is the most technically complex task in Sprint 3. It requires converting the existing HTML pages to use Eleventy templates (the nav, footer, and `<head>` become shared layout components — which also solves the current duplication of nav/footer HTML across all 10 pages).

**Acceptance criteria:**
- [ ] `npm run build` generates the full site into an `_site/` output directory
- [ ] Netlify runs Eleventy on deploy (not just serving static files)
- [ ] All existing pages render identically to before
- [ ] Blog post pages generate at correct URLs from Markdown source files
- [ ] Decap CMS still works with the Eleventy-generated site

---

## Open Prerequisites (Required Before Implementation)

| # | Item | Owner |
|---|------|-------|
| 1 | Add `beautiful-background.jpg` to `assets/images/` | Carol |
| 2 | Provide Mailchimp embed code for popup | Carol (from Mailchimp dashboard) |
| 3 | Fix GA4 data stream URL + business info + Search Console link | Carol or son (dashboard only) |
| 4 | Set up Netlify form notification to hwhcarol@gmail.com | Carol or son (dashboard only) |
| 5 | Create 4 category default images for blog | Carol (before T3.4) |
| 6 | Confirm Vimeo video 1138121172 is set to Public (for future use) | Carol |
| 7 | Source material ready at `C:\Carol Projects\Social Media posts and text\blog post content\` | ✓ Done |

---

## Questions Still Open

- **Mailchimp embed code:** Will need this snippet to implement T2.3. Carol retrieves it from: Mailchimp → Audience → Signup forms → Embedded forms → Copy code. *(Carol will provide at implementation time.)*

---

### T3.6 — Blog Content Generation from Source Material

**What:** Generate full draft blog posts written in Carol's voice, drawn entirely from her existing source material. Volume is not fixed — the number of posts is determined by what the source material supports.

**Source material location:** `C:\Carol Projects\Social Media posts and text\blog post content\`

**Files:**
- `Enlightened Entrepreneurship book format.docx` — book
- `Taking the Mystery Out of Meditation digital format.docx` — book
- `The Networking Conversation book 02.7.docx` — book
- `The Fire Formula WORKBOOK 2024.docx` — workbook
- `How to Overcome the 7 Saboteurs to Success new.docx` — workbook
- `The 5 Shifts Final.docx` — workbook/course
- `Your Foundation Mini Course.transcription.docx` — course transcript
- `Abundance Webinar Workbook.docx` — webinar
- `Divine Realms webinar transcript.docx` — webinar transcript
- `From Mesmer to Quimby to Frequency Healing- The Evolution of Spiritual Healing script.docx` — script
- `Mastering Meditation with Frequencies.docx` — content
- `Carol_Merlo_Video_Social_Copy.docx` — social/video copy
- `IG_Captions_Carol_Merlo.docx` — Instagram captions
- `Instagram_TikTok_Captions_Carol_Merlo.docx` — social captions
- `Carol Overview 1 2 and David Scalar.docx` — overview content

**Process:**
1. Read all source files in full
2. Identify distinct topics, frameworks, insights, and themes across all material
3. Map topics to the four categories: Conscious Entrepreneurship, Spiritual Practice, Mindset & Inner Work, Meditation
4. Generate full draft posts — complete, publish-ready prose written in Carol's voice and grounded in her frameworks (FIRE Formula, Science of Mind, etc.)
5. Output each draft as a Word file for Carol's review and editing
6. Carol reviews, edits, approves
7. Assign staggered publish dates and categories
8. Convert approved drafts to Markdown via Pandoc and import to `content/blog/`

**Output per post:**
- Title
- Category
- Full body (complete draft, not an outline)
- Excerpt (2–3 sentences for the listing page)
- SEO meta description
- Suggested publish date (staggered)

**Acceptance criteria:**
- [ ] All generated posts are grounded in Carol's actual source material (no invented content)
- [ ] Posts reflect Carol's voice, frameworks, and audience (conscious entrepreneurs, spiritual seekers)
- [ ] Each post maps to one of the four categories
- [ ] Carol has reviewed and approved every post before it is imported
- [ ] All approved posts imported to `content/blog/` with correct frontmatter and staggered dates
- [ ] All posts appear on the blog listing page after deploy

---

## Sprint Summary

| Sprint | Tasks | Complexity |
|--------|-------|------------|
| Sprint 2 | T2.1 Hero banner, T2.2 YouTube video, T2.3 Email popup, T2.4 GA4, T2.5 Netlify form (manual) | Medium |
| Sprint 3 | T3.1 Post template, T3.2 CMS collection, T3.3 Listing page, T3.4 Category images, T3.5 Eleventy build | High |
