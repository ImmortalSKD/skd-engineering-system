"use client";

import { useRef } from "react";
import * as THREE from "three";

import PCBStation from "./PCBStation";
import SystemCore from "./SystemCore";
import SystemAtmosphere from "./SystemAtmosphere";
import ModuleLight from "./ModuleLight";
import InteractiveModule from "./InteractiveModule";
import WorldEnvironment from "./WorldEnvironment";

type WorldProps = {
  activeModule: string | null;
  onModuleSelect: (module: string) => void;
};

export default function World({
  activeModule,
  onModuleSelect,
}: WorldProps) {
  const worldRef = useRef<THREE.Group>(null);

  return (
    <group ref={worldRef}>

      {/* =====================================================
          3D WORLD ENVIRONMENT
          ===================================================== */}

      <WorldEnvironment />

      {/* =====================================================
          PCB WORKSTATION
          ===================================================== */}

      <PCBStation
        position={[-4, -0.2, -5]}
        active={activeModule === "PCB LAB"}
      />

      {/* =====================================================
          CENTRAL SYSTEM
          ===================================================== */}

      <SystemCore />
      <SystemAtmosphere />

      {/* =====================================================
          EMBEDDED
          ===================================================== */}

      <ModuleLight
        position={[-8, 1.5, -5]}
        color="#4ca8c5"
        active={activeModule === "EMBEDDED"}
      />

      <InteractiveModule
        position={[-8, 0, -5]}
        title="EMBEDDED"
        subtitle="STM32 / ESP32 / FIRMWARE"
        color="#4ca8c5"
        active={activeModule === "EMBEDDED"}
        onClick={() => onModuleSelect("EMBEDDED")}
      />

      {/* =====================================================
          PCB LAB
          ===================================================== */}

      <ModuleLight
        position={[-4, 1.5, -5]}
        color="#38a8a8"
        active={activeModule === "PCB LAB"}
      />

      <InteractiveModule
        position={[-4, 0, -5]}
        title="PCB LAB"
        subtitle="HARDWARE / PCB / PROTOTYPING"
        color="#38a8a8"
        active={activeModule === "PCB LAB"}
        onClick={() => onModuleSelect("PCB LAB")}
      />

      {/* =====================================================
          ROBOTICS
          ===================================================== */}

      <ModuleLight
        position={[4, 1.5, -5]}
        color="#315bff"
        active={activeModule === "ROBOTICS"}
      />

      <InteractiveModule
        position={[4, 0, -5]}
        title="ROBOTICS"
        subtitle="CONTROL / SENSORS / SYSTEMS"
        color="#315bff"
        active={activeModule === "ROBOTICS"}
        onClick={() => onModuleSelect("ROBOTICS")}
      />

      {/* =====================================================
          UAV
          ===================================================== */}

      <ModuleLight
        position={[8, 1.5, -5]}
        color="#7b61ff"
        active={activeModule === "UAV"}
      />

      <InteractiveModule
        position={[8, 0, -5]}
        title="UAV"
        subtitle="DRONES / FLIGHT SYSTEMS"
        color="#7b61ff"
        active={activeModule === "UAV"}
        onClick={() => onModuleSelect("UAV")}
      />

      {/* =====================================================
          AI / ML
          ===================================================== */}

      <ModuleLight
        position={[-7, 1.5, 4]}
        color="#42d392"
        active={activeModule === "AI / ML"}
      />

      <InteractiveModule
        position={[-7, 0, 4]}
        title="AI / ML"
        subtitle="INTELLIGENCE / DATA / MODELS"
        color="#42d392"
        active={activeModule === "AI / ML"}
        onClick={() => onModuleSelect("AI / ML")}
      />

      {/* =====================================================
          R&D
          ===================================================== */}

      <ModuleLight
        position={[7, 1.5, 4]}
        color="#ff9f43"
        active={activeModule === "R&D"}
      />

      <InteractiveModule
        position={[7, 0, 4]}
        title="R&D"
        subtitle="EXPERIMENTS / RESEARCH"
        color="#ff9f43"
        active={activeModule === "R&D"}
        onClick={() => onModuleSelect("R&D")}
      />

    </group>
  );
}