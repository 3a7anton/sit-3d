'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/common/Navbar';
import Footer from '@/src/components/common/Footer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '' || pathname === null;

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1320] text-stone-100">
      {/* Global Navbar: Shown on every page EXCEPT Home (route: /) */}
      {!isHome && <Navbar currentPath={pathname || ''} />}

      {/* Main Page Canvas */}
      <main className="flex-1">{children}</main>

      {/* Global Footer: Shown on every page EXCEPT Home (route: /) */}
      {!isHome && <Footer />}
    </div>
  );
}
