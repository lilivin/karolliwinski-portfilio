# /init — Inicjalizacja projektu Portfolio

Zainicjalizuj projekt Astro z pełnym stackiem zgodnie ze specyfikacją w CLAUDE.md.

## Kroki

1. **Sprawdź stan repo** — użyj `ls`, `cat package.json` (jeśli istnieje), aby zobaczyć co już jest
2. **Zainicjalizuj Astro** jeśli `package.json` nie istnieje:
   ```
   npm create astro@latest . -- --template minimal --no-install --no-git
   ```
3. **Zainstaluj zależności:**
   ```
   npm install
   npx astro add tailwind react
   npm install framer-motion lucide-react lenis @fontsource/inter @fontsource/jetbrains-mono
   ```
4. **Stwórz strukturę katalogów:**
   - `src/components/` — komponenty Astro i React
   - `src/layouts/` — layout bazowy
   - `src/pages/index.astro` — strona główna
   - `public/images/` — mockupy projektów

5. **Skonfiguruj `astro.config.mjs`** — output: 'static', integracje tailwind + react

6. **Stwórz `src/layouts/Layout.astro`** z:
   - `lang="en"`, meta SEO, canonical URL
   - Import fontów `Inter` + `JetBrains Mono` (via @fontsource lub Google Fonts z preconnect)
   - Inicjalizacja Lenis w `<script>` (smooth scroll)

7. **Zbuduj szkielet `src/pages/index.astro`** importując sekcje w kolejności z PRD:
   - Hero, SelectedWork, TechStack, ProfessionalBackground, Contact

8. **Uruchom `npm run build`** i napraw błędy jeśli wystąpią

## Zasady kodu obowiązujące w tym projekcie

- Astro `.astro` dla statycznych sekcji, React `.tsx` tylko gdy potrzebna interaktywność
- `client:load` dla elementów above the fold, `client:visible` dla below the fold
- Tailwind utility classes — bez custom CSS jeśli można to osiągnąć Tailwindem
- Obrazy przez `<Image />` z `astro:assets` — nigdy surowy `<img>` bez width/height
- Ikony z `lucide-react` — importuj tylko używane
- Animacje Framer Motion tylko w React islands, nie w `.astro`
- Zero `any` w TypeScript
- Kolory wyłącznie z design systemu (white, gray-50, black, gray-500, gray-200)
- Typografia: Satoshi/Inter dla headingów (tracking-tighter, font-black), Inter dla body, JetBrains Mono dla akcentów technicznych
