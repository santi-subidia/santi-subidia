import React from "react";

interface HSSLogoProps {
  className?: string;
  size?: number | string;
  withGlow?: boolean;
}

export const HSSLogo: React.FC<HSSLogoProps> = ({
  className = "w-9 h-9",
  size,
  withGlow = false,
}) => {
  const sizeStyle = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={sizeStyle}
      aria-label="HSS Logo"
    >
      <defs>
        {/* Cyan Gradient */}
        <linearGradient id="hss-cyan" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* Indigo Gradient */}
        <linearGradient id="hss-indigo" x1="30" y1="30" x2="170" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        {/* Top Face (H) Gradient */}
        <linearGradient id="hss-top-h" x1="30" y1="20" x2="170" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* Left Face (S1) Gradient */}
        <linearGradient id="hss-left-s" x1="30" y1="60" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        {/* Right Face (S2) Gradient */}
        <linearGradient id="hss-right-s" x1="100" y1="60" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>

        {/* Subtle Ambient Glow */}
        {withGlow && (
          <filter id="hss-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>

      <g filter={withGlow ? "url(#hss-glow)" : undefined}>
        {/* Isometric Cube Outer Outline / Contour Guide */}
        <path
          d="M100 16 L174 58 V142 L100 184 L26 142 V58 Z"
          stroke="url(#hss-cyan)"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeOpacity="0.4"
          className="transition-opacity duration-300 group-hover:stroke-opacity-80"
        />

        {/* --- TOP FACE: The Letter 'H' --- */}
        {/* Left vertical arm of H */}
        <path
          d="M62 42 L82 53 V87 L62 76 Z"
          fill="url(#hss-top-h)"
        />
        {/* Right vertical arm of H */}
        <path
          d="M118 42 L138 53 V87 L118 76 Z"
          fill="url(#hss-top-h)"
        />
        {/* Horizontal crossbar of H */}
        <path
          d="M82 60 L118 60 L118 72 L82 72 Z"
          fill="url(#hss-top-h)"
        />

        {/* --- BOTTOM-LEFT FACE: First Letter 'S' --- */}
        {/* Top bar of left S */}
        <path
          d="M36 74 L90 105 L90 119 L48 95 Z"
          fill="url(#hss-left-s)"
        />
        {/* Middle diagonal connector */}
        <path
          d="M36 74 L48 67 V115 L36 122 Z"
          fill="url(#hss-left-s)"
        />
        {/* Middle bar */}
        <path
          d="M36 114 L90 145 L90 131 L48 107 Z"
          fill="url(#hss-left-s)"
        />
        {/* Bottom vertical spine */}
        <path
          d="M78 126 L90 133 V167 L78 160 Z"
          fill="url(#hss-left-s)"
        />
        {/* Bottom bar of left S */}
        <path
          d="M36 148 L90 179 L78 172 L36 148 Z"
          fill="url(#hss-left-s)"
        />

        {/* --- BOTTOM-RIGHT FACE: Second Letter 'S' --- */}
        {/* Top bar of right S */}
        <path
          d="M110 105 L164 74 L152 67 L110 91 Z"
          fill="url(#hss-right-s)"
        />
        {/* Top right drop spine */}
        <path
          d="M152 67 L164 74 V122 L152 115 Z"
          fill="url(#hss-right-s)"
        />
        {/* Middle bar */}
        <path
          d="M110 131 L164 100 L164 114 L110 145 Z"
          fill="url(#hss-right-s)"
        />
        {/* Bottom left spine of right S */}
        <path
          d="M110 133 L122 126 V160 L110 167 Z"
          fill="url(#hss-right-s)"
        />
        {/* Bottom bar of right S */}
        <path
          d="M110 179 L164 148 L164 134 L122 158 Z"
          fill="url(#hss-right-s)"
        />

        {/* Center Joint Accent Point */}
        <circle cx="100" cy="100" r="2.5" fill="#22d3ee" className="animate-pulse" />
      </g>
    </svg>
  );
};
