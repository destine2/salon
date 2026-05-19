# Image Integration — Veloura Beauty Studio

**Date:** May 2026  
**Source assets:** `assest/image/` (categorized folders)  
**Deployed to:** `img/` (web root paths unchanged for most sections)

---

## 1. Detected image categories

| Folder | Files | Purpose |
|--------|-------|---------|
| `hero sliders/` | 3 | Homepage hero carousel + site backgrounds |
| `about/` | 1 | About section studio imagery |
| `SERVICES/` | 6 | Service card photography |
| `TEAM PORTRAITS/` | 4 | Stylist headshots |
| `TESTIMONIAL AVATARS/` | 4 | Client story avatars |
| `PORTFOLIO  INSTAGRAM GRID/` | 6 | Finished-look portfolio tiles |
| `before and after/` | 11 | Transformation compare sources |

**Processing:** PNG sources converted to optimized JPEG (max width 1920px, quality 85) via Pillow for performance and consistent delivery.

---

## 2. Mapping summary

### Hero sliders → `img/hero-slider-1.jpg` … `hero-slider-3.jpg`

| File | Source |
|------|--------|
| `hero-slider-1.jpg` | african woman luxury hair salon.png |
| `hero-slider-2.jpg` | black woman hair styling nigeria.png |
| `hero-slider-3.jpg` | modern salon studio nigeria.png |
| `hero-bg.jpg` | Same as slider 1 (subtle site background) |
| `page-header.jpg` | modern salon studio nigeria.png (inner page headers via CSS) |

**Used on:** `index.html` hero carousel only (paths unchanged).

### About → `img/about.jpg`

| File | Source |
|------|--------|
| `about.jpg` | black woman salon owner smiling.png |

**Used on:** `index.html`, `about.html` about columns.

### Services → `img/haircut.jpg` … `skin-care.jpg`

| Web file | Source | Section |
|----------|--------|---------|
| `haircut.jpg` | african woman haircut salon.png | Signature Haircut |
| `makeup.jpg` | makeup artist applying foundation black woman.png | Bridal & Event Makeup |
| `manicure.jpg` | nail polish african woman close up.png | Luxury Manicure |
| `pedicure.jpg` | luxury pedicure treatment woman.png | Spa Pedicure |
| `massage.jpg` | A hairstylist using a blow dryer.png | Therapeutic Massage *(spa/styling visual)* |
| `skin-care.jpg` | facial skin care treatment black woman.png | Advanced Skin Care |

**HTML change:** `.png` → `.jpg` on `index.html` and `service.html`.  
**CSS:** `object-fit: cover`, fixed 200px height, `center top` crop for editorial cards.

### Team portraits → `img/team-1.jpg` … `team-4.jpg`

| File | Source | Mapped stylist |
|------|--------|----------------|
| `team-1.jpg` | Professional stylist portrait with confidence.png | Amara Okonkwo |
| `team-2.jpg` | Professional beauty technician headshot portrait.png | Zainab Hassan |
| `team-3.jpg` | Professional portrait for beauty expert.png | Temitope Adeyemi |
| `team-4.jpg` | Professional skincare specialist portrait.png | Ngozi Eze |

**Used on:** `index.html`, `about.html`, `team.html` (existing `object-fit: cover` on team items).

### Testimonial avatars → `img/testimonial-1.jpg` … `testimonial-4.jpg`

| File | Source |
|------|--------|
| `testimonial-1.jpg` | Smiling portrait of a young woman.png |
| `testimonial-2.jpg` | Friendly smile in natural light.png |
| `testimonial-3.jpg` | Natural beauty and warm smile.png |
| `testimonial-4.jpg` | Natural beauty in soft light.png |

**Used on:** `index.html`, `service.html`, `testimonial.html` carousels (circular avatar crop unchanged).

### Portfolio / Instagram grid → `img/portfolio/grid-1.jpg` … `grid-6.jpg`

| File | Source | Lightbox title |
|------|--------|----------------|
| `grid-1.jpg` | Finished hair install.png | Frontal Install |
| `grid-2.jpg` | Finished bridal look.png | Bridal Glam |
| `grid-3.jpg` | Finished makeup look.png | Event Makeup |
| `grid-4.jpg` | Finished skin glow treatment.png | Skin Glow |
| `grid-5.jpg` | Finished nail art.png | Signature Nails |
| `grid-6.jpg` | Finished ombre hair.png | Hair Colour |

