import { motion } from "motion/react";
import { User, Shield, TrendingUp, Target, Award, Mail, BarChart3, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Human-Like Pacing",
    icon: <User className="w-8 h-8" />,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "We introduce randomized delays and strategic pauses between sends to mimic a real human, gliding past spam filters completely undetected.",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <Activity className="w-32 h-32 text-primary/20 absolute" />
        <div className="flex gap-2 items-end h-24 z-10">
          {[40, 70, 45, 90, 60, 85, 50].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 10 }}
              whileInView={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              className="w-4 bg-primary rounded-t-sm"
            />
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Hard Rate Limiting",
    icon: <Shield className="w-8 h-8" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "We send emails in small, controlled chunks to enforce your daily limits. No sudden spikes, no provider throttling.",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <ShieldCheck className="w-32 h-32 text-orange-500/20 absolute" />
        <div className="w-48 h-12 border-2 border-orange-500/30 rounded-full flex items-center justify-start p-1 overflow-hidden z-10 bg-background">
          <motion.div 
            initial={{ width: "10%" }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full bg-orange-500 rounded-full flex items-center justify-end px-2"
          >
             <span className="text-[10px] text-white font-bold">SAFE LIMIT</span>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "Automatic Warmup Curves",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Build sender reputation on autopilot. We start at 5 emails a day and safely ramp up volume to establish domain trust.",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <BarChart3 className="w-32 h-32 text-green-500/20 absolute" />
        <div className="w-full max-w-[200px] aspect-[2/1] relative z-10 flex items-end justify-between border-b-2 border-l-2 border-green-500/30 pb-2 pl-2">
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
             <motion.path 
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               d="M 10 100 Q 50 100 100 50 T 200 10" 
               fill="transparent" 
               stroke="currentColor" 
               strokeWidth="4"
               className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
             />
           </svg>
        </div>
      </div>
    )
  },
  {
    title: "DNS Pre-Verification",
    icon: <Target className="w-8 h-8" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "We stop bounces before you send by actively verifying recipient domains, ensuring a pristine, near-0% bounce rate.",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <Target className="w-32 h-32 text-purple-500/20 absolute" />
        <motion.div 
           initial={{ scale: 0.5, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.5, type: "spring" }}
           className="bg-card border border-purple-500/30 px-6 py-4 rounded-2xl flex items-center gap-4 z-10 shadow-xl shadow-purple-500/10"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold font-mono">user@domain.com</span>
            <span className="text-xs text-purple-500 font-bold tracking-widest uppercase">Verified</span>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    title: "Primary Inbox Placement",
    icon: <Award className="w-8 h-8" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Strip away bulky HTML to deliver crisp, 1:1 plain-text messages. Bypass promo filters and land directly in the Primary inbox.",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative">
        <Mail className="w-32 h-32 text-yellow-500/20 absolute" />
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6 }}
           className="w-48 h-32 bg-card border-t-4 border-yellow-500 rounded-lg shadow-2xl flex flex-col p-4 z-10"
        >
          <div className="w-full h-2 bg-muted rounded-full mb-2" />
          <div className="w-3/4 h-2 bg-muted rounded-full mb-4" />
          <div className="w-1/2 h-4 bg-yellow-500/20 rounded-md mb-auto flex items-center px-2">
             <span className="text-[8px] font-bold text-yellow-500 uppercase tracking-widest">Primary</span>
          </div>
        </motion.div>
      </div>
    )
  },
];

export default function DeliverabilityZigZag() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-32 mb-32 px-4 relative z-10 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Deliverability Engine
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight mb-6"
        >
          🚀 Stop Landing in Spam. <br className="hidden md:block" />
          <span className="text-muted-foreground">Start Dominating the Primary Inbox.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
        >
          Protect your sender reputation and get your messages seen with <strong className="text-foreground">5 state-of-the-art deliverability safeguards</strong>.
        </motion.p>
      </div>

      {/* Zig-Zag Layout */}
      <div className="flex flex-col gap-24 lg:gap-32 max-w-5xl mx-auto relative">
        
        {/* Subtle connecting line in the background */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border/50 -translate-x-1/2 hidden lg:block" />

        {features.map((feature, i) => {
          const isEven = i % 2 === 0;
          
          return (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 ${isEven ? "" : "lg:flex-row-reverse"}`}>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`lg:w-1/2 flex flex-col ${isEven ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"} items-center text-center`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.bgColor} ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold leading-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </motion.div>

              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:w-1/2 w-full aspect-[4/3] lg:aspect-square bg-muted/20 border border-border rounded-[2rem] overflow-hidden flex items-center justify-center shadow-inner relative group"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.bgColor}`} />
                
                {feature.visual}
              </motion.div>

            </div>
          )
        })}
      </div>

    </section>
  )
}
