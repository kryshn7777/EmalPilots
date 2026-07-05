import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { SAFEGUARDS, DELIVERABILITY } from '../config'

/**
 * Chapter 03 — Takeoff & pacing (night world). The responsible-sending and
 * deliverability story as a steady, careful climb. The intro column sticks
 * while the safeguard cards scroll past — a "held beat" without a fragile pin.
 */
export function C03Takeoff() {
  return (
    <section id="deliverability" className="night-panel relative overflow-hidden px-5 py-28 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-28">
          <Annotation code="02.0" label="Climb out, carefully" className="text-white/45" />
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{DELIVERABILITY.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">{DELIVERABILITY.sub}</p>
          {/* Climb gauge — a small ascending flight-path readout. */}
          <div className="relative mt-10 hidden h-40 w-full max-w-xs overflow-hidden rounded-xl border border-white/12 lg:block">
            <div className="absolute inset-x-4 bottom-4 top-4">
              <div className="absolute inset-0 rounded bg-gradient-to-tr from-blue/10 to-transparent" />
              <div className="absolute bottom-0 left-0 h-px w-full rotate-[-14deg] origin-bottom-left bg-gradient-to-r from-blue-glow to-transparent" />
            </div>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">ground</span>
            <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">cruise alt</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SAFEGUARDS.map((s, i) => (
            <Reveal key={s.concern} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-warn">{s.concern}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">{s.guard}</p>
              </div>
            </Reveal>
          ))}
          {DELIVERABILITY.points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
