"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";

type InteractiveModuleProps = {
  position: [number, number, number];
  title: string;
  subtitle: string;
  color?: string;
  onClick?: () => void;
};

export default function InteractiveModule({
  position,
  title,
  subtitle,
  color = "#4ca8c5",
  onClick,
}: InteractiveModuleProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <mesh castShadow>
        <boxGeometry args={[2.4, 1.6, 0.8]} />
        <meshStandardMaterial
          color={hovered ? color : "#101820"}
          metalness={0.9}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.12}
        />
      </mesh>

      <mesh position={[0, 0, 0.42]}>
        <boxGeometry args={[1.8, 0.8, 0.04]} />
        <meshStandardMaterial
          color="#020509"
          emissive={color}
          emissiveIntensity={hovered ? 1.8 : 0.4}
        />
      </mesh>

      {hovered && (
        <Html
          position={[0, 1.4, 0]}
          center
          distanceFactor={8}
        >
          <div
            style={{
              width: 220,
              padding: "12px 14px",
              background: "rgba(2,5,9,0.92)",
              border: `1px solid ${color}`,
              color: "#fff",
              fontFamily: "monospace",
              pointerEvents: "none",
              boxShadow: `0 0 25px ${color}55`,
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.25em",
                color,
              }}
            >
              SYSTEM MODULE
            </div>

            <div
              style={{
                marginTop: 6,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              {title}
            </div>

            <div
              style={{
                marginTop: 4,
                fontSize: 10,
                opacity: 0.55,
                letterSpacing: "0.12em",
              }}
            >
              {subtitle}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}
