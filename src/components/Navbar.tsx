import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Heart, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'HI', label: 'हिंदी' },
  { code: 'TA', label: 'தமிழ்' },
  { code: 'BN', label: 'বাংলা' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.causes, path: '/causes' },
    { name: t.nav.programs, path: '/programs' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.contact, path: '/contact' }
  ];

  const isHeroPage = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-6 h-16 md:h-auto flex items-center',
        isScrolled || !isHeroPage 
          ? 'bg-primary-bg shadow-lg' 
          : 'bg-[rgba(26,26,26,0.85)] backdrop-blur-md md:bg-transparent md:backdrop-blur-none'
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl group-hover:rotate-12 transition-transform">🪷</span>
          <span className="font-serif text-lg md:text-2xl font-bold text-accent-orange">Asha Darpan</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors relative py-1',
                location.pathname === link.path ? 'text-accent-orange' : 'text-text-light hover:text-accent-orange'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-orange"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-accent-orange transition-colors"
            >
              <Globe className="w-4 h-4" />
              {languages.find(l => l.code === language)?.label}
              <ChevronDown className={cn("w-4 h-4 transition-transform", isLangDropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-secondary-bg border border-white/10 rounded-lg shadow-xl overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-accent-orange hover:text-white transition-colors",
                        language === lang.code ? "text-accent-orange" : "text-text-light"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/donate"
            className="bg-accent-orange text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            <Heart className="w-4 h-4" />
            {t.nav.donate}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-text-light"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-primary-bg z-[100] p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-serif text-2xl font-bold text-accent-orange">Asha Darpan</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-8 h-8 text-text-light" />
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-xl font-medium transition-colors',
                      location.pathname === link.path ? 'text-accent-orange' : 'text-text-light'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-8">
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm transition-all",
                        language === lang.code 
                          ? "bg-accent-orange border-accent-orange text-white" 
                          : "border-white/10 text-text-muted hover:border-accent-orange"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <Link
                  to="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-accent-orange text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg"
                >
                  <Heart className="w-5 h-5" />
                  {t.nav.donate}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
