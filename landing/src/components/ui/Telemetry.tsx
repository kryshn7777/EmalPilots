import { cn } from '../../lib/cn'

/** A big mono numeral with a caption — instrument-readout styling. */
export function Telemetry({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className={cn('', className)}>
      <div className="font-mono text-4xl font-bold tabular-nums text-ink">{value}</div>
      <div className="mt-1 text-sm leading-snug text-slate-mute">{label}</div>
    </div>
  )
}
