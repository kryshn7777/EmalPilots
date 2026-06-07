import { motion } from 'motion/react'

export function WhoItsFor() {
  return (
    <section id="who" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-end justify-between border-b border-slate-line pb-5"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Built for people who send for themselves.</h2>
          <span className="hidden text-[13px] font-semibold uppercase tracking-[.2em] text-slate-mute sm:block">04 personas</span>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-slate-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-lift"
          >
            <div className="absolute -right-4 -top-6 font-display text-[7rem] font-extrabold leading-none text-slate-wash transition-colors duration-500 group-hover:text-blue-soft select-none">01</div>
            <div className="relative">
              <h3 className="font-display text-2xl font-extrabold text-ink">Job seekers</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-slate-ink">Reach 50 hiring managers a week with a personalized intro. Stop refreshing job boards and take control of your search.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-lift"
          >
            <div className="absolute -right-4 -top-6 font-display text-[7rem] font-extrabold leading-none text-slate-wash transition-colors duration-500 group-hover:text-orange-soft select-none">02</div>
            <div className="relative">
              <h3 className="font-display text-2xl font-extrabold text-ink">Recruiters</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-slate-ink">Contact great candidates without paying thousands for LinkedIn Recruiter. Send personalized follow-ups completely automatically.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-lift"
          >
            <div className="absolute -right-4 -top-6 font-display text-[7rem] font-extrabold leading-none text-slate-wash transition-colors duration-500 group-hover:text-blue-soft select-none">03</div>
            <div className="relative">
              <h3 className="font-display text-2xl font-extrabold text-ink">Freelancers</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-slate-ink">Pitch your services to local businesses on autopilot. Keep your calendar booked without hours of copy-paste.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-lift"
          >
            <div className="absolute -right-4 -top-6 font-display text-[7rem] font-extrabold leading-none text-slate-wash transition-colors duration-500 group-hover:text-orange-soft select-none">04</div>
            <div className="relative">
              <h3 className="font-display text-2xl font-extrabold text-ink">Community builders</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-slate-ink">Personally invite early users, speakers, or members to your new project without burning out before launch.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
