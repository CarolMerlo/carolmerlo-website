---
name: Sprint-3 Security Audit — April 2026
description: Security audit of sprint-3 branch covering 8 new static blog article pages and blog CSS; no JS written; small attack surface
type: project
---

Audit performed 2026-04-12 covering sprint-3 blog content additions.

**Why:** Sprint-3 adds 8 blog article pages and ~280 lines of new blog CSS. No JS written, no backend, no build step. Audit focused on external link safety, third-party script consistency, canonical URL hygiene, inline event handlers, sensitive data, CDN integrity, and iframe safety.

**How to apply:** Reference for remediation tracking and as baseline for future sprint audits.

## Key Findings Summary

### P2 (Informational Carry-Forward)
- **No CSP header — still open from sprint-2.** Each new blog page adds 9 more pages served without a Content-Security-Policy. GTM still controls all script injection with no browser-enforced whitelist. This is a pre-existing gap, not introduced by sprint-3, but the surface continues to grow. Severity is unchanged from sprint-2.

### P3 (Low)
- **Mailchimp user token visible in HTML source.** The mcjs script URL embeds the Mailchimp audience identifier (`25e2117e1b175958ad44726e0` / `61612c5622ea53b6b12912940`). This is consistent with the approved sprint-2 pattern and expected by Mailchimp — not a secret. Noted for completeness only; no action required.

## What Looks Good
- All 44 `target="_blank"` occurrences across all 9 blog pages (8 articles + index) carry `rel="noopener"` — no missing instances.
- All canonical `href` values and all OG `og:url` and `og:image` values use `https://` — zero mixed-content or `http://` references.
- GTM container ID is `GTM-55CCPZL` across all 9 pages — matches the approved ID from sprint-2; no new or unexpected GTM IDs.
- Mailchimp script URL is identical on all 9 pages (`chimpstatic.com/mcjs-connected/js/users/25e2117e1b175958ad44726e0/61612c5622ea53b6b12912940.js`) — matches the approved sprint-2 pattern.
- No inline event handlers found anywhere (`onclick`, `onload`, `onerror`, `onsubmit`, etc.).
- No email addresses, phone numbers, API keys, or personal information found in any HTML file.
- No new CDN resource URLs introduced; no `<script src>` beyond GTM (inline), Mailchimp mcjs (inline), and `/assets/js/main.js` (local).
- No SRI hashes needed — the only external scripts loaded by the HTML are GTM and Mailchimp, both of which predate this sprint and are loaded via `document.createElement` (dynamic injection), making SRI inapplicable. The Mailchimp script itself fetches another remote script, but that is a Mailchimp architectural concern, not a sprint-3 change.
- No new `<iframe>` elements. The only iframes are the GTM noscript fallback (`googletagmanager.com/ns.html?id=GTM-55CCPZL`) present on all pages — consistent with the approved sprint-2 pattern.
- GTM noscript iframe is placed correctly at the top of `<body>` on all pages.
- `pages.css` contains only layout/presentation CSS — no `url()` references to external origins, no `expression()`, no `javascript:` URIs. The single `url()` usage references a local asset (`/assets/images/beautiful-background.jpg`).
- No `javascript:` or `data:` URI schemes found anywhere in the blog directory.

## Remediation Status of Prior Findings
- No CSP header: STILL OPEN — not in scope for sprint-3, carry forward.
- admin/index.html script-outside-html: NOT in sprint-3 scope, carry forward.
- Decap CMS unpinned CDN hash: NOT in sprint-3 scope, carry forward.
- Cookie Secure/SameSite flags: NOT in sprint-3 scope, carry forward.
