import { motion } from 'motion/react'
import { Inbox, MessageSquare, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: <Inbox className="h-6 w-6" />,
    badge: "Inbound",
    title: "Your message lands.",
    description: "Sent at a natural pace from your own address — it arrives like a note from a person, not a broadcast."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    badge: "Reply",
    title: "They write back.",
    description: "A read-only inbox check notices the reply. No tracking pixels, no rewriting your links."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    badge: "Cleared",
    title: "Follow-ups stop — automatically.",
    description: "The moment someone replies, the sequence halts. You step in only for the conversations that matter."
  }
]

export function LastMile() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">The last mile is the whole point.</h2>
        </motion.div>

        <div className="grid gap-12 md:gap-8 md:grid-cols-3 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-[1px] bg-slate-line z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-line shadow-sm text-blue">
                {step.icon}
              </div>
              <span className="mb-4 rounded-full bg-blue/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue">
                {step.badge}
              </span>
              <h3 className="mb-3 font-display text-[22px] font-bold text-ink">{step.title}</h3>
              <p className="max-w-[280px] text-[15px] leading-relaxed text-slate-ink/80">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
