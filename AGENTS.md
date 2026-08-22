# Development

- Requires Node `>=22.12.0`; use npm with the committed `package-lock.json`.
- Install dependencies with `npm install`.
- Run the foreground dev server with `npm run dev` at `http://localhost:4321`.
- For a background server use `npm run astro -- dev --background`; manage it with `npm run astro -- dev stop`, `status`, or `logs`.
- Run `npm run astro -- check` and `npm run build` for focused validation. Run `npm run preview` only after building.
- No tests, linting, formatting, or CI configuration is present.

# Structure

- This is an Astro 7.x ESM app. The entry page is `src/pages/index.astro`, which composes `src/layouts/Layout.astro` and `src/components/Welcome.astro`.
- `Layout.astro` imports `src/styles/global.css`; `src/assets/` contains bundled assets and `public/` contains static root files.
- TypeScript extends `astro/tsconfigs/strictest`; `.astro/` contains generated types and `dist/` contains build output. Both are ignored.

# Styling

- Tailwind CSS v4 is active through `@tailwindcss/vite` in `astro.config.mjs` and `@import "tailwindcss"` in `src/styles/global.css`.
