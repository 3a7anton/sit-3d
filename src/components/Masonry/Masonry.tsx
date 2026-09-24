'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Masonry.css';

export interface MasonryItem {
  id: string | number;
  image: string;
  title: string;
  category?: string;
  date?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
}

export interface MasonryProps {
  items: MasonryItem[];
  columns?: number;
  className?: string;
  onItemClick?: (item: MasonryItem) => void;
}

export const Masonry: React.FC<MasonryProps> = ({
  items,
  columns = 3,
  className = '',
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeColumns, setActiveColumns] = useState(columns);
  const [selectedItem, setSelectedItem] = useState<MasonryItem | null>(null);

  // Responsive column calculation
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setActiveColumns(1);
      } else if (window.innerWidth < 1024) {
        setActiveColumns(Math.min(2, columns));
      } else {
        setActiveColumns(columns);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Distribute items into columns
  const columnData: MasonryItem[][] = Array.from({ length: activeColumns }, () => []);
  items.forEach((item, index) => {
    columnData[index % activeColumns].push(item);
  });

  // GSAP Entrance animation
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.masonry-item');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
        }
      );
    }
  }, [activeColumns, items]);

  const handleCardClick = (item: MasonryItem) => {
    setSelectedItem(item);
    if (onItemClick) onItemClick(item);
  };

  return (
    <div ref={containerRef} className={`masonry-container ${className}`}>
      <div className="masonry-grid">
        {columnData.map((colItems, colIdx) => (
          <div key={`col-${colIdx}`} className="masonry-column">
            {colItems.map((item) => (
              <div
                key={item.id}
                className="masonry-item group"
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="masonry-image"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="masonry-overlay">
                  {item.category && (
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-medium mb-1">
                      {item.category} {item.date ? `· ${item.date}` : ''}
                    </span>
                  )}
                  <h4 className="text-base font-medium text-white font-serif leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox / Preview Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0b1320] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/40">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex items-center justify-between border-t border-white/10">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                  {selectedItem.category} {selectedItem.date ? `· ${selectedItem.date}` : ''}
                </div>
                <h3 className="text-xl font-serif text-white mt-1">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Masonry;
