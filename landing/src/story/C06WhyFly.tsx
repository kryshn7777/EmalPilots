import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { COMPARISON, WHO_FOR } from '../config'

/** Chapter 06 — Why fly with us (blueprint world): comparison + personas. */
export function C06WhyFly() {
  return (
    <section id="why" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Annotation code="05.0" label="Why fly with us" />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            A different kind of aircraft.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {COMPARISON.map((c, i) => (
            <Reveal key={c.them} delay={i * 0.07}>
              <div className="blueprint-panel h-full rounded-2xl p-6">
                <div className="font-mono text-xs uppercase tracking-[.16em] text-blue">{c.them}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">{c.point}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-20 font-display text-2xl font-bold text-ink">Who’s on board</h3>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_FOR.map((w, i) => (
            <Reveal key={w.who} delay={(i % 4) * 0.06}>
              <div className="rounded-2xl border border-paper-line bg-white/60 p-6">
                <div className="font-display text-lg font-bold text-ink">{w.who}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-ink">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
