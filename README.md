# Mithaq Outsource

Official website for Mithaq Outsource — operations, digital growth, and business execution services.

## Tech Stack

Next.js 14 with App Router, TypeScript, Tailwind CSS, Framer Motion for animations, Three.js for 3D vis

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

Colors: warm off-white background (#f5f3ef), teal accent (#0d9e87), gold accent (#b8934a), deep ink (#16181c)

Font: Urbanist

Effects: custom teal scrollbar, smooth scroll, custom cursor, scroll-triggered animations, 3D particle field


## Setup

```bash
# Clone or unzip project
cd mithaq-outsource

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

1. **Hero** 
2. **Services**
3. **Why Us**
4. **Process** 
5. **Testimonials**
6. **Final CTA** 
7. **Footer** 
