"use client";

export const ProjectSvgIcons = {
  PitIQ: () => (
    <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="car-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#ef4444"/><stop offset="100%" stopColor="#f97316"/></linearGradient>
        <filter id="glow-f1"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="40" cy="58" rx="26" ry="4" fill="rgba(239,68,68,0.12)" filter="url(#glow-f1)"/>
      <rect x="18" y="32" width="14" height="3" rx="1.5" fill="url(#car-g)" filter="url(#glow-f1)"/>
      <rect x="20" y="35" width="2" height="5" rx="1" fill="#ef4444"/>
      <rect x="28" y="35" width="2" height="5" rx="1" fill="#ef4444"/>
      <path d="M22 40 Q26 34 40 33 Q54 34 58 40 L56 50 Q50 54 40 54 Q30 54 24 50 Z" fill="#1a0505" stroke="url(#car-g)" strokeWidth="1.5" filter="url(#glow-f1)"/>
      <path d="M34 33 Q40 28 46 33" fill="#111" stroke="#ef4444" strokeWidth="1"/>
      <path d="M54 44 L62 46 L60 50 L56 50" fill="#1a0505" stroke="url(#car-g)" strokeWidth="1"/>
      <path d="M26 44 L18 46 L20 50 L24 50" fill="#1a0505" stroke="url(#car-g)" strokeWidth="1"/>
      <rect x="52" y="49" width="12" height="2.5" rx="1" fill="url(#car-g)" filter="url(#glow-f1)"/>
      <ellipse cx="28" cy="52" rx="5.5" ry="5.5" fill="#111" stroke="#ef4444" strokeWidth="1.5"/>
      <ellipse cx="52" cy="52" rx="5.5" ry="5.5" fill="#111" stroke="#ef4444" strokeWidth="1.5"/>
      <ellipse cx="28" cy="52" rx="2.5" ry="2.5" fill="#ef4444" opacity="0.4"/>
      <ellipse cx="52" cy="52" rx="2.5" ry="2.5" fill="#ef4444" opacity="0.4"/>
      <circle cx="55" cy="24" r="3" fill="#f97316" filter="url(#glow-f1)"/>
      <circle cx="47" cy="28" r="2" fill="#ef4444"/>
      <circle cx="38" cy="26" r="1.5" fill="#ef4444" opacity="0.7"/>
      <line x1="38" y1="26" x2="47" y2="28" stroke="#ef4444" strokeWidth="1" opacity="0.6"/>
      <line x1="47" y1="28" x2="55" y2="24" stroke="#f97316" strokeWidth="1"/>
    </svg>
  ),
  TrueShuffle: () => (
    <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="note-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#10b981"/></linearGradient>
        <filter id="glow-g"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="30" cy="52" rx="7" ry="5" fill="url(#note-g)" opacity="0.9" filter="url(#glow-g)"/>
      <rect x="36" y="28" width="3.5" height="24" rx="1.5" fill="url(#note-g)"/>
      <rect x="36" y="28" width="14" height="4" rx="1.5" fill="url(#note-g)"/>
      <path d="M44 42 C50 42 56 38 60 34" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M44 48 C50 48 56 52 60 48" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
      <polyline points="57,30 62,34 57,38" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="57,44 62,48 57,52" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
    </svg>
  ),
  Waypoint: () => (
    <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wp-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient>
        <filter id="glow-wp"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M40 12 C30 12 22 20 22 30 C22 42 40 60 40 60 C40 60 58 42 58 30 C58 20 50 12 40 12Z" fill="rgba(6,50,120,0.5)" stroke="url(#wp-g)" strokeWidth="2" filter="url(#glow-wp)"/>
      <circle cx="40" cy="30" r="8" fill="rgba(7,11,18,0.8)" stroke="url(#wp-g)" strokeWidth="1.5"/>
      <circle cx="40" cy="30" r="3.5" fill="url(#wp-g)" filter="url(#glow-wp)"/>
      <ellipse cx="40" cy="63" rx="8" ry="2.5" fill="rgba(59,130,246,0.25)" filter="url(#glow-wp)"/>
      <circle cx="40" cy="30" r="13" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
      <circle cx="40" cy="30" r="18" stroke="rgba(56,189,248,0.1)" strokeWidth="1" strokeDasharray="2 4"/>
    </svg>
  ),
  RedditGuard: () => (
    <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shield-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9ca3af"/><stop offset="100%" stopColor="#6b7280"/></linearGradient>
        <filter id="glow-red"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M40 16 L58 24 L58 42 C58 52 40 64 40 64 C40 64 22 52 22 42 L22 24 Z" fill="rgba(15,10,10,0.8)" stroke="url(#shield-g)" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M40 20 L54 27 L54 42 C54 50 40 60 40 60 C40 60 26 50 26 42 L26 27 Z" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round" filter="url(#glow-red)" opacity="0.8"/>
      <path d="M33 40 L38 45 L48 34" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-red)"/>
    </svg>
  ),
  Parq: () => (
    <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="parq-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#60a5fa"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient>
        <filter id="glow-bl"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M40 14 C40 14 24 26 24 38 C24 47.9 31.2 56 40 56 C48.8 56 56 47.9 56 38 C56 26 40 14 40 14Z" fill="rgba(6,30,80,0.6)" stroke="url(#parq-g)" strokeWidth="2" filter="url(#glow-bl)"/>
      <path d="M40 56 L40 64" stroke="url(#parq-g)" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="40" cy="65" rx="6" ry="2" fill="rgba(59,130,246,0.3)"/>
      <text x="40" y="43" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="18" fill="url(#parq-g)" filter="url(#glow-bl)">P</text>
    </svg>
  ),
  XCleaner: () => (
    <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="xcl-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a855f7"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
        <linearGradient id="broom-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fbbf24"/><stop offset="100%" stopColor="#f59e0b"/></linearGradient>
        <filter id="glow-p"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect x="18" y="28" width="34" height="24" rx="4" fill="rgba(80,40,120,0.4)" stroke="url(#xcl-g)" strokeWidth="1.5"/>
      <rect x="22" y="22" width="28" height="20" rx="4" fill="rgba(60,30,100,0.5)" stroke="url(#xcl-g)" strokeWidth="1.5"/>
      <rect x="22" y="22" width="10" height="5" rx="2" fill="url(#xcl-g)" opacity="0.6"/>
      <line x1="28" y1="34" x2="42" y2="34" stroke="rgba(168,85,247,0.4)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="28" y1="38" x2="38" y2="38" stroke="rgba(168,85,247,0.3)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M50 44 L62 32" stroke="url(#broom-g)" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 44 L44 56 L54 52 Z" fill="url(#broom-g)" opacity="0.9"/>
      <circle cx="62" cy="31" r="2" fill="#fbbf24" filter="url(#glow-p)"/>
    </svg>
  ),
};
