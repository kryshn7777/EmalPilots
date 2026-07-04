import { Reveal } from './ui/Reveal'
import { SAFEGUARDS } from '../config'

export function Moat() {
  return (
    <section id="safeguards" className="relative frost px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Responsible sending</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Good sending habits, handled for you.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">
            Sensible limits, natural pacing, and respect for every reply and opt-out — so your mailbox stays healthy and your messages stay welcome.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {SAFEGUARDS.map((row, i) => (
            <Reveal key={row.concern} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-paper-line bg-paper p-6 transition-shadow hover:shadow-lift">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-mute">{row.concern}</div>
                  <div className="mt-1 text-[15px] leading-relaxed text-ink">{row.guard}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-bold text-white">
            ✓ Independently audited for safe, reliable sending
          </span>
        </Reveal>
      </div>
    </section>
  )
}
