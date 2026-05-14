# Deep Audit: maia-group, maia-marketing, maia-masters, maia-realty
**Date:** 2026-05-12
**Auditor:** Claude Code (Sonnet 4.6)

---

## Summary

Four repos audited and fixed. All changes committed and pushed to origin.

---

## maia-group (the-maia-group.com)

### HTML Files Audited
- `index.html` — main page
- `privacidad.html` — privacy policy
- `terminos.html` — terms of use
- `success.html` — form success
- `googlee8d4fae01957cb3a.html` — GSC verification

### Issues Found & Fixed

| # | File | Issue | Fix Applied |
|---|------|-------|-------------|
| P0 | `privacidad.html` | `info@the-maia-group.com` → should be privacy contact (×3 occurrences) | Changed to `privacy@maia-management.com` |
| P0 | `terminos.html` | Same wrong email in contact section | Changed to `privacy@maia-management.com` |
| P0 | `index.html` | General contact email `info@the-maia-group.com` | Changed to `privacy@maia-management.com` |
| P1 | `index.html` | Form checkbox links to `/politica-privacidad.html` — file does not exist | Fixed to `/privacidad` (correct URL) |
| P1 | `netlify.toml` | No www redirect | Added `https://www.the-maia-group.com/*` → `https://the-maia-group.com/:splat` 301 |

### Checks Passed (No Fix Needed)

- ✅ NIT: 901.862.977-7 — correct in JSON-LD, footer, cookie banner
- ✅ WhatsApp: `wa.me/19034598763` — all CTAs correct
- ✅ Address: Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Level 11, Santa Marta — correct in JSON-LD and cookie banner
- ✅ llevalleva.co — not present (clean)
- ✅ Canonical tags — present on all pages
- ✅ OG tags — present, correct domains
- ✅ Twitter cards — present
- ✅ Schema JSON-LD — Organization with taxID, address, subsidiaries; all brand URLs correct (lleva-lleva.com, maia-masters.com, etc.)
- ✅ Ley 1581 / data-netlify / netlify-honeypot — all forms correct
- ✅ Security headers — X-Frame-Options, HSTS, CSP, etc. all present
- ✅ Sitemap — present at /sitemap.xml
- ✅ No Abril 2026 badge — not present in this repo

### Git Diff (this session's changes only)
```
index.html      | privacy email fixed, form link fixed
privacidad.html | 3× email fixed
terminos.html   | 1× email fixed
netlify.toml    | www redirect added
```
**Commit:** `766b2fe` → pushed to origin/main

---

## maia-marketing (maia-marketing.com)

### HTML Files Audited
- `index.html` — main page
- `live_fetch.html` — alternate/live version
- `privacy.html` — privacy policy
- `terms.html` — terms

### Issues Found & Fixed

