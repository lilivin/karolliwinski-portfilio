# /build-check — Build i naprawa błędów

Zbuduj projekt i napraw wszystkie błędy.

## Kroki

1. **Uruchom build:**
   ```
   npm run build
   ```

2. **Jeśli błędy TypeScript** — napraw typy, nie używaj `any` jako wyjścia awaryjnego

3. **Jeśli błędy importów** — sprawdź ścieżki, nazwy eksportów

4. **Jeśli błędy Astro** — sprawdź czy React components mają dyrektywę `client:*`

5. **Powtarzaj build** aż do `✓ Completed in X.XXs`

6. **Po sukcesie** — sprawdź rozmiary bundlów w output i zgłoś jeśli jakiś chunk > 100KB

## Typowe problemy

| Problem | Rozwiązanie |
|---|---|
| React component bez `client:*` | Dodaj `client:load` lub `client:visible` |
| Framer Motion w `.astro` | Przenieś animację do `.tsx` island |
| Brakujący import Tailwind | Sprawdź `astro.config.mjs` |
| `<img>` bez wymiarów | Zamień na `<Image />` z `astro:assets` |
