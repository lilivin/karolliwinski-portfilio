# /prd-status — Status implementacji PRD

Sprawdź co z PRD jest już zaimplementowane, a co jeszcze nie.

## Kroki

1. **Przeczytaj `.docs/prd.md`** — załaduj pełne wymagania
2. **Przejrzyj strukturę projektu:**
   - `src/pages/index.astro`
   - `src/components/` — jakie komponenty istnieją
   - `src/layouts/` — czy layout jest skonfigurowany
3. **Porównaj** każdy punkt PRD z tym co istnieje w kodzie
4. **Przedstaw raport** w formacie:

```
## Status implementacji PRD

### Zaimplementowane ✅
- [lista tego co gotowe]

### Brakuje / W toku ⏳
- [lista tego czego brak]

### Sugerowane kolejne kroki
1. [najpilniejsze zadanie]
2. [kolejne]
```

Bądź konkretny — podawaj nazwy plików i komponentów, nie ogólniki.
