# Homepage Hero Refinement Fix

Targeted fixes for the **index.html** editorial hero (`.hero-header--editorial`). Layout, copy, CTAs, slider images, and reused background image are unchanged—only behavior and visual balance were refined.

**Files touched:** `css/style.css`, `js/main.js`

---

## What caused the slider controls to shift downward

After the hero column layout was refined, these rules made the carousel **as tall as the entire hero row** (including the copy column):

- `.hero-header--editorial .hero-media-frame { height: 100%; }`
- `.hero-header--editorial .header-carousel { height: 100%; }`
- On desktop: `.hero-header--editorial .hero-header-media { min-height: 100%; }` with `align-items-stretch` on the row

Owl Carousel appends `.owl-nav` inside `.header-carousel` with **`position: absolute; bottom: 0`**. When the carousel box stretched to the full column height, the arrows sat at the **bottom of the hero section**, not at the bottom of the **slider images**.

---

## How the controls were repositioned

| Change | Purpose |
|--------|---------|
| `.hero-media-frame` → `height: auto` | Frame matches image height |
| `.header-carousel` → `height: auto; position: relative` | Nav anchors to the slider box |
| Editorial override: `.header-carousel .owl-nav { bottom: 1.25rem; z-index: 6 }` | Controls sit on the image with comfortable inset |
| Desktop: `.hero-header-media` uses `display: flex; align-items: center` | Tall copy column no longer stretches the slider |
| Mobile: `bottom: 0.75rem`, 48×48px buttons | Touch-friendly, still on the image |

Global `.header-carousel .owl-nav` rules remain for any legacy use; editorial selectors win on the homepage.

---

## How autoplay was restored

`js/main.js` already set `autoplay: true`, but autoplay can fail if Owl initializes before images/layout are final (zero-height stage).

**Updates:**

1. Explicit **`autoplayTimeout: 5000`** (~5s between slides) and **`autoplaySpeed: 1000`** for transitions.
2. **`autoplayHoverPause: true`** so users can read a slide on hover without losing manual nav.
3. On **`window` `load`**: `refresh.owl.carousel`, then `stop.owl.autoplay` / `play.owl.autoplay` to restart the timer after images load.

Manual prev/next arrows are unchanged.

---

## How the background blur/overlay was reduced

The reused **`img/page-header.jpg`** layer (see `HOMEPAGE_BACKGROUND_IMAGE_REUSE.md`) was reading too soft because of **stacked** effects:

| Layer | Before | After |
|-------|--------|--------|
| `::before` photo opacity | `0.2` | `0.34` (clearer photo) |
| `::after` cream gradient | up to `0.9` alpha | up to `0.68` alpha (less wash) |
| `.hero-content-panel` backdrop blur | `6px` | `3px` (less muddy glass) |

The image stays **subtle** and does not compete with the carousel or headline; the left column still has a light glass panel for text contrast.

---

## How readability was preserved

- Copy panel **white/cream gradient** and gold accent border are unchanged.
- Right side gradient on `::after` is lighter so the photo adds atmosphere without gray fog.
- Title, lead, and CTAs keep existing colors and sizes; no copy changes.

---

## Mobile responsiveness

- Slider height still driven by `min-height` / `max-height` on images (260–340px mobile).
- Nav controls stay **inside the image area** with slightly smaller buttons.
- Autoplay refresh on `load` applies on all viewports.
- Background overlay values are global; photo remains soft, not harsh, on small screens.

---

## What was not changed

- Hero HTML structure, eyebrow, headline, lead, CTAs, trust line
- `hero-slider-1.jpg` … `hero-slider-3.jpg`
- Homepage grid / two-column layout
- Inner page banners, booking, gallery, team, footer

---

*Veloura Beauty Studio — homepage hero refinement.*
