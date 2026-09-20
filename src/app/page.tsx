"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import SystemHUD from "@/components/SystemHUD";
import ModulePanel from "@/components/ModulePanel";

import PortfolioNav from "@/components/PortfolioNav";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import DomainsSection from "@/components/DomainsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PPGSSection from "@/components/PPGSSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const SceneCanvas = dynamic(
  () => import("@/components/3d/Canvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-[#030508] font-mono text-sm tracking-[0.3em] text-cyan-300">
        INITIALIZING SYSTEM-01...
      </div>
    ),
  }
);

export default function Home() {
  const [activeModule, setActiveModule] =
    useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModule(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030508] text-white">
      <PortfolioNav />

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <AboutSection />

      {/* =====================================================
          EDUCATION
      ===================================================== */}
      <EducationSection />

      {/* =====================================================
          ENGINEERING DOMAINS
      ===================================================== */}
      <DomainsSection />

      {/* =====================================================
          INTERACTIVE 3D SYSTEM
      ===================================================== */}
      <section
        id="system"
        className="relative border-t border-white/5 bg-[#030508] px-4 py-20 md:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                04 // SYSTEM LAB
              </div>

              <h2 className="mt-4 text-4xl font-bold leading-none md:text-6xl">
                Interactive
                <br />
                <span className="text-white/30">
                  engineering system.
                </span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-7 text-white/35">
                Explore the engineering domains through the interactive
                3D system. Select a module to inspect its role, projects
                and technology stack.
              </p>

              <div className="mt-4 font-mono text-[8px] tracking-[0.18em] text-white/20">
                CLICK MODULES • DRAG TO ORBIT • SCROLL TO CONTINUE
              </div>
            </div>
          </div>

          <div className="relative h-[75vh] min-h-[560px] w-full overflow-hidden border border-white/10 bg-[#030508]">
            <SceneCanvas
              onModuleSelect={setActiveModule}
              activeModule={activeModule}
            />

            <SystemHUD activeModule={activeModule} />

            <ModulePanel
              activeModule={activeModule}
              onClose={() => setActiveModule(null)}
            />

            {!activeModule && (
              <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center">
                <div className="font-mono text-[8px] tracking-[0.3em] text-white/25">
                  SELECT A MODULE
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <ProjectsSection />

      {/* =====================================================
          PPGS / LEADERSHIP
      ===================================================== */}
      <PPGSSection />

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <SkillsSection />

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <ContactSection />
    </main>
  );
}