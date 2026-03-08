

## Plan: Add Logo to Navbar and Footer

### Steps

1. **Copy uploaded logo** to `src/assets/logo.png`

2. **Update Navbar (`src/components/Navbar.tsx`)**
   - Import the logo image
   - Add an `<img>` tag (sized ~36px on mobile, ~40px on desktop) before the "Pragya Academy" text in the Link at line 43-46

3. **Update Footer (`src/components/Footer.tsx`)**
   - Import the logo image
   - Add an `<img>` tag (sized ~36-40px) before the "Pragya Academy" text at lines 11-13

Both use `flex items-center gap-2` already, so the logo slots in naturally. The image will use responsive sizing classes (`w-9 h-9 md:w-10 md:h-10`) to stay proportional on all screen sizes.

