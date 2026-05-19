# Services Section — Optimization Guide

**Scope:** Services block only (`<!-- Service Start -->` … `<!-- Service End -->`)  
**Pages:** `index.html` (homepage) and `service.html` (dedicated services page)  
**Styles:** `css/style.css` — section `/*** Service — Premium conversion optimization ***/`  
**Modifier class:** `.service--premium`  
**Implemented:** May 2026  
**Related:** `WHATSAPP_INTEGRATION.md`, `HERO_SECTION_OPTIMIZATION.md`

---

## Overview

The services grid was upgraded from a generic HTML Codex demo (Lorem-style copy, empty “Read More” links, no pricing) into a **conversion-ready, Lagos-focused luxury menu** with realistic descriptions, **Naira pricing**, trust signals, and **three clear actions per service**.

The same markup appears on **both** `index.html` and `service.html` so the experience stays consistent.

---

## Files Modified

| File | Change |
|------|--------|
| `index.html` | Services section replaced with premium cards and CTAs |
| `service.html` | Identical services section (kept in sync) |
| `css/style.css` | New `.service--premium` rules (cards, CTAs, trust bar, mobile, hover) |

**Not modified:** Hero, About, Team, Testimonials, Navbar, Footer, `js/main.js`, Owl Carousel.

---

## Conversion Improvements

### 1. Copywriting (requirements #1–#2)

| Before | After |
|--------|--------|
| “Clita erat ipsum…” placeholder | Unique, benefit-led descriptions per treatment |
| Generic titles (“Haircut”, “Makeup”) | Premium names (“Signature Haircut & Styling”, “Bridal & Event Makeup”) |
| No local context | References Lagos, owambe, Nigerian professionals where natural |

Tone: **elegant, calm, customer-focused** — emphasizes consultation, finish quality, and how the client will feel.

### 2. Pricing strategy (requirement #3)

Each card shows **“Starting from ₦X,XXX”** using the Naira entity (`&#8358;`):

| Service | Starting price (NGN) | Rationale |
|---------|----------------------|-----------|
| Signature Haircut & Styling | ₦8,500 | Accessible entry for luxury positioning |
| Bridal & Event Makeup | ₦15,000 | Higher value; event/bridal tier |
| Luxury Manicure | ₦6,500 | Competitive nail entry point |
| Spa Pedicure | ₦7,500 | Slightly above manicure (more time/products) |
| Therapeutic Massage | ₦12,000 | Wellness mid-tier |
| Advanced Skin Care & Facial | ₦18,000 | Premium facial anchor |

**Strategy decisions:**

- **“Starting from”** sets expectations without locking final quotes (length, products, bridal packages vary).
- Prices are **indicative for Lagos luxury salons** — update in HTML when your real menu is finalized.
- Displayed in **NGN** for immediate trust with Nigerian visitors (no USD confusion).

### 3. CTA strategy (requirements #5–#6)

Each service card includes **three stacked actions**:

| Button | Destination | User intent |
|--------|-------------|-------------|
| **Book This Service** | `contact.html` | Formal booking / contact form path |
| **Chat About This Service** | `wa.me/2348112711466` + service-specific `text=` | Questions, availability, custom requests |
| **Reserve Your Slot** | `wa.me/2348112711466` + reserve-specific `text=` | High-intent scheduling via WhatsApp |

**WhatsApp pre-fill examples:**

- Chat: `Hello, I would like to chat about [Service Name] at Salone.`
- Reserve: `Hello, I would like to reserve a slot for [Service Name].`

Uses the **same placeholder number** as the floating WhatsApp button (`WHATSAPP_INTEGRATION.md`).

**Visual integration:**

- **Book** — gold primary (`--bs-primary`), dark text; hover inverts to dark fill (matches template buttons).
- **Chat** — dark outline → WhatsApp green on hover (matches hero WhatsApp CTA pattern).
- **Reserve** — subtle gold border; light hover fill (tertiary, non-competing).

### 4. Trust-building (requirements #9–#10)

**Section header bar** (all cards):

- Premium Products  
- Hygienic Tools  
- Experienced Stylists  

**Per-card notes** (varied, scannable):

- e.g. “Experienced stylists · Precision finish”, “Premium brands · Camera-ready finish”, “Hygienic tools · Long-lasting shine”

Reinforces hygiene and expertise without repeating the same line six times.

