"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";

type InteractiveModuleProps = {
  position: [number, number, number];
  title: string;
  subtitle: string;
  color?: string;
  onClick?: () => void;
  active?: boolean;
};

export default function InteractiveModule({
  position,
  title,
  subtitle,
  color = "#4ca8c5",
  onClick,
  active = false,
}: InteractiveModuleProps) {
  const [hovered, setHovered] = useState(false);

  const highlighted = hovered || active;

  return (
    <group
      position={position}
      scale={active ? 1.06 : 1}
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
      {/* Main module */}
      <mesh castShadow>
        <boxGeometry args={[2.4, 1.6, 0.8]} />

        <meshStandardMaterial
          color={highlighted ? color : "#101820"}
          metalness={0.9}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={
            active ? 0.65 : hovered ? 0.8 : 0.12
          }
        />
      </mesh>

      {/* Front display */}
      <mesh position={[0, 0, 0.42]}>
        <boxGeometry args={[1.8, 0.8, 0.04]} />

        <meshStandardMaterial
          color="#020509"
          emissive={color}
          emissiveIntensity={
            active ? 1.5 : hovered ? 1.8 : 0.4
          }
        />
      </mesh>

      {/* Active status light */}
      {active && (
        <mesh position={[0, -0.52, 0.45]}>
          <boxGeometry args={[0.9, 0.025, 0.025]} />

          <meshBasicMaterial
            color={color}
          />
        </mesh>
      )}

      {/* Hover / active information */}
      {(hovered || active) && (
        <Html
          position={[0, 1.4, 0]}
          center
          distanceFactor={8}
        >
          <div
            style={{
              width: 220,
              padding: "12px 14px",
              background: "rgba(2,5,9,0.94)",
              border: `1px solid ${color}`,
              color: "#fff",
              fontFamily: "monospace",
              pointerEvents: "none",
              boxShadow: `0 0 30px ${color}55`,
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.25em",
                color,
              }}
            >
              {active ? "ACTIVE MODULE" : "SYSTEM MODULE"}
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