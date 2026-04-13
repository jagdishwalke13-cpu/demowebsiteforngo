import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { causes } from '../data/causes';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Calendar, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const categories = ['All', 'Education', 'Healthcare', 'Women', 'Environment', 'Child Rights'];

export default function Causes() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCauses = activeCategory === 'All' 
    ? causes 
    : causes.filter(c => c.id.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === 'All');

  // Adding some mock data for the expanded causes page
  const expandedCauses = [
    ...causes,
    {
      id: "environment",
      title: "Harit Bharat — हरित भारत",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      description: "Building eco-villages through tree plantation, solar energy, and sustainable farming practices. Protecting our natural heritage for future generations.",
      progress: 45,
      color: "#0A5C52",
      goal: "₹12,00,000",
      raised: "₹5,40,000",
      donors: 420
    },
    {
      id: "childrights",
      title: "Bachpan Bachao — बचपन बचाओ",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      description: "Fighting against child labor and ensuring every child has a safe environment to grow. Legal aid and rehabilitation for rescued children.",
      progress: 82,
      color: "#E8650A",
      goal: "₹5,00,000",
      raised: "₹4,10,000",
      donors: 980
    },
    {
      id: "food",
      title: "Anna Daan — अन्न दान",
      image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&q=80&w=800",
      description: "Providing daily nutritious meals to 5,000+ children through community kitchens. Eradicating hunger in rural school clusters.",
      progress: 90,
      color: "#D4956A",
      goal: "₹20,00,000",
      raised: "₹18,00,000",
      donors: 2100
    }
  ];

  const displayCauses = activeCategory === 'All' 
    ? expandedCauses 
    : expandedCauses.filter(c => c.id.toLowerCase().includes(activeCategory.toLowerCase().replace(' ', '')));

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Causes | Asha Darpan</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-bg py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-7xl font-bold mb-6"
          >
            What We Fight For — हमारे उद्देश्य
          </motion.h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Every contribution brings us closer to a Bharat where no one is left behind. Explore our key focus areas and join the movement.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-secondary-bg py-8 px-4 md:px-6 sticky top-16 md:top-20 z-40 border-y border-white/5">
        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex gap-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-accent-orange text-white shadow-lg shadow-accent-orange/20" 
                    : "bg-white/5 text-text-muted hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {displayCauses.map((cause, i) => (
                <motion.div
                  key={cause.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="bg-secondary-bg rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col md:flex-row group"
                >
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-accent-orange transition-colors">
                        {cause.title}
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow">
                      {cause.description}
                    </p>

                    <div className="space-y-6">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent-orange" />
                          <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{cause.donors} Donors</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent-orange" />
                          <span className="text-xs font-bold text-text-muted uppercase tracking-widest">18 States</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-bold text-white">{cause.raised} <span className="text-text-muted font-normal">of {cause.goal}</span></span>
                          <span className="text-lg font-bold" style={{ color: cause.color }}>{cause.progress}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${cause.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: cause.color }}
                          />
                        </div>
                      </div>

                      <Link
                        to="/donate"
                        className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent-orange hover:text-white transition-all group/btn"
                      >
                        Donate to This Cause <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 px-4 md:px-6 bg-accent-teal text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-12 h-12 text-accent-orange" />
            <div className="text-left">
              <p className="font-bold text-xl leading-tight">100% Secure Donations</p>
              <p className="text-sm opacity-70">SSL Encrypted & PCI Compliant</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Heart className="w-12 h-12 text-accent-orange" />
            <div className="text-left">
              <p className="font-bold text-xl leading-tight">Tax Exemption</p>
              <p className="text-sm opacity-70">Eligible for 80G Benefits</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Calendar className="w-12 h-12 text-accent-orange" />
            <div className="text-left">
              <p className="font-bold text-xl leading-tight">15 Years of Trust</p>
              <p className="text-sm opacity-70">Since 2008</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
