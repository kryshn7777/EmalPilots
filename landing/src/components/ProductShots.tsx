import { Reveal } from './ui/Reveal'
import { DeviceFrame } from './ui/DeviceFrame'
import { SHOTS } from '../config'

// Prefix with Vite's BASE_URL so /shots assets resolve under the GitHub Pages
// project path (/Emailpilots3/) as well as at the local root.
const asset = (p: string) => import.meta.env.BASE_URL + p

export function ProductShots() {
  const [featured, ...rest] = SHOTS
  return (
    <section id="product" className="relative frost px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">See the real app</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">This is the actual cockpit.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-ink">Not mockups — real screens from the desktop app you’ll be flying.</p>
        </Reveal>

        <Reveal className="mt-14">
          <DeviceFrame src={asset(featured.src)} alt={featured.label} />
          <p className="mt-3 text-center text-sm text-slate-mute">{featured.caption}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rest.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.08}>
              <DeviceFrame src={asset(s.src)} alt={s.label} />
              <p className="mt-3 text-center text-sm text-slate-mute">{s.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
