import React from 'react';
import {
  Award,
  Cpu,
  Heart,
  DollarSign,
  Zap,
  Smile,
  MapPin,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Experienced Dentists',
      description: 'Our lead doctors hold 16+ years of clinical excellence, Harvard/Emory training, and AACD cosmetic accreditations.',
      color: 'text-teal-600 dark:text-teal-400',
      bgColor: 'bg-teal-50 dark:bg-teal-950/50'
    },
    {
      icon: Cpu,
      title: 'Modern Equipment',
      description: 'Equipped with 3D iTero intraoral scanners, Cone Beam CT, and pain-free laser dentistry for precision diagnostics.',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/50'
    },
    {
      icon: Heart,
      title: 'Pain-Free Treatments',
      description: 'Gentle local anesthesia, Nitrous Oxide laughing gas, and IV sleep sedation options for complete stress-free visits.',
      color: 'text-rose-600 dark:text-rose-400',
      bgColor: 'bg-rose-50 dark:bg-rose-950/50'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or unexpected bills. Clear upfront treatment estimates and zero-interest CareCredit options.',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/50'
    },
    {
      icon: Zap,
      title: 'Emergency Appointments',
      description: 'Guaranteed same-day triage and treatment for sudden severe toothaches, broken teeth, or lost crowns.',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/50'
    },
    {
      icon: Smile,
      title: 'Friendly Staff',
      description: 'Our warm, multi-lingual patient care concierges make every family member feel valued and welcomed.',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/50'
    },
    {
      icon: MapPin,
      title: 'Convenient GA Locations',
      description: 'State-of-the-art clinics located across Atlanta Buckhead, Alpharetta, and Sandy Springs with free covered parking.',
      color: 'text-sky-600 dark:text-sky-400',
      bgColor: 'bg-sky-50 dark:bg-sky-950/50'
    },
    {
      icon: ShieldCheck,
      title: 'Sterilization Guarantee',
      description: 'Hospital-grade autoclaves and strict OSHA/CDC sterile protocols to protect your health at all times.',
      color: 'text-teal-600 dark:text-teal-400',
      bgColor: 'bg-teal-50 dark:bg-teal-950/50'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>The Georgia Dental Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Patients Choose Georgia Dental Care
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            We redefine the modern dental visit by combining cutting-edge digital technology with warm Southern hospitality.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-[28px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-lg shadow-sky-900/5 hover:shadow-2xl hover:border-white/90 hover:-translate-y-1 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${feat.bgColor} ${feat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
