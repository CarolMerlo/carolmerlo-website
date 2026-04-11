---
name: Initial Security Audit — April 2026
description: First security audit of static site changes: robots.txt, GA4, Netlify Identity, Decap CMS, contact form, _redirects
type: project
---

Audit performed 2026-04-09 covering the Phase 1 website rebuild changes.

**Why:** First code shipped to a public Netlify site with CMS backend; needed baseline security review before going live.

**How to apply:** Reference these findings in future audits to track remediation status.

## Key Findings Summary

### P1 (High) — Unresolved
- admin/index.html: Netlify Identity widget `<script>` tag is placed OUTSIDE the closing `</html>` tag (after line 11). Invalid HTML. On some parsers this may be silently dropped, meaning the Decap CMS identity gate could fail to load and leave the admin route unprotected by the widget (though Netlify Identity still enforces auth server-side via git-gateway).
- No `netlify.toml` exists — no HTTP security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS) are set at the CDN layer.
- No Content Security Policy anywhere on the site.

### P2 (Medium) — Unresolved
- Honeypot field (`bot-field`) is present but not styled hidden via CSS — relies on browser default. Should be `style="display:none"` or CSS class to guarantee bots see it as fillable.
- `document.write()` used in footer copyright across all 9 HTML files. Technically an XSS-adjacent anti-pattern (synchronous document.write blocks parser); low risk here since the input is `new Date().getFullYear()` — no user data — but flagged as a pattern to eliminate.
- No `netlify.toml` redirect rules — all redirects are in `_redirects` flat file, which is fine, but means no header config opportunity.
- `unpkg.com` CDN used for Decap CMS without a pinned version hash (uses `^3.0.0` semver range). Supply chain risk if unpkg or the package is compromised.

### P3 (Low/Informational)
- GA4 Measurement ID `G-PL27Q84J9J` is visible in source. This is expected and not a secret — GA4 measurement IDs are public by design.
- robots.txt correctly disallows `/admin/` — good.
- All `target="_blank"` links correctly use `rel="noopener"` — good.
- No hardcoded secrets, API keys, or credentials found in any HTML, JS, YAML, or config file.
- All external scripts loaded over HTTPS — good.
- `_redirects` rules are all absolute internal paths with no open-redirect vectors — good.
