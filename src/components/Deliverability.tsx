import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react'
import { useState } from 'react'

function InteractiveBounceCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 })

  // Tilt ranges from -15 to +15 degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  // Spotlight position
  const mouseX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const mouseY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])
  
  // Only show the spotlight when hovered
  const opacity = useSpring(isHovered ? 1 : 0, { stiffness: 400, damping: 25 })

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX} ${mouseY}, rgba(255,255,255,0.2), transparent 40%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const localX = e.clientX - rect.left
    const localY = e.clientY - rect.top
    const xPct = localX / width - 0.5
    const yPct = localY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      className="relative flex h-full min-h-[180px] cursor-pointer flex-col justify-center items-center sm:items-start text-center sm:text-left overflow-hidden rounded-2xl border border-blue/20 bg-blue p-6 text-white shadow-glow"
    >
      {/* Spotlight Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0" 
        style={{ background, opacity }}
      />
      
      {/* Content moved slightly forward in Z-space */}
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="font-display text-5xl font-extrabold leading-none">~0%</div>
        <div className="mt-2 text-[15px] font-semibold text-white/90">average bounce rate</div>
        <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">across campaigns run with all five safeguards on.</p>
      </div>
    </motion.div>
  )
}

import type { Variants } from "motion/react"; const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

export function Deliverability() {
  return (
    <section className="relative bg-slate-wash py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-3 py-1 text-[12.5px] font-bold uppercase tracking-[.18em] text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse"></span>Deliverability engine
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Built to land in the inbox.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">Five safeguards guard your sender reputation so your messages actually get read, not buried under Promotions.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1: Pacing */}
          <motion.div 
            variants={itemVariants} 
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="mb-4 flex items-end gap-1 h-10">
              <motion.span variants={{ rest: { height: "40%" }, hover: { height: ["0%", "40%"], transition: { duration: 0.4, ease: "easeOut" } } }} className="w-2 rounded-t bg-blue/30"></motion.span>
              <motion.span variants={{ rest: { height: "70%" }, hover: { height: ["0%", "70%"], transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } } }} className="w-2 rounded-t bg-blue/50"></motion.span>
              <motion.span variants={{ rest: { height: "45%" }, hover: { height: ["0%", "45%"], transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } } }} className="w-2 rounded-t bg-blue/40"></motion.span>
              <motion.span variants={{ rest: { height: "90%" }, hover: { height: ["0%", "90%"], transition: { duration: 0.4, ease: "easeOut", delay: 0.3 } } }} className="w-2 rounded-t bg-blue"></motion.span>
              <motion.span variants={{ rest: { height: "60%" }, hover: { height: ["0%", "60%"], transition: { duration: 0.4, ease: "easeOut", delay: 0.4 } } }} className="w-2 rounded-t bg-blue/60"></motion.span>
              <motion.span variants={{ rest: { height: "85%" }, hover: { height: ["0%", "85%"], transition: { duration: 0.4, ease: "easeOut", delay: 0.5 } } }} className="w-2 rounded-t bg-blue/80"></motion.span>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Natural Send Pacing</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Randomized delays and strategic pauses make your automated emails look like they were typed by hand.</p>
          </motion.div>
          
          {/* Card 2: Rate Limiting */}
          <motion.div 
            variants={itemVariants} 
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="mb-4 flex h-10 items-center">
              <div className="flex h-7 w-44 items-center rounded-full border-2 border-orange/30 bg-white p-1">
                <motion.div 
                  variants={{ rest: { width: "60%" }, hover: { width: ["0%", "60%"], transition: { duration: 0.8, ease: "easeOut" } } }}
                  className="flex h-full items-center justify-end overflow-hidden whitespace-nowrap rounded-full bg-orange px-2"
                >
                  <span className="text-[9px] font-bold text-white">SAFE LIMIT</span>
                </motion.div>
              </div>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Intelligent Rate Limiting</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Smart daily limits keep delivery steady and keep provider red flags away.</p>
          </motion.div>
          
          {/* Card 3: Warmup */}
          <motion.div 
            variants={itemVariants} 
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="mb-4 h-10">
              <svg viewBox="0 0 120 40" className="h-full w-32" fill="none">
                <motion.path 
                  d="M4 36 Q40 36 64 18 T116 4" 
                  stroke="#16a34a" strokeWidth="3" strokeLinecap="round"
                  variants={{ rest: { pathLength: 1 }, hover: { pathLength: [0, 1], transition: { duration: 1, ease: "easeInOut" } } }}
                />
                <circle cx="116" cy="4" r="3" fill="#16a34a"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Automated Warmup</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Gradually ramps up your sending volume to establish and protect your domain reputation.</p>
          </motion.div>
          
          {/* Card 4: DNS */}
          <motion.div 
            variants={itemVariants} 
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="mb-4 flex h-10 items-center gap-2 rounded-lg bg-violet-50 px-3">
              <motion.span 
                variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1], transition: { duration: 0.6 } } }}
                className="grid h-6 w-6 place-items-center rounded-full bg-violet-500/20 text-violet-600"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>
              </motion.span>
              <span className="font-mono text-[11px] font-bold text-violet-700">verified</span>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Verification before sending</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Checks every address before it sends, keeping your bounce rate near zero.</p>
          </motion.div>
          
          {/* Card 5: Domain Authentication */}
          <motion.div 
            variants={itemVariants} 
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="mb-4 flex h-10 items-center gap-2">
              <div className="flex h-7 items-center rounded bg-emerald-50 px-2 font-mono text-[11px] font-bold text-emerald-700">SPF</div>
              <div className="flex h-7 items-center rounded bg-emerald-50 px-2 font-mono text-[11px] font-bold text-emerald-700">DKIM</div>
              <div className="flex h-7 items-center rounded bg-emerald-50 px-2 font-mono text-[11px] font-bold text-emerald-700">DMARC</div>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Domain Authentication</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Guided SPF, DKIM and DMARC setup ensures your emails are verified and trusted by all major inbox providers.</p>
          </motion.div>

          {/* Card 6: Primary Inbox */}
          <motion.div 
            variants={itemVariants} 
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="mb-4 flex h-10 items-center">
              <div className="w-32 rounded-md border-t-4 border-amber-400 bg-slate-wash p-2">
                <motion.div variants={{ rest: { width: "100%" }, hover: { width: ["0%", "100%"], transition: { duration: 0.5, ease: "easeOut" } } }} className="mb-1 h-1.5 rounded bg-slate-200"></motion.div>
                <motion.div variants={{ rest: { width: "66.666667%" }, hover: { width: ["0%", "66.666667%"], transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } } }} className="h-1.5 rounded bg-slate-200"></motion.div>
                <motion.span variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: [0, 1], scale: [0.8, 1], transition: { duration: 0.4, delay: 0.3 } } }} className="mt-1.5 inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-amber-700">Primary</motion.span>
              </div>
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Primary Inbox Placement</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Clean, plain text emails bypass promotional filters and land directly in the primary inbox.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="perspective-1000 sm:col-span-2 lg:col-span-3">
            <InteractiveBounceCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
