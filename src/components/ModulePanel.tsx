"use client";

import { useEffect, useState } from "react";
import ProjectDetail from "./ProjectDetail";
type ModulePanelProps = {
  activeModule: string | null;
  onClose: () => void;
};

type Project = {
  name: string;
  type: string;
  description: string;
  status: string;
  technologies: string[];
};

type ModuleData = {
  category: string;
  title: string;
  description: string;
  color: string;
  skills: string[];
  projects: Project[];
};

const MODULES: Record<string, ModuleData> = {
  EMBEDDED: {
    category: "EMBEDDED SYSTEMS",
    title: "Embedded Engineering",
    description:
      "Microcontroller-based systems, firmware development, peripheral interfacing and hardware-software integration.",
    color: "#4ca8c5",
    skills: [
      "STM32",
      "ESP32",
      "C / C++",
      "UART / SPI / I2C",
      "Sensors & Actuators",
      "Firmware Debugging",
    ],
    projects: [
      {
        name: "STM32H743 Multipurpose Board",
        type: "CUSTOM EMBEDDED HARDWARE",
        description:
          "Custom STM32H743-based development platform designed for robotics, AI and IoT experimentation.",
        status: "IN DEVELOPMENT",
        technologies: [
          "STM32H743ZIT6",
          "SPI Flash",
          "SDRAM",
          "ESP8266",
          "SWD",
        ],
      },
      {
        name: "ESP32 AI Assistant",
        type: "EMBEDDED AI",
        description:
          "ESP32-based interactive assistant integrating display, audio and motor peripherals.",
        status: "PROTOTYPE",
        technologies: [
          "ESP32",
          "OLED",
          "Microphone",
          "Audio",
          "Wi-Fi",
        ],
      },
    ],
  },

  "PCB LAB": {
    category: "HARDWARE DEVELOPMENT",
    title: "PCB Laboratory",
    description:
      "From schematic architecture to PCB layout, fabrication-ready Gerbers and hardware prototyping.",
    color: "#38a8a8",
    skills: [
      "KiCad",
      "PCB Layout",
      "Schematic Design",
      "4-Layer Boards",
      "Gerber Generation",
      "Hardware Prototyping",
    ],
    projects: [
      {
        name: "STM32H743 Multipurpose Board",
        type: "4-LAYER PCB",
        description:
          "A complete custom development board designed around the STM32H743ZIT6 for advanced embedded experimentation.",
        status: "PCB DEVELOPMENT",
        technologies: [
          "STM32H743ZIT6",
          "W25Q128JV",
          "IS42S16400J",
          "ESP-12F",
          "KiCad",
        ],
      },
      {
        name: "Embedded Hardware Prototypes",
        type: "RAPID PROTOTYPING",
        description:
          "Experimental hardware systems developed through schematic design, breadboarding, soldering and debugging.",
        status: "ACTIVE",
        technologies: [
          "KiCad",
          "Soldering",
          "Multimeter",
          "Oscilloscope",
        ],
      },
    ],
  },

  ROBOTICS: {
    category: "ROBOTICS & CONTROL",
    title: "Robotics Engineering",
    description:
      "Embedded control systems combining sensors, actuators, microcontrollers and intelligent decision-making.",
    color: "#315bff",
    skills: [
      "Motor Control",
      "Sensor Integration",
      "Microcontrollers",
      "Control Systems",
      "Embedded C/C++",
      "System Debugging",
    ],
    projects: [
      {
        name: "Robotics Control Platform",
        type: "EMBEDDED ROBOTICS",
        description:
          "Modular embedded platform for experimenting with sensors, motors and real-time control.",
        status: "EXPERIMENTAL",
        technologies: [
          "STM32",
          "ESP32",
          "Sensors",
          "Motor Drivers",
        ],
      },
      {
        name: "Hardware Gesture Interface",
        type: "HUMAN-MACHINE INTERFACE",
        description:
          "Experimental gesture-based hardware interface designed without relying on conventional computer vision.",
        status: "PROTOTYPE",
        technologies: [
          "Sensors",
          "ESP32",
          "Embedded Processing",
        ],
      },
    ],
  },

  UAV: {
    category: "AERIAL SYSTEMS",
    title: "UAV & Flight Systems",
    description:
      "Flight-control electronics, telemetry, wireless systems and embedded hardware for unmanned aerial platforms.",
    color: "#7b61ff",
    skills: [
      "Flight Controllers",
      "STM32",
      "ESP32",
      "IMU Sensors",
      "ESC Integration",
      "Wireless Telemetry",
    ],
    projects: [
      {
        name: "Compact UAV Flight Controller",
        type: "FLIGHT ELECTRONICS",
        description:
          "Concept development of a compact flight-control platform combining MCU, IMU, wireless communication and ESC interfaces.",
        status: "R&D",
        technologies: [
          "STM32",
          "IMU",
          "ESC",
          "ExpressLRS",
          "Telemetry",
        ],
      },
      {
        name: "DIY UAV Transmitter",
        type: "GROUND CONTROL",
        description:
          "Experimental transmitter architecture featuring dual joystick control and an embedded display.",
        status: "CONCEPT",
        technologies: [
          "STM32",
          "Joysticks",
          "Display",
          "Wireless",
        ],
      },
    ],
  },

  "AI / ML": {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI / Machine Learning",
    description:
      "Data-driven systems combining machine learning with engineering, embedded platforms and intelligent automation.",
    color: "#42d392",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Data Analysis",
      "AI + Hardware",
    ],
    projects: [
      {
        name: "SpectraX - Anveshak",
        type: "SMART SCAN STRATEGY",
        description:
          "Prototype architecture for intelligent adaptive spectrum scanning using receiver data and an existing ML inference pipeline.",
        status: "PROTOTYPE",
        technologies: [
          "Python",
          "Machine Learning",
          "SDR",
          "GNU Radio",
          "Data Processing",
        ],
      },
      {
        name: "AI Hardware Assistant",
        type: "EDGE AI CONCEPT",
        description:
          "Exploration of conversational AI integrated with physical embedded hardware and peripherals.",
        status: "EXPERIMENTAL",
        technologies: [
          "ESP32",
          "AI",
          "Wi-Fi",
          "OLED",
          "Audio",
        ],
      },
    ],
  },

  "R&D": {
    category: "RESEARCH & DEVELOPMENT",
    title: "Research & Development",
    description:
      "Experimental engineering work focused on exploring new hardware, software and intelligent system architectures.",
    color: "#ff9f43",
    skills: [
      "Rapid Prototyping",
      "System Architecture",
      "Experimental Design",
      "Hardware Research",
      "AI Integration",
      "Technical Exploration",
    ],
    projects: [
      {
        name: "Smart Engineering Systems",
        type: "SYSTEM ARCHITECTURE",
        description:
          "Ongoing exploration of integrated engineering systems combining embedded hardware, software and AI.",
        status: "ONGOING",
        technologies: [
          "Embedded Systems",
          "AI",
          "PCB Design",
          "Robotics",
        ],
      },
      {
        name: "Experimental Hardware Lab",
        type: "R&D",
        description:
          "Collection of experimental concepts involving sensors, wireless communication, embedded controllers and custom electronics.",
        status: "ONGOING",
        technologies: [
          "STM32",
          "ESP32",
          "Sensors",
          "Wireless",
        ],
      },
    ],
  },
};

