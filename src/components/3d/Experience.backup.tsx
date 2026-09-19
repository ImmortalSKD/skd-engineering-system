"use client";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import InteractiveModule from "./InteractiveModule";

function LightStrip({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[8, 0.08, 0.08]} />
      <meshStandardMaterial
        color="#8fb8c8"
        emissive="#4c9bb8"
        emissiveIntensity={3}
        metalness={0.4}
        roughness={0.25}
      />
    </mesh>
  );
}

function WallPanel({
  position,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[4, 3, 0.15]} />
      <meshStandardMaterial
        color="#111820"
        metalness={0.9}
        roughness={0.3}
      />
    </mesh>
  );
}

function FacilityStructure() {
  return (
    <group>
      {/* FLOOR */}
      <mesh position={[0, -2, 0]} receiveShadow>
        <boxGeometry args={[42, 1, 42]} />
        <meshStandardMaterial
          color="#0b1117"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* CENTRAL PLATFORM */}
      <mesh position={[0, -1.35, 0]} receiveShadow>
        <cylinderGeometry args={[5, 5.5, 0.6, 64]} />
        <meshStandardMaterial
          color="#151e27"
          metalness={0.95}
          roughness={0.22}
        />
      </mesh>

      {/* REAR WALL */}
      <mesh position={[0, 4, -15]} receiveShadow>
        <boxGeometry args={[34, 12, 1]} />
        <meshStandardMaterial
          color="#080d12"
          metalness={0.85}
          roughness={0.38}
        />
      </mesh>

      {/* SIDE WALLS */}
      <mesh position={[-17, 4, 0]} receiveShadow>
        <boxGeometry args={[1, 12, 32]} />
        <meshStandardMaterial
          color="#080d12"
          metalness={0.85}
          roughness={0.38}
        />
      </mesh>

      <mesh position={[17, 4, 0]} receiveShadow>
        <boxGeometry args={[1, 12, 32]} />
        <meshStandardMaterial
          color="#080d12"
          metalness={0.85}
          roughness={0.38}
        />
      </mesh>

      {/* CEILING BEAMS */}
      {[-12, -6, 0, 6, 12].map((x) => (
        <mesh key={x} position={[x, 9, 0]}>
          <boxGeometry args={[0.35, 0.35, 30]} />
          <meshStandardMaterial
            color="#1a242d"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* FLOOR LIGHTS */}
      <LightStrip position={[-8, -1.45, 0]} />
      <LightStrip position={[8, -1.45, 0]} />

      <LightStrip
        position={[0, -1.45, -8]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <LightStrip
        position={[0, -1.45, 8]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* REAR PANELS */}
      <WallPanel position={[-8, 3, -14.4]} />
      <WallPanel position={[0, 3, -14.4]} />
      <WallPanel position={[8, 3, -14.4]} />

      {/* SIDE LIGHTS */}
      <LightStrip
        position={[-16.4, 3, -8]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
        scale={[0.6, 1, 1]}
      />

      <LightStrip
        position={[16.4, 3, -8]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
        scale={[0.6, 1, 1]}
      />
    </group>
  );
}

/* ------------------------------------------------ */
/* SYSTEM CORE                                      */
/* ------------------------------------------------ */

function SystemCore() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.35;
  });

  return (
    <group position={[0, 1, 0]}>
      <mesh>
        <cylinderGeometry args={[1.35, 1.35, 3.5, 48]} />
        <meshStandardMaterial
          color="#101820"
          emissive="#176078"
          emissiveIntensity={2}
          metalness={0.75}
          roughness={0.18}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* CORE RINGS */}
      <group ref={group}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.9, 0.045, 12, 96]} />
          <meshStandardMaterial
            color="#4ca8c5"
            emissive="#4ca8c5"
            emissiveIntensity={5}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.3, 0.025, 12, 96]} />
          <meshStandardMaterial
            color="#315bff"
            emissive="#315bff"
            emissiveIntensity={4}
          />
        </mesh>
      </group>

      {/* CORE LIGHT */}
      <pointLight
        position={[0, 0, 0]}
        intensity={15}
        distance={7}
        color="#4ca8c5"
      />

      <Text
        position={[0, 2.7, 0]}
        fontSize={0.35}
        color="#8fd7ed"
        anchorX="center"
        anchorY="middle"
      >
        SYSTEM-01
      </Text>

      <Text
        position={[0, 2.25, 0]}
        fontSize={0.16}
        color="#ffffff"
        fillOpacity={0.5}
        anchorX="center"
        anchorY="middle"
      >
        ENGINEERING CORE
      </Text>
    </group>
  );
}

/* ------------------------------------------------ */
/* EXPERIENCE                                      */
/* ------------------------------------------------ */

type ExperienceProps = {
  onModuleSelect: (module: string) => void;
};

export default function Experience({
  onModuleSelect,
}: ExperienceProps) {
  
  return (
    <>
      <color attach="background" args={["#020509"]} />

      <fog attach="fog" args={["#020509", 18, 55]} />

      {/* LIGHTING */}
      <ambientLight intensity={0.18} />

      <directionalLight
        position={[8, 14, 8]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <pointLight
        position={[0, 5, 0]}
        intensity={25}
        distance={18}
        color="#4ca8c5"
      />

      <pointLight
        position={[-12, 4, -8]}
        intensity={12}
        distance={15}
        color="#315bff"
      />

      <pointLight
        position={[12, 4, -8]}
        intensity={12}
        distance={15}
        color="#38a8a8"
      />

      {/* ENVIRONMENT */}
      <FacilityStructure />

      {/* CORE */}
      <SystemCore />

      {/* MODULES */}

      <InteractiveModule
        position={[-8, 0, -5]}
        title="EMBEDDED"
        subtitle="STM32 / ESP32 / FIRMWARE"
        color="#4ca8c5"
        onClick={() => onModuleSelect("EMBEDDED")}
      />

      <InteractiveModule
        position={[-4, 0, -5]}
        title="PCB LAB"
        subtitle="HARDWARE / PCB / PROTOTYPING"
        color="#38a8a8"
        onClick={() => onModuleSelect("PCB LAB")}
      />

      <InteractiveModule
        position={[4, 0, -5]}
        title="ROBOTICS"
        subtitle="CONTROL / SENSORS / SYSTEMS"
        color="#315bff"
        onClick={() => onModuleSelect("ROBOTICS")}
      />

      <InteractiveModule
        position={[8, 0, -5]}
        title="UAV"
        subtitle="DRONES / FLIGHT SYSTEMS"
        color="#7b61ff"
        onClick={() => onModuleSelect("UAV")}
      />

      <InteractiveModule
        position={[-7, 0, 4]}
        title="AI / ML"
        subtitle="INTELLIGENCE / DATA / MODELS"
        color="#42d392"
        onClick={() => onModuleSelect("AI / ML")}
      />

      <InteractiveModule
        position={[7, 0, 4]}
        title="R&D"
        subtitle="EXPERIMENTS / RESEARCH"
        color="#ff9f43"
        onClick={() => onModuleSelect("R&D")}
      />



      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        minDistance={5}
        maxDistance={40}
        maxPolarAngle={Math.PI * 0.48}
        minPolarAngle={Math.PI * 0.22}
      />
    </>
  );
}



