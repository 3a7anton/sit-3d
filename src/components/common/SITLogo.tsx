import React from 'react';

interface SITLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

export const SITLogo: React.FC<SITLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const iconSize = {
    sm: 36,
    md: 46,
    lg: 60,
    xl: 84,
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem matching SIT Official Badge */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Circular Ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="#ea580c"
          strokeWidth="9"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="#f97316"
          strokeWidth="1.5"
          fill="#ffffff"
        />

        {/* Academic Mortarboard Cap */}
        <path
          d="M100 35 L148 57 L100 79 L52 57 Z"
          fill="#1e3a8a"
        />
        {/* Cap side/band */}
        <path
          d="M66 66 L100 82 L134 66 L134 76 C134 92, 66 92, 66 76 Z"
          fill="#172554"
        />
        {/* Tassel */}
        <path
          d="M58 59 L54 75 L50 83 L58 83 L54 75"
          fill="#1e3a8a"
        />
        {/* SIT text on cap */}
        <text
          x="100"
          y="62"
          fill="#f97316"
          fontSize="17"
          fontWeight="bold"
          fontStyle="italic"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          SIT
        </text>

        {/* Uplifted Figure with Beacon */}
        <circle cx="100" cy="88" r="10" fill="#f97316" />
        <path
          d="M100 132 C97 122, 70 102, 62 82 C78 94, 93 99, 100 114 C107 99, 122 94, 138 82 C130 102, 103 122, 100 132 Z"
          fill="#f97316"
        />
        {/* Figure Torso / Arrow Down */}
        <polygon
          points="92,118 108,118 100,140"
          fill="#ea580c"
        />

        {/* Subtle Pen Nib Divider */}
        <line x1="28" y1="156" x2="162" y2="156" stroke="#1e3a8a" strokeWidth="2.5" />
        {/* Pen Nib Icon at right end */}
        <polygon points="162,152 172,156 162,160 164,156" fill="#1e3a8a" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight font-semibold text-white leading-tight ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
          }`}
        >
          School of Integrated Thoughts
        </span>
        {showTagline && (
          <span className="text-[10px] md:text-[11px] text-stone-400 tracking-wide font-normal line-clamp-1 mt-0.5">
            A project of Spectrum EduCare Limited
          </span>
        )}
      </div>
    </div>
  );
};

export default SITLogo;
