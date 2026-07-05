import { Button } from './Button'

/** Pricing rendered as an airline boarding pass: main stub + tear-off stub. */
export function BoardingPass({
  plan,
  tagline,
  price,
  period,
  trialDays,
  includes,
  ctaHref,
}: {
  plan: string
  tagline: string
  price: string
  period: string
  trialDays: number
  includes: string[]
  ctaHref: string
}) {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-lift sm:grid-cols-[1fr_auto_15rem]">
      {/* Main stub */}
      <div className="p-8">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.2em] text-slate-mute">
          <span>Boarding pass</span>
          <span aria-hidden>✈</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">{plan}</h3>
        <p className="text-sm text-slate-mute">{tagline}</p>
        <ul className="mt-6 grid gap-2.5">
          {includes.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-sm text-slate-ink">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-success" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
              {it}
            </li>
          ))}
        </ul>
      </div>

      {/* Perforation */}
      <div className="relative hidden w-px sm:block">
        <div className="perforation absolute inset-y-4 left-1/2 w-px -translate-x-1/2" />
        <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-paper" />
        <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-paper" />
      </div>

      {/* Tear-off stub */}
      <div className="flex flex-col justify-between border-t border-paper-line bg-paper p-8 sm:border-l sm:border-t-0">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[.2em] text-slate-mute">Fare</div>
          <div className="mt-2 flex items-end gap-1">
            <span className="font-display text-4xl font-extrabold text-ink">{price}</span>
            <span className="mb-1 text-sm text-slate-mute">/{period}</span>
          </div>
          <div className="mt-1 text-xs text-slate-mute">Starts with a {trialDays}-day trial · cancel anytime</div>
        </div>
        <div className="mt-6">
          <Button href={ctaHref} variant="primary" className="w-full">Board now</Button>
          <div className="barcode mt-5 h-10 w-full opacity-80" aria-hidden />
        </div>
      </div>
    </div>
  )
}
