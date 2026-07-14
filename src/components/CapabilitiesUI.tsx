import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Lock, ShieldCheck, Wand2, Clock, Mail, Server, Globe2, AlertTriangle, CheckCircle2, Send, XCircle, Bot, Sparkles, Inbox, PenTool, Cpu, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const capabilities = [
  {
    id: 0,
    title: "Privacy-First Local AI",
    description: "Your AI assistant runs 100% on your machine's GPU. No cloud APIs. Zero data ever leaves your device. Full stop.",
    icon: Lock,
  },
  {
    id: 1,
    title: "AI Spam & Deliverability",
    description: "Our local AI scans every draft for spammy patterns, analyzing tone and formatting to ensure you land in the primary inbox.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "AI Personalized Generation",
    description: "Generate highly contextual emails locally. The AI leverages your past successful styles and individual recipient facts.",
    icon: Wand2,
  },
  {
    id: 3,
    title: "AI Writing Assistant",
    description: "Use the built-in ✨ AI toolbar to seamlessly improve, rewrite, or fix grammar while composing your emails.",
    icon: PenTool,
  },
  {
    id: 4,
    title: "AI Reply Classification",
    description: "The AI automatically reads incoming replies, categorizes them, pauses active drips, and auto-suppresses unsubscribes.",
    icon: Inbox,
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
               <Cpu className="w-10 h-10" />
               <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 border border-border shadow-lg">
                  <Lock className="w-4 h-4 text-green-500" />
               </div>
            </div>
            <span className="text-xs text-primary font-mono font-bold mt-1">Local AI Model</span>
          </div>
        </div>
        
        <div className="bg-background/95 border border-border rounded-xl p-4 shadow-xl text-center max-w-[280px]">
          <div className="text-xs text-muted-foreground mb-2 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            LLM running locally on GPU
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
             <div className="h-full w-full bg-green-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupSpam({ isVisible }: { isVisible: boolean }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setIsFixed(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

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
             <span>✨ AI Deliverability Advisor</span>
             <AnimatePresence mode="wait">
               {!isFixed ? (
                 <motion.span key="scoreBad" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-red-500 bg-red-500/10 px-2 py-0.5 rounded flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> 3 Issues Found</motion.span>
               ) : (
                 <motion.span key="scoreGood" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-green-600 bg-green-500/10 px-2 py-0.5 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Looks Good</motion.span>
               )}
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
}

function MockupPersonalization({ isVisible }: { isVisible: boolean }) {
  const [idx, setIdx] = useState(0);
  const people = [
    { name: "{{Name}}", co: "{{Co}}", file: "PitchDeck_Template.pdf" },
    { name: "Sarah", co: "Acme", file: "PitchDeck_Acme.pdf" },
    { name: "Mike", co: "TechFlow", file: "PitchDeck_TechFlow.pdf" },
    { name: "Elena", co: "Globex", file: "PitchDeck_Globex.pdf" },
  ];

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % people.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isVisible]);

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
      <div className="mt-12 bg-primary border border-primary/20 p-4 rounded-xl shadow-sm flex items-center gap-4 w-full max-w-[280px] text-white">
         <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
           <Sparkles className="w-5 h-5" />
         </div>
         <div className="text-sm truncate relative flex-1 h-10 flex flex-col justify-center">
           <AnimatePresence mode="wait">
             <motion.div 
               key={current.name}
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="absolute w-full"
             >
               <div className="font-bold truncate">Drafting for {current.name}...</div>
               <div className="text-white/70 text-[10px] flex items-center gap-1"><Bot className="w-3 h-3"/> Using recent replies</div>
             </motion.div>
           </AnimatePresence>
         </div>
      </div>
    </div>
  );
}

function MockupWritingAssistant() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 relative">
       <div className="w-full max-w-sm bg-background border border-border rounded-xl shadow-2xl overflow-hidden font-sans text-sm">
         <div className="border-b border-border p-2 bg-muted/20 flex gap-2">
           <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20"><Sparkles className="w-3 h-3"/> Improve</button>
           <button className="flex items-center gap-1.5 px-3 py-1.5 bg-background text-foreground text-xs font-bold rounded-lg border border-border shadow-sm"><PenTool className="w-3 h-3"/> Rewrite</button>
         </div>
         <div className="p-4 text-foreground/80 leading-relaxed min-h-[150px]">
           <p className="mb-4">I was looking at your website and I think we can help you get more leads. Let me know if you want to chat.</p>
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-foreground relative"
           >
             <div className="text-xs font-bold text-primary mb-2 flex items-center gap-1"><Sparkles className="w-3 h-3"/> AI Suggestion</div>
             <p className="text-sm">I noticed Acme Corp's recent launch and was impressed. We help companies like yours scale their lead generation by 30%. Would you be open to a brief chat this Thursday?</p>
             <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">Apply</button>
                <button className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded">Dismiss</button>
             </div>
           </motion.div>
         </div>
       </div>
    </div>
  );
}

