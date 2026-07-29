import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  Stethoscope,
  Sun,
  Smile,
  Activity,
  Shield,
  Heart,
  Zap,
  Scissors,
  Crown
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { DentalService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: DentalService) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'general', label: 'General Care' },
    { id: 'cosmetic', label: 'Cosmetic & Smiles' },
    { id: 'orthodontics', label: 'Invisalign & Ortho' },
    { id: 'surgical', label: 'Implants & Surgery' },
    { id: 'emergency', label: '24/7 Emergency' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;
    const matchesQuery =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Sparkles': return Sparkles;
      case 'Sun': return Sun;
      case 'ShieldCheck': return ShieldCheck;
      case 'Crown': return Crown;
      case 'Smile': return Smile;
      case 'Activity': return Activity;
      case 'Shield': return Shield;
      case 'Heart': return Heart;
      case 'Zap': return Zap;
      case 'Scissors': return Scissors;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Comprehensive Dental Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Advanced Dental Care for Every Smile
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            From routine prophylaxis cleanings to full arch dental implants and Hollywood porcelain veneers, we deliver world-class dental procedures with 3D precision.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-sky-700 text-white shadow-lg shadow-sky-200 dark:shadow-none'
                    : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/60 dark:border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col rounded-[28px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 overflow-hidden shadow-lg shadow-sky-900/5 hover:shadow-2xl hover:border-white/90 hover:-translate-y-1 transition-all"
              >
                {/* Image & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {service.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-700/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold">{service.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="pt-3 border-t border-white/40 dark:border-white/10 space-y-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        {service.duration}
                      </span>
                      <span className="font-semibold text-sky-900 dark:text-sky-300">
                        {service.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-1 flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="flex-1 py-2.5 px-3 rounded-full bg-white/70 dark:bg-slate-800/80 hover:bg-sky-700 hover:text-white dark:hover:bg-sky-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="py-2.5 px-3.5 rounded-full bg-sky-700/10 dark:bg-sky-400/20 hover:bg-sky-700 hover:text-white text-sky-900 dark:text-sky-200 text-xs font-bold transition"
                      title="Book this service"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No dental services found matching your search. Try adjusting keywords.
          </div>
        )}

      </div>
    </section>
  );
};
