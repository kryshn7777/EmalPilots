import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Lock, ShieldCheck, Wand2, Clock, Mail, Server, Globe2, AlertTriangle, CheckCircle2, Send, XCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const capabilities = [
  {
    id: 0,
    title: "100% Local Privacy",
    description: "Your contacts stay on your machine, not in the cloud. We never store or sell your lead lists. Keep your proprietary data completely private and secure.",
    icon: Lock,
  },
  {
    id: 1,
    title: "Pre-Flight Spam Protection",
    description: "Before you hit send, our built-in editor warns you about spam-trigger words, ALL CAPS, and broken links. Combined with our automatic sending delays, you stay out of the spam folder.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Deep Personalization",
    description: "Use simple tags like {{Name}} to adapt every message on the fly. You can even automatically attach a unique PDF or pitch deck to each individual person.",
    icon: Wand2,
  },
  {
    id: 3,
    title: "Smart, Human Scheduling",
    description: "Plan your campaigns to hit the inbox when your prospect is actually awake. We add randomized, human-like delays between emails so it looks like you are typing them yourself.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Auto-Clean Bounces",
    description: "Stop wasting time doing manual cleanup. The app automatically pre-checks domains so you don't send to dead emails, and instantly stops sending to anyone who bounces.",
    icon: Mail,
  }
];

// --- Mockups for the Cards ---

function MockupPrivacy() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-8">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <Globe2 className="w-64 h-64 text-foreground animate-[spin_60s_linear_infinite]" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground shadow-inner">
               <Globe2 className="w-8 h-8" />
            </div>
            <span className="text-xs text-muted-foreground font-mono">The Cloud</span>
          </div>
          
          <div className="w-16 md:w-24 h-[2px] bg-border relative">
             <div className="absolute inset-0 bg-red-500/50 w-full animate-pulse" />
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-red-500/30 text-red-500 rounded-full p-1">
               <XCircle className="w-4 h-4" />
             </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_30px_-5px_rgba(var(--primary),0.3)] relative group">
               <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-ping opacity-20" />
               <Server className="w-10 h-10" />
               <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 border border-border shadow-lg">
                  <Lock className="w-4 h-4 text-green-500" />
               </div>
            </div>
            <span className="text-xs text-primary font-mono font-bold mt-1">Your Machine</span>
          </div>
        </div>
        
        <div className="bg-background/95 border border-border rounded-xl p-4 shadow-xl text-center max-w-[280px]">
          <div className="text-xs text-muted-foreground mb-2 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Data is securely locked locally
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
             <div className="h-full w-full bg-green-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupSpam() {
  const [isFixed, setIsFixed] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFixed(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-sm bg-background border border-border rounded-xl shadow-2xl overflow-hidden relative transition-colors duration-500">
        <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
           <div className="text-xs font-mono text-muted-foreground">composer.html</div>
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
           </div>
        </div>
        <div className="p-5 pb-20 font-mono text-sm leading-relaxed text-foreground/80">
           <p className="mb-4">Hey John,</p>
           <p>
             We can help you{' '}
             <AnimatePresence mode="wait">
               {!isFixed ? (
                 <motion.span key="bad1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="inline-block bg-red-500/20 text-red-500 border border-red-500/30 px-1 rounded relative group cursor-help">
                   10x YOUR REVENUE
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Warning: ALL CAPS</span>
                 </motion.span>
               ) : (
                 <motion.span key="good1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="inline-block bg-green-500/10 text-green-600 border border-green-500/20 px-1 rounded font-bold">
                   grow your business
                 </motion.span>
               )}
             </AnimatePresence>
             {' '}in just weeks!
           </p>
           <p className="mt-4">
             Click{' '}
             <AnimatePresence mode="wait">
               {!isFixed ? (
                 <motion.span key="bad2" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="inline-block bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 px-1 rounded relative group cursor-help">
                   here
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Vague link text</span>
                 </motion.span>
               ) : (
                 <motion.span key="good2" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="inline-block bg-green-500/10 text-green-600 border border-green-500/20 px-1 rounded font-bold">
                   this personalized link
                 </motion.span>
               )}
             </AnimatePresence>
             {' '}to claim your{' '}
             <AnimatePresence mode="wait">
               {!isFixed ? (
                 <motion.span key="bad3" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="inline-block bg-red-500/20 text-red-500 border border-red-500/30 px-1 rounded relative group cursor-help">
                   FREE
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Spam trigger word</span>
                 </motion.span>
               ) : (
                 <motion.span key="good3" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="inline-block bg-green-500/10 text-green-600 border border-green-500/20 px-1 rounded font-bold">
                   complimentary
                 </motion.span>
               )}
             </AnimatePresence>
             {' '}trial.
           </p>
        </div>
        <div className="absolute bottom-4 right-4 bg-background border border-border shadow-lg rounded-lg p-3 flex flex-col gap-2">
           <div className="flex justify-between items-center text-xs font-bold gap-4">
             <span>Spam Score</span>
             <AnimatePresence mode="wait">
               {!isFixed ? (
                 <motion.span key="scoreBad" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-red-500 bg-red-500/10 px-2 py-0.5 rounded flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> High Risk</motion.span>
               ) : (
                 <motion.span key="scoreGood" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-green-600 bg-green-500/10 px-2 py-0.5 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Safe</motion.span>
               )}
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
}

