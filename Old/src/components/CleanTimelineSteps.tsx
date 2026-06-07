import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, FileText, Send, Plane } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CleanTimelineSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animate the line drawing down based on scroll
    gsap.fromTo(lineRef.current, 
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // Animate the plane traveling down the line
    gsap.fromTo(planeRef.current,
      { top: "0%" },
      {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // Fade in and gently scale steps as the user scrolls to them
    stepsRef.current.forEach((step, index) => {
      // Determine if it comes from the left or right (on desktop)
      const xOffset = window.innerWidth > 768 ? (index % 2 === 0 ? -50 : 50) : 0;
      
      gsap.fromTo(step,
        { opacity: 0, x: xOffset, y: 30, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 65%", // Trigger slightly before the step reaches the center
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-5xl mx-auto px-4 mt-32 mb-48 relative z-10">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">3 Simple Steps to Send</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A clean, straightforward process to automate your outreach.</p>
      </div>

      <div className="relative w-full flex flex-col gap-16 md:gap-24 py-10 z-10">
        {/* The Track (Background Line) */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full" />
        
        {/* The Filled Line */}
        <div ref={lineRef} className="absolute left-[30px] md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 origin-top shadow-[0_0_10px_rgba(0,85,255,0.5)] rounded-full" />

        {/* The Traveling Plane */}
        <div ref={planeRef} className="absolute left-[30px] md:left-1/2 -translate-x-1/2 -mt-6 z-20">
          <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,85,255,0.4)] relative">
             <Plane className="w-5 h-5 text-primary transform rotate-[135deg]" />
          </div>
        </div>

        {/* Step 1 */}
        <div ref={el => stepsRef.current[0] = el} className="relative z-10 flex flex-col md:flex-row items-center w-full group">
           <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-16 pl-20 md:pl-0">
             <div className="bg-card/60 backdrop-blur-xl border border-border/60 p-8 rounded-3xl shadow-xl w-full max-w-md group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_-15px_rgba(0,85,255,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 border border-primary/20">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">1. Import Prospects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload your CSV or add contacts manually. We automatically run heuristic bounce-checks to keep your domain reputation pristine.
                </p>
             </div>
           </div>
           <div className="hidden md:block md:w-1/2" />
        </div>

        {/* Step 2 */}
        <div ref={el => stepsRef.current[1] = el} className="relative z-10 flex flex-col md:flex-row items-center w-full group">
           <div className="hidden md:block md:w-1/2" />
           <div className="w-full md:w-1/2 flex justify-start pl-20 md:pl-16">
             <div className="bg-card/60 backdrop-blur-xl border border-border/60 p-8 rounded-3xl shadow-xl w-full max-w-md group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_-15px_rgba(0,85,255,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 border border-primary/20">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">2. Compose & Personalize</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Draft your pitch using dynamic variables. Our built-in spam checker ensures your copy stays out of the promotions tab.
                </p>
             </div>
           </div>
        </div>

        {/* Step 3 */}
        <div ref={el => stepsRef.current[2] = el} className="relative z-10 flex flex-col md:flex-row items-center w-full group">
           <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-16 pl-20 md:pl-0">
             <div className="bg-card/60 backdrop-blur-xl border border-border/60 p-8 rounded-3xl shadow-xl w-full max-w-md group-hover:border-secondary/40 group-hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 border border-secondary/20">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">3. Automated Dispatch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set it and forget it. Emails are dispatched one by one at natural intervals, perfectly mimicking human behavior.
                </p>
             </div>
           </div>
           <div className="hidden md:block md:w-1/2" />
        </div>

      </div>
    </section>
  );
}
