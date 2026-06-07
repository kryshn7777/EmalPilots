import { motion } from 'motion/react'

export function Features() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div 
        className="absolute inset-x-0 -top-[150px] -bottom-[150px] pointer-events-none -z-10" 
        style={{ background: 'linear-gradient(to bottom, transparent 0px, rgba(255,255,255,0.7) 150px, white 250px, white calc(100% - 250px), rgba(255,255,255,0.7) calc(100% - 150px), transparent 100%)' }} 
      />
      <div className="mx-auto max-w-6xl px-5 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Everything in the box</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">A full outreach studio. On your laptop.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">No add-ons, no upsells, no per-seat pricing. Every feature below is included from day one.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {/* big: privacy */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.0 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:col-span-3"
          >
            <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-blue-soft text-blue"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round"/></svg></div>
            <h3 className="font-display text-xl font-bold text-ink">100% local privacy</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-ink">Your contacts and lead lists never touch a cloud server. Everything runs on your machine — your proprietary data stays yours, full stop.</p>
            <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 rounded-xl border border-slate-line bg-slate-wash px-3 sm:px-4 py-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-slate-mute shadow-sm"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" /></svg></span>
              <span className="font-mono text-[12px] text-slate-mute">cloud</span>
              <span className="relative mx-1 h-px flex-1 bg-slate-line hidden sm:block"><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-0.5 text-red-500"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 6 12 12M18 6 6 18" strokeLinecap="round"/></svg></span></span>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue text-white shadow ml-auto sm:ml-0"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8" strokeLinecap="round"/></svg></span>
              <span className="font-mono text-[12px] font-bold text-blue">your machine</span>
            </div>
          </motion.div>
          
          {/* big: personalization */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:col-span-3"
          >
            <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-orange-soft text-orange"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 1.9 4.6L19 9.2l-4.1 3 1.4 5.2L12 14.8 7.7 17.4l1.4-5.2L5 9.2l5.1-1.6L12 3Z" strokeLinejoin="round"/></svg></div>
            <h3 className="font-display text-xl font-bold text-ink">Deep personalization</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-ink">Merge tags adapt every message on the fly — even attaching a unique PDF or pitch deck per recipient.</p>
            <div className="mt-6 rounded-xl border border-slate-line bg-slate-wash px-4 py-3 font-mono text-[13px]">
              <span className="text-ink">Hey </span><span className="rounded bg-blue-soft px-1.5 py-0.5 font-semibold text-blue">{`{{Name}}`}</span><span className="text-ink">, congrats on </span><span className="rounded bg-orange-soft px-1.5 py-0.5 font-semibold text-orange">{`{{Company}}`}</span><span className="text-ink">'s raise…</span>
            </div>
          </motion.div>
          
          {/* small x3 */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="group rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:col-span-2"
          >
            <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-green-50 text-green-600"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3 className="font-display text-lg font-bold text-ink">Pre-flight spam check</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Catches spam-trigger words, ALL CAPS and broken links before you ever hit send.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="group rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:col-span-2"
          >
            <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-blue-soft text-blue"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3 className="font-display text-lg font-bold text-ink">Smart human scheduling</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Randomized, human-like delays and perfect send times in your prospect's timezone.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="group rounded-2xl border border-slate-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:col-span-2"
          >
            <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-orange-soft text-orange"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M3 12h18M3 17h12" strokeLinecap="round"/></svg></div>
            <h3 className="font-display text-lg font-bold text-ink">Auto-clean bounces</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">Pre-checks domains and instantly stops sending to dead inboxes — no manual cleanup.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
