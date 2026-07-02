export function Footer() {
  return (
    <footer className="border-t border-slate-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Email Pilots Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[14px] font-medium text-slate-mute">
          <a href="/#how" className="hover:text-blue transition-colors">How it works</a>
          <a href="/#features" className="hover:text-blue transition-colors">Features</a>
          <a href="/#pricing" className="hover:text-blue transition-colors">Pricing</a>
          <a href="/#waitlist" className="hover:text-blue transition-colors">Waitlist</a>
          <a href="/#faq" className="hover:text-blue transition-colors">FAQ</a>
          <a href="/terms" className="hover:text-blue transition-colors">Terms of Service</a>
          <a href="/privacy" className="hover:text-blue transition-colors">Privacy Policy</a>
        </div>
        
        <div className="text-[13px] text-slate-mute">
          &copy; {new Date().getFullYear()} Email Pilots. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
