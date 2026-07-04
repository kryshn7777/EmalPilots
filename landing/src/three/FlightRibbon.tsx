import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Soft body glow + a bright "comet" head that travels along the ribbon.
const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  void main() {
    float body = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.88, 1.0, vUv.x));
    float head = fract(uTime * 0.12);
    float d = abs(vUv.x - head);
    float glow = smoothstep(0.14, 0.0, d);
    vec3 col = mix(uColorA, uColorB, vUv.x);
    float alpha = body * 0.30 + glow * 0.95;
    gl_FragColor = vec4(col + glow * 0.7, alpha);
  }
`

export function FlightRibbon() {
  const planeRef = useRef<THREE.Group>(null!)

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-13, -5.5, 2),
        new THREE.Vector3(-6.5, -3.5, -2.5),
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(7, 3.4, -2.5),
        new THREE.Vector3(13, 6.2, 2),
      ]),
    [],
  )

  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 180, 0.055, 8, false), [curve])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#3b82f6') },
      uColorB: { value: new THREE.Color('#bcd4ff') },
    }),
    [],
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    uniforms.uTime.value = t
    const at = (t * 0.12) % 1
    const p = curve.getPointAt(at)
    const tan = curve.getTangentAt(at)
    if (planeRef.current) {
      planeRef.current.position.copy(p)
      planeRef.current.lookAt(p.clone().add(tan))
    }
  })

  return (
    <group>
      <mesh geometry={geometry}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <group ref={planeRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.16, 0.55, 4]} />
          <meshStandardMaterial color="#eaf2ff" emissive="#5b8cff" emissiveIntensity={0.6} metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </group>
  )
}
