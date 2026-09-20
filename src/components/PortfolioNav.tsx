"use client";

import { useState } from "react";

const links = [
  { label: "ABOUT", id: "about" },
  { label: "EDUCATION", id: "education" },
  { label: "DOMAINS", id: "domains" },
  { label: "SYSTEM LAB", id: "system" },
  { label: "PROJECTS", id: "projects" },
  { label: "PPGS", id: "ppgs" },
  { label: "SKILLS", id: "skills" },
  { label: "CONTACT", id: "contact" },
];

export default function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-[80] border-b border-white/5 bg-[#030508]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="font-mono text-xs font-bold tracking-[0.22em] text-white"
        >
          SKD
          <span className="ml-2 text-cyan-400">ENGINEERING</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-mono text-[9px] tracking-[0.2em] text-white/40 transition-colors duration-200 hover:text-cyan-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center border border-white/10 font-mono text-xs text-white/60 transition hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "≡"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#030508]/95 px-5 py-4 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="border border-white/5 px-4 py-3 text-left font-mono text-[9px] tracking-[0.18em] text-white/50 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}