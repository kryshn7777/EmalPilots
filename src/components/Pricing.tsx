import { motion } from 'motion/react'
import { Sparkles, Bot, Lock, ShieldCheck, Mail } from 'lucide-react'

const PLAN = {
  name: 'Solo',
  tagline: 'Your personal AI sending assistant.',
}
const PRICE = { amount: '$2.9', period: 'week', trialDays: 7 }
const PRICING_INCLUDES = [
  { text: 'Privacy-First Local AI', icon: Lock },
  { text: 'Unlimited AI Personalization', icon: Sparkles },
  { text: 'AI Spam Advisor', icon: ShieldCheck },
  { text: 'Smart Reply Classification', icon: Bot },
  { text: 'Connect 5 Accounts', icon: Mail },
]
const CHECKOUT_URL = '#pricing'

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-slate-wash py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none grid-paper opacity-50" />
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-blue/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl z-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-3 py-1 text-[12.5px] font-bold uppercase tracking-[.18em] text-blue mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse"></span> Simple Pricing
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">One simple price.<br/>Everything included.</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-16 max-w-4xl relative"
        >
          {/* Glowing aura behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue to-violet-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1fr] overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-line/50">
            
            {/* Left Half - Pricing & CTA */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-line/50 relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue/10 rounded-full blur-3xl pointer-events-none"></div>

               <h3 className="font-display text-2xl font-extrabold text-ink">{PLAN.name}</h3>
               <p className="mt-1 text-[15px] text-slate-mute">{PLAN.tagline}</p>
               
               <div className="mt-8 flex items-baseline gap-1.5">
                 <span className="font-display text-6xl font-black text-ink tracking-tight">{PRICE.amount}</span>
                 <span className="text-lg font-medium text-slate-mute">/{PRICE.period}</span>
               </div>
               <div className="mt-2 text-[14px] text-slate-mute">Starts with a {PRICE.trialDays}-day trial · cancel anytime</div>
               
               <div className="mt-8">
                 <a
                   href={CHECKOUT_URL}
                   className="group relative flex h-14 items-center justify-center gap-2 rounded-xl bg-blue px-6 text-base font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5 active:scale-95 w-full shadow-[0_10px_20px_-10px_rgba(20,102,255,0.5)]"
                 >
                   Start your free trial
                   <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                 </a>
                 <p className="text-center text-[12px] text-slate-mute mt-4">No credit card required.</p>
               </div>
            </div>

            {/* Right Half - Features */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
               <div className="text-[11px] font-bold uppercase tracking-[.2em] text-slate-mute mb-6">What's included</div>
               <ul className="grid gap-5">
                 {PRICING_INCLUDES.map((feature, i) => (
                   <motion.li 
                     key={i} 
                     initial={{ opacity: 0, x: 10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 + (i * 0.1) }}
                     className="flex items-center gap-4 text-[15px] font-medium text-slate-ink"
                   >
                     <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue/10 text-blue shrink-0 shadow-sm border border-blue/20">
                       <feature.icon className="w-4 h-4" />
                     </div>
                     {feature.text}
                   </motion.li>
                 ))}
               </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
