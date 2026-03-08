# Komponenty w Astro — wzorce i zasady

## Kiedy `.astro` a kiedy `.tsx`

| Sytuacja | Plik |
|---|---|
| Statyczny HTML z danymi z props | `.astro` |
| Pętle, warunki, dane z tablicy | `.astro` |
| useState / useEffect | `.tsx` |
| Obsługa eventów (onClick, onChange) | `.tsx` |
| Animacje Framer Motion | `.tsx` |
| Click-to-copy, scroll listener | `.tsx` |

**Reguła:** zacznij od `.astro`. Przejdź do `.tsx` tylko gdy potrzebujesz reaktywności.

---

## Anatomia komponentu `.astro`

```astro
---
// 1. Importy
import { Image } from 'astro:assets'

// 2. Props
interface Props {
  title: string
  items: { label: string; value: string }[]
  variant?: 'default' | 'muted'
}

const { title, items, variant = 'default' } = Astro.props
// 3. Logika (synchroniczna lub async)
const formattedItems = items.map(i => ({ ...i, label: i.label.trim() }))
---

<!-- 4. Template -->
<section class:list={['py-24 px-6', { 'bg-gray-50': variant === 'muted' }]}>
  <h2 class="text-4xl font-black tracking-tighter text-black">{title}</h2>
  {formattedItems.map(item => (
    <div class="text-gray-500">{item.label}: {item.value}</div>
  ))}
</section>
```

---

## Anatomia komponentu React `.tsx` (island)

```tsx
// 1. Importy zewnętrzne
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

// 2. Typy
interface Props {
  email: string
}

// 3. Komponent
export default function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy} className="flex items-center gap-2 text-black hover:text-gray-500 transition-colors">
      <Mail size={16} />
      {copied ? 'Copied!' : email}
    </button>
  )
}
```

---

## Przekazywanie danych Astro → React

Astro serializuje props do JSON automatycznie. Ograniczenia:
- Przekazuj tylko serializowalne dane (string, number, array, object)
- Nie przekazuj funkcji ani klas
- Obrazy: przekazuj `src` jako string, nie obiekt ImageMetadata

```astro
---
import CopyEmail from '../components/CopyEmail.tsx'
---

<!-- Dobrze -->
<CopyEmail email="k.liwinski@gmail.com" client:load />
```

---

## Sloty w `.astro`

```astro
<!-- Card.astro -->
<div class="border-t border-gray-200 py-8">
  <slot name="header" />
  <slot /> <!-- default slot -->
</div>
```

```astro
<!-- Użycie -->
<Card>
  <h3 slot="header" class="font-black tracking-tighter">Tytuł</h3>
  <p class="text-gray-500">Treść w default slot</p>
</Card>
```

---

## Dane statyczne — poza komponentem

Tablice z danymi (np. projekty, tech stack, timeline) trzymaj w bloku `---`, nie w template:

```astro
---
const projects = [
  { name: 'Locon', role: 'Data aggregation platform', tech: 'React / Node.js / Python' },
  { name: 'CYA Studio', role: 'AI-enhanced production workflows', tech: 'Next.js / Python' },
  { name: 'Deloitte Digital', role: 'Enterprise web applications', tech: 'Next.js / TypeScript' },
]
---

{projects.map(project => (
  <ProjectCard {...project} />
))}
```

---

## class:list — warunkowe klasy

Zamiast template literals z warunkami:

```astro
<!-- Dobrze -->
<div class:list={[
  'py-24 px-6 border-t border-gray-200',
  { 'bg-gray-50': isAlternate }
]}>

<!-- Źle -->
<div class={`py-24 px-6 border-t border-gray-200 ${isAlternate ? 'bg-gray-50' : ''}`}>
```

---

## Animacje section reveal (Framer Motion pattern)

```tsx
// SectionReveal.tsx — wrapper dla animacji fade-in up
import { motion } from 'framer-motion'

export default function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

Użycie w `.astro`:
```astro
<SectionReveal client:visible>
  <h2>Selected Work</h2>
</SectionReveal>
```
