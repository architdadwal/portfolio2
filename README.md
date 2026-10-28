# Archit Dadwal — Portfolio

A component-based React + Vite portfolio with a responsive editorial layout, animated project artwork built in CSS, project category filters, expandable project notes, and mobile navigation.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Architecture

- `src/App.jsx` — page composition and interaction state
- `src/components/` — reusable section labels, skill pills, project cards
- `src/data/portfolio.js` — editable project and capability content
- `src/hooks/useReveal.js` — reusable intersection-observer reveal hook
- `src/styles.css` — responsive design system and project-specific art

## Before publishing

1. Replace the sample email `hello@architdadwal.com` with your preferred email if needed.
2. Replace the generic GitHub and LinkedIn URLs with your actual profiles.
3. Add real project URLs, screenshots, and repository links where you can publicly share them.
4. Review each project description and technology list for accuracy and confidentiality. The iGOT Karmayogi entry is intentionally high-level; only add details you are allowed to disclose.
5. Client and enterprise project visuals are CSS-made portfolio illustrations, not official product screenshots.

Project cards currently use expandable notes rather than invented live/demo links. Add verified links to each project when available.
