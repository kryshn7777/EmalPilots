import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Props = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light'
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({ href = '#', children, variant = 'primary', className, ...rest }: Props) {
  const base =
    'group inline-flex h-[52px] items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-bold transition-all duration-300 active:scale-95'
  const variants: Record<string, string> = {
    primary: 'bg-blue text-white shadow-glow hover:bg-blue-600 hover:-translate-y-0.5',
    light: 'bg-white text-ink shadow-lift hover:-translate-y-0.5',
    ghost: 'border border-white/25 text-white hover:bg-white/10',
  }
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
    </a>
  )
}