export default function ModulePanel({
  activeModule,
  onClose,
}: ModulePanelProps) {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const data = activeModule
    ? MODULES[activeModule]
    : null;

  useEffect(() => {
    setSelectedProject(null);
  }, [activeModule]);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-end p-4 md:p-8">
        <div
          className="pointer-events-auto relative flex h-[calc(100vh-32px)] w-full max-w-[560px] flex-col overflow-hidden border bg-[#050a0f]/95 shadow-2xl backdrop-blur-xl md:h-[calc(100vh-64px)]"
          style={{
            borderColor: `${data.color}88`,
            boxShadow: `0 0 60px ${data.color}18, inset 0 0 40px ${data.color}08`,
          }}
        >
          <div
            className="absolute left-0 right-0 top-0 h-px"
            style={{
              background: data.color,
              boxShadow: `0 0 18px ${data.color}`,
            }}
          />

          <div className="flex items-start justify-between border-b border-white/10 px-5 py-5 md:px-7">
            <div>
              <div
                className="font-mono text-[10px] font-bold tracking-[0.3em]"
                style={{ color: data.color }}
              >
                MODULE // {activeModule}
              </div>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {data.title}
              </h2>

              <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-white/35">
                {data.category}
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center border border-white/10 font-mono text-lg text-white/50 transition hover:border-white/30 hover:text-white"
              aria-label="Close module"
            >
              X
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 md:px-7">
            <p className="max-w-xl text-sm leading-6 text-white/60">
              {data.description}
            </p>

            <section className="mt-7">
              <div className="mb-3 font-mono text-[10px] tracking-[0.25em] text-white/35">
                CAPABILITIES
              </div>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border px-3 py-1.5 font-mono text-[10px] tracking-wider text-white/70"
                    style={{
                      borderColor: `${data.color}45`,
                      background: `${data.color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.25em] text-white/35">
                  PROJECT REGISTRY
                </div>

                <div className="font-mono text-[9px] text-white/25">
                  {data.projects.length
                    .toString()
                    .padStart(2, "0")}{" "}
                  ENTRIES
                </div>
              </div>

              <div className="space-y-3">
                {data.projects.map((project, index) => {
                  const isSelected =
                    selectedProject?.name === project.name;

                  return (
                    <button
                      key={project.name}
                      onClick={() =>
                        setSelectedProject(
                          isSelected ? null : project
                        )
                      }
                      className="group w-full border p-4 text-left transition"
                      style={{
                        borderColor: isSelected
                          ? `${data.color}99`
                          : "rgba(255,255,255,0.08)",
                        background: isSelected
                          ? `${data.color}0d`
                          : "rgba(255,255,255,0.015)",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border font-mono text-[10px]"
                          style={{
                            borderColor: `${data.color}55`,
                            color: data.color,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="font-mono text-[9px] tracking-[0.18em] text-white/30">
                            {project.type}
                          </div>

                          <div className="mt-1 text-sm font-semibold text-white">
                            {project.name}
                          </div>

                          <div className="mt-2 text-xs leading-5 text-white/45">
                            {project.description}
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <span
                              className="font-mono text-[9px] tracking-wider"
                              style={{ color: data.color }}
                            >
                              {project.status}
                            </span>

                            <span className="font-mono text-[9px] text-white/25">
                              {isSelected
                                ? "CLOSE"
                                : "OPEN PROJECT"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="border-t border-white/10 px-5 py-3 md:px-7">
            <div className="flex items-center justify-between font-mono text-[8px] tracking-[0.18em] text-white/25">
              <span>SKD ENGINEERING SYSTEM</span>

              <span style={{ color: `${data.color}99` }}>
                MODULE ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          color={data.color}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}