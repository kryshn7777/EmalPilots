import { Reveal } from './ui/Reveal'
import { STATS } from '../config'

export function StatBand() {
  return (
    <section className="relative frost">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-6 py-8 text-center">
                <div className="text-4xl font-extrabold tracking-tight text-ink">{s.value}</div>
                <div className="mt-2 text-sm leading-snug text-slate-mute">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
