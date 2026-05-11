---
name: Sprint-2 Security Audit — April 2026
description: Security audit of sprint-2 branch covering Mailchimp popup, cookie handling, GTM migration, GA4 event tracking, hero banner, YouTube link
type: project
---

Audit performed 2026-04-11 covering sprint-2 homepage enhancements.

**Why:** Sprint-2 adds third-party form submission (Mailchimp), JavaScript cookies, GTM replacing inline GA4, and new event tracking — all touch the security surface before production deployment.

**How to apply:** Reference for remediation tracking and as baseline for future sprint audits.

## Key Findings Summary

### P1 (Critical/High)
- **GTM now controls all script injection but no CSP exists.** netlify.toml was NOT updated in this sprint — it still has no `Content-Security-Policy` header. GTM can load arbitrary third-party scripts from its container at any time, making a missing CSP a higher-severity gap now that GTM is in place. Anyone with GTM container write access (or a compromised container) can inject scripts on every page with no browser-enforced whitelist to block them.

### P2 (Medium)
- **Cookie missing Secure and SameSite flags.** `setCookie()` writes `cm_popup_seen=1; expires=...; path=/` with no `; Secure; SameSite=Lax`. Without `Secure`, the cookie can be transmitted over plain HTTP (Netlify enforces HTTPS, but defense-in-depth still applies). Without `SameSite`, the cookie is sent cross-site in older browsers, enabling minor CSRF-style behavioral manipulation (forcing popup re-display by clearing or spoofing the cookie).
- **Mailchimp list credentials exposed in form action URL.** The `u=` and `id=` parameters in the form action (`carolmerlo.us10.list-manage.com/subscribe/post?u=25e2117e1b175958ad44726e0&id=3f8f388769`) are the audience's unique hash and list ID. These are publicly visible in HTML source. This is expected Mailchimp behavior and not considered a secret by Mailchimp, but they do allow list enumeration (anyone can POST valid subscription requests to the same endpoint). The honeypot is the only mitigation on the HTML side.
- **Mailchimp honeypot uses `position:absolute;left:-5000px` but the wrapper `div` is not `aria-hidden` from tab order at the input level.** The honeypot input has `tabindex="-1"` (correct), and the parent div has `aria-hidden="true"` (correct for screen readers). This is adequate. Flagged for awareness but no further action required.

### Remediation Status of Prior P1/P2 Findings
- admin/index.html script-outside-html: NOT in scope this sprint, status unknown — carry forward.
- netlify.toml absent (Phase 1 P1): RESOLVED — netlify.toml now exists with X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS.
- No CSP (Phase 1 P1): STILL OPEN — netlify.toml was not modified in sprint-2.
- document.write() anti-pattern (Phase 1 P2): RESOLVED — main.js now uses `yearEl.textContent = new Date().getFullYear()`.
- Decap CMS unpinned CDN hash (Phase 1 P2): NOT in scope this sprint, status unknown — carry forward.

## What Looks Good
- No hardcoded secrets, API keys, or credentials found anywhere in the sprint-2 diff.
- GTM container ID (GTM-55CCPZL) in source is expected and not a secret.
- GA4 Measurement ID removed from HTML source (replaced by GTM) — cleaner surface.
- `typeof gtag === 'function'` guard on all gtag() calls — safe degradation if GTM blocked.
- Mailchimp form posts directly to Mailchimp servers with `target="_blank"` — no server-side relay, no credentials stored.
- YouTube link uses `rel="noopener"` — correct.
- All `target="_blank"` external links retain `rel="noopener"`.
- Cookie value is always hardcoded `1` — no user data in cookie.
- getCookie() reads only cookie name presence via `startsWith` — no eval, no innerHTML, no XSS vector.
- Hero banner is pure CSS background image — no user input, no attack surface.
