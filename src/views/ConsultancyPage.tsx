'use client';

import React, { useState } from 'react';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { SIT_CORE_AREAS } from '../data/sitData';
import { CheckCircle2, Send, Shield, Clock, HelpCircle, Building2, Phone, Mail, User, AlertCircle } from 'lucide-react';

export const ConsultancyPage: React.FC = () => {
  const enquiryCategories = [
    'Curriculum Adoption',
    'Books and Publications',
    'Programme Enrolment',
    'Teacher Training',
    'Consultancy',
    'General Enquiry',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: enquiryCategories[0],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    date: string;
    enquiryType: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 6) {
      errs.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details of your enquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least a brief message (minimum 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
      setSubmittedTicket({
        id: `SIT-ENQ-${randomTicketNum}`,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        enquiryType: formData.enquiryType,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        enquiryType: enquiryCategories[0],
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1320] text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
            Research and Consultancy
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Research That Informs Our Work
          </h1>
          <p className="text-stone-300 text-sm md:text-base mt-2 max-w-3xl font-light leading-relaxed">
            SIT’s research supports curriculum development, publication and thoughtful engagement with educational questions. We aim to review content carefully, draw on relevant expertise and improve our materials through evidence and classroom experience.
          </p>
        </div>

        {/* Two-Column Section: Overview & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Scope & Services (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-serif text-white">
                Consultancy and Student Support
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                SIT’s consultancy work includes educational support and assistance with student application files for universities in the United States and other countries. Available services, scope and any applicable fees are discussed with each applicant before work begins.
              </p>

              <div className="space-y-3 pt-2 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>School Curriculum Adoption:</strong> Helping schools introduce the integrated curriculum suited to their students, grades and academic framework.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Classroom-Tested Model:</strong> Implementation insights and materials informed by continuing experience at Spectrum International School.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Teacher Preparation:</strong> Discussion on teacher training, lesson planning, and practical classroom implementation.</span>
                </div>
              </div>
            </div>

            {/* Core Areas */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
                Eight Core Areas of SIT
              </h4>
              <div className="space-y-2.5">
                {SIT_CORE_AREAS.map((area, idx) => (
                  <div
                    key={area.id}
                    className="p-3.5 rounded-xl bg-stone-900/60 border border-white/5 text-xs hover:border-amber-400/30 transition-colors"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-serif font-medium text-stone-200">
                        {idx + 1}. {area.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 leading-relaxed">
                      {area.scope}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Query Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.12)"
              borderColor="rgba(245, 158, 11, 0.3)"
              className="p-8 md:p-10 bg-stone-900/80"
            >
              {submittedTicket ? (
                /* Success Confirmation State */
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                      Enquiry Dispatched
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white">
                      Thank you for contacting SIT
                    </h3>
                  </div>

                  <div className="bg-stone-950/80 border border-white/10 rounded-xl p-6 text-left max-w-md mx-auto space-y-2 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-stone-400">Reference:</span>
                      <span className="font-mono text-amber-400 font-bold">
                        {submittedTicket.id}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-stone-400">Date:</span>
                      <span className="text-stone-200">{submittedTicket.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Category:</span>
                      <span className="text-stone-200 truncate max-w-[200px]">
                        {submittedTicket.enquiryType}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                    School of Integrated Thoughts is a project under Spectrum EduCare Limited. Our team has received your enquiry and will be in touch shortly.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmittedTicket(null)}
                      className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
                      Contact
                    </span>
                    <h3 className="text-2xl font-serif text-white">
                      Connect With SIT
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      Whether you represent a school, want to join a programme, need learning resources or would like to discuss a partnership, we would like to hear from you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Full Name <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="e.g. Dr. Salman Farooq"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: '' });
                            }}
                            className={`w-full pl-9 pr-3.5 py-2.5 bg-stone-950/80 border rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                              errors.name
                                ? 'border-rose-500 focus:border-rose-500'
                                : 'border-white/10 focus:border-amber-400'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Institutional Email <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            placeholder="s.farooq@institution.edu"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: '' });
                            }}
                            className={`w-full pl-9 pr-3.5 py-2.5 bg-stone-950/80 border rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                              errors.email
                                ? 'border-rose-500 focus:border-rose-500'
                                : 'border-white/10 focus:border-amber-400'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone & Organization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Phone Number <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            placeholder="+880 1711-XXXXXX"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (errors.phone) setErrors({ ...errors, phone: '' });
                            }}
                            className={`w-full pl-9 pr-3.5 py-2.5 bg-stone-950/80 border rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                              errors.phone
                                ? 'border-rose-500 focus:border-rose-500'
                                : 'border-white/10 focus:border-amber-400'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1.5">
                          Organization / School Name (Optional)
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="e.g. Spectrum EduCare / Darul Huda"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({ ...formData, organization: e.target.value })
                            }
                            className="w-full pl-9 pr-3.5 py-2.5 bg-stone-950/80 border border-white/10 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Enquiry Type Dropdown */}
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Enquiry Type <span className="text-amber-400">*</span>
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, enquiryType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-stone-950/90 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        {enquiryCategories.map((cat) => (
                          <option
                            key={cat}
                            value={cat}
                            className="bg-stone-900 text-stone-100"
                          >
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Message <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please describe your enquiry, requirements, or institutional setting..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        className={`w-full p-3.5 bg-stone-950/80 border rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                          errors.message
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/10 focus:border-amber-400'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 disabled:bg-stone-700 text-[#0b1320] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending Enquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-center text-stone-500 pt-2">
                      School of Integrated Thoughts is a project under Spectrum EduCare Limited.
                    </p>
                  </form>
                </div>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyPage;