### 5. Removed friction

- Empty `href=""` **Read More** links removed  
- Meaningful `alt` text on service icons  
- Second duplicate `<h1>` in section header changed to **`<h2>`** for better heading hierarchy on pages that already have a hero `<h1>`

---

## Visual Hierarchy Improvements (requirement #8)

| Layer | Element | Treatment |
|-------|---------|-----------|
| 1 | Section eyebrow | Dancing Script, primary color |
| 2 | Section title | Playfair Display, `clamp()` sizing |
| 3 | Section lead | Muted body, max-width for readability |
| 4 | Trust bar | Icons + short labels, centered |
| 5 | Card title | Playfair, 1.3rem |
| 6 | Price | Primary gold, bold amount |
| 7 | Description | 0.92rem, relaxed line-height |
| 8 | Trust note | Smallest text, secondary color |
| 9 | CTAs | Full-width stack, anchored with `margin-top: auto` on flex column |

Cards use **`d-flex flex-column`** so CTAs align to the **bottom** even when descriptions differ in length — cleaner grid on desktop.

**Alignment:** Cards are **left-aligned** for easier scanning; section intro remains **centered**.

---

## Mobile Responsiveness (requirements #7, #11)

| Technique | Effect |
|-----------|--------|
| `row g-4 g-lg-0` | Gutters between cards on mobile/tablet; tight grid borders on large screens |
| Larger tap targets on mobile | CTA font size bumps to `0.78rem`, extra padding under 992px |
| Card shadows on mobile | Borders removed; soft shadow (extends existing `.service` mobile pattern) |
| `p-4 p-lg-4` | Consistent inner padding across breakpoints |
| Full-width CTAs | No side-by-side squeeze; thumb-friendly |
| `prefers-reduced-motion` | Disables card lift transform; keeps shadow transition |

---

## Hover & Interaction (requirement #8)

```css
.service--premium .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 42px rgba(37, 37, 37, 0.1);
}
```

Subtle lift signals interactivity without breaking the luxury feel. Button hovers use existing brand colors and WhatsApp green for chat.

---

## HTML Structure (maintainable)

```text
.service.service--premium
  └── .service-section-header (intro + .service-trust-bar)
  └── .row.g-4.g-lg-0
        └── .service-card (×6)
              ├── img + .service-card-title
              ├── .service-price
              ├── .service-card-desc
              ├── .service-trust-note
              └── .service-cta-group (3 links)
```

**Comments in HTML** mark:

- Section start (links to this doc)  
- Section-level trust  
- Each service card by name  

**Maintenance:** When adding a service, duplicate one card block and update: title, price, description, trust note, three URLs’ `text=` parameters, and `alt` text. Consider a build-step partial later to avoid dual-file edits.

---

## Brand & Aesthetic (requirement #11)

- No changes to `bootstrap.min.css` theme tokens  
- Gold primary, light backgrounds, Playfair + Dancing Script preserved  
- Grid border utilities on large screens unchanged (visual continuity with original template)  
- Icon PNGs unchanged (no new image assets)

---

## How to Update Prices or WhatsApp Number

1. **Prices:** Edit the `<strong>&#8358;…</strong>` value inside each `.service-price` in `index.html` and `service.html`.  
2. **WhatsApp:** Replace `2348112711466` in every `wa.me` link (or search project-wide). Re-encode `text=` if you change messages — use `encodeURIComponent()` in browser devtools.  
3. **Book path:** Point `service-cta-book` links to your booking URL when ready (Calendly, Fresha, etc.).

---

## Testing Checklist

- [ ] Homepage and Services page show identical grids  
- [ ] All six cards: readable copy, visible prices, three working CTAs  
- [ ] Mobile: cards stack with spacing; CTAs full width  
- [ ] Desktop: hover lift; grid borders intact  
- [ ] WhatsApp opens with correct service name in message  
- [ ] Book links open `contact.html`  
- [ ] Replace placeholder phone before launch  

---

## Quick Reference

| Item | Value |
|------|--------|
| CSS scope | `.service--premium` |
| Pages | `index.html`, `service.html` |
| CTAs per card | Book · Chat (WhatsApp) · Reserve (WhatsApp) |
| Currency | Nigerian Naira (₦) |
| Documentation | This file |

---

*End of services section optimization guide.*
