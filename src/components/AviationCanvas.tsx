import { Canvas } from "@react-three/fiber"
import { AviationScene } from "./AviationBackground"

export default function AviationCanvas({ isActive = true }: { isActive?: boolean }) {
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
