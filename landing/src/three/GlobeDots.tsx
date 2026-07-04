import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** Instanced dotted globe — one draw call for ~900 points (fibonacci sphere). */
export function GlobeDots({ count = 900, radius = 9 }: { count?: number; radius?: number }) {
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const groupRef = useMemo(() => ({ current: null as THREE.InstancedMesh | null }), [])

  const positions = useMemo(() => {
    const arr: THREE.Vector3[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      arr.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius))
    }
    return arr
  }, [count, radius])

  const setRef = (mesh: THREE.InstancedMesh | null) => {
    groupRef.current = mesh
    if (!mesh) return
    positions.forEach((p, i) => {
      dummy.position.copy(p)
      dummy.scale.setScalar(0.5 + Math.random() * 0.8)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    mesh.instanceMatrix.needsUpdate = true
  }

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.035
  })

  return (
    <instancedMesh ref={setRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[0.05, 6, 6]} />
      <meshBasicMaterial color="#5b8cff" transparent opacity={0.5} />
    </instancedMesh>
  )
}
