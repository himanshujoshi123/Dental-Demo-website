import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAppointmentsModal?: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAppointmentsModal,
  darkMode,
  setDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [bookingsCount, setBookingsCount] = useState(0);

  const updateBookingsCount = () => {
    try {
      const data = localStorage.getItem('ga_dental_appointments');
      if (data) {
        const parsed = JSON.parse(data);
        setBookingsCount(Array.isArray(parsed) ? parsed.length : 0);
      } else {
        setBookingsCount(0);
      }
    } catch {
      setBookingsCount(0);
    }
  };

  useEffect(() => {
    updateBookingsCount();
    const handleStorageChange = () => updateBookingsCount();
    window.addEventListener('ga_appointments_updated', handleStorageChange);
    return () => window.removeEventListener('ga_appointments_updated', handleStorageChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link tracker
      const sections = ['home', 'about', 'services', 'before-after', 'testimonials', 'insurance', 'why-us', 'blog', 'faqs', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Before & After', href: '#before-after', id: 'before-after' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Insurance', href: '#insurance', id: 'insurance' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-900/90 text-slate-200 text-xs py-2 px-4 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-teal-300 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Atlanta & Alpharetta, GA
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {CLINIC_INFO.hoursShort}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-teal-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-teal-200 border border-teal-400/30 backdrop-blur-sm">
              <ShieldCheck className="w-3 h-3" /> 100+ Insurances Accepted
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 font-bold text-teal-300 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark or light theme"
              className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 transition backdrop-blur-sm flex items-center gap-1.5 text-[11px] font-semibold border border-white/10"
              title="Toggle theme (Light / Dark)"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-slate-200" />}
              <span className="hidden xs:inline text-slate-200">{darkMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar with Frosted Glass Styling */}
      <nav
        className={`w-full transition-all duration-300 bg-white/60 dark:bg-slate-950/70 backdrop-blur-xl border-b border-white/40 dark:border-white/10 ${
          isScrolled ? 'shadow-xl shadow-sky-950/10 py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 text-white shadow-lg shadow-sky-200/50 dark:shadow-none group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight text-sky-950 dark:text-sky-100 italic leading-tight">
                Georgia<span className="text-teal-600 dark:text-teal-400">Dental</span>
              </span>
              <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                Care & Aesthetics
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-sky-700/10 dark:bg-sky-400/20 text-sky-900 dark:text-sky-200 border border-sky-300/40 dark:border-sky-400/30 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-sky-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenAppointmentsModal && (
              <button
                onClick={onOpenAppointmentsModal}
                className="relative px-3.5 py-2 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-200/80 dark:border-slate-800"
                title="View stored bookings"
              >
                <FileText className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>My Bookings</span>
                {bookingsCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 bg-sky-700 text-white text-[10px] font-extrabold rounded-full">
                    {bookingsCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-full bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-200 dark:shadow-none transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {onOpenAppointmentsModal && (
              <button
                onClick={onOpenAppointmentsModal}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition relative"
                title="My Bookings"
              >
                <FileText className="w-5 h-5 text-sky-600" />
                {bookingsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-sky-700 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {bookingsCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-white/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition backdrop-blur-md"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/80 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-white/40 dark:border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="block px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-900 hover:text-sky-700 transition"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-white/20 dark:border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-full bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-200 dark:shadow-none flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full py-3 rounded-full bg-white/50 dark:bg-slate-900 border border-white/60 dark:border-white/10 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
