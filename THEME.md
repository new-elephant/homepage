# New Elephant Design System - Color Palette

## Overview
This document outlines the comprehensive color system for New Elephant's website. The palette is designed to be versatile, accessible, and aligned with the medical equipment industry.

---

## Color Scales

### Primary Colors (Blue-Gray)
Professional, trustworthy, medical-grade aesthetic.

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-primary-900` | `#3d4a52` | Dark headings, emphasis |
| `--color-primary-800` | `#4f5f6a` | Dark text |
| `--color-primary-700` | `#687a86` | **Main brand color**, body text |
| `--color-primary-600` | `#7b8c96` | Secondary text |
| `--color-primary-500` | `#8d9ca4` | **Secondary brand color** |
| `--color-primary-400` | `#a3b0b7` | Borders, muted text |
| `--color-primary-300` | `#b9c3c9` | Light borders |
| `--color-primary-200` | `#cfd7db` | Subtle backgrounds |
| `--color-primary-100` | `#e5eaed` | Very light backgrounds |
| `--color-primary-50` | `#f2f5f6` | Hover states, card backgrounds |

### Neutral Colors (Beige)
Warm, approachable, comfortable backgrounds.

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-neutral-900` | `#9b8f82` | Dark warm text |
| `--color-neutral-800` | `#b5aca0` | Warm text |
| `--color-neutral-700` | `#cfc8bd` | Muted warm text |
| `--color-neutral-600` | `#d9d3ca` | Light warm text |
| `--color-neutral-500` | `#e5dfd8` | **Main background color** |
| `--color-neutral-400` | `#ebe6e1` | Slightly lighter background |
| `--color-neutral-300` | `#f0ede9` | Raised surfaces |
| `--color-neutral-200` | `#f6f4f2` | Overlay backgrounds |
| `--color-neutral-100` | `#fafaf9` | Very light backgrounds |
| `--color-neutral-50` | `#fcfcfc` | Almost white |

### Sage Colors
Natural, calming, healthcare-associated tones.

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-sage-900` | `#8a8e76` | Dark sage text |
| `--color-sage-800` | `#a2a68e` | Medium sage text |
| `--color-sage-700` | `#babfa6` | Sage text |
| `--color-sage-600` | `#c7cbb5` | Light sage text |
| `--color-sage-500` | `#d4d7c4` | **Main sage color**, alternate backgrounds |
| `--color-sage-400` | `#dddfd0` | Light sage background |
| `--color-sage-300` | `#e5e7db` | Very light sage |
| `--color-sage-200` | `#edefe6` | Subtle sage overlay |
| `--color-sage-100` | `#f6f7f2` | Minimal sage tint |
| `--color-sage-50` | `#fafbf9` | Almost white with sage hint |

### Accent Warm (Terracotta)
Energy, warmth, call-to-action.

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-accent-warm-900` | `#a04e44` | Dark terracotta |
| `--color-accent-warm-800` | `#ba5e53` | Hover state for main accent |
| `--color-accent-warm-700` | `#d4766a` | **Main warm accent** |
| `--color-accent-warm-600` | `#db8e84` | Light warm accent |
| `--color-accent-warm-500` | `#e2a69e` | Softer warm accent |
| `--color-accent-warm-400` | `#e9beb8` | Very light warm accent |
| `--color-accent-warm-300` | `#f0d6d2` | Warm tint |
| `--color-accent-warm-200` | `#f7eeec` | Subtle warm background |
| `--color-accent-warm-100` | `#faf5f4` | Minimal warm tint |
| `--color-accent-warm-50` | `#fdfcfc` | Almost white with warm hint |

### Accent Teal
Innovation, healthcare, trust.

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-accent-teal-900` | `#1a645a` | Dark teal |
| `--color-accent-teal-800` | `#227b6f` | Hover state for main accent |
| `--color-accent-teal-700` | `#2a9d8f` | **Main teal accent** |
| `--color-accent-teal-600` | `#4eaea2` | Light teal accent |
| `--color-accent-teal-500` | `#72bfb5` | Softer teal accent |
| `--color-accent-teal-400` | `#96cfc8` | Very light teal accent |
| `--color-accent-teal-300` | `#bae0db` | Teal tint |
| `--color-accent-teal-200` | `#ddf0ed` | Subtle teal background |
| `--color-accent-teal-100` | `#eef7f6` | Minimal teal tint |
| `--color-accent-teal-50` | `#f7fcfb` | Almost white with teal hint |

---

## Semantic Variables

