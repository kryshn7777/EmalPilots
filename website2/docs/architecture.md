# Architecture & Procedures

## Tech Stack Overview

The Email Pilots website is a modern, high-performance landing page built with the following technologies:

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS, PostCSS, clsx, tailwind-merge
- **UI Components:** Radix UI primitives, standard component structure in `src/components/ui`
- **Animations:** GSAP (with `@gsap/react`), Motion (`motion/react`), `tailwindcss-animate`
- **Smooth Scrolling:** Lenis (`lenis/react`)
- **3D Graphics & Rendering:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Troika Three Text

## Project Structure

- `src/App.tsx`: The primary application entry point containing the landing page. It includes the 3D canvas (AviationScene), scrollytelling features, pricing cards, and FAQ logic.
- `src/components/ui/`: Contains reusable UI components like Buttons and Cards built on top of Radix UI and Tailwind CSS.
- `src/lib/utils.ts`: Utility functions (e.g., standard `cn` utility for Tailwind classes merging).
- `src/index.css`: Global styles and Tailwind directives.

## Key Implementation Procedures

1. **3D Scene Background**
   - The app uses a fixed background `<Canvas>` rendering an `AviationScene`.
   - Custom `PaperPlaneMesh` and `FlightPath` components create animated paper airplanes following `THREE.CatmullRomCurve3` flight paths.

2. **Scrollytelling Animations**
   - Uses GSAP `ScrollTrigger` mapped to feature text blocks.
   - A sticky mock-up / graphic container updates dynamically based on the currently active feature text using React state (`activeIndex`) and Framer Motion's `<AnimatePresence>`.

3. **Smooth Scroll Experience**
   - The entire app is wrapped in `<ReactLenis root>` to provide a buttery smooth scrolling experience that syncs with GSAP's scroll triggers.

4. **Component Design**
   - The design language makes heavy use of glassmorphism (backdrop-blur), deep shadows, and an aviation-themed color palette (`primary` and `secondary` variables, destructives used selectively).
   - Use of `[paint-order:stroke_fill]` and `-webkit-text-stroke` for bold, highly stylized typography.
