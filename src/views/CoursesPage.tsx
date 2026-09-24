'use client';

import React, { useState } from 'react';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { SIT_COURSES, Course } from '../data/sitData';
import { Star, Clock, UserCheck, BookOpen, CheckCircle, Search, X, Sparkles } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrolledCourseId, setEnrolledCourseId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Programmes' },
    { id: 'Teacher Training', label: 'Teacher Training' },
    { id: 'Language Programmes', label: 'Language Learning' },
    { id: 'IT and Digital Skills', label: 'IT & Digital Skills' },
    { id: 'Professional Development', label: 'Professional Development' },
  ];

  const filteredCourses = SIT_COURSES.filter((course) => {
    if (activeFilter !== 'all' && course.category !== activeFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.instructor.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0b1320] text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Programme Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
                Programmes and Training
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                Learn Teach and Grow
              </h1>
              <p className="text-stone-300 text-sm md:text-base mt-2 max-w-2xl font-light">
                SIT’s programmes are designed for students, teachers and people seeking new skills. Explore the available programmes, review their entry requirements and submit an enrolment interest form online.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-stone-900/90 p-1.5 rounded-xl border border-white/10 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeFilter === cat.id
                      ? 'bg-amber-400 text-[#0b1320] shadow'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar & Notice */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-md w-full relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search programmes, languages, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-900/60 border border-white/10 rounded-lg text-xs text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-[11px] text-stone-400 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg">
              <span className="text-amber-400 font-medium">Enrolment Note:</span> Apply Now is open for confirmed programmes. Register Interest is used while schedules are being finalized.
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <SpotlightCard
              key={course.id}
              spotlightColor="rgba(245, 158, 11, 0.15)"
              borderColor="rgba(245, 158, 11, 0.35)"
              className="flex flex-col justify-between h-full group"
            >
              <div>
                {/* Course Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-stone-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-md ${
                        course.status === 'Enrolment Open'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-400 text-stone-950'
                      }`}
                    >
                      {course.status || 'Register Interest'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[11px] text-stone-300 backdrop-blur-sm">
                    {course.duration}
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                    <span className="text-amber-400 font-medium">{course.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.level}</span>
                  </div>

                  <h3 className="text-xl font-serif text-white font-medium mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <div className="text-xs text-stone-300 mb-2 flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{course.instructor}</span>
                  </div>

                  {course.deliveryFormat && (
                    <div className="text-[11px] text-stone-400 flex items-center gap-1.5 mb-4">
                      <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{course.deliveryFormat} · {course.schedule}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between mt-auto">
                <div className="pt-4">
                  {course.price === 0 ? (
                    <span className="text-sm font-semibold text-emerald-400">
                      Open Access
                    </span>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-serif font-bold text-white">
                        ${course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-xs text-stone-500 line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b1320] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/15 rounded-2xl">
            <BookOpen className="w-10 h-10 text-stone-500 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-white">No programmes found matching your criteria</h3>
            <p className="text-xs text-stone-400 mt-1">Try resetting filters or search keywords.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-400 hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* How Enrolment Works Section */}
        <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Admission Guidance
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              How Enrolment Works
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              Find a programme that fits your goals. Review course details and submit your interest or application form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-stone-900/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 block">Step 01</span>
              <h4 className="text-base font-serif font-medium text-white">Choose a Programme</h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Review its learning outcomes, schedule, fees, delivery format, and entry requirements.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 block">Step 02</span>
              <h4 className="text-base font-serif font-medium text-white">Complete the Form</h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Provide your contact and educational information and any specific details requested for that programme.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 block">Step 03</span>
              <h4 className="text-base font-serif font-medium text-white">Receive an Update</h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                SIT will contact you regarding availability, documents, payment and next steps to confirm your admission.
              </p>
            </div>
          </div>

          <div className="pt-2 text-xs text-stone-400 border-t border-white/5">
            <strong className="text-stone-300">Important:</strong> Submitting an interest form does not guarantee a place. A place is confirmed only after SIT completes the programme’s admission process and sends confirmation.
          </div>
        </section>
      </div>

      {/* Course Detail Modal / Syllabus Drawer */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="relative bg-[#0b1320] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 text-stone-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-widest mb-2">
              <span>{selectedCourse.category}</span>
              <span>·</span>
              <span>{selectedCourse.level}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight">
              {selectedCourse.title}
            </h2>

            <p className="text-xs text-stone-400 mb-6">
              Department / Faculty: <strong className="text-stone-200">{selectedCourse.instructor}</strong> ({selectedCourse.instructorTitle})
            </p>

            <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
              {selectedCourse.description}
            </p>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-stone-900/60 p-3.5 rounded-xl border border-white/10 text-xs text-stone-300 mb-6 font-mono">
              <div>
                <span className="text-stone-500 block text-[10px]">DURATION</span>
                <span>{selectedCourse.duration}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">FORMAT</span>
                <span>{selectedCourse.deliveryFormat || 'Interactive'}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">STATUS</span>
                <span className="text-amber-400 font-bold">{selectedCourse.status || 'Register Interest'}</span>
              </div>
            </div>

            {/* Course Features */}
            <div className="bg-stone-900/60 rounded-xl p-4 border border-white/10 mb-6">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
                Key Learning Outcomes & Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                {selectedCourse.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
                Programme Modules ({selectedCourse.syllabus.length} Parts)
              </h4>
              <div className="space-y-2">
                {selectedCourse.syllabus.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white/[0.03] border border-white/5 rounded-lg flex items-start gap-3 text-xs text-stone-300"
                  >
                    <span className="font-mono text-amber-400 font-semibold shrink-0">
                      Module 0{idx + 1}
                    </span>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-400 block">Fee / Tuition</span>
                <span className="text-xl font-serif font-bold text-white">
                  {selectedCourse.price === 0 ? 'Free of Cost' : `$${selectedCourse.price}`}
                </span>
              </div>

              {enrolledCourseId === selectedCourse.id ? (
                <div className="px-5 py-2.5 bg-emerald-600/90 text-white rounded-lg text-xs font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {selectedCourse.status === 'Enrolment Open'
                      ? 'Application Submitted!'
                      : 'Interest Registered!'}
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => setEnrolledCourseId(selectedCourse.id)}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#0b1320] font-semibold text-xs uppercase tracking-wider rounded-lg shadow transition-colors cursor-pointer"
                >
                  {selectedCourse.status === 'Enrolment Open' ? 'Apply Now' : 'Register Interest'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
