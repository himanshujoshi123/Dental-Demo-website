import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ga_dental_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ga_dental_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ga_dental_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-md bg-slate-950/80 backdrop-blur-2xl text-white p-5 rounded-[28px] shadow-2xl border border-white/10"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy & Cookie Preferences</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-slate-300 mt-2 leading-relaxed font-light">
          We use cookies to improve your browsing experience, analyze site traffic, and deliver secure appointment scheduling.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 rounded-full bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition shadow-md"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold transition border border-white/10"
          >
            Essential Only
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
