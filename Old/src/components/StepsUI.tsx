import { motion } from "motion/react";
import { FileDown, Edit3, Send, ShieldCheck } from "lucide-react";

export default function StepsUI() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-32 mb-32 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">3 Simple Steps to Send</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From spreadsheet to inbox in minutes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* Card 1: Import (Wide) - col-span-2, row-span-1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-1 bg-card/60 backdrop-blur-md border border-border rounded-3xl p-8 flex flex-col md:flex-row gap-8 overflow-hidden relative group hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
        >
          <div className="flex-1 z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-inner">
               <FileDown className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">1. Import Recipients</h3>
            <p className="text-muted-foreground leading-relaxed">
              Import a CSV or add contacts manually. We instantly filter out past hard-bounces to protect your domain reputation.
            </p>
          </div>
          <div className="flex-1 relative min-h-[220px] flex items-center justify-center bg-muted/20 rounded-2xl border border-border/50 overflow-hidden group-hover:bg-muted/40 transition-colors">
            {/* Mock CSV Table */}
            <div className="w-full h-full p-6 flex flex-col gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex gap-4 pb-3 border-b border-border/50">
                 <div className="w-1/3 h-3 bg-muted-foreground/30 rounded-sm"></div>
                 <div className="w-1/3 h-3 bg-muted-foreground/30 rounded-sm"></div>
                 <div className="w-1/3 h-3 bg-muted-foreground/30 rounded-sm"></div>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 py-1.5">
                  <div className="w-1/3 h-3 bg-foreground/10 rounded-sm"></div>
                  <div className="w-1/3 h-3 bg-foreground/10 rounded-sm"></div>
                  <div className="w-1/3 h-3 bg-primary/20 rounded-sm"></div>
                </div>
              ))}
              <div className="absolute bottom-4 right-4 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <ShieldCheck className="w-3.5 h-3.5" /> List Cleaned
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Draft & Analyze (Tall) - col-span-1, row-span-2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 md:row-span-2 bg-card/60 backdrop-blur-md border border-border rounded-3xl p-8 flex flex-col gap-8 overflow-hidden relative group hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
        >
          <div className="z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-inner">
               <Edit3 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">2. Draft & Analyze</h3>
            <p className="text-muted-foreground leading-relaxed">
              Write your personalized pitch. Our heuristic spam checker analyzes your copy to guarantee maximum inbox deliverability.
            </p>
          </div>
          <div className="flex-1 w-full bg-background/50 rounded-2xl border border-border p-5 flex flex-col gap-4 relative overflow-hidden group-hover:border-border/80 transition-colors">
            {/* Glowing Spam Checker Mockup */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />
            <div className="text-xs text-muted-foreground font-mono mb-2 flex gap-2"><span className="text-foreground/40">Sub:</span> Quick intro to &lbrace;&lbrace;Company&rbrace;&rbrace;</div>
            <div className="space-y-3 opacity-60">
              <div className="w-full h-2.5 bg-foreground/10 rounded-sm" />
              <div className="w-5/6 h-2.5 bg-foreground/10 rounded-sm" />
              <div className="w-full h-2.5 bg-foreground/10 rounded-sm" />
              <div className="w-4/6 h-2.5 bg-foreground/10 rounded-sm" />
              <div className="w-1/2 h-3 bg-primary/30 rounded-sm mt-6" />
              <div className="w-1/3 h-2.5 bg-foreground/10 rounded-sm mt-2" />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[85%] bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl p-4 shadow-2xl shadow-primary/10 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Spam Score</span>
                <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Excellent</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-0 group-hover:w-[95%] transition-all duration-1000 ease-out delay-200 rounded-full relative">
                   <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/40 blur-[2px]" />
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Send (Wide) - col-span-2, row-span-1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 md:row-span-1 bg-card/60 backdrop-blur-md border border-border rounded-3xl p-8 flex flex-col md:flex-row-reverse gap-8 overflow-hidden relative group hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
        >
          <div className="flex-1 z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-inner">
               <Send className="w-7 h-7 ml-1" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">3. Sit Back & Relax</h3>
            <p className="text-muted-foreground leading-relaxed">
              Schedule your campaign and let the pilots fly. Emails send one by one at natural intervals directly from your outbox.
            </p>
          </div>
          <div className="flex-1 relative min-h-[220px] flex items-center justify-center bg-primary/5 rounded-2xl border border-primary/10 overflow-hidden group-hover:bg-primary/10 transition-colors">
            {/* Progress / Send Animation */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-background border border-border shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
               <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:animate-ping" />
               <Send className="w-10 h-10 text-primary ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Sending campaigns</span>
                <span className="text-primary font-mono">42 / 100</span>
              </div>
              <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42%] group-hover:w-[85%] transition-all duration-[2000ms] ease-out rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
