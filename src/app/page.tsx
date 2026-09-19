"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SystemHUD from "@/components/SystemHUD";

const SceneCanvas = dynamic(
  () => import("@/components/3d/Canvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-[#030508] font-mono text-sm tracking-[0.3em] text-cyan-300">
        INITIALIZING SYSTEM-01...
      </div>
    ),
  }
);

export default function Home() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#030508]">
      <SceneCanvas onModuleSelect={setActiveModule} />

      <SystemHUD activeModule={activeModule} />
    </main>
  );
}
