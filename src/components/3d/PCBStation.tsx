"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type PCBStationProps = {
  position?: [number, number, number];
  active?: boolean;
};

export default function PCBStation({
  position = [-4, -0.2, -5],
  active = false,
}: PCBStationProps) {
  const ledRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ledRef.current) return;

    const pulse =
      0.5 +
      Math.sin(state.clock.elapsedTime * 4) * 0.5;

    const material =
      ledRef.current.material as THREE.MeshBasicMaterial;

    material.opacity =
      active ? 0.5 + pulse * 0.5 : 0.25;
  });

  return (
    <group position={position}>

      {/* =====================================================
          WORKBENCH
      ===================================================== */}

      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[4.8, 0.35, 3]} />

        <meshStandardMaterial
          color="#111820"
          metalness={0.85}
          roughness={0.32}
        />
      </mesh>

      {/* FRONT EDGE */}

      <mesh position={[0, -0.45, 1.48]}>
        <boxGeometry args={[4.8, 0.12, 0.08]} />

        <meshBasicMaterial color="#1c5665" />
      </mesh>

      {/* =====================================================
          PCB
      ===================================================== */}

      <group
        rotation={[-0.08, 0, 0]}
        position={[0, -0.15, 0]}
      >

        {/* BOARD */}

        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.12, 2]} />

          <meshStandardMaterial
            color="#073b36"
            metalness={0.45}
            roughness={0.35}
          />
        </mesh>

        {/* PCB BORDER */}

        <mesh position={[0, 0.065, 0]}>
          <boxGeometry args={[3.05, 0.025, 1.85]} />

          <meshBasicMaterial color="#38a8a8" />
        </mesh>

        {/* =================================================
            STM32 MCU
        ================================================= */}

        <mesh position={[-0.45, 0.12, 0]}>
          <boxGeometry args={[0.7, 0.18, 0.7]} />

          <meshStandardMaterial
            color="#111111"
            metalness={0.75}
            roughness={0.28}
          />
        </mesh>

        {/* MCU PINS */}

        {[-0.3, -0.1, 0.1, 0.3].map(
          (x) => (
            <mesh
              key={`mcu-top-${x}`}
              position={[x - 0.45, 0.13, -0.43]}
            >
              <boxGeometry
                args={[0.035, 0.04, 0.18]}
              />

              <meshStandardMaterial
                color="#c7c7c7"
                metalness={0.9}
                roughness={0.2}
              />
            </mesh>
          )
        )}

        {/* =================================================
            SPI FLASH
        ================================================= */}

        <mesh position={[0.55, 0.12, -0.25]}>
          <boxGeometry args={[0.42, 0.16, 0.28]} />

          <meshStandardMaterial
            color="#161616"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* =================================================
            SDRAM
        ================================================= */}

        <mesh position={[0.65, 0.12, 0.25]}>
          <boxGeometry args={[0.55, 0.16, 0.42]} />

          <meshStandardMaterial
            color="#151515"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* =================================================
            ESP-12F
        ================================================= */}

        <mesh position={[-0.95, 0.13, 0.65]}>
          <boxGeometry args={[0.9, 0.18, 0.5]} />

          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.65}
            roughness={0.3}
          />
        </mesh>

        {/* ESP ANTENNA */}

        <mesh position={[-0.95, 0.24, 0.91]}>
          <boxGeometry args={[0.6, 0.025, 0.025]} />

          <meshBasicMaterial color="#8b8b8b" />
        </mesh>

        {/* =================================================
            CAPACITORS
        ================================================= */}

        {[
          [-1.15, 0.18, -0.65],
          [-0.85, 0.18, -0.65],
          [1.15, 0.18, -0.65],
          [1.25, 0.18, 0.65],
        ].map(([x, y, z], index) => (
          <mesh
            key={index}
            position={[x, y, z]}
          >
            <cylinderGeometry
              args={[0.09, 0.09, 0.2, 16]}
            />

            <meshStandardMaterial
              color="#c5c5c5"
              metalness={0.75}
              roughness={0.22}
            />
          </mesh>
        ))}

        {/* =================================================
            STATUS LED
        ================================================= */}

        <mesh
          ref={ledRef}
          position={[1.15, 0.16, 0]}
        >
          <sphereGeometry args={[0.07, 16, 16]} />

          <meshBasicMaterial
            color="#42d392"
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* =================================================
            CONNECTORS
        ================================================= */}

        <mesh position={[1.3, 0.14, -0.82]}>
          <boxGeometry args={[0.75, 0.22, 0.22]} />

          <meshStandardMaterial
            color="#202020"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        <mesh position={[1.3, 0.14, 0.82]}>
          <boxGeometry args={[0.75, 0.22, 0.22]} />

          <meshStandardMaterial
            color="#202020"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        {/* =================================================
            PCB GLOW
        ================================================= */}

        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[2.9, 0.01, 0.02]} />

          <meshBasicMaterial color="#38a8a8" />
        </mesh>

      </group>

      {/* =====================================================
          WORKBENCH LIGHT
      ===================================================== */}

      <pointLight
        position={[0, 1.5, 0]}
        intensity={active ? 2 : 0.7}
        distance={5}
        color="#38a8a8"
      />

    </group>
  );
}