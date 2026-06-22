import { motion, Variants } from 'motion/react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-slate-wash overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-line to-transparent"></div>
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-[800px] h-[400px] bg-blue/5 blur-3xl rounded-full"></div>

      <div className="mx-auto max-w-6xl px-5 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Simple Pricing</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Stop paying per seat.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">One simple subscription. Unlimited sending. Cancel anytime.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 mx-auto max-w-lg"
        >
          <motion.div variants={itemVariants} className="relative rounded-3xl border-2 border-blue bg-white p-8 shadow-lift sm:p-10">
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue px-4 py-1 text-[13px] font-bold text-white shadow-glow whitespace-nowrap">
              Everything included
            </div>

            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-ink">Pro Sender</h3>
              <div className="mt-4 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-slate-mute">€</span>
                <span className="font-display text-6xl font-extrabold text-ink tracking-tight">1.99</span>
                <span className="text-lg font-semibold text-slate-mute">/wk</span>
              </div>
              <p className="mt-3 text-[14px] font-medium text-slate-mute">Billed weekly. No commitments.</p>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Up to 50 emails/day per account",
                "Up to 5 accounts (Gmail/Outlook/Custom)",
                "Smart human scheduling & pacing",
                "100% local data privacy",
                "Automated bounce cleaning",
                "Dynamic merge tags & custom attachments"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-slate-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-100 text-green-600">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>
                  </span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button className="w-full group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-blue px-6 text-[16px] font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95">
                Start Sending Today
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
              </button>
              <p className="mt-4 text-center text-[13px] font-medium text-slate-mute">No credit card required for 7-day trial.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
