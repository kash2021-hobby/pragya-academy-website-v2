
Issue diagnosis
- The close button is not visible because the lightbox layer uses `z-50` and the global fixed navbar uses `z-[100]` (`src/components/Navbar.tsx`), so the navbar sits above the lightbox’s top area.
- In `src/pages/Gallery.tsx`, the close button is at `top-6 right-6` with `z-[60]`, which is still below the navbar stack level, so it gets hidden on mobile.

Implementation plan
1. Update lightbox stacking order in `src/pages/Gallery.tsx`:
   - Change lightbox wrapper from `z-50` to a value above navbar (e.g. `z-[200]`).
   - Keep controls above the image layer (close button and arrows at slightly higher z within the overlay).
2. Keep close button mobile-safe and visible:
   - Use safe-area-aware top spacing (for notches): `top-[calc(env(safe-area-inset-top)+0.75rem)]`.
   - Retain high-contrast styling so it remains visible on bright/dark photos.
3. Add a fallback close interaction:
   - Enable backdrop tap-to-close on the overlay.
   - Prevent accidental close when tapping image/control elements via `stopPropagation` on content wrapper.
4. Verify behavior in mobile viewport (390x754):
   - Open any image, confirm close button appears immediately.
   - Swipe/arrow navigate multiple images and confirm close button remains visible.
   - Confirm navbar no longer overlays the close control.

Technical details
- Files impacted: `src/pages/Gallery.tsx` (primary), reference only: `src/components/Navbar.tsx` (for z-index comparison).
- Target layering:
  - Navbar: `z-[100]` (unchanged)
  - Lightbox overlay: `z-[200]`
  - Close button: `z-[210]`
- This keeps global nav intact while ensuring modal/lightbox correctly overlays all page UI.
