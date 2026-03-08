# Wydajność strony — zasady dla Portfolio

## Priorytety (Core Web Vitals)

| Metryka | Cel | Główna przyczyna problemów |
|---|---|---|
| LCP | < 2.5s | Duże obrazy bez priorytetu |
| CLS | < 0.1 | Obrazy bez width/height |
| INP | < 200ms | Zbyt duże JS bundles |

---

## Obrazy

**Zawsze używaj `<Image />` z `astro:assets`:**
```astro
---
import { Image } from 'astro:assets'
import projectMockup from '../assets/locon-mockup.jpg'
---
<Image src={projectMockup} alt="Locon data platform" width={800} height={450} />
```

- Nigdy surowy `<img>` bez `width` i `height` (powoduje CLS)
- Dodaj `loading="eager"` + `fetchpriority="high"` tylko dla LCP image (hero)
- Reszta: domyślny `loading="lazy"` z Astro
- Format: Astro automatycznie konwertuje do WebP — nie konwertuj ręcznie
- Projekt grid (Selected Work): aspect-ratio 16:9, preload pierwszych 3 obrazów

---

## JavaScript — minimalizuj client-side JS

**Zasada: jeśli można to zrobić w `.astro`, nie rób tego w React.**

| Użyj `.astro` | Użyj `.tsx` z `client:visible` |
|---|---|
| Hero (statyczny) | Animacje Framer Motion (fade-in up) |
| Tech Stack grid | Hover interaktywne z stanem |
| Timeline background | Formularz kontaktowy |
| Selected Work grid | Click-to-copy email |

**Dyrektywy client — wybieraj odpowiednią:**
```astro
<!-- Natychmiast — tylko dla krytycznych elementów above the fold -->
<Component client:load />

<!-- Gdy element wchodzi w viewport — preferowane dla below the fold -->
<Component client:visible />

<!-- Po załadowaniu strony — dla niekrytycznych -->
<Component client:idle />
```

---

## Fonts

**Opcja 1 — @fontsource (zero external request, zalecane):**
```astro
---
// W Layout.astro frontmatter
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'
import '@fontsource/jetbrains-mono/400.css'
---
```

**Opcja 2 — Google Fonts z preconnect:**
```astro
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
```

---

## Lenis (smooth scroll)

Inicjalizuj w `<script>` w Layout.astro — nie w React island:
```astro
<script>
  import Lenis from 'lenis'
  const lenis = new Lenis()
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
</script>
```

---

## CSS

- Tailwind automatycznie usuwa nieużywane klasy — nie ma potrzeby ręcznej optymalizacji
- Unikaj `@apply` w custom CSS — zwiększa bundle
- Animacje: preferuj CSS `transition` przez Tailwind (`transition-opacity duration-300`) zamiast Framer Motion tam gdzie nie potrzeba JS

---

## Bundle size — kontrola

Po `npm run build` sprawdź output w terminalu. Alerty:
- Chunk JS > 100KB → zbadaj co importujesz
- Framer Motion dodaje ~30KB gzipped — używaj tylko gdzie animacja jest kluczowa dla UX
- Lucide React: importuj named exports, nigdy `import * from 'lucide-react'`

```tsx
// Dobrze
import { Mail, Github, Linkedin } from 'lucide-react'

// Źle — importuje całą bibliotekę
import * as Icons from 'lucide-react'
```

---

## SEO / Meta

W `Layout.astro` zawsze:
```astro
<html lang="en">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Karol Liwiński — Fullstack Developer with GenAI. 6 years of commercial experience." />
<title>Karol Liwiński — Fullstack Developer with GenAI</title>
<link rel="canonical" href="https://karolliwinski.dev/" />
```
