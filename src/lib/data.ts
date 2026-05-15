export const experienceData = [
  {
    role: "Software Engineer",
    company: "UC Irvine — Spider Lab",
    color: "#06b6d4",
    date: "Jan 2025 – May 2026",
    bullets: [
      "Built a fault-tolerant GitHub GraphQL ingestion pipeline processing 200K+ commits across 100K+ repositories, with token rotation and checkpoint recovery improving pipeline reliability by 4×",
      "Engineered large-scale AST-based static analysis pipelines across multi-language repositories, applying semantic filtering to reduce false positives by 30%",
      "Optimized repository mining pipelines with streamed processing, automated failure recovery, and resumable checkpointing",
    ],
  },
  {
    role: "AI Engineer (Research Assistant)",
    company: "UC Irvine",
    color: "#10b981",
    date: "Oct 2025 – Dec 2025",
    bullets: [
      "Built Python pipelines to analyze 2,500+ unmerged PRs across agents to identify systemic CI/CD failure patterns",
      "Developed classification workflows identifying 31% Cursor merge conflicts and 16% Claude test failures",
      "Automated mining of 1,300+ maintainer comments, revealing 38% of PRs were rejected without reasoning",
    ],
  },
  {
    role: "Software Engineer (Research Assistant)",
    company: "UC Irvine — UCIPT",
    color: "#a855f7",
    date: "Feb 2025 – May 2025",
    bullets: [
      "Fine-tuned transformer models for tone and sentiment detection, improving classification accuracy on dialogue data",
      "Built speech-to-text pipelines with emotion tagging, enabling contextual understanding for voice-driven AI systems",
      "Integrated NLP models into real-time chatbot workflows, improving response relevance and conversational coherence",
    ],
  },
];

export const projectsData = [
  {
    name: "PitIQ",
    desc: "An F1 race strategy engine that uses multi-agent simulation and reinforcement learning to recommend optimal pit stop strategies tailored to individual driver styles.",
    tags: ["Python", "FastAPI", "XGBoost", "React", "TypeScript", "FastF1"],
    img: "/icons/PitIQ_icon.png",
    bgGrad: "linear-gradient(135deg, #fbbf24, #fcd34d)",
    accentColor: "rgba(251,191,36,0.35)",
    glowColor: "rgba(251,191,36,0.15)",
    href: "https://github.com/ViditJain12/PitIQ",
  },
  {
    name: "TrueShuffle",
    desc: "Built a cross-platform desktop app that enhances Spotify shuffle using smarter queue balancing to reduce repetition and improve listening variety.",
    tags: ["TypeScript", "React", "Tauri", "Rust"],
    img: "/icons/TrueShuffle_icon.png",
    bgGrad: "linear-gradient(135deg, #10b981, #059669)",
    accentColor: "rgba(16,185,129,0.35)",
    glowColor: "rgba(16,185,129,0.1)",
    href: "https://github.com/ViditJain12/trueshuffle",
  },
  {
    name: "Waypoint",
    desc: "An AI-powered travel planning platform that generates personalized itineraries from user preferences, travel dates, and location context in real time.",
    tags: ["Python", "React Native", "Expo", "Node.js"],
    img: "/icons/Waypoint_icon.png",
    bgGrad: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    accentColor: "rgba(6,182,212,0.35)",
    glowColor: "rgba(6,182,212,0.1)",
    href: "https://github.com/ViditJain12/Waypoint",
  },
  {
    name: "Reddit Guard",
    desc: "A real-time toxicity analysis tool that detects harmful language in Reddit communities using transformer-based NLP models, achieving 90% accuracy.",
    tags: ["Python", "Transformers", "PRAW", "Streamlit", "NLP"],
    img: "/icons/RedditGaurd_icon.png",
    bgGrad: "linear-gradient(135deg, #ef4444, #f59e0b)",
    accentColor: "rgba(239,68,68,0.35)",
    glowColor: "rgba(239,68,68,0.1)",
    href: "https://github.com/ViditJain12/ToxicityAnalyzer",
  },
  {
    name: "Parq",
    desc: "A minimal iOS parking assistant that helps users remember where they parked, track meter time, save garage photos, and receive smart leave-now alerts.",
    tags: ["Swift", "MapKit", "StoreKit"],
    img: "/icons/Parq_icon.png",
    bgGrad: "linear-gradient(135deg, #a855f7, #6366f1)",
    accentColor: "rgba(168,85,247,0.35)",
    glowColor: "rgba(168,85,247,0.1)",
    href: "https://github.com/ViditJain12/Parq",
  },
  {
    name: "XCleaner",
    desc: "AI-powered file organizer that automatically sorts documents and media into custom categories using NLP, machine learning, and content analysis.",
    tags: ["Python", "NLP"],
    img: "/icons/XCleaner_icon.png",
    bgGrad: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    accentColor: "rgba(59,130,246,0.35)",
    glowColor: "rgba(59,130,246,0.1)",
    href: "https://github.com/ViditJain12/XCleaner",
  },
];

export const skillsData = [
  { cat: "Languages", icon: "⌨", skills: ["Python", "Java", "C/C++", "TypeScript", "JavaScript", "SQL", "R"] },
  {
    cat: "Frontend / Backend",
    icon: "◈",
    sections: [
      { label: "Frontend", skills: ["React", "HTML", "CSS"] },
      { label: "Backend", skills: ["FastAPI", "Node.js", "Flask"] },
    ],
  },
  { cat: "AI / ML", icon: "◉", skills: ["PyTorch", "Pandas", "NumPy", "Transformers", "TensorFlow"] },
];
