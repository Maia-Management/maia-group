# maia-group Audit Report
**Date:** 2026-05-15
**Auditor:** Claude Code (Sonnet 4.6)
**Health Score:** 8/10

---

## Summary

The maia-group repo is in good overall shape following the 2026-05-12 deep audit. The previously reported P0 issues (personal email in JSON-LD, wrong NIT suffix, wrong WhatsApp numbers, broken form redirect) have all been fixed. Three new issues remain: a duplicate HTML ID in `success.html` that silently breaks the English countdown, a missing CSS rule for `.nav__link--active` causing a JS-added class to have no visual effect, and two identical `<h3>` column headings in the footer ("Empresas" repeated for both brand columns). No secrets, credentials, or broken image references were found.

---

## Top 5 Fixes (Priority Order)

1. **Duplicate `id="countNum"` in `success.html`** — the English-language branch injects a new element with the same ID into the DOM; the countdown timer then loses its reference and the displayed number stops updating in English.
2. **Missing CSS style for `.nav__link--active`** — JavaScript adds this class on scroll but no CSS rule defines it, so the active nav link is visually indistinguishable from inactive ones.
3. **Footer has two columns with identical heading "Empresas"** — the second column header should be something like "Más Empresas" or simply have no heading to differentiate it from the first.
4. **`success.html` and legal pages not in sitemap** — `success.html` is intentionally `noindex` (OK), but `404.html` canonical points to `404.html` with `.html` extension rather than a clean URL, and the sitemap omits the `success` page entirely (fine for noindex pages — confirmed OK). Minor: sitemap uses `lastmod` of 2026-05-14 rather than today's date.
5. **No WebP/AVIF usage and no lazy loading** — `og-image.png` and favicon PNGs are unoptimised; the OG image is used as the `logo` property in JSON-LD (should be a separate dedicated logo asset, not the social card).

---

## Issues

### P0 — Critical (fix before any launch/traffic)

| # | Issue | File + Line | Fix |
|---|-------|-------------|-----|
| 1 | **Duplicate `id="countNum"`**: when the page detects English, it calls `c.innerHTML = '...<strong id="countNum">...'`, creating a second element with the same ID. The `countEl` reference obtained earlier via `getElementById` still points to the original element (now hidden in replaced HTML), so the countdown silently freezes. | `success.html` lines 183, 193, 212 | Replace the English `c.innerHTML` injection with a targeted update: update `n.textContent` in the interval directly, or replace with `countEl.closest('p').querySelector('strong').textContent`. Simplest fix: give the countdown `<strong>` a `data-` attribute instead of an `id` and use `querySelector` throughout. |

---

### P1 — High (fix within this sprint)

| # | Issue | File + Line | Fix |
|---|-------|-------------|-----|
| 2 | **`.nav__link--active` class has no CSS definition** — JS adds/removes this class on scroll (`main.js` lines 374–375) to highlight the current section's nav link, but no CSS rule exists for it in `styles.css`. The active state is invisible to users. | `css/styles.css` (missing rule), `js/main.js` lines 374–375 | Add a CSS rule such as `.nav__link--active { color: var(--text-primary); }` and `.nav__link--active::after { width: 100%; }` to `styles.css`. |
| 3 | **Duplicate footer column heading "Empresas"** — both brand list columns share `data-i18n="footer.companies"`, translating to "Empresas" / "Companies" for both. Users cannot distinguish the two columns semantically. | `index.html` lines 625 and 635 | Change the second column's `<h3>` to a distinct label — e.g. `data-i18n="footer.companies2"` with translation value "Más Empresas" / "More Companies", or remove the heading from the second column and let the brands flow as a continuation. |
| 4 | **JSON-LD `logo` property uses the OG social card image** — `"logo": "https://the-maia-group.com/og-image.png"` appears on `index.html` (line 63), `success.html` (line 31), `privacidad.html` (line 37), and `terminos.html` (line 37). Google's structured data guidelines expect a dedicated logo image (square or landscape, not a 1200×630 social card). | All four HTML files, JSON-LD `logo` field | Add a dedicated `logo.png` (e.g. 400×400 square with white/transparent background) to the repo and point `"logo"` at it. Keep `"image"` pointing at `og-image.png`. |
| 5 | **`privacidad.html` privacy policy dated "enero de 2026"** — the policy was updated in May 2026 per the audit log but the document footer still reads January 2026. | `privacidad.html` line 214 | Update `<p class="legal-meta">Última actualización: enero de 2026` to reflect the actual last-modified date (e.g. `mayo de 2026`). |

