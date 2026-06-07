import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Comparison } from './components/Comparison'
import { DontBcc } from './components/DontBcc'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Deliverability } from './components/Deliverability'
import CapabilitiesUI from './components/CapabilitiesUI'
import { WhoItsFor } from './components/WhoItsFor'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import MultiAccountSupport from './components/MultiAccountSupport'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenis = useLenis((_scroll: any) => {
    // Scroll update logic if needed
  })

  useEffect(() => {
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)
    }
  }, [lenis])

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white font-sans text-ink">
        <Header />
        <main className="overflow-clip">
          <Hero />
          <Comparison />
          <DontBcc />
          <HowItWorks />
          <Features />
          <Deliverability />
          <CapabilitiesUI />
          <MultiAccountSupport />
          <WhoItsFor />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
