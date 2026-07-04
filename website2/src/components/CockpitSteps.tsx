import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, FileText, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CockpitSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    // Animate dials
    const dials = gsap.utils.toArray('.gauge-fill') as HTMLElement[];
    const needles = gsap.utils.toArray('.gauge-needle') as HTMLElement[];
    const panels = gsap.utils.toArray('.cockpit-panel') as HTMLElement[];

    tl.fromTo(panels, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }
    )
    .fromTo(dials, 
      { strokeDashoffset: 283 }, // Full circumference hidden
      { strokeDashoffset: 70.75, duration: 1.5, stagger: 0.2, ease: "power3.inOut" }, // 70.75 leaves a 90deg gap at the bottom
      "-=0.6"
    )
    .fromTo(needles,
      { rotation: -135 }, // Start at bottom left
      { rotation: 135, duration: 1.5, stagger: 0.2, ease: "power3.inOut" }, // Sweep to bottom right
      "-=1.9"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-6xl mx-auto px-4 mt-32 mb-32 relative z-10 py-12">
      {/* Cockpit Dashboard Background */}
      <div className="bg-[#111318] rounded-[2rem] md:rounded-[3rem] border-t-[8px] border-b-[16px] border-x-[4px] border-[#222630] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),inset_0_10px_20px_rgba(255,255,255,0.05)] p-8 md:p-16 relative overflow-hidden">
        
        {/* Dashboard texture */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='1' fill='%23ffffff' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="text-center mb-20 relative z-10">
          <div className="inline-block px-5 py-1.5 rounded border border-white/10 bg-black/50 text-white/50 text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-6 shadow-inner">
             Main Engine Control Panel
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            3 Simple Steps to Send
          </h2>
          <p className="text-sm text-primary/80 max-w-2xl mx-auto font-mono uppercase tracking-[0.2em] opacity-80">
            System diagnostics: Optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          <CockpitPanel 
            step="01"
            title="Target Coordinates"
            desc="Select audience and import your CSV list."
            icon={<Users className="w-6 h-6 text-white" />}
            color="primary"
          />
          <CockpitPanel 
            step="02"
            title="Arm Mechanism"
            desc="Draft pitch and bypass spam heuristics."
            icon={<FileText className="w-6 h-6 text-white" />}
            color="primary"
          />
          <CockpitPanel 
            step="03"
            title="Engage Thrusters"
            desc="Launch automated sending sequence."
            icon={<Send className="w-6 h-6 text-white" />}
            color="secondary"
          />
        </div>
      </div>
    </section>
  );
}

function CockpitPanel({ step, title, desc, icon, color }: any) {
  const isSecondary = color === "secondary";
  const glowColor = isSecondary ? "#ff6600" : "#0055ff";
  const textClass = isSecondary ? "text-secondary" : "text-primary";

  return (
    <div className="cockpit-panel flex flex-col items-center group relative">
      {/* Analog Gauge */}
      <div className="relative w-[180px] h-[180px] mb-8 bg-[#0a0c10] rounded-full shadow-[inset_0_15px_30px_rgba(0,0,0,0.9),0_2px_0_rgba(255,255,255,0.1)] border-[6px] border-[#2a2e38] flex items-center justify-center">
        
        {/* Inner shadow/depth ring */}
        <div className="absolute inset-2 rounded-full border border-white/5 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        
        <svg className="w-full h-full absolute inset-0 pointer-events-none drop-shadow-[0_0_8px_var(--glow)]" style={{ "--glow": glowColor } as any} viewBox="0 0 100 100">
          {/* Background Track */}
          <circle 
            cx="50" cy="50" r="40" 
            fill="none" 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="5" 
            strokeLinecap="round"
            strokeDasharray="251.2" // 2 * PI * 40
            strokeDashoffset="62.8" // 251.2 * 0.25 (90 degree gap)
            className="transform origin-center rotate-[135deg]"
          />
          {/* Fill Track */}
          <circle 
            cx="50" cy="50" r="40" 
            fill="none" 
            stroke={glowColor} 
            strokeWidth="5" 
            strokeLinecap="round"
            strokeDasharray="251.2" 
            strokeDashoffset="251.2" 
            className="gauge-fill transform origin-center rotate-[135deg]"
          />
        </svg>

        {/* Needle Container - needed for proper transform origin in GSAP */}
        <div className="gauge-needle absolute inset-0 flex justify-center items-center pointer-events-none">
          {/* The Needle */}
          <div className="absolute bottom-[50%] w-1.5 h-[50px] rounded-t-full shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ backgroundColor: glowColor }}>
            {/* Needle tail */}
            <div className="absolute top-full left-0 w-full h-3 bg-[#3a3f4c] rounded-b-full" />
          </div>
        </div>

        {/* Center Pin */}
        <div className="absolute z-20 w-5 h-5 rounded-full bg-[#2a2e38] border-2 border-[#111318] shadow-lg flex items-center justify-center">
           <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
        </div>

        {/* Digital Readout */}
        <div className="absolute bottom-8 bg-[#050608] border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-white/80 shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] tracking-widest">
          SYS-{step}
        </div>
      </div>

      {/* Switch Panel */}
      <div className="w-full bg-[#1a1c23] border-t border-[#3a3f4c] border-b-[6px] border-black rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col items-center relative overflow-hidden group-hover:border-t-white/30 transition-colors duration-300">
        
        {/* Screw heads */}
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-black border border-white/10 flex items-center justify-center"><div className="w-full h-[1px] bg-white/20 rotate-45"/></div>
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-black border border-white/10 flex items-center justify-center"><div className="w-full h-[1px] bg-white/20 -rotate-45"/></div>
        <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-black border border-white/10 flex items-center justify-center"><div className="w-full h-[1px] bg-white/20 -rotate-12"/></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-black border border-white/10 flex items-center justify-center"><div className="w-full h-[1px] bg-white/20 rotate-12"/></div>

        {/* Illuminated Switch Component */}
        <div className={`w-16 h-16 rounded-xl bg-[#0a0c10] mb-5 flex items-center justify-center border-b-2 border-white/10 shadow-[inset_0_5px_10px_rgba(0,0,0,0.8)] relative group-hover:shadow-[0_0_25px_var(--glow),inset_0_2px_5px_rgba(255,255,255,0.1)] transition-all duration-500`} style={{ "--glow": glowColor } as any}>
          {/* Active indicator light */}
          <div className={`absolute top-2 w-10 h-1.5 rounded-full bg-[#2a2e38] shadow-inner overflow-hidden`}>
             <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_var(--glow)]" style={{ backgroundColor: glowColor, "--glow": glowColor } as any} />
          </div>
          <div className="mt-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:-translate-y-0.5">
            {icon}
          </div>
        </div>

        <h3 className={`text-xl font-display font-bold mb-2 uppercase tracking-wider text-center group-hover:${textClass} transition-colors text-white/80 drop-shadow-md`}>
          {title}
        </h3>
        <p className="text-white/40 text-xs text-center leading-relaxed font-mono tracking-wide px-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
