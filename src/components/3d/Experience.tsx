"use client";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import InteractiveModule from "./InteractiveModule";
import CameraController from "./CameraController";

type ExperienceProps = {
  onModuleSelect: (module: string) => void;
  activeModule?: string | null;
};

export default function Experience({
  onModuleSelect,
  activeModule,
}: ExperienceProps) {
  const controlsRef = useRef<any>(null);

  return (
    <>
      {/* ========================================================= */}
      {/* LIGHTING                                                  */}
      {/* ========================================================= */}

      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <pointLight
        position={[0, 4, 0]}
        intensity={1.2}
        distance={30}
        color="#4ca8c5"
      />

      {/* ========================================================= */}
      {/* ENVIRONMENT / FLOOR                                       */}
      {/* ========================================================= */}

      <color attach="background" args={["#030508"]} />

      <fog
        attach="fog"
        args={["#030508", 20, 55]}
      />

      {/* Main floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />

        <meshStandardMaterial
          color="#070b10"
          metalness={0.7}
          roughness={0.45}
        />
      </mesh>

      {/* ========================================================= */}
      {/* GRID                                                       */}
      {/* ========================================================= */}

      <gridHelper
        args={[40, 40, "#1b3a46", "#0b171d"]}
        position={[0, -0.98, 0]}
      />

      {/* ========================================================= */}
      {/* CENTRAL SYSTEM CORE                                       */}
      {/* ========================================================= */}

      <group position={[0, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[3.2, 2.2, 1.4]} />

          <meshStandardMaterial
            color="#101820"
            metalness={0.9}
            roughness={0.22}
            emissive="#163542"
            emissiveIntensity={0.3}
          />
        </mesh>

        <mesh position={[0, 0, 0.73]}>
          <boxGeometry args={[2.4, 1.2, 0.05]} />

          <meshStandardMaterial
            color="#020509"
            emissive="#4ca8c5"
            emissiveIntensity={1.2}
          />
        </mesh>

        <Text
          position={[0, 0, 0.79]}
          fontSize={0.24}
          color="#6de5ff"
          anchorX="center"
          anchorY="middle"
        >
          SYSTEM-01
        </Text>
      </group>

      {/* ========================================================= */}
      {/* ENGINEERING MODULES                                      */}
      {/* ========================================================= */}

      <InteractiveModule
        position={[-8, 0, -5]}
        title="EMBEDDED"
        subtitle="STM32 / ESP32 / FIRMWARE"
        color="#4ca8c5"
        active={activeModule === "EMBEDDED"}
        onClick={() => onModuleSelect("EMBEDDED")}
      />

      <InteractiveModule
        position={[-4, 0, -5]}
        title="PCB LAB"
        subtitle="HARDWARE / PCB / PROTOTYPING"
        color="#38a8a8"
        active={activeModule === "PCB LAB"}
        onClick={() => onModuleSelect("PCB LAB")}
      />

      <InteractiveModule
        position={[4, 0, -5]}
        title="ROBOTICS"
        subtitle="CONTROL / SENSORS / SYSTEMS"
        color="#315bff"
        active={activeModule === "ROBOTICS"}
        onClick={() => onModuleSelect("ROBOTICS")}
      />

      <InteractiveModule
        position={[8, 0, -5]}
        title="UAV"
        subtitle="DRONES / FLIGHT SYSTEMS"
        color="#7b61ff"
        active={activeModule === "UAV"}
        onClick={() => onModuleSelect("UAV")}
      />

      <InteractiveModule
        position={[-7, 0, 4]}
        title="AI / ML"
        subtitle="INTELLIGENCE / DATA / MODELS"
        color="#42d392"
        active={activeModule === "AI / ML"}
        onClick={() => onModuleSelect("AI / ML")}
      />

      <InteractiveModule
        position={[7, 0, 4]}
        title="R&D"
        subtitle="EXPERIMENTS / RESEARCH"
        color="#ff9f43"
        active={activeModule === "R&D"}
        onClick={() => onModuleSelect("R&D")}
      />

      {/* ========================================================= */}
      {/* CAMERA                                                     */}
      {/* ========================================================= */}

      <CameraController
        activeModule={activeModule ?? null}
        controlsRef={controlsRef}
      />

      {/* ========================================================= */}
      {/* ORBIT CONTROLS                                            */}
      {/* ========================================================= */}

      <OrbitControls
        ref={controlsRef}
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

