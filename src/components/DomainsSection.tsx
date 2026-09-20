const domains = [
  {
    number: "01",
    title: "EMBEDDED SYSTEMS",
    description: "MCUs, firmware, sensors, peripherals and real-time systems.",
    stack: "STM32 · ESP32 · C · C++",
  },
  {
    number: "02",
    title: "PCB DESIGN",
    description: "Schematic capture, multilayer boards and hardware prototyping.",
    stack: "KiCad · EasyEDA · Altium",
  },
  {
    number: "03",
    title: "ROBOTICS",
    description: "Control systems, actuators, sensing and embedded robotics.",
    stack: "MCU · Sensors · Motor Control",
  },
  {
    number: "04",
    title: "UAV SYSTEMS",
    description: "Flight electronics, telemetry and autonomous aerial systems.",
    stack: "STM32 · ESP32 · IMU · ESC",
  },
  {
    number: "05",
    title: "AI / ML",
    description: "Data analysis and intelligent systems integrated with hardware.",
    stack: "Python · NumPy · Pandas · ML",
  },
  {
    number: "06",
    title: "R&D",
    description: "Experimental engineering, rapid prototyping and system research.",
    stack: "Prototype · Integrate · Test",
  },
];

export default function DomainsSection() {
  return (
    <section
      id="domains"
      className="relative min-h-screen border-t border-white/5 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
          03 // ENGINEERING DOMAINS
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold md:text-6xl">
            Areas of
            <br />
            <span className="text-white/30">exploration.</span>
          </h2>

          <p className="max-w-md text-sm leading-7 text-white/35">
            A multidisciplinary engineering stack connecting physical
            electronics with software and intelligent systems.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.number}
              className="group min-h-[240px] bg-[#030508] p-7 transition duration-300 hover:bg-cyan-400/[0.035]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-cyan-400">
                  {domain.number}
                </span>

                <span className="font-mono text-[9px] text-white/15 transition group-hover:text-cyan-400/50">
                  SYS
                </span>
              </div>

              <h3 className="mt-12 font-mono text-sm tracking-[0.12em] text-white/80">
                {domain.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/35">
                {domain.description}
              </p>

              <div className="mt-6 border-t border-white/5 pt-4 font-mono text-[8px] tracking-[0.1em] text-white/25">
                {domain.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}