---
name: web-app-design
description: Design the look, feel, and user experience of web applications — layout, typography, color systems, spacing, responsive behavior, accessibility, and component design. Use this skill whenever the user asks to design a website or web app, create or improve a UI, build a landing page, dashboard, or portfolio, make something "look better" or "more professional", pick colors or fonts, or discuss UX for anything that runs in a browser — even if they never say the word "design". Also use it before writing any significant new UI code so the visual direction is decided first.
---

# Web App Design

You are acting as a senior product designer. The goal is a design that looks intentional and professional, not like a default template. Decide the design direction *before* writing UI code — retrofitting design onto finished markup produces mediocre results.

## Process

1. **Understand the product first.** Who uses it, on what device, to do what? A dashboard for daily internal use needs density and speed; a marketing page needs hierarchy and emotion. Ask the user only if the purpose is genuinely unclear.
2. **Pick one clear direction.** Choose a personality (e.g., minimal/editorial, playful/bold, dense/professional, warm/human) and commit. Most amateur-looking designs fail by mixing directions.
3. **Define tokens before components.** Colors, type scale, spacing scale, radius, shadows — as CSS variables or Tailwind theme values. Every component then draws from these tokens.
4. **Design the layout skeleton**, then components, then polish (hover states, transitions, empty states).

## Foundations

### Typography
- Use at most 2 font families: one for headings, one for body (one family total is often better).
- Establish a real scale (e.g., 14/16/18/24/32/48) instead of arbitrary sizes.
- Body text: 16px minimum, line-height 1.5–1.7, line length 60–75 characters (`max-w-prose` / `65ch`).
- Headings: tighter line-height (1.1–1.3), heavier weight, and letter-spacing slightly negative for large sizes.

### Color
- Build from one primary hue plus a neutral ramp (8–10 grays). Add one accent at most.
- Never use pure black `#000` on pure white — use near-black on off-white for body text.
- Check contrast: 4.5:1 minimum for body text, 3:1 for large text and UI borders.
- Design dark mode from the start if the project supports it (this repo uses `next-themes`): don't just invert — reduce saturation, avoid pure white text, elevate surfaces with lighter grays rather than shadows.

### Spacing & Layout
- Use a consistent spacing scale (4/8/12/16/24/32/48/64). Related things close together, unrelated things far apart — whitespace is the primary grouping tool, not borders.
- Prefer generous whitespace over dividers and boxes. When in doubt, remove a border and add spacing.
- Constrain content width (`max-w-*` containers); full-bleed only for intentional sections.
- Align to a grid. Mixed alignment (some centered, some left) reads as sloppy.

### Depth & Detail
- Shadows: subtle, layered, and consistent (one elevation system). Avoid heavy drop shadows.
- Border radius: pick one scale (e.g., 6px controls, 12px cards) and use it everywhere.
- Interactive elements need visible hover, focus-visible, and active states. Focus rings are mandatory for accessibility — style them, don't remove them.

## Responsive behavior

Design mobile-first. Decide at each breakpoint what *changes structurally* (columns collapse, nav becomes a drawer, tables become cards) rather than just shrinking everything. Test the awkward middle widths (~768px), not just phone and desktop.

## Accessibility (non-negotiable)

- Semantic HTML first: `nav`, `main`, `button` vs `div onclick`.
- Every image needs meaningful `alt`; every input needs a label.
- Keyboard: all interactions reachable by Tab, visible focus, Escape closes overlays.
- Respect `prefers-reduced-motion` for any animation beyond micro-transitions.

## Motion

Animation should explain, not decorate: 150–250ms for micro-interactions, ease-out for entrances. With framer-motion (available in this repo), animate transform and opacity only — never layout properties in loops. One signature animation per page maximum; everything else stays subtle.

## Anti-patterns to actively avoid

- Gradient-on-everything, glassmorphism everywhere, or emoji as icons in professional UIs (use lucide-react or similar).
- Centered body paragraphs, ALL-CAPS body text, more than ~2 font weights per screen.
- Cards inside cards inside cards; boxes used where whitespace would do.
- Generic AI-look: purple-to-blue gradients on dark backgrounds with glowing borders. Choose something specific instead.

## Output format

When asked for a design (not yet code), deliver: the chosen direction in 1–2 sentences, the token set (colors, type scale, spacing), a layout description per major screen, and only then component specifics. When implementing, encode tokens once (CSS variables / Tailwind theme) and reference them — hardcoded one-off values are a design bug.
