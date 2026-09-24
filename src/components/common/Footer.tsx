'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SITLogo } from './SITLogo';
import { SIT_CORE_AREAS } from '../../data/sitData';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

interface FooterProps {
  navigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate: propNavigate }) => {
  const router = useRouter();
  const navigate = (path: string) => {
    if (propNavigate) {
      propNavigate(path);
    } else {
      router.push(path);
    }
  };

  return (
    <footer className="bg-[#070c16] border-t border-white/10 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <SITLogo size="md" showTagline={true} />
            <p className="text-sm text-stone-300 leading-relaxed max-w-sm mt-4 font-light">
              School of Integrated Thoughts (SIT) develops an integrated curriculum that brings Islamic learning together with strong contemporary education. A project of Spectrum EduCare Limited.
            </p>
            <div className="flex items-center gap-3 pt-2 text-stone-400 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>In use at Spectrum International School</span>
            </div>
          </div>

          {/* Col 3: 8 Core Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
              Areas of Work
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {SIT_CORE_AREAS.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => navigate('/consultancy')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {area.shortName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Site Portals */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
              Explore SIT
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => navigate('/courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Programmes & Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/webinar-events')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Workshops & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/publications')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Publications & Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/publications/shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Resource Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/consultancy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  School Adoption & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Secretariat Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
              Connect With SIT
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                <span>Spectrum EduCare Limited, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400/80 shrink-0" />
                <span>Enquiries: Curriculum Adoption & Programmes</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/consultancy')}
                  className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-[#0b1320] text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} School of Integrated Thoughts (SIT) · A project of Spectrum EduCare Limited.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400">Education that connects faith, knowledge and purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
