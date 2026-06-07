import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Line } from "@react-three/drei"
import * as THREE from "three"

export function PaperPlaneMesh({ color = "#0055ff" }: { color?: string }) {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    // Classic Dart Paper Airplane Geometry
    const vertices = new Float32Array([
      // Right Wing Top
      0, 0, 2,       // Nose
      1.5, 0.2, -1,  // Right wing tip
      0, 0.5, -1,    // Center top tail

      // Left Wing Top
      0, 0, 2,       // Nose
      0, 0.5, -1,    // Center top tail
      -1.5, 0.2, -1, // Left wing tip

      // Right Wing Bottom
      0, 0, 2,       // Nose
      0, -0.5, -1,   // Center bottom tail
      1.5, 0.2, -1,  // Right wing tip

      // Left Wing Bottom
      0, 0, 2,       // Nose
      -1.5, 0.2, -1, // Left wing tip
      0, -0.5, -1,   // Center bottom tail
    ])
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geom.computeVertexNormals()
    return geom
  }, [])

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} side={THREE.DoubleSide} flatShading />
    </mesh>
  )
}

function FlightPath({ curve, color = "#ff6600" }: { curve: THREE.CatmullRomCurve3, color?: string }) {
  const points = useMemo(() => curve.getPoints(50), [curve])
  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      dashed={true}
      dashSize={0.5}
      dashScale={2}
      dashOffset={0}
      transparent
      opacity={0.5}
    />
  )
}

function AnimatedPlane({ curve, color, offset = 0 }: { curve: THREE.CatmullRomCurve3, color: string, offset?: number }) {
  const group = useRef<THREE.Group>(null)
  const speed = useMemo(() => 0.02 + Math.random() * 0.06, []) // Random speed between 0.02 and 0.08
  
  useFrame((state) => {
    if (!group.current) return
    const t = ((state.clock.elapsedTime * speed) + offset) % 1
    const pos = curve.getPointAt(t)
    const nextPos = curve.getPointAt((t + 0.01) % 1)
    
    group.current.position.copy(pos)
    group.current.lookAt(nextPos)
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <PaperPlaneMesh color={color} />
      </Float>
    </group>
  )
}

export function AviationScene() {
  const curve1 = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-15, -5, 0),
    new THREE.Vector3(-5, 5, -5),
    new THREE.Vector3(5, -2, -10),
    new THREE.Vector3(15, 8, -5)
  ]), [])
  
  const curve2 = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 8, -8),
    new THREE.Vector3(-10, -3, -12),
    new THREE.Vector3(0, 6, -10),
    new THREE.Vector3(10, -5, -5),
    new THREE.Vector3(20, 5, 0)
  ]), [])

  const curve3 = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 10, -4),
    new THREE.Vector3(0, 2, -15),
    new THREE.Vector3(15, -6, -8),
    new THREE.Vector3(25, -2, -2)
  ]), [])

  const curve4 = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(20, -10, -6),
    new THREE.Vector3(5, -4, -12),
    new THREE.Vector3(-8, 8, -10),
    new THREE.Vector3(-25, 2, -4)
  ]), [])

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      
      <FlightPath curve={curve1} color="#0055ff" />
      <AnimatedPlane curve={curve1} color="#0055ff" offset={0} />
      <AnimatedPlane curve={curve1} color="#ffffff" offset={0.3} />
      
      <FlightPath curve={curve2} color="#ff6600" />
      <AnimatedPlane curve={curve2} color="#ff6600" offset={0.5} />
      <AnimatedPlane curve={curve2} color="#ffffff" offset={0.8} />
      
      <FlightPath curve={curve3} color="#00ccff" />
      <AnimatedPlane curve={curve3} color="#ffffff" offset={0.2} />
      <AnimatedPlane curve={curve3} color="#00ccff" offset={0.6} />

      <FlightPath curve={curve4} color="#ff3366" />
      <AnimatedPlane curve={curve4} color="#ffffff" offset={0.1} />
      <AnimatedPlane curve={curve4} color="#ff3366" offset={0.7} />
    </>
  )
}
