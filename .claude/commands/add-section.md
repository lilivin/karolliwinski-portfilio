# /add-section — Dodaj nową sekcję do portfolio

Dodaj sekcję opisaną w argumencie: `$ARGUMENTS`

## Kroki

1. **Przeczytaj `src/pages/index.astro`** — zrozum istniejącą strukturę i miejsce wstawienia
2. **Przeczytaj `CLAUDE.md`** — przypomnij sobie design system i wymagania
3. **Stwórz komponent sekcji** w `src/components/<NazwaSekcji>.astro` (lub `.tsx` jeśli interaktywna)
4. **Zaimportuj i dodaj** do `index.astro` w logicznym miejscu
5. **Sprawdź build:** `npm run build`

## Wymagania każdej sekcji

- Semantyczny HTML (`<section>`, `aria-label`)
- Tailwind utility classes — bez inline styles
- Kolory z design systemu (bg-white, bg-gray-50, text-black, text-gray-500, border-gray-200)
- Typografia: nagłówki `font-black tracking-tighter`, separatory `border-t border-gray-200`
- Responsywność: mobile-first (`sm:`, `md:`, `lg:`), max-width `max-w-7xl`, padding `px-6`
- Jeśli animacje — React island z Framer Motion (`client:visible` dla below the fold)
- Teksty po angielsku, ton premium, minimalistyczny
