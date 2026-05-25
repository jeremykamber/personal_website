---
name: Jeremy Kamber Portfolio
description: Personal portfolio and blog for Jeremy Kamber
colors:
  neutral-bg: "oklch(0.05 0.008 260)"
  neutral-surface: "oklch(0.09 0.01 260)"
  neutral-elevated: "oklch(0.13 0.012 260)"
  fg-primary: "oklch(0.82 0.008 260)"
  fg-muted: "oklch(0.55 0.02 250)"
  border: "oklch(0.20 0.015 260)"
  accent: "oklch(0.62 0.09 220)"
  accent-subtle: "oklch(0.62 0.09 220 / 0.1)"
  destructive: "oklch(0.55 0.12 25)"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  mono:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-default:
    backgroundColor: "{colors.fg-primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.fg-primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.border}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.fg-primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.fg-primary}"
    rounded: "{rounded.sm}"
    padding: "24px"
    border: "1px solid {colors.border}"
---

# Design System: Jeremy Kamber Portfolio

## 1. Overview

**Creative North Star: "The Midnight Studio"**

A dark, focused workspace where craftsmanship takes center stage. This is the portfolio equivalent of a developer's terminal at midnight — deep background, soft luminous text, and color used with surgical precision. The design recedes so the work occupies the foreground.

The system borrows its ethos from dark code editor themes (midnight.nvim specifically): healthy contrast without eye strain, semantic clarity without visual noise, and a cooler neutral palette punctuated by intentional accent warmth. It is emphatically not a generic dark-mode portfolio — the background is a deep cool slate, not pure black. The text is a soft blue-gray white, not harsh pure white. Every value is tuned for *longevity*: the site should be comfortable to read for extended sessions, not just glance at.

**What this system explicitly rejects:** generic dev-portfolio templates (avatar heroes, skill bars, gradient sections, typing animations), SaaS dashboard aesthetics, glassmorphism, gradient text, side-stripe borders, and any element that screams "framework template." If someone could identify the boilerplate at a glance, it's failed.

### Key Characteristics
- Dark-focused: cool slate background, soft luminous foreground
- Restrained palette: tinted neutrals with a single muted teal accent (≤10% surface)
- Flat by default: tonal layering for depth, near-zero borders at rest
- Sharp geometry: 2px radius throughout (rounded-sm only)
- Terminal-adjacent: high legibility, low saturation, zero decoration
- Content-forward: the work speaks; the UI is transparent

## 2. Colors

A cool-toned palette anchored by a deep slate background and soft blue-gray foreground. One accent — a muted teal — used exactly where interaction happens and nowhere else.

### Primary
- **Midnight Slate** (`oklch(0.05 0.008 260)`): Page background. Deep, cool near-black. Not pure #000 — the subtle chroma prevents visual crush on large surfaces.
- **Luminous Cloud** (`oklch(0.82 0.008 260)`): Primary text. A soft, cool-tinted white. High readability without the harshness of pure #fff.

### Secondary
*(Omitted — the system operates on one neutral scale.)*

### Tertiary
*(Omitted — no third color role needed.)*

### Neutral
- **Surface Slate** (`oklch(0.09 0.01 260)`): Card and surface backgrounds. One step above the page background, just enough contrast to define boundaries.
- **Elevated Slate** (`oklch(0.13 0.012 260)`): Hovered surfaces, popover backgrounds, interactive states.
- **Fog** (`oklch(0.55 0.02 250)`): Muted/secondary text, placeholders, de-emphasized metadata.
- **Shadow Line** (`oklch(0.20 0.015 260)`): Borders and dividers. Thin, subtle, recessive.
- **Mist** (`oklch(0.20 0.015 260 / 0.5)`): Divider lines and subtle separators.

### Accent
- **Docklight** (`oklch(0.62 0.09 220)`): A muted teal-blue. Used for interactive text (links), focus rings, and the reading progress indicator. Appears on ≤10% of any screen. Not a brand color — a functional wayfinder.
- **Docklight Glow** (`oklch(0.62 0.09 220 / 0.1)`): The same accent at low opacity. Used for subtle background fills behind active interactive states.

### Named Rules
**The Docklight Rule.** The accent appears on ≤10% of any screen. Its rarity is the point — when it appears, the user knows something is actionable. If the accent feels like a UI chrome color, it's being overused.

**The No-Black, No-White Rule.** Pure #000 and #fff are forbidden. Every "black" is a deep cool slate; every "white" is a soft blue-gray. This prevents visual crush and eye strain during extended reading.

## 3. Typography

