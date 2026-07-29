import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface EmergencyTriageProps {
  onOpenBooking: () => void;
}

export const EmergencyTriage: React.FC<EmergencyTriageProps> = ({ onOpenBooking }) => {
  const [symptom, setSymptom] = useState<string | null>(null);

  const symptoms = [
    { id: 'pain', label: 'Severe Tooth Pain / Throbbing', urgency: 'High', advice: 'Possible root infection or deep cavity. Requires immediate same-day pain relief.' },
    { id: 'broken', label: 'Broken, Chipped, or Cracked Tooth', urgency: 'High', advice: 'Save any broken pieces in clean water/milk. Avoid chewing on that side.' },
    { id: 'knocked', label: 'Knocked-Out Permanent Tooth', urgency: 'CRITICAL', advice: 'Handle tooth by crown only! Keep in milk or saline. Re-implantation must occur within 60 mins!' },
    { id: 'swelling', label: 'Facial Swelling or Gum Abscess', urgency: 'High', advice: 'Indicates bacterial infection. Apply cold compress and call emergency line immediately.' },
    { id: 'lost-crown', label: 'Lost Crown or Filling', urgency: 'Moderate', advice: 'Keep area clean. Same-day temporary crown re-bonding available.' }
  ];

  const selectedSymptom = symptoms.find((s) => s.id === symptom);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-white/60 dark:border-white/10 shadow-2xl">
          
          <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
            <div className="p-2.5 rounded-2xl bg-rose-500/10 dark:bg-rose-950/60 border border-rose-200/50">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Emergency Dental Triage Helper
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Experiencing sudden dental pain in Georgia? Select your primary symptom for instant guidance.
              </p>
            </div>
          </div>

          {/* Symptom Buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            {symptoms.map((s) => (
              <button
                key={s.id}
                onClick={() => setSymptom(s.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition ${
                  symptom === s.id
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/60 dark:border-white/10'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Symptom Result Guidance */}
          {selectedSymptom && (
            <div className="mt-6 p-5 rounded-2xl bg-rose-500/10 dark:bg-rose-950/40 border border-rose-300/40 space-y-3 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  Symptom: {selectedSymptom.label}
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-extrabold uppercase tracking-wider">
                  Urgency: {selectedSymptom.urgency}
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {selectedSymptom.advice}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
                  className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Emergency Hotline: {CLINIC_INFO.emergencyPhone}</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-full bg-sky-950 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <span>Request Same-Day Emergency Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
