import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';
import SITLogo from '@/src/components/common/SITLogo';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center mb-4">
          <SITLogo size="lg" showTagline={false} />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-white font-bold tracking-tight">404</h1>
        <p className="text-stone-400 text-sm leading-relaxed">
          The page or resource you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b1320] bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
