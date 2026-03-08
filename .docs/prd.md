# Product Requirements Document (PRD): Minimalist Software House Portfolio (Astro Version)

## 1. Project Vision
- **Concept:** High-end, minimalist portfolio for a Software Engineer - Karol Liwiński, inspired by `jameswilliams.design` - https://www.jameswilliams.design/ .
- **Core Philosophy:** Ultra-fast performance (Astro), heavy focus on typography, and smooth, premium motion design.
- [cite_start]**Business Goal:** Position the owner as an elite freelancer/entrepreneur for global remote collaboration, leveraging 6 years of commercial experience[cite: 35].

---

## 2. Visual Identity & Design System

### 2.1 Color Palette
- **Background:** Primary `#FFFFFF`, Secondary `#F9F9F9`.
- **Typography:** Primary `#000000`, Secondary `#666666`.
- **Accents:** Purely grayscale, focus on contrast and white space.

### 2.2 Typography
- **Headings:** Modern Sans-Serif (e.g., `Satoshi`, `Inter`). Bold/Black weight, `tracking-tighter`.
- **Body:** `Inter` (Regular, 1.5 line height).
- **Technical/Data:** `JetBrains Mono` (Monospaced for a dev-centric feel).

### 2.3 Motion & Interaction
- **Smooth Scroll:** Implementation via `Lenis` (integrated into Astro layout).
- **Micro-interactions:** - Section reveal animations (Fade-in up) via `Framer Motion` (React components).
  - Minimalist hover states on all interactive elements.

---

## 3. Page Structure & Components

### 3.1 Hero Section
- [cite_start]**Headline:** Focus on "Fullstack Developer with GenAI"[cite: 34].
- [cite_start]**Sub-headline:** "6 years of commercial experience delivering high-performance applications for global leaders like Deloitte"[cite: 35].
- [cite_start]**Primary CTA:** "Get in touch" (Direct link to email)[cite: 3].

### 3.2 Selected Work (The 3-Column Grid)
- **Layout:** Grid with 3 columns (Desktop), 2 columns (Tablet), 1 column (Mobile).
- **Project Examples (Based on CV):**
  - [cite_start]**Locon Sp. z.o.o:** Data aggregation platform (React/Node.js/Python)[cite: 40].
  - [cite_start]**CYA Studio:** AI-enhanced video/photo production workflows[cite: 46, 47].
  - [cite_start]**Deloitte Digital:** Enterprise web applications (Next.js/TypeScript)[cite: 52].
- **Style:** Rectangular blocks (16:9), clean mockups, subtle scale-up on hover.

### [cite_start]3.3 Tech Stack & Expertise (Specialization) [cite: 11]
- [cite_start]**Frontend:** React, Next.js, Redux Toolkit, Typescript, Vitest/Playwright[cite: 12, 13, 14, 15, 20].
- [cite_start]**Backend & Data:** Node.js, Nest.js, Express, PostgreSQL, GraphQL, Python[cite: 16, 17, 40].
- [cite_start]**GenAI & Workflow:** LLM Integration, Prompt Engineering, Claude Code, Cursor[cite: 22, 23, 40, 48].
- [cite_start]**DevOps:** CI/CD, GIT, GCP (Google Cloud Platform)[cite: 18, 19, 42].

### 3.4 Professional Background (Heritage Section)
- **Timeline:**
  - **11.2025 – Present:** FullStack Developer with GenAI | [cite_start]Locon Sp. z.o.o[cite: 38, 39].
  - **10.2025 – Present:** Co-Founder & AI Lead | [cite_start]CYA Studio[cite: 43, 44, 45].
  - **10.2021 – 11.2025:** FullStack Developer with GenAI | [cite_start]Deloitte Digital[cite: 50, 51].
- **Style:** Thin separators (`0.5px`) between rows.

### [cite_start]3.5 Contact / Direct Access [cite: 1]
- [cite_start]**Primary Email:** `k.liwinski@gmail.com` (with "Click to Copy")[cite: 3].
- [cite_start]**Phone:** `+48 513 811 205`[cite: 3].
- [cite_start]**Socials:** LinkedIn (liwinskikarol), GitHub (lilivin)[cite: 5, 7].
- [cite_start]**Status Indicator:** "Based in Poland — GMT+1"[cite: 31].

---

## 4. Technical Stack (The "Astro" Way)
- [cite_start]**Framework:** **Astro 4.x**[cite: 15].
- **Integrations:** `astrojs/tailwind`, `astrojs/react` (for Framer Motion).
- **Core Tools:** Lenis (scrolling), Lucide-react (icons).

---

## 5. Functional Implementation Notes for Claude Code
1. [cite_start]**Performance:** Ensure 100/100 Lighthouse score through Astro's partial hydration[cite: 35].
2. [cite_start]**GenAI Integration:** Highlight certificates like "Google Cloud: Generative AI Leader" and "AI Devs 3"[cite: 57, 59].
3. **Responsive Strategy:** Use Tailwind's `max-w-7xl` for desktop and `px-6` for mobile.

---

## 6. Global Requirements
- **Lighthouse Score:** Goal 100/100.
- **Accessibility:** Semantic HTML and focus states.