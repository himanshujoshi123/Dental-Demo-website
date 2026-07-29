import React from 'react';
import {
  Award,
  Cpu,
  Clock,
  ShieldAlert,
  CreditCard,
  FileCheck,
  Smile
} from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: 'Licensed Dentists',
      subtitle: 'Board Certified & AACD Accredited',
      color: 'text-teal-600 dark:text-teal-400',
      bgColor: 'bg-teal-50 dark:bg-teal-950/50'
    },
    {
      icon: Cpu,
      title: 'Advanced Technology',
      subtitle: '3D iTero & Cone Beam Scanner',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/50'
    },
    {
      icon: Clock,
      title: 'Same-Day Care',
      subtitle: 'Guaranteed Emergency Slots',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/50'
    },
    {
      icon: ShieldAlert,
      title: '24/7 Emergency',
      subtitle: 'Direct Doctor Call Line',
      color: 'text-rose-600 dark:text-rose-400',
      bgColor: 'bg-rose-50 dark:bg-rose-950/50'
    },
    {
      icon: CreditCard,
      title: '0% Financing',
      subtitle: 'CareCredit & Sunbit Plans',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/50'
    },
    {
      icon: FileCheck,
      title: 'Insurances Accepted',
      subtitle: 'Delta, MetLife, Cigna & PPOs',
      color: 'text-sky-600 dark:text-sky-400',
      bgColor: 'bg-sky-50 dark:bg-sky-950/50'
    },
    {
      icon: Smile,
      title: '14,500+ Patients',
      subtitle: '4.9 Star Google Rating',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/50'
    }
  ];

  return (
    <section className="py-8 border-y border-white/40 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div className={`p-2.5 rounded-xl ${item.bgColor} ${item.color} mb-2`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
