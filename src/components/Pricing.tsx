import { motion } from 'motion/react'

const PLAN = {
  name: 'Solo',
  tagline: 'One person, your own mailbox.',
}
const PRICE = { amount: '$2.9', period: 'week', trialDays: 7 }
const PRICING_INCLUDES = [
  'Sensible daily limits to protect your mailbox',
  'Up to 5 accounts (Gmail / Outlook / custom)',
  'Scheduling, personalization & merge fields',
  'Reply-aware follow-up sequences',
  'CSV import, lists & opt-out handling',
  '100% local — your data never leaves your machine',
]
const CHECKOUT_URL = '#pricing'

function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="relative px-5 py-24 md:py-32 overflow-hidden bg-slate-wash">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-line to-transparent"></div>
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue/5 blur-3xl" />

      <div className="mx-auto max-w-6xl relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Simple pricing</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">One ticket. Everything included.</h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
          <div className="mx-auto grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-lift sm:grid-cols-[1fr_auto_15rem]">
            {/* Main stub */}
            <div className="p-8">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.2em] text-slate-mute">
                <span>Boarding pass</span>
                <span aria-hidden>✈</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">{PLAN.name}</h3>
              <p className="text-sm text-slate-mute">{PLAN.tagline}</p>
              <ul className="mt-6 grid gap-2.5">
                {PRICING_INCLUDES.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-slate-ink">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            {/* Perforation */}
            <div className="relative hidden w-px sm:block">
              <div className="perforation absolute inset-y-4 left-1/2 w-px -translate-x-1/2" />
              <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-slate-wash" />
              <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-slate-wash" />
            </div>

            {/* Tear-off stub */}
            <div className="flex flex-col justify-between border-t border-slate-line bg-slate-wash p-8 sm:border-l sm:border-t-0 sm:border-slate-line">
              <div>
                <div className="font-mono text-[13px] font-bold uppercase tracking-[.2em] text-slate-mute">Fare</div>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-display text-5xl font-black text-ink">{PRICE.amount}</span>
                  <span className="mb-1 text-base font-semibold text-slate-mute">/{PRICE.period}</span>
                </div>
                <div className="mt-2 text-[14px] leading-relaxed text-slate-mute">Starts with a {PRICE.trialDays}-day trial · cancel anytime</div>
              </div>
              <div className="mt-6">
                <a
                  href={CHECKOUT_URL}
                  className="group flex h-[52px] items-center justify-center gap-2 rounded-xl bg-blue px-6 text-[15px] font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5 active:scale-95 w-full"
                >
                  Board now
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </a>
                <div className="barcode mt-5 h-10 w-full opacity-80" aria-hidden />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
