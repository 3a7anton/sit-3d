'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, BookOpen, Calendar, BookMarked, MessageSquare, Home, Sparkles } from 'lucide-react';
import SITLogo from './SITLogo';

interface NavbarProps {
  currentPath?: string;
  navigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath: propPath, navigate: propNavigate }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = propPath ?? pathname ?? '/';

  const navigate = (path: string) => {
    if (propNavigate) {
      propNavigate(path);
    } else {
      router.push(path);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Courses', path: '/courses', icon: BookOpen },
    { label: 'Webinar & Events', path: '/webinar-events', icon: Calendar },
    { label: 'Publications', path: '/publications', icon: BookMarked },
    { label: 'Consultancy', path: '/consultancy', icon: MessageSquare },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1320]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#0b1320] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: SIT Brand Logo */}
        <button
          onClick={() => navigate('/')}
          className="text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          aria-label="School of Integrated Thoughts Homepage"
        >
          <SITLogo size="sm" showTagline={false} />
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.path ||
              (link.path !== '/' && currentPath.startsWith(link.path));

            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`relative py-1 text-sm tracking-wide transition-colors cursor-pointer ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate('/consultancy')}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b1320] bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Advisory Query
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1320]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              currentPath === link.path ||
              (link.path !== '/' && currentPath.startsWith(link.path));

            return (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-left transition-colors ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-400 font-semibold'
                    : 'text-stone-200 hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 opacity-75" />
                <span>{link.label}</span>
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                navigate('/consultancy');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#0b1320] bg-amber-400 rounded-lg shadow-md"
            >
              Submit Consultancy Request
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
