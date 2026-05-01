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
  SiExpo,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiExpress,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import type { IconType } from "react-icons";

const catColors = ["#06b6d4", "#a855f7", "#10b981", "#f59e0b", "#3b82f6", "#ec4899"];

const skillColorMap: Record<string, string> = {
  Python: "#3776ab",
  Java: "#007396",
  "C/C++": "#A8B9CC",
  SQL: "#336791",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  R: "#276DC3",
  React: "#61DAFB",
  "React Native": "#61DAFB",
  "Next.js": "#000000",
  Expo: "#000020",
  "Node.js": "#68A063",
  "Tailwind CSS": "#06B6D4",
  FastAPI: "#009688",
  Flask: "#000000",
  Express: "#000000",
  "REST APIs": "#000000",
  PyTorch: "#EE4C2C",
  Pandas: "#150458",
  NumPy: "#013243",
  TensorFlow: "#FF6F00",
  Docker: "#2496ED",
  AWS: "#FF9900",
  "CI/CD": "#F1502F",
  Git: "#F1502F",
  Excel: "#217346",
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
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Expo: SiExpo,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  Express: SiExpress,
  "REST APIs": SiNodedotjs,
  PyTorch: SiPytorch,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  TensorFlow: SiTensorflow,
  Docker: SiDocker,
  AWS: FaAws,
  "CI/CD": SiGit,
  Git: SiGit,
  Excel: PiMicrosoftExcelLogoFill,
};

export default function Skills() {
  const ref = useFadeUp();

  return (
    <section id="skills" className="py-[64px] bg-[linear-gradient(180deg,transparent,rgba(12,18,32,0.5),transparent)]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="fade-up" ref={ref}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-4" />
          <div className="font-mono text-xs text-cyan-400 tracking-[0.15em] uppercase mb-2">Skills</div>
          <h2 className="font-head text-3xl font-bold text-white mb-12">Tech stack</h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
            {skillsData.map((cat, i) => (
              <div
                key={i}
                className="shimmer-card bg-[rgba(12,18,32,0.8)] border border-white/[0.08] rounded-xl p-6 transition-all hover:border-cyan-400/25 hover:shadow-[0_0_24px_rgba(6,182,212,0.05)]"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span style={{ color: catColors[i], fontSize: 16 }}>{cat.icon}</span>
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: catColors[i] }}>{cat.cat}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, j) => {
                    const IconComponent = skillIconMap[s];
                    const iconColor = skillColorMap[s];
                    return (
                      <span
                        key={j}
                        className="font-mono text-xs px-3 py-1.5 rounded-md border border-white/[0.08] text-[#8892a4] bg-white/[0.02] transition-all hover:border-cyan-400/35 hover:text-cyan-400 hover:bg-cyan-400/10 cursor-default flex items-center gap-1.5"
                      >
                        {IconComponent ? (
                          <IconComponent className="text-sm" style={{ color: iconColor }} />
                        ) : null}
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
