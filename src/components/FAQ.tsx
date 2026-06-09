import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "Will my computer need to stay on?",
    answer: "Yes. EmailPilots is a local-first application. Scheduled emails are sent from your device."
  },
  {
    question: "How long does setup take?",
    answer: "Most users can connect an account and schedule their first campaign in a few minutes."
  },
  {
    question: "Does this work with Gmail, Outlook, and Custom domains?",
    answer: "Yes! You can connect as many Gmail (Google Workspace), Outlook (Microsoft 365), or custom SMTP/IMAP accounts as you'd like without paying any extra per-seat fees."
  },
  {
    question: "How does it avoid the spam folder?",
    answer: "Most tools blast hundreds of emails simultaneously via cloud servers, which immediately triggers spam filters. Email Pilots mimics human behavior by sending directly from your browser, pacing emails one by one with randomized delays."
  },
  {
    question: "Is my data secure?",
    answer: "100%. We never store your contact lists or email bodies on our servers. The app processes your data locally on your device, meaning your proprietary outreach lists remain completely private."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your weekly subscription directly from your dashboard at any time. No hidden fees or lock-in contracts."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Questions</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Common questions.</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen ? "border-blue/30 bg-blue/5 shadow-sm" : "border-slate-line bg-white hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-[17px] font-bold text-ink focus:outline-none"
                >
                  {faq.question}
                  <span className={cn(
                    "ml-4 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-wash text-slate-mute transition-transform duration-300",
                    isOpen && "rotate-180 bg-blue text-white"
                  )}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[15.5px] leading-relaxed text-slate-ink">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
