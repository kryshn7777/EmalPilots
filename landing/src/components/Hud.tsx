import { useEffect, useRef } from 'react'
import { CHAPTERS } from '../config'
import { scroll, chapterIndex } from '../lib/scroll'

/**
 * Fixed flight HUD. Desktop: a vertical climb rail on the left showing the
 * current chapter code/name and a fill that tracks scroll progress. Mobile: a
 * 2px progress bar pinned to the top. All updates happen in a single rAF loop
 * writing directly to refs — no re-render per frame.
 */
export function Hud() {
  const fillRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLSpanElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let raf = 0
    let last = -1
    const tick = () => {
      const p = scroll.progress
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
      const idx = chapterIndex(p)
      if (idx !== last) {
        last = idx
        const c = CHAPTERS[idx]
        if (codeRef.current) codeRef.current.textContent = `ALT ${c.code}`
        if (nameRef.current) nameRef.current.textContent = c.name
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      {/* Mobile: top progress bar */}
      <div className="fixed inset-x-0 top-0 z-40 h-[3px] bg-transparent md:hidden">
        <div ref={barRef} className="h-full origin-left scale-x-0 bg-blue" />
      </div>

      {/* Desktop: vertical climb rail */}
      <div className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-3">
          <span ref={codeRef} className="font-mono text-[10px] font-semibold uppercase tracking-[.25em] text-slate-mute">ALT 00</span>
          <div className="relative h-44 w-px overflow-hidden bg-paper-line">
            <div ref={fillRef} className="absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-blue to-blue-glow" />
          </div>
          <span ref={nameRef} className="max-w-[7rem] [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[.2em] text-slate-ink">Preflight</span>
        </div>
      </div>
    </>
  )
}
