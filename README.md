<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=700&size=45&duration=3000&pause=1000&color=00F2FE&center=true&vCenter=true&repeat=false&width=500&height=70&lines=MEDUSA+MUSICS+%F0%9F%8E%B5" alt="Medusa Musics" />
</p>

<p align="center">
  <em>🎧 A premium music streaming platform with a retro-futuristic soul.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/CSS_Modules-Scoped-FF6B6B?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Modules" />
</p>

<br/>

---

## 📽️ Demo

<!-- 🎬 Demo video will be added here -->

> **Coming soon** — a full walkthrough video showcasing every page and interaction.

---

## ✨ What is Medusa Musics?

**Medusa Musics** is a fully responsive, multi-page music streaming web application built with cutting-edge web technologies. It features a dark, cyberpunk-inspired **glassmorphism** design system with vibrant **cyan · pink · purple** accent gradients, smooth page transitions, and interactive audio playback — all wrapped in a premium, pixel-perfect UI.

This isn't just a landing page. It's a **complete platform prototype** with a store, library, premium plans, downloads, and a contact system — designed to feel like a real product from day one.

---

## 🖼️ Screenshots

> Screenshots coming soon along with the demo video.

---

## 🚀 Features

### 🎨 Design & UX
- **Glassmorphism dark theme** — frosted glass surfaces with soft glows
- **Cyberpunk color palette** — `#00F2FE` cyan · `#FF0844` pink · `#8A2BE2` purple
- **Smooth page transitions** — fade + slide-up animations between routes
- **Scroll-reveal animations** — sections animate into view via Intersection Observer
- **Responsive everywhere** — pixel-perfect on mobile, tablet, and desktop
- **Modern typography** — [Outfit](https://fonts.google.com/specimen/Outfit) via `next/font`

### 🎵 Audio Playback
- **Global AudioContext** — play/pause, skip tracks, and track progress across pages
- **Interactive hero player widget** — controls + progress bar in the hero section
- **Now Playing section** — live waveform visualization on the Store page
- **Track library** — 5 curated default tracks with auto-advance

### 🛍️ Store
- **Infinite product carousel** — seamless looping merchandise showcase
- **Product cards** — badges (New / Sale / Hot), star ratings, wishlist, color swatches, quick view
- **Live concert tickets** — event listings with status badges (Selling Fast, Few Left, Available)
- **Trending chart** — top 5 tracks with play counts and trend percentages
- **Community CTA** — newsletter signup with perks

### 📚 Library
- **User profile dashboard** — avatar, greeting, stats (playlists / followers / following)
- **Quick action tabs** — Playlists, Podcasts, Artists, Albums
- **Recently played grid** — album art thumbnails with inline play buttons
- **Playlist collection** — cards with hover-reveal play overlays

### 💎 Premium
- **Pricing tiers** — Individual ($9.99) · Duo ($12.99) · Family ($15.99)
- **Highlighted "Most Popular"** plan with accent border
- **Benefits grid** — Hi-Fi Audio, No Ads, Offline Listening, Unlimited Skips

### 📥 Download
- **Desktop & mobile showcases** — real app mockup images
- **Platform downloads** — Windows, macOS, Linux, App Store, Google Play
- **Feature checklists** — FLAC support, equalizer, gapless playback, CarPlay
- **System requirements** — glass-morphed grid with specs

### 📬 Contact
- **Contact form** — name, email, subject dropdown, message textarea
- **Info sidebar** — email support, phone, and FAQ section
- **Glass card design** — clean layout with icon circles

### 🧭 Navigation
- **Scroll-aware navbar** — transparent → frosted glass on scroll
- **Full-screen search overlay** — animated with trending search tags
- **Profile dropdown** — avatar, account settings, library, help, logout
- **Mobile drawer** — hamburger menu with staggered link animations

---

## 🏗️ Tech Stack

| Layer          | Technology                                                                 |
|----------------|---------------------------------------------------------------------------|
| **Framework**  | [Next.js 16](https://nextjs.org) (App Router)                            |
| **UI Library** | [React 19](https://react.dev)                                            |
| **Language**   | [TypeScript 5](https://www.typescriptlang.org)                           |
| **Styling**    | CSS Modules (scoped, zero-runtime)                                       |
| **Font**       | [Outfit](https://fonts.google.com/specimen/Outfit) via `next/font`       |
| **Images**     | `next/image` with `sharp` for optimized WebP/AVIF serving                |
| **Linting**    | ESLint 9 + `eslint-config-next`                                          |
| **CSS Inlining** | [Critters](https://github.com/GoogleChromeLabs/critters) for critical CSS |

---

## 📁 Project Structure

```
Medusa-Musics/
├── public/
│   └── images/              # Hero images, mockups, album covers
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home — Hero, Premium, Releases, Promo, etc.
│   │   ├── layout.tsx        # Root layout — Outfit font, Navbar, Providers
│   │   ├── template.tsx      # Page transition wrapper
│   │   ├── globals.css       # Design tokens & global resets
│   │   ├── store/            # 🛍️  Store page
│   │   ├── library/          # 📚 Library / Dashboard
│   │   ├── premium/          # 💎 Pricing plans
│   │   ├── download/         # 📥 App downloads
│   │   └── contact/          # 📬 Contact & FAQ
│   ├── components/
│   │   ├── Hero/             # Hero section with audio player widget
│   │   ├── Navbar/           # Responsive nav, search overlay, profile
│   │   ├── Footer/           # Footer with links, credits
│   │   ├── SectionPremium/   # Premium teaser on home
│   │   ├── NewReleases/      # Latest tracks showcase
│   │   ├── AppPromo/         # App promotion section
│   │   ├── PhysicalMedia/    # Vinyl / CD showcase
│   │   ├── WeeklyOffer/      # Weekly deals
│   │   ├── DownloadApp/      # Download CTA
│   │   └── Providers.tsx     # Context providers wrapper
│   └── context/
│       └── AudioContext.tsx   # Global audio playback state
├── next.config.ts            # Image domains, performance flags
├── tsconfig.json
└── package.json
```

---

## ⚡ Performance Optimizations

- **Dynamic imports** — below-the-fold components lazy-loaded with `next/dynamic`
- **Image optimization** — `next/image` + `sharp` for automatic WebP/AVIF conversion with responsive `sizes`
- **CSS Modules** — zero-runtime, tree-shaken scoped styles
- **Critical CSS** — `critters` inlines above-the-fold styles for faster FCP
- **Priority hints** — `priority` and `fetchPriority="high"` on hero/LCP images
- **Throttled intervals** — audio progress updates every 2s to minimize re-renders
- **`useCallback` memoization** — stable function references in AudioContext

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/kodepirate/Medusa-Musics.git

# Navigate to the project
cd Medusa-Musics

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Color Tokens

| Token               | Value                         | Preview |
|----------------------|-------------------------------|---------|
| `--bg-primary`       | `#0a091a`                     | 🟣      |
| `--bg-secondary`     | `#13122c`                     | 🟣      |
| `--accent-cyan`      | `#00f2fe`                     | 🔵      |
| `--accent-pink`      | `#ff0844`                     | 🔴      |
| `--accent-purple`    | `#8a2be2`                     | 🟣      |
| `--glass-bg`         | `rgba(26, 25, 60, 0.4)`      | 🌫️      |
| `--accent-gradient`  | `linear-gradient(90deg, ...)` | 🌈      |

### Typography
- **Primary font:** Outfit (loaded via `next/font/google`)
- **Weights:** 400 (body), 600 (headings), 700 (display titles)

---

## 📄 Pages Overview

| Route        | Description                                     |
|--------------|-------------------------------------------------|
| `/`          | Landing page — hero, featured sections, footer  |
| `/store`     | Merch store, concert tickets, trending chart    |
| `/library`   | User library dashboard with playlists           |
| `/premium`   | Premium pricing tiers and benefits              |
| `/download`  | Desktop & mobile app download page              |
| `/contact`   | Contact form, support info, FAQ                 |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repo
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Aniket** ([@kodepirate](https://github.com/kodepirate))

> *Officially Manufactured by Aniket0fficial* 🏴‍☠️

---

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=500&size=18&duration=4000&pause=2000&color=FF0844&center=true&vCenter=true&width=400&height=30&lines=Music+adds+color+to+life.+%F0%9F%8E%B6" alt="tagline" />
</p>
