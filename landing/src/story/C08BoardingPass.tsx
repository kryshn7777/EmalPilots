import { Reveal } from '../components/ui/Reveal'
import { Annotation } from '../components/ui/Annotation'
import { BoardingPass } from '../components/ui/BoardingPass'
import { PRICE, PRICING_INCLUDES, PLAN, CHECKOUT_URL } from '../config'

/** Chapter 08 — Boarding pass (blueprint world): the Solo plan as a ticket. */
export function C08BoardingPass() {
  return (
    <section id="pricing" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <Annotation code="07.0" label="Boarding pass" className="justify-center" />
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">One ticket. Everything included.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14">
            <BoardingPass
              plan={PLAN.name}
              tagline={PLAN.tagline}
              price={PRICE.amount}
              period={PRICE.period}
              trialDays={PRICE.trialDays}
              includes={PRICING_INCLUDES}
              ctaHref={CHECKOUT_URL}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
