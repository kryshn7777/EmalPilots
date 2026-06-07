import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Crosshair, Database, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RadarHUDSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Rotating radar sweep
    gsap.to(sweepRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    const blips = gsap.utils.toArray('.radar-blip') as HTMLElement[];
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(blips, 
      { scale: 0.8, opacity: 0, y: 50 },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        duration: 0.6, 
        stagger: 0.2,
        ease: "back.out(1.5)",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-6xl mx-auto px-4 mt-32 mb-32 relative z-10 py-12">
      {/* HUD Background wrapper to make it dark */}
      <div className="bg-[#030712] rounded-[3rem] border border-primary/20 shadow-[0_0_80px_-20px_rgba(0,85,255,0.4)] p-8 md:p-16 relative overflow-hidden">
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%230055ff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

        {/* Central Radar Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/20 pointer-events-none shadow-[0_0_50px_inset_rgba(0,85,255,0.1)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_#0055ff] pointer-events-none" />
        
        {/* Radar Crosshairs */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-primary/20 pointer-events-none" />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-primary/20 pointer-events-none" />

        {/* Radar Sweep */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none overflow-hidden rounded-full z-0">
          <div ref={sweepRef} className="w-full h-full" style={{
            background: 'conic-gradient(from 0deg, transparent 75%, rgba(0, 85, 255, 0.2) 95%, rgba(0, 85, 255, 0.8) 100%)',
            borderRadius: '50%'
          }} />
        </div>

        <div className="text-center mb-24 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,85,255,0.3)]">
            Flight Plan System
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">3 Simple Steps to Send</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-mono uppercase tracking-widest text-sm">Initiating deployment sequence...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          <RadarStep 
            step="01"
            title="Plot the Course"
            desc="Import contacts and clean your list automatically to protect domain reputation."
            delay={300}
            icon={<Database className="w-5 h-5" />}
            coord="34° 03' N, 118° 14' W"
          />
          <RadarStep 
            step="02"
            title="Load Payload"
            desc="Draft personalized messages and bypass spam filters with heuristic checks."
            delay={600}
            icon={<Crosshair className="w-5 h-5" />}
            coord="40° 42' N, 74° 00' W"
          />
          <RadarStep 
            step="03"
            title="Clear for Takeoff"
            desc="Schedule campaigns with natural pacing intervals mimicking human behavior."
            delay={900}
            icon={<Zap className="w-5 h-5 text-secondary" />}
            coord="51° 30' N, 0° 07' W"
            highlight
          />
        </div>
      </div>
    </section>
  );
}

function RadarStep({ step, title, desc, delay, icon, coord, highlight = false }: any) {
  const [text, setText] = useState("");
  const targetText = title;
  const [hasTriggered, setHasTriggered] = useState(false);

  // Custom scramble effect triggered on scroll
  useEffect(() => {
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let interval: any = null;
    let timeout: any = null;

    const startScramble = () => {
      interval = setInterval(() => {
        setText((prev) => targetText.split("")
          .map((letter: string, index: number) => {
            if(index < iteration || letter === " ") {
              return targetText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
        );
        
        if(iteration >= targetText.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 2; 
      }, 30);
    };

    // We start the scramble slightly after the GSAP animation would bring it into view
    // A more robust way is using ScrollTrigger directly here, but for simplicity we rely on delay
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasTriggered) {
        setHasTriggered(true);
        timeout = setTimeout(startScramble, delay);
      }
    }, { threshold: 0.1 });

    const el = document.getElementById(`radar-step-${step}`);
    if (el) observer.observe(el);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (el) observer.unobserve(el);
    };
  }, [targetText, delay, hasTriggered, step]);

  const primaryColor = highlight ? "text-secondary" : "text-primary";
  const primaryBg = highlight ? "bg-secondary/10" : "bg-primary/10";
  const primaryBorder = highlight ? "border-secondary/30" : "border-primary/30";
  const shadowGlow = highlight ? "shadow-[0_0_30px_rgba(255,102,0,0.15)] hover:shadow-[0_0_40px_rgba(255,102,0,0.3)]" : "shadow-[0_0_30px_rgba(0,85,255,0.1)] hover:shadow-[0_0_40px_rgba(0,85,255,0.2)]";

  return (
    <div id={`radar-step-${step}`} className={`radar-blip relative bg-[#030712]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col group transition-all duration-500 ${shadowGlow} overflow-hidden`}>
      {/* Background glow on hover */}
      <div className={`absolute inset-0 ${primaryBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* HUD Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-xl pointer-events-none" />

      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`w-12 h-12 rounded-lg ${primaryBg} border ${primaryBorder} flex items-center justify-center ${primaryColor} relative overflow-hidden shadow-inner`}>
           <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
           {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono mb-1">Coordinates</span>
          <span className="text-xs font-mono text-white/70 tracking-widest">{coord}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3 relative z-10">
        <span className={`text-[10px] font-mono font-bold ${primaryColor} bg-white/5 border border-white/10 px-2 py-1 rounded shadow-inner`}>
          SEQ {step}
        </span>
        <h3 className="text-xl font-display font-bold text-white tracking-wide h-7 truncate">
          {text || title.split("").map(() => "_").join("")}
        </h3>
      </div>
      
      <p className="text-white/60 text-sm leading-relaxed mt-2 font-medium relative z-10 h-[60px]">
        {desc}
      </p>

      {/* Target Lock Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-primary/20 rounded-full scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] pointer-events-none transition-all duration-700 ease-out" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-2 border-dashed border-primary/30 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite_reverse] pointer-events-none transition-all duration-500 delay-100 ease-out" />
      
      {/* Target Crosshairs on hover */}
      <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
