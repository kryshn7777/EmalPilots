import { motion } from 'motion/react'
import { Mail, Shield, BarChart, Users, Layout, Ticket } from 'lucide-react'

const features = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "SSO sign-in",
    description: "One-click Google & Microsoft sign-in (OAuth2)."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Domain authentication",
    description: "Guided SPF, DKIM and DMARC setup."
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Open & click analytics",
    description: "See opens and click-throughs per message."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team workspace",
    description: "Share campaigns and contacts across a team."
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Visual email builder",
    description: "Design emails with drag-and-drop blocks."
  }
]

export function BusinessSuite() {
  return (
    <section id="business" className="relative py-24 md:py-32 bg-slate-wash overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-paper opacity-50" />
      
      <div className="relative mx-auto max-w-5xl px-5 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[.2em] text-orange bg-orange-soft px-4 py-1.5 rounded-full mb-4">
            <Ticket className="w-4 h-4" /> Coming soon
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Built for Business & Teams.</h2>
          <p className="mt-5 mx-auto max-w-2xl text-[17px] leading-relaxed text-slate-ink">
            A longer-haul tier we’re charting now. Planned, not yet available — and we don’t promise dates. Order your pre-tickets and we’ll tell you when it boards.
          </p>
        </motion.div>

        {/* VIP Ticket Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative flex flex-col md:flex-row rounded-3xl bg-white shadow-lift border border-slate-line overflow-hidden">
            
            {/* Left side: Itinerary / Features */}
            <div className="flex-1 p-8 md:p-12">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-line">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-mute mb-1">Class</div>
                  <div className="font-display text-2xl font-bold text-ink">Business Suite</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-mute mb-1">Status</div>
                  <div className="font-display text-xl font-bold text-orange">Boarding Soon</div>
                </div>
              </div>

              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-mute mb-6">Planned Features</div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 text-slate-mute">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-[15px] font-bold text-ink mb-1">{feature.title}</h4>
                      <p className="text-[13px] leading-relaxed text-slate-ink">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Perforation (Desktop only, mobile uses a horizontal divider) */}
            <div className="hidden md:block w-8 relative flex-shrink-0 border-l border-r border-transparent">
               {/* Vertical cutouts to mimic ticket perforation */}
               <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] perforation" />
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-wash rounded-full border-b border-slate-line" />
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-wash rounded-full border-t border-slate-line" />
            </div>
            
            {/* Mobile divider */}
            <div className="md:hidden h-8 relative w-full flex-shrink-0 bg-white">
               <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, var(--color-slate-line) 0 7px, transparent 7px 14px)' }} />
               <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 bg-slate-wash rounded-full border-r border-slate-line" />
               <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 bg-slate-wash rounded-full border-l border-slate-line" />
            </div>

            {/* Right side: Stub / CTA */}
            <div className="w-full md:w-80 bg-slate-50/50 p-8 md:p-10 flex flex-col justify-between relative border-l border-slate-line md:border-l-0">
               <div className="mb-8">
                 <div className="text-[11px] font-bold uppercase tracking-widest text-slate-mute mb-4">Passenger Info</div>
                 <h3 className="font-display text-xl font-bold text-ink mb-2">Reserve your pre-ticket</h3>
                 <p className="text-[14px] text-slate-ink mb-6">Drop your email to get priority boarding when Business & Teams launches.</p>
                 
                 <form 
                    action="mailto:hello@emailpilots.app?subject=Business%20%26%20Teams%20waitlist"
                    method="post" 
                    encType="text/plain"
                    className="flex flex-col gap-3"
                  >
                    <input 
                      type="email" 
                      name="Email"
                      placeholder="Email address" 
                      required
                      className="w-full rounded-lg border border-slate-line bg-white px-4 py-2.5 text-[14px] text-ink placeholder-slate-mute outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all"
                    />
                    <button 
                      type="submit"
                      className="get-notified-btn w-full inline-flex items-center justify-center rounded-lg bg-ink px-4 py-2.5 text-[14px] font-semibold text-white transition-transform hover:bg-navy hover:-translate-y-0.5"
                    >
                      Order Pre-Ticket
                    </button>
                  </form>
               </div>
               
               {/* Barcode at the bottom of the stub */}
               <div className="h-12 w-full barcode opacity-20" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
