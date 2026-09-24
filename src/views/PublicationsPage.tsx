'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { SIT_PUBLICATIONS, PublicationItem } from '../data/sitData';
import { BookOpen, Layers, FileText, Bookmark, ShoppingBag, ArrowRight, X, Check, ShieldCheck } from 'lucide-react';

interface PublicationsPageProps {
  navigate?: (path: string) => void;
}

export const PublicationsPage: React.FC<PublicationsPageProps> = ({ navigate: propNavigate }) => {
  const router = useRouter();
  const navigate = (path: string) => {
    if (propNavigate) {
      propNavigate(path);
    } else {
      router.push(path);
    }
  };
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  const publicationTypes = [
    {
      title: 'Islamic Studies Series (1–7)',
      description: 'Progressive Islamic Studies content across school levels covering belief, worship, character, Seerah, Hadith, Islamic history and inspiring figures.',
      icon: BookOpen,
      count: 'Books 1–7 (3rd Ed in Dev)',
    },
    {
      title: 'Elementary Books (1–3)',
      description: 'Foundational content for younger learners, introducing foundational literacy, alphabet writing, good habits and age-appropriate learning from the Qur’an.',
      icon: Layers,
      count: 'Books 1–3 Available',
    },
    {
      title: 'Resources in Development',
      description: 'Qur’anic Language book, a dedicated Islamic Studies book for O Level students, and a Teacher’s Guide for lesson-level connections.',
      icon: Bookmark,
      count: 'Forthcoming Titles',
    },
    {
      title: 'Little Lights Learning Media',
      description: 'Animated learning series for children exploring authentic Hadith, good actions and everyday awareness themes through familiar everyday stories.',
      icon: FileText,
      count: 'Animated Media Series',
    },
  ];

  const learningStrands = [
    {
      step: '01',
      title: 'Islamic Studies',
      desc: 'Foundations of belief and practice, character, Seerah, Hadith, Islamic history and inspiring figures including heroes of Islam across school levels.',
    },
    {
      step: '02',
      title: 'Al Qur’an and Hifz Support',
      desc: 'Recitation and memorisation alongside age-appropriate attention to selected meanings and vocabulary so understanding grows alongside memorisation.',
    },
    {
      step: '03',
      title: 'Qur’anic Language and Arabic',
      desc: 'Frequent Qur’anic words, accessible language patterns, Arabic language learning and gradual understanding through structured repetition.',
    },
    {
      step: '04',
      title: 'Early Learning',
      desc: 'Foundational language and alphabet writing beginning in the early Playgroup years, paired with good habits and gentle Islamic learning.',
    },
    {
      step: '05',
      title: 'Academic Learning',
      desc: 'International curriculum subjects taught to their academic objectives, with relevant ethical and reflective connections where appropriate.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1320] text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Editorial Header */}
        <div className="border-b border-white/10 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
            Publications & Learning Resources
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Books That Support a Connected Education
          </h1>
          <p className="text-stone-300 text-sm md:text-base mt-2 max-w-2xl font-light">
            SIT develops and publishes learning materials for students and teachers. Its resource family includes the Islamic Studies Series, Books 1–7, with progressive Islamic Studies learning across school levels, and Elementary Books 1–3 for younger learners.
          </p>
        </div>

        {/* Section 1: Types of Publications */}
        <section>
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Resource Family
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              SIT Books & Learning Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicationTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-white mb-2 leading-snug">
                    {type.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <span className="text-[11px] font-mono text-amber-400 font-semibold">
                    {type.count}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Published Books Portfolio */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                Curriculum Family
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-white">
                Featured Books & Titles
              </h2>
            </div>
            <button
              onClick={() => navigate('/publications/shop')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Browse Full Resource Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIT_PUBLICATIONS.map((pub) => (
              <SpotlightCard
                key={pub.id}
                spotlightColor="rgba(245, 158, 11, 0.16)"
                borderColor="rgba(245, 158, 11, 0.4)"
                className="flex flex-col justify-between h-full p-6 group cursor-pointer"
                onClick={() => setSelectedPub(pub)}
              >
                <div>
                  {/* Book Cover Frame */}
                  <div className="relative h-64 w-full rounded-lg overflow-hidden bg-stone-900 border border-white/10 mb-6">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0b1320]/85 border border-white/10 rounded text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                      {pub.statusBadge || pub.category}
                    </div>
                  </div>

                  <span className="text-xs text-stone-400 block mb-1">
                    {pub.author} · {pub.year}
                  </span>

                  <h3 className="text-xl font-serif text-white font-medium mb-1 leading-snug group-hover:text-amber-300 transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-amber-200/70 italic mb-3">
                    {pub.subtitle}
                  </p>

                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-3 mb-4">
                    {pub.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-stone-400">
                    {pub.isbn}
                  </span>
                  <span className="font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Section 3: The Integrated Curriculum SIT Follows */}
        <section className="bg-gradient-to-br from-stone-900/90 to-[#0c1626]/90 border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>One Learning Journey Connected by Purpose</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-4">
              The Integrated Curriculum
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              SIT combines an international academic curriculum with an Islamic curriculum created and continuously refined by its team. The academic programme retains its own subject learning goals. Dedicated Islamic subjects and carefully chosen connections in ordinary lessons help students understand how faith and values relate to their learning and conduct.
            </p>
          </div>

          {/* 5 Learning Strands */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningStrands.map((strand) => (
              <div
                key={strand.step}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-2"
              >
                <span className="text-xs font-mono text-amber-400 font-bold block">
                  Strand {strand.step}
                </span>
                <h3 className="text-lg font-serif text-white">
                  {strand.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {strand.desc}
                </p>
              </div>
            ))}
          </div>

          {/* How Integration Works in a Lesson callout */}
          <div className="p-6 rounded-xl bg-amber-400/[0.05] border border-amber-400/20 space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
              How Integration Works in a Lesson
            </span>
            <h4 className="text-base font-serif text-white">
              Purposeful Connections Guided by Sound Teacher Judgment
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              SIT’s Teacher’s Guide is designed to help teachers recognise suitable Islamic connections in regular academic topics and present them at a level children can understand. For example, while children learn the number one, a teacher may briefly introduce the belief that Allah is One. The mathematics objective remains learning the number; the faith connection adds a suitable moment of reflection rather than requiring an artificial connection in every lesson.
            </p>
          </div>
        </section>

        {/* Section 4: Clear CTA Leading to the Book Shop & School Orders */}
        <section className="text-center py-16 border-t border-b border-white/10 relative">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Books and Learning Resources for Schools
            </h2>

            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-light">
              SIT develops and publishes learning materials for students and teachers. Schools interested in adopting the curriculum can confirm current editions, resources, and availability.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate('/publications/shop')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all cursor-pointer"
              >
                <span>Browse Book Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/consultancy')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded-xl border border-white/15 transition-all cursor-pointer"
              >
                <span>Enquire About School Orders</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Book Inspection Modal */}
      {selectedPub && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPub(null)}
        >
          <div
            className="bg-[#0b1320] border border-white/15 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPub(null)}
              className="absolute top-5 right-5 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {selectedPub.statusBadge || selectedPub.category} · SIT Publication
            </span>

            <h2 className="text-2xl md:text-3xl font-serif text-white mt-1 mb-2">
              {selectedPub.title}
            </h2>

            <p className="text-xs text-amber-200/80 italic mb-4">
              {selectedPub.subtitle}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-stone-900/60 p-4 rounded-xl border border-white/5 text-xs text-stone-300 mb-6 font-mono">
              <div>
                <span className="text-stone-500 block text-[10px]">EDITION / STATUS</span>
                <span>{selectedPub.year}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">LENGTH</span>
                <span>{selectedPub.pages} Pages</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">AVAILABILITY</span>
                <span className="text-amber-400">{selectedPub.isbn}</span>
              </div>
            </div>

            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Resource Overview
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed mb-6 font-light">
              {selectedPub.description}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedPub(null)}
                className="px-4 py-2 text-xs text-stone-400 hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedPub(null);
                  navigate('/consultancy');
                }}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer"
              >
                Enquire for School Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;
