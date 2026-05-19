# WhatsApp Booking Float — Integration Guide

**Feature:** Premium floating WhatsApp button for appointment inquiries  
**Implemented:** May 2026  
**Scope:** Conversion layer only — no unrelated layout or design changes

---

## Overview

A fixed **WhatsApp booking button** appears on every page in the bottom-right area of the viewport. Tapping or clicking it opens WhatsApp (app or web) with a **pre-filled message** so visitors can start a booking conversation in one step.

The control is implemented as:

- **One reusable CSS block** in `css/style.css` (class `.whatsapp-float`)
- **One identical HTML snippet** copied into each page (before the existing Back-to-Top control)
- **No JavaScript** — the link is a standard `<a>` element (reliable, accessible, works offline in markup)

---

## Files Modified

| File | Change |
|------|--------|
| `css/style.css` | New section `/*** WhatsApp Booking Float ***/` — layout, motion, hover, focus, responsive rules |
| `index.html` | WhatsApp float markup inserted above Back-to-Top |
| `about.html` | Same |
| `service.html` | Same |
| `contact.html` | Same |
| `team.html` | Same |
| `testimonial.html` | Same |
| `404.html` | Same |

**Files not modified:** `js/main.js`, Bootstrap, images, navbar, footer, or page content sections.

---

## HTML Structure (per page)

Each page includes this block immediately **before** the Back-to-Top button:

```html
<!-- WhatsApp Booking Float Start — see WHATSAPP_INTEGRATION.md to update phone number -->
<a href="https://wa.me/2348112711466?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
    class="whatsapp-float" target="_blank" rel="noopener noreferrer"
    aria-label="Book an appointment on WhatsApp: opens WhatsApp chat"
    title="Book on WhatsApp">
    <i class="fab fa-whatsapp" aria-hidden="true"></i>
</a>
<!-- WhatsApp Booking Float End -->
```

### URL breakdown

| Part | Value |
|------|--------|
| Base | `https://wa.me/2348112711466` |
| Query | `?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.` |
| Decoded message | `Hello, I would like to book an appointment.` |

**Phone format:** Country code + number only — **no** `+`, spaces, or dashes (e.g. Nigeria `234` + `8000000000` → `2348000000000`).

### Link attributes

| Attribute | Purpose |
|-----------|---------|
| `target="_blank"` | Opens WhatsApp in a new tab when using WhatsApp Web on desktop |
| `rel="noopener noreferrer"` | Security best practice for external targets |
| `aria-label` | Screen readers announce purpose without visible text |
| `title` | Tooltip on hover for sighted users |
| `aria-hidden="true"` on icon | Avoids duplicate announcement of the icon |

---

## Styling Decisions

The float is styled to feel **premium** while staying recognizable as WhatsApp.

### Brand alignment with Salone template

| Element | Choice | Rationale |
|---------|--------|-----------|
| Shape | Circle (`border-radius: 50%`) | Matches template’s square/round button language |
| Accent | `2px solid var(--bs-primary)` (`#BF9456`) | Ties to salon gold accent without replacing WhatsApp green |
| Shadow | Layered green + neutral shadow | Depth similar to template buttons; luxury “lifted” feel |
| Icon | Font Awesome `fab fa-whatsapp` | Already loaded site-wide — no extra assets |

### Color and contrast

- **Background:** WhatsApp green gradient (`#25D366` → `#1da851`)
- **Icon:** White on green — exceeds WCAG contrast for the icon glyph
- **Focus ring:** `3px solid var(--bs-dark)` + gold glow on hover — visible keyboard focus

### Motion

| Effect | Behavior |
|--------|----------|
| `whatsapp-float-bob` | Gentle 7px vertical float every 3s |
| Hover / focus | Stops bobbing; lifts `-4px` and scales `1.06`; stronger shadow + gold ring |
| `prefers-reduced-motion: reduce` | Disables animation and hover transform |

---

## Responsiveness

Layout uses **fixed positioning** with breakpoint-specific offsets.

