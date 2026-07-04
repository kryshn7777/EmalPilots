import { Reveal } from './ui/Reveal'
import { COMPARISON } from '../config'

export function Comparison() {
  return (
    <section id="compare" className="relative frost px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Why not the others</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Own your autopilot.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {COMPARISON.map((c, i) => (
            <Reveal key={c.them} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-paper p-7">
                <div className="text-sm font-bold uppercase tracking-wide text-slate-mute">{c.them}</div>
                <p className="mt-4 text-[15px] leading-relaxed text-ink">{c.point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
