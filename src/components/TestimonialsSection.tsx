import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Pause,
  Play,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Verified Patient Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Thousands of Georgia Families
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Read real stories from patients across Atlanta, Alpharetta, and Sandy Springs who transformed their dental health and smiles with us.
          </p>
        </div>

        {/* Google Rating Banner */}
        <div className="mt-8 max-w-xl mx-auto p-4 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-lg shadow-sky-900/5 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 px-2">
            <div className="h-10 w-10 rounded-full bg-sky-700/10 dark:bg-sky-400/20 flex items-center justify-center text-sky-800 dark:text-sky-300 font-extrabold text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-xs font-extrabold text-slate-900 dark:text-white">
                  {CLINIC_INFO.rating} / 5.0
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Based on {CLINIC_INFO.reviewCount}+ Verified Google Reviews
              </p>
            </div>
          </div>

          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-sky-700 text-white hover:bg-sky-800 text-xs font-bold transition flex items-center gap-1.5 mx-auto sm:mx-0 shadow-md"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Carousel Spotlight */}
        <div className="mt-10 max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-[32px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-200/50 dark:text-slate-800" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                <div className="relative">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    className="w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-teal-500"
                  />
                  {activeReview.verified && (
                    <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-teal-600 text-white shadow-sm" title="Verified Patient">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic leading-relaxed">
                    "{activeReview.review}"
                  </p>

                  <div className="pt-2 border-t border-white/40 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white">
                        {activeReview.name}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                        {activeReview.city} • Treated {activeReview.date}
                      </p>
                    </div>

                    <span className="px-3.5 py-1 rounded-full bg-sky-700/10 dark:bg-sky-400/20 text-sky-900 dark:text-sky-300 font-bold text-[11px] border border-sky-200 dark:border-sky-800">
                      Treatment: {activeReview.treatment}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="mt-6 flex items-center justify-between max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-900 hover:text-teal-600 transition shadow-sm"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? 'w-6 bg-teal-600 dark:bg-teal-400'
                      : 'w-2.5 bg-slate-200 dark:bg-slate-800'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-teal-600 transition"
              title={isAutoPlay ? 'Pause Auto-scroll' : 'Play Auto-scroll'}
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-900 hover:text-teal-600 transition shadow-sm"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
