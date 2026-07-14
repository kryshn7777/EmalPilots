import { motion } from 'motion/react'
import { Briefcase, Users, Zap, Globe, Building, Lightbulb, Rocket, Target } from 'lucide-react'

const personas = [
  {
    id: "01",
    title: "Job Seekers",
    role: "APPLICANT",
    desc: "Hit 50 hiring managers a week with a personal intro. Stop refreshing job boards and run your own search.",
    icon: Briefcase,
    color: "text-blue",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    id: "02",
    title: "Recruiters",
    role: "SOURCING",
    desc: "Reach top candidates without dropping thousands on LinkedIn Recruiter. Personalized follow-ups fire on their own.",
    icon: Users,
    color: "text-orange",
    bg: "bg-orange-50",
    border: "border-orange-100"
  },
  {
    id: "03",
    title: "Freelancers",
    role: "CONTRACTOR",
    desc: "Pitch local businesses on autopilot. Keep your calendar packed without the copy-paste grind.",
    icon: Zap,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100"
  },
  {
    id: "04",
    title: "Community",
    role: "BUILDER",
    desc: "Personally invite early users, speakers, and members to your project without burning out before launch day.",
    icon: Globe,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100"
  },
  {
    id: "05",
    title: "Agencies",
    role: "AGENCY",
    desc: "Scale client outreach without the overhead. Automated personal emails book you more meetings.",
    icon: Building,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100"
  },
  {
    id: "06",
    title: "Consultants",
    role: "ADVISOR",
    desc: "Grow your practice by landing in front of decision-makers with sharp, tailored proposals.",
    icon: Lightbulb,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100"
  },
  {
    id: "07",
    title: "Founders",
    role: "FOUNDER",
    desc: "Reach investors and early adopters directly and build real traction, minus the busywork.",
    icon: Rocket,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100"
  },
  {
    id: "08",
    title: "Sales Professionals",
    role: "SALES",
    desc: "Keep your pipeline full and close more deals. Timely, relevant follow-ups that actually get replies.",
    icon: Target,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100"
  }
];

export function WhoItsFor() {
  return (
    <section id="who" className="relative py-20 md:py-32 bg-slate-wash overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue mb-4">Now Boarding</span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Who is Email Pilots for?
          </h2>
        </motion.div>

        {/* 4x2 Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {personas.map((p, index) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group relative flex flex-col bg-white rounded-2xl border border-slate-line p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${p.bg} ${p.color} border ${p.border} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-ink leading-tight mb-0.5">{p.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-mute">{p.id} / {p.role}</span>
                </div>
              </div>
              <p className="text-[14px] text-slate-ink leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
