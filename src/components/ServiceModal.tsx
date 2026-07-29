import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  Sparkles,
  DollarSign
} from 'lucide-react';
import { DentalService } from '../types';

interface ServiceModalProps {
  service: DentalService | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenBooking,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white/60 dark:bg-slate-950/70 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 max-w-2xl w-full border border-white/80 dark:border-white/10 shadow-2xl relative my-8 space-y-6 max-h-[85vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-500 hover:text-slate-900 dark:hover:text-white transition border border-white/60 dark:border-white/10 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image & Title */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              {service.badge && (
                <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  {service.badge}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold">{service.title}</h2>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Procedure Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Duration</span>
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-teal-500" />
                {service.duration}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Recovery</span>
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                {service.recoveryTime}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Price Range</span>
              <span className="font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 mt-0.5">
                <DollarSign className="w-3.5 h-3.5" />
                {service.priceRange}
              </span>
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Key Patient Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Step-by-Step Clinical Process
            </h3>
            <div className="space-y-2">
              {service.procedureSteps.map((step, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs flex items-start gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-[10px]">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment For {service.title}</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
