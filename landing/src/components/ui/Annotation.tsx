import { cn } from '../../lib/cn'

/** Blueprint-style schematic callout: target glyph + coord code + leader + label. */
export function Annotation({ code, label, className }: { code: string; label: string; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.2em] text-slate-mute', className)}>
      <span className="text-blue" aria-hidden>⌖</span>
      <span>{code}</span>
      <span className="annot-leader h-px w-8" aria-hidden />
      <span>{label}</span>
    </span>
  )
}
