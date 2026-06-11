import { motion } from 'motion/react'

import type { Variants } from "motion/react"; const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function Comparison() {
  return (
    <section className="relative bg-slate-wash py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={itemVariants} className="text-[13px] font-bold uppercase tracking-[.2em] text-blue">The honest comparison</motion.span>
          <motion.h2 variants={itemVariants} className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">The math is almost unfair.</motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-[17px] leading-relaxed text-slate-ink">Most platforms charge a premium to send cold emails. You already pay for an email provider — Email Pilots simply automates your outreach for the price of a weekly coffee.</motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mx-auto mt-12 max-w-3xl space-y-3.5"
        >
          {/* rows */}
          <motion.div variants={itemVariants} className="group flex items-center gap-2 sm:gap-4">
            <div className="w-24 shrink-0 text-right text-[12px] sm:text-[14px] font-semibold text-slate-ink sm:w-44 leading-tight">LinkedIn Recruiter</div>
            <div className="relative h-11 flex-1 overflow-hidden rounded-xl bg-slate-200/70">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: "easeOut", delay: 0.2 }}
                className="h-full rounded-xl bg-slate-300"
              />
              <span className="absolute inset-y-0 right-4 flex items-center font-display text-[15px] font-bold text-slate-ink">€140<span className="text-slate-mute font-medium">/mo</span></span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-4">
            <div className="w-24 shrink-0 text-right text-[12px] sm:text-[14px] font-semibold text-slate-ink sm:w-44 leading-tight">Hiring a VA</div>
            <div className="relative h-11 flex-1 overflow-hidden rounded-xl bg-slate-200/70">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: "easeOut", delay: 0.3 }}
                className="h-full rounded-xl bg-slate-300"
              />
              <span className="absolute inset-y-0 left-4 flex items-center font-display text-[15px] font-bold text-slate-ink">€500+<span className="text-slate-mute font-medium">/mo</span></span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-4">
            <div className="w-24 shrink-0 text-right text-[12px] sm:text-[14px] font-semibold text-slate-ink sm:w-44 leading-tight">Cold email platforms</div>
            <div className="relative h-11 flex-1 overflow-hidden rounded-xl bg-slate-200/70">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "42%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: "easeOut", delay: 0.4 }}
                className="h-full rounded-xl bg-slate-300"
              />
              <span className="absolute inset-y-0 left-4 flex items-center font-display text-[15px] font-bold text-slate-ink">€59<span className="text-slate-mute font-medium">/mo</span></span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-4">
            <div className="w-24 shrink-0 text-right text-[12px] sm:text-[14px] font-semibold text-slate-ink sm:w-44 leading-tight">Doing it by hand</div>
            <div className="relative h-11 flex-1 overflow-hidden rounded-xl bg-slate-200/70">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "55%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-xl bg-slate-300"
              />
              <span className="absolute inset-y-0 left-4 flex items-center font-display text-[15px] font-bold text-slate-ink">~6 hrs<span className="text-slate-mute font-medium"> / 100 emails</span></span>
            </div>
          </motion.div>
          
          {/* winner */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-4 pt-1">
            <div className="w-24 shrink-0 text-right text-[13px] sm:text-[14px] font-extrabold text-blue sm:w-44 leading-tight">Email Pilots</div>
            <div className="relative h-14 flex-1 overflow-hidden rounded-xl bg-blue shadow-glow ring-4 ring-blue/15">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "7%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: "easeOut", delay: 0.6 }}
                className="h-full rounded-xl bg-blue-600/50"
              />
              <span className="absolute inset-y-0 left-4 flex items-center gap-2 font-display text-[17px] font-extrabold text-white">
                €1.99<span className="font-medium text-white/70">/wk</span>
                <span className="hidden rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-bold tracking-wide text-white sm:inline">≈ €0.28 / day</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-xl text-center text-[15px] text-slate-mute"
        >
          Same inbox you already trust. None of the monthly bills. <span className="font-semibold text-ink">Unlimited emails included.</span>
        </motion.p>
      </div>
    </section>
  )
}
