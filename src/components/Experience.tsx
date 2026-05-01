"use client";
import { useFadeUp } from "@/hooks/useFadeUp";
import { experienceData } from "@/lib/data";

export default function Experience() {
  const ref = useFadeUp();

  return (
    <section id="experience" className="py-[64px] bg-[linear-gradient(180deg,transparent,rgba(12,18,32,0.5),transparent)]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="fade-up" ref={ref}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-4" />
          <div className="font-mono text-xs text-cyan-400 tracking-[0.15em] uppercase mb-2">Experience</div>
          <h2 className="font-head text-3xl font-bold text-white mb-12">Where I&apos;ve worked</h2>

          <div className="relative flex flex-col">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-purple-400/30" />

            {experienceData.map((exp, i) => (
              <div key={i} className="grid grid-cols-[48px_1fr] gap-6 pb-7 border-b border-white/[0.04] last:border-0 group">
                {/* Dot */}
                <div className="flex flex-col items-center pt-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full border-2 bg-[var(--bg)] relative z-10"
                    style={{ borderColor: exp.color, boxShadow: `0 0 8px ${exp.color}60` }}
                  />
                </div>

                {/* Card */}
                <div className="shimmer-card bg-[rgba(12,18,32,0.7)] border border-white/[0.08] rounded-xl p-6 transition-all group-hover:border-cyan-400/25 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.05)]">
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <div className="font-head text-[17px] font-semibold text-white">{exp.role}</div>
                    <div className="font-mono text-[11px] text-[#4a5568] whitespace-nowrap tracking-wide pt-0.5">{exp.date}</div>
                  </div>
                  <div className="font-mono text-[13px] mb-3.5" style={{ color: exp.color }}>{exp.company}</div>
                  <ul className="flex flex-col gap-1.5 list-none">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-[#8892a4] pl-4 relative leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-cyan-400 before:text-[10px] before:top-[3px]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
