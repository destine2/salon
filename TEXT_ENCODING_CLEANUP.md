# Text Encoding & Punctuation Cleanup

Site-wide copy cleanup for **Veloura Beauty Studio** — fixing broken punctuation that appeared as `?` where em dashes, apostrophes, middle dots, or en dashes were intended. No layout, design, or feature changes.

---

## What was wrong

Several strings in `index.html` had **mis-encoded punctuation**: characters that should have been UTF-8 em dashes (`—`), apostrophes (`'`), middle dots (`·`), or en dashes (`–`) had been saved or edited as ASCII `?`. This typically happens when:

- A file was edited in a non-UTF-8 environment, or
- Smart punctuation was corrupted during copy/paste or merge.

**Examples before fix:**

| Broken | Corrected |
|--------|-----------|
| `feed?delivered` | `feed—delivered` |
| `lifestyle?finished` | `lifestyle—finished` |
| `Premium care?delivered` | `Premium care—delivered` |
| `Bridal Makeup ? Victoria Island` | `Bridal Makeup · Victoria Island` |
| `we?ll confirm` | `we'll confirm` |
| `request?we will reply` | `request—we will reply` |
| `Mon?Fri` | `Mon–Fri` |
| `consistent?clean` | `consistent—clean` |

No mojibake sequences (`â`, `Ã`, ``) were found in project HTML, CSS, or first-party JS after this pass.

---

## Files fixed

| File | Changes |
|------|---------|
| **`index.html`** | Primary cleanup (~30+ strings): about copy, service cards, pricing, testimonials, booking, footer, hours, stylist options, HTML comments |
| **`js/booking.js`** | Comment clarity only: `Map URL ?service=` → `Map URL (?service= query param)` so the `?` is clearly a URL query delimiter, not broken prose |

**Already correct (no edits needed):**

- `about.html`, `service.html`, `contact.html`, `team.html`, `testimonial.html`, `404.html` — punctuation already used `—`, `·`, and proper apostrophes
- `js/main.js`, `js/gallery.js`, `js/veloura-map.js` — no user-facing broken text
- `css/style.css` — no `content:` strings with broken punctuation

**Intentionally unchanged `?` characters:**

- URL query strings: `?service=`, `?text=`, `?pb=`, `?q=`, Google Fonts `&family=`, WhatsApp links
- Legitimate question marks in copy (e.g. “Why book with Veloura?”, “Ready to secure your date?”)

---

## Punctuation replacement rules applied

| Context | Character | Example |
|---------|-----------|---------|
| Sentence / clause break | Em dash `—` | `time—we'll confirm` |
| Service · location (testimonial meta) | Middle dot `·` | `Bridal Makeup · Victoria Island, Lagos` |
| Contractions | Apostrophe `'` | `we'll`, `you'll` |
| Day / time ranges | En dash `–` | `Mon–Fri`, `10:00 AM – 8:00 PM` |
| Stylist role labels | Em dash `—` | `Okonkwo — Hair & Beauty Lead` |
| HTML comments (doc cross-refs) | Em dash `—` | `refinement — see HERO_…` |
| Footer tagline separator | Em dash with spaces | `Studio — Luxury` |

Brand tone (premium, modern, feminine, clean) was preserved; only punctuation and encoding were touched.

---

## UTF-8 confirmation

All seven HTML pages include UTF-8 in `<head>`:

```html
<meta charset="utf-8">
```

Verified in:

- `index.html`
- `about.html`
- `service.html`
- `contact.html`
- `team.html`
- `testimonial.html`
- `404.html`

Files were saved as **UTF-8** (no BOM required). Special characters in copy use literal Unicode (`—`, `·`, `'`, `–`) or HTML entities where already established (e.g. `&rsquo;` in hero label, `&middot;` in trust notes).

---

## Sections verified on homepage (`index.html`)

- **About** — em dash in “feed—delivered” paragraph  
- **Services** — em dashes in card descriptions  
- **Testimonials** — middle dots in `.testimonial-meta`; em dash in body copy  
- **Booking** — `we'll`, `request—we will reply`, em dashes in aside copy  
- **Local contact / hours** — en dashes for days and times  
- **Footer** — `Studio — Luxury`  

---

## Remaining recommendations (optional)

1. **Editor default** — Set your editor to “UTF-8” and avoid re-saving with Windows-1252 or ANSI to prevent `?` regressions.  
2. **Consistency** — Some lines use `'` (ASCII apostrophe) and others `&rsquo;` / curly apostrophe in HTML; both render fine; unify only if you want strict typographic consistency.  
3. **Ellipsis** — A few strings use three periods (`...`); consider `…` (U+2026) in a future copy pass if desired — not required for encoding health.  
4. **Pre-deploy check** — After bulk edits, grep for `[a-z]\?[a-z]` in `*.html` excluding `href=` lines to catch regressions quickly.

---

## Related docs

- `BOOKING_FORM_SUBMISSION_FIX.md` — separate issue where em dashes in **JavaScript** broke ternary operators (must use `?` / `:` in code, not `—` in logic)
- `BRAND_IDENTITY.md` — voice and positioning unchanged by this cleanup

---

*Cleanup completed: May 2026. Scope: text, punctuation, and encoding only.*
