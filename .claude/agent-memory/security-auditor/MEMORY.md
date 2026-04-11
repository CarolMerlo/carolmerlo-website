# Security Auditor Memory

> This file is automatically loaded into the Security Auditor agent's system prompt (first 200 lines).
> Record audit findings, vulnerability patterns, and compliance observations specific to this project.

## Audit History

- [Initial Audit 2026-04-09](audit_2026_04_09_initial.md) — First audit of Phase 1 static site changes; 1 P1, 3 P2, 4 P3 findings; no secrets found

## Vulnerability Patterns Found

- `document.write()` for copyright year used in all 9 HTML page footers — low risk but anti-pattern to eliminate
- No HTTP security headers configured (no netlify.toml exists yet)
- Netlify Identity widget script placed outside `</html>` in admin/index.html

## Compliance Checkpoints

- No CSP header defined
- No X-Frame-Options header defined
- No HSTS configured at the Netlify layer

## Scan Targets

- `admin/index.html` — Decap CMS + Netlify Identity widget
- `admin/config.yml` — CMS backend config
- `contact/index.html` — Netlify form with honeypot
- `_redirects` — Netlify redirect rules
- `assets/js/main.js` — Only JS file; nav/dropdown logic only
- All page `*.html` files — GA4 snippet repeated inline on each
