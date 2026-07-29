import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { SeoHead } from './components/SeoHead';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsuranceSection } from './components/InsuranceSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EmergencyTriage } from './components/EmergencyTriage';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { ServiceModal } from './components/ServiceModal';
import { AppointmentsModal } from './components/AppointmentsModal';
import { FloatingActions } from './components/FloatingActions';
import { DentalService } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('ga_dental_theme') === 'dark';
  });
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [isAppointmentsModalOpen, setIsAppointmentsModalOpen] = useState(false);

  useEffect(() => {
    // Initial loading screen animation timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ga_dental_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ga_dental_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] dark:bg-[#0B1320] text-slate-900 dark:text-slate-100 selection:bg-teal-500 selection:text-white font-sans antialiased transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Background Decor Orbs for Frosted Glass Theme */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-teal-200/30 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[-150px] w-[600px] h-[600px] bg-sky-200/40 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[10%] w-[500px] h-[500px] bg-blue-200/30 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Dynamic SEO Structured Data */}
      <SeoHead />

      {/* Initial Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main App Content */}
      <div className="relative z-10">
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenAppointmentsModal={() => setIsAppointmentsModalOpen(true)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main id="main-content" className="pt-[110px] sm:pt-[120px]">
          <Hero onOpenBooking={handleOpenBooking} />
          <TrustBadges />
          <AboutSection onOpenBooking={handleOpenBooking} />
          
          <ServicesSection
            onSelectService={(service) => setSelectedService(service)}
            onOpenBooking={handleOpenBooking}
          />

          <BeforeAfterSection />
          <TestimonialsSection />
          <InsuranceSection onOpenBooking={handleOpenBooking} />
          <WhyChooseUs />
          <EmergencyTriage onOpenBooking={handleOpenBooking} />
          <BookingSection
            initialServiceId={selectedService?.id}
            onViewAppointments={() => setIsAppointmentsModalOpen(true)}
          />
          <FaqSection />
          <BlogSection />
          <ContactSection />
        </main>

        <Footer />
        <CookieConsent />
        <FloatingActions onOpenBooking={handleOpenBooking} />

        {/* Detailed Service Modal */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Stored Appointments Manager Modal */}
        <AppointmentsModal
          isOpen={isAppointmentsModalOpen}
          onClose={() => setIsAppointmentsModalOpen(false)}
          onNewBooking={handleOpenBooking}
        />
      </div>
    </div>
  );
}
