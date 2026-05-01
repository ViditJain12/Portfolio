"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconGitHub, IconLinkedIn, IconMail, IconEye } from "./Icons";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "CS Student @ UC Irvine";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-[60px] overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] animate-glow-pulse" />
        <div className="absolute -bottom-36 -left-12 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)]" style={{ animation: "glow-pulse 8s ease-in-out infinite reverse" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-8 w-full z-10">
        <div className="grid grid-cols-[1fr_auto] gap-[60px] items-center">
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5 transition-all duration-300 cursor-default hover:scale-105" style={{ animation: "fadeUp 0.8s ease 0.1s both" }}>
              <span className="w-2 h-2 rounded-full shadow-[0_0_8px_#10b981] animate-glow-pulse" style={{ backgroundColor: "#10b981" }} />
              <span className="font-mono text-xs tracking-widest" style={{ color: "#10b981" }}>Available for SWE roles · Class of 2026</span>
            </div>

            {/* Name */}
            <h1
              className="font-head font-bold leading-none mb-4"
              style={{
                fontSize: "clamp(52px, 8vw, 88px)",
                background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "fadeUp 0.8s ease 0.2s both",
              }}
            >
              Vidit Jain
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-5 font-mono whitespace-nowrap" style={{ fontSize: "clamp(14px, 2vw, 18px)", animation: "fadeUp 0.8s ease 0.3s both", color: "#06b6d4" }}>
              <span style={{ color: "#06b6d4", opacity: 0.5 }}>const role =</span>&nbsp;
              <span style={{ color: "#a855f7" }}>&quot;</span>
              <span>{typed}</span>
              <span className="inline-block w-0.5 h-[1.1em] animate-blink" style={{ backgroundColor: "#06b6d4" }} />
              <span style={{ color: "#a855f7" }}>&quot;</span>
            </div>

            {/* Tagline */}
            <p className="text-[#8892a4] max-w-[460px] mb-9 leading-relaxed" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", animation: "fadeUp 0.8s ease 0.4s both" }}>
              Building software at the intersection of AI, data systems, backend infrastructure, and full-stack products.
            </p>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap" style={{ animation: "fadeUp 0.8s ease 0.5s both" }}>
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1ehbPN2l8NWR79PmFzGhAES-9q9NjQoym/view?usp=sharing", "_blank")}
                className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,rgba(6,182,212,0.2),rgba(168,85,247,0.2))] border border-cyan-400/40 text-white px-5 py-3 rounded-lg font-mono text-sm tracking-wide transition-all hover:border-cyan-400/70 hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] hover:-translate-y-px cursor-pointer"
              >
                <IconEye /> Resume
              </button>
              <a href="https://github.com/ViditJain12" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border border-white/[0.08] text-[#8892a4] px-5 py-3 rounded-lg font-mono text-sm no-underline transition-all hover:border-white/20 hover:text-white hover:bg-white/[0.04]">
                <IconGitHub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/vidit-jain1/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border border-white/[0.08] text-[#8892a4] px-5 py-3 rounded-lg font-mono text-sm no-underline transition-all hover:border-white/20 hover:text-white hover:bg-white/[0.04]">
                <IconLinkedIn /> LinkedIn
              </a>
              <a href="mailto:viditjain2005@gmail.com" className="inline-flex items-center gap-2 bg-transparent border border-white/[0.08] text-[#8892a4] px-5 py-3 rounded-lg font-mono text-sm no-underline transition-all hover:border-white/20 hover:text-white hover:bg-white/[0.04]">
                <IconMail /> Email
              </a>
            </div>
          </div>

          {/* Right — Profile image */}
          <div className="relative w-[280px] h-[340px] flex-shrink-0" style={{ animation: "fadeIn 1s ease 0.6s both" }}>
            <div className="absolute -inset-3 rounded-[20px] border border-cyan-400/20 animate-spin-slow" />
            <div className="absolute -inset-6 rounded-[28px] border border-purple-400/12 animate-spin-slow-reverse" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-cyan-400/25 shadow-[0_0_60px_rgba(6,182,212,0.1),0_0_120px_rgba(168,85,247,0.07)]">
              <Image
                src="/profile.png"
                alt="Vidit Jain"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Float tags */}
            <div
              className="absolute -bottom-4 -left-5 z-20 bg-[rgba(12,18,32,0.95)] rounded-lg px-3.5 py-2.5 transition-all duration-300 cursor-default hover:bg-[rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
              style={{ animation: "fadeUp 0.8s ease 0.9s both", borderColor: "#10b981", borderWidth: "1px" }}
            >
              <div className="font-mono text-[10px] tracking-widest group-hover:text-opacity-100" style={{ color: "#10b981" }}>STATUS</div>
              <div className="font-head text-sm font-semibold text-white group-hover:text-opacity-100" style={{ color: "inherit" }}>Open to Work</div>
            </div>
            <div
              className="absolute -top-4 -right-5 z-20 bg-[rgba(12,18,32,0.95)] border border-purple-400/30 rounded-lg px-3.5 py-2.5 transition-all duration-300 cursor-default hover:border-purple-400/70 hover:bg-purple-400/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
              style={{ animation: "fadeUp 0.8s ease 1.0s both" }}
            >
              <div className="font-mono text-[10px] text-purple-400 tracking-widest">GPA</div>
              <div className="font-head text-sm font-semibold text-white group-hover:text-purple-400">3.7 / 4.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
