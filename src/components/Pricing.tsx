import { motion } from 'motion/react'
import { Check, Plane } from 'lucide-react'

const PLAN = {
  name: 'Solo',
  tagline: 'One person, your own mailbox.',
}
const PRICE = { amount: '$2.9', period: 'week', trialDays: 7 }
const PRICING_INCLUDES = [
  'Sensible daily limits to protect your mailbox',
  'Up to 5 accounts (Gmail / Outlook / custom)',
  'Scheduling, personalization & merge fields',
  'Reply-aware follow-up sequences',
  'CSV import, lists & opt-out handling',
  '100% local — your data never leaves your machine',
]
const CHECKOUT_URL = '#pricing'

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-white">
      {/* Top dark navy border simulating the image boundary */}
      <div className="absolute top-0 inset-x-0 h-10 bg-navy z-20"></div>
      
      {/* The main background with grid and orbital lines */}
      <div className="relative pt-32 pb-40 px-5 border-t border-slate-line">
        <div className="absolute inset-0 pointer-events-none grid-paper opacity-50" />
        
        {/* Orbital SVGs background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main sweeping arc */}
          <svg className="absolute w-[150%] h-[150%] -left-[20%] -top-[10%] opacity-[0.15] text-blue" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M -200 600 Q 500 0 1200 600" fill="none" stroke="currentColor" strokeWidth="8" />
          </svg>
          {/* Faint secondary arcs */}
          <svg className="absolute w-[200%] h-[200%] left-[10%] -top-[20%] opacity-10 text-blue" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M 0 0 Q 500 1000 1000 0" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute w-[100%] h-[150%] right-[-10%] top-0 opacity-[0.15] text-blue" viewBox="0 0 1000 1000">
             <path d="M 800 -200 Q 1200 500 800 1200" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          
          {/* Floating dots and nodes */}
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-blue-300 opacity-60"></div>
          <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60"></div>
          <div className="absolute bottom-[30%] left-[20%] w-2.5 h-2.5 rounded-full bg-blue-300 opacity-60"></div>
          <div className="absolute top-[10%] right-[30%] w-2 h-2 rounded-full bg-blue-300 opacity-60"></div>
          <div className="absolute bottom-[10%] right-[10%] w-2 h-2 rounded-full bg-blue-300 opacity-60"></div>
          <div className="absolute top-[60%] left-[5%] w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60"></div>

          {/* Abstract solid blue blobs/nodes */}
          <div className="absolute top-[15%] left-[60%] w-[70px] h-[70px] rounded-full bg-blue-200/50"></div>
          <div className="absolute bottom-[20%] left-[18%] w-[80px] h-[80px] rounded-full bg-blue-200/50"></div>
        </div>

        {/* Vertical floating texts */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[.3em] text-slate-mute -rotate-90 origin-left hidden lg:block">
          ALT 07
        </div>
        <div className="absolute left-16 bottom-1/4 font-mono text-[10px] tracking-[.3em] text-slate-mute -rotate-90 origin-left hidden xl:block">
          BOARDING PASS
        </div>

        <div className="relative mx-auto max-w-5xl z-10 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-px bg-slate-line"></span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[.2em] text-slate-mute flex items-center gap-2">
                <span className="text-blue">+</span> 07.0 <span className="text-slate-line mx-1">|</span> BOARDING PASS
              </span>
              <span className="w-6 h-px bg-slate-line"></span>
            </div>
            
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-[68px]">One ticket. Everything included.</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mx-auto mt-20 max-w-4xl"
          >
            <div className="relative mx-auto grid grid-cols-1 overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-line/50 sm:grid-cols-[1fr_auto_22rem]">
              
              {/* Main stub */}
              <div className="p-10 md:p-12 lg:p-14">
                <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[.2em] text-slate-mute">
                  <span>Boarding pass</span>
                  <Plane className="w-4 h-4 text-slate-mute" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-extrabold text-ink">{PLAN.name}</h3>
                <p className="mt-1 text-[15px] text-slate-mute">{PLAN.tagline}</p>
                <ul className="mt-10 grid gap-4">
                  {PRICING_INCLUDES.map((it) => (
                    <li key={it} className="flex items-start gap-3.5 text-[15px] text-slate-ink">
                      <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-green-500 stroke-[2.5]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perforation */}
              <div className="relative hidden w-[1px] sm:block">
                <div className="perforation absolute inset-y-10 left-1/2 w-px -translate-x-1/2 opacity-30" />
              </div>

              {/* Tear-off stub */}
              <div className="flex flex-col justify-between p-10 md:p-12 lg:p-14 bg-white relative">
                {/* Mobile divider */}
                <div className="absolute top-0 left-8 right-8 h-px bg-slate-line/50 sm:hidden" />
                
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[.2em] text-slate-mute">Fare</div>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-[64px] leading-none font-black text-ink tracking-tight">{PRICE.amount}</span>
                    <span className="text-[17px] font-medium text-slate-mute">/{PRICE.period}</span>
                  </div>
                  <div className="mt-3 text-[14px] leading-relaxed text-slate-mute">Starts with a {PRICE.trialDays}-day trial · cancel anytime</div>
                </div>
                <div className="mt-10">
                  <a
                    href={CHECKOUT_URL}
                    className="group flex h-[56px] items-center justify-center gap-2 rounded-xl bg-blue px-6 text-[16px] font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5 active:scale-95 w-full shadow-[0_10px_20px_-10px_rgba(20,102,255,0.5)]"
                  >
                    Board now
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                  </a>
                  <div className="barcode mt-8 h-12 w-full opacity-60" aria-hidden />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
