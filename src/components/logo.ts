export function getHSSLogoSVG(className = "w-8 h-8", withGlow = true): string {
  return `
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="${className}"
      aria-label="HSS Logo"
    >
      <defs>
        <linearGradient id="hss-cyan" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="50%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>

        <linearGradient id="hss-top-h" x1="30" y1="20" x2="170" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>

        <linearGradient id="hss-left-s" x1="30" y1="60" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>

        <linearGradient id="hss-right-s" x1="100" y1="60" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#818cf8" />
        </linearGradient>

        ${withGlow ? `
          <filter id="hss-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        ` : ''}
      </defs>

      <g ${withGlow ? 'filter="url(#hss-glow)"' : ''}>
        <!-- Isometric Cube Contour -->
        <path
          d="M100 16 L174 58 V142 L100 184 L26 142 V58 Z"
          stroke="url(#hss-cyan)"
          stroke-width="3.5"
          stroke-linejoin="round"
          stroke-opacity="0.5"
        />

        <!-- TOP FACE: H -->
        <path d="M62 42 L82 53 V87 L62 76 Z" fill="url(#hss-top-h)" />
        <path d="M118 42 L138 53 V87 L118 76 Z" fill="url(#hss-top-h)" />
        <path d="M82 60 L118 60 L118 72 L82 72 Z" fill="url(#hss-top-h)" />

        <!-- BOTTOM-LEFT FACE: S1 -->
        <path d="M36 74 L90 105 L90 119 L48 95 Z" fill="url(#hss-left-s)" />
        <path d="M36 74 L48 67 V115 L36 122 Z" fill="url(#hss-left-s)" />
        <path d="M36 114 L90 145 L90 131 L48 107 Z" fill="url(#hss-left-s)" />
        <path d="M78 126 L90 133 V167 L78 160 Z" fill="url(#hss-left-s)" />
        <path d="M36 148 L90 179 L78 172 L36 148 Z" fill="url(#hss-left-s)" />

        <!-- BOTTOM-RIGHT FACE: S2 -->
        <path d="M110 105 L164 74 L152 67 L110 91 Z" fill="url(#hss-right-s)" />
        <path d="M152 67 L164 74 V122 L152 115 Z" fill="url(#hss-right-s)" />
        <path d="M110 131 L164 100 L164 114 L110 145 Z" fill="url(#hss-right-s)" />
        <path d="M110 133 L122 126 V160 L110 167 Z" fill="url(#hss-right-s)" />
        <path d="M110 179 L164 148 L164 134 L122 158 Z" fill="url(#hss-right-s)" />

        <!-- Center Point -->
        <circle cx="100" cy="100" r="3" fill="#22d3ee" />
      </g>
    </svg>
  `;
}
