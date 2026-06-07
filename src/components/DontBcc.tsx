import { motion } from 'motion/react'

export function DontBcc() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        
        {/* visual: spam card vs paced timeline */}
        <motion.div 
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative order-2 flex h-[420px] items-center justify-center lg:order-1"
        >
          {/* bad card */}
          <div className="absolute left-2 top-6 w-64 -rotate-6 rounded-xl border border-slate-line bg-white p-4 opacity-70 shadow-card grayscale">
            <div className="mb-3 flex items-center gap-1.5 border-b border-slate-line pb-2">
              <span className="h-2 w-2 rounded-full bg-red-400"></span>
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              <span className="ml-1 font-mono text-[10px] text-slate-mute">New Message</span>
            </div>
            <div className="font-mono text-[10.5px] leading-relaxed text-slate-mute">
              <div className="mb-1">To: <span className="text-ink">undisclosed-recipients;</span></div>
              <div className="text-red-500 break-all">BCC: user@mail.com, user@mail.com, user@mail.com, user@mail.com, user@mail.com…</div>
            </div>
            <div className="mt-3 inline-flex rotate-3 items-center rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">550 Spam Error</div>
          </div>
          
          {/* good card */}
          <div className="absolute right-2 bottom-4 z-10 w-72 rotate-3 rounded-xl border border-blue/25 bg-white p-5 shadow-glow">
            <div className="mb-4 flex items-center gap-2 border-b border-blue/15 pb-3 text-[12px] font-bold uppercase tracking-wider text-blue">
              <span className="h-2 w-2 rounded-full bg-blue animate-pulse"></span>Sending one by one
            </div>
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue text-white"><svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg></span>
                <div><div className="text-[12.5px] font-bold text-ink">john@acme.com</div><div className="text-[10.5px] text-slate-mute">Sent perfectly</div></div>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-blue/50 bg-white"><span className="h-1.5 w-1.5 rounded-full bg-blue/60"></span></span>
                <div><div className="text-[12.5px] font-bold text-blue">Waiting 3 minutes…</div><div className="text-[10.5px] text-slate-mute">Looks human</div></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue text-white"><svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg></span>
                <div><div className="text-[12.5px] font-bold text-ink">sarah@tech.co</div><div className="text-[10.5px] text-slate-mute">Sent perfectly</div></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* copy */}
        <motion.div 
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-orange">Stop hurting your reputation</span>
          <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]" style={{ textWrap: 'balance' }}>
            Don't BCC 100 people.<br /><span className="text-slate-mute">Let your assistant<br />send them perfectly.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-slate-ink">Blast everyone in one BCC and your email dives straight into spam. Send them by hand and you lose an entire afternoon to copy-paste.</p>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-slate-ink">Email Pilots sends each message individually, with natural pauses in between — exactly like a real person would. You grab a coffee; it does the typing.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-line bg-white px-3.5 py-2 text-[13.5px] font-semibold text-ink"><svg viewBox="0 0 24 24" className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>No spam folder</span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-line bg-white px-3.5 py-2 text-[13.5px] font-semibold text-ink"><svg viewBox="0 0 24 24" className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>Hours back every week</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
