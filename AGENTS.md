## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`. The dev server listens at `localhost:4321`.

## Stack

- Astro 7.x (ESM, single-page starter at `src/pages/index.astro`)
- TypeScript with `astro/tsconfigs/strictest` — `.astro/` is gitignored (generated types)
- No tests, lint, formatter, or CI configured. `package.json` scripts are only `dev`, `build`, `preview`, `astro`.
- Node engine: `>=22.12.0` (enforced by `package.json`)

## Tailwind gotcha

`package.json` lists `"tailwind": "^4.0.0"` as a dependency, but the npm package is `tailwindcss` and nothing is wired into `astro.config.mjs` (no `@tailwindcss/vite` plugin). Tailwind is not actually active — fix the dependency name and add the Vite plugin before relying on Tailwind classes.

## Layout

- Pages: `src/pages/` (only `index.astro`)
- Components: `src/components/` (only `Welcome.astro`)
- Layouts: `src/layouts/Layout.astro`
- Static assets: `public/`, component-scoped assets: `src/assets/`