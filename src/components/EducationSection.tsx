export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen border-t border-white/5 bg-[#04080c] px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
          02 // EDUCATION
        </div>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          Academic
          <br />
          <span className="text-white/30">foundation.</span>
        </h2>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent" />

          <div className="relative pl-10">
            <div className="absolute left-0 top-1 h-7 w-7 rounded-full border border-cyan-400/50 bg-[#04080c]">
              <div className="m-[7px] h-3 w-3 rounded-full bg-cyan-400" />
            </div>

            <div className="border border-white/10 bg-white/[0.015] p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                    2024 — 2028
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
                    Bachelor of Engineering
                  </h3>

                  <p className="mt-2 text-white/50">
                    Electronics & Communication Engineering
                  </p>
                </div>

                <div className="font-mono text-[9px] tracking-[0.15em] text-white/30">
                  CURRENTLY 3RD YEAR
                </div>
              </div>

              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="text-sm leading-7 text-white/40">
                  University Institute of Technology, Burdwan University
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    "Embedded Systems",
                    "Electronics",
                    "Communication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-white/5 px-4 py-3 font-mono text-[9px] tracking-[0.12em] text-white/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 pl-10">
            <div className="absolute left-[3px] top-1 h-2 w-2 rounded-full bg-white/20" />

            <div className="border border-white/5 p-6">
              <div className="font-mono text-[9px] tracking-[0.2em] text-white/30">
                PRE-ENGINEERING
              </div>

              <div className="mt-4 text-lg text-white/70">
                CISCE Class 12
              </div>

              <div className="mt-1 text-sm text-white/30">
                Completed in 2024
              </div>
            </div>
          </div>

          <div className="relative mt-6 pl-10">
            <div className="absolute left-[3px] top-1 h-2 w-2 rounded-full bg-white/20" />

            <div className="border border-white/5 p-6">
              <div className="font-mono text-[9px] tracking-[0.2em] text-white/30">
                SECONDARY EDUCATION
              </div>

              <div className="mt-4 text-lg text-white/70">
                CISCE Class 10
              </div>

              <div className="mt-1 text-sm text-white/30">
                Completed in 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}