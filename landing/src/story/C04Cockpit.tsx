import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { DeviceFrame } from '../components/ui/DeviceFrame'
import { FEATURE_GROUPS, SHOTS } from '../config'

/** Chapter 04 — The cockpit (blueprint world): every instrument, on one panel. */
export function C04Cockpit() {
  return (
    <section id="features" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Annotation code="03.0" label="The cockpit" />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Every instrument, on one panel.
          </h2>
        </Reveal>

        {/* Product shots */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06}>
              <figure>
                <DeviceFrame src={s.src} alt={`${s.label} — ${s.caption}`} />
                <figcaption className="mt-3 text-sm text-slate-mute"><span className="font-semibold text-ink">{s.label}.</span> {s.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Feature instruments */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="blueprint-panel h-full rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-ink">{g.title}</h3>
                <p className="mt-1.5 text-sm text-slate-mute">{g.blurb}</p>
                <ul className="mt-4 grid gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[13.5px] leading-snug text-slate-ink">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                      {it}
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