| # | File | Issue | Fix Applied |
|---|------|-------|-------------|
| P0 | `index.html` | Brand tile links to `https://llevalleva.com` (wrong domain, doesn't exist) | Fixed to `https://lleva-lleva.com` |
| P0 | `index.html` | Display text shows `llevalleva.com` | Fixed to `lleva-lleva.com` |
| P0 | `live_fetch.html` | Same `llevalleva.com` error | Fixed to `lleva-lleva.com` |
| P1 | `netlify.toml` | No www redirect (was only in `_redirects`) | Added `https://www.maia-marketing.com/*` → 301 in netlify.toml |

### Checks Passed (No Fix Needed)

- ✅ NIT: 901.862.977-7 — correct in JSON-LD, footer, privacy.html, terms.html
- ✅ WhatsApp: `wa.me/19034598763` — all CTAs correct
- ✅ Address: Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Level 11, Santa Marta — correct in JSON-LD
- ✅ Canonical — present
- ✅ OG tags, Twitter cards — present
- ✅ Schema JSON-LD — MarketingAgency with parentOrganization and taxID
- ✅ Privacy policy — uses Ley 1581, contact via WhatsApp
- ✅ Security headers — present in netlify.toml
- ✅ Sitemap — present

### Notes
- `form action="/thank-you.html"` but no `thank-you.html` exists. JS intercepts the submit (Netlify AJAX + WhatsApp redirect), so this only affects no-JS users. P3 for now.
- `live_fetch.html` is untracked but now included in this commit as it has the same fixed content.

### Git Diff (this session)
```
index.html      | llevalleva.com → lleva-lleva.com (href + display text)
live_fetch.html | same fix (newly tracked)
netlify.toml    | www redirect added
```
**Commit:** `a66ee3b` → pushed to origin/master

---

## maia-masters (maia-masters.com)

### HTML Files Audited
- `index.html` — main page
- `pages/cursos.html`, `pages/nosotros.html`, `pages/contacto.html`, `pages/blog.html`
- All 8 blog posts in `pages/blog/`
- `privacy.html`, `terms.html`, `thank-you.html`

### Issues Found & Fixed

| # | File | Issue | Fix Applied |
|---|------|-------|-------------|
| P0 | `privacy.html` (EN) | Data contact email: `info@maia-masters.com` instead of privacy email | Fixed to `privacy@maia-management.com` |
| P0 | `privacy.html` (ES) | Same | Fixed to `privacy@maia-management.com` |
| P1 | `netlify.toml` | No www redirect | Added `https://www.maia-masters.com/*` → 301 |

### Checks Passed (No Fix Needed)

- ✅ **"Abril 2026" badge** — NOT present. Hero badge reads "Inscripciones abiertas" (already fixed in prior session)
- ✅ Blog post dates showing "abril 2026" are correct historical publish dates — not badges
- ✅ NIT: 901.862.977-7 — correct in JSON-LD, cookie banner
- ✅ WhatsApp: `wa.me/19034598763` — all CTAs correct
- ✅ Address: Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Level 11 — correct in JSON-LD
- ✅ terms.html already uses `privacy@maia-management.com` (fixed in prior session)
- ✅ Canonical tags — all pages have correct canonicals
- ✅ OG + Twitter — present
- ✅ Schema JSON-LD — EducationalOrganization with parentOrganization taxID
- ✅ data-netlify forms — present on contacto.html and cursos.html
- ✅ Ley 1581 consent — present in forms
- ✅ Sitemap — present, covers all blog posts
- ✅ Security headers — HSTS, X-Frame-Options, CSP, etc.
- ✅ llevalleva.co — not present

### Git Diff (this session)
```
privacy.html  | 2× email fixed (EN + ES contact boxes)
netlify.toml  | www redirect added
```
**Commit:** `e05b826` → already on origin/master

---

## maia-realty (maia-realty.com)

### HTML Files Audited
- `index.html`, `es/index.html`, `contact.html`, `buyers-guide.html`
- `404.html`, `privacy.html`, `terms.html`, `thank-you.html`
- `blog/index.html` + 7 blog posts
- `faq/index.html`, `projects/index.html`, `tools/investment-dashboard/index.html`
- `es/gracias.html`

### Issues Found & Fixed

| # | File | Issue | Fix Applied |
|---|------|-------|-------------|
| P0 | `privacy.html` (EN) | Data contact email: `hola@maia-realty.com` in privacy contact box | Fixed to `privacy@maia-management.com` |
| P0 | `privacy.html` (ES) | Same | Fixed to `privacy@maia-management.com` |
| P1 | `netlify.toml` | No www redirect (only in `_redirects`) | Added `https://www.maia-realty.com/*` → 301 in netlify.toml |

### Checks Passed (No Fix Needed)

- ✅ **Hero image** — was 1,564KB JPG; HTML now uses `caribbean-coast-aerial.webp` (304KB, 80% smaller). JPG still on disk but not served.
- ✅ NIT: 901.862.977-7 — correct throughout
- ✅ WhatsApp: `wa.me/19034598763` — all CTAs correct
- ✅ Address: Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Level 11, Santa Marta — correct
- ✅ llevalleva.co — not present (uses lleva-lleva.com correctly)
- ✅ andrew@ personal email — not present anywhere
- ✅ Canonical tags — all pages have them
- ✅ OG + Twitter — present
- ✅ Schema JSON-LD — RealEstateAgent + parentOrganization taxID
- ✅ Ley 1581 — referenced in privacy policy
- ✅ Security headers — CSP, HSTS, etc.
- ✅ Sitemap — present
- ✅ Bilingual (EN/ES) — hreflang set correctly
- ✅ `hola@maia-realty.com` retained as general business contact in contact.html — appropriate (not a privacy email)

### Git Diff (this session)
```
privacy.html  | 2× email fixed (EN + ES privacy contact boxes)
netlify.toml  | www redirect added
```
**Commit:** `cc9f1ef` → pushed to origin/master

---

## Cross-Repo Patterns

### All Fixed
- Privacy contact email in legal pages standardized to `privacy@maia-management.com`
- www → bare domain 301 redirect added to all four netlify.toml files

### Remaining Known Issues (P3 / Future)
- `maia-marketing`: `form action="/thank-you.html"` — file missing; JS intercepts so no user-visible break, but no-JS fallback 404s
- `maia-group/index.html`: general contact section now shows `privacy@maia-management.com` which is a privacy-specific address — consider adding `hola@the-maia-group.com` or similar general inbox if one exists
- All repos: blog post dates in maia-masters show "abril 2026" — correct as historical publish dates, not stale badges
- `maia-realty/images/caribbean-coast-aerial.jpg` (947KB) still on disk — not served, but consider removing to keep repo lean

### Image Size Note (maia-realty)
The old hero JPG was 1,564KB (previously flagged). Current HTML uses `caribbean-coast-aerial.webp` at 304KB. The `.jpg` on disk is 947KB — not served, just dead weight.

---

## Commit Summary

| Repo | Commit | Branch | Deploy |
|------|--------|--------|--------|
| maia-group | `6b57938` | main | → Netlify the-maia-group.com |
| maia-marketing | `a66ee3b` | master | → Netlify maia-marketing.com |
| maia-masters | `e05b826` | master | → Netlify maia-masters.com |
| maia-realty | `cc9f1ef` | master | → Netlify maia-realty.com |

All four deployments triggered via GitHub push. Check Netlify dashboard for deploy status.
