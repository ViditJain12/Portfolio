"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[60px] bg-[rgba(7,11,18,0.85)] backdrop-blur-xl border-b border-white/[0.08]">
      <div className="font-mono text-sm tracking-widest font-medium" style={{ color: "#06b6d4" }}>VJ</div>
      <ul className="flex gap-8 list-none">
        {["About", "Experience", "Projects", "Skills"].map((s) => (
          <li key={s}>
            <a
              href={`#${s.toLowerCase()}`}
              className="font-mono text-xs text-[#8892a4] tracking-widest no-underline transition-colors hover:text-cyan-400 relative group"
            >
              {s}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://drive.google.com/file/d/1ehbPN2l8NWR79PmFzGhAES-9q9NjQoym/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 rounded-md no-underline transition-all hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
        Resume
      </a>
    </nav>
  );
}
