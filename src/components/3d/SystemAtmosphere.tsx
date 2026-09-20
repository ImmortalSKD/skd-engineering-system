"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SystemAtmosphere() {
  const particlesRef = useRef<THREE.Points>(null);
  const scanRef = useRef<THREE.Mesh>(null);
  const gridRef = useRef<THREE.Mesh>(null);

  const particleCount = 500;

  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] =
      (Math.random() - 0.5) * 35;

    positions[i * 3 + 1] =
      Math.random() * 12 - 1;

    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 35;
  }

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (particlesRef.current) {
      particlesRef.current.rotation.y =
        t * 0.015;

      particlesRef.current.rotation.x =
        Math.sin(t * 0.1) * 0.02;
    }

    if (scanRef.current) {
      scanRef.current.position.y =
        -0.8 + ((t * 0.45) % 5);

      const material =
        scanRef.current.material as THREE.MeshBasicMaterial;

      material.opacity =
        0.12 +
        Math.sin(t * 2) * 0.04;
    }

    if (gridRef.current) {
      const material =
        gridRef.current.material as THREE.MeshBasicMaterial;

      material.opacity =
        0.12 +
        Math.sin(t * 1.4) * 0.025;
    }
  });

  return (
    <group>

      {/* ================================================= */}
      {/* AMBIENT PARTICLES                                */}
      {/* ================================================= */}

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#4ca8c5"
          size={0.035}
          transparent
          opacity={0.55}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* ================================================= */}
      {/* CENTRAL HOLOGRAPHIC PLATFORM                     */}
      {/* ================================================= */}

      <mesh
        ref={gridRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.93, 0]}
      >
        <planeGeometry args={[18, 18]} />

        <meshBasicMaterial
          color="#1b6070"
          transparent
          opacity={0.12}
          wireframe
          depthWrite={false}
        />
      </mesh>

      {/* ================================================= */}
      {/* SCANNING BEAM                                    */}
      {/* ================================================= */}

      <mesh
        ref={scanRef}
        position={[0, -0.8, 0]}
        rotation={[0, 0, 0]}
      >
        <planeGeometry args={[22, 0.025]} />

        <meshBasicMaterial
          color="#6de5ff"
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

    </group>
  );
}