---

### P2 — Medium (fix this month)

| # | Issue | File + Line | Fix |
|---|-------|-------------|-----|
| 6 | **No WebP/AVIF images — `og-image.png` only** — the repo has no WebP variants for any image asset. The OG image is a PNG served at every page load for social previews. While PNG is fine for social crawlers, providing a WebP/AVIF version of any hero or inline images would improve performance. Currently there are no `<img>` tags in the HTML (all visuals are CSS or SVG) so no lazy-loading attribute is needed — but the og-image and favicon PNGs should be optimised. | Root-level `og-image.png` | Run `og-image.png` through Squoosh or similar. Add a WebP version if file size justifies it. |
| 7 | **`404.html` canonical is `https://the-maia-group.com/404.html` (`.html` extension)** — all other pages use clean URLs without `.html`. The 404 page is non-indexable (`noindex`) so this won't hurt SEO, but it's inconsistent and could surface strangely in server logs. | `404.html` line 9 | Change canonical to `https://the-maia-group.com/404` or remove the canonical entirely since the page is `noindex`. |
| 8 | **`success.html` language detection uses `navigator.language`** — this reads the browser locale, not the site's current language selection. A Spanish-speaking user who already toggled to EN, then submitted the form, will see the Spanish success page if their browser locale is `es`. | `success.html` lines 204–213 | Pass the language as a query string from the form action (e.g. `action="/success?lang=en"`) and read it with `new URLSearchParams(window.location.search).get('lang')`, matching the pattern used in `main.js` line 150. |
| 9 | **`stagger-reveal` transition-delay only defined for children 1–11** — the brands grid has 15 items (14 brand cards + 1 "coming soon" card), but stagger delays are only defined up to `:nth-child(11)` in `styles.css` (lines 1246–1253, 1495–1497). Children 12–15 animate simultaneously with no delay. | `css/styles.css` lines 1495–1497 | Extend the stagger delays through `:nth-child(15)` with 5s increments. |
| 10 | **Missing `width` and `height` attributes on all `<img>` elements** — there are no `<img>` elements in the HTML pages (all images are SVG inline or CSS background). However, the `og-image.png` referenced in OG meta has `og:image:width` / `og:image:height` which is correct. This is a non-issue for in-page CLS, but note it if any real `<img>` tags are added in future. | N/A | No action required now; note for future image additions. |

---

### P3 — Low / Nice-to-have

| # | Issue | File + Line | Fix |
|---|-------|-------------|-----|
| 11 | **`form-group label` for email field has no `data-i18n` attribute** — the email label at `index.html` line 567 (`<label for="email">Email</label>`) is hardcoded in English/Spanish-neutral but not wired to the i18n system. All other form labels have `data-i18n`. | `index.html` line 567 | Add `data-i18n="form.email"` and add `'form.email': 'Email'` (both languages — "Email" works for both). |
| 12 | **`success.html` has no nav bar or back link visible on mobile** — the success page renders a standalone card with no navigation. Users have only the "Volver al inicio" button; there's no escape if JS is disabled and the auto-redirect doesn't fire. | `success.html` | Ensure the "Volver al inicio" button is prominent and consider adding a plain text fallback link that's always visible outside the JS block. |
| 13 | **`css/styles.css.bak` backup files present in worktree directories** — older worktrees (e.g. `flamboyant-babbage-e58c3c`) contain `css/styles.css.bak` and `js/main.js.bak`. These are in `.claude/worktrees/` (not in the working tree) so they won't deploy, but they pollute the worktree storage. | `.claude/worktrees/*/css/styles.css.bak`, `.claude/worktrees/*/js/main.js.bak` | Delete the `.bak` files from worktrees or let Claude Code clean them up after worktrees are merged. |
| 14 | **Sitemap `lastmod` dates are 2026-05-14** — all three sitemap entries share the same static date and won't auto-update. | `sitemap.xml` lines 5, 12, 19 | Update `lastmod` dates whenever content changes. Consider automating via a Netlify build plugin or pre-deploy script. |
| 15 | **`googlee8d4fae01957cb3a.html` Google Search Console verification file** — present and presumably working. Ensure it stays deployed and is not removed in future cleanups. | `googlee8d4fae01957cb3a.html` | No action needed — just preserve it. |

