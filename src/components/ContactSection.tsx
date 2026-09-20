const contacts = [
  {
    label: "EMAIL",
    value: "Sayandakua417@gmail.com",
    href: "mailto:Sayandakua417@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/sayan-kumar-dakua-91276032a",
    href: "https://linkedin.com/in/sayan-kumar-dakua-91276032a",
  },
  {
    label: "GITHUB",
    value: "github.com/ImmortalSKD",
    href: "https://github.com/ImmortalSKD",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 px-6 pb-10 pt-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
          07 // CONTACT
        </div>

        <div className="mt-4 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-4xl font-bold md:text-6xl">
              Let&apos;s build
              <br />
              <span className="text-white/30">something.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40">
              Interested in embedded systems, intelligent hardware, robotics,
              UAVs or engineering collaboration? Feel free to connect.
            </p>
          </div>

          <div className="space-y-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block border border-white/10 p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]"
              >
                <div className="font-mono text-[8px] tracking-[0.2em] text-cyan-400">
                  {contact.label}
                </div>

                <div className="mt-3 break-all text-sm text-white/55">
                  {contact.value}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-white/5 pt-6">
          <div className="flex flex-col justify-between gap-3 font-mono text-[8px] tracking-[0.18em] text-white/20 md:flex-row">
            <span>SKD ENGINEERING SYSTEM</span>
            <span>DESIGNED • BUILT • ITERATED</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}