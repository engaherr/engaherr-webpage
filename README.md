# engaherr-webpage

Portafolio personal de **Enrique Gamboa Hernández** — Ingeniero de Software / Desarrollador Full-Stack. Sitio de una página, bilingüe (ES/EN), construido con Astro, Tailwind CSS v4 y GSAP.

**Producción:** <https://engaherr-webpage.vercel.app>

## Comandos

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala dependencias (Node `>=22.12.0`) |
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run astro -- dev --background` | Servidor en segundo plano (`stop` / `status` / `logs` para gestionarlo) |
| `npm run astro -- check` | Type-check de Astro y TypeScript |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build (requiere `npm run build` antes) |

No hay tests, linting ni CI configurados; `npm run astro -- check` y `npm run build` son la validación de referencia.

## Estructura

- `src/pages/index.astro` — compone todas las secciones vía `src/layouts/Layout.astro`.
- `src/pages/404.astro` — página de error con el mismo sistema visual.
- `src/components/` — Hero, About, Experience, Projects, Stack, Education, Resume (CV imprimible), Contact, SiteHeader, SectionHeading.
- `src/data/content.ts` — **única fuente de contenido**: objeto `as const` con los árboles `es` y `en` en paralelo, más `personalInfo` (email, teléfono, redes).
- `src/scripts/app.ts` — switcher de idioma, menú móvil e impresión; `src/scripts/loader.ts` — loader animado con GSAP.
- `input.css` (raíz) — importa Tailwind y `tailwind-animations`, define los tokens de marca (`oxford-navy`, `yale-blue`, `pale-stale`, `evergreen`, `dark-spruce`).

## Contenido e i18n

- El texto se renderiza con `content.es` en build; el cambio a inglés ocurre en el cliente mediante atributos `data-i18n="clave.anidada"` (y `data-i18n-attr` para atributos). Cada cambio de copy debe existir en **ambos** idiomas y con su clave en el markup.
- El idioma se resuelve con `?lang=`, luego `localStorage` (`engaher-locale`), por defecto `es`.
- Imprimir el sitio emite solo el CV (el resto de secciones son `print:hidden`).

## Assets sociales

- `public/og.png` (1200×630) es la imagen para Open Graph / Twitter. La fuente editable es `public/og.svg`; tras editarla, regenera el PNG:

```sh
node --input-type=module -e "
import sharp from 'sharp';
await sharp('public/og.svg', { density: 96 }).resize(1200, 630).png().toFile('public/og.png');
"
```

- `public/favicon.svg` (monograma `EG`) es el favicon principal; `public/favicon.ico` se generó desde él con ImageMagick.

## Deploy

Build estático: Vercel detecta Astro sin configuración adicional (no requiere adapter). El dominio canónico vive en `site` dentro de `astro.config.mjs`; si cambia, actualiza también `public/robots.txt` y el sitemap se regenera en build (`@astrojs/sitemap`).

Las convenciones de trabajo del repositorio están en [`AGENTS.md`](./AGENTS.md).
