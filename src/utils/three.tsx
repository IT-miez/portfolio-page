import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

// Model component
export function Model(props: ThreeElements['group']) {
  const gltf = useLoader(GLTFLoader, "/scene.gltf") // Update the path to your model
  return <primitive object={gltf.scene} {...props} />
}

// Model component
export function Model2(props: ThreeElements['group']) {
  const gltf = useLoader(GLTFLoader, "/linux_tux/scene.gltf") // Update the path to your model
  // Example scale factor, adjust as needed
  const scale = [0.05, 0.05, 0.05]; // Scale down by 50%
  
  // Example position, adjust as needed
  const position = [0, -2, -5]; // Move back on the z-axis

  return (
    <primitive 
      object={gltf.scene} 
      scale={scale} 
      position={position} 
      {...props} 
    />
  );
}