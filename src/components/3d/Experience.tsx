"use client";

import { OrbitControls } from "@react-three/drei";

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
      {/* Floor */}
      <mesh position={[0, -2, 0]} receiveShadow>
        <boxGeometry args={[42, 1, 42]} />
        <meshStandardMaterial
          color="#0b1117"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* Central platform */}
      <mesh position={[0, -1.35, 0]} receiveShadow>
        <cylinderGeometry args={[5, 5.5, 0.6, 64]} />
        <meshStandardMaterial
          color="#151e27"
          metalness={0.95}
          roughness={0.22}
        />
      </mesh>

      {/* Central glowing core */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[1.4, 1.4, 3.5, 48]} />
        <meshStandardMaterial
          color="#101820"
          emissive="#176078"
          emissiveIntensity={1.8}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Rear wall */}
      <mesh position={[0, 4, -15]} receiveShadow>
        <boxGeometry args={[34, 12, 1]} />
        <meshStandardMaterial
          color="#080d12"
          metalness={0.85}
          roughness={0.38}
        />
      </mesh>

      {/* Side walls */}
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

      {/* Ceiling beams */}
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

      {/* Floor engineering strips */}
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

      {/* Wall panels */}
      <WallPanel position={[-8, 3, -14.4]} />
      <WallPanel position={[0, 3, -14.4]} />
      <WallPanel position={[8, 3, -14.4]} />

      {/* Vertical wall lights */}
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

function EquipmentBay() {
  return (
    <group>
      {/* Left equipment consoles */}
      {[0, 1, 2].map((i) => (
        <group key={i} position={[-10 + i * 3, 0, -5]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.2, 2.5, 1.2]} />
            <meshStandardMaterial
              color="#151d25"
              metalness={0.8}
              roughness={0.32}
            />
          </mesh>

          <mesh position={[0, 0.45, -0.63]}>
            <boxGeometry args={[1.5, 0.7, 0.04]} />
            <meshStandardMaterial
              color="#071014"
              emissive="#164b5a"
              emissiveIntensity={1.5}
              metalness={0.4}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* Right equipment towers */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[10, 0.5 + i * 2, -6]}
          castShadow
        >
          <boxGeometry args={[2, 1.2, 2]} />
          <meshStandardMaterial
            color="#121a21"
            metalness={0.85}
            roughness={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#020509"]} />

      <fog attach="fog" args={["#020509", 18, 55]} />

      {/* Base illumination */}
      <ambientLight intensity={0.18} />

      {/* Main facility light */}
      <directionalLight
        position={[8, 14, 8]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Engineering lights */}
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

      <FacilityStructure />
      <EquipmentBay />

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