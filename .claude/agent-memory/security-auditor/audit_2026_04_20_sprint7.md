---
name: Sprint-7 Security Audit — April 2026
description: Security audit of sprint-7-seo-launch branch covering netlify.toml redirects, JSON-LD schema additions, sitemap.xml expansion, and CSP header review
type: project
---

Audit performed 2026-04-20 covering sprint-7-seo-launch branch changes.

**Why:** Sprint-7 adds 10 Netlify 301 redirects, JSON-LD schema on 12 pages (about, spiritual-coaching, business-coaching, books, 8 blog articles), and 8 new blog URLs in sitemap.xml. Audit focused on open redirect risk, JSON-LD injection, CSP compatibility with new inline script blocks, hardcoded secrets, and sitemap exposure.

**How to apply:** Reference for remediation tracking and as baseline for future sprint audits.

## Key Findings Summary

- P0: 0
- P1: 0
- P2: 1 (CSP `unsafe-inline` combined with new ld+json blocks — the blocks are safe, but the broader policy gap is worth tracking)
- P3: 1 (Mailchimp audience token carry-forward)
- All clean: open redirects, JSON-LD injection, secrets, sitemap exposure

## Findings Detail

### P2: CSP `unsafe-inline` in script-src covers but does not restrict JSON-LD blocks

The CSP defined in netlify.toml uses `'unsafe-inline'` in `script-src`. All 12 new `<script type="application/ld+json">` blocks are technically covered by this directive. The blocks themselves contain only static, developer-authored JSON — no user-controlled content, no dynamic insertion. No injection risk is introduced by this sprint. However, the `'unsafe-inline'` allowance means a hypothetical XSS that injects a `<script>` tag would not be blocked by CSP. This is a pre-existing policy weakness, not introduced by sprint-7.

### P3: Mailchimp audience token visible in HTML source (carry-forward)

Unchanged from sprint-3. Not a secret by Mailchimp's design.

## What Looks Good

- **Open redirects**: All 10 `[[redirects]]` entries use hardcoded relative `from` and `to` paths — all `to` values are internal paths (`/spiritual-coaching/`, `/business-coaching/`, etc.). No external domain targets. No wildcard `from` patterns. No user-controlled input can influence redirect destination. Zero open redirect risk.
- **JSON-LD injection**: All 12 JSON-LD blocks contain only static, developer-authored string literals. No user-supplied data, no server-side variable interpolation, no dynamic content. No `</script>` sequences embedded. Values are well-formed JSON. No injection vector exists.
- **CSP and ld+json compatibility**: `<script type="application/ld+json">` blocks are not executed as JavaScript by browsers. The `script-src` directive does not apply to them. They are parsed as data, not code. Adding these blocks does not require any CSP change and does not weaken the existing policy.
- **Hardcoded secrets**: No passwords, API keys, tokens, or credentials found in any changed file. GTM container ID (`GTM-55CCPZL`) and Mailchimp script URL are both pre-existing, intentional identifiers — unchanged.
- **sitemap.xml**: All 16 URLs use `https://carolmerlo.com/` origin. No admin paths, no CMS paths, no internal tool paths, no staging URLs exposed. `/contact/` and `/pricing/` are intentionally public pages. No sensitive path exposure.
- **sameAs URL fix in about/index.html**: Updated from incorrect handles (`/carolmerlo`) to correct branded handles (`/CarolMerloCoaching`, `/@carolmerlocoaching`). All four values are well-known public social profile URLs. No security impact.
- **New netlify.toml headers block** (from earlier sprints, confirmed present): X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, HSTS with includeSubDomains — all remain correctly configured and unchanged by this sprint.

## Remediation Status of Prior Findings

- CSP `unsafe-inline`: STILL OPEN — not addressed in sprint-7. Carry forward. Would require migrating GTM to a nonce-based or hash-based approach.
- admin/index.html script-outside-html: NOT in sprint-7 scope, carry forward.
- Decap CMS unpinned CDN hash: NOT in sprint-7 scope, carry forward.
- `document.write()` copyright year: NOT in sprint-7 scope, carry forward.
