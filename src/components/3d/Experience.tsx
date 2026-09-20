"use client";
import SystemAtmosphere from "./SystemAtmosphere";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

import InteractiveModule from "./InteractiveModule";
import CameraController from "./CameraController";
import ModuleLight from "./ModuleLight";
import SystemCore from "./SystemCore";

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
      {/* ENVIRONMENT */}

      <color attach="background" args={["#030508"]} />

      <fog
        attach="fog"
        args={["#030508", 20, 55]}
      />

      {/* LIGHTING */}

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

      {/* FLOOR */}

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

      {/* ENGINEERING GRID */}

      <gridHelper
        args={[40, 40, "#1b3a46", "#0b171d"]}
        position={[0, -0.98, 0]}
      />

     {/* SYSTEM-01 CENTRAL CORE */}

<SystemCore />

{/* HOLOGRAPHIC ATMOSPHERE */}

<SystemAtmosphere />
      {/* MODULE LIGHTING */}

      <ModuleLight
        position={[-8, 1.5, -4.2]}
        color="#4ca8c5"
        active={activeModule === "EMBEDDED"}
      />

      <ModuleLight
        position={[-4, 1.5, -4.2]}
        color="#38a8a8"
        active={activeModule === "PCB LAB"}
      />

      <ModuleLight
        position={[4, 1.5, -4.2]}
        color="#315bff"
        active={activeModule === "ROBOTICS"}
      />

      <ModuleLight
        position={[8, 1.5, -4.2]}
        color="#7b61ff"
        active={activeModule === "UAV"}
      />

      <ModuleLight
        position={[-7, 1.5, 4.8]}
        color="#42d392"
        active={activeModule === "AI / ML"}
      />

      <ModuleLight
        position={[7, 1.5, 4.8]}
        color="#ff9f43"
        active={activeModule === "R&D"}
      />

      {/* ENGINEERING MODULES */}

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

      {/* CAMERA CONTROLLER */}

      <CameraController
        activeModule={activeModule ?? null}
        controlsRef={controlsRef}
      />

      {/* ORBIT CONTROLS */}

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