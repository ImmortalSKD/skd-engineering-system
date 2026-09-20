"use client";

type ProjectDetailProps = {
  project: {
    name: string;
    type: string;
    description: string;
    status: string;
    technologies: string[];
  };
  color: string;
  onClose: () => void;
};

export default function ProjectDetail({
  project,
  color,
  onClose,
}: ProjectDetailProps) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#020508]/80 p-4 backdrop-blur-md md:p-8">
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden border bg-[#050a0f]/98 shadow-2xl"
        style={{
          borderColor: `${color}88`,
          boxShadow: `0 0 80px ${color}20`,
        }}
      >
        {/* Top accent */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background: color,
            boxShadow: `0 0 20px ${color}`,
          }}
        />

        {/* Header */}
        <header className="flex items-start justify-between border-b border-white/10 px-5 py-5 md:px-8 md:py-6">
          <div>
            <div
              className="font-mono text-[9px] tracking-[0.3em]"
              style={{ color }}
            >
              PROJECT // DETAIL VIEW
            </div>

            <h1 className="mt-2 text-2xl font-bold text-white md:text-4xl">
              {project.name}
            </h1>

            <div className="mt-2 font-mono text-[9px] tracking-[0.2em] text-white/35">
              {project.type}
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 font-mono text-sm text-white/50 transition hover:border-white/30 hover:text-white"
          >
            X
          </button>
        </header>

        {/* Body */}
        <div className="overflow-y-auto">
          <div className="grid gap-8 p-5 md:grid-cols-[1.4fr_1fr] md:p-8">
            {/* Visual placeholder */}
            <div
              className="relative flex min-h-[280px] items-center justify-center overflow-hidden border"
              style={{
                borderColor: `${color}35`,
                background: `radial-gradient(circle at center, ${color}12, transparent 65%)`,
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(${color}20 1px, transparent 1px),
                      linear-gradient(90deg, ${color}20 1px, transparent 1px)
                    `,
                    backgroundSize: "35px 35px",
                  }}
                />
              </div>

              <div className="relative text-center">
                <div
                  className="font-mono text-5xl font-bold"
                  style={{
                    color,
                    textShadow: `0 0 30px ${color}`,
                  }}
                >
                  SYSTEM
                </div>

                <div className="mt-3 font-mono text-[9px] tracking-[0.35em] text-white/30">
                  PROJECT VISUALIZATION
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-white/30">
                OVERVIEW
              </div>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {project.description}
              </p>

              <div className="mt-6">
                <div className="font-mono text-[9px] tracking-[0.2em] text-white/30">
                  STATUS
                </div>

                <div
                  className="mt-2 inline-block border px-3 py-2 font-mono text-[10px]"
                  style={{
                    borderColor: `${color}55`,
                    color,
                    background: `${color}0d`,
                  }}
                >
                  {project.status}
                </div>
              </div>
            </div>
          </div>

          {/* Technology stack */}
          <section className="border-t border-white/10 px-5 py-6 md:px-8">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/30">
              TECHNOLOGY STACK
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border px-3 py-2 font-mono text-[10px] text-white/65"
                  style={{
                    borderColor: `${color}45`,
                    background: `${color}08`,
                  }}
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Technical architecture */}
          <section className="border-t border-white/10 px-5 py-6 md:px-8">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/30">
              SYSTEM ARCHITECTURE
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[
                "INPUT",
                "PROCESSING",
                "CONTROL",
                "OUTPUT",
              ].map((stage, index) => (
                <div
                  key={stage}
                  className="border p-4"
                  style={{
                    borderColor: `${color}30`,
                  }}
                >
                  <div
                    className="font-mono text-[9px]"
                    style={{ color }}
                  >
                    0{index + 1}
                  </div>

                  <div className="mt-2 text-xs font-semibold text-white">
                    {stage}
                  </div>

                  <div className="mt-2 text-[10px] leading-5 text-white/35">
                    Engineering subsystem
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Actions */}
          <section className="border-t border-white/10 px-5 py-6 md:px-8">
            <div className="flex flex-wrap gap-3">
              <button
                className="border px-5 py-3 font-mono text-[10px] tracking-wider transition hover:bg-white/5"
                style={{
                  borderColor: `${color}70`,
                  color,
                }}
              >
                VIEW PROJECT
              </button>

              <button className="border border-white/10 px-5 py-3 font-mono text-[10px] tracking-wider text-white/50 transition hover:border-white/30 hover:text-white">
                SOURCE CODE
              </button>

              <button className="border border-white/10 px-5 py-3 font-mono text-[10px] tracking-wider text-white/50 transition hover:border-white/30 hover:text-white">
                DOCUMENTATION
              </button>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 px-5 py-3 md:px-8">
          <div className="flex justify-between font-mono text-[8px] tracking-[0.2em] text-white/25">
            <span>SKD ENGINEERING SYSTEM</span>
            <span style={{ color: `${color}99` }}>
              PROJECT INTERFACE ONLINE
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}