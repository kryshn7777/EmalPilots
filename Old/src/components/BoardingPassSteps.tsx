import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, FileText, PlaneTakeoff } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BoardingPassSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const passes = gsap.utils.toArray('.boarding-pass') as HTMLElement[];
    const sleeve = document.querySelector('.ticket-sleeve');

    // Initial state
    gsap.set(sleeve, { y: 200, opacity: 0 });
    
    // Calculate central point for them to fan out FROM
    // We animate from the center bottom
    passes.forEach((pass, i) => {
      // Calculate offset based on its natural position vs center
      // Since flex handles layout, we just give it a y translation for now to simulate coming out of the sleeve
      gsap.set(pass, { y: 400, opacity: 0, scale: 0.8, rotation: 0 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(sleeve, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to(passes, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.2)",
        // Fan out effect using rotations on larger screens
        rotation: (i) => {
          if (window.innerWidth < 1024) return 0; // No rotation on mobile stack
          return i === 0 ? -6 : i === 1 ? 0 : 6;
        },
        yoyo: false
      }, "-=0.3");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-6xl mx-auto px-4 mt-32 mb-32 relative z-10 overflow-hidden py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">3 Simple Steps to Send</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your boarding pass to better deliverability.</p>
      </div>

      <div className="relative w-full pb-32 pt-10 perspective-[1000px] z-10 flex flex-col items-center">
        {/* Ticket Sleeve */}
        <div className="ticket-sleeve absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[350px] bg-card/90 backdrop-blur-md border border-border/80 rounded-t-[3rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.15)] z-20 flex justify-center pt-8">
           <div className="w-48 h-3 bg-muted/60 rounded-full" />
        </div>

        {/* Boarding Passes Container */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 xl:gap-8 relative z-10 px-4">
          <BoardingPass 
            step="1"
            title="Passenger Manifest"
            desc="Select Recipients, import your contacts, and let us instantly remove hard-bounces."
            gate="A1"
            seat="1A"
            icon={<Users className="w-6 h-6 text-primary" />}
            color="border-primary/40"
            className="boarding-pass origin-bottom-right"
          />
          <BoardingPass 
            step="2"
            title="Baggage Drop"
            desc="Attach files, draft your personalized pitch, and clear the heuristic spam check."
            gate="A2"
            seat="2B"
            icon={<FileText className="w-6 h-6 text-primary" />}
            color="border-primary/40"
            className="boarding-pass origin-bottom lg:-mt-12" // Slight offset for the middle one
          />
          <BoardingPass 
            step="3"
            title="Wheels Up"
            desc="Schedule your campaign. Emails are sent one by one at natural intervals."
            gate="A3"
            seat="3C"
            icon={<PlaneTakeoff className="w-6 h-6 text-secondary" />}
            color="border-secondary/60"
            className="boarding-pass origin-bottom-left"
          />
        </div>
      </div>
    </section>
  );
}

function BoardingPass({ step, title, desc, gate, seat, icon, color, className }: any) {
  return (
    <div className={`group relative w-full max-w-[320px] lg:w-[320px] h-[480px] bg-card rounded-3xl border ${color} shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:z-50 hover:-translate-y-8 cursor-default will-change-transform ${className}`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

      {/* Header */}
      <div className="bg-primary/5 p-6 border-b-2 border-dashed border-border flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <div className="bg-background p-2 rounded-xl shadow-sm border border-border/50">
            {icon}
          </div>
          <span className="font-display font-bold tracking-widest uppercase text-sm text-muted-foreground">Step {step}</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center font-bold text-lg text-foreground">
          {gate}
        </div>
        
        {/* Semi-circle cutouts for perforated look */}
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-background rounded-full border-t-2 border-r-2 border-border transform rotate-45 shadow-[inset_-2px_2px_4px_rgba(0,0,0,0.02)]" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-background rounded-full border-t-2 border-l-2 border-border transform -rotate-45 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.02)]" />
      </div>

      {/* Body */}
      <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <h3 className="text-2xl font-display font-black mb-4 tracking-tight leading-none">{title}</h3>
          <p className="text-muted-foreground text-[15px] leading-relaxed font-medium">{desc}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-8 bg-muted/30 p-4 rounded-xl border border-border/50">
           <div>
             <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Class</div>
             <div className="font-bold text-base">First</div>
           </div>
           <div>
             <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Seat</div>
             <div className="font-bold text-base text-primary">{seat}</div>
           </div>
        </div>
      </div>

      {/* Barcode Section */}
      <div className="p-6 bg-muted/10 border-t-2 border-dashed border-border relative overflow-hidden flex flex-col items-center justify-center min-h-[120px]">
        {/* Laser Scanner Animation */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary/80 shadow-[0_0_15px_#ff6600,0_0_5px_#ff6600] opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:animate-[scan_2.5s_ease-in-out_infinite]" />
        
        <div className="w-full h-12 flex justify-center gap-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
           {/* Mock Barcode generated with vertical lines */}
           {[...Array(50)].map((_, i) => (
             <div 
               key={i} 
               className="h-full bg-foreground rounded-full" 
               style={{ 
                 width: `${Math.random() * 4 + 1}px`,
                 opacity: Math.random() > 0.25 ? 1 : 0 
               }} 
             />
           ))}
        </div>
        <div className="mt-3 text-center text-[10px] font-mono tracking-[0.2em] text-muted-foreground/80 font-bold">
          EP-{Math.random().toString(36).substring(2, 10).toUpperCase()}
        </div>
        
        {/* Semi-circle cutouts */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-background rounded-full border-b-2 border-r-2 border-border transform -rotate-45 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.02)]" />
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-background rounded-full border-b-2 border-l-2 border-border transform rotate-45 shadow-[inset_2px_-2px_4px_rgba(0,0,0,0.02)]" />
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
