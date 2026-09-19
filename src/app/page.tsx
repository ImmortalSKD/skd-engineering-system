"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(
  () => import("@/components/3d/Canvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-[#030508] font-mono text-sm tracking-[0.3em] text-white">
        INITIALIZING SYSTEM-01...
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#030508]">
      <SceneCanvas />

      <div className="pointer-events-none absolute left-6 top-6 z-10 font-mono text-xs tracking-[0.3em] text-white/60">
        SYSTEM-01 // ENGINEERING FACILITY
      </div>

      <div className="pointer-events-none absolute bottom-6 left-6 z-10 font-mono text-[10px] tracking-[0.2em] text-white/40">
        SAYAN KUMAR DAKUA // ECE // R&amp;D SYSTEM
      </div>
    </main>
  );
}