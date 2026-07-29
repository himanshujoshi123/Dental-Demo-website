import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  MoveHorizontal,
  CheckCircle2,
  Clock,
  User,
  Award,
  Maximize2,
  X
} from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/clinicData';
import { BeforeAfterItem } from '../types';

export const BeforeAfterSection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeItem = BEFORE_AFTER_ITEMS[selectedItemIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Interactive Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Real Smile Makeover Results
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Drag the handle left and right to compare real Georgia Dental Care patient smile transformations before and after treatment.
          </p>
        </div>

        {/* Transformation Selectors */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                idx === selectedItemIndex
                  ? 'bg-sky-700 text-white shadow-lg shadow-sky-200 dark:shadow-none'
                  : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/60 dark:border-white/10'
              }`}
            >
              {item.category}: {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Canvas */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-white/60 dark:border-white/10 select-none cursor-ew-resize group"
            >
              {/* After Image (Background) */}
              <img
                src={activeItem.afterImage}
                alt="After Treatment Smile"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt="Before Treatment Smile"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
              </div>

              {/* Before & After Text Overlay Badges */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md border border-white/20 pointer-events-none">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 bg-teal-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md border border-white/20 pointer-events-none">
                AFTER
              </div>

              {/* Drag Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-teal-600 shadow-2xl flex items-center justify-center border-2 border-teal-500 transform group-hover:scale-110 transition-transform">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Zoom Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition shadow-md"
                title="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
              Drag or touch the slider handle to inspect transformation details
            </p>
          </div>

          {/* Details & Case Highlights */}
          <div className="lg:col-span-5 space-y-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 rounded-[32px] border border-white/60 dark:border-white/10 shadow-lg shadow-sky-900/5">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                {activeItem.category} Case Study
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {activeItem.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            {/* Case Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/80 dark:border-white/10">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">Treatment Duration</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  {activeItem.treatmentDuration}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/80 dark:border-white/10">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">Patient</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mt-0.5">
                  <User className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {activeItem.patientAge}
                </span>
              </div>
            </div>

            {/* Highlights List */}
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                Transformation Highlights:
              </h4>
              <div className="space-y-2">
                {activeItem.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-500" />
              <span>Procedure performed by <strong className="text-slate-700 dark:text-slate-200">{activeItem.doctorName}</strong></span>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl p-4 overflow-hidden border border-slate-800">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center text-white mb-4">
              <h3 className="text-lg font-bold">{activeItem.title}</h3>
              <p className="text-xs text-slate-400">High Resolution Comparison</p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
              <img
                src={activeItem.afterImage}
                alt="After"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
