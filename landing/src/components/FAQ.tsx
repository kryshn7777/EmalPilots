import { Reveal } from './ui/Reveal'
import { FAQ as FAQ_DATA } from '../config'

export function FAQ() {
  return (
    <section id="faq" className="relative frost px-5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Questions</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Before you taxi out.</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((item) => (
            <Reveal key={item.q}>
              <details className="group rounded-2xl border border-paper-line bg-paper px-6 py-5 transition-colors open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-bold text-ink">
                  {item.q}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-blue transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-ink">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
