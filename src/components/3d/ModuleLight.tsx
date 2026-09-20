"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ModuleLightProps = {
  position: [number, number, number];
  color: string;
  active?: boolean;
};

export default function ModuleLight({
  position,
  color,
  active = false,
}: ModuleLightProps) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;

    const pulse = Math.sin(clock.elapsedTime * 2.2) * 0.08;

    lightRef.current.intensity = active
      ? 2.2 + pulse
      : 0.35 + pulse * 0.25;
  });

  return (
    <pointLight
      ref={lightRef}
      position={position}
      color={color}
      distance={7}
      decay={2}
      intensity={active ? 2.2 : 0.35}
    />
  );
}