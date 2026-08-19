---
name: Santi Subidia Portfolio Design System
description: Interactive Creative Studio — obsidian ground, electric indigo/cyan accents, tactile glass panels, and physics-driven micro-interactions
colors:
  background: "#0b0d13"
  foreground: "#f8fafc"
  surface: "#121620"
  surface-hover: "#181d2a"
  surface-border: "#262e40"
  surface-card: "#151a26"
  surface-elevated: "#1c2333"
  primary: "#6366f1"
  primary-light: "#818cf8"
  secondary: "#06b6d4"
  secondary-light: "#22d3ee"
  signal-emerald: "#10b981"
  signal-amber: "#f59e0b"
  signal-rose: "#f43f5e"
typography:
  display:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
  card-glass:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
---

# Design System: Santi Subidia Portfolio

## Overview

**Creative North Star: "Interactive Creative Studio & Telemetry Lab"**

The visual language pairs high-density technical engineering telemetry with fluid, tactile interactive micro-physics. Rejecting static card templates and generic gradient texts, it establishes an obsidian ground with glowing indigo and cyan accents that react naturally to pointer velocity, keyboard inputs, and state changes.

**Key Characteristics:**
- Deep obsidian dark space environment (`#0b0d13`) with subtle radial illumination.
- Tactile frosted glass elevations (`rgba(21, 26, 38, 0.7)` with `backdrop-filter: blur(10px)`).
- Distinctive typography pairing: Bold geometric display (`Syne`), clean interface text (`Inter`), and calibrated telemetry monospace (`JetBrains Mono`).
- Interactive physics and real-time execution proving frontend craft directly.

## Colors

The palette is committed and dark-mode native, establishing high contrast and functional signal roles.

### Primary
- **Electric Indigo** (`#6366f1` / `#818cf8`): Used for primary action buttons, focused keyboard highlights, and active telemetry indicators.

### Secondary
- **Electric Cyan** (`#06b6d4` / `#22d3ee`): Used for key metadata tags, active tab indicators, and particle highlights.

### Signal
- **Signal Emerald** (`#10b981`): Status badges, availability indicators, and passed test/compilation confirmations.
- **Signal Amber** (`#f59e0b`): Warning indicators and metric telemetry.

### Neutral
- **Deep Obsidian** (`#0b0d13`): Root canvas background ground.
- **Slate Surface Card** (`#151a26`): Container cards with subtle border illumination.
- **Slate Surface Elevated** (`#1c2333`): Raised controls, pills, and input backdrops.
- **Slate Surface Border** (`#262e40`): 1px structural container dividing lines.
- **Foreground Text** (`#f8fafc`): Crisp readable text (≥7.0:1 WCAG AAA contrast).

### Named Rules
**The Single Source Glow Rule.** Colored glow halos are never arbitrary decorations; they appear strictly as feedback for active, hovered, or focused interactive components.

## Typography

**Display Font:** Syne (geometric, confident, punchy display face)
**Body Font:** Inter (clean, neutral, highly legible workhorse UI face)
**Label/Mono Font:** JetBrains Mono (precision code and telemetry measurements)

### Hierarchy
- **Display** (Bold 700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.1 line-height): Hero value statement and section titles.
- **Headline** (Bold 700, `1.75rem–2.25rem`, 1.2 line-height): Major component headings and project specimen names.
- **Title** (Semi-bold 600, `1.125rem–1.25rem`, 1.3 line-height): Card headers and lab experiment titles.
- **Body** (Regular 400, `0.9375rem–1rem`, 1.6 line-height, max-width 65–75ch): Explanatory copy and architectural breakdowns.
- **Label / Telemetry** (Mono 400/500, `0.75rem–0.8125rem`, 1.5 line-height): Tags, stats, commands, code blocks, and metrics.

## Layout

- **Container Model:** Max-width 7xl (`80rem` / `1280px`) centered on viewport with responsive gutter padding (`px-4 sm:px-6 lg:px-8`).
- **Section Spacing:** Generous vertical rhythm (`py-24` / `96px` between sections) with subtle divider lines (`border-b border-surface-border`).
- **Responsive Grids:** 1-column mobile adapting to 2-column and 3-column desktop viewports with `gap-6` and `gap-8`.

## Elevation & Depth

Surfaces use hybrid tonal layering and frosted glass backdrops.

### Shadow Vocabulary
- **Glass Card Rest:** `0 8px 32px 0 rgba(0, 0, 0, 0.37)` with `backdrop-filter: blur(10px)`
- **Glass Card Hover:** `0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(99, 102, 241, 0.2)` with `translateY(-2px)`
- **Indigo Glow:** `0 0 25px -5px rgba(99, 102, 241, 0.4)`

### Named Rules
**The Tactile Elevation Rule.** Interactive cards elevate on hover with a 2px lift and subtle indigo border glow; non-interactive containers remain flat at rest.

## Shapes

- **Base Radius:** `12px` (`rounded-xl`) for buttons, inputs, and interactive controls.
- **Container Radius:** `16px` (`rounded-2xl`) for major cards, modals, and lab surfaces.
- **Pill Radius:** `9999px` (`rounded-full`) for navigation rail and status chips.
- **Border Treatment:** Consistent `1px solid #262e40` across all structural containers.

## Components

### Buttons
- **Shape:** `12px` rounded corners.
- **Primary:** Electric Indigo (`#6366f1`), white text, `px-6 py-3`, shadow glow on hover.
- **Secondary / Glass:** Surface card background, border `1px solid #262e40`, hover elevation.

### Floating Navigation Bar
- **Style:** Fixed top glass pill with `backdrop-blur-xl`, responsive mobile drawer, availability ping badge, and `Cmd+K` command trigger.

### Project Specimen Card
- **Style:** Frosted glass panel with category badge, live URL and GitHub icons, architecture highlights, performance metrics, and inline code inspector.

### Command Palette (Cmd+K)
- **Style:** Centered modal with keyboard navigation, section quick jumps, instant email copy action, and external link triggers.

## Do's and Don'ts

### Do:
- **Do** maintain strict contrast ratios (≥4.5:1 for body copy, ≥3:1 for large display).
- **Do** keep animations smooth, bounded, and hardware-accelerated (60 FPS canvas loop, exponential transitions).
- **Do** provide immediate tactile feedback on all interactive states (hover, focus, copy).

### Don't:
- **Don't** use decorative gradient text or low-contrast gray text.
- **Don't** add kickers/eyebrows above headings.
- **Don't** introduce generic icon sets; keep SVGs crisp, uniform, and 2px stroke weight.
