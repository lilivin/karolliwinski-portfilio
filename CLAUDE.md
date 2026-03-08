# Karol Liwiński — Portfolio

High-end, minimalist portfolio for Software Engineer Karol Liwiński. Inspired by `jameswilliams.design` - https://www.jameswilliams.design/ .

## Stack
- **Astro** (SSG) + **Tailwind CSS** + **Framer Motion** + **Lucide React**
- **Lenis** (smooth scrolling, integrated in layout)
- React islands (`client:load` / `client:visible`) tylko dla interaktywnych komponentów

## Design System
| Token | Wartość | Klasa Tailwind |
|---|---|---|
| Tło główne | `#FFFFFF` | `bg-white` |
| Tło drugorzędne | `#F9F9F9` | `bg-gray-50` |
| Tekst główny | `#000000` | `text-black` |
| Tekst pomocniczy | `#666666` | `text-gray-500` |
| Separator | 0.5px | `border-gray-200` |

## Typografia
- **Headings:** `Satoshi` lub `Inter` — Bold/Black, `tracking-tighter`
- **Body:** `Inter` — Regular, line-height 1.5
- **Technical/Data:** `JetBrains Mono` — dla danych i akcentów dev

## Język i ton
- **Język:** angielski (globalny odbiorca, remote collaboration)
- **Ton:** premium, minimalistyczny, wyniki-orientowany
- **Pozycjonowanie:** Elite freelancer / entrepreneur, 6 lat doświadczenia komercyjnego

## Struktura sekcji (z PRD)
1. **Hero** — "Fullstack Developer with GenAI" + sub-headline + CTA "Get in touch"
2. **Selected Work** — 3-kolumnowy grid (Locon, CYA Studio, Deloitte Digital)
3. **Tech Stack & Expertise** — Frontend, Backend & Data, GenAI & Workflow, DevOps
4. **Professional Background** — Timeline (Locon, CYA Studio, Deloitte Digital)
5. **Contact** — email `k.liwinski@gmail.com`, `+48 513 811 205`, LinkedIn, GitHub, "Based in Poland — GMT+1"

## Dostępne skille (`/komenda`)
| Komenda | Co robi |
|---|---|
| `/init` | Inicjalizuje projekt Astro z pełnym stackiem |
| `/add-section <opis>` | Dodaje nową sekcję do portfolio |
| `/add-component <nazwa>` | Tworzy reużywalny komponent UI |
| `/prd-status` | Sprawdza co z PRD jest już zaimplementowane |
| `/build-check` | Buduje projekt i naprawia błędy |
| `/update-copy <sekcja>` | Aktualizuje teksty zgodnie z PRD |

## Skills — zasady kodowania

Przed każdym zadaniem zapoznaj się z odpowiednim skillem:

| Skill | Kiedy używać |
|---|---|
| `.claude/skills/code-quality.md` | Zawsze — DRY, TypeScript, nazewnictwo |
| `.claude/skills/performance.md` | Obrazy, JS, fonty, bundle size, SEO |
| `.claude/skills/astro-components.md` | Tworzenie komponentów `.astro` i `.tsx` |

## Pełny PRD
Zobacz `.docs/prd.md`
