const skillGroups = [
  {
    title: "PROGRAMMING",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    title: "EMBEDDED",
    skills: [
      "STM32",
      "ESP32",
      "UART",
      "SPI",
      "I2C",
      "Sensors & Actuators",
    ],
  },
  {
    title: "PCB / HARDWARE",
    skills: [
      "KiCad",
      "EasyEDA",
      "Altium",
      "Schematic Design",
      "PCB Layout",
      "Soldering",
    ],
  },
  {
    title: "AI / DATA",
    skills: [
      "NumPy",
      "Pandas",
      "Jupyter",
      "Machine Learning",
      "Data Analysis",
    ],
  },
  {
    title: "LAB / DEBUGGING",
    skills: [
      "Multimeter",
      "Oscilloscope",
      "Firmware Debugging",
      "Hardware Testing",
    ],
  },
  {
    title: "SYSTEMS",
    skills: [
      "Robotics",
      "UAV Systems",
      "System Architecture",
      "Rapid Prototyping",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen border-t border-white/5 bg-[#04080c] px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
          06 // SKILLS
        </div>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          Engineering
          <br />
          <span className="text-white/30">toolkit.</span>
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-white/10 p-6 transition hover:border-cyan-400/30"
            >
              <div className="font-mono text-[9px] tracking-[0.2em] text-cyan-400">
                {group.title}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-white/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}