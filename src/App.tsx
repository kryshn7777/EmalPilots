import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { lazy, Suspense, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Comparison } from './components/Comparison'
import { DontBcc } from './components/DontBcc'
import { HowItWorks } from './components/HowItWorks'
import { Deliverability } from './components/Deliverability'
import CapabilitiesUI from './components/CapabilitiesUI'
import { WhoItsFor } from './components/WhoItsFor'
import { Waitlist } from './components/Waitlist'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import MultiAccountSupport from './components/MultiAccountSupport'
import { PrivacyPolicy } from './components/PrivacyPolicy'
import { TermsOfService } from './components/TermsOfService'

const AviationCanvas = lazy(() => import('./components/AviationCanvas'))

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenis = useLenis()

  // The 3D scene is decorative: load it after first paint, and only on
  // desktop where it doesn't collide with the hero text or drain the GPU.
  const [showScene, setShowScene] = useState(false)
  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return
    if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(() => setShowScene(true), { timeout: 1500 })
      return () => (window as any).cancelIdleCallback(handle)
    }
    const handle = setTimeout(() => setShowScene(true), 300)
    return () => clearTimeout(handle)
  }, [])


  useEffect(() => {
    if (lenis) {
      const tick = (time: number) => {
        lenis.raf(time * 1000)
      }

      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)

      return () => {
        lenis.off('scroll', ScrollTrigger.update)
        gsap.ticker.remove(tick)
      }
    }
  }, [lenis])

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        const url = new URL(target.href)
        // If it's a different pathname, intercept and use SPA routing
        if (url.pathname !== window.location.pathname) {
          e.preventDefault()
          window.history.pushState({}, '', url.pathname + url.hash)
          setCurrentPath(url.pathname)
          window.scrollTo(0, 0)
        }
      }
    }
    window.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('click', handleLinkClick)
    }
  }, [])

  if (currentPath === '/privacy') return <PrivacyPolicy />
  if (currentPath === '/terms') return <TermsOfService />

  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full bg-white font-sans text-ink">
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          {showScene && (
            <Suspense fallback={null}>
              <AviationCanvas />
            </Suspense>
          )}
        </div>

        <div className="relative z-10">
          <Header />
        <main className="overflow-clip relative">
          <div id="hero-comparison-container" className="relative z-10">
            {/* Top fog: Intense on left, gradient to right */}
            <div 
              className="absolute inset-0 pointer-events-none -z-10" 
              style={{ 
                background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)', 
                maskImage: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 30%, transparent 100%)', 
                WebkitMaskImage: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 30%, transparent 100%)' 
              }} 
            />
            <div className="relative z-20"><Hero /></div>
            <div className="relative z-20"><Comparison /></div>
          </div>
          
          <div className="relative z-10">
            {/* Fog block 1: Fades in at top, fades out at bottom */}
            <div 
              className="absolute inset-x-0 -top-[250px] -bottom-[250px] pointer-events-none -z-10" 
              style={{ 
                background: 'linear-gradient(to bottom, transparent 0px, rgba(255,255,255,0.3) 100px, rgba(255,255,255,0.85) 250px, rgba(255,255,255,0.9) 350px, rgba(255,255,255,0.9) calc(100% - 350px), rgba(255,255,255,0.85) calc(100% - 250px), rgba(255,255,255,0.3) calc(100% - 100px), transparent 100%)', 
                maskImage: 'linear-gradient(to bottom, transparent 0px, rgba(0,0,0,0.3) 100px, black 250px, black calc(100% - 250px), rgba(0,0,0,0.3) calc(100% - 100px), transparent 100%)', 
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, rgba(0,0,0,0.3) 100px, black 250px, black calc(100% - 250px), rgba(0,0,0,0.3) calc(100% - 100px), transparent 100%)' 
              }} 
            />
            <div className="relative z-10"><DontBcc /></div>
            <div className="relative z-20"><HowItWorks /></div>
            <div className="relative z-20"><Deliverability /></div>
            <div className="relative z-20"><CapabilitiesUI /></div>
          </div>

          <div className="relative z-20"><MultiAccountSupport /></div>

          <div className="relative z-10">
            {/* Fog block 2: Fades in at top, hits Waitlist at bottom */}
            <div 
              className="absolute inset-x-0 -top-[250px] bottom-0 pointer-events-none -z-10" 
              style={{ background: 'linear-gradient(to bottom, transparent 0px, rgba(255,255,255,0.3) 100px, rgba(255,255,255,0.85) 250px, rgba(255,255,255,0.9) 100%)', maskImage: 'linear-gradient(to bottom, transparent 0px, rgba(0,0,0,0.3) 100px, black 250px, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, rgba(0,0,0,0.3) 100px, black 250px, black 100%)' }} 
            />
            <div className="relative z-20"><WhoItsFor /></div>
          </div>

          <div className="relative z-20"><Waitlist /></div>

          {/* <div className="relative z-20"><Pricing /></div> */}
          
          <div className="relative z-10">
            {/* Fog background for FAQ, fading out at the bottom to show the footer/rockets */}
            <div 
              className="absolute inset-x-0 top-0 -bottom-[250px] pointer-events-none -z-10" 
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.85) calc(100% - 250px), rgba(255,255,255,0.3) calc(100% - 100px), transparent 100%)', maskImage: 'linear-gradient(to bottom, black 0px, black calc(100% - 250px), rgba(0,0,0,0.3) calc(100% - 100px), transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0px, black calc(100% - 250px), rgba(0,0,0,0.3) calc(100% - 100px), transparent 100%)' }} 
            />
            <div className="relative z-20"><FAQ /></div>
          </div>
        </main>
        <Footer />
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
