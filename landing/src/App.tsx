import { ReactLenis, useLenis } from 'lenis/react'
import { MotionConfig } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Header } from './components/Header'
import { Hud } from './components/Hud'
import { RouteLine } from './components/RouteLine'
import { Story } from './story/Story'
import { scroll, chapterIndex, prefersReducedMotion } from './lib/scroll'

gsap.registerPlugin(ScrollTrigger)

const SkyCanvas = lazy(() => import('./three/SkyCanvas'))

function Content() {
  useLenis((lenis: any) => {
    ScrollTrigger.update()
    scroll.y = lenis?.scroll ?? window.scrollY
    scroll.progress = lenis?.progress ?? 0
    scroll.chapter = chapterIndex(scroll.progress)
  })
  return (
    <>
      <Header />
      <Hud />
      <Story />
    </>
  )
}

export default function App() {
  const lenisRef = useRef<any>(null)
  const [showSky, setShowSky] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion: never mount the auto-playing 3D scene.
    if (prefersReducedMotion) return
    const ric = (window as any).requestIdleCallback
    if (ric) {
      const h = ric(() => setShowSky(true), { timeout: 1500 })
      return () => (window as any).cancelIdleCallback?.(h)
    }
    const h = setTimeout(() => setShowSky(true), 400)
    return () => clearTimeout(h)
  }, [])

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.1 }} ref={lenisRef}>
      <div className="pointer-events-none fixed inset-0 -z-20 bg-white" />
      <div className="grid-paper pointer-events-none fixed inset-0 -z-20 opacity-70" />
      {/* Hero night sky: absolute (scrolls away with the hero) so it never
          tints the light blueprint chapters below. Sits behind the 3D canvas. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-screen"
        style={{ background: 'linear-gradient(180deg,#0a1430 0%,#0c1838 55%,rgba(247,249,252,0) 100%)' }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10">
        {showSky && (
          <Suspense fallback={null}>
            <SkyCanvas />
          </Suspense>
        )}
      </div>
      <RouteLine />
      <MotionConfig reducedMotion="user">
        <Content />
      </MotionConfig>
    </ReactLenis>
  )
}
