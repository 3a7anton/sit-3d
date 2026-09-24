'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './AccordionGallery.css';

export interface AccordionItem {
  id: string | number;
  image: string;
  title: string;
  subtitle?: string;
  tag?: string;
  quote?: string;
}

export interface AccordionGalleryProps {
  items: AccordionItem[];
  defaultActiveIndex?: number;
  className?: string;
  onSelect?: (item: AccordionItem) => void;
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultActiveIndex = 0,
  className = '',
  onSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    panelsRef.current = panelsRef.current.slice(0, items.length);
  }, [items]);

  useEffect(() => {
    // GSAP animation across panels
    panelsRef.current.forEach((panel, idx) => {
      if (!panel) return;
      const isActive = idx === activeIndex;
      
      gsap.to(panel, {
        flexGrow: isActive ? 3.5 : 1,
        duration: 0.55,
        ease: 'power3.out',
      });

      const overlay = panel.querySelector('.accordion-panel-overlay');
      const vertTitle = panel.querySelector('.accordion-panel-vertical-title');

      if (overlay) {
        gsap.to(overlay, {
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
          duration: 0.3,
        });
      }

      if (vertTitle) {
        gsap.to(vertTitle, {
          opacity: isActive ? 0 : 1,
          duration: 0.3,
        });
      }
    });
  }, [activeIndex, items]);

  const handlePanelClick = (index: number, item: AccordionItem) => {
    setActiveIndex(index);
    if (onSelect) onSelect(item);
  };

  return (
    <div ref={containerRef} className={`accordion-gallery ${className}`}>
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;

        return (
          <div
            key={item.id}
            ref={(el) => { panelsRef.current[idx] = el; }}
            className={`accordion-panel ${isActive ? 'is-active' : ''}`}
            onMouseEnter={() => handlePanelClick(idx, item)}
            onClick={() => handlePanelClick(idx, item)}
            tabIndex={0}
            role="button"
            aria-label={item.title}
          >
            <img
              src={item.image}
              alt={item.title}
              className="accordion-panel-image"
              referrerPolicy="no-referrer"
            />

            {/* Vertical title when collapsed */}
            <span className="accordion-panel-vertical-title font-serif">
              {item.title}
            </span>

            {/* Expanded panel details */}
            <div className="accordion-panel-overlay">
              {item.tag && (
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 inline-block">
                  {item.tag}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-serif text-white leading-tight mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs md:text-sm text-stone-300 mb-3 line-clamp-2">
                  {item.subtitle}
                </p>
              )}
              {item.quote && (
                <div className="border-l-2 border-amber-500/70 pl-3 py-1 mt-2 text-xs italic text-stone-200">
                  "{item.quote}"
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
