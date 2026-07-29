import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  GraduationCap,
  Heart,
  CheckCircle,
  Star,
  Users,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState(DOCTORS[0].id);

  const activeDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Excellence in Georgia Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Patient-Centered Care Backed by Science & Compassion
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded in Atlanta, Georgia Dental Care has provided exceptional dental health and cosmetic smile design for over 16 years. We believe every patient deserves a warm, pain-free environment, transparent pricing, and world-class clinical outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 text-center shadow-lg shadow-sky-900/5">
            <div className="text-3xl sm:text-4xl font-black text-sky-900 dark:text-sky-300">
              {CLINIC_INFO.yearsInPractice}+
            </div>
            <div className="mt-1 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Years in Practice
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Serving Atlanta & Surrounding GA Communities
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 text-center shadow-lg shadow-sky-900/5">
            <div className="text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400">
              14,500+
            </div>
            <div className="mt-1 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Patients Treated
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Families & Individuals across Georgia
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 text-center shadow-lg shadow-sky-900/5">
            <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl font-black text-amber-500">
              <span>4.9</span>
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-1 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Google Rating
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Based on 1,280+ Verified Reviews
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 text-center shadow-lg shadow-sky-900/5">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
              100%
            </div>
            <div className="mt-1 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Board Certified
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              ADA & Georgia Dental Association
            </p>
          </div>
        </div>

        {/* Doctor Spotlight */}
        <div className="mt-16 bg-white/40 dark:bg-slate-900/50 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-white/60 dark:border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-200/30 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Doctor Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 border-b border-white/40 dark:border-white/10 pb-6">
            <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mr-2">
              Meet Our Dentists:
            </span>
            {DOCTORS.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDoctorId(doc.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  doc.id === selectedDoctorId
                    ? 'bg-sky-700 text-white shadow-lg shadow-sky-200 dark:shadow-none'
                    : 'bg-white/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {doc.name}
              </button>
            ))}
          </div>

          {/* Active Doctor Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <img
                  src={activeDoctor.image}
                  alt={activeDoctor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-800">
                  <p className="text-sm font-bold text-white">{activeDoctor.name}</p>
                  <p className="text-xs text-teal-400 font-medium">{activeDoctor.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                  {activeDoctor.specialty}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeDoctor.name}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-medium">
                  <GraduationCap className="w-4 h-4 text-teal-400" />
                  {activeDoctor.education}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                "{activeDoctor.bio}"
              </p>

              {/* Credentials & Memberships */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Professional Credentials & Accreditations:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeDoctor.credentials.map((cred, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-teal-300 text-xs font-semibold border border-slate-700"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book with {activeDoctor.name.split(',')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
