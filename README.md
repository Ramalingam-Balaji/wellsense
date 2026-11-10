# WellSense Community Trips

A responsive Next.js 16 site for WellSense community trips, split into two pages:

- `/` — Home: hero, highlights, featured trip (Puri & Konark), 2027 calendar preview
- `/events` — Events: month calendar strip, featured trip, trip tabs by category, travel options, interactive Leaflet map with filters, and a registration form

Font: **Poppins** (`"Poppins", Arial, sans-serif`) loaded via `next/font/google`, applied site-wide including headings.

## Project structure (modifications)

```
src/
├── app/
│   ├── layout.tsx            # Root layout — Poppins + Geist Mono fonts, metadata
│   ├── globals.css           # Design system: brand palette, backgrounds, buttons, responsive grids
│   ├── page.tsx              # Home route  (Header + HomePage + Footer)
│   └── events/
│       └── page.tsx          # Events route (Header + EventsPage + Footer)
├── data/
│   └── trips.ts              # Shared typed trips data module (12 trips for 2027, categories, activities, departure cities)
└── components/
    └── wellsense/
        ├── SiteHeader.tsx    # Shared sticky header with responsive mobile menu
        ├── SiteFooter.tsx    # Shared footer with CTA
        ├── HomePage.tsx      # Home page UI
        ├── EventsPage.tsx    # Events page UI (calendar, tabs, filters, form)
        └── TripMap.tsx       # Client-only Leaflet map with custom pins & fly-to
```

## Quick start

```bash
bun install        # or: npm install
bun run dev        # or: npm run dev
```

Open http://localhost:3000

The Leaflet map (`TripMap.tsx`) is loaded with `next/dynamic` and `ssr: false`, so no extra setup is needed.
