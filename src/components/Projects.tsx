"use client";
import Image from "next/image";
import { useFadeUp } from "@/hooks/useFadeUp";
import { projectsData } from "@/lib/data";
import { IconExternal } from "./Icons";
import { ProjectSvgIcons } from "./ProjectIcons";

const svgKeyMap: Record<string, keyof typeof ProjectSvgIcons> = {
  PitIQ: "PitIQ",
  TrueShuffle: "TrueShuffle",
  Waypoint: "Waypoint",
  "Reddit Guard": "RedditGuard",
  Parq: "Parq",
  XCleaner: "XCleaner",
};

export default function Projects() {
  const ref = useFadeUp();

  return (
    <section id="projects" className="py-[64px]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="fade-up" ref={ref}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-4" />
          <div className="font-mono text-xs text-cyan-400 tracking-[0.15em] uppercase mb-2">Projects</div>
          <h2 className="font-head text-3xl font-bold text-white mb-12">Things I&apos;ve built</h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
            {projectsData.map((p, i) => {
              const SvgIcon = ProjectSvgIcons[svgKeyMap[p.name]];
              return (
                <div
                  key={i}
                  className="shimmer-card flex flex-col rounded-[14px] overflow-hidden bg-[rgba(12,18,32,0.8)] border transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  style={{
                    ["--accent-color" as string]: p.accentColor,
                    ["--glow-color" as string]: p.glowColor,
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                  onClick={() => window.open(p.href, "_blank", "noopener noreferrer")}
                >
                  {/* Thumbnail */}
                  <div className="h-[160px] flex items-center justify-center relative overflow-hidden" style={{ background: p.bgGrad + "18", padding: "20px 0" }}>
                    <div className="absolute inset-0" style={{ background: "rgba(7,11,18,0.55)" }} />
                    <div className="relative z-10 flex items-center justify-center">
                      {SvgIcon ? <SvgIcon /> : (
                        <Image src={p.img} alt={p.name} width={88} height={88} className="object-contain rounded-xl drop-shadow-lg" />
                      )}
                    </div>
                    {/* External icon */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-[#8892a4] transition-all z-10 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/15">
                      <IconExternal />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="font-head text-base font-semibold text-white mb-1.5">{p.name}</div>
                    <div className="text-[13px] text-[#8892a4] leading-relaxed mb-4 flex-1">{p.desc}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t, j) => (
                        <span key={j} className="font-mono text-[10px] px-2 py-1 rounded border border-white/[0.08] text-[#4a5568] bg-white/[0.03] tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
