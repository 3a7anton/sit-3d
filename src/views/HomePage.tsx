'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ScrollExpand } from '../components/ScrollExpand/ScrollExpand';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { GhostFibers } from '../components/GhostFibers/GhostFibers';
import { DepthCarousel } from '../components/DepthCarousel/DepthCarousel';
import { SITLogo } from '../components/common/SITLogo';
import {
  SIT_CORE_AREAS,
  heroConferenceImg,
  curriculumResearchImg,
  publicationBookImg,
  webinarTrainingImg,
} from '../data/sitData';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  BookMarked,
  MessageSquare,
  Compass,
  ShieldCheck,
  Award,
  Sparkles,
  Sliders,
  X,
  Maximize2,
  Laptop,
  GraduationCap,
  Video,
  Share2
} from 'lucide-react';

interface HomePageProps {
  navigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate: propNavigate }) => {
  const router = useRouter();
  const navigate = (path: string) => {
    if (propNavigate) {
      propNavigate(path);
    } else {
      router.push(path);
    }
  };

  // GhostFibers ambient theme states
  const [fiberTheme, setFiberTheme] = useState<'reactbits' | 'institutional' | 'celestial'>('institutional');
  const [showControls, setShowControls] = useState(false);

  // Eight Areas of Work carousel & expansion state
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [expandedArea, setExpandedArea] = useState<any | null>(null);

  // Close modal on Escape
  React.useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedArea(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const areaCarouselItems = useMemo(
    () => [
      {
        id: 'curriculum-development',
        title: 'Curriculum Development',
        badge: '01 / 08',
        tag: 'Core Priority',
        icon: BookOpen,
        subtitle: 'Connecting Islamic learning with international academic standards',
        description: 'Design and improvement of the integrated curriculum, learning sequence and guidance that connects Islamic learning with strong contemporary education.',
        scope: 'Integrated curriculum design, learning sequences, subject integration blueprints, and classroom implementation guidance.',
        route: '/publications',
      },
      {
        id: 'advanced-research',
        title: 'Advanced Research',
        badge: '02 / 08',
        tag: 'Inquiry & Evidence',
        icon: Compass,
        subtitle: 'Connecting Islamic understanding with science and pedagogy',
        description: 'Research that informs educational content, curriculum development, and responsible work across disciplines through evidence and classroom experience.',
        scope: 'Educational inquiry, review of content with relevant expertise, classroom observations, and pedagogical studies.',
        route: '/publications',
      },
      {
        id: 'publication',
        title: 'Publication',
        badge: '03 / 08',
        tag: 'Books & Media',
        icon: BookMarked,
        subtitle: 'Islamic Studies Series (Books 1–7) & Teacher Guides',
        description: 'Development and publication of books, teacher guides, and related learning materials supporting learning from the early years through higher school levels.',
        scope: 'Islamic Studies Series (Books 1–7), Elementary Books (1–3), Qur’anic Language Book, O Level book, and Teacher’s Guide.',
        route: '/publications',
      },
      {
        id: 'it-technology',
        title: 'IT and Technology',
        badge: '04 / 08',
        tag: 'Digital Learning',
        icon: Laptop,
        subtitle: 'Modern software tools, platforms & Quranic coding pathways',
        description: 'Digital tools, technology infrastructure, and software applications that support education, learning management, and organizational work.',
        scope: 'Digital educational platforms, modern computational resources, and IT tools that empower teaching and learning.',
        route: '/courses',
      },
      {
        id: 'skill-development-training',
        title: 'Skill Development & Training',
        badge: '05 / 08',
        tag: 'Pedagogy & Languages',
        icon: GraduationCap,
        subtitle: 'Teacher development, programming, Arabic & foreign languages',
        description: 'Teacher development, IT skills such as web development, and language programmes including English, Arabic, Spanish, Japanese and German.',
        scope: 'Teacher pedagogy, curriculum implementation training, hands-on IT courses, and multi-language learning programmes.',
        route: '/courses',
      },
      {
        id: 'media-communication',
        title: 'Media and Communication',
        badge: '06 / 08',
        tag: 'Visual Learning',
        icon: Video,
        subtitle: 'Little Lights cartoon series & educational broadcast media',
        description: 'Educational video, children’s media including the Little Lights animated series, and clear communication of SIT’s educational work.',
        scope: 'Little Lights cartoon series, educational animations, Hadith lessons, and media resources for classrooms and families.',
        route: '/webinar-events',
      },
      {
        id: 'branding-marketing',
        title: 'Branding and Marketing',
        badge: '07 / 08',
        tag: 'Outreach & Growth',
        icon: Share2,
        subtitle: 'Educational conferences, institutional outreach & representation',
        description: 'Presentation, outreach, and institutional representation for the curriculum, publications, educational programmes, and school services.',
        scope: 'Curriculum presentation, school outreach, educational communication, and institutional partnerships.',
        route: '/webinar-events',
      },
      {
        id: 'consultancy',
        title: 'Consultancy',
        badge: '08 / 08',
        tag: 'School Advisory',
        icon: ShieldCheck,
        subtitle: 'Curriculum adoption support & international university guidance',
        description: 'Educational and advisory services, including school curriculum adoption support and assistance with student application files for universities abroad.',
        scope: 'Curriculum adoption for schools, teacher preparation, and assistance with student application files for universities in the US and other countries.',
        route: '/consultancy',
      },
    ],
    []
  );

  const themeConfig = {
    reactbits: {
      name: 'React Bits Sapphire',
      lineColor: '#140E35',
      glowColor: '#3437A0',
      speed: 0.2,
      scale: 2,
      rotation: 0,
      rotationSpeed: 0.25,
      layers: 4,
      waveAmplitude: 0.015,
      waveFrequency: 3,
      waveSpeed: 0.15,
      layerSpeed: 0.08,
      twist: 0.1,
      twistFrequency: 5,
      twistSpeed: 1.2,
      lineFrequency: 5,
      lineSpacing: 2,
      lineSharpness: 16,
      glowFalloff: 10,
      glowIntensity: 1.6,
      brightness: 2,
      blueBoost: 1.25,
      vignette: 0.8,
      grain: 0.05,
    },
    institutional: {
      name: 'SIT Amber Gold',
      lineColor: '#1b2a4a',
      glowColor: '#d4af37',
      speed: 0.18,
      scale: 2.1,
      rotation: 0,
      rotationSpeed: 0.18,
      layers: 4,
      waveAmplitude: 0.016,
      waveFrequency: 3.2,
      waveSpeed: 0.14,
      layerSpeed: 0.07,
      twist: 0.12,
      twistFrequency: 4.5,
      twistSpeed: 1.1,
      lineFrequency: 5.2,
      lineSpacing: 2.2,
      lineSharpness: 18,
      glowFalloff: 9.5,
      glowIntensity: 1.7,
      brightness: 2.1,
      blueBoost: 0.95,
      vignette: 0.75,
      grain: 0.04,
    },
    celestial: {
      name: 'Celestial Emerald',
      lineColor: '#0a2218',
      glowColor: '#10b981',
      speed: 0.15,
      scale: 2.4,
      rotation: 15,
      rotationSpeed: 0.12,
      layers: 5,
      waveAmplitude: 0.018,
      waveFrequency: 2.8,
      waveSpeed: 0.12,
      layerSpeed: 0.06,
      twist: 0.14,
      twistFrequency: 4,
      twistSpeed: 0.9,
      lineFrequency: 4.8,
      lineSpacing: 2,
      lineSharpness: 15,
      glowFalloff: 10,
      glowIntensity: 1.5,
      brightness: 1.8,
      blueBoost: 0.9,
      vignette: 0.8,
      grain: 0.04,
    },
  };

  const currentProps = themeConfig[fiberTheme];

  const portalCards = [
    {
      id: 'courses',
      title: 'Programmes and Training',
      route: '/courses',
      tag: 'Learn With SIT',
      icon: BookOpen,
      image: curriculumResearchImg,
      badge: 'Students & Teachers',
      description: 'Programmes designed for students, teachers and people seeking new skills across Language Learning, Teacher Training, IT & Digital Skills, and Professional Development.',
      stat: 'Explore Programmes',
    },
    {
      id: 'webinar-events',
      title: 'Workshops & Events',
      route: '/webinar-events',
      tag: 'Training & Discussion',
      icon: Calendar,
      image: heroConferenceImg,
      badge: 'Sessions & Webinars',
      description: 'Educational workshops, teacher training sessions, and media briefings including Little Lights demonstrations and curriculum implementation reviews.',
      stat: 'View Events & Recap',
    },
    {
      id: 'publications',
      title: 'Publications & Learning Media',
      route: '/publications',
      tag: 'Curriculum Books',
      icon: BookMarked,
      image: publicationBookImg,
      badge: 'Student & Teacher Resources',
      description: 'Islamic Studies Series (Books 1–7), Elementary Books (1–3), Qur’anic Language, O Level book, Teacher’s Guide, and Little Lights animated stories.',
      stat: 'Explore Publications',
    },
    {
      id: 'consultancy',
      title: 'For Schools & Consultancy',
      route: '/consultancy',
      tag: 'School Adoption & Advisory',
      icon: MessageSquare,
      image: webinarTrainingImg,
      badge: 'Implementation Support',
      description: 'Helping schools introduce the integrated curriculum suited to their students and grades, alongside higher education application support for universities abroad.',
      stat: 'Enquire About Adoption',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b1320] text-stone-100 overflow-x-hidden selection:bg-amber-600 selection:text-white">
      {/* GhostFibers WebGL Flowing Fibers Ambient Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <GhostFibers
          lineColor={currentProps.lineColor}
          glowColor={currentProps.glowColor}
          speed={currentProps.speed}
          scale={currentProps.scale}
          rotation={currentProps.rotation}
          rotationSpeed={currentProps.rotationSpeed}
          layers={currentProps.layers}
          waveAmplitude={currentProps.waveAmplitude}
          waveFrequency={currentProps.waveFrequency}
          waveSpeed={currentProps.waveSpeed}
          layerSpeed={currentProps.layerSpeed}
          twist={currentProps.twist}
          twistFrequency={currentProps.twistFrequency}
          twistSpeed={currentProps.twistSpeed}
          lineFrequency={currentProps.lineFrequency}
          lineSpacing={currentProps.lineSpacing}
          lineSharpness={currentProps.lineSharpness}
          glowFalloff={currentProps.glowFalloff}
          glowIntensity={currentProps.glowIntensity}
          brightness={currentProps.brightness}
          blueBoost={currentProps.blueBoost}
          vignette={currentProps.vignette}
          grain={currentProps.grain}
          dpr={1}
        />
      </div>

      {/* Floating GhostFibers Ambient Preset Controller */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        {showControls && (
          <div className="bg-[#0f1a2e]/95 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-2xl space-y-2 text-xs w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                GhostFibers Background
              </span>
              <span className="text-[10px] text-stone-400 font-mono">React Bits</span>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Palette Presets</div>
              <div className="grid grid-cols-1 gap-1.5 pt-1">
                {(Object.keys(themeConfig) as Array<keyof typeof themeConfig>).map((key) => {
                  const active = fiberTheme === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setFiberTheme(key)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-all ${
                        active
                          ? 'bg-amber-400/20 border border-amber-400/40 text-amber-200'
                          : 'bg-white/5 border border-transparent text-stone-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="truncate">{themeConfig[key].name}</span>
                      <span
                        className="w-3 h-3 rounded-full border border-white/30 shrink-0"
                        style={{ backgroundColor: themeConfig[key].glowColor }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
              <span>Layers: {currentProps.layers} | Speed: {currentProps.speed}</span>
              <span className="text-amber-400/90 font-mono text-[10px]">WebGL 2</span>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowControls(!showControls)}
          aria-label="Toggle GhostFibers Ambient Background Settings"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0d1627]/90 hover:bg-[#132038] text-stone-300 hover:text-amber-300 border border-white/15 hover:border-amber-400/30 backdrop-blur-md shadow-xl transition-all text-xs"
        >
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium hidden sm:inline">GhostFibers Ambient</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        </button>
      </div>

      {/* Hero Section with ScrollExpand Component */}
      <section className="relative z-10">
        <ScrollExpand
          mediaSrc={heroConferenceImg}
          initialSubtitle="A project of Spectrum EduCare Limited"
          initialTitle="School of Integrated Thoughts"
          overlayContent={
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-amber-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
                  A Project of Spectrum EduCare Limited
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                Education that connects <br />
                <span className="italic text-amber-200">faith, knowledge</span> and purpose
              </h2>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
                School of Integrated Thoughts (SIT) develops an integrated curriculum that brings Islamic learning together with strong contemporary education. We create books, teacher resources, training and learning media to help students understand their faith, grow in character and engage confidently with the world.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/publications')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer"
                >
                  <span>Explore the Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/courses')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider rounded-lg border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
                >
                  <span>View Programmes</span>
                </button>
              </div>
            </div>
          }
        />
      </section>

      {/* What We Do & The 8 Areas of Work with DepthCarousel (Transparent, No Outline, Click to Expand) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Our Eight Areas of Work
          </h2>
          <p className="text-sm text-stone-300 mt-3 leading-relaxed">
            Our work begins in the classroom and extends beyond it. SIT develops an Islamic curriculum alongside international academic learning, supports teachers in putting it into practice, and creates opportunities for learners to develop languages and practical skills.
          </p>
        </div>

        {/* 3D DepthCarousel Stage - Completely Transparent, No Outline, No Background Images */}
        <div className="relative w-full h-[490px] sm:h-[510px] flex items-center justify-center my-4">
          <DepthCarousel
            items={areaCarouselItems}
            cardWidth={310}
            cardHeight={410}
            radius={20}
            tint="#05060a"
            depth={200}
            spread={85}
            tilt={20}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            duration={700}
            ease="power3.out"
            autoplay={true}
            autoplayDelay={3400}
            loop={true}
            showControls={false}
            showIndicators={true}
            onChange={(index) => setActiveAreaIndex(index)}
            onExpand={(item) => setExpandedArea(item)}
          />
        </div>
      </section>

      {/* Click to Expand Modal Feature */}
      {expandedArea && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setExpandedArea(null)}
          role="dialog"
          aria-modal="true"
          aria-label={expandedArea.title}
        >
          <div
            className="relative max-w-xl w-full bg-[#0d1627]/95 border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setExpandedArea(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Clean Transparent Modal Header without background images */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-start gap-4">
              {expandedArea.icon && (
                <div className="w-12 h-12 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <expandedArea.icon className="w-6 h-6" />
                </div>
              )}
              <div className="space-y-1.5 pr-8">
                <div className="flex items-center gap-2">
                  {expandedArea.badge && (
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/20 border border-amber-400/40 px-2.5 py-0.5 rounded-full uppercase">
                      {expandedArea.badge}
                    </span>
                  )}
                  {expandedArea.tag && (
                    <span className="text-xs text-stone-200 bg-white/15 border border-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {expandedArea.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                  {expandedArea.title}
                </h3>
                {expandedArea.subtitle && (
                  <p className="text-xs text-stone-400 font-light">
                    {expandedArea.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Content details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 leading-tight">
                  {expandedArea.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-light">
                  {expandedArea.description || expandedArea.subtitle}
                </p>
              </div>

              {expandedArea.scope && (
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                    Scope of Work
                  </span>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {expandedArea.scope}
                  </p>
                </div>
              )}

              {/* Action button */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setExpandedArea(null)}
                  className="px-4 py-2.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                {expandedArea.route && (
                  <button
                    type="button"
                    onClick={() => {
                      setExpandedArea(null);
                      navigate(expandedArea.route);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer"
                  >
                    <span>Explore Section</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* An Integrated Approach to Learning */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-stone-900/90 via-[#0f1d33]/90 to-stone-900/90 border border-white/15 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
              Curriculum Philosophy
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
              An Integrated Approach to Learning
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed mb-4 font-light">
              Students need academic knowledge, Islamic understanding and the ability to think carefully about both. SIT’s curriculum gives Islamic Studies, Al Qur’an, Qur’anic Language and Arabic a structured place in school learning. Teacher guidance also helps educators make relevant connections between Islamic values and regular academic lessons.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mb-6 font-light">
              Integration is purposeful. Each academic subject keeps its learning objectives, while appropriate connections help students reflect on what they learn and how they use that knowledge.
            </p>
            <div>
              <button
                onClick={() => navigate('/publications')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Discover Our Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portals Grid Reveal using SpotlightCard */}
      <section id="portals" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
              Learn With SIT
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
              Programmes, Books & School Adoption
            </h2>
          </div>
          <p className="text-xs md:text-sm text-stone-400 max-w-md mt-2 md:mt-0 leading-relaxed">
            Explore our curriculum resources, student and teacher programmes, publications, and institutional school adoption support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portalCards.map((portal) => {
            const Icon = portal.icon;
            return (
              <SpotlightCard
                key={portal.id}
                spotlightColor="rgba(245, 158, 11, 0.16)"
                borderColor="rgba(245, 158, 11, 0.45)"
                className="group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                onClick={() => navigate(portal.route)}
              >
                <div className="flex flex-col h-full justify-between p-8">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                          {portal.tag}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                        {portal.badge}
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="relative h-44 w-full rounded-lg overflow-hidden mb-6 border border-white/10">
                      <img
                        src={portal.image}
                        alt={portal.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                      {portal.title}
                    </h3>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      {portal.description}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-medium">
                      {portal.stat}
                    </span>
                    <div className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Enter Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* About SIT: Who We Are & Our Approach */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-stone-900/90 to-[#0c1626]/90 border border-white/15 space-y-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>About SIT · A Project of Spectrum EduCare Limited</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
              Who We Are
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed font-light max-w-3xl">
              School of Integrated Thoughts is an educational project under Spectrum EduCare Limited. We bring together curriculum development, research, publication, training, technology and media to improve how knowledge is taught and understood.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed font-light max-w-3xl mt-2">
              Our principal work is an integrated school curriculum that connects Islamic knowledge and values with contemporary academic education. We believe students should have opportunities to understand the Qur’an and Sunnah, develop strong character, ask thoughtful questions and build the knowledge and skills needed to serve their communities.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-2">Our Vision</span>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                To develop an education system in which Islamic understanding and contemporary knowledge grow together, preparing thoughtful, capable and responsible learners.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-2">Our Mission</span>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                To create and continually improve curriculum, books, teacher guidance, training and learning media that make Islamic learning meaningful within a strong school education.
              </p>
            </div>
          </div>

          {/* Our Approach (4 Pillars) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
              Our Approach
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-stone-900/60 border border-white/5 space-y-1.5">
                <span className="text-xs font-serif font-semibold text-white block">Grounded in Islamic Learning</span>
                <p className="text-xs text-stone-400 leading-relaxed">Students study Islamic Studies, Al Qur’an, Qur’anic Language and Arabic through an organised learning journey.</p>
              </div>
              <div className="p-4 rounded-lg bg-stone-900/60 border border-white/5 space-y-1.5">
                <span className="text-xs font-serif font-semibold text-white block">Committed to Academic Quality</span>
                <p className="text-xs text-stone-400 leading-relaxed">Academic subjects are taught to their own objectives, with relevant ethical and reflective connections where appropriate.</p>
              </div>
              <div className="p-4 rounded-lg bg-stone-900/60 border border-white/5 space-y-1.5">
                <span className="text-xs font-serif font-semibold text-white block">Designed for Teachers</span>
                <p className="text-xs text-stone-400 leading-relaxed">Books, guidance and training help teachers turn the curriculum into effective classroom practice.</p>
              </div>
              <div className="p-4 rounded-lg bg-stone-900/60 border border-white/5 space-y-1.5">
                <span className="text-xs font-serif font-semibold text-white block">Improved Through Use</span>
                <p className="text-xs text-stone-400 leading-relaxed">Classroom feedback, review and research inform the continuing development of SIT resources.</p>
              </div>
            </div>
          </div>

          {/* For Schools Adoption Card */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-1">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">For Schools</span>
              <h4 className="text-lg font-serif text-white">Enquire About School Adoption</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                SIT aims to help schools introduce the integrated curriculum in a way that fits their students, grades and academic framework. Spectrum International School currently implements the SIT curriculum, contributing classroom experience to our ongoing development.
              </p>
            </div>
            <button
              onClick={() => navigate('/consultancy')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold uppercase tracking-wider text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-md"
            >
              Enquire About School Adoption
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer for Continuous Scroll */}
      <footer className="relative z-10 py-12 border-t border-white/10 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <SITLogo size="sm" showTagline={false} />
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/courses')} className="hover:text-stone-300 transition-colors">Courses</button>
            <button onClick={() => navigate('/webinar-events')} className="hover:text-stone-300 transition-colors">Events</button>
            <button onClick={() => navigate('/publications')} className="hover:text-stone-300 transition-colors">Publications</button>
            <button onClick={() => navigate('/consultancy')} className="hover:text-stone-300 transition-colors">Consultancy</button>
          </div>
          <div>© {new Date().getFullYear()} School of Integrated Thoughts · A project of Spectrum EduCare Limited.</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
