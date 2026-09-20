"use client";

import { Canvas as R3FCanvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";

import Experience from "./Experience";

type SceneCanvasProps = {
  onModuleSelect: (module: string) => void;
  activeModule: string | null;
};

export default function SceneCanvas({
  onModuleSelect,
  activeModule,
}: SceneCanvasProps) {
  return (
    <R3FCanvas
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.15,
      }}
      camera={{
        position: [0, 6, 18],
        fov: 55,
        near: 0.1,
        far: 500,
      }}
    >
      <Experience
        onModuleSelect={onModuleSelect}
        activeModule={activeModule}
      />
    </R3FCanvas>
  );
}