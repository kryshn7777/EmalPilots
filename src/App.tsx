import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Comparison } from './components/Comparison'
import { DontBcc } from './components/DontBcc'
import { HowItWorks } from './components/HowItWorks'
import { Deliverability } from './components/Deliverability'
import CapabilitiesUI from './components/CapabilitiesUI'
import { WhoItsFor } from './components/WhoItsFor'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import MultiAccountSupport from './components/MultiAccountSupport'
import { Canvas } from "@react-three/fiber"
import { AviationScene } from "./components/AviationBackground"

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
      <div 
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed font-sans text-ink"
        style={{ backgroundImage: "url('/bg-aviation.png')" }}
      >
        <div className="absolute inset-0 bg-white/30 z-0" />
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <AviationScene />
          </Canvas>
        </div>

        <div className="relative z-10">
          <Header />
        <main className="overflow-clip">
          <div className="relative z-20"><Hero /></div>
          <div className="relative z-20"><Comparison /></div>
          <div className="relative z-10"><DontBcc /></div>
          <div className="relative z-20"><HowItWorks /></div>
          <div className="relative z-20"><Deliverability /></div>
          <div className="relative z-20"><CapabilitiesUI /></div>
          <div className="relative z-20"><MultiAccountSupport /></div>
          <div className="relative z-20"><WhoItsFor /></div>
          <div className="relative z-20"><Pricing /></div>
          <div className="relative z-20"><FAQ /></div>
        </main>
        <Footer />
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
