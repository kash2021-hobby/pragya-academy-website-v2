

## Plan: Redesign Faculties Page with Full Details

### Changes to `src/pages/Faculties.tsx`

**1. Update `facultyData` array** — Add `qualification`, `experience`, and optional `details` fields for all 19 faculty members using the exact data provided.

**2. Switch grid to 3-column layout** — Change from `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4` to `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

**3. Redesign card layout** — Each card becomes a `flex flex-col` container:
- Image area (aspect-square or aspect-[3/4]) with photo or User icon fallback — remove the hover overlay
- Text area below with all info permanently visible:
  - **Name** — bold, navy/foreground color
  - **Subject** — orange accent
  - **Qualification** — dark gray (`text-muted-foreground`)
  - **Experience** — medium gray, smaller text
  - **Details** — small text, only rendered if present (Dr. Mukut Kalita)
- Use `flex-grow` on the text area so cards align evenly in the grid regardless of content height

