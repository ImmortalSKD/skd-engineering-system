"use client";

export default function WorldEnvironment() {
  return (
    <group>
      {/* =====================================================
          MAIN FLOOR
      ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />

        <meshStandardMaterial
          color="#05090d"
          metalness={0.8}
          roughness={0.4}
        />
      </mesh>

      {/* =====================================================
          FLOOR GRID
      ===================================================== */}

      <gridHelper
        args={[80, 80, "#1b3a46", "#071116"]}
        position={[0, -0.98, 0]}
      />

      {/* =====================================================
          BACK WALL
      ===================================================== */}

      <mesh position={[0, 7, -15]}>
        <boxGeometry args={[50, 16, 0.5]} />

        <meshStandardMaterial
          color="#060b10"
          metalness={0.7}
          roughness={0.5}
        />
      </mesh>

      {/* =====================================================
          LEFT WALL
      ===================================================== */}

      <mesh
        position={[-25, 7, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[30, 16, 0.5]} />

        <meshStandardMaterial
          color="#05090d"
          metalness={0.7}
          roughness={0.5}
        />
      </mesh>

      {/* =====================================================
          RIGHT WALL
      ===================================================== */}

      <mesh
        position={[25, 7, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[30, 16, 0.5]} />

        <meshStandardMaterial
          color="#05090d"
          metalness={0.7}
          roughness={0.5}
        />
      </mesh>

      {/* =====================================================
          CENTRAL PLATFORM
      ===================================================== */}

      <mesh
        position={[0, -0.72, 0]}
        receiveShadow
      >
        <cylinderGeometry
          args={[5, 5, 0.45, 64]}
        />

        <meshStandardMaterial
          color="#081018"
          metalness={0.95}
          roughness={0.25}
        />
      </mesh>

      {/* =====================================================
          CENTRAL PLATFORM OUTER RING
      ===================================================== */}

      <mesh position={[0, -0.47, 0]}>
        <torusGeometry
          args={[4.5, 0.035, 16, 96]}
        />

        <meshBasicMaterial color="#4ca8c5" />
      </mesh>

      {/* =====================================================
          CENTRAL PLATFORM INNER RING
      ===================================================== */}

      <mesh position={[0, -0.45, 0]}>
        <torusGeometry
          args={[3.5, 0.02, 12, 64]}
        />

        <meshBasicMaterial color="#1d5262" />
      </mesh>

      {/* =====================================================
          CEILING LIGHT BARS
      ===================================================== */}

      {[-10, 0, 10].map((x) => (
        <mesh
          key={x}
          position={[x, 11, -5]}
        >
          <boxGeometry
            args={[7, 0.08, 0.18]}
          />

          <meshBasicMaterial color="#4ca8c5" />
        </mesh>
      ))}

      {/* =====================================================
          VERTICAL LIGHT COLUMNS
      ===================================================== */}

      {[-12, 12].map((x) => (
        <group key={x}>
          <mesh
            position={[x, 4, -10]}
          >
            <boxGeometry
              args={[0.12, 8, 0.12]}
            />

            <meshBasicMaterial color="#38a8a8" />
          </mesh>

          <pointLight
            position={[x, 4, -9]}
            intensity={1.2}
            distance={12}
            color="#38a8a8"
          />
        </group>
      ))}

      {/* =====================================================
          FLOOR LIGHT STRIPS
      ===================================================== */}

      {[-12, -6, 0, 6, 12].map((x) => (
        <mesh
          key={x}
          position={[x, -0.94, -10]}
        >
          <boxGeometry
            args={[3, 0.025, 0.04]}
          />

          <meshBasicMaterial color="#1d5262" />
        </mesh>
      ))}
    </group>
  );
}