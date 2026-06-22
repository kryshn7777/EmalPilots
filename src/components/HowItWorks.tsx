import { motion } from 'motion/react'

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-navy py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-[0.15]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(20,102,255,.28),transparent_60%)]"></div>
      
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue-soft/90">From zero to sending</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Live in three minutes flat.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/65">No DNS headaches. If you can send an email, you can launch a full campaign.</p>
        </motion.div>
        
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* dotted flight path */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px text-white/20 dash-path md:block animate-dash-move" style={{ backgroundSize: '200px 100%' }}></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 200, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue text-white shadow-glow"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span className="font-display text-5xl font-extrabold text-white/10">01</span>
            </div>
            <h3 className="font-display text-xl font-bold">Connect your inbox</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/65">Securely link the email provider you already use. No API wrangling, no setup maze. It sends through the inbox you already trust.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 200, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue text-white shadow-glow"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" strokeLinecap="round"/><path d="M9 3h6v6M21 3 11 13" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span className="font-display text-5xl font-extrabold text-white/10">02</span>
            </div>
            <h3 className="font-display text-xl font-bold">Add your contacts</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/65">Upload a spreadsheet or add people by hand. Drop in variables like <span className="font-mono text-[13px] text-blue-soft">{`{{Name}}`}</span> to personalize every message automatically, or write a custom note for anyone special.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 200, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange text-white shadow-[0_18px_50px_-18px_rgba(255,106,26,.8)]"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11.5 21 3l-6.5 18-3.2-7.2L3 11.5Z" strokeLinejoin="round"/></svg></span>
              <span className="font-display text-5xl font-extrabold text-white/10">03</span>
            </div>
            <h3 className="font-display text-xl font-bold">Hit send and walk away</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/65">Email Pilots paces every send like a human and stops the second something bounces. Kick back and watch it fly on the live dashboard.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
