import { motion } from 'motion/react'
import { Mail, Shield, BarChart, Users, Layout } from 'lucide-react'

const features = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "SSO sign-in",
    description: "One-click Google & Microsoft sign-in (OAuth2) — no app passwords to generate."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Managed domain authentication",
    description: "Guided SPF, DKIM and DMARC setup, so your domain is verified for you."
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Open & click analytics",
    description: "See opens and click-throughs per message, with privacy-respecting measurement."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team workspace + secure sync",
    description: "Share campaigns and contacts across a team, synced securely across devices."
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Visual email builder",
    description: "Design emails with drag-and-drop blocks — no HTML required."
  }
]

export function BusinessSuite() {
  return (
    <section id="business" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">Coming soon · not yet available</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Built for Business & Teams.</h2>
          <p className="mt-5 mx-auto max-w-2xl text-[17px] leading-relaxed text-slate-ink">
            A longer-haul tier we’re charting now. Planned, not yet available — and we don’t promise dates. Leave your address and we’ll tell you when it boards.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-slate-line bg-white p-6 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue">
                {feature.icon}
              </div>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-widest text-slate-mute">Planned</div>
              <h3 className="mb-2 font-display text-[17px] font-bold text-ink">{feature.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-slate-ink/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="mailto:hello@emailpilots.app?subject=Business%20%26%20Teams%20waitlist"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-[15px] font-semibold text-white transition-transform hover:scale-105"
          >
            Get notified when Business & Teams launches
          </a>
        </motion.div>
      </div>
    </section>
  )
}
