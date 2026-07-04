import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { FINAL, PRICE, CHECKOUT_URL } from '../config'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-28 text-paper md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #5b8cff 1px, transparent 1.4px)', backgroundSize: '22px 22px' }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/20 blur-3xl" />
      <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          {FINAL.title} <span aria-hidden>✈</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">{FINAL.sub}</p>
        <div className="mt-10 flex justify-center">
          <Button href={CHECKOUT_URL} variant="light">Start for {PRICE.amount}/wk</Button>
        </div>
      </Reveal>
    </section>
  )
}
