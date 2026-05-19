# Hero Identity Refinement — Veloura Beauty Studio

**Scope:** Homepage hero only (`index.html` + `.hero-header--editorial` in `css/style.css`)  
**Goal:** Reduce template feel; strengthen editorial, Instagram-native, aspirational luxury without layout rebuild or heavy animation.

---

## 1. Emotional branding strategy

The hero now leads with **identity before features**:

| Layer | Element | Emotional job |
|-------|---------|----------------|
| 1 | Luxury label | Local relevance + social proof (“Instagram-Loved”) |
| 2 | Headline | Personal promise — *your* signature glow |
| 3 | Lead | Aspirational outcomes (bridal, frontals, unforgettable) |
| 4 | CTAs | Clear next step vs. exploration |
| 5 | Social proof | Community belonging (brides, creators, beauty lovers) |

**Previous template signals removed:**

- Generic dual-CTA (Book + WhatsApp) that mirrored every salon demo  
- Icon grid trust row (award/gem/heart) that read as Bootstrap filler  
- Script eyebrow as the only brand differentiator  
- “Glow era” headline without studio name anchoring  

**New emotional arc:** *Belong → Desire → Trust → Act*

---

## 2. Editorial luxury direction

Editorial beauty means **magazine hierarchy**, not marketplace clutter:

- **Small caps label** (`hero-label`) — restrained, uppercase, wide letter-spacing; reads like a Vogue / Beauty edit credit  
- **Serif headline** (Playfair) — dominant, narrow measure (`max-width: 14ch` on desktop) for confidence  
- **Sans lead** — softer gray, 32rem max width, generous line-height (1.75)  
- **Single trust sentence** — one line with hairline divider, not three icon bullets  

**Visual panel treatment:**

- Soft white-to-cream gradient with light backdrop blur  
- Thinner gold left rule (2px) — refined vs. heavy template border  
- Deeper, softer shadow on desktop only  

**Imagery:**

- `hero-media-frame` with dual overlay (gradient + inset vignette) for warmth and depth  
- No carousel animation classes removed from markup (Owl still runs; no extra WOW on copy)  

---

## 3. Aspirational messaging strategy

### Copy implemented

| Slot | Copy |
|------|------|
| Label | Lekki's Instagram-Loved Beauty Studio |
| Headline | Your Signature Glow Starts At Veloura. |
| Lead | From bridal glam to flawless frontal installs, Veloura Beauty Studio delivers premium beauty experiences designed for confident women who love to look unforgettable. |
| Social proof | Trusted by Lagos brides, beauty lovers & content creators. |

**Why this works:**

- **“Signature glow”** — owns a repeatable brand idea (not generic “confidence”)  
- **“Unforgettable”** — event/wedding aspiration without listing services in the H1  
- **Service examples in lead** — bridal + frontals ground credibility for Lagos audience  
- **Community line** — speaks to IGBO/bride culture, creators, and everyday glam simultaneously  

Tagline *Luxury Glam. Modern Confidence.* remains in brand system (`BRAND_IDENTITY.md`) but is **not duplicated in hero** to avoid headline competition.

---

## 4. Lagos beauty culture positioning

- **Lekki** in the label — immediate island luxury geography  
- **Bridal + frontal installs** — high-intent Lagos beauty categories  
- **“Content creators”** — acknowledges Instagram-native booking behaviour  
- **WhatsApp** — still available via site float; hero prioritises on-site booking + gallery discovery first  

---

## 5. Visual refinement decisions

| Decision | Rationale |
|----------|-----------|
| `.hero-header--editorial` modifier | Scopes all changes to homepage; inner page heroes unchanged |
| `max-width` on copy panel & lead | Editorial column; reduces “full-width template text” feel |
| `hero-media-frame` overlays | Subtle mood; no new images required |
| Removed `animated slideInLeft` on copy | Less template motion; performance-friendly |
| `backdrop-filter` on panel | Light glass effect; falls back gracefully |
| Gold primary + dark outline secondary | Clear CTA hierarchy; secondary feels luxury, not “second best green WhatsApp” |
| `#transformations` anchor | Secondary CTA scrolls to real proof section |

---

## 6. Mobile optimization decisions

| Breakpoint | Behaviour |
|------------|-----------|
| `< 992px` | Image column first (`order: 0`), copy below with top gold rule |
| CTAs | Full-width stacked buttons; min-height 2.75rem (existing polish layer) |
| Title | `clamp()` + 1.85rem floor on small phones |
| Image height | Capped 260–340px on mobile to keep CTAs above fold |
| Label | Slightly smaller letter-spacing for narrow screens |

Thumb-friendly: primary CTA first in DOM order within flex column.

---

## 7. CTA hierarchy reasoning

| CTA | Role | Destination |
|-----|------|-------------|
| **Book Your Glam** (primary) | Conversion — gold fill, hover lift | `#booking` |
| **Explore Transformations** (secondary) | Consideration — outline, hover gold tint | `#transformations` |

**Why drop WhatsApp from hero row:**

- Float button remains globally; duplicating in hero felt template-default  
- Secondary exploration CTA supports **emotional selling** (see results before booking)  
- Cleaner two-button row reads more editorial  

---

## 8. Originality improvements

- Unique headline structure: label + named studio promise  
- Community trust line vs. generic icon metrics  
- Editorial image treatment without changing carousel structure  
- Secondary path to transformation gallery (brand-owned content)  
- Refined typography measure and panel glass  

---

## 9. Template feel reduction strategy

| Template pattern | Replacement |
|------------------|-------------|
| Script-only eyebrow | Uppercase editorial label |
| WhatsApp + Book twin CTAs | Book + Explore |
| 3-icon trust grid | One sentence social proof |
| Heavy left border + flat panel | Thinner accent + gradient glass |
| WOW slide on every block | Static load; carousel only |
| Full-width headline | Constrained measure |

---

## 10. Files changed

| File | Changes |
|------|---------|
| `index.html` | Hero markup, `#transformations` id on gallery section |
| `css/style.css` | `.hero-header--editorial` block (~170 lines) |

**Preserved:** Colors, fonts, split layout, Owl carousel, navbar, all other sections.

---

## 11. Maintainer notes

- Edit hero copy only inside `<!-- Veloura hero identity refinement -->` block  
- Style changes: `.hero-header--editorial` in `css/style.css`  
- Do not remove `#transformations` if secondary CTA remains  
- WhatsApp booking: `WHATSAPP_INTEGRATION.md` + float button  

---

*Completed May 2026. Brand context: `BRAND_IDENTITY.md`. Prior hero work: `HERO_SECTION_OPTIMIZATION.md`.*
