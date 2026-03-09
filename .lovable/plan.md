

## Plan: Fix Hero Readability + Add Parallax Effect

### 1. Darken the hero overlay (`src/pages/Index.tsx`, line 39)
- Change `bg-navy/70` to `bg-navy/80` for a stronger dark overlay, making white text and nav links much more readable against the busy background.

### 2. Add parallax scrolling effect (`src/pages/Index.tsx`)
- Add a `useEffect` hook that listens to the `scroll` event and translates the hero background image vertically at ~50% scroll speed (`translateY(scrollY * 0.5)`)
- Use a `useRef` to target the hero image element
- Apply `will-change: transform` for GPU-accelerated performance
- Wrap the hero section in `overflow-hidden` to prevent the parallax image from spilling out

### Technical Details
- The parallax uses `window.scrollY * 0.5` applied via `ref.current.style.transform` in a scroll listener with passive event for performance
- The image needs increased height (e.g., `h-[120%]` instead of `h-full`) to prevent gaps during parallax shift
- `overflow-hidden` on the hero `<section>` clips the oversized image

