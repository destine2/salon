# Veloura Beauty Studio — Brand Identity

**Tagline:** Luxury Glam. Modern Confidence.

**Location positioning:** Lekki Phase 1, Lagos, Nigeria

This document defines how Veloura is positioned across the website. Implementation comments in HTML/CSS/JS reference this file where brand consistency matters.

---

## 1. Brand positioning

**Veloura Beauty Studio** is a **trendy luxury glam studio** for young Lagos women who live between real life and Instagram—bridal mornings, owambe nights, brunch selfies, and quiet self-care Sundays.

We are not a generic salon template. We are:

- **Premium** — expert artists, hygienic standards, curated products  
- **Youthful** — energetic, confident, culturally current  
- **Instagram-native** — photo-ready finishes, shareable moments, hashtag-friendly language  
- **Lagos-rooted** — Lekki access, WhatsApp booking, event-season fluency  

**One-line pitch:**  
*Veloura is where Lekki women get main-character glam—with the polish of a luxury studio and the vibe of a beauty brand they already follow online.*

---

## 2. Target audience

| Attribute | Profile |
|-----------|---------|
| **Age** | 20–35 |
| **Location** | Lagos (primary: Lekki, VI adjacency, island professionals) |
| **Values** | Beauty, confidence, presentation, celebrations, self-investment |
| **Occasions** | Weddings, introductions, birthdays, owambe, content creation, date nights, “just because” glam |
| **Behaviour** | Discovers studios on Instagram, books via WhatsApp, shares results, compares artists and packages |
| **Expectation** | Fast replies, clear pricing signals, photo-proof results, feminine but professional service |

**Audience insight for copy:** Speak to *how she wants to feel* (confident, camera-ready, seen)—not only *what service* she buys.

---

## 3. Tone of voice

| Do | Don't |
|----|--------|
| Warm, assured, modern | Cold, corporate, or clinical |
| Confident (“glow era,” “slay,” “main-character”) | Generic template filler (“lorem,” “quality service”) |
| Feminine but professional | Overly childish or slang-heavy |
| Lagos-aware (owambe, Lekki, WhatsApp booking) | Generic Western salon clichés |
| Short, scannable lines (Instagram caption energy) | Long dense paragraphs |

**Voice keywords:** glam, glow, confidence, curated, photo-ready, soft luxury, slay, iconic, effortless.

**Sample lines (on-brand):**

- “Your glow era starts in Lekki.”  
- “Book your glam in minutes.”  
- “Photo-ready finishes, every time.”  
- “From bridal slay to everyday luxe.”

---

## 4. Visual personality

The website **keeps the existing luxury visual system** (gold primary `#BF9456`, dark neutrals, Playfair + Dancing Script + Work Sans, premium section components). Rebrand changes are **verbal and identity-level**, not layout.

| Element | Veloura expression |
|---------|-------------------|
| **Navbar wordmark** | `Veloura` + `bi-stars` icon (youthful glam, not scissors) |
| **Photography** | Bright, polished, beauty-forward (replace stock when possible) |
| **UI rhythm** | `.veloura-section-rhythm` + existing `--veloura-*` design tokens |
| **Instagram grid** | `@velourabeautystudio` gallery block, hashtags `#VelouraBride`, `#VelouraGlam` |
| **CTAs** | Gold primary buttons; WhatsApp green secondary path |

**Mood board words:** glossy, soft light, champagne gold, clean lines, editorial beauty, Lekki afternoon.

---

## 5. Messaging strategy

### Hierarchy

1. **Tagline** — Luxury Glam. Modern Confidence.  
2. **Hero promise** — Glow era / Instagram-loved studio in Lekki  
3. **Proof** — Client stories, before/after, team artists, counters (demo figures)  
4. **Conversion** — Book Your Glam → WhatsApp confirmation  
5. **Trust** — Address, hours, map, tap-to-call  

### CTA language (sitewide)

