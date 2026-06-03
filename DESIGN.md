---
name: Rosalie Frazier Pazant Foundation
description: Dignified, grounded foundation site for Beaufort educational pathways
colors:
  ink: "#1a2830"
  ink-muted: "#5a6570"
  surface: "#fafbfc"
  surface-raised: "#f2f4f6"
  line: "#d8dde3"
  accent: "#7a3d2e"
  accent-hover: "#5f2f24"
  hero: "#152228"
  hero-ink: "#f5f7f8"
  hero-muted: "#c5cdd4"
  focus-ring: "#8b4a38"
typography:
  display:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  section-y: "4rem"
  section-y-md: "6rem"
  content: "1.5rem"
  max-width: "64rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.hero-ink}"
    padding: "0 1.5rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.hero-ink}"
    padding: "0 1.5rem"
    height: "2.75rem"
---

## Overview

Institutional brand surface for the Rosalie Frazier Pazant Foundation. Register is **brand**: editorial typography, restrained brick accent on cool ink neutrals, flat sections separated by hairline rules (not card grids). Max content width 64rem (`max-w-5xl`).

**Motion:** Hero load choreography (`hero-enter`, ~560ms) plus slow Ken Burns on hero photo (uniform scrim overlay). Section scroll reveals via `Reveal` (translate only, content always visible). Programs tab panel uses `program-panel-enter`. Core values use capped `stagger-enter` with `--i`. Biography (`/biography`): sticky jump nav, highlight band, portrait intro grid, credential list, honor mosaic, visual timeline, staggered list items. Panels lift on hover (`panel-hover`). Buttons: 200ms color, shadow, scale. No decorative page gradients. Always honor `prefers-reduced-motion` in `globals.css`.

**Structure:** Use `.panel`, `.panel-accent-top` (3px top accent only), `.panel-soft`, `.band-accent`, `.band-hero` from `globals.css`. Avoid identical icon-card grids and side-stripe `border-l-4` callouts.

Canonical tokens live in `src/app/globals.css` as OKLCH CSS variables. Hex values in frontmatter are Stitch-compatible references.

## Colors

**Strategy:** Restrained with one committed accent (brick on cool ink).

| Role | Token | Usage |
|------|-------|--------|
| Ink | `--ink` | Headings, primary text |
| Ink muted | `--ink-muted` | Body, supporting copy (≥4.5:1 on surface) |
| Surface | `--surface` | Page background (true off-white, not cream) |
| Surface raised | `--surface-raised` | Alternating sections |
| Line | `--line` | Borders, dividers |
| Accent | `--accent` | Links, CTAs, list markers |
| Hero | `--hero` | Hero + footer bands |
| Hero ink / muted | `--hero-ink`, `--hero-muted` | Text on dark bands |

## Typography

- **Display / section:** Libre Baskerville, normal weight, negative tracking capped at -0.03em.
- **Body:** Source Sans 3 at 17px / 1.65 line-height.
- Use `text-wrap: balance` on major headings; `text-pretty` on long prose.

## Elevation

Flat design. No drop shadows on cards. Depth via background shifts (`surface` / `surface-raised`) and 1px `line` borders only.

## Components

- **Button:** `src/components/Button.tsx` — variants `primary`, `secondary`, `onDark`, `onDarkOutline`; min height 44px; active scale 0.98 (disabled under reduced motion).
- **SectionHeading:** Title + optional subtitle; no repeated uppercase eyebrows.
- **SocialLinks:** Text-only until real URLs exist (hardened, no `href="#"`).
- **Skip link:** `.skip-link` in `globals.css`, target `#main`.

## Do's and Don'ts

**Do**

- Preserve About, Mission & Vision, and founder note as editorial prose blocks.
- Use semantic `<ol>` for program sequence.
- Verify external image URLs before shipping.
- Keep hero headline clamp max at 3.5rem.

**Don't**

- Cream/sand page backgrounds, navy/teal/gold cliché palettes, or Cormorant.
- Side-stripe `border-l-4` callouts, emoji icons, identical card grids, pill buttons.
- Placeholder `href="#"` social links.
- Scroll-reveal animation on every section (hero entrance only).
