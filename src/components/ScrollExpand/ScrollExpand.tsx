'use client';

import React, { useEffect, useRef, useState } from 'react';
import './ScrollExpand.css';

export interface ScrollExpandProps {
  mediaSrc: string;
  initialTitle?: React.ReactNode;
  initialSubtitle?: React.ReactNode;
  overlayContent?: React.ReactNode;
  initialWidthPercent?: number; // e.g. 65
  initialHeightVh?: number;     // e.g. 55
  className?: string;
}

export const ScrollExpand: React.FC<ScrollExpandProps> = ({
  mediaSrc,
  initialTitle,
  initialSubtitle,
  overlayContent,
  initialWidthPercent = 65,
  initialHeightVh = 58,
  className = '',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setProgress(1); // Set to fully expanded if reduced motion is preferred
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!trackRef.current) return;
          const rect = trackRef.current.getBoundingClientRect();
          const totalDistance = rect.height - window.innerHeight;
          if (totalDistance <= 0) return;

          const currentScroll = -rect.top;
          const p = Math.min(Math.max(currentScroll / totalDistance, 0), 1);
          setProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute interpolated frame geometry
  const widthVal = initialWidthPercent + (100 - initialWidthPercent) * progress;
  const heightVal = initialHeightVh + (100 - initialHeightVh) * progress;
  const borderRadiusVal = (1 - progress) * 28; // From 28px down to 0px
  const initialOpacity = Math.max(0, 1 - progress * 2.5);
  const overlayOpacity = Math.max(0, (progress - 0.45) * 2.2);
  const mediaScale = 1 + (1 - progress) * 0.12;

  return (
    <div ref={trackRef} className={`scroll-expand-track ${className}`}>
      <div className="scroll-expand-sticky">
        {/* Floating Initial Title & Subtitle (Fades out on scroll) */}
        <div
          className="absolute z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: initialOpacity,
            transform: `translateY(${-progress * 40}px)`,
          }}
        >
          {initialSubtitle && (
            <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-medium mb-3">
              {initialSubtitle}
            </div>
          )}
          {initialTitle && (
            <div className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl text-balance drop-shadow-md">
              {initialTitle}
            </div>
          )}
          <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-stone-300 font-medium opacity-80">
            <span>Scroll to explore institution</span>
            <span className="animate-bounce inline-block">↓</span>
          </div>
        </div>

        {/* Expanding Media Frame */}
        <div
          className="scroll-expand-frame"
          style={{
            width: `${widthVal}vw`,
            height: `${heightVal}vh`,
            borderRadius: `${borderRadiusVal}px`,
          }}
        >
          <img
            src={mediaSrc}
            alt="School of Integrated Thoughts Academic Community"
            className="scroll-expand-media"
            style={{
              transform: `scale(${mediaScale})`,
            }}
            referrerPolicy="no-referrer"
          />

          {/* Calibrated Scrim Overlays */}
          <div className="scroll-expand-scrim bg-gradient-to-t from-[#0b1320] via-black/40 to-black/20" />
          <div
            className="scroll-expand-scrim bg-[#0b1320] transition-opacity duration-300"
            style={{ opacity: progress * 0.4 }}
          />

          {/* Overlay Content (Fades in once expanded) */}
          <div
            className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-12 lg:p-16 pointer-events-auto"
            style={{
              opacity: overlayOpacity,
              transform: `translateY(${(1 - Math.min(overlayOpacity, 1)) * 30}px)`,
              pointerEvents: overlayOpacity > 0.5 ? 'auto' : 'none',
            }}
          >
            {overlayContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollExpand;
