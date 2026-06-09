# Apex Agency — Premium Digital Services Website

A cinematic, premium agency website built with Next.js 14, Tailwind CSS, Framer Motion, Three.js, and Lenis smooth scroll.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations & scroll-triggered reveals |
| Three.js | 3D particle field & wireframe spheres |
| Lenis | Buttery smooth scrolling |
| GSAP | Additional scroll animations |
| Yarn | Package manager |

## Design System

**Colors**
- Background: `#0a0b0d` (deep graphite)
- Accent Teal: `#00c9a7`
- Accent Purple: `#a78bfa`
- Typography: `#f0ede8` (warm off-white)

**Fonts**
- Display: Syne (headings, bold elements)
- Body: DM Sans (clean, modern readability)

**Effects**
- Glassmorphism cards (`backdrop-filter: blur`)
- Radial gradient lighting
- Animated particle field (Three.js)
- Wireframe sphere meshes
- Custom magnetic cursor
- Orbit animation (Why Us section)
- Scroll-triggered section reveals (Framer Motion)

## Setup

```bash
# Clone or unzip project
cd apex-agency

# Install dependencies (Yarn)
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
apex-agency/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Lenis, Cursor)
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # CSS variables, Tailwind, base styles
├── components/
│   ├── Nav.tsx             # Sticky nav with scroll state
│   ├── Cursor.tsx          # Custom magnetic cursor
│   ├── SmoothScroll.tsx    # Lenis initialization
│   ├── Hero.tsx            # Hero with Three.js canvas + dashboard card
│   ├── Services.tsx        # 6-service card grid
│   ├── WhyUs.tsx           # Features + orbit visual
│   ├── Sections.tsx        # Process, Portfolio, Testimonials, CTA, Footer
│   └── [re-exports]        # Individual component files
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

## Sections

1. **Hero** — 3D particle field, animated dashboard card, stat counters
2. **Services** — 6 interactive glassmorphism cards with hover glow
3. **Why Us** — Numbered features + orbiting icon visual
4. **Process** — 6-step timeline with gradient connector line
5. **Portfolio** — Case study grid with immersive project previews
6. **Testimonials** — 3 animated review cards
7. **Final CTA** — Emotionally persuasive closing section
8. **Footer** — Clean minimal footer

## Customization

- Replace placeholder service icons with SVGs from [Lucide](https://lucide.dev) or [Tabler](https://tabler.io/icons)
- Swap portfolio `bg` gradients with actual project screenshots
- Update `metadata` in `app/layout.tsx` with real SEO content
- Adjust color variables in `globals.css` to match your brand

## Performance Notes

- Three.js is lazy-imported inside `useEffect` to avoid SSR issues
- All animations use `will-change: transform` via Framer Motion
- Particle count (2000) is tuned for 60fps; reduce to 1000 on mobile if needed
- Lenis + GSAP ScrollTrigger are initialized client-side only
