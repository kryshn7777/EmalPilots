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
            <img src="/logo.png" alt="Email Pilots Logo" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-[14px] font-medium text-slate-ink lg:flex">
            <a href="/#how" className="hover:text-blue transition-colors">How it works</a>
            <a href="/#features" className="hover:text-blue transition-colors">Features</a>
            <a href="/#who" className="hover:text-blue transition-colors">Who it's for</a>
            <a href="/#faq" className="hover:text-blue transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="https://github.com/kryshn7777/Email-Pilots/releases/download/1.0.0/Email.Pilots.Setup.1.0.0.exe" className="group flex items-center gap-1.5 sm:gap-2 rounded-xl bg-blue shadow-glow px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-[14px] font-semibold text-white transition-all duration-300 hover:bg-blue-600 active:scale-95 whitespace-nowrap">
              <span>Download</span>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
