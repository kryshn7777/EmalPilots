import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { useState } from 'react'
import { SkyScene } from './SkyScene'

/**
 * One fixed, transparent, full-viewport canvas that sits behind the whole page.
 * Planes drift over the dark hero/CTA (vivid) and ghost behind the frosted light
 * body. Adaptive DPR (PerformanceMonitor) trims resolution before frames drop.
 */
export default function SkyCanvas() {
  const [dpr, setDpr] = useState(1.5)
  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 13], fov: 46 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%' }}
    >
      <PerformanceMonitor
        onChange={({ factor }) => setDpr(Math.round((1 + factor) * 10) / 10)}
        onFallback={() => setDpr(1)}
      >
        <SkyScene />
      </PerformanceMonitor>
    </Canvas>
  )
}
