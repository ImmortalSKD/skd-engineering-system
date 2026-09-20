const achievements = [
  {
    value: "₹1.53L",
    label: "SPONSORSHIP",
  },
  {
    value: "90+",
    label: "ATTENDEES",
  },
  {
    value: "5",
    label: "COLLEGES REACHED",
  },
  {
    value: "12",
    label: "TEAM MEMBERS",
  },
];

export default function PPGSSection() {
  return (
    <section
      id="ppgs"
      className="relative min-h-screen border-t border-white/5 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-orange-400">
          05 // LEADERSHIP
        </div>

        <div className="mt-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-4xl font-bold md:text-6xl">
              Public Policy &
              <br />
              <span className="text-white/30">Governance.</span>
            </h2>

            <div className="mt-8 border-l border-orange-400/50 pl-6">
              <div className="font-mono text-[9px] tracking-[0.2em] text-orange-400">
                GOVERNOR
              </div>

              <h3 className="mt-3 text-xl font-semibold text-white/80">
                Public Policy & Governance Society
              </h3>

              <p className="mt-1 text-sm text-white/35">
                University Institute of Technology, Burdwan University
              </p>
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45">
              Alongside engineering, I work with PPGS on governance,
              policy-oriented activities, outreach, partnerships and student
              engagement. My involvement has included sponsorship and
              collaboration, communications and event execution.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/30">
              One of the major initiatives was the Youth Governance Conclave,
              involving a 12-member team, outreach across five colleges and
              sponsorship coordination resulting in ₹1.53 lakh in support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="bg-[#030508] p-6 md:p-8"
              >
                <div className="text-3xl font-bold text-white/90 md:text-4xl">
                  {achievement.value}
                </div>

                <div className="mt-3 font-mono text-[8px] tracking-[0.18em] text-orange-400/70">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {[
            "Youth Governance Conclave",
            "Mock Parliament — PPGS IIT KGP",
            "Sansad 2.0 — IIT KGP",
          ].map((item, index) => (
            <div
              key={item}
              className="border border-white/10 p-6 transition hover:border-orange-400/30"
            >
              <div className="font-mono text-[9px] text-orange-400">
                0{index + 1}
              </div>

              <div className="mt-6 text-sm text-white/65">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}