function MockupReplyClassification({ isVisible }: { isVisible: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setStep(prev => (prev >= 6 ? 0 : prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const items = [
    { email: "john@acme.com", subject: "Re: Partnership", tag: "Interested", color: "bg-green-500/10 text-green-600 border-green-500/20", icon: CheckCircle2, action: "Drip paused" },
    { email: "sarah@tech.co", subject: "Automatic Reply", tag: "OOO", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", icon: Clock, action: "Drip continued" },
    { email: "mike@old.io", subject: "Stop emailing me", tag: "Unsubscribe", color: "bg-red-500/10 text-red-500 border-red-500/20", icon: XCircle, action: "Auto-suppressed" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-background border border-border rounded-xl shadow-2xl overflow-hidden font-sans text-xs">
        <div className="bg-muted/30 px-4 py-2 border-b border-border flex items-center gap-2 font-mono">
           <Bot className="w-4 h-4 text-primary" />
           <span className="text-muted-foreground">ai_reply_classifier.ts</span>
           {step > 0 && step < 4 && (
             <span className="ml-auto flex gap-1 items-center">
               <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"/>
             </span>
           )}
        </div>
        <div className="p-4 flex flex-col gap-3 min-h-[180px]">
          {items.map((item, i) => {
            const isChecking = step === i + 1;
            const isDone = step > i + 1;
            const isVisible = step > i;

            if (!isVisible) return null;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex flex-col gap-1.5 p-2.5 rounded-lg border ${isDone ? 'border-border bg-muted/10' : 'border-primary/30 bg-primary/5'}`}
              >
                 <div className="flex items-center justify-between">
                   <span className="font-bold text-foreground text-sm">{item.email}</span>
                   {isChecking && <span className="text-primary text-[10px] animate-pulse flex items-center gap-1 font-bold"><Bot className="w-3 h-3"/> Analyzing...</span>}
                   {isDone && (
                     <span className={`px-1.5 py-0.5 rounded border text-[10px] font-bold ${item.color}`}>
                       {item.tag}
                     </span>
                   )}
                 </div>
                 <div className="text-muted-foreground truncate italic">"{item.subject}"</div>
                 {isDone && (
                   <div className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                     <Zap className="w-3 h-3 text-amber-500"/> Action: <span className="font-bold text-foreground">{item.action}</span>
                   </div>
                 )}
              </motion.div>
            );
          })}
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
  const isVisible = useInView(containerRef, { amount: 0 });

  const mockups = [
    <MockupPrivacy key="0" />,
    <MockupSpam key="1" isVisible={isVisible} />,
    <MockupPersonalization key="2" isVisible={isVisible} />,
    <MockupWritingAssistant key="3" />,
    <MockupReplyClassification key="4" isVisible={isVisible} />
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        snap: {
          snapTo: 1 / (capabilities.length - 1), // Snaps to 0%, 25%, 50%, 75%, 100%
          duration: { min: 0.2, max: 0.4 },
          ease: "power2.inOut"
        }
      }
    });

    capabilities.forEach((_, i) => {
      // Progress bars
      if (i < capabilities.length - 1) {
        tl.to(progressBarsRef.current[i], { width: "100%", ease: "none", duration: 1 }, i);
      } else {
        // Fill the last progress bar as it comes into view
        tl.to(progressBarsRef.current[i], { width: "100%", ease: "none", duration: 0.5 }, i - 0.5);
      }

      // Fast crossfade exactly between items
      if (i > 0) {
        const transitionCenter = i - 0.5;
        const duration = 0.3; // Tight duration so it never lingers
        
        // Fade out previous
        tl.to(textsRef.current[i - 1], { autoAlpha: 0, y: -20, duration: duration/2, ease: "power2.in" }, transitionCenter - duration/2);
        tl.to(mockupsRef.current[i - 1], { autoAlpha: 0, scale: 0.96, duration: duration/2, ease: "power2.in" }, transitionCenter - duration/2);

        // Fade in current
        tl.fromTo(textsRef.current[i], { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: duration/2, ease: "power2.out" }, transitionCenter);
        tl.fromTo(mockupsRef.current[i], { autoAlpha: 0, scale: 1.04 }, { autoAlpha: 1, scale: 1, duration: duration/2, ease: "power2.out" }, transitionCenter);
      }
    });

    // Ensure the timeline length is exactly capabilities.length - 1
    tl.to({}, { duration: 0.01 }, capabilities.length - 1);

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

        <div className="w-full pt-12 pb-2 md:pt-16 md:pb-8 flex justify-center mt-2 relative z-20">
           <div className="text-center px-4">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-1 md:mb-2">
              Capabilities
            </h2>
            <h3 className="text-xl md:text-4xl lg:text-5xl font-display font-black text-foreground tracking-tight title-glow">
              What you can do with Email Pilots
            </h3>
          </div>
        </div>

        {/* Main Split Screen Area */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 relative mb-4 md:mb-8 flex items-center z-10 min-h-0 py-2 md:py-8">
           <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-16 relative h-full">
              
              {/* Left: Text Stack */}
              <div className="w-full lg:w-5/12 relative h-[180px] md:h-[250px] lg:h-full flex flex-col justify-center shrink-0">
                 {capabilities.map((cap, i) => (
                    <div 
                       key={`text-${cap.id}`} 
                       ref={el => { textsRef.current[i] = el; }}
                       className={`absolute inset-0 flex flex-col justify-center ${i === 0 ? 'visible opacity-100' : 'invisible opacity-0'}`}
                    >
                       <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2 md:mb-6 border border-primary/20 shadow-[0_10px_30px_-10px_rgba(0,85,255,0.3)] shrink-0">
                          <cap.icon className="w-5 h-5 md:w-8 md:h-8" />
                       </div>
                       <h4 className="text-xl md:text-4xl lg:text-5xl font-display font-bold mb-2 md:mb-6 tracking-tight leading-tight">{cap.title}</h4>
                       <p className="text-xs md:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                          {cap.description}
                       </p>
                    </div>
                 ))}
              </div>

              {/* Right: Mockup Stack */}
              <div className="w-full lg:w-7/12 relative flex-1 min-h-[220px] lg:h-full flex items-center justify-center lg:justify-end pb-4 md:pb-0">
                 <div className="w-full max-w-[600px] h-full relative">
                    {mockups.map((mockup, i) => (
                       <div 
                          key={`mockup-${i}`} 
                          ref={el => { mockupsRef.current[i] = el; }}
                          className={`absolute inset-0 bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${i === 0 ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-105'}`}
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
