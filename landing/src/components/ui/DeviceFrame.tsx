export function DeviceFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-paper-line bg-white shadow-lift ${className ?? ''}`}>
      <div className="flex items-center gap-1.5 border-b border-paper-line bg-paper px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-medium text-slate-mute">✈ Email Pilots</span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  )
}
