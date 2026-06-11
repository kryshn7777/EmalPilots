import { Canvas } from "@react-three/fiber"
import { AviationScene } from "./AviationBackground"

export default function AviationCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <AviationScene />
    </Canvas>
  )
}
