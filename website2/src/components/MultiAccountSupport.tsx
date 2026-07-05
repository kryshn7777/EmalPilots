import { useRef, useEffect, useState } from "react";
import { motion, animate } from "motion/react";
import { Mail, Zap, Activity, ShieldCheck, Server } from "lucide-react";

const EmailNode = ({ email, provider, delay }: { email: string, provider: "Gmail" | "Outlook" | "Custom", delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-2xl shadow-lg shrink-0 w-64 relative group"
    >
      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
        provider === "Gmail" ? "bg-red-500/10 text-red-500" :
        provider === "Outlook" ? "bg-blue-500/10 text-blue-500" :
        "bg-primary/10 text-primary"
      }`}>
        <Mail className="w-5 h-5" />
      </div>
      <div className="flex flex-col overflow-hidden relative z-10">
        <span className="text-sm font-bold truncate">{email}</span>
        <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Active ({provider})
        </span>
      </div>
    </motion.div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controls = animate(0, 1250430, {
      duration: 5,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      }
    });
    return () => controls.stop();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div ref={ref} className="text-6xl md:text-8xl font-display font-black tracking-tighter text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm md:text-xl font-bold tracking-[0.2em] uppercase text-muted-foreground mt-2">
        Emails Automated Concurrently
      </div>
    </div>
  );
};

export default function MultiAccountSupport() {
  const containerRef = useRef<HTMLDivElement>(null);

  const accounts1 = [
    { e: "sales@acme.com", p: "Custom" as const },
    { e: "john.doe@gmail.com", p: "Gmail" as const },
    { e: "support@startup.io", p: "Custom" as const },
    { e: "sarah.m@outlook.com", p: "Outlook" as const },
    { e: "contact@agency.com", p: "Custom" as const },
    { e: "hello@world.net", p: "Gmail" as const },
  ];
  
  const accounts2 = [
    { e: "marketing@brand.co", p: "Custom" as const },
    { e: "info@business.com", p: "Outlook" as const },
    { e: "ceo@company.com", p: "Custom" as const },
    { e: "team@product.com", p: "Gmail" as const },
    { e: "press@media.org", p: "Custom" as const },
    { e: "events@local.com", p: "Outlook" as const },
  ];

  // Duplicate for seamless marquee
  const row1 = [...accounts1, ...accounts1, ...accounts1];
  const row2 = [...accounts2, ...accounts2, ...accounts2];

  return (
    <section ref={containerRef} className="w-full py-32 relative overflow-hidden bg-muted/30 border-y border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6">
          Connect them all. <br/>
          <span className="text-muted-foreground">Command them all.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
          Login to 1 account? Cute. Login to 5? Now we're talking. 
          Email Pilots creates a localized command center that runs massive concurrent campaigns across every inbox you own.
        </p>

        <Counter />
      </div>

      {/* Infinity Carousel Container */}
      <div className="relative w-full flex flex-col gap-6 py-10 rotate-[-2deg] scale-105 z-10">
        
        {/* Row 1 */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 w-[300vw] md:w-[200vw]"
        >
          {row1.map((acc, i) => (
            <EmailNode key={`r1-${i}`} email={acc.e} provider={acc.p} delay={0} />
          ))}
        </motion.div>

        {/* Command Node Connector Line */}
        <div className="w-full flex justify-center items-center gap-4 px-4 opacity-50 relative overflow-hidden">
           <motion.div 
             animate={{ x: ["-100%", "100%"] }}
             transition={{ ease: "linear", duration: 3, repeat: Infinity }}
             className="absolute top-1/2 left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" 
           />
           <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary" />
           <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
           <motion.div 
             animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
             transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
             className="flex items-center gap-2 font-mono text-xs font-bold text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest z-10"
           >
             <Activity className="w-3 h-3" />
             Data Stream Active
           </motion.div>
           <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
           <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary" />
        </div>

        {/* Row 2 */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 w-[300vw] md:w-[200vw]"
        >
          {row2.map((acc, i) => (
            <EmailNode key={`r2-${i}`} email={acc.e} provider={acc.p} delay={0} />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-20 relative z-10">
         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-lg mb-2">Massive Concurrency</h3>
               <p className="text-sm text-muted-foreground">Each account runs in its own localized isolated thread. Blast thousands of emails without bottlenecking.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center">
               <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-lg mb-2">IP Reputation Shield</h3>
               <p className="text-sm text-muted-foreground">Automatically rotate between connected accounts to maintain perfect domain and IP health scores.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center">
               <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-lg mb-2">Unified Analytics</h3>
               <p className="text-sm text-muted-foreground">See replies, bounces, and opens from all 5+ accounts in one single, beautiful command dashboard.</p>
            </div>
         </div>
      </div>
    </section>
  );
}
