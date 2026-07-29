import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Phone,
  Star,
  ShieldCheck,
  Zap,
  Award,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-20 text-slate-900 dark:text-white">
      
      {/* Ambient Radial Decor Blobs */}
      <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-teal-200/40 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-blue-200/40 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero & Trust */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-full border border-white/60 dark:border-white/10 shadow-sm self-center lg:self-start"
            >
              <div className="flex text-teal-600 dark:text-teal-400 text-xs font-bold tracking-tighter">
                ★★★★★
              </div>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                4.9/5 Rating ({CLINIC_INFO.reviewCount}+ Patient Reviews)
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-950 dark:text-white leading-[1.12] tracking-tight"
            >
              Creating Healthy & <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-600 italic">
                Beautiful Smiles
              </span>{' '}
              in Georgia
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              Premium dental care in the heart of Georgia. We combine advanced 3D intraoral technology with a compassionate, family-friendly touch across Atlanta, Alpharetta & Sandy Springs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-bold rounded-full shadow-lg shadow-sky-200 dark:shadow-none hover:scale-105 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full sm:w-auto px-8 py-4 bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border border-white/60 dark:border-white/10 text-sky-900 dark:text-sky-200 font-bold rounded-full backdrop-blur-md transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </motion.div>

            {/* Floating Trust Badges - Frosted Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-2"
            >
              <div className="p-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/50 dark:border-white/10 shadow-sm text-center lg:text-left">
                <p className="text-2xl font-bold text-sky-900 dark:text-sky-200">{CLINIC_INFO.yearsInPractice}+</p>
                <p className="text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wide">Years Experience</p>
              </div>
              <div className="p-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/50 dark:border-white/10 shadow-sm text-center lg:text-left">
                <p className="text-2xl font-bold text-sky-900 dark:text-sky-200">SameDay</p>
                <p className="text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wide">Appointments</p>
              </div>
              <div className="p-4 bg-teal-600/10 dark:bg-teal-500/10 backdrop-blur-md rounded-2xl border border-teal-200/50 dark:border-teal-500/20 shadow-sm text-center lg:text-left">
                <p className="text-2xl font-bold text-teal-700 dark:text-teal-300">24/7</p>
                <p className="text-[10px] uppercase text-teal-600 dark:text-teal-400 font-bold tracking-wide">Emergency Care</p>
              </div>
            </motion.div>

            {/* Mini Services Gallery */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-2.5 px-4 py-2 bg-white/80 dark:bg-slate-900/80 rounded-xl shadow-sm border border-white/80 dark:border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200 uppercase tracking-wider">Implants</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 bg-white/80 dark:bg-slate-900/80 rounded-xl shadow-sm border border-white/80 dark:border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200 uppercase tracking-wider">Invisalign</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 bg-white/80 dark:bg-slate-900/80 rounded-xl shadow-sm border border-white/80 dark:border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 bg-sky-500 rounded-full" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200 uppercase tracking-wider">Whitening</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/40 dark:bg-slate-900/50 backdrop-blur-2xl p-6 sm:p-8 rounded-[32px] border border-white/60 dark:border-white/10 shadow-2xl flex flex-col gap-5"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                  alt="Friendly Dentist and Patient Smiling"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent" />

                {/* Floating Emergency Pill */}
                <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-red-300/40 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 fill-white text-white animate-pulse" />
                  <span>24/7 Emergency Care</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-white/60 dark:border-white/10 text-slate-900 dark:text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold text-xs border border-teal-500/30">
                        GA
                      </div>
                      <div>
                        <p className="text-xs font-bold text-sky-950 dark:text-white">Georgia Dental Care</p>
                        <p className="text-[11px] text-teal-600 dark:text-teal-300 font-medium">Same-Day Appointments</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                      Open Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Feature Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-white/80 dark:border-white/10 text-xs flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-slate-800 dark:text-slate-200 text-[11px] font-semibold">100% Gentle Care</span>
                </div>
                <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-white/80 dark:border-white/10 text-xs flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                  <span className="text-slate-800 dark:text-slate-200 text-[11px] font-semibold">0% CareCredit Financing</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/40 dark:border-white/10 flex items-center justify-between">
                <div className="flex -space-x-2 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Patient avatar" className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Patient avatar" className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" alt="Patient avatar" className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                </div>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide">Joined by 300+ families this month</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
