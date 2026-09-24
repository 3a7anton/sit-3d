'use client';

import React, { useState } from 'react';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { Masonry, MasonryItem } from '../components/Masonry/Masonry';
import { AccordionGallery, AccordionItem } from '../components/AccordionGallery/AccordionGallery';
import {
  SIT_EVENTS,
  EventItem,
  heroConferenceImg,
  curriculumResearchImg,
  publicationBookImg,
  webinarTrainingImg,
} from '../data/sitData';
import { Calendar, MapPin, Clock, CheckCircle2, User, X, Sparkles, ArrowUpRight } from 'lucide-react';

export const WebinarEventsPage: React.FC = () => {
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState<EventItem | null>(null);
  const [selectedPastEvent, setSelectedPastEvent] = useState<EventItem | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [regForm, setRegForm] = useState({ name: '', email: '', institution: '' });
  const [regSuccess, setRegSuccess] = useState(false);

  const upcomingEvents = SIT_EVENTS.filter((e) => e.type === 'upcoming');
  const pastEvents = SIT_EVENTS.filter((e) => e.type === 'past');

  // AccordionGallery vertical items (Key Focus & Classroom Highlights)
  const accordionItems: AccordionItem[] = [
    {
      id: 'acc-1',
      image: heroConferenceImg,
      title: 'Integrated Curriculum in Practice',
      subtitle: 'Connecting Islamic learning with strong contemporary education at Spectrum International School.',
      tag: 'Curriculum Focus',
      quote: 'Our work begins in the classroom and extends beyond it to prepare thoughtful and responsible learners.',
    },
    {
      id: 'acc-2',
      image: curriculumResearchImg,
      title: 'Teacher Preparation & Pedagogy',
      subtitle: 'Helping educators turn the curriculum into effective classroom practice with the Teacher’s Guide.',
      tag: 'Teacher Development',
      quote: 'Integration is purposeful: each academic subject keeps its objectives while faith connections inspire reflection.',
    },
    {
      id: 'acc-3',
      image: webinarTrainingImg,
      title: 'Understanding the Qur’an',
      subtitle: 'Vocabulary and meaning grow alongside memorisation for students pursuing Hifz.',
      tag: 'Qur’anic Language',
      quote: 'Recitation and memorisation are deeply valued alongside age-appropriate attention to words and meanings.',
    },
    {
      id: 'acc-4',
      image: publicationBookImg,
      title: 'Little Lights Animated Series',
      subtitle: 'Animated stories exploring authentic Hadith, good actions and everyday awareness themes.',
      tag: 'Learning Media',
      quote: 'Big lessons for little hearts, connecting knowledge with conduct in familiar everyday situations.',
    },
  ];

  // Masonry items (Curriculum and Classroom Chronicles)
  const masonryItems: MasonryItem[] = [
    {
      id: 'mas-1',
      image: heroConferenceImg,
      title: 'Curriculum Review & Research Session',
      category: 'Curriculum Development',
      date: 'SIT Academic Centre',
    },
    {
      id: 'mas-2',
      image: curriculumResearchImg,
      title: 'Classroom Implementation & Lesson Review',
      category: 'Spectrum International School',
      date: 'Dhaka',
    },
    {
      id: 'mas-3',
      image: webinarTrainingImg,
      title: 'Teacher Training & Classroom Pedagogy Workshop',
      category: 'Teacher Development',
      date: 'Spectrum EduCare',
    },
    {
      id: 'mas-4',
      image: publicationBookImg,
      title: 'Islamic Studies & Elementary Book Display',
      category: 'Publications',
      date: 'SIT Press',
    },
    {
      id: 'mas-5',
      image: heroConferenceImg,
      title: 'Little Lights Learning Media Demonstration',
      category: 'Media & Communication',
      date: 'Animated Stories',
    },
    {
      id: 'mas-6',
      image: webinarTrainingImg,
      title: 'School Adoption & Advisory Consultation',
      category: 'Consultancy',
      date: 'Spectrum EduCare Limited',
    },
  ];

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUpcomingEvent) return;
    setRegisteredEvents((prev) => [...prev, selectedUpcomingEvent.id]);
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setSelectedUpcomingEvent(null);
      setRegForm({ name: '', email: '', institution: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b1320] text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
            Workshops, Training & Briefings
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Workshops & Academic Events
          </h1>
          <p className="text-stone-300 text-sm md:text-base mt-2 max-w-2xl font-light">
            Educational workshops, curriculum adoption briefings, teacher training sessions, and learning media demonstrations hosted by School of Integrated Thoughts and Spectrum EduCare.
          </p>
        </div>

        {/* Section 1: Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                Scheduled Sessions
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-white">
                Upcoming Workshops & Webinars
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => {
              const isRegistered = registeredEvents.includes(event.id);

              return (
                <SpotlightCard
                  key={event.id}
                  spotlightColor="rgba(245, 158, 11, 0.16)"
                  borderColor="rgba(245, 158, 11, 0.4)"
                  className="flex flex-col justify-between h-full p-8"
                >
                  <div>
                    {/* Date & Tag Banner */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                        {event.category}
                      </span>
                      <span className="text-xs px-2.5 py-1 bg-amber-400/15 text-amber-300 border border-amber-400/30 rounded-full font-medium">
                        Open for Registration
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-white mb-4 leading-snug">
                      {event.title}
                    </h3>

                    <div className="space-y-2 text-xs text-stone-300 mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="font-medium text-white">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <User className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Session Lead: <strong className="text-stone-200">{event.keynoteSpeaker}</strong> ({event.speakerRole})</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-stone-400">
                      Hybrid / Virtual & On-Site
                    </span>
                    {isRegistered ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        Registered
                      </span>
                    ) : (
                      <button
                        onClick={() => setSelectedUpcomingEvent(event)}
                        className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b1320] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                      >
                        Register for Event
                      </button>
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* Section 2: Past Events & Historical Assemblies */}
        <section>
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Implementation Archives
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Past Sessions & Review Proceedings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <SpotlightCard
                key={event.id}
                spotlightColor="rgba(255, 255, 255, 0.08)"
                borderColor="rgba(255, 255, 255, 0.2)"
                className="flex flex-col justify-between h-full p-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-stone-400">
                      {event.category} · {event.date}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-white/5 border border-white/10 text-stone-400 rounded">
                      Concluded Session
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {event.recapNotes && (
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mb-4">
                      <span className="text-[11px] uppercase tracking-wider text-amber-400/90 font-semibold block mb-2">
                        Key Review Points & Outcomes
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-300">
                        {event.recapNotes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400 mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    Documented in SIT Archives
                  </span>
                  <button
                    onClick={() => setSelectedPastEvent(event)}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
                  >
                    <span>View Archival Recap</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Section 3: Gallery — AccordionGallery (Highlight Reel for Vertical Moments) */}
        <section className="pt-6">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              SIT Highlights
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Curriculum Moments & Core Strands
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              Explore key facets of SIT’s work across curriculum design, teacher support, Qur’anic language and learning media.
            </p>
          </div>

          <AccordionGallery items={accordionItems} defaultActiveIndex={0} />
        </section>

        {/* Section 4: Gallery — Masonry (GSAP-based Overall Event Reveal) */}
        <section className="pt-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Visual Chronicles
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Visual Overview & Classroom Chronicles
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              Photographic record of SIT curriculum workshops, classroom implementation at Spectrum International School, publications and teacher training.
            </p>
          </div>

          <Masonry items={masonryItems} columns={3} />
        </section>
      </div>

      {/* Registration Modal */}
      {selectedUpcomingEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedUpcomingEvent(null)}
        >
          <div
            className="bg-[#0b1320] border border-white/15 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedUpcomingEvent(null)}
              className="absolute top-5 right-5 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {regSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-serif text-white">Registration Confirmed</h3>
                <p className="text-xs text-stone-300">
                  You are registered for <strong>{selectedUpcomingEvent.title}</strong>. An email notification and access link have been dispatched.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Symposium Registration
                </span>
                <h3 className="text-xl font-serif text-white mt-1 mb-2">
                  {selectedUpcomingEvent.title}
                </h3>
                <p className="text-xs text-stone-400 mb-6">
                  {selectedUpcomingEvent.date} · {selectedUpcomingEvent.time}
                </p>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ahmad Khan"
                      value={regForm.name}
                      onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900/80 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Academic / Institutional Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@institution.edu"
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900/80 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Organization / School (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Al-Hikmah International Academy"
                      value={regForm.institution}
                      onChange={(e) => setRegForm({ ...regForm, institution: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900/80 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer"
                    >
                      Complete Registration
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Archival Recap Modal */}
      {selectedPastEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPastEvent(null)}
        >
          <div
            className="bg-[#0b1320] border border-white/15 rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPastEvent(null)}
              className="absolute top-5 right-5 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Archival Proceedings
            </span>
            <h3 className="text-2xl font-serif text-white mt-1 mb-2">
              {selectedPastEvent.title}
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Held on {selectedPastEvent.date} at {selectedPastEvent.location}
            </p>

            <p className="text-xs text-stone-300 leading-relaxed mb-6 font-light">
              {selectedPastEvent.description}
            </p>

            {selectedPastEvent.recapNotes && (
              <div className="bg-stone-900/80 border border-white/10 rounded-xl p-4 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
                  Summary Minutes & Decisions
                </h4>
                <ul className="space-y-2 text-xs text-stone-300">
                  {selectedPastEvent.recapNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setSelectedPastEvent(null)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-stone-200 rounded-lg transition-colors"
              >
                Close Archive
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarEventsPage;
