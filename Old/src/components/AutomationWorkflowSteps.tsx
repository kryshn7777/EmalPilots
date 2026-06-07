import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, Mail, Zap, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AutomationWorkflowSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.workflow-card') as HTMLElement[];
    const tray = document.querySelector('.workflow-tray');

    // Initial state
    gsap.set(tray, { y: 200, opacity: 0 });
    
    // Calculate central point for them to fan out FROM
    cards.forEach((card) => {
      gsap.set(card, { y: 400, opacity: 0, scale: 0.8, rotation: 0 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(tray, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "back.out(1.2)",
        // Fan out effect on larger screens
        rotation: (i) => {
          if (window.innerWidth < 1024) return 0; // No rotation on mobile stack
          return i === 0 ? -4 : i === 1 ? 0 : 4;
        },
        yoyo: false
      }, "-=0.3");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-6xl mx-auto px-4 mt-32 mb-32 relative z-10 overflow-hidden py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">The Autopilot Workflow</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From spreadsheet to inbox in 3 seamless steps.</p>
      </div>

      <div className="relative w-full pb-32 pt-6 perspective-[1000px] z-10 flex flex-col items-center">
        {/* Software Tray / Base */}
        <div className="workflow-tray absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full max-w-[850px] h-[300px] bg-card/80 backdrop-blur-2xl border border-border shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.1)] z-20 flex justify-center pt-6 rounded-t-3xl">
           <div className="w-24 h-1.5 bg-muted rounded-full" />
        </div>

        {/* Workflow Cards Container */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-6 xl:gap-10 relative z-10 px-4">
          <AutomationCard 
            step="01"
            title="Import Prospects"
            desc="Upload your CSV or sync your CRM. We run automated bounce-checks to protect your sender reputation."
            statLabel="Bounce Check"
            statValue="100% Pass"
            tag="DATA_SYNC"
            icon={<Users className="w-5 h-5 text-primary" />}
            color="border-primary/30"
            className="workflow-card origin-bottom-right"
          />
          <AutomationCard 
            step="02"
            title="Compose & Merge"
            desc="Write personalized templates. Our heuristic AI scores your copy against known spam filters."
            statLabel="Spam Score"
            statValue="Excellent"
            tag="NLP_ENGINE"
            icon={<Mail className="w-5 h-5 text-primary" />}
            color="border-primary/30"
            className="workflow-card origin-bottom lg:-mt-8" 
          />
          <AutomationCard 
            step="03"
            title="Automated Dispatch"
            desc="Set daily limits and intervals. Emails are dispatched natively, perfectly mimicking human behavior."
            statLabel="Throttle"
            statValue="50 / day"
            tag="AUTOPILOT"
            icon={<Zap className="w-5 h-5 text-secondary" />}
            color="border-secondary/40"
            className="workflow-card origin-bottom-left"
          />
        </div>
      </div>
    </section>
  );
}

function AutomationCard({ step, title, desc, statLabel, statValue, tag, icon, color, className }: any) {
  return (
    <div className={`group relative w-full max-w-[320px] lg:w-[320px] h-[480px] bg-card rounded-2xl border ${color} shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:z-50 hover:-translate-y-6 cursor-default will-change-transform ${className}`}>
      
      {/* SaaS App Header */}
      <div className="bg-muted/30 p-5 border-b border-border flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <div className="bg-background p-2 rounded-lg shadow-sm border border-border/50">
            {icon}
          </div>
          <span className="font-mono font-bold tracking-widest uppercase text-[10px] text-muted-foreground">Node_{step}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-background border border-border shadow-sm flex items-center justify-center font-bold text-[10px] font-mono text-foreground">
          {tag}
        </div>
      </div>

      {/* Body */}
      <div className="p-7 flex-1 flex flex-col justify-between relative z-10 bg-card">
        <div>
          <h3 className="text-xl font-display font-black mb-3 tracking-tight leading-tight">{title}</h3>
          <p className="text-muted-foreground text-[14px] leading-relaxed font-medium">{desc}</p>
        </div>
        
        {/* Software Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8 bg-background p-4 rounded-xl border border-border/50 shadow-inner group-hover:border-primary/20 transition-colors">
           <div>
             <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">
               <ShieldCheck className="w-3 h-3" /> System
             </div>
             <div className="font-bold text-sm flex items-center gap-1.5">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active
             </div>
           </div>
           <div>
             <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">
               <Activity className="w-3 h-3" /> {statLabel}
             </div>
             <div className="font-bold text-sm text-primary">{statValue}</div>
           </div>
        </div>
      </div>

      {/* Log Output Section (Replaces Barcode) */}
      <div className="p-5 bg-[#0a0c10] border-t border-border relative overflow-hidden flex flex-col min-h-[120px]">
        {/* "Processing" laser line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/80 shadow-[0_0_15px_#0055ff,0_0_5px_#0055ff] opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]" />
        
        <div className="flex flex-col gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] text-green-400/90">
           <div className="flex items-center gap-2"><span className="text-muted-foreground">&gt;</span> Init sequence {tag}...</div>
           <div className="flex items-center gap-2"><span className="text-muted-foreground">&gt;</span> <CheckCircle2 className="w-3 h-3 text-green-500" /> Validation OK</div>
           <div className="flex items-center gap-2 mt-1">
             <span className="text-muted-foreground">&gt;</span> 
             <div className="w-20 h-1 bg-green-400/20 rounded overflow-hidden">
                <div className="w-full h-full bg-green-400 animate-[pulse_1s_ease-in-out_infinite]" />
             </div>
           </div>
        </div>
        
        <div className="mt-auto pt-3 flex justify-between items-center text-[9px] font-mono text-muted-foreground/50 font-bold border-t border-white/5">
          <span>{tag.toLowerCase()}.ts</span>
          <span>0x{Math.random().toString(16).substring(2, 8).toUpperCase()}</span>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
