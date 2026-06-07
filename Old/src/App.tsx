import { useRef, useState, useMemo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ReactLenis } from "lenis/react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line } from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Wand2, Paperclip, Clock, ShieldCheck, Lock } from "lucide-react"
import CleanTimelineSteps from "./components/CleanTimelineSteps"
import CapabilitiesUI from "./components/CapabilitiesUI"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function PaperPlaneMesh({ color = "#0055ff" }: { color?: string }) {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    // Classic Dart Paper Airplane Geometry
    const vertices = new Float32Array([
      // Right Wing Top
      0, 0, 2,       // Nose
      1.5, 0.2, -1,  // Right wing tip
      0, 0.5, -1,    // Center top tail

      // Left Wing Top
      0, 0, 2,       // Nose
      0, 0.5, -1,    // Center top tail
      -1.5, 0.2, -1, // Left wing tip

      // Right Wing Bottom
      0, 0, 2,       // Nose
      0, -0.5, -1,   // Center bottom tail
      1.5, 0.2, -1,  // Right wing tip

      // Left Wing Bottom
      0, 0, 2,       // Nose
      -1.5, 0.2, -1, // Left wing tip
      0, -0.5, -1,   // Center bottom tail
    ])
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geom.computeVertexNormals()
    return geom
  }, [])

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} side={THREE.DoubleSide} flatShading />
    </mesh>
  )
}

function FlightPath({ curve, color = "#ff6600" }: { curve: THREE.CatmullRomCurve3, color?: string }) {
  const points = useMemo(() => curve.getPoints(50), [curve])
  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      dashed={true}
      dashSize={0.5}
      dashScale={2}
      dashOffset={0}
      transparent
      opacity={0.5}
    />
  )
}

