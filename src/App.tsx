/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-primary-bg flex flex-col items-center justify-center z-[9999]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-6xl mb-4"
        >
          🪷
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif text-3xl text-accent-orange"
        >
          Asha Darpan
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919820012345?text=Hi, I want to know more about Asha Darpan"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-accent-orange text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-secondary-bg border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-text-muted text-center md:text-left">
                We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.
              </p>
              <div className="flex gap-4 shrink-0">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="px-6 py-2 text-sm font-bold text-text-light hover:text-accent-orange transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="bg-accent-orange text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
}
