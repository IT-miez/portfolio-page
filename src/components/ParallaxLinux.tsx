import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import linuX from "/linux_tux/scene.gltf";

export function ParallaxLinux() {
    const modelRef = useRef<any>();
    const linux = useLoader(GLTFLoader, linuX);
    const [position, setPosition] = useState<[number, number, number]>([0, -2, -5]);

    // Spin animation
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.02; // Adjust speed
        }
    });

    // Parallax scrolling effect (moves in from left/right)
    const { posX } = useSpring({
        from: { posX: -10 },
        to: async (next) => {
            while (true) {
                await next({ posX: 10 });
                await next({ posX: -10 });
            }
        },
        config: { duration: 5000 },
        loop: true,
    });

    return (
        <animated.group position-x={posX}>
            <primitive ref={modelRef} object={linux.scene} scale={[0.05, 0.05, 0.05]} position={position} />
        </animated.group>
    );
}
