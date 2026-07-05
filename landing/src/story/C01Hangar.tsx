import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/ui/Button'
import { Annotation } from '../components/ui/Annotation'
import { HERO, PRICE, CHECKOUT_URL } from '../config'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Chapter 01 — Hangar / Preflight (night world). The full-screen hero. */
export function C01Hangar() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Honor prefers-reduced-motion: no intro tween, no scroll-scrub.
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-rise', { y: 34, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 })
        gsap.to('.hero-copy', {
          yPercent: -18,
          autoAlpha: 0.35,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} id="top" className="relative min-h-screen overflow-hidden text-paper">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(8,16,40,0.92) 0%, rgba(8,16,40,0.62) 42%, rgba(8,16,40,0) 74%)' }}
      />
      <div className="hero-copy relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-16">
        <div className="max-w-2xl">
          <span className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-blue-glow backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {HERO.kicker}
          </span>
          <h1 className="hero-rise mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {HERO.title[0]}
            <br />
            <span className="text-blue-glow">{HERO.title[1]}</span>
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-white/75">{HERO.sub}</p>
          <div className="hero-rise mt-9 flex flex-wrap items-center gap-4">
            <Button href={CHECKOUT_URL} variant="primary">Start for {PRICE.amount}/wk</Button>
            <Button href="#how" variant="ghost">See it fly</Button>
          </div>
          <p className="hero-rise mt-6 flex items-center gap-2 text-sm text-white/55">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-success" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
            {HERO.trust}
          </p>
          <Annotation code="N 00°" label="Cleared for takeoff" className="hero-rise mt-10 text-white/45" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
