---
name: writing-blog-articles
description: Produces a static HTML blog article for carolmerlo.com from one of Carol's source .docx files. Reads the source document, writes the article in Carol's voice, builds the HTML page, updates the blog index, lints, commits, and pushes to the active feature branch for Carol's review.
---

# Writing Blog Articles

## When to Use

When a sprint task requires writing a blog article from Carol's source documents — specifically when a task is tagged as "Write Blog Article" or when instructed to produce a `/blog/[slug]/` page.

## Source Documents

All source documents are at:
```
C:/Carol Projects/Social Media posts and text/blog post content/
```

Key files used for blog articles:
- `The Fire Formula WORKBOOK 2024.docx`
- `The 5 Shifts Final.docx`
- `Taking the Mystery Out of Meditation digital format.docx`
- `How to Overcome the 7 Saboteurs to Success new.docx`
- `Mastering Meditation with Frequencies.docx`
- `Abundance Webinar Workbook.docx`
- `Enlightened Entrepreneurship book format.docx`
- `The Networking Conversation book 02.7.docx`
- `Your Foundation Mini Course.transcription.docx`
- `IG_Captions_Carol_Merlo.docx` / `Instagram_TikTok_Captions_Carol_Merlo.docx`

## Steps

### 1. Pre-flight

```bash
bpsai-pair budget check <task-id>
bpsai-pair task show <task-id>
bpsai-pair task update <task-id> --status in_progress
```

### 2. Read the Source Document

Use Python with UTF-8 stdout to handle Unicode characters:

```bash
python -c "
import sys
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', buffering=1)
import docx
doc = docx.Document('C:/Carol Projects/Social Media posts and text/blog post content/<filename>.docx')
paras = [p for p in doc.paragraphs if p.text.strip()]
print(f'Total non-empty: {len(paras)}')
for i, p in enumerate(paras[:80]):
    print(f'[{i}] {p.text.strip()[:160]}')
"
```

Read in chunks if the document is large (>300 paragraphs). Identify:
- Core concepts, frameworks, and named models
- Carol's personal stories or examples
- Key phrases that sound like Carol's voice

### 3. Write the Article

**Voice guidelines:**
- First-person ("I", "me", "my practice") — Carol is the author
- Direct, warm, grounded — not academic, not hype
- Include one personal story or observation from Carol's experience
- 900–1100 words
- Sections separated by `<hr class="blog-divider">` with `<h2>` headings
- Lead paragraph uses `class="blog-lead"`

**Category label** (use whichever fits):
- `Conscious Entrepreneurship`
- `Meditation &amp; Spiritual Practice`

**CTA selection:**
- Business-focused articles → Calendly booking + `/business-coaching/`
- Meditation/spiritual articles → `/#subscribe-popup` free meditation + `/spiritual-coaching/`

### 4. Build the HTML Page

Create the directory and file:
```
blog/[slug]/index.html
```

Use the standard article template (copy structure from an existing article, e.g., `blog/build-prosperity-consciousness/index.html`). Required elements:

```html
<head>
  <!-- GTM snippet (GTM-55CCPZL) -->
  <!-- meta charset, viewport -->
  <!-- title: "[Article Title] | Carol Merlo" -->
  <!-- meta description (unique, ~150 chars) -->
  <!-- canonical: https://carolmerlo.com/blog/[slug]/ -->
  <!-- og:title, og:description, og:image, og:url, og:type="article" -->
  <!-- main.css, nav.css, pages.css -->
  <!-- Mailchimp connected site script -->
</head>
<body>
  <!-- GTM noscript iframe -->
  <!-- site-header with nav -->
  <main>
    <article class="blog-article">
      <div class="container blog-article-inner">
        <header class="blog-article-header">
          <a href="/blog/" class="blog-back-link">&larr; Back to Blog</a>
          <span class="label-gold">[Category]</span>
          <h1>[Title]</h1>
          <p class="blog-article-meta">By Carol Merlo, M.Ed.</p>
        </header>
        <div class="blog-article-body">
          <p class="blog-lead">...</p>
          <!-- hr.blog-divider + h2 sections -->
        </div>
        <aside class="blog-article-cta">...</aside>
        <div class="blog-article-footer">
          <a href="/blog/" class="blog-back-link">&larr; Back to Blog</a>
        </div>
      </div>
    </article>
  </main>
  <!-- site-footer -->
  <script src="/assets/js/main.js"></script>
</body>
```

### 5. Update Blog Index

Add a new card to `blog/index.html` at the **top** of the article list (newest first):

```html
<div class="blog-article-card">
  <span class="label-gold">[Category]</span>
  <h2><a href="/blog/[slug]/">[Title]</a></h2>
  <p>[One-sentence teaser matching meta description]</p>
</div>
```

### 6. CSS Variables — Valid Tokens Only

Only use CSS custom properties defined in `assets/css/main.css`. Key tokens:

| Token | Value | Use for |
|-------|-------|---------|
| `--teal` | `#2E8B8B` | Links, accents |
| `--teal-light` | `#E8F5F5` | Light backgrounds (CTA block) |
| `--teal-darker` | `#0F3A3A` | Lead paragraph text |
| `--text-dark` | `#2C2C2C` | Card link color, headings |
| `--text-mid` | `#555555` | Meta text, card body text |
| `--text-soft` | `#777777` | Secondary/muted text |
| `--gold-accessible` | `#8B6000` | Label text, accents |

**Do not use:** `--cream`, `--charcoal`, `--gray-mid` — these are not defined.

### 7. Lint and Commit

```bash
npx html-validate "blog/[slug]/index.html" "blog/index.html"
npx stylelint "assets/css/**/*.css"

git add blog/[slug]/index.html blog/index.html
git commit -m "T3.X: Add blog article — [Title]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin <feature-branch>
```

### 8. Carol Reviews

Start a local preview server if not already running:
```bash
python -m http.server 8080
```

Tell Carol to review at: `http://localhost:8080/blog/[slug]/`

Wait for Carol's approval before marking the task done.

### 9. Complete the Task

After Carol approves:

```bash
# Update state.md: mark task done, add session entry, update What's Next
# Then:
git add .paircoder/context/state.md
git commit -m "Update state.md: T3.X done"
bpsai-pair task update <task-id> --status done --allow-dirty --auto-check
git push origin <feature-branch>
```

## Article Quality Checklist

- [ ] 900–1100 words
- [ ] Written in Carol's first-person voice
- [ ] Includes at least one personal story or observation
- [ ] Unique `<title>` and `<meta name="description">`
- [ ] Canonical URL matches slug exactly
- [ ] `og:type="article"` (not `website`)
- [ ] One `<h1>`, multiple `<h2>` sections
- [ ] CTA matches article topic (business vs. spiritual)
- [ ] Blog index card added at top (newest first)
- [ ] No undefined CSS variables used
- [ ] All external links have `rel="noopener"`

## Common Errors

| Error | Fix |
|-------|-----|
| `charmap` codec on .docx read | Add `sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', buffering=1)` |
| Output too large for one read | Read in chunks using offset: `paras[80:160]` |
| `bpsai-pair task done` blocked by dirty tree | Use `--allow-dirty` flag |
| `bpsai-pair task done` blocked by state.md | Update state.md and commit it first, then retry |
| `git push` rejected | Run `git pull --rebase` then push again |
