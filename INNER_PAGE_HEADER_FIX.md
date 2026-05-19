# Inner Page Header / Banner Fix

Documentation for the Veloura Beauty Studio **inner page banner** update on all non-homepage pages.

**Affected files:** `about.html`, `service.html`, `contact.html`, `team.html`, `testimonial.html`, `404.html`  
**Styles:** `css/style.css` (`.page-banner--inner` block)  
**Homepage:** Unchanged (`hero-header` on `index.html` is not modified)

---

## What was wrong (previous display)

Inner pages used a shared **`.page-header`** block with these issues:

1. **`background-size: contain`** on `img/page-header.jpg` — the salon image appeared as a **small centered graphic** with large **cream/white gaps** (`bg-light` on the wrapper made this worse).
2. **Title and breadcrumb sat in the same shallow box** as the background, so copy felt like it was **floating over** a postage-stamp image instead of a real banner.
3. **`display-1`** sizing was heavy and inconsistent with Veloura’s editorial typography.
4. **Redundant breadcrumbs** — e.g. `Home / Our Team / Our Team`, `Home / Contact / Contact`, and **duplicate Home** on `404.html`.
5. **Extra vertical padding** (`py-5` on outer and inner containers) added awkward whitespace without a clear visual frame.

---

## What was changed

### HTML (all six inner pages)

Replaced the old `container-fluid bg-light page-header` block with a semantic banner:

```html
<section class="page-banner page-banner--inner" aria-labelledby="page-banner-title">
  <div class="page-banner__bg" role="img" aria-label="..."></div>
  <div class="page-banner__overlay" aria-hidden="true"></div>
  <div class="container page-banner__content text-center">
    <h1 id="page-banner-title" class="page-banner__title">...</h1>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb page-banner__breadcrumb">...</ol>
    </nav>
  </div>
</section>
```
- Removed `bg-light`, legacy `page-header py-5`, and `display-1`.
- **Breadcrumbs simplified** to `Home` + current page only (no duplicate middle link).
- **Page titles** aligned with content (e.g. Services page: **Our Services**).

### CSS (`css/style.css`)

New shared block: **`.page-banner--inner`** (see comment `INNER_PAGE_HEADER_FIX.md`).

Legacy **`.page-header`** background rules removed so old class names do not reintroduce `contain` sizing.

---

## How the new banner structure works

```
┌──────────────────────────────────────────────┐
│  .page-banner--inner (min-height, flex)      │
│  ┌────────────────────────────────────────┐  │
│  │ .page-banner__bg (absolute, cover)     │  │
│  └────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────┐  │
│  │ .page-banner__overlay (gradient)       │  │
│  └────────────────────────────────────────┘  │
│         .page-banner__content (z-index: 2)   │
│              H1.page-banner__title           │
│              breadcrumb                      │
└──────────────────────────────────────────────┘
```

| Layer | Role |
|--------|------|
| `__bg` | Full-bleed background image |
| `__overlay` | Dark + subtle gold radial tint for readability |
| `__content` | Centered title and breadcrumb |

---

## How image cropping is handled

- Image path: **`img/page-header.jpg`** (referenced from CSS).
- **`.page-banner__bg`** uses `background: url(...) center center / **cover** no-repeat`.
- Section uses **`min-height: clamp(220px, 38vh, 360px)`** so the banner has intentional height on desktop and mobile.
- Slight **`scale(1.02)`** on the background reduces edge gaps; disabled under `prefers-reduced-motion`.

To bias crop (e.g. show more ceiling or floor), change `background-position` on `.page-banner--inner .page-banner__bg` (e.g. `center 30%`).

---

## How overlay readability is handled

- **Linear gradient** darkens top → bottom (`rgba(37,37,37,0.45)` → `0.68`).
- **`::after` pseudo** adds a soft **gold radial glow** at center-top (`rgba(191, 148, 86, 0.12)`) for brand warmth.
- **Title:** white, Playfair Display, `text-shadow`, responsive `clamp()` font size.
- **Breadcrumb:** uppercase, light text; **active item** and link hover use **`var(--bs-primary)`** (Veloura gold).

---

## Mobile responsiveness

| Concern | Approach |
|---------|----------|
| Banner height | `clamp(200px, 32vh, 280px)` on screens ≤767px |
| Title scale | `clamp(1.85rem, 5vw, 3.25rem)` |
| Breadcrumb overflow | `flex-wrap: wrap`, smaller font on mobile |
| Bottom spacing | `margin-bottom: 2.25rem` on small screens |
| Image crop | Same `cover` behavior; no white letterboxing |

---

## Breadcrumb map (after fix)

| Page | Title | Breadcrumb |
|------|--------|------------|
| `about.html` | About Us | Home → About Us |
| `service.html` | Our Services | Home → Our Services |
| `contact.html` | Contact | Home → Contact |
| `team.html` | Our Team | Home → Our Team |
| `testimonial.html` | Client Stories | Home → Client Stories |
| `404.html` | Page Not Found | Home → 404 Error |

---

## Replacing the page header image later

1. Replace **`img/page-header.jpg`** with a new landscape image (recommended **1920×600** or wider, salon interior or beauty atmosphere).
2. Keep file name the same, or update the URL in:

   ```css
   .page-banner--inner .page-banner__bg {
       background: url(../img/page-header.jpg) center center / cover no-repeat;
   }
   ```

3. Adjust **`background-position`** if faces or focal point need reframing.
4. Tweak overlay opacity in `.page-banner__overlay` if the new photo is darker or lighter.

Per-page custom images (optional future): add a modifier class (e.g. `.page-banner--contact`) with a different `background-image` on `__bg` only for that page.

---

## What was not changed

- Homepage hero (`index.html` — `hero-header--editorial`)
- Pricing, booking, gallery, team cards, footer, navbar
- No new features or site-wide redesign

---

*Veloura Beauty Studio — Inner page header fix.*