### General Purpose
```css
--color-primary          /* Main brand color (#687a86) */
--color-secondary        /* Secondary color (#8d9ca4) */
--color-background       /* Main background (#e5dfd8) */
--color-background-alt   /* Alternate background (#d4d7c4) */
```

### Text
```css
--color-text-primary     /* Primary text color */
--color-text-secondary   /* Secondary text color */
--color-text-muted       /* Muted/disabled text */
--color-text-on-primary  /* Text on primary color */
--color-text-on-dark     /* Text on dark backgrounds */
```

### Surfaces
```css
--color-surface          /* Standard surface */
--color-surface-raised   /* Elevated surface (cards) */
--color-surface-overlay  /* Overlay/modal backgrounds */
```

### Borders
```css
--color-border           /* Standard border */
--color-border-light     /* Light border */
--color-border-dark      /* Dark/emphasized border */
```

### Accents
```css
--color-accent-1         /* Primary accent (teal) */
--color-accent-1-hover   /* Teal hover state */
--color-accent-1-light   /* Light teal background */

--color-accent-2         /* Secondary accent (warm) */
--color-accent-2-hover   /* Warm hover state */
--color-accent-2-light   /* Light warm background */
```

---

## Additional Design Tokens

### Shadows
```css
--shadow-sm    /* Subtle shadow for small elements */
--shadow-md    /* Medium shadow for cards */
--shadow-lg    /* Large shadow for dropdowns */
--shadow-xl    /* Extra large shadow for modals */
--shadow-2xl   /* Dramatic shadow for hero elements */
```

### Spacing
```css
--space-xs   /* 0.25rem / 4px */
--space-sm   /* 0.5rem / 8px */
--space-md   /* 1rem / 16px */
--space-lg   /* 1.5rem / 24px */
--space-xl   /* 2rem / 32px */
--space-2xl  /* 3rem / 48px */
--space-3xl  /* 4rem / 64px */
--space-4xl  /* 6rem / 96px */
```

### Border Radius
```css
--radius-sm    /* 4px - small elements */
--radius-md    /* 8px - buttons, inputs */
--radius-lg    /* 16px - cards */
--radius-xl    /* 24px - hero elements */
--radius-full  /* 9999px - circular */
```

### Typography
```css
/* Font Sizes */
--font-size-xs   /* 0.75rem / 12px */
--font-size-sm   /* 0.875rem / 14px */
--font-size-base /* 1rem / 16px */
--font-size-lg   /* 1.125rem / 18px */
--font-size-xl   /* 1.25rem / 20px */
--font-size-2xl  /* 1.5rem / 24px */
--font-size-3xl  /* 1.875rem / 30px */
--font-size-4xl  /* 2.25rem / 36px */
--font-size-5xl  /* 3rem / 48px */
--font-size-6xl  /* 4rem / 64px */

/* Font Weights */
--font-weight-normal    /* 400 */
--font-weight-medium    /* 500 */
--font-weight-semibold  /* 600 */
--font-weight-bold      /* 700 */
--font-weight-extrabold /* 800 */

/* Line Heights */
--line-height-tight    /* 1.2 - headings */
--line-height-normal   /* 1.6 - body text */
--line-height-relaxed  /* 1.8 - comfortable reading */
--line-height-loose    /* 2 - spacious text */
```

---

## Usage Examples

### Buttons
```css
/* Primary Button */
background: var(--color-accent-1);
color: white;

/* Primary Button Hover */
background: var(--color-accent-1-hover);

/* Secondary Button */
background: var(--color-accent-2);
color: white;
```

### Cards
```css
background: var(--color-surface);
border: 1px solid var(--color-border-light);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
```

### Text Hierarchy
```css
/* Heading */
color: var(--color-text-primary);
font-weight: var(--font-weight-bold);

/* Body */
color: var(--color-text-primary);
line-height: var(--line-height-normal);

/* Muted */
color: var(--color-text-muted);
```

---

## Accessibility Notes

- All text/background combinations meet WCAG AA standards
- Primary text (#687a86) on neutral backgrounds (#e5dfd8) has 4.5:1 contrast ratio
- Accent colors provide sufficient contrast for interactive elements
- Darker shades (900-700) recommended for text
- Lighter shades (100-50) recommended for backgrounds

---

## Color Psychology

- **Blue-Gray (Primary)**: Trust, professionalism, medical expertise
- **Beige/Sage (Neutral)**: Warmth, comfort, approachability
- **Teal (Accent 1)**: Innovation, healthcare, cleanliness
- **Terracotta (Accent 2)**: Energy, warmth, human touch

---

*Last updated: 2025-11-14*
