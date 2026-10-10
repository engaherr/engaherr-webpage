# Development

- Requires Node `>=22.12.0`; use npm with the committed `package-lock.json`.
- Install dependencies with `npm install`.
- Run the foreground dev server with `npm run dev` at `http://localhost:4321`.
- For a background server use `npm run astro -- dev --background`; manage it with `npm run astro -- dev stop`, `status`, or `logs [--follow]`.
- Run `npm run astro -- check` and `npm run build` for focused validation. Run `npm run preview` only after building.
- No tests, linting, formatting, or CI configuration is present.

# Structure

- Astro 7.x ESM app. The entry page is `src/pages/index.astro`, which composes the portfolio sections in `src/components/` through `src/layouts/Layout.astro`.
- `Layout.astro` imports the root `input.css`; `src/assets/` contains bundled assets and `public/` contains static root files.
- TypeScript extends `astro/tsconfigs/strictest`; `.astro/` contains generated types and `dist/` contains build output. Both are ignored.
- `README.md` is the untouched Astro starter template; ignore it and trust config and this file instead.
- Agent skills are vendored in `.agents/skills/` and pinned by `skills-lock.json`.

# Content and i18n (read before editing copy)

- All copy lives in `src/data/content.ts`: a single `as const` object with parallel `es` and `en` trees. Components render `content.es` at build time.
- The language switcher (`src/scripts/app.ts`) swaps text via `data-i18n="dotted.path"` and attributes via `data-i18n-attr="attr:key;attr2:key"`. Only strings resolve; array entries need indexed keys such as `experience.items.0.bullets.1`.
- Every string change must land at the same path in both locales and carry a `data-i18n` key in the markup, or it silently stays Spanish after switching to English.
- Indexed keys bind by array position: `es` and `en` arrays must have the same length and order or entries silently disappear on language switch.
- `SectionHeading.astro` derives its keys from the `section` prop (`${section}.eyebrow` / `.title` / `.intro`); section copy must use exactly those key names (the resume intro is `resume.intro`, not `resume.description`).
- Locale resolution: `?lang=` query param, then localStorage key `engaher-locale`, default `es`. The GSAP loader (`src/scripts/loader.ts`) chooses its own locale from `navigator.languages`.

# Styling

- Tailwind CSS v4 is active through `@tailwindcss/vite` in `astro.config.mjs`; `input.css` at the repo root imports Tailwind and `tailwind-animations`, sets `@source "./src"`, and defines the brand tokens (colors `oxford-navy`, `yale-blue`, `pale-stale`, `evergreen`, `dark-spruce`; `font-display` / `font-body` / `font-mono`).
- Keep utility class names as complete string literals (see the color / rotation / delay arrays in `Projects.astro` and `Stack.astro`); classes composed at runtime are invisible to the Tailwind scanner.

# Gotchas

- Printing the site emits only the CV: `Resume.astro` is `print:block` while every other section is `print:hidden`. Keep print overrides consistent.
- Experience items carry a `datetime` field (`YYYY-MM`) used by the timeline `<time>` element; keep it in sync when editing periods.
- `Projects.astro`, `Stack.astro`, and `Resume.astro` size decorative arrays and per-index conditionals to the current item counts (project labels, `animationDelays`, `bullets.slice(...)`); extend them whenever items are added.
- `site` in `astro.config.mjs` is `https://engaherr-webpage.vercel.app`; it feeds the canonical link, Open Graph/Twitter meta, the JSON-LD `url` and the sitemap. Update it, plus `public/robots.txt`, when the deployment domain changes.
- Section numbering (`01`–`07` passed to `SectionHeading`, plus "SCROLL / 01 - 07" in `Hero.astro`) is manual; renumber when adding or removing a section.
- `public/og.png` is generated from `public/og.svg` (see README for the sharp command); edit the SVG and regenerate rather than hand-editing the PNG.
