"use client";

import { useEffect, useState } from "react";

type SystemHUDProps = {
  activeModule: string | null;
};

const moduleData: Record<
  string,
  {
    subtitle: string;
    domain: string;
    projects: string;
    color: string;
  }
> = {
  EMBEDDED: {
    subtitle: "STM32 / ESP32 / FIRMWARE",
    domain: "EMBEDDED SYSTEMS",
    projects: "04",
    color: "#4ca8c5",
  },

  "PCB LAB": {
    subtitle: "HARDWARE / PCB / PROTOTYPING",
    domain: "ELECTRONICS R&D",
    projects: "03",
    color: "#38a8a8",
  },

  ROBOTICS: {
    subtitle: "CONTROL / SENSORS / SYSTEMS",
    domain: "ROBOTICS ENGINEERING",
    projects: "03",
    color: "#315bff",
  },

  UAV: {
    subtitle: "DRONES / FLIGHT SYSTEMS",
    domain: "AERIAL SYSTEMS",
    projects: "02",
    color: "#7b61ff",
  },

  "AI / ML": {
    subtitle: "INTELLIGENCE / DATA / MODELS",
    domain: "ARTIFICIAL INTELLIGENCE",
    projects: "03",
    color: "#42d392",
  },

  "R&D": {
    subtitle: "EXPERIMENTS / RESEARCH",
    domain: "RESEARCH & DEVELOPMENT",
    projects: "05",
    color: "#ff9f43",
  },
};

export default function SystemHUD({
  activeModule,
}: SystemHUDProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  const activeModuleData = activeModule
    ? moduleData[activeModule]
    : null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 select-none font-mono text-white">

      {/* TOP LEFT */}

      <div className="absolute left-6 top-6">
        <div className="flex items-center gap-3">

          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

          <div>
            <div className="text-[11px] tracking-[0.35em] text-cyan-300">
              SYSTEM-01
            </div>

            <div className="mt-1 text-[9px] tracking-[0.25em] text-white/40">
              ENGINEERING FACILITY
            </div>
          </div>

        </div>
      </div>


      {/* TOP RIGHT */}

      <div className="absolute right-6 top-6 text-right">

        <div className="text-[10px] tracking-[0.3em] text-white/40">
          SYSTEM TIME
        </div>

        <div className="mt-1 text-sm tracking-[0.2em] text-cyan-200">
          {time || "--:--:--"}
        </div>

        <div className="mt-1 text-[8px] tracking-[0.25em] text-white/30">
          IST // ONLINE
        </div>

      </div>


      {/* LEFT STATUS PANEL */}

      <div className="absolute bottom-20 left-6 w-52 border border-white/10 bg-black/40 p-4 backdrop-blur-md">

        <div className="mb-3 border-b border-white/10 pb-2 text-[9px] tracking-[0.3em] text-cyan-300">
          SYSTEM STATUS
        </div>

        <div className="space-y-2 text-[9px] tracking-[0.15em]">

          <StatusRow label="CORE" value="ONLINE" />
          <StatusRow label="RENDER" value="STABLE" />
          <StatusRow label="R&D" value="ACTIVE" />
          <StatusRow label="NETWORK" value="READY" />

        </div>

      </div>


      {/* ACTIVE MODULE */}

      <div
        className="absolute bottom-20 right-6 w-64 border bg-black/50 p-4 backdrop-blur-md transition-all duration-300"
        style={{
          borderColor: activeModuleData
            ? `${activeModuleData.color}88`
            : "rgba(255,255,255,0.1)",
          boxShadow: activeModuleData
            ? `0 0 30px ${activeModuleData.color}22`
            : "none",
        }}
      >

        <div
          className="mb-3 border-b border-white/10 pb-2 text-[9px] tracking-[0.3em]"
          style={{
            color: activeModuleData?.color || "#22d3ee",
          }}
        >
          ACTIVE MODULE
        </div>

        {!activeModuleData ? (
          <>
            <div className="text-sm tracking-[0.2em] text-white/70">
              SYSTEM CORE
            </div>

            <div className="mt-2 text-[8px] tracking-[0.2em] text-white/30">
              SELECT A MODULE
            </div>
          </>
        ) : (
          <>
            <div
              className="text-xl font-bold tracking-[0.15em]"
              style={{ color: activeModuleData.color }}
            >
              {activeModule}
            </div>

            <div className="mt-2 text-[9px] tracking-[0.16em] text-white/50">
              {activeModuleData.subtitle}
            </div>

            <div className="mt-4 space-y-2 text-[9px]">

              <div className="flex justify-between">
                <span className="text-white/35">
                  DOMAIN
                </span>

                <span className="text-white/80">
                  {activeModuleData.domain}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/35">
                  PROJECTS
                </span>

                <span style={{ color: activeModuleData.color }}>
                  {activeModuleData.projects}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/35">
                  STATUS
                </span>

                <span className="flex items-center gap-2 text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  ACTIVE
                </span>
              </div>

            </div>
          </>
        )}

      </div>


      {/* IDENTITY */}

      <div className="absolute bottom-6 left-6">

        <div className="text-[9px] tracking-[0.25em] text-white/50">
          SAYAN KUMAR DAKUA
        </div>

        <div className="mt-1 text-[8px] tracking-[0.2em] text-white/25">
          ECE // R&D SYSTEM // 2026
        </div>

      </div>


      {/* SYSTEM FOOTER */}

      <div className="absolute bottom-6 right-6 text-right">

        <div className="text-[8px] tracking-[0.25em] text-white/25">
          SYSTEM-01
        </div>

        <div className="mt-1 text-[8px] tracking-[0.2em] text-cyan-400/50">
          ALL SYSTEMS NOMINAL
        </div>

      </div>


      {/* CORNER BRACKETS */}

      <div className="absolute left-3 top-3 h-8 w-8 border-l border-t border-cyan-400/30" />

      <div className="absolute right-3 top-3 h-8 w-8 border-r border-t border-cyan-400/30" />

      <div className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-cyan-400/30" />

      <div className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-cyan-400/30" />

    </div>
  );
}


function StatusRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-white/40">
        {label}
      </span>

      <span className="flex items-center gap-2 text-cyan-300">

        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />

        {value}

      </span>

    </div>
  );
}



