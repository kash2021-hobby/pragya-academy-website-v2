

## Plan: Fix Advisor Tab Content + Academic Dropdown Navigation

### 1. Update Academic Page (`src/pages/Academic.tsx`)
- Read the `tab` query parameter from the URL (e.g., `?tab=advisor`)
- Use it to set the initial active tab (0 for principal, 1 for advisor)
- Replace the Advisor tab's placeholder body text with the full Assamese content provided
- Add the detailed sign-off block with name, title, and affiliation

### 2. Update Navbar (`src/components/Navbar.tsx`)
- Replace the single "Academic" link with a dropdown menu (CSS hover-based for desktop)
- Dropdown contains two items: "Principal's Message" → `/academic?tab=principal`, "Advisor's Message" → `/academic?tab=advisor`
- Use `ChevronDown` icon from Lucide next to "Academic"
- For mobile menu: render the two sub-items indented under "Academic" (no dropdown, just expanded list)
- Use relative positioning and a hover-revealed absolute dropdown panel styled consistently with the navbar theme

### Technical Details
- Use `useSearchParams` from `react-router-dom` in Academic.tsx to read `?tab=principal|advisor`
- Map param to tab index: `advisor` → 1, default → 0
- Navbar dropdown: pure CSS hover (`group/academic` + `group-hover/academic:block`) for zero-JS approach on desktop
- Highlight "Academic" nav link when pathname starts with `/academic`

