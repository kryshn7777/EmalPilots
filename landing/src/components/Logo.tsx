import { BRAND } from '../config'
import { cn } from '../lib/cn'

/**
 * Brand logo slot. If BRAND.logoSrc (or logoDarkSrc for dark backgrounds) is
 * set, renders that asset. Otherwise renders an animated wordmark fallback that
 * uses currentColor — the caller sets the color via className.
 */
export function Logo({
  variant = 'light',
  className,
}: {
  variant?: 'light' | 'dark'
  className?: string
}) {
  const src = variant === 'dark' ? BRAND.logoDarkSrc || BRAND.logoSrc : BRAND.logoSrc

  if (src) {
    return <img src={src} alt={BRAND.name} className={cn('h-8 w-auto', className)} />
  }

  return (
    <span className={cn('inline-flex items-center gap-2 font-display text-lg font-extrabold tracking-tight', className)}>
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 animate-float-y" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12 22 3l-6 18-3.5-7.5L2 12Z" />
        <path d="M12.5 13.5 22 3" />
      </svg>
      {BRAND.name}
    </span>
  )
}
