import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, Users, ShieldCheck, Award, Globe, Zap, MapPin, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import CauseCard from '../components/CauseCard';
import TestimonialCard from '../components/TestimonialCard';
import { causes } from '../data/causes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cn } from '../lib/utils';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Asha Darpan | Mirror of Hope NGO</title>
        <meta name="description" content="Empowering underprivileged communities in rural India through education, healthcare, and women empowerment." />
      </Helmet>

      <HeroSection />

      {/* Language Strip */}
      <div className="bg-accent-orange py-4 px-6 overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-bold uppercase tracking-widest text-sm">
              हम भारत की हर भाषा में बात करते हैं — We speak your language — நாம் உங்கள் மொழியில் பேசுகிறோம் — আমরা আপনার ভাষায় কথা বলি
            </span>
          ))}
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 px-4 md:px-6 bg-light-bg text-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-6xl font-bold mb-2 text-primary-bg">{t.who.title}</h2>
              <p className="text-accent-orange font-bold text-xl mb-8">{t.who.subtitle}</p>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                <p>
                  Founded in 2008 in the heart of Mumbai, Asha Darpan began with a simple yet profound vision: to be the mirror that reflects the untapped potential of rural India. What started as a small community initiative has grown into a nationwide movement.
                </p>
                <p>
                  We believe that sustainable change happens when communities are empowered from within. Our holistic approach integrates education, healthcare, and economic independence to break the cycle of poverty.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-orange">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Founder" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-bg">{t.who.founder}</p>
                    <p className="text-sm text-accent-orange font-medium">15 Years of Dedicated Seva</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: t.who.mission, icon: Zap, color: 'text-accent-teal' },
                  { title: t.who.vision, icon: Globe, color: 'text-accent-orange' },
                  { title: t.who.values, icon: ShieldCheck, color: 'text-gold' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                    <h4 className="font-bold text-primary-bg">{item.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-full aspect-square overflow-hidden border-[12px] border-accent-orange/10 p-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                  alt="NGO Volunteer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-accent-orange rounded-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-orange text-white p-8 rounded-full shadow-2xl z-20 animate-bounce">
                <p className="text-center font-bold leading-tight">15 Years<br/>of Seva</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Causes Section */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg relative">
        <div className="absolute inset-0 rangoli-pattern opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-6xl font-bold mb-4">{t.causes.title}</h2>
            <p className="text-accent-orange font-bold text-xl uppercase tracking-widest">{t.causes.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause, i) => (
              <CauseCard 
                key={cause.id} 
                title={cause.title}
                image={cause.image}
                description={cause.description}
                progress={cause.progress}
                color={cause.color}
                delay={i * 0.2} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-24 px-4 md:px-6 bg-secondary-bg border-y-2 border-accent-orange relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {[
              { val: "50,000+", label: t.impact.children, icon: BookOpen },
              { val: "18", label: t.stats.states, icon: Globe },
              { val: "400+", label: t.impact.villages, icon: MapPin },
              { val: "2,00,000+", label: t.impact.patients, icon: Heart },
              { val: "8,000+", label: t.impact.women, icon: Users },
              { val: "1,200+", label: t.stats.volunteers, icon: Award }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <stat.icon className="w-10 h-10 text-accent-teal mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold text-accent-orange mb-2">{stat.val}</div>
                <div className="text-sm text-text-muted uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-2">{t.gallery.title}</h2>
              <p className="text-accent-orange font-bold text-xl">{t.gallery.subtitle}</p>
            </div>
            <Link to="/gallery" className="bg-white/5 border border-white/10 px-8 py-3 rounded-full font-bold hover:bg-accent-orange transition-all flex items-center gap-2">
              {t.gallery.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "rural+india+school",
              "india+ngo+volunteer",
              "india+village+women",
              "india+healthcare+camp",
              "india+children+playing",
              "india+farming+community"
            ].map((keyword, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative group overflow-hidden rounded-2xl aspect-square",
                  i === 0 && "md:col-span-2 md:row-span-2 aspect-auto"
                )}
              >
                <img
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1488521787991-ed7bbaae773c' : (i === 1 ? '1542810634-71277d95dcbb' : (i === 2 ? '1509099836639-18ba1795216d' : '1584515933487-779824d29309'))}?auto=format&fit=crop&q=80&w=800`}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent-orange/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-primary-bg px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faces of Hope Section */}
      <section className="py-24 px-4 md:px-6 bg-light-bg text-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-accent-orange font-bold text-xl uppercase tracking-widest mb-4">{t.testimonials.subtitle}</p>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.testimonials.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ravi Kumar, 12"
              location="Sitapur, UP"
              image="https://images.unsplash.com/photo-1503919919749-6466a55d6928?auto=format&fit=crop&q=80&w=400"
              quote="Asha Darpan ne mujhe school diya aur ek sapna diya. Ab main doctor banna chahta hoon."
              englishQuote="Asha Darpan gave me school and a dream. I want to be a doctor now."
              delay={0}
            />
            <TestimonialCard
              name="Sunita Devi, 28"
              location="Koraput, Odisha"
              image="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400"
              quote="Unke skill training se maine apni tailoring dukaan kholī. Aaj main apne bachon ko padha sakti hoon."
              englishQuote="Their skill training helped me open my tailoring shop. Today I can educate my children."
              delay={0.2}
            />
            <TestimonialCard
              name="Ramkhelawan Yadav, 65"
              location="Vaishali, Bihar"
              image="https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=400"
              quote="Pehli baar gaon mein doctor aaye. Mere ghutnon ka ilaaj hua. Bhagwan unhe khush rakhe."
              englishQuote="For the first time, doctors came to our village. My knees were treated. God bless them."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Donate CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-5" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] border-2 border-accent-orange relative"
          >
            <h2 className="font-serif text-3xl md:text-7xl font-bold mb-4">{t.donateCTA.subtitle.split(' — ')[1]}</h2>
            <p className="text-accent-orange font-bold text-2xl mb-12 uppercase tracking-widest">{t.donateCTA.title}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              {[
                { amount: "₹500", desc: t.donateCTA.impact1 },
                { amount: "₹1,000", desc: t.donateCTA.impact2 },
                { amount: "₹2,500", desc: t.donateCTA.impact3 },
                { amount: "₹5,000", desc: t.donateCTA.impact4 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-accent-orange">{item.amount}</div>
                  <div className="text-sm text-text-muted">{item.desc}</div>
                </div>
              ))}
            </div>

            <Link
              to="/donate"
              className="inline-flex items-center gap-3 bg-accent-orange text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent-orange/20"
            >
              <Heart className="w-6 h-6" />
              {t.nav.donate}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners & Credibility Section */}
      <section className="py-20 px-4 md:px-6 bg-[#1A1A1A] border-t-2 border-b-2 border-[#E8650A] relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#E8650A] uppercase tracking-[3px] text-[12px] font-bold mb-4 block">
              OUR PARTNERS & CREDIBILITY
            </span>
            <h2 className="font-serif text-3xl md:text-[48px] text-[#FAF7F0] font-bold mb-4 leading-tight">
              Trusted By India's Best
            </h2>
            <p className="font-sans text-[16px] text-[#9A9590] max-w-2xl mx-auto leading-relaxed">
              Backed by government bodies, leading corporates and India's most respected nonprofit institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'NITI Aayog', icon: '🏛️', desc: 'Government of India Policy Body' },
              { name: 'Ministry of Education', icon: '📖', desc: 'Union Ministry, Govt. of India' },
              { name: 'Tata Trusts', icon: '💎', desc: "India's Oldest Philanthropic Organization" },
              { name: 'CSR India', icon: '🤝', desc: 'Corporate Social Responsibility Network' },
              { name: 'Give India', icon: '❤️', desc: "India's Most Trusted Giving Platform" },
              { name: 'GuideStar India', icon: '⭐', desc: 'Nonprofit Transparency & Accountability' },
              { name: 'Milaap', icon: '🌐', desc: "India's Largest Crowdfunding Platform" },
              { name: 'CAF India', icon: '🌱', desc: 'Charities Aid Foundation India' }
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, backgroundColor: '#3a3830', borderColor: '#E8650A' }}
                className="bg-[#2C2A26] border border-[#E8650A]/20 p-5 md:p-[28px_24px] rounded-[16px] text-center transition-colors duration-300"
              >
                <span className="text-3xl md:text-[40px] mb-3 md:mb-4 block leading-none">{partner.icon}</span>
                <h4 className="font-sans text-sm md:text-[16px] font-semibold text-[#FAF7F0] mb-1">{partner.name}</h4>
                <p className="text-[10px] md:text-[12px] text-[#9A9590] leading-tight">{partner.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[#E8650A]/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <p className="text-[12px] text-[#9A9590] uppercase tracking-widest mb-8">
                Certified & Registered With
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  { label: 'FCRA Registered', icon: '✅' },
                  { label: '80G Tax Exemption', icon: '📋' },
                  { label: '12A Certified', icon: '🏅' },
                  { label: 'GuideStar Platinum', icon: '⭐' },
                  { label: 'ISO 9001:2015', icon: '🔒' }
                ].map((badge, i) => (
                  <div 
                    key={i} 
                    className="bg-[#E8650A]/10 border border-[#E8650A] rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center gap-2 text-[#E8650A] font-semibold text-[12px] md:text-[14px] hover:bg-[#E8650A] hover:text-white transition-all duration-300 cursor-default group"
                  >
                    <span className="text-current">{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-2 text-[12px] text-[#9A9590]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>100% transparent. All financials audited annually and publicly available.</span>
                </div>
                <a 
                  href="#" 
                  className="text-[13px] text-[#E8650A] font-bold flex items-center gap-1 group/link transition-all"
                >
                  View Annual Report 
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-accent-orange py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-primary-bg">{t.footer.newsletter}</h2>
          <p className="text-primary-bg/80 font-medium mb-10 text-lg">Join 25,000+ supporters receiving our monthly impact report</p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-white px-8 py-4 rounded-full text-primary-bg focus:outline-none shadow-xl"
            />
            <button className="bg-primary-bg text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
              {t.footer.subscribe}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
