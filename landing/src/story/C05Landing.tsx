import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'

const STAGES = [
  { tag: 'Inbound', title: 'Your message lands.', body: 'Sent at a natural pace from your own address — it arrives like a note from a person, not a broadcast.' },
  { tag: 'Reply', title: 'They write back.', body: 'A read-only inbox check notices the reply. No tracking pixels, no rewriting your links.' },
  { tag: 'Cleared', title: 'Follow-ups stop — automatically.', body: 'The moment someone replies, the sequence halts. You step in only for the conversations that matter.' },
]

/**
 * Chapter 05 — Landing & reply (night world). The final approach as a three-beat
 * vertical timeline: land → reply → stop. A drawn spine connects the beats.
 */
export function C05Landing() {
  return (
    <section id="landing" className="night-panel relative overflow-hidden px-5 py-32 text-white">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Annotation code="04.0" label="Final approach" className="text-white/45" />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            The last mile is the whole point.
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-12">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-glow via-blue/50 to-success sm:left-[11px]" aria-hidden />
          <div className="grid gap-14">
            {STAGES.map((s, i) => (
              <Reveal key={s.tag} delay={i * 0.05}>
                <div className="relative">
                  {/* Node */}
                  <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center sm:-left-12" aria-hidden>
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-glow/30" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-blue-glow" />
                  </span>
                  <div className="font-mono text-xs uppercase tracking-[.24em] text-success">{s.tag}</div>
                  <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
