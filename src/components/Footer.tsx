export function Footer() {
  return (
    <footer className="border-t border-slate-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue text-white shadow-glow">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none"><path d="M3 11.5 21 3l-6.5 18-3.2-7.2L3 11.5Z" fill="currentColor"/><path d="m11.3 13.8 3.2-3.4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/></svg>
          </span>
          <span className="font-display text-[16px] font-extrabold tracking-tight text-ink">Email&nbsp;Pilots</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[14px] font-medium text-slate-mute">
          <a href="#how" className="hover:text-blue transition-colors">How it works</a>
          <a href="#features" className="hover:text-blue transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-blue transition-colors">FAQ</a>
          <a href="#" className="hover:text-blue transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue transition-colors">Privacy Policy</a>
        </div>
        
        <div className="text-[13px] text-slate-mute">
          &copy; {new Date().getFullYear()} Email Pilots. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
