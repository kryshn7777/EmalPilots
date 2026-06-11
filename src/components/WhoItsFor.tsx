import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
import { Briefcase, Users, Zap, Globe, Building, Lightbulb, Target, ChevronLeft, ChevronRight } from 'lucide-react'

const personas = [
  {
    id: "01",
    title: "Job Seekers",
    role: "APPLICANT",
    desc: "Reach 50 hiring managers a week with a personalized intro. Stop refreshing job boards and take control of your search.",
    icon: Briefcase,
    color: "text-blue",
    bg: "bg-blue-50"
  },
  {
    id: "02",
    title: "Recruiters",
    role: "SOURCING",
    desc: "Contact great candidates without paying thousands for LinkedIn Recruiter. Send personalized follow-ups completely automatically.",
    icon: Users,
    color: "text-orange",
    bg: "bg-orange-50"
  },
  {
    id: "03",
    title: "Freelancers",
    role: "CONTRACTOR",
    desc: "Pitch your services to local businesses on autopilot. Keep your calendar booked without hours of copy-paste.",
    icon: Zap,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    id: "04",
    title: "Community",
    role: "BUILDER",
    desc: "Personally invite early users, speakers, or members to your new project without burning out before launch.",
    icon: Globe,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    id: "05",
    title: "Agencies",
    role: "AGENCY",
    desc: "Scale your client outreach without the overhead. Automate personalized emails to book more meetings.",
    icon: Building,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    id: "06",
    title: "Consultants",
    role: "ADVISOR",
    desc: "Grow your consulting practice by reaching decision-makers directly with highly tailored proposals.",
    icon: Lightbulb,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    id: "07",
    title: "Founders",
    role: "FOUNDER",
    desc: "Connect with investors and early adopters directly to gain traction for your startup without the busywork.",
    icon: Globe,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    id: "08",
    title: "Sales Professionals",
    role: "SALES",
    desc: "Close more deals by keeping your pipeline full. Send timely, relevant follow-ups that consistently get replies.",
    icon: Target,
    color: "text-red-600",
    bg: "bg-red-50"
  }
];

function Barcode() {
  return (
    <svg className="w-3/4 h-full mix-blend-multiply" preserveAspectRatio="none" viewBox="0 0 100 100">
       <rect x="0" y="0" width="4" height="100" fill="currentColor" />
       <rect x="8" y="0" width="2" height="100" fill="currentColor" />
       <rect x="14" y="0" width="8" height="100" fill="currentColor" />
       <rect x="26" y="0" width="2" height="100" fill="currentColor" />
       <rect x="32" y="0" width="6" height="100" fill="currentColor" />
       <rect x="42" y="0" width="4" height="100" fill="currentColor" />
       <rect x="50" y="0" width="10" height="100" fill="currentColor" />
       <rect x="64" y="0" width="2" height="100" fill="currentColor" />
       <rect x="70" y="0" width="6" height="100" fill="currentColor" />
       <rect x="80" y="0" width="4" height="100" fill="currentColor" />
       <rect x="88" y="0" width="2" height="100" fill="currentColor" />
       <rect x="94" y="0" width="6" height="100" fill="currentColor" />
    </svg>
  );
}

export function WhoItsFor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useGSAP(() => {
    gsap.from(".ticket-wrapper", {
      y: 400,
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      transformOrigin: "bottom center",
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % personas.length);
    setHasInteracted(true);
  };
  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + personas.length) % personas.length);
    setHasInteracted(true);
  };

  return (
    <section id="who" className="relative py-20 md:py-32 bg-slate-wash overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue mb-4">Now Boarding</span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Who is Email Pilots for?
          </h2>
        </motion.div>

        {/* 3D Carousel Container */}
        <div ref={containerRef} className="relative h-[450px] md:h-[500px] w-full flex items-center justify-center">
          {personas.map((p, index) => {
            let isFront = index === activeIndex;
            let isRight = index === (activeIndex + 1) % personas.length;
            let isLeft = index === (activeIndex - 1 + personas.length) % personas.length;
            
            let x = "0%";
            let scale = 1;
            let opacity = 1;
            let blur = 0;
            let zIndex = 30;
            let rotate = 0;

            if (isRight) {
              x = "105%"; scale = 0.85; opacity = 0.5; blur = 4; zIndex = 20; rotate = 8;
            } else if (isLeft) {
              x = "-105%"; scale = 0.85; opacity = 0.5; blur = 4; zIndex = 20; rotate = -8;
            } else if (!isFront) {
              x = "0%"; scale = 0.7; opacity = 0; blur = 10; zIndex = 10; rotate = 0;
            }

            const handleDragEnd = (e: any, { offset, velocity }: any) => {
              setHasInteracted(true);
              const swipe = offset.x;
              if (swipe < -50) {
                next();
              } else if (swipe > 50) {
                prev();
              }
            };

            return (
              <div key={p.id} className="ticket-wrapper absolute w-[280px] md:w-[320px] h-[400px] md:h-[450px] pointer-events-none flex justify-center items-center">
                <motion.div
                  onClick={() => { setActiveIndex(index); setHasInteracted(true); }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  animate={{
                    x,
                    scale,
                    rotate,
                    opacity,
                    filter: `blur(${blur}px)`,
                    zIndex
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-6 md:p-8 flex flex-col items-center text-center border border-slate-line/50 cursor-pointer hover:shadow-2xl transition-shadow touch-pan-y pointer-events-auto"
                >
                {/* Lanyard Hole */}
                <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-slate-100 border border-slate-200 shadow-inner" />
                
                {/* Profile Pic / Icon */}
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${p.bg} ${p.color} mt-6 md:mt-8 mb-4 md:mb-6 flex items-center justify-center border-4 border-white shadow-sm`}>
                  <p.icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-ink mb-1">{p.title}</h3>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-mute mb-4 md:mb-6">{p.id} / {p.role}</span>
                
                <p className="text-[14px] md:text-[15px] text-slate-ink leading-relaxed">
                  {p.desc}
                </p>
                
                {/* Barcode */}
                <div className="mt-auto w-full h-10 md:h-12 text-slate-300 flex justify-center">
                  <Barcode />
                </div>
              </motion.div>
            </div>
            )
          })}

          {/* Swipe Indicator */}
          {!hasInteracted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/80 backdrop-blur text-white px-5 py-2.5 rounded-full text-[12px] font-bold tracking-widest shadow-xl pointer-events-none z-50"
            >
              <motion.div animate={{ x: [-4, 0, -4] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                <ChevronLeft className="w-4 h-4 opacity-70" />
              </motion.div>
              SWIPE
              <motion.div animate={{ x: [4, 0, 4] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8 md:mt-12 relative z-40">
           <button 
             onClick={prev}
             className="w-12 h-12 rounded-full bg-white border border-slate-line shadow-sm flex items-center justify-center text-slate-ink hover:text-blue hover:border-blue hover:shadow-md transition-all"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           <button 
             onClick={next}
             className="w-12 h-12 rounded-full bg-white border border-slate-line shadow-sm flex items-center justify-center text-slate-ink hover:text-blue hover:border-blue hover:shadow-md transition-all"
           >
             <ChevronRight className="w-6 h-6" />
           </button>
        </div>

      </div>
    </section>
  )
}
