import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  CreditCard,
  Calculator,
  ShieldCheck,
  Percent,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INSURANCES } from '../data/clinicData';

interface InsuranceSectionProps {
  onOpenBooking: () => void;
}

export const InsuranceSection: React.FC<InsuranceSectionProps> = ({ onOpenBooking }) => {
  const [query, setQuery] = useState('');
  const [calcAmount, setCalcAmount] = useState(1500);

  const filteredInsurances = INSURANCES.filter(
    (ins) =>
      ins.name.toLowerCase().includes(query.toLowerCase()) ||
      ins.description.toLowerCase().includes(query.toLowerCase())
  );

  const monthlyPayment6 = Math.round(calcAmount / 6);
  const monthlyPayment12 = Math.round(calcAmount / 12);
  const monthlyPayment24 = Math.round(calcAmount / 24);

  return (
    <section id="insurance" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Seamless Billing & Financing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Insurances & Flexible Payment Options
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            We work directly with all major Georgia PPO dental insurance providers to maximize your benefits. No insurance? Explore our 0% APR CareCredit financing and $29/mo Smiles Membership Plan.
          </p>
        </div>

        {/* Interactive Search Tool */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search your insurance provider (e.g., Delta, MetLife, Cigna, BCBS)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm transition"
            />
          </div>
        </div>

        {/* Insurance Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsurances.map((ins, index) => (
            <div
              key={index}
              className="p-6 rounded-[28px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-lg shadow-sky-900/5 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className={`px-3 py-1 rounded-lg text-white font-black text-xs ${ins.color}`}>
                    {ins.logoText}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    {ins.acceptedStatus}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-3">
                  {ins.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {ins.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/40 dark:border-white/10 text-[11px] text-teal-600 dark:text-teal-400 font-semibold flex items-center gap-1">
                <span>Claims filed directly by our staff</span>
              </div>
            </div>
          ))}
        </div>

        {filteredInsurances.length === 0 && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-xs">
            Can’t find your provider listed? Don’t worry! We accept nearly all PPO plans. Call us at (404) 555-0199 for an instant verification.
          </div>
        )}

        {/* Financing Calculator & Membership Plan */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CareCredit 0% Financing Estimator */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-bold">0% APR CareCredit Payment Estimator</h3>
            </div>
            <p className="text-xs text-slate-300">
              Calculate your estimated low monthly payments for cosmetic veneers, dental implants, or Invisalign.
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Estimated Treatment Cost:</span>
                <span className="text-teal-300 text-lg">${calcAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="300"
                max="8000"
                step="100"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>$300</span>
                <span>$4,000</span>
                <span>$8,000</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">6 Months 0%</span>
                <span className="text-sm font-extrabold text-teal-300">${monthlyPayment6}/mo</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">12 Months 0%</span>
                <span className="text-sm font-extrabold text-teal-300">${monthlyPayment12}/mo</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">24 Months Low APR</span>
                <span className="text-sm font-extrabold text-teal-300">${monthlyPayment24}/mo</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-xs shadow-md transition hover:opacity-95"
            >
              Apply for Pre-Qualification with Zero Soft Credit Impact
            </button>
          </div>

          {/* In-House Smiles Membership Plan */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 flex flex-col justify-between space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider">
                For Uninsured Patients
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                GA Smiles Membership Plan
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-black text-teal-600 dark:text-teal-400">$29</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">/ month</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                No deductibles, no waiting periods, and no annual maximums.
              </p>

              <div className="mt-4 space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>2 Professional Dental Cleanings & Exams / Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Annual Digital 3D X-Rays & Fluoride Treatments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>1 Emergency Dental Exam per Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>20% OFF All Fillings, Crowns, Implants & Whitening</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
            >
              <span>Join Membership Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
