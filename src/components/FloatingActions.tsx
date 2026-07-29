import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Mobile Floating Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
        className="pointer-events-auto sm:hidden p-3.5 rounded-full bg-rose-600 text-white shadow-2xl border-2 border-white animate-pulse flex items-center justify-center"
        aria-label="Emergency Call"
        title="Call Georgia Dental Care"
      >
        <Phone className="w-5 h-5 fill-white" />
      </a>

      {/* Floating Sticky Book Appointment Button */}
      <button
        onClick={onOpenBooking}
        className="pointer-events-auto px-5 py-3 rounded-full bg-sky-800 hover:bg-sky-900 text-white font-bold text-xs shadow-2xl shadow-sky-950/30 border border-white/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Book Appointment</span>
        <span className="sm:hidden">Book</span>
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-white shadow-xl backdrop-blur-xl border border-white/60 dark:border-white/10 transition hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
};
