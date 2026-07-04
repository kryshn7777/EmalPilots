import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-navy-900 px-5 py-12 text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row">
        <Logo variant="dark" className="text-white" />
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
        </nav>
        <div className="text-xs">© {new Date().getFullYear()} Email Pilots. Sent from your machine, not ours.</div>
      </div>
    </footer>
  )
}
