// Tiny shared scroll state, written by App's Lenis listener and read inside the
// R3F useFrame loop and the HUD's rAF loop — avoids React re-renders per frame.
export const scroll = { y: 0, progress: 0, chapter: 0 }

// Coarse device tier so the scene can thin out on small screens (keeps 60fps).
export const isSmall =
  typeof window !== 'undefined' && !window.matchMedia('(min-width: 768px)').matches

// Honor the OS "reduce motion" setting: when true, the decorative 3D flight
// scene (auto-playing planes + spinning star globe) is not mounted at all.
export const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const CHAPTERS_TOTAL = 9

// Map 0..1 scroll progress to a chapter index 0..8 (equal-height approximation).
export function chapterIndex(progress: number): number {
  const i = Math.floor(progress * CHAPTERS_TOTAL)
  return i < 0 ? 0 : i >= CHAPTERS_TOTAL ? CHAPTERS_TOTAL - 1 : i
}
