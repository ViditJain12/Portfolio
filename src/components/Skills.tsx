"use client";
import { useFadeUp } from "@/hooks/useFadeUp";
import { skillsData } from "@/lib/data";
import {
  SiPython,
  SiC,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiR,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiFlask,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiTensorflow,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

const catColors = ["#06b6d4", "#a855f7", "#10b981"];

const skillColorMap: Record<string, string> = {
  Python: "#3776ab",
  Java: "#007396",
  "C/C++": "#A8B9CC",
  SQL: "#336791",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  R: "#276DC3",
  React: "#61DAFB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Node.js": "#68A063",
  FastAPI: "#009688",
  Flask: "#000000",
  PyTorch: "#EE4C2C",
  Pandas: "#150458",
  NumPy: "#013243",
  Transformers: "#FFD21E",
  TensorFlow: "#FF6F00",
};

const skillIconMap: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  "C/C++": SiC,
  SQL: SiPostgresql,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  R: SiR,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  PyTorch: SiPytorch,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  TensorFlow: SiTensorflow,
};

export default function Skills() {
  const ref = useFadeUp();

  const renderSkill = (skill: string) => {
    const IconComponent = skillIconMap[skill];
    const iconColor = skillColorMap[skill];

    return (
      <span
        key={skill}
        className="font-mono text-xs px-3 py-1.5 rounded-md border border-white/[0.08] text-[#8892a4] bg-white/[0.02] transition-all hover:border-cyan-400/35 hover:text-cyan-400 hover:bg-cyan-400/10 cursor-default flex items-center gap-1.5"
      >
        {IconComponent ? (
          <IconComponent className="text-sm" style={{ color: iconColor }} />
        ) : null}
        {skill}
      </span>
    );
  };

  return (
    <section id="skills" className="py-12 bg-[linear-gradient(180deg,transparent,rgba(12,18,32,0.5),transparent)]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="fade-up" ref={ref}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-4" />
          <div className="font-mono text-xs text-cyan-400 tracking-[0.15em] uppercase mb-2">Skills</div>
          <h2 className="font-head text-3xl font-bold text-white mb-8">Tech stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skillsData.map((cat, i) => (
              <div
                key={i}
                className="shimmer-card bg-[rgba(12,18,32,0.8)] border border-white/[0.08] rounded-xl p-6 transition-all hover:border-cyan-400/25 hover:shadow-[0_0_24px_rgba(6,182,212,0.05)]"
              >
                {cat.sections ? (
                  <div className="grid gap-4">
                    {cat.sections.map((section) => (
                      <div key={section.label} className="border-t border-white/[0.06] pt-4 first:border-t-0 first:pt-0">
                        <div className="flex items-center gap-2.5 mb-3">
                          <span style={{ color: catColors[i], fontSize: 16 }}>{cat.icon}</span>
                          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: catColors[i] }}>{section.label}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {section.skills.map(renderSkill)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2.5 mb-4">
                      <span style={{ color: catColors[i], fontSize: 16 }}>{cat.icon}</span>
                      <span className="font-mono text-xs tracking-widest uppercase" style={{ color: catColors[i] }}>{cat.cat}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills?.map(renderSkill)}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
