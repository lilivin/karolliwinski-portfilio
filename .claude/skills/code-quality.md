# Jakość kodu — zasady obowiązujące w projekcie

## DRY (Don't Repeat Yourself)

- Jeśli ten sam blok Tailwind klas pojawia się 3+ razy → wydziel komponent
- Dane (ceny, teksty, funkcje, ikony) trzymaj w tablicach/obiektach i renderuj przez `.map()` — nie duplikuj JSX/HTML ręcznie
- Współdzielone typy TypeScript → `src/types.ts`

**Źle:**
```astro
<div class="flex items-center gap-3 text-slate-50 font-semibold">Krok 1</div>
<div class="flex items-center gap-3 text-slate-50 font-semibold">Krok 2</div>
<div class="flex items-center gap-3 text-slate-50 font-semibold">Krok 3</div>
```

**Dobrze:**
```astro
---
const steps = ['Krok 1', 'Krok 2', 'Krok 3']
---
{steps.map(s => <div class="flex items-center gap-3 text-slate-50 font-semibold">{s}</div>)}
```

---

## Minimalizm — tylko to co potrzebne

- Nie dodawaj props, opcji ani wariantów których jeszcze nie ma use-case'u
- Nie twórz helpera dla operacji jednorazowej
- Nie dodawaj komentarzy do oczywistego kodu — komentuj tylko nieoczywistą logikę
- Nie dodawaj error handlingu dla scenariuszy niemożliwych w SSG

---

## TypeScript

- Zawsze definiuj interface Props na górze komponentu
- Nigdy `any` — użyj `unknown` jeśli typ jest naprawdę nieznany, albo zawęź typ
- Preferuj `type` dla union/intersection, `interface` dla obiektów z props

```tsx
// Dobrze
interface Props {
  title: string
  items: { label: string; icon: LucideIcon }[]
  variant?: 'primary' | 'secondary'
}

// Źle
interface Props {
  title: any
  items: object[]
  variant?: string
}
```

---

## Nazewnictwo

| Co | Konwencja | Przykład |
|---|---|---|
| Komponenty | PascalCase | `BeforeAfterSlider.tsx` |
| Pliki Astro | PascalCase | `PricingCard.astro` |
| Zmienne/funkcje | camelCase | `handleSubmit` |
| Dane/stałe | camelCase | `pricingPlans` |
| CSS klasy | Tailwind utility | — |

---

## Git-friendly kod

- Jeden komponent = jeden plik
- Krótkie, skoncentrowane komponenty (do ~100 linii) — jeśli więcej, rozdziel
- Importy w kolejności: zewnętrzne biblioteki → wewnętrzne moduły → typy
