import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { cn } from '@/lib/utils'

export function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12)
  })

  return (
    <header id="top" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-5">
        <div 
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl border border-slate-line/80 bg-white/80 px-4 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(11,18,38,.25)] transition-all duration-300",
            scrolled && "!py-1.5 shadow-lift"
          )}
        >
          <a href="/#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue text-white shadow-glow">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"><path d="M3 11.5 21 3l-6.5 18-3.2-7.2L3 11.5Z" fill="currentColor"/><path d="m11.3 13.8 3.2-3.4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/></svg>
            </span>
            <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">Email&nbsp;Pilots</span>
          </a>
          <nav className="hidden items-center gap-8 text-[14px] font-medium text-slate-ink lg:flex">
            <a href="/#how" className="hover:text-blue transition-colors">How it works</a>
            <a href="/#features" className="hover:text-blue transition-colors">Features</a>
            <a href="/#who" className="hover:text-blue transition-colors">Who it's for</a>
            <a href="/#waitlist" className="hover:text-blue transition-colors">Waitlist</a>
            <a href="/#faq" className="hover:text-blue transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="/#waitlist" className="group flex items-center gap-1.5 sm:gap-2 rounded-xl bg-ink px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-[14px] font-semibold text-white transition-all duration-300 hover:bg-blue active:scale-95 whitespace-nowrap">
              <span>Join Waitlist</span>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
