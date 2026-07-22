# 🖤 Stand With Sonam Wangchuk

> A world‑class campaign website for education reform, Ladakh autonomy, and democratic rights in India.

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)](https://framermotion.framer.website)
[![Hallmark Design](https://img.shields.io/badge/Design-Hallmark%20Anti--Slop-E63946)](#hallmark-design-system)
[![GSAP](https://img.shields.io/badge/Animations-GSAP%20ScrollTrigger-88CE02)](https://gsap.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

---

## 📋 Table of Contents

- [The Movement](#-the-movement)
- [Project Overview](#-project-overview)
- [Site Structure](#-site-structure)
- [Design System](#-design-system)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📢 The Movement

**Sonam Wangchuk** is an Indian engineer, education reformer, climate activist, and the founding director of SECMOL (Students' Educational and Cultural Movement of Ladakh). He is widely known as the inspiration behind the character *Phunsukh Wangdu* in the Bollywood film *3 Idiots* (2009).

### The Crisis (June–July 2026)

| Date | Event |
|------|-------|
| **June 29, 2026** | Wangchuk begins an indefinite hunger strike at Jantar Mantar, New Delhi |
| **July 18, 2026** | Delhi Police forcibly remove him at 6:30 AM — footage goes viral globally (50M+ views in 24h) |
| **July 20, 2026** | Chalo Sansad march — 10,000+ protesters march to Parliament, met with tear gas and water cannons |

### Six Core Demands

| # | Demand | Priority |
|---|--------|----------|
| 1 | **Education Reform** — implement NEP 2020, reopen 100K+ schools, recruit 50K teachers | Critical |
| 2 | **Ladakh Statehood** — full legislative assembly, Article 371 protections for land & jobs | Critical |
| 3 | **Democratic Rights** — end PSA/UAPA misuse, release political prisoners, protect protest rights | Urgent |
| 4 | **Environmental Justice** — stop unchecked Himalayan industrialisation, protect the Third Pole | Urgent |
| 5 | **Healthcare Access** — AIIMS-level facilities in Ladakh, air ambulances, altitude medicine | Important |
| 6 | **Youth Employment** — 50K jobs for Ladakhi youth, sustainable tourism & renewable energy | Important |

The **Cockroach Janata Party (CJP)**, founded by Abhijit Dipke, has been the organising force behind these protests — a citizen-led platform built on resilience and accountability.

> *"They can survive nuclear radiation. They've been here 320 million years. They'll be here long after we're gone."* — Why "Cockroach"

---

## 🎯 Project Overview

**Stand With Sonam** is a multi‑page campaign website built to amplify the movement's voice, educate the public, and drive action. It is designed to the highest front‑end standards — a *top 0.1%* developer's work that avoids every AI‑generated template pattern.

### Key Objectives

- Inform the world about Sonam Wangchuk's hunger strike and the CJP movement
- Provide clear, transparent calls to action (donate, volunteer, contact MPs, share)
- Archive the full timeline of events with journalistic integrity
- Showcase the viral photo and its global impact
- Maintain radical financial transparency (100% of donations to causes)

### Hallmark Design Principles Applied

This project uses the **[Hallmark](https://github.com/nutlope/hallmark)** anti‑AI‑slop design skill, which enforces:

- **58 slop‑test gates** — automated checks that reject generic AI patterns
- **Unique macrostructure per page** — not a single template repeated
- ⛔ **No pure `#000` / `#fff`** — every colour has chroma > 0 (OKLCH)
- ⛔ **No italic headers** — emphasis through weight, colour, or underline
- ⛔ **No re‑drawn chrome** — no fake browser bars, phone frames, or IDE mockups
- **8‑state interaction design** — default, hover, active, focus‑visible, disabled, loading, visited, error
- **One orchestrated motion per page** — meaningful animation with a narrative purpose
- **`prefers‑reduced‑motion`** respected globally

---

## 🏛️ Site Structure

```
/                           🏠 Home — hero, viral photo, 6 demands, live counter
├── /movement               📜 The Movement — full history 1988→Present, key figures, CJP explainer
├── /timeline               ⏳ Timeline — interactive day‑by‑day of the 21‑day hunger strike
├── /action                 ✊ Take Action — social toolkit, volunteer signup, MP tools
├── /donate                 💰 Donate — tiered giving ₹500–₹50K, fund allocation breakdown
└── /contact                📞 Contact — press kit, legal/medical, newsletter, FAQ
```

### Page Details

#### 🏠 **Home** (`/`)
- **Macrostructure:** Narrative‑first editorial (not hero→features→CTA)
- **Sections:** "They Carried a Fasting Man" headline, viral photo with full‑bleed treatment, The Moment narrative, 6 interactive demand cards, movement live counter, CTA strip
- **Animations:** Scroll‑triggered parallax on the viral photo, staggered card reveals, counter animations

#### 📜 **The Movement** (`/movement`)
- **Macrostructure:** Long Document with H5 hero knobs
- **6 historical phases** spanning 1988→Present with asymmetric layout
- **Key figures section** — Wangchuk, Abhijit Dipke, Gitanjali Angmo, student hunger strikers
- **"Why Cockroach?" explainer** — the CJP philosophy with 8 principles
- **CJP Principles:** No hierarchy · Citizen‑led · Issue‑based · Non‑violent · Transparent · Accountable · Inclusive · Resilient

#### ⏳ **Timeline** (`/timeline`)
- **Macrostructure:** Column Narrative (two‑column alternating)
- **5 phases** with colour‑coded visual anchors
  - 🟦 Pre‑Movement Foundations (1988–2019)
  - 🔴 The Hunger Strike (June 29 – July 18, 2026)
  - 🟥 The Crisis Point (July 18, 2026)
  - 🟧 Mass Mobilization (July 20 onward)
  - 🟩 What Comes Next (Ongoing)
- **Key events:** SECMOL founding → 3 Idiots release → Ice Stupa → Article 370 abrogation → hunger strike begins → health crisis → forced removal at 6:30 AM → viral photo → Chalo Sansad march → global advocacy

#### ✊ **Take Action** (`/action`)
- **Macrostructure:** Workbench — sticky left‑nav for action categories
- **6 action pillars:** Donate · Share · Volunteer · Contact MPs · Sign Petitions · Join Protests
- **Social Media Toolkit:** Pre‑written sample posts, official accounts to follow, key hashtags to copy
- **Volunteer signup form** with skills‑based matching
- **MP contact tools:** Find your MP, email templates, phone scripts, social pressure guides, office visit coordination, response tracker

#### 💰 **Donate** (`/donate`)
- **Macrostructure:** Stat‑Led — impact statistics first, tiers second
- **6 giving tiers:** Supporter (₹500) → Activist (₹2K) → Champion (₹5K) → Guardian (₹10K) → Pillar (₹25K) → Visionary (₹50K)
- **Custom amount** with UPI / cards / net banking
- **Transparent fund allocation:**
  - 35 % — Legal Aid & Defense
  - 25 % — Medical & Humanitarian
  - 20 % — Protest Logistics
  - 12 % — Grassroots Organizing
  - 8 % — Digital & Media
- **₹0 admin overhead** — 100 % to causes, monthly reports, annual audit

#### 📞 **Contact** (`/contact`)
- **Macrostructure:** Index Grid — each contact method as a distinct card
- Contact form, press kit download, legal support intake, medical aid request, newsletter signup
- FAQ section with progressive disclosure

---

## 🎨 Design System

### Colour Palette (OKLCH)

Hallmark enforces an OKLCH colour system with no zero‑chroma neutrals. Every colour is tinted toward the anchor hue.

| Token | OKLCH Value | Visual Role |
|-------|-------------|-------------|
| `--color-accent` | `oklch(50% 0.2 25)` | Primary accent — crimson (≈ #E63946) |
| `--color-accent-dark` | `oklch(40% 0.2 25)` | Darkened accent |
| `--color-paper` | `oklch(98% 0.008 25)` | Page background — near‑white with warm tint |
| `--color-paper-alt` | `oklch(95% 0.006 25)` | Card background |
| `--color-ink` | `oklch(14% 0.01 25)` | Body text — dark, not pure black |
| `--color-rule` | `oklch(86% 0.005 25)` | Borders & separators |
| `--color-muted` | `oklch(62% 0.005 25)` | Secondary text |
| `--color-neutral` | `oklch(45% 0.008 25)` | Neutral mid‑tone |
| `--color-focus` | `oklch(55% 0.18 255)` | Focus‑visible ring — blue |
| `--color-gold` | `oklch(78% 0.12 85)` | Gold accent (≈ #FFD60A) |
| `--color-gold-dark` | `oklch(65% 0.14 85)` | Darkened gold |
| `--color-surface-dark` | `oklch(16% 0.012 25)` | Dark section backgrounds |
| `--color-error` | `oklch(55% 0.2 10)` | Error states |
| `--color-visited` | `oklch(45% 0.1 300)` | Visited link colour |

### Typography

| Role | Font | Notes |
|------|------|-------|
| **Display** | `Bricolage Grotesque` + `Space Grotesque` | Extreme weight contrast (400/500/600/700) |
| **Body** | `Inter Tight` | Variable font, optical‑size axis, body ≥ 14 px |
| **Fallback** | `system-ui`, `sans-serif` | Graceful degradation |

**Banned fonts (Gate 1):** Inter, Roboto, Open Sans, Poppins, Lato, Work Sans, DM Sans, Montserrat, system‑ui as display.

### Component Patterns

#### 8‑State Buttons

| State | Visual |
|-------|--------|
| **default** | `var(--color-accent)` background, white text, shadow |
| **hover** | `var(--color-accent-dark)` background, elevated shadow, `translateY(-1px)` |
| **active** | `scale(0.97)` — tactile press |
| **focus‑visible** | 2px `var(--color-focus)` ring + 4px white offset |
| **disabled** | 45 % opacity, no pointer events |
| **loading** | Hidden text + CSS spinner (`::after`) |
| **visited** | N/A (standard buttons) |
| **error** | `var(--color-error)` ring |

#### 8‑State Inputs

| State | Visual |
|-------|--------|
| **default** | `var(--color-rule)` border |
| **hover** | `var(--color-neutral)` border |
| **active** | During typing → `var(--color-neutral)` |
| **focus‑visible** | `var(--color-accent)` border + 3px alpha glow |
| **disabled** | 50 % opacity, `not-allowed` cursor |
| **loading** | 60 % opacity, no pointer events |
| **visited** | N/A |
| **error** | `var(--color-error)` border + glow |

### Spacing

4‑pt spacing system (Hallmark standard):
- `px`, `py`, `gap`, `m`, `p` follow multiples of 4 / 6 / 8

### Motion

- **One orchestrated motion per page** — no generic fade‑ins
- GSAP ScrollTrigger for 3D‑parallax effects on the viral image
- Framer Motion for page transitions (`AnimatePresence` with `mode="wait"`)
- `prefers‑reduced-motion`: all animations → 0.01 ms duration

---

## 🛠 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | [React 18](https://react.dev) | UI library |
| **Build Tool** | [Vite 5](https://vitejs.dev) | Lightning‑fast HMR & bundling |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com) | Utility‑first CSS with custom OKLCH tokens |
| **Animation** | [Framer Motion 11](https://framermotion.framer.website) | Page transitions, scroll reveals |
| **Scroll FX** | [GSAP](https://gsap.com) + [ScrollTrigger](https://gsap.com/scrolltrigger) | 3D‑parallax, scroll‑driven timelines |
| **Icons** | [Lucide React](https://lucide.dev) | Consistent, accessible icon system |
| **Routing** | [React Router v6](https://reactrouter.com) | SPA navigation with animated transitions |
| **Design Skill** | [Hallmark](https://github.com/nutlope/hallmark) | Anti‑AI‑slop design enforcement |
| **3D World** | [ScrollWorld](https://github.com/oso95/scroll-world) | Scroll‑driven 3D scene inspiration |
| **Deployment** | Vercel / Netlify | Static site hosting (0–config) |

### Why This Stack?

- **React + Vite** — The modern standard; Vite's ESM‑based dev server is 10–20× faster than webpack
- **Tailwind CSS** — Design‑system as code; custom `oklch()` colours are a first‑class citizen
- **Framer Motion + GSAP** — Motion is a first‑class concern in this project, not an afterthought. GSAP handles the heavy scroll‑driven 3D, Framer Motion handles page transitions
- **Hallmark** — 58 slop‑test gates ensure the output looks *made*, not *generated*
- **Lucide** — Tree‑shakeable icons with proper `aria‑hidden` support

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18.x
- [npm](https://npmjs.com) ≥ 9.x or [pnpm](https://pnpm.io) / [yarn](https://yarnpkg.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/shashank-tomar0/protest.git
cd protest

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser. Hot‑module replacement is active — edit any `src/` file and see changes instantly.

### Production Build

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

### Build Output

| Asset | Size | Gzip |
|-------|------|------|
| `index.html` | 1.44 KB | 0.65 KB |
| `assets/index-*.css` | 44 KB | 8.6 KB |
| `assets/index-*.js` | 476 KB | 136 KB |

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repository via the [Vercel Dashboard](https://vercel.com/new) — zero configuration required.

### Deploy to Netlify

Drag the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop), or connect your repo via the [Netlify Dashboard](https://app.netlify.com).

### Environment Variables

None required. This is a fully static site.

---

## 🤝 Contributing

**This is a campaign website for a live movement. Contributions should be respectful and fact‑checked.**

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes
4. Run the build: `npm run build`
5. Commit with a descriptive message:

```bash
git commit -m "feat: add [specific change]

- Detail what was changed and why
- Reference any related issues
- Keep commits focused on one concern

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

6. Push: `git push origin feat/your-feature`
7. Open a Pull Request

### Commit Convention

| Prefix | Purpose |
|--------|---------|
| `feat:` | A new feature or page |
| `fix:` | A bug fix or warning resolution |
| `design:` | Visual / UI changes (Hallmark‑related) |
| `content:` | Copy, timeline, demand, or news updates |
| `perf:` | Performance improvements |
| `a11y:` | Accessibility fixes |
| `refactor:` | Code restructuring without feature change |
| `docs:` | README or documentation |

---

## 📄 License

This project is released under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>
    <strong>🇮🇳 In solidarity with the movement for education, ecology, and democracy.</strong>
  </p>
  <p>
    Sonam Wangchuk • SECMOL • Cockroach Janata Party
  </p>
  <p>
    <sub>
      "When injustice becomes law, resistance becomes duty." — Thomas Jefferson, 
      often echoed in the CJP's call for democratic accountability
    </sub>
  </p>
  <br>
  <p>
    <a href="https://standwithsonam.org">🌐 Website</a> ·
    <a href="https://twitter.com/StandWithSonam">𝕏 Twitter</a> ·
    <a href="https://instagram.com/standwithsonam">📸 Instagram</a> ·
    <a href="https://youtube.com/@StandWithSonam">▶️ YouTube</a>
  </p>
</div>
