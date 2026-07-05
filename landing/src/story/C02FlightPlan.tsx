import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { HOW } from '../config'

/** Chapter 02 — Flight plan (blueprint world): the three setup steps. */
export function C02FlightPlan() {
  return (
    <section id="how" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Annotation code="01.0" label="File the flight plan" />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Three steps from gate to wheels-up.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HOW.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="blueprint-panel relative h-full rounded-2xl p-7">
                <div className="font-mono text-sm font-semibold text-blue">{s.step}</div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">{s.body}</p>
                {i < HOW.length - 1 && (
                  <div className="flight-divider absolute -right-3 top-1/2 hidden w-6 md:block" aria-hidden />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
