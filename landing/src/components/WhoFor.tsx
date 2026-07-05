import { Reveal } from './ui/Reveal'
import { WHO_FOR } from '../config'

export function WhoFor() {
  return (
    <section id="who" className="relative frost px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Who it’s for</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Email you’d be proud to send.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_FOR.map((p, i) => (
            <Reveal key={p.who} delay={(i % 4) * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-paper p-6">
                <h3 className="text-lg font-bold text-ink">{p.who}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-ink">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
