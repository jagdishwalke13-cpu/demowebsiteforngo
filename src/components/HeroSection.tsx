import React from 'react';
import { motion } from 'motion/react';
import { Heart, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import StatsCounter from './StatsCounter';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-svh flex items-center overflow-hidden px-4 md:px-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920"
          alt="Rural India Children"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-bg/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 md:pt-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-accent-orange/20 border border-accent-orange/30 rounded-full text-accent-orange text-xs font-bold mb-4 md:mb-8 mt-4 md:mt-0"
          >
            {t.hero.badge}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 text-text-light"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-text-muted mb-6 md:mb-10 leading-relaxed mt-4 md:mt-0"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-3 md:gap-4 mb-12 md:mb-16 mt-6 md:mt-0"
          >
            <Link
              to="/donate"
              className="w-full md:w-auto bg-accent-orange text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 text-lg"
            >
              <Heart className="w-5 h-5" />
              {t.hero.ctaDonate}
            </Link>
            <button className="w-full md:w-auto border-2 border-accent-orange text-accent-orange px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-accent-orange hover:text-white transition-all text-lg">
              <Play className="w-5 h-5 fill-current" />
              {t.hero.ctaStory}
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatsCounter value={50000} suffix="+" label={t.stats.lives} delay={0.8} />
          <StatsCounter value={18} label={t.stats.states} delay={1.0} />
          <StatsCounter value={12} prefix="₹" suffix=" Cr" label={t.stats.raised} delay={1.2} />
          <StatsCounter value={1200} suffix="+" label={t.stats.volunteers} delay={1.4} />
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 flex">
        <div className="h-full flex-1 bg-accent-orange" />
        <div className="h-full flex-1 bg-white" />
        <div className="h-full flex-1 bg-[#0A5C52]" />
      </div>
    </section>
  );
}