---

## Verified OK

- **NIT number**: `901.862.977-7` — correctly used in JSON-LD (`taxID`, `vatID`, `identifier`), footer copyright, and cookie banner across all pages. The old `-1` suffix bug is not present anywhere.
- **WhatsApp number**: `wa.me/19034598763` — correct bot number used on all public CTAs: `index.html` (FAB + 404 button), `success.html`, `privacidad.html`, `terminos.html`. No personal numbers found.
- **Personal email in JSON-LD**: No personal gmail/hotmail/personal addresses anywhere. The previously reported `info@the-maia-group.com` bug has been fixed; all contact references now use `privacy@maia-management.com`.
- **Canonical tags**: Present and correct on all pages (`index.html`, `privacidad.html`, `terminos.html`, `success.html`, `404.html`).
- **OG tags**: Present and complete on all pages with correct domain `the-maia-group.com`.
- **Twitter/X cards**: `summary_large_image` type, correct image, `@MaiaGroupCO` handle — all pages.
- **Hreflang**: Properly set on `index.html` with `es` canonical, `en` alternate (`?lang=en`), and `x-default`.
- **JSON-LD structured data**: `Organization` schema with correct `taxID`, `vatID`, `identifier` (NIT), address, `subOrganization` list (14 brands), and `member` (CEO/COO). No personal emails in schema.
- **robots.txt**: Present, `Allow: /`, sitemap URL correct.
- **sitemap.xml**: Covers `/`, `/privacidad`, `/terminos`. `success.html` is `noindex` so its omission is correct.
- **Security headers (netlify.toml)**: `X-Frame-Options: DENY`, `HSTS`, `CSP`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` — all present and properly configured.
- **www redirect**: `https://www.the-maia-group.com/*` → `https://the-maia-group.com/:splat 301` — present in `netlify.toml`.
- **Form**: Netlify Forms with `data-netlify="true"`, honeypot field, `action="/success"` redirect — all correct.
- **Viewport meta**: Present on all pages (`width=device-width, initial-scale=1.0`).
- **Responsive breakpoints**: Mobile-first CSS with breakpoints at 480px, 600px, 768px, 1024px. No fixed-width elements wider than viewport.
- **`prefers-reduced-motion`**: CSS and JS both respect this media query.
- **No-JS fallback**: `.no-js` CSS class ensures content is visible without JavaScript.
- **Accessibility — alt tags**: No `<img>` elements in HTML pages; all icons are inline SVG with `aria-hidden="true"` or are decorative. The WhatsApp FAB has a proper `aria-label`. Form inputs all have associated `<label>` elements.
- **`focus-visible` styles**: Defined in CSS for all interactive elements.
- **Cookie banner**: ARIA `role="dialog"`, `aria-live="polite"`, `aria-label` present. Ley 1581 de 2012 compliance text correct.
- **No secrets/credentials**: No API keys, tokens, passwords, or `.env` files in the repo.
- **No lorem ipsum or placeholder copy**: All content is real brand/business copy.
- **No broken internal links**: `/privacidad`, `/terminos`, `/success`, `#nosotros`, `#empresas`, `#contacto` all resolve correctly via Netlify redirects.
- **Brand card external links**: All 14 brand URLs use `target="_blank" rel="noopener"`.
- **`404.html`**: Custom page exists, `noindex`, correct WhatsApp link, references live `styles.css`.
- **Stagger reveal delays 1–11**: Defined (issue #9 notes 12–15 are missing; 1–11 are confirmed present).
- **Nav toggle**: Mobile hamburger opens full-screen overlay, closes on link click, locks body scroll — all correct.
- **Language toggle**: `?lang=en` URL param correctly read on load; `history.replaceState` keeps URL in sync; `document.title` and `document.documentElement.lang` both updated.
