# Before/After Gallery & Visual Showcase — Guide

**Scope:** Transform gallery on `index.html` only (between Services and Team)  
**Design reference:** UI mockup — trust bar, filter pills, draggable compare sliders, CTA bar, Instagram row  
**Styles:** `css/style.css` → `/*** Transform Gallery — UI mockup ***/`  
**Script:** `js/gallery.js` (compare sliders + category filters)  
**Lightbox:** `lib/lightbox/` on homepage for Instagram tiles  

---

## Overview

The gallery section was rebuilt to match the provided **high-fidelity UI mockup**:

1. **Header** — Transformations / Real Results, Real Confidence  
2. **Trust bar** — 4 columns with icons and taglines  
3. **Filter pills** — All, Hair, Wig Installs, Makeup, Nails, Skincare  
4. **6-card grid** — Draggable before/after comparison sliders  
5. **CTA bar** — Crown icon, copy left, Book + WhatsApp right  
6. **Instagram row** — @salonelagos + 6 square thumbnails  
7. **Social proof** — “Loved by 999+ beautiful clients across Lagos”  

---

## Files

| File | Role |
|------|------|
| `index.html` | Gallery markup |
| `css/style.css` | `.transform-gallery--premium` styles |
| `js/gallery.js` | Compare sliders + filter logic |
| `BEFORE_AFTER_GALLERY.md` | This document |

---

## Visual Psychology

| Element | Why it works |
|---------|----------------|
| **Before/After slider** | User controls the reveal — stronger proof than static split |
| **Trust bar** | Four quick credibility signals before scrolling gallery |
| **Filters** | Reduces overwhelm; visitors find their service type |
| **Hashtags** | Instagram-native familiarity; shareable tone |
| **CTA bar** | Captures intent immediately after visual proof |
| **999+ clients** | Social proof closes the section |

---

## Before/After Compare Slider

### Markup

```html
<div class="ba-compare" data-ba-compare>
  <img class="ba-compare__after" src="..." alt="">
  <div class="ba-compare__before-wrap">
    <img class="ba-compare__before" src="..." alt="">
  </motion>
  <span class="ba-compare__tag ba-compare__tag--before">Before</span>
  <span class="ba-compare__tag ba-compare__tag--after">After</span>
  <div class="ba-compare__handle">...</div>
  <input type="range" class="ba-compare__range" min="0" max="100" value="50">
</div>
```

### Behaviour (`gallery.js`)

- Dragging the invisible range input moves the split (keyboard-accessible).  
- Circular handle follows the split line.  
- Before image width syncs to container width so cropping stays correct on resize.  

---

## Category Filters

| Button | `data-gallery-filter` | Cards shown |
|--------|----------------------|-------------|
| All Transformations | `all` | All 6 |
| Hair | `hair` | Hair Colour |
| Wig Installs | `wig-installs` | Frontal Install |
| Makeup | `makeup` | Bridal Glam, Event Makeup |
| Nails | `nails` | Signature Nails |
| Skincare | `skincare` | Luxury Facial |

Cards use `data-gallery-category` on `.transform-ba-item`. Hidden cards get `.is-hidden`.

---

## Six Transformations

| Label | Filter | Hashtags |
|-------|--------|----------|
| Bridal Glam | makeup | #BridalBeauty #SaloneBride |
| Frontal Install | wig-installs | #FrontalInstall #HairGoals |
| Luxury Facial | skincare | #SkinGlow #LuxuryFacial |
| Signature Nails | nails | #NailGoals #SignatureNails |
| Event Makeup | makeup | #EventGlam #OwambeReady |
| Hair Colour | hair | #HairColour #SaloneStyle |

**Images:** Placeholder assets from `img/`. Replace with real paired before/after photos before launch.

---

## Instagram-Inspired Design

| Mockup cue | Implementation |
|------------|----------------|
| @salonelagos handle | `.transform-ig-title` lowercase handle |
| 6 square thumbnails | `.transform-ig-grid--feed` — 6 columns on sm+ |
| Zoom on hover | Overlay + `scale(1.08)` |
| Lightbox | `data-lightbox="salone-gallery"` |

Luxury preserved: gold borders, no heavy filters, Playfair accents.

---

## Mobile Optimization

| Decision | Detail |
|----------|--------|
| Trust bar | 2×2 grid on mobile, 4 columns on tablet+ |
| Filters | Horizontal scroll, no wrap |
| Compare sliders | Full-width cards; touch-friendly range input |
| CTA buttons | Stack full width |
| Instagram | 3 columns → 6 columns from `sm` breakpoint |

---

## Hover Strategy

- **Cards:** Subtle lift + shadow  
- **Filter pills:** Gold fill when active/hover  
- **Instagram tiles:** Zoom + dark overlay with zoom icon  
- **Compare:** Handle visible; drag via range (no hover-only interaction)  

`prefers-reduced-motion` disables card lift and image zoom.

---

## Emotional Conversion Path

1. Read trust bar → feel safe  
2. Filter or browse transformations → see relevant results  
3. Drag sliders → engage with proof  
4. Read captions/hashtags → imagine own result  
5. CTA bar → book or WhatsApp  
6. Instagram + 999+ line → final trust nudge  

---

## Customization

1. **Photos:** Swap `src` on `.ba-compare__before` and `.ba-compare__after` per card.  
2. **Instagram URL:** Wrap `@salonelagos` in a link to your profile.  
3. **Filters:** Add `data-gallery-category` + matching pill button.  
4. **WhatsApp:** Update `2348112711466` in CTA (see `WHATSAPP_INTEGRATION.md`).  

---

## Testing Checklist

- [ ] Drag each compare slider left/right  
- [ ] Tab to range input and use arrow keys  
- [ ] Click each filter pill — correct cards show/hide  
- [ ] CTA links work  
- [ ] Lightbox opens from Instagram tiles  
- [ ] Layout matches mockup on desktop and mobile  

---

*End of gallery guide.*