function AnimatedPlane({ curve, color, offset = 0 }: { curve: THREE.CatmullRomCurve3, color: string, offset?: number }) {
  const group = useRef<THREE.Group>(null)
  const speed = useMemo(() => 0.02 + Math.random() * 0.06, []) // Random speed between 0.02 and 0.08
  
  useFrame((state) => {
    if (!group.current) return
    const t = ((state.clock.elapsedTime * speed) + offset) % 1
    const pos = curve.getPointAt(t)
    const nextPos = curve.getPointAt((t + 0.01) % 1)
    
    group.current.position.copy(pos)
    group.current.lookAt(nextPos)
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <PaperPlaneMesh color={color} />
      </Float>
    </group>
  )
}

function AviationScene() {
  const curve1 = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-15, -5, 0),
    new THREE.Vector3(-5, 5, -5),
    new THREE.Vector3(5, -2, -10),
    new THREE.Vector3(15, 8, -5)
  ]), [])
  
  const curve2 = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 8, -8),
    new THREE.Vector3(-10, -3, -12),
    new THREE.Vector3(0, 6, -10),
    new THREE.Vector3(10, -5, -5),
    new THREE.Vector3(20, 5, 0)
  ]), [])

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      
      <FlightPath curve={curve1} color="#0055ff" />
      <AnimatedPlane curve={curve1} color="#0055ff" offset={0} />
      <AnimatedPlane curve={curve1} color="#ffffff" offset={0.3} />
      
      <FlightPath curve={curve2} color="#ff6600" />
      <AnimatedPlane curve={curve2} color="#ff6600" offset={0.5} />
      <AnimatedPlane curve={curve2} color="#ffffff" offset={0.8} />
    </>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border/50 bg-card/40 backdrop-blur-sm rounded-lg overflow-hidden transition-colors hover:bg-card/60">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <h3 className="text-lg font-bold pr-8">{question}</h3>
        <span className={`text-2xl font-light text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function OverlappingCardsUI() {
  return (
    <section className="w-full max-w-7xl mt-32 grid md:grid-cols-2 gap-16 items-center px-4 overflow-visible">
      {/* Visual Side: Overlapping Cards */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center ml-0 md:-ml-8">
        
        {/* Bottom Card: The Problem (BCC Spam) */}
        <motion.div 
          initial={{ opacity: 0, rotate: -5, x: -20, y: 20 }}
          whileInView={{ opacity: 1, rotate: -10, x: -40, y: 40 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-0 w-72 md:w-80 h-80 md:h-96 bg-card/50 backdrop-blur-md border border-border rounded-xl shadow-2xl p-4 flex flex-col grayscale opacity-60 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
            <div className="w-3 h-3 rounded-full bg-destructive/50"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="text-xs font-mono text-muted-foreground ml-2">New Message</div>
          </div>
          <div className="text-xs font-mono text-muted-foreground mb-2 flex items-center gap-2">
            <span>To:</span> <span className="text-foreground">undisclosed-recipients;</span>
          </div>
          <div className="text-xs font-mono text-muted-foreground mb-4 flex flex-col gap-1 border-b border-border pb-2 overflow-hidden">
            <span>BCC:</span> 
            <span className="text-destructive font-bold break-all">
              {Array(30).fill("user@mail.com").join(", ")}...
            </span>
          </div>
          
          {/* Spam Error Overlay */}
          <div className="absolute inset-0 bg-destructive/10 rounded-xl flex items-center justify-center p-6 backdrop-blur-[2px]">
            <div className="bg-destructive text-destructive-foreground font-bold px-4 py-2 rounded shadow-xl border border-destructive-foreground/20 rotate-12 text-sm md:text-base uppercase tracking-widest whitespace-nowrap">
              550 Spam Error
            </div>
          </div>
        </motion.div>

        {/* Top Card: The Solution (Email Pilots) */}
        <motion.div 
          initial={{ opacity: 0, rotate: 5, x: 20, y: -20 }}
          whileInView={{ opacity: 1, rotate: 5, x: 40, y: -20 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute z-10 w-72 md:w-80 h-80 md:h-96 bg-card/90 backdrop-blur-2xl border border-primary/30 rounded-xl shadow-[0_0_50px_-12px_rgba(0,100,255,0.3)] p-6 flex flex-col"
        >
          <div className="text-sm font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-widest border-b border-primary/20 pb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Automated Sending
          </div>
          
          <div className="flex-1 flex flex-col gap-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-primary/20"></div>

            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 relative z-10"
            >
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/40 mt-1">
                <svg width="12" height="8" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="font-bold text-sm">john@acme.com</div>
                <div className="text-xs text-muted-foreground">Sent beautifully.</div>
              </div>
            </motion.div>

            {/* Step 2 (Waiting) */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 relative z-10 opacity-70"
            >
              <div className="w-6 h-6 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shrink-0 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
              </div>
              <div>
                <div className="font-bold text-sm text-primary">Waiting 3 minutes...</div>
                <div className="text-xs text-muted-foreground">Mimicking human behavior.</div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="flex gap-4 relative z-10"
            >
               <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/40 mt-1">
                <svg width="12" height="8" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="font-bold text-sm">sarah@tech.co</div>
                <div className="text-xs text-muted-foreground">Sent beautifully.</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Copy Side */}
      <div className="flex flex-col justify-center gap-6 relative z-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight">
          Don't BCC. <br/>
          <span className="text-muted-foreground">Let your personal assistant send them perfectly.</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg">
          Manually sending 100 pitches takes hours. But if you put everyone in BCC, your emails go straight to the spam folder. 
          <br/><br/>
          <strong className="text-primary font-bold tracking-wide uppercase text-sm border-b-2 border-primary/30">Email Pilots</strong> automates the process, sending each email one by one while you grab a coffee.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <ReactLenis root>
      <div 
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/bg-aviation.png')" }}
      >
        <div className="absolute inset-0 bg-background/60 z-0" />
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <AviationScene />
          </Canvas>
        </div>

        <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-border/50 transition-all duration-300 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-xl font-display font-black tracking-widest uppercase text-foreground">
              Email Pilots
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              <a href="#personas" className="hover:text-primary transition-colors">Personas</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="hover:text-secondary transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </nav>
            <Button size="sm" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide rounded-md">
              Start Free Trial
            </Button>
          </div>
        </header>
        
        <main className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center gap-16 text-foreground">
          
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-center max-w-3xl mt-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-normal mb-8 leading-tight text-white [-webkit-text-stroke:3px_hsl(var(--foreground))] md:[-webkit-text-stroke:4px_hsl(var(--foreground))] [paint-order:stroke_fill] drop-shadow-2xl max-w-5xl mx-auto">
              Personalized Email Outreach <br className="hidden lg:block" />
              <span className="text-secondary [-webkit-text-stroke:3px_hsl(var(--foreground))] md:[-webkit-text-stroke:4px_hsl(var(--foreground))] [paint-order:stroke_fill]">from Your Own Inbox.</span>
            </h1>
            <div className="bg-background/80 backdrop-blur-xl px-8 py-6 rounded-3xl border border-border shadow-2xl mb-12 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                Connect Gmail or Outlook, schedule campaigns, attach files, and send personalized emails automatically.
              </p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Sending Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
          </motion.section>

          <OverlappingCardsUI />

          <CleanTimelineSteps />

          <section id="personas" className="w-full max-w-7xl mt-48 px-4 flex flex-col gap-32 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full border-b-2 border-foreground/10 pb-4 mb-8"
            >
              <h2 className="text-2xl font-bold tracking-[0.3em] text-primary uppercase">Who is Email Pilots For //</h2>
            </motion.div>
            
            {/* Job Seekers */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col group cursor-default"
            >
              <h3 className="text-[15vw] md:text-[10rem] leading-[0.9] font-display font-black tracking-tighter text-foreground/15 group-hover:text-primary transition-all duration-1000 group-hover:duration-300 uppercase select-none relative z-0">
                Job <br /> Seekers.
              </h3>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="max-w-xl mt-8 p-8 md:p-10 md:self-end bg-background/60 backdrop-blur-2xl border border-border group-hover:border-primary/30 group-hover:shadow-[0_20px_60px_-15px_rgba(0,85,255,0.3)] transition-all duration-1000 group-hover:duration-300 relative z-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:duration-300" />
                <p className="text-2xl font-medium leading-relaxed">
                  Reach out to 50 hiring managers a week with a personalized intro. Stop waiting for job boards to reply and take control of your career search.
                </p>
              </motion.div>
            </motion.div>

            {/* Recruiters */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col md:items-end group cursor-default"
            >
              <h3 className="text-[15vw] md:text-[10rem] leading-[0.9] font-display font-black tracking-tighter text-foreground/15 group-hover:text-secondary transition-all duration-1000 group-hover:duration-300 uppercase text-right select-none relative z-0">
                Recruiters.
              </h3>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="max-w-xl mt-8 p-8 md:p-10 md:self-start bg-background/60 backdrop-blur-2xl border border-border group-hover:border-secondary/30 group-hover:shadow-[0_20px_60px_-15px_rgba(255,102,0,0.3)] transition-all duration-1000 group-hover:duration-300 text-left relative z-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:duration-300" />
                <p className="text-2xl font-medium leading-relaxed">
                  Contact great candidates without paying thousands for LinkedIn Recruiter. Send highly personalized follow-ups completely automatically.
                </p>
              </motion.div>
            </motion.div>

            {/* Freelancers */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col group cursor-default"
            >
              <h3 className="text-[15vw] md:text-[10rem] leading-[0.9] font-display font-black tracking-tighter text-foreground/15 group-hover:text-primary transition-all duration-1000 group-hover:duration-300 uppercase select-none relative z-0">
                Free <br /> lancers.
              </h3>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="max-w-xl mt-8 p-8 md:p-10 md:self-end bg-background/60 backdrop-blur-2xl border border-border group-hover:border-primary/30 group-hover:shadow-[0_20px_60px_-15px_rgba(0,85,255,0.3)] transition-all duration-1000 group-hover:duration-300 relative z-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:duration-300" />
                <p className="text-2xl font-medium leading-relaxed">
                  Pitch your services to local businesses on autopilot. Keep your calendar booked without spending hours copying and pasting.
                </p>
              </motion.div>
            </motion.div>

            {/* Community Builders */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col md:items-end group cursor-default"
            >
              <h3 className="text-[15vw] md:text-[10rem] leading-[0.9] font-display font-black tracking-tighter text-foreground/15 group-hover:text-secondary transition-all duration-1000 group-hover:duration-300 uppercase text-right select-none relative z-0">
                Community <br /> Builders.
              </h3>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="max-w-xl mt-8 p-8 md:p-10 md:self-start bg-background/60 backdrop-blur-2xl border border-border group-hover:border-secondary/30 group-hover:shadow-[0_20px_60px_-15px_rgba(255,102,0,0.3)] transition-all duration-1000 group-hover:duration-300 text-left relative z-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:duration-300" />
                <p className="text-2xl font-medium leading-relaxed">
                  Manage your club, sports team, or neighborhood group. Send personalized updates to everyone without starting a messy group thread or relying on BCC.
                </p>
              </motion.div>
            </motion.div>
          </section>
        </main>

        <CapabilitiesUI />

        <main className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center gap-16 text-foreground">
          <section id="pricing" className="w-full max-w-5xl mt-24 mb-48 px-4 relative z-10 flex flex-col items-center">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-black tracking-tight text-foreground mb-4">Simple Pricing</h2>
              <p className="text-muted-foreground font-medium max-w-md mx-auto">Start sending today, upgrade when you need to.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 max-w-3xl w-full justify-center items-end">
              
              {/* Basic Cute Box */}
              <div className="w-full md:w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_20px_40px_rgb(0,85,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                   <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Basic</h3>
                <p className="text-sm text-muted-foreground mb-6 font-medium">Perfect for indie hackers.</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-foreground">€1.99</span>
                  <span className="text-sm font-bold text-muted-foreground">/wk</span>
                </div>
                
                <ul className="flex flex-col gap-4 text-sm font-semibold text-foreground/80 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Unlimited emails
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Spreadsheet sync
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Runs locally
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    SPAM Protection
                  </li>
                </ul>
                
                <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-colors shadow-sm active:scale-95">
                  Get Started
                </button>
              </div>

              {/* Business Cute Box */}
              <div className="w-full md:w-[320px] bg-gradient-to-b from-white to-secondary/5 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-secondary/20 relative mt-8 md:mt-0 opacity-95">
                
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                  Waitlist Only
                </div>

                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                   <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Business</h3>
                <p className="text-sm text-muted-foreground mb-6 font-medium">For serious teams.</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-foreground">€9.99</span>
                  <span className="text-sm font-bold text-muted-foreground">/wk</span>
                </div>
                
                <ul className="flex flex-col gap-4 text-sm font-semibold text-foreground/80 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Everything in Basic
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    OAuth2 Auth
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Domain Management
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    IMAP Syncing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Local or cloud
                  </li>
                </ul>
                
                <button className="w-full py-4 bg-secondary/10 text-secondary font-bold rounded-2xl cursor-not-allowed" disabled>
                  Join Waitlist
                </button>
              </div>

            </div>
          </section>

          <section id="faq" className="w-full max-w-3xl mt-24 mb-32 mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem 
                question="Is my data stored on your servers?" 
                answer="No. Email Pilots runs locally and connects directly to your email provider. We don't store your contacts or email content on our servers."
              />
              <FAQItem 
                question="Does this work with Gmail?" 
                answer="Yes, it works seamlessly with Gmail and Google Workspace accounts."
              />
              <FAQItem 
                question="Does this work with Outlook?" 
                answer="Yes, it fully supports Outlook and Microsoft 365 accounts."
              />
              <FAQItem 
                question="Can I attach PDFs?" 
                answer="Absolutely. You can attach PDFs, documents, and other files to your personalized emails."
              />
              <FAQItem 
                question="Can I schedule emails?" 
                answer="Yes, you can schedule your emails to go out at the perfect time and space them out to look completely natural."
              />
              <FAQItem 
                question="Can I personalize emails?" 
                answer="Yes, you can easily personalize each email with merge tags like names, companies, and custom notes from your spreadsheet."
              />
              <FAQItem 
                question="Can it bypass strict IT policies on enterprise accounts?" 
                answer="No. While it works with Google Workspace and Microsoft 365, it cannot bypass strict IT security policies. If your company blocks third-party apps or disables IMAP/SMTP, you will need admin approval."
              />
              <FAQItem 
                question="Do you provide a custom API or webhooks?" 
                answer="No. Because Email Pilots is a local-first application running on your machine, it doesn't offer custom REST APIs, webhooks, or direct cloud integrations like Zapier."
              />
              <FAQItem 
                question="Will this manage my domain deliverability (SPF/DKIM/DMARC)?" 
                answer="No. We send mail directly through your existing account. We do not manage your domain authentication or repair poor domain reputations."
              />
              <FAQItem 
                question="Does it automatically sync with my cloud CRM?" 
                answer="No. To guarantee complete local-first privacy, your data never leaves your machine. We don't automatically sync emails to centralized cloud CRMs like Salesforce or HubSpot."
              />
              <FAQItem 
                question="Does it add automated unsubscribe links?" 
                answer="No. This tool is built to replicate authentic 1-to-1 personal outreach from your own inbox. It does not automatically inject unsubscribe links or manage global suppression lists."
              />
            </div>
          </section>

        </main>
        
        {/* CTA Section */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-4 mb-32 mt-32">
          <div className="relative w-full rounded-xl bg-gradient-to-br from-primary to-[#002288] overflow-hidden flex flex-col items-center text-center px-6 py-24 shadow-2xl border border-primary/20">
            {/* Technical Grid Overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
              }}
            />
            
            {/* Soft orange glow from bottom-right */}
            <div className="absolute -bottom-[50%] -right-[10%] w-[80%] h-[100%] bg-secondary/30 rounded-[100%] blur-[120px] z-0 pointer-events-none mix-blend-screen" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-widest text-white mb-6 uppercase">
                Clear for takeoff.
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12 font-medium">
                Connect your inbox and send your first personalized campaign in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center">
                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-semibold text-base rounded-lg hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl w-full sm:w-auto">
                  Start sending free
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-base rounded-lg hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto backdrop-blur-sm">
                  See how it works
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 w-full border-t border-border/50 bg-background pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="text-2xl font-display font-black tracking-widest uppercase text-foreground mb-6">
                  Email Pilots
                </div>
                <p className="text-muted-foreground max-w-sm">
                  Personalized email outreach that flies from your own inbox — local-first, naturally paced, never spam.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-6">Product</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
                  <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest mb-6">Use cases</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li><a href="#job-seekers" className="hover:text-primary transition-colors">Job seekers</a></li>
                  <li><a href="#recruiters" className="hover:text-primary transition-colors">Recruiters</a></li>
                  <li><a href="#freelancers" className="hover:text-primary transition-colors">Freelancers</a></li>
                  <li><a href="#community-builders" className="hover:text-primary transition-colors">Community builders</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                  <li><a href="mailto:support@emailpilots.com" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border/50 pt-8">
              <p className="text-sm text-muted-foreground">
                © 2026 Email Pilots — All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  )
}
