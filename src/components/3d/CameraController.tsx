"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CameraControllerProps = {
  activeModule: string | null;
  controlsRef: React.RefObject<any>;
};

const OVERVIEW = {
  position: [0, 6, 18] as [number, number, number],
  lookAt: [0, 1, 0] as [number, number, number],
};

const CAMERA_TARGETS: Record<
  string,
  {
    position: [number, number, number];
    lookAt: [number, number, number];
  }
> = {
  EMBEDDED: {
    position: [-8, 4.5, 7.5],
    lookAt: [-8, 0.3, -5],
  },

  "PCB LAB": {
    position: [-4, 4.2, 7.5],
    lookAt: [-4, 0.3, -5],
  },

  ROBOTICS: {
    position: [4, 4.2, 7.5],
    lookAt: [4, 0.3, -5],
  },

  UAV: {
    position: [8, 4.5, 7.5],
    lookAt: [8, 0.3, -5],
  },

  "AI / ML": {
    position: [-7, 5.0, 9.5],
    lookAt: [-7, 0.3, 4],
  },

  "R&D": {
    position: [7, 5.0, 9.5],
    lookAt: [7, 0.3, 4],
  },
};

function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function CameraController({
  activeModule,
  controlsRef,
}: CameraControllerProps) {
  const { camera } = useThree();

  const startPosition = useRef(
    new THREE.Vector3(...OVERVIEW.position)
  );

  const startLookAt = useRef(
    new THREE.Vector3(...OVERVIEW.lookAt)
  );

  const targetPosition = useRef(
    new THREE.Vector3(...OVERVIEW.position)
  );

  const targetLookAt = useRef(
    new THREE.Vector3(...OVERVIEW.lookAt)
  );

  const currentLookAt = useRef(
    new THREE.Vector3(...OVERVIEW.lookAt)
  );

  const transitionTime = useRef(1);

  useEffect(() => {
    const target = activeModule
      ? CAMERA_TARGETS[activeModule]
      : OVERVIEW;

    startPosition.current.copy(camera.position);

    if (controlsRef.current) {
      startLookAt.current.copy(controlsRef.current.target);
    } else {
      startLookAt.current.copy(currentLookAt.current);
    }

    targetPosition.current.set(...target.position);
    targetLookAt.current.set(...target.lookAt);

    transitionTime.current = 0;
  }, [activeModule, camera, controlsRef]);

  useFrame((_, delta) => {
    if (transitionTime.current >= 1) {
      // CameraController is completely hands-off now.
      // OrbitControls has full control.
      return;
    }

    transitionTime.current = Math.min(
      1,
      transitionTime.current + delta / 1.15
    );

    const eased = easeInOutCubic(transitionTime.current);

    camera.position.lerpVectors(
      startPosition.current,
      targetPosition.current,
      eased
    );

    currentLookAt.current.lerpVectors(
      startLookAt.current,
      targetLookAt.current,
      eased
    );

    if (controlsRef.current) {
      controlsRef.current.target.copy(
        currentLookAt.current
      );

      controlsRef.current.update();
    }
  });

  return null;
}