import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader, Vector3 } from '@react-three/fiber'
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

interface ModelProps {
  gltf: any;
  scale?: Vector3;
}

// Model component
export function Model({ 
  gltf, 
  scale=[1, 1, 1], 
  position=[0, 0, 0],
  rotation = [0, 0, 0] 
}: any) {
  
 return (
    <primitive 
      object={gltf.scene} 
      scale={scale} 
      position={position}
      rotation={rotation}  
    />
  );
}

export function ModelRotating({ 
  gltf, 
  scale = [1, 1, 1], 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) {
  const ref = useRef();

  // Use useFrame to update the rotation on each frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive 
      ref={ref}
      object={gltf.scene} 
      scale={scale} 
      position={position} 
      rotation={rotation} 
    />
  );
}
