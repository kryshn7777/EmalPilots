import { Canvas } from "@react-three/fiber"
import { AviationScene } from "./AviationBackground"
import { useState, useEffect } from "react"

export default function AviationCanvas() {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const el = document.getElementById('hero-comparison-container')
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      setIsActive(entry.isIntersecting)
    }, { threshold: 0 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }}
      dpr={[1, 1.5]}
      frameloop={isActive ? "always" : "never"}
      gl={{
        powerPreference: "high-performance",
        alpha: true,
        antialias: true,
        stencil: false
      }}
    >
      <AviationScene />
    </Canvas>
  )
}
