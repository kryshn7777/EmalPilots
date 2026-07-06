import { motion } from 'motion/react'

const FAQ_DATA = [
  {
    q: "Will my computer need to stay on?",
    a: "Yes. Email Pilots is an application that runs locally. Scheduled emails are sent directly from your device."
  },
  {
    q: "How long does setup take?",
    a: "Most users can connect an account and schedule their first campaign in a few minutes."
  },
  {
    q: "Does this work with Gmail, Outlook, and Custom domains?",
    a: "Yes! You can connect as many Gmail (Google Workspace), Outlook (Microsoft 365), or custom SMTP/IMAP accounts as you'd like without paying any extra fees per user."
  },
  {
    q: "How does it avoid the spam folder?",
    a: "Other tools send all emails at the exact same time from huge cloud servers, which makes email providers think it's junk. Email Pilots sends them one by one right from your computer, like a real person would, with natural pauses in between."
  },
  {
    q: "Is my data secure?",
    a: "100%. We never store your contact lists or emails on our servers. The app runs locally on your computer, meaning your data stays completely private."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. You can cancel your weekly subscription directly from your dashboard at any time. No hidden fees or contracts that lock you in."
  },
  { q: 'Is this a bulk or spam tool?', a: 'No. Email Pilots is for personal, permission-based email you have a genuine reason to send — to your own contacts, from your own mailbox. It defaults to a personal 1:1 style, supports one-click unsubscribe, and keeps a do-not-contact list. It is not built for buying lists or blasting strangers.' },
  { q: 'Will it keep my mailbox in good standing?', a: 'That’s the whole point of the sending limits, gradual ramp-up, and natural pacing: to send the way a careful person would, stay within healthy volumes, and keep your messages welcome.' },
  { q: 'Where does my data live?', a: 'Entirely on your computer. There is no cloud backend — your contact list and credentials never leave your machine, and passwords are encrypted with your operating system’s keychain.' },
  { q: 'Which email providers work?', a: 'Anything that uses standard email protocols — Gmail, Outlook / Microsoft 365, and custom domains. Reply tracking uses a standard read-only inbox check.' },
  { q: 'How does billing work?', a: '$2.9/week, everything included, cancel anytime. It starts with a 7-day trial.' },
]

export function FAQ() {
  return (
    <section id="faq" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Questions</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Before you taxi out.</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 space-y-3"
        >
          {FAQ_DATA.map((item, index) => (
            <details key={index} className="group rounded-2xl border border-slate-line bg-white px-6 py-5 transition-colors open:bg-slate-50/50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-bold text-ink focus:outline-none">
                {item.q}
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-blue transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="mt-4 text-[15.5px] leading-relaxed text-slate-ink">{item.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
