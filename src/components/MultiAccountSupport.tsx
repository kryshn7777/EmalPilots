import { useRef, useEffect, useState } from "react";
import { motion, animate } from "motion/react";
import { Mail, Server, Activity, ShieldCheck, Cpu } from "lucide-react";

// Mini helper component for the styled account nodes surrounding the hub
const ConsoleAccountNode = ({ 
  email, 
  provider, 
  className 
}: { 
  email: string; 
  provider: "Gmail" | "Outlook" | "Custom"; 
  className?: string; 
}) => {
  return (
    <div className={`absolute z-20 flex items-center gap-2.5 px-3 py-2 bg-slate-950/90 border border-slate-800/80 rounded-2xl shadow-xl w-[150px] overflow-hidden group ${className}`}>
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Icon Badge */}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 relative z-10 ${
        provider === "Gmail" ? "bg-red-500/10 text-red-400" :
        provider === "Outlook" ? "bg-blue-500/10 text-blue-400" :
        "bg-purple-500/10 text-purple-400"
      }`}>
        <Mail className="w-4 h-4" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col min-w-0 relative z-10">
        <span className="text-[10px] font-bold text-slate-200 truncate font-mono">{email}</span>
        <span className="text-[8px] text-green-400 font-mono flex items-center gap-1 mt-0.5">
          <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
          ACTIVE
        </span>
      </div>
    </div>
  );
};

// Counter component for the left column
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 2500, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      }
    });
    return () => controls.stop();
  }, []);

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-5xl md:text-6xl font-display font-black tracking-tight text-ink bg-clip-text text-transparent bg-gradient-to-r from-blue to-orange">
        {count.toLocaleString()}+
      </div>
      <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-mute mt-1.5">
        Emails Paced & Sent Weekly
      </div>
    </div>
  );
};

export default function MultiAccountSupport() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full py-24 md:py-32 relative overflow-hidden bg-white border-t border-b border-slate-line/50">
      
      {/* Self-contained CSS styles for SVG flow paths */}
      <style>{`
        @keyframes stroke-flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flowing-path {
          stroke-dasharray: 6, 6;
          animation: stroke-flow 1.5s linear infinite;
        }
        .radar-sweep {
          transform-origin: center;
          animation: spin 6s linear infinite;
        }
      `}</style>

      {/* Background glow gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[450px] bg-blue-500/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-16 lg:gap-20">
          
          {/* Left Column: Copy & Stats */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
            <span className="text-[13px] font-bold uppercase tracking-[.2em] text-blue mb-4">Command Center</span>
            
            <h2 className="font-display text-[2.25rem] md:text-[3rem] font-extrabold leading-[1.1] tracking-tight text-ink">
              One dashboard.<br />
              <span className="text-slate-mute">Up to 5 active inboxes.</span>
            </h2>
            
            <p className="mt-6 max-w-lg text-[16px] md:text-[18px] leading-relaxed text-slate-ink font-medium">
              Run all your outreach from one local command center. Connect up to 5 accounts, hit send, and let Email Pilots fire off your daily emails straight from your desktop.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-12 w-full justify-center lg:justify-start items-center">
              <Counter />
              <div className="hidden sm:block h-12 w-px bg-slate-line" />
              <div className="flex flex-col gap-2.5 text-left text-sm font-medium text-slate-ink">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-green-600 shrink-0" />
                  <span>100% Local Outbox Isolation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4.5 h-4.5 text-green-600 shrink-0" />
                  <span>Hardware-Paced Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Air Traffic Control Dark Console */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[480px] h-[380px] bg-slate-950 border border-slate-900 rounded-[2rem] shadow-lift relative overflow-hidden flex items-center justify-center p-4">
              
              {/* Slate-900 Console Grid Backdrop */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', 
                  backgroundSize: '24px 24px' 
                }} 
              />

              {/* Console Window Terminal Header */}
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="font-mono text-[9px] text-slate-500 ml-2 uppercase tracking-wider">outbox_hub.sh</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                  <Activity className="w-3 h-3 animate-pulse" />
                  STREAM ACTIVE
                </div>
              </div>

              {/* Central Connection SVG Mesh & Flowing Particles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 480 380" fill="none">
                <defs>
                  {/* Glowing filter for particles */}
                  <filter id="glow-particle" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Blue connection gradient */}
                  <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1466ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff6a1a" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* SVG Connections Paths */}
                {/* Path 1: Top-Left Gmail to Center */}
                <path id="path-r1" d="M 95 64 Q 140 140 240 190" stroke="url(#gradient-blue)" strokeWidth="1.5" className="flowing-path" />
                {/* Path 2: Top-Right Outlook to Center */}
                <path id="path-r2" d="M 385 64 Q 340 140 240 190" stroke="url(#gradient-blue)" strokeWidth="1.5" className="flowing-path" />
                {/* Path 3: Center-Left SMTP to Center */}
                <path id="path-r3" d="M 85 190 L 240 190" stroke="url(#gradient-blue)" strokeWidth="1.5" className="flowing-path" />
                {/* Path 4: Center-Right SMTP to Center */}
                <path id="path-r4" d="M 395 190 L 240 190" stroke="url(#gradient-blue)" strokeWidth="1.5" className="flowing-path" />
                {/* Path 5: Bottom-Center Gmail to Center */}
                <path id="path-r5" d="M 240 336 L 240 190" stroke="url(#gradient-blue)" strokeWidth="1.5" className="flowing-path" />

                {/* Flowing Outgoing Particles (Animating along the paths) */}
                <circle r="3.5" fill="#3b82f6" filter="url(#glow-particle)">
                  <animateMotion dur="2.2s" repeatCount="indefinite" path="M 95 64 Q 140 140 240 190" />
                </circle>
                <circle r="3.5" fill="#f97316" filter="url(#glow-particle)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M 385 64 Q 340 140 240 190" />
                </circle>
                <circle r="3.5" fill="#a855f7" filter="url(#glow-particle)">
                  <animateMotion dur="1.8s" repeatCount="indefinite" path="M 85 190 L 240 190" />
                </circle>
                <circle r="3.5" fill="#10b981" filter="url(#glow-particle)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 395 190 L 240 190" />
                </circle>
                <circle r="3.5" fill="#3b82f6" filter="url(#glow-particle)">
                  <animateMotion dur="2.0s" repeatCount="indefinite" path="M 240 336 L 240 190" />
                </circle>
              </svg>

              {/* Node Layout - Absolute Placements over SVG coordinate map */}
              
              {/* Central Command Hub */}
              <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-18 h-18 rounded-2xl bg-blue/10 border border-blue/40 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(20,102,255,0.25)] relative group">
                  {/* Pulse scan ring */}
                  <div className="absolute -inset-1.5 rounded-2xl border border-blue/30 animate-pulse pointer-events-none" />
                  
                  <Server className="w-8 h-8 text-blue" />
                  <span className="text-[7.5px] font-mono font-bold text-blue tracking-wider mt-1.5 uppercase">Local Hub</span>
                </div>
              </div>

              {/* Account Nodes */}
              {/* 1. Gmail Top-Left */}
              <ConsoleAccountNode email="sales@acme.com" provider="Gmail" className="left-[20px] top-[40px]" />
              
              {/* 2. Outlook Top-Right */}
              <ConsoleAccountNode email="john.doe@gmail.com" provider="Outlook" className="right-[20px] top-[40px]" />

              {/* 3. SMTP Center-Left */}
              <ConsoleAccountNode email="support@startup.io" provider="Custom" className="left-[10px] top-[166px]" />

              {/* 4. SMTP Center-Right */}
              <ConsoleAccountNode email="sarah.m@outlook.com" provider="Custom" className="right-[10px] top-[166px]" />

              {/* 5. Gmail Bottom-Center */}
              <ConsoleAccountNode email="hello@world.net" provider="Gmail" className="left-[165px] bottom-[20px]" />

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
