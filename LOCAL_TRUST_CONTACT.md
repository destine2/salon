# Local Trust & Contact Section — Implementation Guide

**Feature:** Premium location, contact, and local trust experience  
**Implemented:** May 2026  
**Scope:** Local trust / contact / maps only — no backend, no unrelated redesigns

---

## Overview

A **`#visit`** section gives visitors a credible Lagos salon presence: embedded map, realistic business details, tap-friendly contact links, trust micro-copy, and booking CTAs wired to WhatsApp and the existing booking form.

Placed **after booking** and **before the footer** on the homepage; on **`contact.html`** it replaces the old Pro-version placeholder form (booking remains above it).

---

## Files Modified / Added

| File | Change |
|------|--------|
| `index.html` | New `section#visit.local-contact--premium` after booking |
| `contact.html` | Same section after booking; removed generic contact form block |
| `css/style.css` | `.local-contact--premium` styles |
| `LOCAL_TRUST_CONTACT.md` | This document |

**Not modified:** Hero, services, pricing, gallery, footer content, `js/booking.js`.

---

## Placeholder Business Details (update before launch)

| Field | Current placeholder |
|-------|---------------------|
| **Address** | 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria |
| **Phone** | +234 811 271 1466 (`tel:+2348112711466`) |
| **WhatsApp** | `2348112711466` (see `WHATSAPP_INTEGRATION.md`) |
| **Email** | hello@salonebeauty.ng |
| **Instagram** | @salonelagos |
| **Hours** | Mon–Fri 9:00 AM – 7:00 PM; Sat 10:00 AM – 6:00 PM; Sun by appointment |
| **Map embed** | Lekki Phase 1 area (replace with your exact Google pin) |

---

## Section Structure

```
#visit.local-contact--premium
├── Header (eyebrow, H2, lead)
├── Trust bar (4 items)
└── Row
     ├── Map column (iframe + “Open in Maps” overlay)
     └── Panel column
          ├── Location description
          ├── Contact details (location, hours, phone, WhatsApp, email)
          ├── Trust indicators (Instagram, team, care, booking)
          └── CTAs (Visit / WhatsApp / Reserve)
```

---

## Google Maps Integration

### Embedded map

- `<iframe class="local-contact-map">` with Google **Embed** URL (placeholder: Lekki Phase 1).
- `loading="lazy"` for performance.
- `title` attribute for screen readers.

### Single source of truth (`js/veloura-map.js`)

Map embed and all “Open in Maps” / address links on **`index.html`** and **`contact.html`** are synced from:

- `VelouraMapConfig.embedSrc` — Google Maps iframe `src`
- `VelouraMapConfig.openHref` — `maps.google.com/?q=…` for Visit CTA, overlay, and location row

On load, `veloura-map.js` applies these to `.local-contact-map` and related links so both pages stay identical.

### Replace with your salon pin

1. Open [Google Maps](https://maps.google.com) → find your salon.
2. **Share** → **Embed a map** → copy the embed URL.
3. Update **`embedSrc`** and **`openHref`** in `js/veloura-map.js` only (optional: mirror in both HTML `iframe src` for no-JS fallback).
4. Reload index and contact pages to verify embed + links match.

### Tap-to-map (mobile)

- Address line and **Visit Our Studio** use `VelouraMapConfig.openHref` (14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria).
- Full-width **Open in Maps** overlay on the embed for thumb-friendly navigation.

---

## Mobile Optimization Decisions

| Feature | Implementation |
|---------|----------------|
| **Tap-to-call** | `tel:+2348112711466` on phone row + large touch padding (`.local-contact-tap`) |
| **Tap-to-email** | `mailto:hello@salonebeauty.ng` |
| **Tap-to-WhatsApp** | `wa.me/2348112711466` on detail row + CTA button |
| **Tap-to-map** | Address link + map overlay + Visit CTA |
| **Layout** | Contact panel **above** map on mobile (`order-lg-*`); map min-height 320px |
| **CTAs** | Full-width stacked buttons |
| **Trust grid** | 2×2 on phone, 4 columns on tablet+ |

---

## CTA Decisions

| Button | Action | Strategy |
|--------|--------|----------|
| **Visit Our Studio** | Opens Google Maps directions | Reduces “where are you?” friction |
| **Chat on WhatsApp** | `wa.me` with booking-friendly prefill | Matches Nigerian booking habit |
| **Reserve Your Appointment** | `#booking` on same page | Hands off to structured booking form |

On **contact.html**, `#booking` scrolls to the form above; on **index.html**, same.

---

## Local Trust Strategy

| Element | Purpose |
|---------|---------|
| **Lekki / VI copy** | Local realism for Lagos audience |
| **Full hours** | Legitimacy vs vague “open daily” |
| **Real phone + WhatsApp** | Same number site-wide builds consistency |
| **Trust bar** | Convenient location, easy booking, fast WhatsApp, luxury experience |
| **Indicators** | Instagram activity, professional team, premium care, flexible booking |
| **Map + address** | Visual + textual confirmation of a real place |

---

## Conversion Psychology Decisions

1. **Contact after booking on page** — Users who need directions or reassurance find answers without leaving the conversion path.
2. **Multiple contact channels** — Phone-averse clients use WhatsApp; map-first clients use Visit.
3. **No payment or heavy forms** — Low cognitive load after pricing/booking sections.
4. **“Studio” language** — Premium positioning vs generic “shop.”
5. **Sunday by appointment** — Signals exclusivity and managed capacity.

---

## Styling Notes

- Modifier: `.local-contact--premium`
- Gold accents (`#BF9456`), Playfair headings, cream/white panels
- Map border matches other premium cards
- WhatsApp green on icon/CTA only (brand-consistent with float button)

---

## Maintenance Checklist

- [ ] Replace map `iframe src` with your embed code
- [ ] Confirm address in map links matches embed
- [ ] Verify `tel:` and `wa.me` numbers
- [ ] Set real email and test `mailto:`
- [ ] Update Instagram handle URL
- [ ] Adjust business hours if needed
- [ ] Sync any footer address later (footer not changed in this task)

---

## Related Documentation

- `BOOKING_SYSTEM.md` — `#booking` form
- `WHATSAPP_INTEGRATION.md` — phone number format
- `PRICING_SECTION.md` — upstream pricing transparency
