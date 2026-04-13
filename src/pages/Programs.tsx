import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { programs } from '../data/programs';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, CheckCircle2, MapPin, Users, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Programs() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Programs | Asha Darpan</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary-bg py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-7xl font-bold mb-6"
          >
            Programs — कार्यक्रम
          </motion.h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Our programs are designed to create long-term, sustainable impact in rural communities through a holistic development model.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-5xl mx-auto space-y-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "bg-secondary-bg rounded-3xl border transition-all duration-500 overflow-hidden",
                expandedId === program.id ? "border-accent-orange shadow-2xl shadow-accent-orange/10" : "border-white/5"
              )}
            >
              <button
                onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className="text-4xl bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-accent-orange/10 transition-colors">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-orange transition-colors">{program.title}</h3>
                    <p className="text-accent-orange text-sm font-medium uppercase tracking-widest">{program.subtitle}</p>
                  </div>
                </div>
                <ChevronDown className={cn("w-6 h-6 text-text-muted transition-transform duration-500", expandedId === program.id && "rotate-180 text-accent-orange")} />
              </button>

              <AnimatePresence>
                {expandedId === program.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-4 border-t border-white/5">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <p className="text-text-muted leading-relaxed text-lg">
                            {program.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                                <Users className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Beneficiaries</p>
                                <p className="text-sm font-bold text-white">{program.beneficiaries}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                                <MapPin className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Active States</p>
                                <p className="text-sm font-bold text-white">{program.states}</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-bold text-white flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-accent-teal" />
                              Program Goals
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {program.goals.map((goal, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-text-muted border border-white/5">
                                  {goal}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden group/img">
                          <img
                            src={`https://images.unsplash.com/photo-${program.id === 1 ? '1497633762265-9d179a990aa6' : (program.id === 2 ? '1584515933487-779824d29309' : (program.id === 3 ? '1489980557514-251d61e3eeb6' : '1542601906990-b4d3fb778b09'))}?auto=format&fit=crop&q=80&w=800`}
                            alt={program.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg to-transparent opacity-60" />
                          <button className="absolute bottom-6 right-6 bg-accent-orange text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                            Volunteer for this <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-light-bg text-primary-bg text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Want to see our impact firsthand?</h2>
          <p className="text-lg text-gray-600 mb-10">We organize regular field visits for our supporters and corporate partners to experience the transformation in rural Bharat.</p>
          <button className="bg-accent-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-accent-orange/20">
            Request a Field Visit
          </button>
        </div>
      </section>
    </div>
  );
}
