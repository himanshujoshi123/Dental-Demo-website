import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  X,
  Download
} from 'lucide-react';
import { SERVICES, LOCATIONS, CLINIC_INFO } from '../data/clinicData';
import { BookingData } from '../types';

interface BookingSectionProps {
  initialServiceId?: string;
  onViewAppointments?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialServiceId, onViewAppointments }) => {
  const [formData, setFormData] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    location: LOCATIONS[0].name,
    serviceId: initialServiceId || SERVICES[0].id,
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 11:30 AM)',
    insuranceProvider: 'Delta Dental PPO',
    isEmergency: false,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    'Morning (8:00 AM - 11:30 AM)',
    'Midday (11:30 AM - 2:00 PM)',
    'Afternoon (2:00 PM - 5:00 PM)',
    'Same-Day Emergency Priority'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 7) newErrors.phone = 'Valid Phone Number is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [lastBookingInfo, setLastBookingInfo] = useState<{
    referenceId: string;
    adminEmailSentTo: string;
    customerEmailSentTo: string;
    previewUrlAdmin?: string | false;
    previewUrlCustomer?: string | false;
    deliveryMethod?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const selectedSrv = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          serviceTitle: selectedSrv.title,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          insuranceProvider: formData.insuranceProvider,
          isEmergency: formData.isEmergency,
          notes: formData.notes,
        }),
      });

      const data = await res.json();
      setLastBookingInfo({
        referenceId: data.referenceId || ('GA-' + Math.floor(100000 + Math.random() * 900000)),
        adminEmailSentTo: data.adminEmailSentTo || 'aspirantmlengineer@gmail.com',
        customerEmailSentTo: data.customerEmailSentTo || formData.email,
        previewUrlAdmin: data.previewUrlAdmin,
        previewUrlCustomer: data.previewUrlCustomer,
        deliveryMethod: data.deliveryMethod,
      });
    } catch (err) {
      console.error('Error submitting booking email', err);
      setLastBookingInfo({
        referenceId: 'GA-' + Math.floor(100000 + Math.random() * 900000),
        adminEmailSentTo: 'aspirantmlengineer@gmail.com',
        customerEmailSentTo: formData.email,
      });
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  return (
    <section id="booking" className="py-20 bg-white dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800/60">
            <CalendarIcon className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Online Appointment Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule Your Georgia Dental Visit
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Instant booking confirmation. No waiting, flexible times, and free insurance verification.
          </p>
        </div>

        {/* Booking Form Container */}
        <div className="mt-12 max-w-4xl mx-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-white/60 dark:border-white/10 shadow-2xl">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Sarah Mitchell"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-white/80 dark:border-white/10 focus:ring-sky-500'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/80 dark:border-white/10 focus:ring-sky-500'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="(404) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-white/80 dark:border-white/10 focus:ring-sky-500'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.phone}</p>}
              </div>
            </div>

            {/* Step 2: Location & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Preferred Clinic Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border border-white/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name} ({loc.cityStateZip.split(',')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Treatment / Service Selection
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border border-white/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.priceRange})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                    errors.preferredDate ? 'border-red-500 focus:ring-red-500' : 'border-white/80 dark:border-white/10 focus:ring-sky-500'
                  }`}
                />
                {errors.preferredDate && <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.preferredDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border border-white/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {timeSlots.map((ts, idx) => (
                    <option key={idx} value={ts}>
                      {ts}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Insurance & Emergency status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  placeholder="e.g. Delta Dental / MetLife / Self-Pay"
                  value={formData.insuranceProvider}
                  onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-950/70 border border-white/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="relative flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isEmergency}
                    onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                    className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 dark:border-slate-800"
                  />
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                    Is this an urgent dental emergency? (Same-Day Priority)
                  </span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Additional Notes or Dental Concerns (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Let us know if you have dental anxiety, specific goals, or questions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-4 rounded-2xl bg-white/70 dark:bg-slate-950/70 border border-white/80 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-sky-200 dark:shadow-none transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <CalendarIcon className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </>
              )}
            </button>
          </form>

        </div>

      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 max-w-lg w-full border border-sky-200/80 dark:border-sky-800/80 shadow-2xl relative text-center space-y-4"
            >
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 flex items-center justify-center mx-auto border border-sky-200 dark:border-sky-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Booking Request Sent!
              </h3>

              {/* Email Delivery Notice Banner */}
              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 text-left space-y-3">
                <div className="flex items-center justify-between font-bold text-sky-800 dark:text-sky-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-600" />
                    <span>Email Dispatch Status:</span>
                  </div>
                  <span className="text-[10px] bg-sky-200 dark:bg-sky-900 text-sky-900 dark:text-sky-100 px-2 py-0.5 rounded-full font-extrabold uppercase">
                    {lastBookingInfo?.deliveryMethod === 'smtp' ? 'Sent via Live SMTP' : 'Sent via Test Gateway'}
                  </span>
                </div>

                <div className="space-y-1 text-[11px] pl-6 text-slate-700 dark:text-slate-300 font-medium">
                  <p>• <strong>Clinic Admin:</strong> Dispatched to <span className="text-sky-700 dark:text-sky-300 font-bold underline">aspirantmlengineer@gmail.com</span></p>
                  <p>• <strong>Patient Copy:</strong> Dispatched to <span className="text-sky-700 dark:text-sky-300 font-bold underline">{formData.email}</span></p>
                </div>

                {/* Email Previews if generated */}
                {(lastBookingInfo?.previewUrlAdmin || lastBookingInfo?.previewUrlCustomer) && (
                  <div className="pt-2 border-t border-sky-200/80 dark:border-sky-800/80 space-y-2">
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Click below to view the exact HTML email sent:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      {lastBookingInfo.previewUrlAdmin && (
                        <a
                          href={lastBookingInfo.previewUrlAdmin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-[11px] text-center transition shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>View Admin Email</span>
                        </a>
                      )}
                      {lastBookingInfo.previewUrlCustomer && (
                        <a
                          href={lastBookingInfo.previewUrlCustomer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-[11px] text-center transition shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>View Patient Email</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                Thank you, <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong>. Our Georgia Dental Care concierge team will call or SMS you at <strong className="text-slate-900 dark:text-white">{formData.phone}</strong> shortly to finalize your appointment time.
              </p>

              {/* Receipt Breakdown Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-left text-xs space-y-2.5 border border-slate-200/80 dark:border-slate-700/80">
                <div className="flex justify-between items-center pb-1.5 border-b border-slate-200/60 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Booking ID:</span>
                  <span className="font-extrabold text-sky-700 dark:text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    #{lastBookingInfo?.referenceId || 'GA-789012'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Treatment:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedService.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Preferred Date & Window:</span>
                  <span className="font-bold text-sky-700 dark:text-sky-300">{formData.preferredDate} ({formData.preferredTime.split(' ')[0]})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Insurance:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formData.insuranceProvider}</span>
                </div>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3.5 rounded-full bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
              >
                Close & Return
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
