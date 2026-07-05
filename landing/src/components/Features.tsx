import { Reveal } from './ui/Reveal'
import { FEATURE_GROUPS } from '../config'

export function Features() {
  return (
    <section id="features" className="relative frost-paper px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Everything in the cockpit</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">The full flight manual.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">
            No feature gates, no upsells. Every capability below is included at {`$2.9`}/week.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-bold text-ink">{g.title}</h3>
                  <span className="text-xs font-bold text-paper-line">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-mute">{g.blurb}</p>
                <ul className="mt-5 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-slate-ink">
                      <svg viewBox="0 0 24 24" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-blue" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
