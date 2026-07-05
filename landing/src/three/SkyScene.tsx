import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GlobeDots } from './GlobeDots'
import { FlightRibbon } from './FlightRibbon'
import { DriftingPlane, FlightLine } from './PaperPlane'
import { scroll, isSmall } from '../lib/scroll'

const BLUE = '#3b82f6'
const GLOW = '#5b8cff'
const AMBER = '#f59e0b'

function curve(pts: [number, number, number][]) {
  return new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)))
}

/**
 * Site-wide "flight sky": faint star-dots + the hero flight ribbon + paper
 * planes drifting along dashed paths. The whole rig parallaxes with scroll
 * (read from the shared scroll state, no React re-renders).
 */
export function SkyScene() {
  const rig = useRef<THREE.Group>(null)

  const planes = useMemo(() => {
    // Curves kept within the visible center band (x within ~±10, z near 0) so a
    // plane is almost always on screen rather than drifting off the edges.
    const all = [
      { c: curve([[-11, -3, 1], [-4, 4, 0], [4, -1, -2], [11, 6, 0]]), color: GLOW, offset: 0.0, speed: 0.03, scale: 0.8 },
      { c: curve([[-10, 6, -1], [-3, -2, -3], [4, 5, -2], [11, -3, 0]]), color: BLUE, offset: 0.45, speed: 0.038, scale: 0.78 },
      { c: curve([[10, -5, 0], [3, 2, -2], [-5, 6, -2], [-11, -1, 1]]), color: AMBER, offset: 0.2, speed: 0.028, scale: 0.8 },
      { c: curve([[-12, 1, -1], [-4, 7, -2], [5, 2, -1], [12, -4, 1]]), color: GLOW, offset: 0.7, speed: 0.034, scale: 0.85 },
    ]
    return isSmall ? all.slice(0, 2) : all
  }, [])

  useFrame(() => {
    if (!rig.current) return
    const p = scroll.progress
    // Climb: the sky drifts up as you descend the page (gate to gate).
    rig.current.position.y = THREE.MathUtils.lerp(rig.current.position.y, p * 6, 0.06)
    // Bank: a gentle roll, strongest mid-flight, easing out at the ends.
    const bank = Math.sin(p * Math.PI) * 0.16
    rig.current.rotation.z = THREE.MathUtils.lerp(rig.current.rotation.z, bank, 0.06)
    // Heading: a slow yaw sway so the formation feels like it's turning.
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, Math.sin(p * Math.PI * 2) * 0.1, 0.06)
  })

  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[6, 8, 6]} intensity={1.2} />
      <directionalLight position={[-8, -6, -5]} intensity={0.4} color={GLOW} />
      <group ref={rig}>
        <GlobeDots count={isSmall ? 300 : 520} radius={12} />
        <group position={[0, 1, 0]}>
          <FlightRibbon />
        </group>
        {planes.map((p, i) => (
          <group key={i}>
            <FlightLine curve={p.c} color={p.color} />
            <DriftingPlane curve={p.c} color={p.color} offset={p.offset} speed={p.speed} scale={p.scale} />
          </group>
        ))}
      </group>
    </>
  )
}
