import { Reveal } from './ui/Reveal'
import { HOW } from '../config'

export function HowItWorks() {
  return (
    <section id="how" className="relative frost-paper px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">How it works</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Set up once. Then it flies.</h2>
        </Reveal>

        <div className="flight-divider mx-auto mt-10 max-w-xl" />

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-paper-line to-transparent md:block" />
          {HOW.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-2xl border border-paper-line bg-white p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue text-lg font-extrabold text-white shadow-glow">{s.step}</div>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-ink">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
