import { Reveal } from './ui/Reveal'
import { DELIVERABILITY } from '../config'

export function Deliverability() {
  return (
    <section id="deliverability" className="relative frost-paper px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Deliverability</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{DELIVERABILITY.title}</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">{DELIVERABILITY.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {DELIVERABILITY.points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-paper-line bg-white p-7">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate-ink">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
