/** A planned-feature card for the night-world "Next frontier" chapter. */
export function ComingSoonCard({ title, body, badge }: { title: string; body: string; badge: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6">
      <span className="font-mono text-[10px] uppercase tracking-[.22em] text-warn">Planned</span>
      <h3 className="mt-3 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
      <span className="sr-only">{badge}</span>
    </div>
  )
}
