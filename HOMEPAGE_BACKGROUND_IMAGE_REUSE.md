# Homepage Background Image Reuse

Minimal CSS-only update: reuse the inner-page banner photograph as a **subtle background layer** behind the existing homepage hero. No HTML, copy, carousel, or layout changes.

---

## Image reused

| Property | Value |
|----------|--------|
| **File** | `img/page-header.jpg` |
| **Same as** | Inner page banners (`.page-banner--inner .page-banner__bg` in `css/style.css`) |
| **Used on** | About, Services, Contact, Team, Testimonials, 404 headers |

This is the salon/studio image applied with `background-size: cover` on inner pages.

---

## Where it was applied

| Location | Selector |
|----------|----------|
| **Homepage only** | `.hero-header--editorial` on `index.html` |
| **File** | `css/style.css` (block after editorial hero comment) |

Inner pages, other heroes, and non-editorial `.hero-header` blocks are **not** changed.

---

## How it was layered behind the current hero

The homepage hero markup is **unchanged**. Layering is done with pseudo-elements on `.hero-header--editorial`:

```
┌─────────────────────────────────────────────────┐
│  .hero-header--editorial (position: relative)   │
│  ┌───────────────────────────────────────────┐│
│  │ ::before — page-header.jpg @ 20% opacity  ││  ← background photo
│  └───────────────────────────────────────────┘│
│  ┌───────────────────────────────────────────┐│
│  │ ::after — cream gradient wash             ││  ← soft veil
│  └───────────────────────────────────────────┘│
│  ┌───────────────────────────────────────────┐│
│  │ > .container (z-index: 1)                 ││  ← existing hero
│  │   copy panel + carousel (unchanged)       ││
│  └───────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

1. **`::before`** — `background: url(../img/page-header.jpg) center / cover`, `opacity: 0.2`, full bleed behind content.
2. **`::after`** — Left-to-right **cream gradient** (`--bs-light` tones) so the photo reads as atmosphere, not a second focal image.
3. **Direct child `.container`** — `position: relative; z-index: 1` so text, CTAs, and the carousel stay on top.

The main hero carousel images (`hero-slider-1.jpg`, etc.) are untouched and still render in `.hero-media-frame` as before.

---

## How readability was preserved

- **Low photo opacity** (20%) keeps the banner image atmospheric.
- **Gradient overlay** is stronger on the **left** (copy column) and lighter toward the **right** (carousel), matching the two-column layout.
- **Existing `.hero-content-panel`** glass gradient, gold accent border, and dark lead text are unchanged and still provide local contrast.
- **`pointer-events: none`** on pseudo-elements so links and buttons behave as before.

To adjust strength later, edit in `css/style.css`:

- `opacity` on `.hero-header--editorial::before` (e.g. `0.15`–`0.25`)
- Alpha values on `.hero-header--editorial::after` gradient stops

---

## What was not changed

- Homepage hero HTML structure
- Headline, label, lead, CTAs, social proof copy
- Hero carousel images or markup
- Navbar, booking, gallery, team, footer, or inner page banners
- Homepage layout or grid

---

*Veloura Beauty Studio — homepage background image reuse.*
