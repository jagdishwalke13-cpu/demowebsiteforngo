import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Heart, ShieldCheck, Lock, ArrowRight, CheckCircle2, CreditCard, Smartphone, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';

const donationAmounts = [500, 1000, 2500, 5000];

const recentDonors = [
  { name: "Priya from Mumbai", amount: "₹2,500", time: "2 mins ago" },
  { name: "Rajesh from Delhi", amount: "₹1,000", time: "5 mins ago" },
  { name: "Anonymous", amount: "₹5,000", time: "8 mins ago" },
  { name: "Sanya from Chennai", amount: "₹500", time: "12 mins ago" },
  { name: "Vikram from Bangalore", amount: "₹10,000", time: "15 mins ago" }
];

export default function Donate() {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [cause, setCause] = useState('General');

  const currentAmount = selectedAmount === 'custom' ? Number(customAmount) || 0 : selectedAmount;

  const getImpactText = (amount: number) => {
    if (amount >= 5000) return "Provide skill training for one woman to become financially independent.";
    if (amount >= 2500) return "Fund one mobile medical camp visit for 10 rural families.";
    if (amount >= 1000) return "Provide school books and stationery for a child for an entire year.";
    if (amount >= 500) return "Ensure one month of nutritious meals for a child in our program.";
    return "Support our general fund to reach more villages in need.";
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Donate Now | Asha Darpan</title>
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
            Aapka Ek Kadam — आपका एक कदम
          </motion.h1>
          <p className="text-accent-orange font-bold text-xl uppercase tracking-widest">Your one step can change a life</p>
        </div>
      </section>

      {/* Donor Ticker */}
      <div className="bg-accent-orange/10 py-4 border-y border-accent-orange/20 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              {recentDonors.map((donor, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-accent-orange">{donor.name}</span>
                  <span className="text-text-muted">donated</span>
                  <span className="font-bold text-white">{donor.amount}</span>
                  <span className="text-xs text-text-muted">· {donor.time}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column - Form */}
            <div className="lg:col-span-7">
              <div className="bg-secondary-bg p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="space-y-10">
                  {/* Step 1: Cause */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-[10px]">1</span>
                      Choose Cause
                    </label>
                    <select 
                      value={cause}
                      onChange={(e) => setCause(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-all appearance-none"
                    >
                      <option value="General">General Fund (Where it's needed most)</option>
                      <option value="Education">Shiksha — Education</option>
                      <option value="Healthcare">Swasthya — Healthcare</option>
                      <option value="Women">Shakti — Women Empowerment</option>
                      <option value="Environment">Harit Bharat — Environment</option>
                    </select>
                  </div>

                  {/* Step 2: Amount */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-[10px]">2</span>
                      Choose Amount
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={cn(
                            "py-4 rounded-2xl font-bold text-xl transition-all border",
                            selectedAmount === amount 
                              ? "bg-accent-orange border-accent-orange text-white shadow-lg shadow-accent-orange/20" 
                              : "bg-white/5 border-white/10 text-text-muted hover:border-accent-orange"
                          )}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('custom');
                        }}
                        className={cn(
                          "w-full bg-white/5 border rounded-2xl px-12 py-4 text-white focus:outline-none transition-all",
                          selectedAmount === 'custom' ? "border-accent-orange" : "border-white/10"
                        )}
                      />
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted font-bold">₹</span>
                    </div>
                  </div>

                  {/* Step 3: Frequency */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-[10px]">3</span>
                      Frequency
                    </label>
                    <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
                      <button
                        onClick={() => setFrequency('one-time')}
                        className={cn(
                          "flex-1 py-3 rounded-xl font-bold text-sm transition-all",
                          frequency === 'one-time' ? "bg-accent-orange text-white" : "text-text-muted hover:text-white"
                        )}
                      >
                        One-Time
                      </button>
                      <button
                        onClick={() => setFrequency('monthly')}
                        className={cn(
                          "flex-1 py-3 rounded-xl font-bold text-sm transition-all",
                          frequency === 'monthly' ? "bg-accent-orange text-white" : "text-text-muted hover:text-white"
                        )}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Step 4: Details */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-[10px]">4</span>
                      Donor Details
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange" />
                      <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange" />
                      <input type="tel" placeholder="Phone Number" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange" />
                      <input type="text" placeholder="PAN Number (for 80G)" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange" />
                    </div>
                  </div>

                  {/* Step 5: Payment */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-orange text-white flex items-center justify-center text-[10px]">5</span>
                      Payment Method
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: 'UPI', icon: Smartphone },
                        { name: 'Card', icon: CreditCard },
                        { name: 'Bank', icon: Building2 }
                      ].map((method) => (
                        <button key={method.name} className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-accent-orange transition-all group">
                          <method.icon className="w-6 h-6 text-text-muted group-hover:text-accent-orange" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{method.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-accent-orange text-white py-6 rounded-[2rem] font-bold text-xl flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-accent-orange/20">
                    Donate Securely <ArrowRight className="w-6 h-6" />
                  </button>

                  <div className="flex items-center justify-center gap-6 text-text-muted">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      <Lock className="w-4 h-4 text-accent-teal" />
                      100% Secure
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-accent-teal" />
                      80G Tax Exempt
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Impact */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="bg-secondary-bg p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  
                  <h3 className="font-serif text-3xl font-bold mb-8 text-white">Your Impact</h3>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAmount}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-6xl font-bold text-accent-orange">₹{currentAmount.toLocaleString()}</div>
                      
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <p className="text-lg text-text-light leading-relaxed">
                            {getImpactText(currentAmount)}
                          </p>
                        </div>
                        
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">What you achieve:</p>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-text-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                              Direct community support
                            </li>
                            <li className="flex items-center gap-3 text-sm text-text-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                              Transparent reporting
                            </li>
                            <li className="flex items-center gap-3 text-sm text-text-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                              Sustainable development
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {['FCRA', '80G', 'GuideStar', 'SSL', '15 Years'].map((badge) => (
                    <div key={badge} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold text-text-muted uppercase tracking-widest border border-white/5">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