**Display & Body Font:** Geist Variable (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Monospace Font:** Geist Mono Variable (with `ui-monospace, SFMono-Regular, monospace` fallback)

**Character:** A single geometric sans-serif family, weight-driven hierarchy, no serif contrast. Geist's variable nature allows precise optical sizing — tight tracking on display sizes, relaxed on body. The pairing is monolithic by design: the same DNA at different weights, creating a consistent, unfussy reading experience.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 3.5rem)`, 1.1, -0.03em): Page titles (home H1, blog post H1, case study title). Bold, tight, commanding. Limited to one per page.
- **Headline** (600, `clamp(1.5rem, 3vw, 2.25rem)`, 1.2, -0.02em): Section headings on index pages. Slightly looser tracking than Display.
- **Title** (600, `clamp(1.125rem, 2vw, 1.5rem)`, 1.3, -0.01em): Card titles, project names, subsection headings.
- **Body** (400, 1rem, 1.6): All prose. Max line length 70ch. Geist's comfortable x-height and generous inter-letter spacing at text sizes maintain readability at this weight.
- **Label** (500, 0.75rem, 1, 0.08em, uppercase): Badge text, metadata labels, date stamps. Small, dense, discrete.
- **Mono** (400, 0.875rem, 1.5): Code blocks, technical snippets, file paths. Only in blog post and case study prose areas.

### Named Rules
**The Single-Face Rule.** No serif, no display font, no contrast pairing. Hierarchy is achieved entirely through weight, size, and spacing — not by switching typefaces. The discipline of a single variable font is the point.

## 4. Elevation

The system is flat by default. Depth is conveyed through tonal layering (lighter surfaces resting on darker ones), not through shadows. The page background provides the darkest plane; cards and surfaces lift one step per layer.

### Layering
- **Layer 0** (Midnight Slate): Page background.
- **Layer 1** (Surface Slate): Cards, sheet content, stacked surfaces.
- **Layer 2** (Elevated Slate): Hovered cards, popover content, navigation sheet.

### Shadow Vocabulary
Shadows are reserved for **state feedback only** and kept minimal:
- **Hover Lift** (`0 2px 8px oklch(0 0 0 / 0.25)`): Applied to interactive cards on hover. A controlled rise, not a float.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, interaction). A resting surface with a shadow is a bug.

## 5. Components

### Buttons
- **Shape:** Sharp corners (2px radius).
- **Default:** Luminous Cloud background, Midnight Slate text. The primary action — high contrast, unmistakable.
- **Outline:** Transparent background, Luminous Cloud text, thin Shadow Line border (1px). Secondary actions.
- **Ghost:** Transparent background, Luminous Cloud text, no border. Tertiary actions, links styled as buttons.
- **Hover / Focus:** All variants get a subtle Docklight focus ring (`0 0 0 2px {colors.accent}`) on keyboard focus. Ghost and outline buttons shift to a subtle Mist background fill on hover. Default button slightly reduces opacity.
- **Transition:** All state changes use 150ms ease-out.

### Cards / Containers
- **Corner Style:** Sharp corners (2px radius).
- **Background:** Surface Slate (layer 1).
- **Border:** Thin Shadow Line stroke (1px). Full border, no side-stripe accents.
- **Hover State:** Layer 2 background (Elevated Slate) + subtle shadow lift (Hover Lift shadow). 150ms ease-out transition.
- **Internal Padding:** 24px (`--spacing-6`).

### Badges
- **Style:** All-caps label typography (0.75rem, 500 weight, 0.08em tracking, uppercase). Transparent background with a Mist border fill.
- **Shape:** Sharp corners (2px radius).
- **No hover state.** Badges are static metadata.

### Navigation
- **Desktop:** Horizontal row. Links use Title weight with Muted foreground, switching to Luminous Cloud on active or hover. Thin 150ms color transition.
- **Mobile:** Sheet slide-in from left. Nav items use the same typographic treatment but stacked vertically with description sub-text in Fog.
- **Logo:** "JK" monogram in Title weight. Links to home.

### Reading Progress Indicator
- **Style:** Fixed top bar, 4px tall (`h-1`).
- **Fill:** Docklight accent color. Width tracks scroll progress.
- **Transition:** 150ms ease-out width transition.

### Separators
- **Style:** Full-width 1px line, Mist opacity (`oklch(0.20 0.015 260 / 0.5)`).
- **Role:** Divides major sections without visual weight.

## 6. Do's and Don'ts

### Do:
- **Do** use the Docklight accent on interactive elements only — links, focus rings, progress bar.
- **Do** use tonal layering for surface hierarchy: background → surface → elevated.
- **Do** use 2px radius for all corners. The sharpness is intentional.
- **Do** let the content breathe. Generous spacing between sections (48px+), tight spacing within components.
- **Do** use weight and size for typographic hierarchy. Never use color to differentiate heading levels.
- **Do** keep body text between 65–75 characters per line.
- **Do** respect reduced-motion preferences. The grain texture overlay should not animate when `prefers-reduced-motion: reduce` is set.
- **Do** test every screen in both light and dark mode if light mode is maintained.

### Don't:
- **Don't** use pure `#000` or `#fff`. Every surface has a subtle chromatic lean.
- **Don't** use side-stripe borders (thick `border-left` as accent). Full borders or nothing.
- **Don't** use gradient text, glassmorphism, or the hero-metric template (big number + small label + gradient accent).
- **Don't** use identical card grids with icon + heading + text, repeated endlessly. Vary card shapes or omit icons entirely.
- **Don't** use skill bars, avatar heroes, typing animations, or skill-tag grids. These are generic dev-portfolio signals.
- **Don't** add decorative borders, ornamental flourishes, or stock imagery. If it doesn't serve content or interaction, remove it.
- **Don't** animate CSS layout properties. Animate opacity and transforms only.
- **Don't** use bounce or elastic easing. Use ease-out exponential curves.
- **Don't** open modals as a first interaction pattern. Exhaust inline and progressive alternatives first.
- **Don't** nest cards. One card per unit.
