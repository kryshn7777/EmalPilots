import { motion } from 'motion/react'

import type { Variants } from "motion/react"; const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-paper"></div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_50%_-5%,#eaf1ff_0%,transparent_60%)]"></div>
      <div className="pointer-events-none absolute -top-10 right-[8%] -z-10 h-72 w-72 rounded-full bg-orange/10 blur-3xl"></div>
      <div className="pointer-events-none absolute top-24 left-[6%] -z-10 h-72 w-72 rounded-full bg-blue/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        {/* Copy */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-slate-ink shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Runs on your machine · Connects to any inbox
          </motion.div>

          <motion.h1 variants={itemVariants} className="mt-6 font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-[-.02em] text-ink sm:text-6xl lg:text-[4.4rem]">
            Emails they actually open,{' '}<br className="hidden sm:block" />
            sent from <span className="text-blue">your own inbox.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-ink sm:text-lg">
            Email Pilots is your personal sending assistant. Connect Gmail or Outlook, drop in your contact list, and we send every message <span className="font-semibold text-ink">one by one at a natural human pace</span>. The payoff: you land in the primary inbox, not the spam folder.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#waitlist" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-6 py-4 text-[16px] font-semibold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95">
              Get Early Access Now
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
            </a>
            <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-line bg-white px-6 py-4 text-[16px] font-semibold text-ink transition-all duration-300 hover:border-ink/30 hover:shadow-card active:scale-95">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Watch the 60-sec demo
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] font-medium text-slate-mute">
            <span className="inline-flex items-center gap-1.5"><svg viewBox="0 0 24 24" className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>Cheaper than your weekly coffee</span>
            <span className="inline-flex items-center gap-1.5"><svg viewBox="0 0 24 24" className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>No card needed to start</span>
            <span className="inline-flex items-center gap-1.5"><svg viewBox="0 0 24 24" className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>Cancel anytime</span>
          </motion.div>
        </motion.div>

        {/* Product mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue/15 via-transparent to-orange/15 blur-2xl"></div>
          
          <div className="relative rounded-2xl border border-slate-line bg-white shadow-lift overflow-hidden">
            <div className="flex items-center gap-2 border-b border-slate-line bg-slate-wash px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
              <span className="ml-2 font-mono text-[11px] text-slate-mute">Email Pilots · Campaign: Q3 Outreach</span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-[10.5px] font-bold text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>SENDING
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_.92fr]">
              {/* Composer */}
              <div className="border-b md:border-b-0 md:border-r border-slate-line p-5">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-mute">Message template</div>
                <div className="space-y-3 text-[13px] leading-relaxed text-slate-ink">
                  <p>Hi <span className="rounded bg-blue-soft px-1.5 py-0.5 font-mono text-[12px] font-semibold text-blue">{`{{Name}}`}</span>,</p>
                  <p>I came across <span className="rounded bg-blue-soft px-1.5 py-0.5 font-mono text-[12px] font-semibold text-blue">{`{{Company}}`}</span> and wanted to reach out personally about…</p>
                  <div className="!mt-4 flex items-center gap-2 rounded-lg border border-slate-line bg-slate-wash px-3 py-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-orange" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.4 11.05 12 20.5a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.67 3.67 0 1 1 5.18 5.19l-9.2 9.19a1.83 1.83 0 0 1-2.59-2.59l8.49-8.48"/></svg>
                    <span className="font-mono text-[11.5px] text-ink truncate">Deck_<span className="text-orange">{`{{Company}}`}</span>.pdf</span>
                    <span className="ml-auto text-[10px] font-bold text-slate-mute">for each recipient</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-green-50 px-3 py-2">
                  <span className="text-[11px] font-semibold text-green-700">Spam score</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-green-600 px-2 py-0.5 text-[10.5px] font-bold text-white">✓ Safe · 0.4</span>
                </div>
              </div>
              
              {/* Queue */}
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-mute">Live queue</span>
                  <span className="font-mono text-[11px] font-semibold text-blue">42 / 100</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-green-500 text-white shadow"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg></span>
                    <div className="min-w-0"><div className="truncate text-[12.5px] font-semibold text-ink">john@acme.com</div><div className="text-[10.5px] text-slate-mute">Delivered · 9:02</div></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-green-500 text-white shadow"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg></span>
                    <div className="min-w-0"><div className="truncate text-[12.5px] font-semibold text-ink">sarah@tech.co</div><div className="text-[10.5px] text-slate-mute">Delivered · 9:11</div></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="relative grid h-6 w-6 place-items-center rounded-full border-2 border-blue bg-white">
                      <span className="absolute inset-0 rounded-full border-2 border-blue animate-pulse-ring"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-blue"></span>
                    </span>
                    <div className="min-w-0"><div className="truncate text-[12.5px] font-semibold text-blue">Waiting 4m 12s…</div><div className="text-[10.5px] text-slate-mute">Mimicking human pace</div></div>
                  </div>
                  <div className="flex items-center gap-3 opacity-55">
                    <span className="h-6 w-6 rounded-full border-2 border-dashed border-slate-line"></span>
                    <div className="min-w-0"><div className="truncate text-[12.5px] font-semibold text-slate-ink">mike@startup.io</div><div className="text-[10.5px] text-slate-mute">Queued</div></div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-line"><div className="h-full w-[42%] rounded-full bg-gradient-to-r from-blue to-blue-600"></div></div>
                  <div className="mt-2 text-[10.5px] text-slate-mute">Paced delivery · est. 3h 40m remaining</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating stat chip */}
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-slate-line bg-white px-4 py-3 shadow-lift sm:flex animate-float-y">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-green-100 text-green-600"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/><path d="m22 4-10 10.01-3-3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <div><div className="font-display text-lg font-extrabold leading-none text-ink">98.7%</div><div className="text-[11px] text-slate-mute">inbox success rate</div></div>
          </div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div 
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mt-16 max-w-6xl px-5"
      >
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-slate-line bg-white/70 px-6 py-5 backdrop-blur sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full border-2 border-white bg-blue/20"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-orange/30"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-green-200"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"></span>
            </div>
            <div className="text-[13.5px] leading-tight">
              <div className="flex items-center gap-1 text-orange">★★★★★ <span className="ml-1 font-semibold text-ink">4.9/5</span></div>
              <div className="text-slate-mute">trusted by 2,000+ solo senders</div>
            </div>
          </div>
          <div className="hidden h-8 w-px bg-slate-line sm:block"></div>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[14px] font-semibold text-slate-ink">
            <span className="inline-flex items-center gap-2"><svg viewBox="0 0 24 24" className="h-4 w-4 text-blue" fill="currentColor"><path d="M22 6 12 13 2 6"/><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/></svg>Works with Gmail</span>
            <span className="inline-flex items-center gap-2"><svg viewBox="0 0 24 24" className="h-4 w-4 text-blue" fill="currentColor"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8" opacity=".6"/><rect x="3" y="13" width="8" height="8" opacity=".6"/><rect x="13" y="13" width="8" height="8" opacity=".35"/></svg>Works with Outlook</span>
            <span className="inline-flex items-center gap-2"><svg viewBox="0 0 24 24" className="h-4 w-4 text-blue" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM4 6v14h16V6H4zm2 2h12v2H6V8z"/></svg>Works with any email</span>
            <span className="inline-flex items-center gap-2"><svg viewBox="0 0 24 24" className="h-4 w-4 text-blue" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeLinejoin="round"/></svg>100% private</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