### Desktop (≥ 768px)

| Property | Value |
|----------|--------|
| Position | `bottom: 110px`, `right: 45px` |
| Size | `56px` × `56px` |
| Icon | `1.75rem` |

### Mobile (< 768px)

| Property | Value |
|----------|--------|
| Position | `bottom: 100px`, `right: 20px` |
| Size | `52px` × `52px` |
| Icon | `1.6rem` |

### Avoiding conflict with Back-to-Top

| Control | `bottom` | `right` | `z-index` |
|---------|----------|---------|-----------|
| **WhatsApp** | `110px` (desktop) / `100px` (mobile) | `45px` / `20px` | `98` |
| **Back-to-Top** | `45px` | `45px` | `99` |

WhatsApp sits **vertically above** the Back-to-Top button (48px tall + gap). Back-to-Top remains on top in stacking order when both are visible. They do not overlap on standard viewports.

```
┌─────────────────────────────┐
│                        [WA] │  ← WhatsApp (always visible)
│                        [↑]  │  ← Back-to-Top (after scroll)
└─────────────────────────────┘
```

---

## Accessibility

| Requirement | Implementation |
|-------------|----------------|
| **aria-label** | Descriptive label on the `<a>` element |
| **Keyboard** | Native focusable link; Tab to focus, Enter to activate |
| **Focus visible** | `:focus-visible` outline + enhanced shadow |
| **Contrast** | White icon on WhatsApp green; dark focus outline |
| **Motion sensitivity** | Respects `prefers-reduced-motion` |
| **Decorative icon** | `aria-hidden="true"` on `<i>` |

---

## How to Replace the Placeholder Phone Number

The current number **`2348112711466`** is a **placeholder** (Nigeria country code `234` + sample digits). Replace it on **every HTML page** before going live.

### Step 1 — Format your business number

1. Take your full international number, e.g. `+234 801 234 5678`
2. Remove `+`, spaces, and leading zeros after country code if applicable
3. Result: `2348012345678`

### Step 2 — Update the `href` on all 7 pages

Find:

```text
https://wa.me/2348112711466?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.
```

Replace `2348112711466` with your digits only:

```text
https://wa.me/2348012345678?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.
```

**Pages to update:**

- `index.html`
- `about.html`
- `service.html`
- `contact.html`
- `team.html`
- `testimonial.html`
- `404.html`

### Step 3 — Optional: change the pre-filled message

Edit the `text=` query parameter. It must be **URL-encoded**.

| Plain text | Encoded `text=` value |
|------------|------------------------|
| `Hello, I would like to book an appointment.` | `Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.` |

**Encode online** or use JavaScript:

```javascript
encodeURIComponent("Hello, I would like to book a haircut for Saturday.")
```

Full URL pattern:

```text
https://wa.me/{COUNTRY}{NUMBER}?text={URL_ENCODED_MESSAGE}
```

### Step 4 — Test

1. Open the site on a phone with WhatsApp installed — link should open the app with the message ready.
2. On desktop — link should open [web.whatsapp.com](https://web.whatsapp.com) or prompt to install the app.
3. Tab to the button and press Enter — same behavior.
4. Scroll the page — confirm WhatsApp and Back-to-Top do not overlap.

---

## Maintenance Tips

### Single source of truth (future improvement)

The same HTML snippet is on 7 pages. When you adopt a build tool or server includes, move the block to one partial, e.g. `partials/whatsapp-float.html`, and include it site-wide to avoid drift.

### CSS-only changes

All visual updates should go in `css/style.css` under `/*** WhatsApp Booking Float ***/` — no need to touch HTML unless the URL or label text changes.

---

## Quick Reference

| Item | Value |
|------|--------|
| CSS class | `.whatsapp-float` |
| Placeholder phone | `2348112711466` |
| Default message | Hello, I would like to book an appointment. |
| Documentation | This file (`WHATSAPP_INTEGRATION.md`) |

---

*End of WhatsApp integration guide.*
