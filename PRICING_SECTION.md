# Premium Pricing Section — Implementation Guide

**Feature:** Luxury pricing cards with booking reinforcement  
**Implemented:** May 2026  
**Scope:** Pricing experience on homepage only — no payment gateway, no unrelated section redesigns

---

## Overview

A dedicated **`#pricing`** section sits on the homepage **after Services** and **before the Transform Gallery**. It answers “what will this cost?” early, reduces sticker-shock hesitation with **“Starting From”** framing, and routes high-intent visitors to the **booking form** or **WhatsApp** using the same service slugs as `js/booking.js`.

---

## Files Modified / Added

| File | Change |
|------|--------|
| `index.html` | New `section#pricing.pricing--premium` with 5 pricing cards + footer CTA |
| `css/style.css` | `.pricing--premium` styles (cards, badges, CTAs, hover, mobile) |
| `PRICING_SECTION.md` | This document |

**Not modified:** `js/booking.js` (already supports `?service=` prefill), other HTML pages, footer, navbar.

---

## Section Structure

```
#pricing.pricing--premium
├── Header (eyebrow, H2, lead)
├── Trust bar (4 micro-copy items)
├── .pricing-grid (5 cards)
│    └── .pricing-card [data-pricing-service]
│         ├── Badge (Premium Package | Signature Experience)
│         ├── Title + Starting From price
│         ├── Description + includes list
│         └── 3 CTAs
├── Disclaimer (consultation confirms final quote)
└── Footer CTA → #booking
```

### Packages & starting prices (NGN)

| Service | Badge | Starting From |
|---------|--------|----------------|
| Bridal Glam Package | Premium Package | ₦85,000 |
| Frontal Install | Signature Experience | ₦45,000 |
| Signature Nails | Signature Experience | ₦12,000 |
| Luxury Facial | Premium Package | ₦28,000 |
| Event Makeup | Signature Experience | ₦35,000 |

Prices are **marketing anchors**—adjust in HTML when your menu changes. Disclaimer states final quotes follow consultation.

---

## CTA Strategy

| Button | Destination | Purpose |
|--------|-------------|---------|
| **Book This Package** | `?service={slug}#booking` | Highest intent — opens booking form with service pre-selected |
| **Reserve This Look** | Same as above | Emotional, look-focused wording for gallery-minded clients |
| **Chat About Pricing** | `wa.me/2348112711466?text=…` | Low-commitment pricing questions (Nigeria WhatsApp norm) |

### Booking integration

- Service slugs match booking `<option value>` and `SERVICE_SLUG_MAP` in `js/booking.js`:
  - `bridal-glam`, `frontal-install`, `signature-nails`, `luxury-facial`, `event-makeup`
- Example: `index.html?service=bridal-glam#booking` → scrolls to form + selects Bridal Glam
- Section footer **Reserve Your Appointment** → `#booking` (no prefill)

### WhatsApp integration

- **Chat About Pricing** uses service-specific `text=` (encoded in HTML)
- Phone: **`2348112711466`** (same as float button and `BOOKING_CONFIG`)

---

## Pricing Psychology Decisions

| Technique | Implementation | Why |
|-----------|----------------|-----|
| **“Starting From”** | `.pricing-amount` uppercase label + large Naira figure | Softens fixed-price anxiety; room for add-ons |
| **Premium / Signature badges** | Tier labels without harsh “Basic/Pro” | Signals luxury tiers without cheapening lower services |
| **Featured bridal card** | `.pricing-card--featured` + “Most Booked” ribbon | Social proof on highest-value package |
| **Includes checklist** | 3 bullets per card | Justifies price with tangible value |
| **Disclaimer** | Below grid | Honest transparency; sets expectation for consultation quote |
| **No payment on page** | CTAs → book or chat only | Reduces abandonment from premature paywall |

---

## Booking Reinforcement Strategy

1. **Services** → broad treatment overview  
2. **Pricing** → transparent anchors + package CTAs  
3. **Gallery** → visual proof  
4. **Booking** → structured WhatsApp form  

Pricing sits **before** social proof so visitors who care about cost get answers **before** scrolling to transformations. Dual CTAs (**Book** + **Reserve**) repeat the same deep link intentionally—different motivations, same low-friction path.

---

## Trust-Building Decisions

| Element | Role |
|---------|------|
| Section lead | “Final quotes confirmed during consultation” |
| Trust bar | Premium products, consultation, luxury care, expert stylists |
| Per-card includes | Specific deliverables (consultation, products, aftercare) |
| Disclaimer | Custom add-ons / bridal parties quoted personally |
| Brand-consistent gold + Playfair | Reinforces premium salon positioning |

---

## Mobile Optimization Decisions

| Decision | Rationale |
|----------|-----------|
| **2×2 trust grid on small screens** | Four badges readable without horizontal scroll |
| **Single-column cards (`col-md-6`)** | Full-width cards; easy thumb scrolling |
| **Stacked full-width CTAs** | Large tap targets per button |
| **Disabled card lift on mobile** | Avoids layout jank on touch devices |
| **`clamp()` title sizing** | Readable headlines without overflow |
| **Featured ribbon + title padding** | “Most Booked” doesn’t overlap title text |

---

## Styling Notes

- Modifier: `.pricing--premium` (scoped; does not change global Bootstrap)
- Hover: subtle `translateY(-6px)` + shadow (disabled under `prefers-reduced-motion`)
- CTA colors align with `.service--premium` and `.booking--premium`
- Featured card: gold border, cream gradient, corner ribbon

---

## Maintenance

1. **Update prices** — edit `<strong>&#8358;…</strong>` in each `.pricing-amount` in `index.html`
2. **New package** — duplicate a `.pricing-card` block; add matching `<option>` in booking form + `SERVICE_SLUG_MAP` in `booking.js`
3. **WhatsApp copy** — re-encode `text=` if you change chat openers (use `encodeURIComponent` in browser console)
4. **Sync to `service.html`** — optional; homepage is canonical for this section

---

## Future Enhancements

| Priority | Idea |
|----------|------|
| P1 | Add `?service=` to service page “Book” buttons pointing to `index.html#booking` |
| P2 | Externalize prices in `js/pricing-config.json` for non-dev edits |
| P3 | “Compare packages” toggle for bridal vs event makeup |
| P4 | Paystack “pay deposit” link in WhatsApp follow-up (not on-page) |

---

## Related Documentation

- `BOOKING_SYSTEM.md` — form + `?service=` prefill
- `WHATSAPP_INTEGRATION.md` — phone number format
- `SERVICES_SECTION_OPTIMIZATION.md` — upstream services grid
- `BEFORE_AFTER_GALLERY.md` — downstream proof section

---

## Testing Checklist

- [ ] All 5 cards display correctly on desktop and mobile
- [ ] **Book This Package** / **Reserve This Look** open `#booking` with correct service selected
- [ ] **Chat About Pricing** opens WhatsApp with correct service name in message
- [ ] Footer CTA scrolls to booking section
- [ ] Featured bridal card ribbon does not overlap title
- [ ] Hover effects respect reduced-motion preference
