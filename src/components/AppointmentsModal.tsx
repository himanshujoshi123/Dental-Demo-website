import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  ShieldCheck,
  AlertCircle,
  Trash2,
  Printer,
  Plus,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export interface StoredAppointment {
  id: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Call' | 'Completed';
  fullName: string;
  email: string;
  phone: string;
  location: string;
  serviceTitle: string;
  preferredDate: string;
  preferredTime: string;
  insuranceProvider: string;
  isEmergency: boolean;
  notes?: string;
}

interface AppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewBooking: () => void;
}

export const AppointmentsModal: React.FC<AppointmentsModalProps> = ({
  isOpen,
  onClose,
  onNewBooking,
}) => {
  const [appointments, setAppointments] = useState<StoredAppointment[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'emergency'>('all');

  const loadAppointments = () => {
    try {
      const data = localStorage.getItem('ga_dental_appointments');
      if (data) {
        setAppointments(JSON.parse(data));
      } else {
        setAppointments([]);
      }
    } catch (e) {
      console.error('Failed to parse appointments', e);
      setAppointments([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadAppointments();
    }
  }, [isOpen]);

  // Listen to window storage events to update real-time
  useEffect(() => {
    const handleStorageChange = () => {
      loadAppointments();
    };
    window.addEventListener('ga_appointments_updated', handleStorageChange);
    return () => {
      window.removeEventListener('ga_appointments_updated', handleStorageChange);
    };
  }, []);

  const handleCancelAppointment = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this appointment request?')) {
      const updated = appointments.filter((app) => app.id !== id);
      setAppointments(updated);
      localStorage.setItem('ga_dental_appointments', JSON.stringify(updated));
      window.dispatchEvent(new Event('ga_appointments_updated'));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all appointment records?')) {
      setAppointments([]);
      localStorage.removeItem('ga_dental_appointments');
      window.dispatchEvent(new Event('ga_appointments_updated'));
    }
  };

  const handlePrint = (app: StoredAppointment) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Appointment Confirmation - Georgia Dental Care #${app.id}</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 40px; color: #0f172a; line-height: 1.5; }
            .header { border-bottom: 2px solid #0284c7; padding-bottom: 16px; margin-bottom: 24px; }
            .badge { background: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 12px; display: inline-block; }
            .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 20px; background: #f8fafc; }
            .row { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px; }
            .footer { margin-top: 30px; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Georgia Dental Care & Cosmetics</h2>
            <p>Official Patient Appointment Confirmation Slip</p>
            <span class="badge">Reference ID: ${app.id}</span>
          </div>
          <div class="card">
            <div class="row"><strong>Patient Name:</strong> <span>${app.fullName}</span></div>
            <div class="row"><strong>Phone:</strong> <span>${app.phone}</span></div>
            <div class="row"><strong>Email:</strong> <span>${app.email}</span></div>
            <div class="row"><strong>Treatment Requested:</strong> <span>${app.serviceTitle}</span></div>
            <div class="row"><strong>Clinic Location:</strong> <span>${app.location}</span></div>
            <div class="row"><strong>Preferred Date:</strong> <span>${app.preferredDate}</span></div>
            <div class="row"><strong>Time Window:</strong> <span>${app.preferredTime}</span></div>
            <div class="row"><strong>Insurance Provider:</strong> <span>${app.insuranceProvider}</span></div>
            ${app.notes ? `<div class="row"><strong>Patient Notes:</strong> <span>${app.notes}</span></div>` : ''}
          </div>
          <p style="margin-top:20px; font-size:13px;"><strong>Concierge Hotline:</strong> ${CLINIC_INFO.phone} | <strong>24/7 Emergency:</strong> ${CLINIC_INFO.emergencyPhone}</p>
          <div class="footer">Please bring a valid photo ID and your insurance card to your appointment.</div>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const filteredAppointments = appointments.filter((app) => {
    if (filter === 'emergency') return app.isEmergency;
    return true;
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 max-w-3xl w-full border border-white/80 dark:border-white/10 shadow-2xl relative my-8 space-y-6 max-h-[88vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-700/10 dark:bg-sky-400/20 text-sky-800 dark:text-sky-300">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  My Bookings & Appointments
                  <span className="text-xs bg-sky-700 text-white font-bold px-2.5 py-0.5 rounded-full">
                    {appointments.length}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Stored securely in your local browser session for easy reference and management.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  filter === 'all'
                    ? 'bg-sky-700 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                }`}
              >
                All ({appointments.length})
              </button>
              <button
                onClick={() => setFilter('emergency')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  filter === 'emergency'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                }`}
              >
                Emergency ({appointments.filter((a) => a.isEmergency).length})
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onNewBooking();
                }}
                className="px-4 py-2 rounded-full bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Book New Visit</span>
              </button>

              {appointments.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="p-2 rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                  title="Clear all records"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {filteredAppointments.length === 0 ? (
              <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
                <Calendar className="w-12 h-12 text-slate-400 mx-auto opacity-50" />
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                  No Appointments Found
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  You have not submitted any dental appointment requests yet. Book a visit now to reserve your spot!
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNewBooking();
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Book Appointment Now
                </button>
              </div>
            ) : (
              filteredAppointments.map((app) => (
                <div
                  key={app.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-800 dark:text-sky-300 text-[10px] font-extrabold tracking-wider border border-sky-500/20">
                        REF #{app.id}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-[10px] font-extrabold flex items-center gap-1 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        {app.status}
                      </span>
                      {app.isEmergency && (
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 text-[10px] font-extrabold border border-rose-500/20">
                          ⚡ 24/7 Priority
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-slate-400">
                      Booked: {new Date(app.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Main Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Patient</span>
                      <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-sky-600" />
                        {app.fullName}
                      </p>
                      <p className="text-slate-500 text-[11px]">{app.phone}</p>
                      <p className="text-slate-500 text-[11px] truncate">{app.email}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Treatment & Location</span>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {app.serviceTitle}
                      </p>
                      <p className="text-slate-500 text-[11px] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        {app.location}
                      </p>
                      <p className="text-slate-500 text-[11px]">
                        Insurance: <strong className="text-slate-700 dark:text-slate-300">{app.insuranceProvider}</strong>
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Scheduled Slot</span>
                      <p className="font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {app.preferredDate}
                      </p>
                      <p className="text-slate-500 text-[11px] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-sky-600" />
                        {app.preferredTime}
                      </p>
                    </div>
                  </div>

                  {app.notes && (
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 text-[11px] text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                      <strong>Notes:</strong> {app.notes}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => handlePrint(app)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Printer className="w-3.5 h-3.5 text-sky-600" />
                      <span>Print Confirmation Slip</span>
                    </button>

                    <button
                      onClick={() => handleCancelAppointment(app.id)}
                      className="text-xs font-semibold text-rose-500 hover:text-rose-700 hover:underline flex items-center gap-1"
                    >
                      <span>Cancel Visit</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="pt-2 text-center text-[11px] text-slate-400 border-t border-slate-200/80 dark:border-slate-800">
            Need urgent changes? Call our Georgia Dental Concierge at{' '}
            <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-sky-600 font-bold hover:underline">
              {CLINIC_INFO.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
