# Agent Instructions — carolmerlo.com

Static HTML/CSS/JS website for Carol Merlo, transformational coach.
Hosted on Netlify, auto-deployed from GitHub `master` branch.

## Stack

- Plain HTML5, CSS3, vanilla JS — no framework, no build step
- Netlify (hosting, forms, Decap CMS, Identity)
- Google Analytics 4 (G-PL27Q84J9J)

## Project Structure

```
index.html                   # Homepage
about/                       # About page
business-coaching/           # 8-Week Enlightened Entrepreneurship program
spiritual-coaching/          # 1-on-1 spiritual coaching
work-with-me/                # Gateway page (links to both coaching paths)
pricing/                     # Program pricing and enrollment
books/                       # Carol's 5 books
blog/                        # Blog (infrastructure only — Phase 3)
contact/                     # Contact form + Calendly CTA
admin/                       # Decap CMS admin panel
content/                     # CMS-managed JSON content (testimonials, books, pricing)
assets/
  css/
    main.css                 # Design system: colors, typography, layout, components
    nav.css                  # Navigation and footer
    pages.css                # Page-specific styles
  js/main.js                 # Nav toggle, dropdown, copyright year
  images/                    # Site images (.webp preferred)
```

## CSS Architecture

Three files, no overlap:
- `main.css` — design tokens (CSS variables in `:root`), reset, typography, buttons, utilities
- `nav.css` — site header nav and site footer only
- `pages.css` — page-specific layout and components

Brand tokens: `--teal`, `--teal-dark`, `--teal-darker`, `--gold`, `--gold-accessible`, `--teal-light`, `--white`, `--white-soft`

## CI

GitHub Actions (`.github/workflows/ci.yml`):
- `lint` job: html-validate, stylelint, eslint
- `lighthouse` job: LHCI desktop on /, /business-coaching/, /spiritual-coaching/

Run locally: `npm run lint`

## Key URLs

- Live site: https://carolmerlo.com
- Calendly: https://calendly.com/carol-merlo/insight-call-with-carol
- Netlify admin: https://carolmerlo.com/admin/
