export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen border-t border-white/5 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center">
        <div className="w-full">
          <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
            01 // ABOUT ME
          </div>

          <div className="mt-5 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
                Electronics.
                <br />
                <span className="text-white/30">Intelligence.</span>
                <br />
                <span className="text-cyan-300">Engineering.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 md:text-lg">
                I&apos;m Sayan Kumar Dakua, an Electronics & Communication
                Engineering student focused on building intelligent hardware
                systems at the intersection of embedded electronics, AI,
                robotics, UAVs, and PCB design.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35">
                My approach is hands-on: understand the architecture, design
                the hardware, write the firmware, integrate the intelligence,
                and test the complete system.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.015] p-6">
              <div className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                SYSTEM PROFILE
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="font-mono text-[9px] text-cyan-400">
                    FOCUS
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Embedded + Intelligent Systems
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[9px] text-cyan-400">
                    DOMAIN
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Electronics / AI / Robotics / UAV
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[9px] text-cyan-400">
                    APPROACH
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Hardware → Firmware → Intelligence
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[9px] text-cyan-400">
                    STATUS
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    Building & Learning
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["01", "EMBEDDED", "Firmware & MCUs"],
              ["02", "HARDWARE", "PCB & Prototyping"],
              ["03", "INTELLIGENCE", "AI + Data"],
            ].map(([number, title, subtitle]) => (
              <div
                key={number}
                className="bg-[#030508] p-6 transition hover:bg-cyan-400/[0.03]"
              >
                <div className="font-mono text-[9px] text-cyan-400">
                  {number}
                </div>
                <div className="mt-5 font-mono text-xs tracking-[0.15em] text-white/80">
                  {title}
                </div>
                <div className="mt-2 text-xs text-white/30">
                  {subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}