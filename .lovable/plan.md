

## Plan: Navy Blue Navbar Background at Top, White on Scroll

### Change in `src/components/Navbar.tsx`

**1. Navbar background (line 42):** Change the unscrolled state from `bg-transparent` to `bg-navy` so the navbar has a solid dark blue background in the hero area, matching the reference image.

**2. Text colors when unscrolled (lines 46-47, 56-59, 80-84):** Update all nav link and logo text colors for the unscrolled state:
- "Pragya" text: `text-navy` → `text-primary-foreground` (white)
- "Academy" text: keep `text-orange`
- Nav links: `text-navy` → `text-primary-foreground` (white)
- Active links still use `text-orange`

**3. Mobile hamburger icon (line 97):** Change from `text-navy` to conditionally use `text-primary-foreground` when unscrolled and `text-navy` when scrolled.

This gives the exact look from the reference: blue navbar at top with white text, transitioning to white navbar with dark text on scroll.