| Context | Label |
|---------|--------|
| Navbar | Book Your Glam |
| Hero primary | Book Your Glam |
| Service cards | Book This Service / Chat About This Service |
| Pricing | Book This Package / Reserve This Look |
| Booking form submit | Reserve Your Glam |
| Footer | Reserve Your Glam |

### Service framing

Lead with **outcome + occasion** (bridal icon, owambe-ready, glass skin) then technique. Prices in Naira reinforce Lagos market clarity.

---

## 6. Local Lagos positioning

- **Area:** Lekki Phase 1 (Admiralty Way)—island convenience, bridal party friendly  
- **Booking culture:** WhatsApp-first; form pre-fills chat (see `js/booking.js`)  
- **Language:** British/Nigerian English; owambe, slay, introduction, VI references where natural  
- **Hours (demo placeholder):**  
  - Mon–Fri: 10:00 AM – 8:00 PM  
  - Saturday: 11:00 AM – 7:00 PM  
  - Sunday: glam appointments only  

Replace all placeholder NAP before a live client launch.

---

## 7. Instagram-inspired branding strategy

Instagram is the **primary discovery and proof channel**, not an afterthought.

| Tactic | On-site implementation |
|--------|-------------------------|
| **Handle as social proof** | `@velourabeautystudio` in gallery, footer, Stay Connected |
| **Hashtag language** | `#VelouraBride`, `#VelouraGlam` in transformation section |
| **Visual grid** | Instagram-style gallery + lightbox (`veloura-gallery`) |
| **Caption-tone copy** | Short eyebrows, punchy headlines, emoji-free professionalism |
| **UGC framing** | “Client Stories” not generic testimonials |
| **Shareable outcomes** | “Photo-ready,” “glow-up,” “feed-worthy” |

**Content pillars for future IG (off-site):**

1. Before/after transformations  
2. Bridal / event glam BTS  
3. Artist spotlights (Amara, Zainab, Temitope, Ngozi)  
4. Package promos tied to `#booking` deep links  
5. Studio aesthetic & Lekki lifestyle context  

---

## 8. Placeholder business details (demo)

Update before production launch:

| Field | Demo value |
|-------|------------|
| **Legal / brand name** | Veloura Beauty Studio |
| **Address** | 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria |
| **Phone** | +234 811 271 1466 |
| **WhatsApp** | `2348112711466` (`wa.me/2348112711466`) |
| **Email** | hello@velourabeauty.ng |
| **Instagram** | https://instagram.com/velourabeautystudio (`@velourabeautystudio`) |

**Config sync points:**

- `js/booking.js` → `BOOKING_CONFIG`  
- WhatsApp float on every `.html` page  
- Footer + `#visit` contact panel  

---

## 9. Files updated in rebrand

| Area | Files |
|------|--------|
| Pages | `index.html`, `about.html`, `service.html`, `contact.html`, `team.html`, `testimonial.html`, `404.html` |
| Scripts | `js/booking.js` |
| Styles | `css/style.css` (`--veloura-*` tokens, `.veloura-section-rhythm`) |

**CSS note:** Design tokens were renamed from `--salone-*` to `--veloura-*` for brand alignment. Functionality is unchanged.

---

## 10. Maintainer checklist

When adding new pages or sections:

- [ ] Use **Veloura Beauty Studio** on first mention; **Veloura** in navbar/wordmark  
- [ ] Include tagline or paraphrase in footer blurb  
- [ ] Point booking CTAs to `#booking` or `index.html#booking`  
- [ ] Use demo NAP from section 8 (or client-approved live data)  
- [ ] Keep tone: premium, trendy, confidence-led  
- [ ] Add `<!-- Veloura brand: … -->` comment when introducing new branded blocks  

---

*Rebrand completed May 2026. Prior sanitization notes: `CLIENT_READY_AUDIT.md`. Feature docs (booking, WhatsApp, sections) may still reference the previous working name in historical sections—update those headers only when editing those files.*
