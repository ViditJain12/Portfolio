"use client";
import { useFadeUp } from "@/hooks/useFadeUp";
import { IconPin, IconMail } from "./Icons";

export default function About() {
  const ref = useFadeUp();

  const stats = [
    { icon: "⌘", value: "3+", label: "Years Coding" },
    { icon: "◈", value: "3",  label: "Research Roles" },
    { icon: "◻", value: "10+",label: "Projects Built" },
    { icon: "◉", value: "3.7",label: "GPA" },
  ];

  return (
    <section id="about" className="py-12">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="fade-up" ref={ref}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-4" />
          <div className="font-mono text-xs text-cyan-400 tracking-[0.15em] uppercase mb-2">About</div>
          <h2 className="font-head text-3xl font-bold text-white mb-8">Who I am</h2>

          <div className="grid grid-cols-2 gap-8 items-start">
            {/* Bio card */}
            <div className="shimmer-card bg-[rgba(12,18,32,0.8)] border border-white/[0.08] rounded-xl p-8 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.07),0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
              <p className="text-[#8892a4] leading-relaxed text-[15px] mb-5">
                Computer Science student at UC Irvine focused on building scalable software systems that solve real problems. I enjoy working across AI, backend infrastructure, and full-stack development to turn complex ideas into clean, reliable products.
              </p>
              <p className="text-[#8892a4] leading-relaxed text-[15px] mb-5">
                Outside of tech, I enjoy traveling, working out, listening to music, playing video games, and watching Formula 1 and cricket.
              </p>
              <div className="flex flex-col gap-2.5 mt-6">
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#8892a4]">
                  <span className="text-blue-400"><IconPin /></span>
                  <span>San Francisco Bay Area, CA</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#8892a4]">
                  <span className="text-blue-400"><IconMail /></span>
                  <span>viditjain2005@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="shimmer-card text-center bg-[rgba(12,18,32,0.8)] border border-white/[0.08] rounded-xl p-6 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)]"
                >
                  <span className="text-[22px] block mb-2">{s.icon}</span>
                  <div className="font-head text-[28px] font-bold text-white leading-none">{s.value}</div>
                  <div className="font-mono text-[10px] text-[#4a5568] tracking-widest uppercase mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
