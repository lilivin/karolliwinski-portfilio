# /add-component — Stwórz reużywalny komponent UI

Stwórz komponent o nazwie: `$ARGUMENTS`

## Kroki

1. **Zdecyduj typ pliku:**
   - `.astro` — jeśli komponent jest statyczny (nie potrzebuje useState, useEffect, event handlerów)
   - `.tsx` — jeśli potrzebuje interaktywności (animacje Framer Motion, hover z stanem, formularz)

2. **Stwórz plik** w `src/components/<NazwaKomponentu>.<astro|tsx>`

3. **Użyj TypeScript** — zdefiniuj Props interface na górze pliku `.tsx` lub w frontmatter `.astro`

4. **Zaproponuj użycie** — pokaż przykład importu i użycia komponentu

## Standardy komponentów

- Props z TypeScript interface — bez `any`
- Domyślne wartości props tam gdzie sensowne
- Tailwind dla stylów — zero custom CSS jeśli można Tailwindem
- Lucide React dla ikon — importuj z `lucide-react`, tylko używane
- Kolory z design systemu: `text-black`, `text-gray-500`, `bg-white`, `bg-gray-50`, `border-gray-200`
- Typografia: nagłówki `font-black tracking-tighter`, body `font-normal leading-relaxed`, mono `font-mono`
- Jeśli `.tsx` z animacją — importuj z `framer-motion`
- Jeśli `.tsx` używany w Astro — eksport default + ewentualnie named exports
