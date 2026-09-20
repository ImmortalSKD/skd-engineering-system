const projects = [
  {
    number: "01",
    category: "EMBEDDED / PCB",
    title: "STM32H743 Multipurpose Board",
    description:
      "A custom 4-layer STM32H743 development platform designed for embedded, robotics, IoT and intelligent hardware experimentation.",
    technologies: [
      "STM32H743ZIT6",
      "4-Layer PCB",
      "SPI Flash",
      "SDRAM",
      "ESP-12F",
      "KiCad",
    ],
    status: "HARDWARE DEVELOPMENT",
  },
  {
    number: "02",
    category: "AI / RF / SIH 2026",
    title: "SpectraX — Anveshak",
    description:
      "A Smart Scan Strategy prototype for Electronic Warfare. The system combines spectrum observation, emitter intelligence and adaptive scan decisions through a closed-loop architecture.",
    technologies: [
      "SDR",
      "Signal Processing",
      "AI / ML",
      "Adaptive Scanning",
      "Python",
      "Prototype Simulation",
    ],
    status: "SIH26055",
  },
  {
    number: "03",
    category: "UAV / EMBEDDED",
    title: "Compact UAV Flight Controller",
    description:
      "A compact flight-control architecture exploring MCU-based control, IMU sensing, ESC integration and wireless telemetry for a small UAV platform.",
    technologies: [
      "STM32 / ESP32",
      "IMU",
      "ESC",
      "Telemetry",
      "Flight Control",
    ],
    status: "R&D",
  },
  {
    number: "04",
    category: "AI / EMBEDDED",
    title: "ESP32 AI Hardware Assistant",
    description:
      "An embedded AI assistant concept combining an ESP32 platform with audio interaction, display output and physical hardware interfaces.",
    technologies: [
      "ESP32",
      "OLED",
      "Microphone",
      "Audio",
      "Motors",
      "Cloud AI",
    ],
    status: "PROTOTYPE",
  },
  {
    number: "05",
    category: "ROBOTICS",
    title: "Hardware Gesture Interface",
    description:
      "A hardware-driven human-machine interface exploring gesture input without relying on conventional computer-vision pipelines.",
    technologies: [
      "Embedded C/C++",
      "Sensors",
      "MCU",
      "Signal Processing",
      "Interface Design",
    ],
    status: "EXPERIMENTAL",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen border-t border-white/5 bg-[#04080c] px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
          04 // PROJECTS
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold md:text-6xl">
            Systems
            <br />
            <span className="text-white/30">under construction.</span>
          </h2>

          <p className="max-w-md text-sm leading-7 text-white/35">
            Selected engineering work across embedded systems, PCB design,
            robotics, UAVs and AI-integrated hardware.
          </p>
        </div>

        <div className="mt-16 space-y-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border border-white/10 bg-[#030508] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025] md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[80px_1fr_260px] lg:items-start">
                <div className="font-mono text-xs text-cyan-400">
                  {project.number}
                </div>

                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-white/25">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white/90 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-2 font-mono text-[8px] tracking-[0.08em] text-white/35"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:text-right">
                  <div className="font-mono text-[8px] tracking-[0.2em] text-white/20">
                    STATUS
                  </div>

                  <div className="mt-2 font-mono text-[9px] tracking-[0.12em] text-cyan-400/70">
                    {project.status}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}