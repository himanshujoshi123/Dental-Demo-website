import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Heart,
  ArrowUp
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/80 backdrop-blur-2xl text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-teal-400 text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white leading-tight">
                  Georgia<span className="text-sky-400">Dental</span>
                </span>
                <span className="block text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                  Care & Aesthetics
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              Georgia’s premier family and cosmetic dental practice. Delivering 5-star comfortable, pain-free dental care, 3D intraoral digital precision, and long-lasting smile makeovers.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-sky-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Board Certified Georgia Dental Association Practice</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition">About Our Dentists</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Dental Services</a></li>
              <li><a href="#before-after" className="hover:text-teal-400 transition">Before & After Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition">Patient Testimonials</a></li>
              <li><a href="#insurance" className="hover:text-teal-400 transition">Insurance & CareCredit</a></li>
              <li><a href="#blog" className="hover:text-teal-400 transition">Dental Health Blog</a></li>
              <li><a href="#faqs" className="hover:text-teal-400 transition">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Featured Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-teal-400 transition">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Emergency
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>3400 Peachtree Rd NE, Suite 800, Atlanta, GA 30326</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white font-bold">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: By Appointment Only</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Georgia Dental Care & Aesthetics. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#home" className="hover:text-slate-300 transition">WCAG Accessibility</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition shadow-sm border border-slate-800 flex items-center gap-1.5 text-[11px]"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
