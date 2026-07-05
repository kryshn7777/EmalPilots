import { useEffect, useRef } from 'react'
import { scroll } from '../lib/scroll'

const LEN = 1000 // path length used for the dash trick

/**
 * A faint flight route that "draws" itself proportionally to scroll progress.
 * Fixed on the right edge, full height, pointer-events-none, decorative only.
 */
export function RouteLine() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = String(LEN * (1 - scroll.progress))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <svg
      className="pointer-events-none fixed inset-y-0 right-3 z-0 hidden h-full w-16 opacity-40 md:block"
      viewBox="0 0 60 1000"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M30 0 C 10 180, 50 320, 30 500 S 10 760, 30 1000"
        fill="none"
        stroke="var(--color-blue)"
        strokeWidth="1.4"
        strokeDasharray={LEN}
        strokeDashoffset={LEN}
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 4px rgba(91,140,255,0.5))' }}
      />
    </svg>
  )
}
