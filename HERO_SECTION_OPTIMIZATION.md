# Homepage Hero Section — Optimization Guide

**Scope:** `index.html` hero only (between `<!-- Hero Start -->` and `<!-- Hero End -->`)  
**Supporting styles:** `css/style.css` — section `/*** Hero Header — Homepage conversion optimization ***/`  
**Implemented:** May 2026  
**Related:** WhatsApp booking uses the same URL as `WHATSAPP_INTEGRATION.md`

---

## Overview

The homepage hero was refocused for a **luxury beauty salon in Nigeria** (Lagos positioning). Generic template copy (“Welcome”, “Beauty Salon Fashion for Women”, placeholder phone/email rows) was replaced with emotionally resonant messaging, **dual conversion CTAs**, and **trust micro-content**—while keeping the existing split layout (copy left, Owl Carousel right), brand colors, and animation classes.

---

## Files Modified

| File | Changes |
|------|---------|
| `index.html` | Hero markup: copy, CTAs, trust list, semantic structure, image `alt` text |
| `css/style.css` | Scoped styles under `.hero-header--premium` (readability panel, CTAs, trust row, responsive layout) |

**Not modified:** About, Services, Team, Footer, Navbar, `js/main.js`, other pages’ heroes (`page-header` blocks).

---

## Design Decisions

### 1. Scoped modifier class: `hero-header--premium`

All new CSS is prefixed with `.hero-header--premium` so:

- Only the homepage hero changes
- Inner pages (`about.html`, etc.) keep their existing `page-header` pattern
- Future rollback is a single class removal

### 2. Readable content panel (`.hero-content-panel`)

| Technique | Purpose |
|-----------|---------|
| Semi-opaque light gradient (`--bs-light` base) | Keeps text readable over `hero-bg.jpg` and busy slider edges |
| Gold left border (desktop) / top border (mobile) | Visual anchor using `--bs-primary` (#BF9456) |
| Soft shadow (desktop) | Separates copy from imagery without a heavy card |

This addresses requirement **#7** (readability over background images) without darkening the whole hero or altering carousel assets.

### 3. Typography hierarchy

| Element | Class | Role |
|---------|-------|------|
| Eyebrow | `.hero-eyebrow` + Dancing Script | Location + positioning (“Lagos · Premium Beauty & Wellness”) |
| Headline | `.hero-title` (single `<h1>`) | Emotional primary message — SEO-friendly one H1 |
| Body | `.hero-lead` | Professional supporting story (Nigerian audience, transformation, certified team) |

**Before:** Two `<h1>` tags (“Welcome” + long headline) — weak SEO and cluttered hierarchy.  
**After:** One `<h1>`, eyebrow as `<p>`.

Headline size uses `clamp(1.75rem, 4.5vw, 3.75rem)` for fluid scaling across viewports.

### 4. Brand colors preserved

- Primary gold: buttons, trust icons, panel accent (`var(--bs-primary)`)
- Dark text on light panel: high contrast for body copy
- WhatsApp CTA: white/dark outline default → official green on hover (recognizable + on-brand gold focus ring)

No changes to `bootstrap.min.css` theme tokens.

---

## Conversion Improvements

### Copywriting (requirements #1–#3)

| Before | After |
|--------|--------|
| “Welcome” | “Lagos · Premium Beauty & Wellness” — local + premium cue |
| “Beauty Salon Fashion for Women” | “Where Your Confidence Is Beautifully Crafted” — emotional, luxury tone |
| Phone/email placeholder rows | Paragraph on calm luxury experience, Nigerian women, certified stylists, visible transformation |

Removes generic HTML Codex/demo feel and speaks to **trust** and **outcome** (confidence, transformation).

### CTA strategy (requirements #4–#5)

| Button | Target | Intent |
|--------|--------|--------|
| **Book Appointment** | `contact.html` | Primary owned conversion path (form / contact page) |
| **Chat on WhatsApp** | `https://wa.me/2348112711466?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.` | Same URL as floating WhatsApp button — consistent booking message |

**Why two CTAs:**

- **Book Appointment** — users who prefer a traditional “official” booking step
- **Chat on WhatsApp** — high-intent, low-friction channel dominant in Nigeria for local businesses

Both are full-width stacked on small screens (`flex: 1 1 100%`) for thumb-friendly taps.

### Trust-building (requirement #9)

Horizontal trust list below CTAs:

| Signal | Icon | Message |
|--------|------|---------|
| Expertise | `fa-award` | Certified Stylists |
| Positioning | `fa-gem` | Premium Beauty Experience |
| Social proof | `fa-heart` | 999+ Satisfied Clients (aligns with About section counter) |

Separated by a subtle gold top border — scans quickly without competing with CTAs.

### Removed friction

- Generic “Call Us / Mail Us” with fake `+123456789` and `info@domain.com` removed from hero (reduced template noise; contact remains in footer and Contact page)

---

## Mobile Optimization (requirements #6, #8, #11)

| Technique | Mobile behavior |
|-----------|-----------------|
| Flex `order` on columns | Carousel **first** (visual hook), copy + CTAs **second** |
| Full-width CTAs | Easier tap targets; no side-by-side squeeze |
| `clamp()` headline | Scales without invalid Bootstrap display utilities |
| Panel top border | Readable block when stacked under images |
| Trust list column layout | Stacks vertically under 576px |
| Spacing utilities | `py-4 py-md-5`, `mb-4 mb-md-5`, `gap-2 gap-sm-3` — consistent vertical rhythm |

### Visual hierarchy on mobile

1. Hero images (carousel)  
2. Eyebrow → Headline → Lead  
3. Book + WhatsApp (full width)  
4. Trust chips (stacked)

---

## HTML Structure (maintainable)

Key blocks: `.hero-header--premium` > `.hero-content-panel` (copy, `.hero-cta-group`, `.hero-trust-list`) + `.hero-header-media` (`.header-carousel`).

Comments in `index.html` mark:

- Conversion actions block
- Trust micro-content block
- Carousel section
- Link to this documentation file

**Maintainability note:** To change WhatsApp number or message, update the hero `href` and the float button on all pages (see `WHATSAPP_INTEGRATION.md`). Consider a shared config file when you add a build step.

---

## Carousel & Accessibility

- Slider structure and Owl Carousel config in `main.js` are **unchanged**
- Added descriptive `alt` text on hero slides for SEO and screen readers

---

## Testing Checklist

- [ ] Desktop: copy panel readable; CTAs side-by-side; trust row wraps cleanly
- [ ] Mobile: image on top; full-width buttons; no overlap with floating WhatsApp / back-to-top
- [ ] “Book Appointment” opens `contact.html`
- [ ] “Chat on WhatsApp” opens WhatsApp with pre-filled message
- [ ] Keyboard: Tab to both CTAs; visible focus states
- [ ] Replace placeholder `2348112711466` before launch

---

## Quick Reference

| Item | Value |
|------|--------|
| Modifier class | `hero-header--premium` |
| Primary CTA | Book Appointment → `contact.html` |
| Secondary CTA | Chat on WhatsApp → same as site-wide float |
| Trust items | Certified Stylists · Premium Beauty Experience · 999+ Satisfied Clients |
| CSS location | `style.css` → `Hero Header — Homepage conversion optimization` |

---

*End of hero optimization guide.*
