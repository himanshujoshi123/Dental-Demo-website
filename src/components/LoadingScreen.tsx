import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated pulsing glow circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-4 rounded-full bg-teal-400/20 blur-xl dark:bg-teal-500/20"
        />

        {/* Dental logo icon animation */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: [0.9, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-emerald-400 text-white shadow-xl shadow-teal-500/20"
        >
          <Sparkles className="h-10 w-10 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {CLINIC_INFO.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-400"
        >
          Georgia’s Trusted Dental Care
        </motion.p>

        {/* Progress bar */}
        <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-400"
          />
        </div>
      </div>
    </motion.div>
  );
};
