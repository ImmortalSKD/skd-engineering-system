"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SystemCore() {
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const ringC = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (ringA.current) {
      ringA.current.rotation.z = t * 0.35;
      ringA.current.rotation.x =
        Math.sin(t * 0.4) * 0.15;
    }

    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.55;
      ringB.current.rotation.y =
        Math.sin(t * 0.3) * 0.12;
    }

    if (ringC.current) {
      ringC.current.rotation.z = t * 0.9;
    }

    if (core.current) {
      const pulse =
        1 + Math.sin(t * 2.5) * 0.025;

      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={[0, 0, 0]}>

      {/* CORE BODY */}
      <mesh castShadow>
        <boxGeometry args={[3.2, 2.2, 1.4]} />

        <meshStandardMaterial
          color="#101820"
          metalness={0.95}
          roughness={0.2}
          emissive="#163542"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* ENERGY CORE */}
      <mesh
        ref={core}
        position={[0, 0, 0.76]}
      >
        <boxGeometry args={[2.35, 1.15, 0.06]} />

        <meshStandardMaterial
          color="#020509"
          emissive="#4ca8c5"
          emissiveIntensity={2}
          metalness={0.4}
          roughness={0.15}
        />
      </mesh>

      {/* INNER CORE */}
      <mesh position={[0, 0, 0.81]}>
        <planeGeometry args={[1.7, 0.55]} />

        <meshBasicMaterial
          color="#07151b"
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* ROTATING RINGS */}

      <mesh
        ref={ringA}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[2.25, 0.025, 8, 64]} />

        <meshBasicMaterial
          color="#4ca8c5"
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh
        ref={ringB}
        rotation={[Math.PI / 2.5, 0, 0]}
      >
        <torusGeometry args={[2.55, 0.018, 8, 64]} />

        <meshBasicMaterial
          color="#38a8a8"
          transparent
          opacity={0.4}
        />
      </mesh>

      <mesh
        ref={ringC}
        rotation={[Math.PI / 3, 0, 0]}
      >
        <torusGeometry args={[2.85, 0.012, 8, 64]} />

        <meshBasicMaterial
          color="#6de5ff"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* SYSTEM LABEL */}

      <Text
        position={[0, 0, 0.86]}
        fontSize={0.24}
        color="#6de5ff"
        anchorX="center"
        anchorY="middle"
      >
        SYSTEM-01
      </Text>

      {/* STATUS LABEL */}

      <Text
        position={[0, -0.38, 0.86]}
        fontSize={0.075}
        color="#4ca8c5"
        anchorX="center"
        anchorY="middle"
      >
        ENGINEERING R&D CORE // ONLINE
      </Text>

    </group>
  );
}