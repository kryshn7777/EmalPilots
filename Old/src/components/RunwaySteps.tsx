import { useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Float } from "@react-three/drei";
import * as THREE from "three";
import { CheckCircle2, FileEdit, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PaperPlaneMesh({ color = "#0055ff" }: { color?: string }) {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0, 0, 2, 1.5, 0.2, -1, 0, 0.5, -1,
      0, 0, 2, 0, 0.5, -1, -1.5, 0.2, -1,
      0, 0, 2, 0, -0.5, -1, 1.5, 0.2, -1,
      0, 0, 2, -1.5, 0.2, -1, 0, -0.5, -1,
    ]);
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();
    return geom;
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} side={THREE.DoubleSide} flatShading />
    </mesh>
  );
}

// 3D Scene Component
function RunwayScene({ progressRef }: { progressRef: React.MutableRefObject<{ val: number }> }) {
  const planeRef = useRef<THREE.Group>(null);
  
  const runwayPoints = useMemo(() => [
    new THREE.Vector3(0, 20, 0),
    new THREE.Vector3(0, -20, 0)
  ], []);

  useFrame(() => {
    if (planeRef.current) {
      // Scrub plane position from top (Y=12) to bottom (Y=-12) based on scroll progress
      const yPos = 12 - (progressRef.current.val * 24);
      planeRef.current.position.y = yPos;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      
      {/* Runway Line */}
      <Line
        points={runwayPoints}
        color="#0055ff"
        lineWidth={3}
        dashed={true}
        dashSize={1}
        dashScale={2}
        dashOffset={0}
        transparent
        opacity={0.3}
      />

      {/* Plane */}
      <group ref={planeRef} position={[0, 12, 0]} rotation={[-Math.PI / 2, 0, Math.PI]}>
        <Float speed={3} rotationIntensity={0.3} floatIntensity={0.6}>
          <PaperPlaneMesh color="#ffffff" />
        </Float>
      </group>
    </>
  );
}

export default function RunwaySteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef({ val: 0 });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrub
      }
    });

    // Animate the plane progress value from 0 to 1
    tl.to(progressRef.current, {
      val: 1,
      ease: "none",
      duration: 1
    }, 0);

    // Animate HTML Cards popping in and fading out as you scroll
    const cardElements = cardsRef.current;
    
    // Step 1
    if (cardElements[0]) {
      tl.fromTo(cardElements[0], 
        { scale: 0.8, opacity: 0, x: -50 }, 
        { scale: 1, opacity: 1, x: 0, duration: 0.1, ease: "back.out(1.5)" }, 0.05);
      tl.to(cardElements[0], { scale: 0.9, opacity: 0.3, duration: 0.1 }, 0.35);
    }

    // Step 2
    if (cardElements[1]) {
      tl.fromTo(cardElements[1], 
        { scale: 0.8, opacity: 0, x: 50 }, 
        { scale: 1, opacity: 1, x: 0, duration: 0.1, ease: "back.out(1.5)" }, 0.4);
      tl.to(cardElements[1], { scale: 0.9, opacity: 0.3, duration: 0.1 }, 0.7);
    }

    // Step 3
    if (cardElements[2]) {
      tl.fromTo(cardElements[2], 
        { scale: 0.8, opacity: 0, x: -50 }, 
        { scale: 1, opacity: 1, x: 0, duration: 0.1, ease: "back.out(1.5)" }, 0.75);
    }

  }, { scope: containerRef });

  return (
    // Tall section to allow scrolling
    <section ref={containerRef} className="w-full relative h-[300vh] z-10 -mt-10 mb-32">
      
      {/* Sticky Container holds the canvas and cards in view */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background">
          <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
            <RunwayScene progressRef={progressRef} />
          </Canvas>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 mx-auto h-full flex flex-col items-center pointer-events-none">
          
          <div className="absolute top-[10%] text-center w-full z-20">
             <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-2">3 Simple Steps to Send</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Scroll to taxi down the runway.</p>
          </div>

          <div className="relative w-full h-full flex-1">
            
            {/* Step 1 - Left */}
            <div 
              ref={(el) => cardsRef.current[0] = el}
              className="absolute top-[25%] left-0 md:left-[10%] w-[300px] md:w-[360px] bg-card/80 backdrop-blur-xl border border-border shadow-2xl p-6 md:p-8 rounded-3xl pointer-events-auto opacity-0"
            >
               <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner border border-primary/20">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
               </div>
               <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Step 01</div>
               <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Pre-flight Check</h3>
               <p className="text-muted-foreground text-[15px] leading-relaxed">Import your list. We automatically verify every email to ensure maximum deliverability before boarding.</p>
            </div>

            {/* Step 2 - Right */}
            <div 
              ref={(el) => cardsRef.current[1] = el}
              className="absolute top-[45%] right-0 md:right-[10%] w-[300px] md:w-[360px] bg-card/80 backdrop-blur-xl border border-border shadow-2xl p-6 md:p-8 rounded-3xl pointer-events-auto opacity-0"
            >
               <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner border border-primary/20">
                  <FileEdit className="w-7 h-7 text-primary" />
               </div>
               <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Step 02</div>
               <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Fuel the Engines</h3>
               <p className="text-muted-foreground text-[15px] leading-relaxed">Draft your personalized campaign and attach your files. Clear the heuristic spam checks instantly.</p>
            </div>

            {/* Step 3 - Left */}
            <div 
              ref={(el) => cardsRef.current[2] = el}
              className="absolute top-[65%] left-0 md:left-[10%] w-[300px] md:w-[360px] bg-card/90 backdrop-blur-xl border border-secondary/30 shadow-[0_20px_50px_-12px_rgba(255,102,0,0.15)] p-6 md:p-8 rounded-3xl pointer-events-auto opacity-0"
            >
               <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 shadow-inner border border-secondary/20">
                  <Send className="w-7 h-7 text-secondary ml-1" />
               </div>
               <div className="text-xs font-bold text-secondary mb-2 uppercase tracking-widest">Step 03</div>
               <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Liftoff</h3>
               <p className="text-muted-foreground text-[15px] leading-relaxed">Hit send and close your laptop. Emails dispatch automatically and natively from your local outbox.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
