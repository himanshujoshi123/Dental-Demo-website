import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Globe,
  Share2,
  Sparkles,
  Zap
} from 'lucide-react';
import { LOCATIONS, CLINIC_INFO } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  const [selectedLocationId, setSelectedLocationId] = useState(LOCATIONS[0].id);

  const activeLoc = LOCATIONS.find((l) => l.id === selectedLocationId) || LOCATIONS[0];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Visit Our Georgia Clinics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Convenient Locations Across Greater Atlanta
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Located conveniently with complimentary covered parking in Buckhead, Alpharetta, and Sandy Springs.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocationId(loc.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                loc.id === selectedLocationId
                  ? 'bg-sky-800 text-white shadow-lg shadow-sky-900/20'
                  : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 border border-white/60 dark:border-white/10'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{loc.name}</span>
            </button>
          ))}
        </div>

        {/* Location Showcase Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info Card */}
          <div className="lg:col-span-5 p-8 rounded-[32px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-500/20">
                  ● Open Today Until 6:00 PM
                </span>
                {activeLoc.isMain && (
                  <span className="text-[10px] font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
                    Flagship Office
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-4">
                {activeLoc.name}
              </h3>

              <div className="mt-6 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{activeLoc.address}</p>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{activeLoc.cityStateZip}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Direct Line</p>
                    <a
                      href={`tel:${activeLoc.phone.replace(/[^0-9]/g, '')}`}
                      className="font-bold text-sky-700 dark:text-sky-300 hover:underline"
                    >
                      {activeLoc.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Email Inquiries</p>
                    <a
                      href={`mailto:${activeLoc.email}`}
                      className="font-bold text-slate-800 dark:text-slate-200 hover:underline"
                    >
                      {activeLoc.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours List */}
              <div className="mt-6 pt-6 border-t border-white/40 dark:border-white/10">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Office Hours:</span>
                </h4>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {activeLoc.hours.map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="font-medium">{h.days}:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Hotline Box */}
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-300/40 text-rose-800 dark:text-rose-300 text-xs flex items-center justify-between gap-2 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-rose-600 animate-pulse" />
                <span className="font-bold">24/7 Emergency Line:</span>
              </div>
              <a
                href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
                className="font-extrabold text-rose-700 dark:text-rose-200 hover:underline"
              >
                {CLINIC_INFO.emergencyPhone}
              </a>
            </div>
          </div>

          {/* Map Simulation */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-900 min-h-[400px]">
            {/* Embedded Google Map Simulation with High Quality Styling */}
            <iframe
              title="Google Map Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLoc.address + ' ' + activeLoc.cityStateZip)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full min-h-[420px] border-0 filter contrast-105"
              loading="lazy"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md p-3 rounded-2xl border border-slate-800 text-white shadow-xl max-w-xs">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs border border-teal-500/30">
                  GA
                </div>
                <div>
                  <p className="text-xs font-bold">{activeLoc.name}</p>
                  <p className="text-[10px] text-slate-400">{activeLoc.cityStateZip}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
