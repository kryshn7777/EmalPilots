import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import * as THREE from 'three'

/** Classic dart paper-airplane geometry (ported from the reference scene). */
function usePlaneGeometry() {
  return useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const v = new Float32Array([
      0, 0, 2, 1.5, 0.2, -1, 0, 0.5, -1,
      0, 0, 2, 0, 0.5, -1, -1.5, 0.2, -1,
      0, 0, 2, 0, -0.5, -1, 1.5, 0.2, -1,
      0, 0, 2, -1.5, 0.2, -1, 0, -0.5, -1,
    ])
    geom.setAttribute('position', new THREE.BufferAttribute(v, 3))
    geom.computeVertexNormals()
    return geom
  }, [])
}

export function PaperPlaneMesh({ color, scale = 1 }: { color: string; scale?: number }) {
  const geometry = usePlaneGeometry()
  return (
    <mesh geometry={geometry} scale={scale}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.55}
        side={THREE.DoubleSide}
        flatShading
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  )
}

/** A faint dashed flight path that a plane travels along. */
export function FlightLine({ curve, color }: { curve: THREE.CatmullRomCurve3; color: string }) {
  const points = useMemo(() => curve.getPoints(60), [curve])
  return (
    <Line points={points} color={color} lineWidth={1.4} dashed dashSize={0.5} gapSize={0.45} transparent opacity={0.28} />
  )
}

/** One plane drifting along its curve, with a gentle float bob. */
export function DriftingPlane({
  curve,
  color,
  offset = 0,
  speed = 0.04,
  scale = 1,
}: {
  curve: THREE.CatmullRomCurve3
  color: string
  offset?: number
  speed?: number
  scale?: number
}) {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const t = (state.clock.elapsedTime * speed + offset) % 1
    const pos = curve.getPointAt(t)
    const next = curve.getPointAt((t + 0.01) % 1)
    group.current.position.copy(pos)
    group.current.lookAt(next)
  })
  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.5}>
        <PaperPlaneMesh color={color} scale={scale} />
      </Float>
    </group>
  )
}