**Used on:** `index.html` transformation section Instagram row (`#transformations`).

### Before / after → `img/ba/*.jpg`

| Pair | Before source | After source |
|------|---------------|--------------|
| Bridal | Nigerian woman with a bare natural face.png | Finished bridal look.png |
| Frontal | A Nigerian woman with her natural hair.png | Nigerian woman now wearing lace frontal wig.png |
| Facial | A Nigerian woman with plain dark.png | Nigerian woman with radiant, glowing face.png |
| Nails | plain nails Close up… hands.png | Nigerian woman's hands… acrylic nails.png |
| Event | A Nigerian woman with a natural bare face.png | Nigerian woman fully transformed… owambe glam.png |
| Hair colour | A Nigerian woman with her natural hair.png | Nigerian woman now with beautifully coloured hair.png |

**Used on:** `index.html` compare sliders only (dedicated paths; no longer mixed team/hero stock).

---

## 3. Hero image strategy

- **Three distinct moods:** luxury salon environment, active styling, studio editorial.  
- **Same filenames** as before so hero markup stayed minimal.  
- **Editorial overlay** (existing `.hero-media-frame`) works with new photography.  
- **No extra carousel plugins** — performance preserved.

---

## 4. Gallery image strategy

**Compare sliders:** Real before/after pairs per category improve credibility vs. random cross-section stock.

**Instagram grid:** Finished-look portfolio assets align with @velourabeautystudio positioning; each tile is a true “result” image, not team headshots or hero repeats.

**Lightbox:** `veloura-gallery` group unchanged; `data-title` updated with em dash for polish.

---

## 5. Testimonial avatar mapping

Avatars are **warm, natural-light portraits** suited to circular crops and Lagos client naming (Adaeze, Chioma, Fatima, Tiwa). They replace low-resolution template thumbnails.

---

## 6. Visual consistency decisions

| Decision | Rationale |
|----------|-----------|
| JPEG output | Smaller weight than PNG for photos; faster load |
| Max width 1920px | Prevents oversized decode on mobile |
| Cream RGB matte on transparent PNGs | Matches `--bs-light` / brand background |
| Service card uniform height | Grid alignment; no stretched icons |
| `img/ba/` and `img/portfolio/` subfolders | Clear maintenance; avoids filename collisions |
| Keep `img/team-*` flat names | No HTML churn on team pages |

**Brand alignment:** Nigerian women, glam finishes, Lekki luxury studio cues throughout.

---

## 7. Mobile optimization

- **`object-fit: cover`** on services, team, BA sliders, IG grid (existing + service rule).  
- **`loading="lazy"`** retained on below-fold gallery/testimonial images.  
- **Hero carousel** heights still controlled by `.hero-header--editorial` CSS.  
- **No new JS** — layout breakpoints unchanged.

---

## 8. Files modified

| File | Change |
|------|--------|
| `img/**` | 38 JPEG assets written/updated |
| `index.html` | Service `.jpg`, `img/ba/*`, `img/portfolio/*`, comments |
| `service.html` | Service `.jpg` paths |
| `css/style.css` | Service card photo cropping |

**Unchanged paths (content only):** `about.jpg`, `team-*.jpg`, `testimonial-*.jpg`, `hero-slider-*.jpg` on pages that already referenced them.

---

## 9. Remaining recommended improvements

| Priority | Recommendation |
|----------|------------------|
| High | Add `img/favicon.ico` from Veloura mark |
| High | Replace `massage.jpg` with dedicated spa/massage photo if asset becomes available |
| Medium | Shoot **true paired** before/after in same lighting for each BA card |
| Medium | WebP copies with `<picture>` for ~30% savings |
| Low | Remove legacy unused `img/*.png` icon files from repo |
| Low | Add `width`/`height` attributes on hero images to reduce CLS |

**Unused source asset:** `Nigerian woman now fully glam.png` (similar to other after shots; available for future swaps).

---

## 10. Maintainer notes

- New photos: drop into `assest/image/` by category, re-run integration script or copy manually to matching `img/` names.  
- After changing service images, keep **6:4-ish** landscape aspect for card crop.  
- BA pairs must share similar framing for compare slider to feel professional.  
- Do not use testimonial avatars in BA or grid sections (scale/crop mismatch).

---

*Integration preserves all section layouts. Brand context: `BRAND_IDENTITY.md`, hero: `HERO_IDENTITY_REFINEMENT.md`.*
