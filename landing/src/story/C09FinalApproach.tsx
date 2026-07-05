import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { Button } from '../components/ui/Button'
import { Footer } from '../components/Footer'
import { FAQ, FINAL, PRICE, CHECKOUT_URL } from '../config'

/** Chapter 09 — Final approach (night world): FAQ, the closing CTA, footer. */
export function C09FinalApproach() {
  return (
    <section id="faq" className="night-panel relative overflow-hidden text-white">
      <div className="mx-auto max-w-4xl px-5 py-28">
        <Reveal>
          <Annotation code="08.0" label="Before you board" className="text-white/45" />
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Pre-flight questions.</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={(i % 5) * 0.04}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-white">
                  {f.q}
                  <span className="text-blue-glow transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-white/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{FINAL.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">{FINAL.sub}</p>
            <div className="mt-9 flex justify-center">
              <Button href={CHECKOUT_URL} variant="primary">Start for {PRICE.amount}/wk</Button>
            </div>
          </div>
        </Reveal>
      </div>
      <Footer />
    </section>
  )
}
