'use client';

import React, { useRef, useState, useCallback } from 'react';
import './SpotlightCard.css';

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(217, 119, 6, 0.15)', // Warm Islamic amber gold
  borderColor = 'rgba(217, 119, 6, 0.35)',
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
      cardRef.current.style.setProperty('--spotlight-color', spotlightColor);
      cardRef.current.style.setProperty('--border-color', borderColor);
      cardRef.current.style.setProperty('--spotlight-opacity', '1');

      if (onMouseMove) onMouseMove(e);
    },
    [spotlightColor, borderColor, onMouseMove]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsFocused(true);
      if (cardRef.current) {
        cardRef.current.style.setProperty('--spotlight-opacity', '1');
      }
      if (onMouseEnter) onMouseEnter(e);
    },
    [onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsFocused(false);
      if (cardRef.current) {
        cardRef.current.style.setProperty('--spotlight-opacity', '0');
      }
      if (onMouseLeave) onMouseLeave(e);
    },
    [onMouseLeave]
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      style={style}
      {...props}
    >
      <div className="spotlight-content">{children}</div>
    </div>
  );
};

export default SpotlightCard;
