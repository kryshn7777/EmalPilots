import { Reveal } from './ui/Reveal'
import { PRICE, PRICING_INCLUDES, CHECKOUT_URL } from '../config'

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden frost-paper px-5 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Simple pricing</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Stop paying per seat.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">One subscription. Unlimited sending. Cancel anytime.</p>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-lg">
          <div className="relative rounded-3xl border-2 border-blue bg-white p-8 shadow-lift sm:p-10">
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="animate-float-y whitespace-nowrap rounded-full bg-blue px-4 py-1 text-[13px] font-bold text-white shadow-glow">
                Everything included
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-ink">Pro Sender</h3>
              <div className="mt-4 flex items-end justify-center gap-1">
                <span className="text-7xl font-extrabold tracking-tight text-ink">{PRICE.amount}</span>
                <span className="mb-2 text-lg font-semibold text-slate-mute">/{PRICE.period}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-slate-mute">Billed weekly. No commitments.</p>
            </div>

            <ul className="mt-10 space-y-4">
              {PRICING_INCLUDES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-slate-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                  </span>
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <a href={CHECKOUT_URL} className="group mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95">
              Start your subscription
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </a>
            <p className="mt-4 text-center text-[13px] font-medium text-slate-mute">{PRICE.trialDays}-day trial. No credit card to start.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