function MockupPersonalization() {
  const [idx, setIdx] = useState(0);
  const people = [
    { name: "{{Name}}", co: "{{Co}}", file: "PitchDeck_Template.pdf" },
    { name: "Sarah", co: "Acme", file: "PitchDeck_Acme.pdf" },
    { name: "Mike", co: "TechFlow", file: "PitchDeck_TechFlow.pdf" },
    { name: "Elena", co: "Globex", file: "PitchDeck_Globex.pdf" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % people.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = people[idx];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="text-2xl md:text-4xl font-display font-medium tracking-tight flex items-center gap-2">
        Hey 
        <div className="relative inline-block overflow-hidden h-[1.2em] w-[3em] md:w-[4em] bg-primary/10 border border-primary/20 rounded-lg text-primary px-2 pb-1 text-center align-bottom">
           <AnimatePresence mode="wait">
             <motion.span 
               key={current.name}
               initial={{ y: "50%", opacity: 0 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ y: "-50%", opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-0 flex items-center justify-center font-bold"
               style={{ fontFamily: idx === 0 ? "monospace" : "inherit" }}
             >
               {current.name}
             </motion.span>
           </AnimatePresence>
        </div>
        ,
      </div>
      <div className="mt-8 text-base md:text-xl text-muted-foreground flex items-center gap-2 flex-wrap justify-center">
        I noticed you work at 
        <div className="relative inline-block overflow-hidden h-[1.2em] w-[4em] md:w-[5em] bg-primary/10 border border-primary/20 rounded-lg text-primary px-2 pb-1 text-center align-bottom mt-1 md:mt-0">
           <AnimatePresence mode="wait">
             <motion.span 
               key={current.co}
               initial={{ y: "50%", opacity: 0 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ y: "-50%", opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-0 flex items-center justify-center font-bold"
               style={{ fontFamily: idx === 0 ? "monospace" : "inherit" }}
             >
               {current.co}
             </motion.span>
           </AnimatePresence>
        </div>
      </div>
      <div className="mt-12 bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4 w-full max-w-[280px]">
         <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
           <Wand2 className="w-5 h-5" />
         </div>
         <div className="text-sm truncate relative flex-1 h-10 flex flex-col justify-center">
           <AnimatePresence mode="wait">
             <motion.div 
               key={current.file}
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="absolute w-full"
             >
               <div className="font-bold truncate">{current.file}</div>
               <div className="text-muted-foreground text-[10px]">Dynamically generated</div>
             </motion.div>
           </AnimatePresence>
         </div>
      </div>
    </div>
  );
}

function MockupScheduling() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 relative">
       <div className="absolute left-[2.5rem] md:left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-border/50 rounded-full" />
       
       <div className="flex flex-col gap-6 w-full max-w-sm relative z-10">
         {[
           { time: "09:02 AM", email: "john@acme.com", delay: "Started" },
           { time: "09:14 AM", email: "sarah@tech.co", delay: "+12m 4s delay" },
           { time: "09:21 AM", email: "mike@startup.io", delay: "+7m 18s delay" }
         ].map((item, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false, amount: 0.5 }}
             transition={{ delay: i * 0.3 }}
             className="flex items-center gap-4"
           >
             <div className="w-16 md:w-20 text-right shrink-0">
               <div className="text-xs md:text-sm font-bold text-foreground">{item.time}</div>
               <div className="hidden md:block text-[9px] text-primary font-mono">{item.delay}</div>
             </div>
             <div className="relative">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
             </div>
             <div className="flex-1 bg-background border border-border p-3 rounded-lg shadow-sm flex items-center gap-3 overflow-hidden">
               <Send className="w-4 h-4 text-muted-foreground shrink-0" />
               <span className="text-xs font-mono truncate">{item.email}</span>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
  );
}

function MockupAutoClean() {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev >= 6 ? 0 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { email: "john@acme.com", status: "Valid", color: "text-green-500", icon: CheckCircle2, strike: false },
    { email: "sarah@tech.co", status: "Valid", color: "text-green-500", icon: CheckCircle2, strike: false },
    { email: "mike@old.io", status: "Hard Bounce", color: "text-red-500", icon: XCircle, strike: true },
    { email: "info@noreply.com", status: "Role", color: "text-yellow-500", icon: AlertTriangle, strike: true }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-background border border-border rounded-xl shadow-2xl overflow-hidden font-mono text-xs">
        <div className="bg-muted/30 px-4 py-2 border-b border-border flex items-center gap-2">
           <Server className="w-4 h-4 text-muted-foreground" />
           <span className="text-muted-foreground">verify_list.sh</span>
           {step > 0 && step < 6 && (
             <span className="ml-auto flex gap-1 items-center">
               <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"/>
               <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-75"/>
               <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-150"/>
             </span>
           )}
        </div>
        <div className="p-4 flex flex-col gap-2 min-h-[180px]">
          {items.map((item, i) => {
            const isChecking = step === i + 1;
            const isDone = step > i + 1;
            const isVisible = step > i;

            if (!isVisible) return null;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isDone && item.strike ? 0.5 : 1, x: 0 }}
                className={`flex items-center justify-between ${isDone && item.strike ? "text-foreground/50" : "text-foreground/90"}`}
              >
                 <span className={`truncate ${isDone && item.strike ? "line-through" : ""}`}>
                   Checking <span className="text-foreground font-bold">{item.email}</span>...
                 </span>
                 {isChecking && (
                   <span className="text-primary animate-pulse shrink-0 font-bold">Working...</span>
                 )}
                 {isDone && (
                   <motion.span 
                     initial={{ scale: 0 }} 
                     animate={{ scale: 1 }} 
                     className={`${item.color} flex items-center gap-1 shrink-0 font-bold`}
                   >
                     <item.icon className="w-3 h-3"/> {item.status}
                   </motion.span>
                 )}
              </motion.div>
            );
          })}
          
          {step >= 5 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 pt-4 border-t border-border border-dashed text-primary flex items-center gap-2 font-bold"
            >
               <ShieldCheck className="w-4 h-4 shrink-0" />
               Removed 2 risky addresses
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Sticky Crossfade Component ---

export default function CapabilitiesUI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mockupsRef = useRef<(HTMLDivElement | null)[]>([]);

  const mockups = [
    <MockupPrivacy key="0" />,
    <MockupSpam key="1" />,
    <MockupPersonalization key="2" />,
    <MockupScheduling key="3" />,
    <MockupAutoClean key="4" />
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // pin: true removed to avoid pin-spacer layout issues
      }
    });

    capabilities.forEach((_, i) => {
      // 1. Animate the progress bar for this specific item (duration = 1 unit of scrub time)
      tl.to(progressBarsRef.current[i], { width: "100%", ease: "none", duration: 1 }, i);

      // 2. Crossfade elements
      if (i > 0) {
        const transitionStart = i - 0.25; // Start crossfade slightly before this item takes over
        
        // Fade out previous
        tl.to(textsRef.current[i - 1], { autoAlpha: 0, y: -20, duration: 0.5, ease: "power2.inOut" }, transitionStart);
        tl.to(mockupsRef.current[i - 1], { autoAlpha: 0, scale: 0.98, filter: "blur(4px)", duration: 0.5, ease: "power2.inOut" }, transitionStart);

        // Fade in current
        tl.fromTo(textsRef.current[i], { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.inOut" }, transitionStart);
        tl.fromTo(mockupsRef.current[i], { autoAlpha: 0, scale: 1.02, filter: "blur(4px)" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.inOut" }, transitionStart);
      }
    });

    // Hold the very last item in place at the end of the scroll scrub
    tl.to({}, { duration: 0.1 }, 5);

  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="w-full h-[250vh] md:h-[400vh] lg:h-[500vh] relative bg-background border-t border-b border-border/50">
      
      {/* Sticky container that locks to the screen as we scroll through the 500vh section */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden flex flex-col relative z-10">
        
        {/* Segmented Progress Bar Header */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex gap-1 z-50 bg-background/95 px-1 pt-1">
           {capabilities.map((_, i) => (
              <div key={`track-${i}`} className="h-full flex-1 bg-muted rounded-full relative overflow-hidden">
                 <div 
                    ref={el => { progressBarsRef.current[i] = el; }}
                    className="absolute left-0 top-0 bottom-0 w-0 bg-primary shadow-[0_0_10px_rgba(0,85,255,0.8)] rounded-full" 
                 />
              </div>
           ))}
        </div>

        <div className="w-full pt-16 pb-4 md:pt-16 md:pb-8 flex justify-center mt-2 relative z-20">
           <div className="text-center">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2">
              Capabilities
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground tracking-tight title-glow">
              What you can do with Email Pilots
            </h3>
          </div>
        </div>

        {/* Main Split Screen Area */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 relative mb-8 flex items-center z-10 min-h-0 py-2 md:py-8">
           <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative h-full">
              
              {/* Left: Text Stack */}
              <div className="w-full lg:w-5/12 relative h-[40%] md:h-[45%] lg:h-full flex flex-col justify-center">
                 {capabilities.map((cap, i) => (
                    <div 
                       key={`text-${cap.id}`} 
                       ref={el => { textsRef.current[i] = el; }}
                       className={`absolute inset-0 flex flex-col justify-center ${i === 0 ? 'visible opacity-100' : 'invisible opacity-0'}`}
                    >
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 md:mb-6 border border-primary/20 shadow-[0_10px_30px_-10px_rgba(0,85,255,0.3)] shrink-0">
                          <cap.icon className="w-6 h-6 md:w-8 md:h-8" />
                       </div>
                       <h4 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-6 tracking-tight leading-tight">{cap.title}</h4>
                       <p className="text-sm md:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                          {cap.description}
                       </p>
                    </div>
                 ))}
              </div>

              {/* Right: Mockup Stack */}
              <div className="w-full lg:w-7/12 relative h-[60%] md:h-[55%] lg:h-full flex items-center justify-center lg:justify-end">
                 <div className="w-full max-w-[600px] h-full relative">
                    {mockups.map((mockup, i) => (
                       <div 
                          key={`mockup-${i}`} 
                          ref={el => { mockupsRef.current[i] = el; }}
                          className={`absolute inset-0 bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${i === 0 ? 'visible opacity-100 scale-100 blur-none' : 'invisible opacity-0 scale-105 blur-[2px]'}`}
                       >
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                          {mockup}
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
        
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      </div>
    </section>
  );
}
