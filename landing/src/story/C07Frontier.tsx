import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { ComingSoonCard } from '../components/ui/ComingSoonCard'
import { COMING_SOON } from '../config'

/** Chapter 07 — The next frontier (night world): Business & Teams roadmap. */
export function C07Frontier() {
  return (
    <section id="business" className="night-panel relative overflow-hidden px-5 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <Annotation code="06.0" label={COMING_SOON.eyebrow} className="text-white/45" />
            <span className="inline-flex items-center gap-2 rounded-full border border-warn/40 bg-warn/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-warn">
              <span className="h-1.5 w-1.5 rounded-full bg-warn" />
              {COMING_SOON.badge}
            </span>
          </div>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{COMING_SOON.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{COMING_SOON.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMING_SOON.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06}>
              <ComingSoonCard title={it.title} body={it.body} badge={COMING_SOON.badge} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={COMING_SOON.waitlistHref}
            className="mt-12 inline-flex h-12 items-center gap-2 rounded-xl border border-white/25 px-6 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            {COMING_SOON.waitlistLabel}
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
