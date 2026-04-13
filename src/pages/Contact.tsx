import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube, Linkedin, MessageSquare, Users } from 'lucide-react';

const regionalOffices = [
  { city: "Mumbai", address: "402 Seva Bhavan, Andheri East, Mumbai 400069", person: "Arjun Malhotra" },
  { city: "Delhi", address: "12/B Shanti Kunj, Vasant Vihar, New Delhi 110057", person: "Sanya Mirza" },
  { city: "Kolkata", address: "88 Park Street, 2nd Floor, Kolkata 700016", person: "Anjali Rao" },
  { city: "Chennai", address: "45 Anna Salai, Teynampet, Chennai 600018", person: "Priya Iyer" },
  { city: "Hyderabad", address: "Banjara Hills, Road No. 12, Hyderabad 500034", person: "Vikram Singh" },
  { city: "Patna", address: "Maurya Lok Complex, Block C, Patna 800001", person: "Dr. Rajesh Gupta" }
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact Us | Asha Darpan</title>
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
            Get in Touch — संपर्क करें
          </motion.h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Have questions about our programs or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-bg p-8 md:p-12 rounded-[3rem] border border-white/5"
            >
              <h3 className="font-serif text-3xl font-bold mb-8 text-white">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Donation Support</option>
                      <option>Volunteer Opportunities</option>
                      <option>Corporate Partnership</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-all resize-none" />
                </div>
                <button className="w-full bg-accent-orange text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-xl shadow-accent-orange/20">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="font-serif text-3xl font-bold text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Headquarters</p>
                      <p className="text-lg text-text-light leading-relaxed">402 Seva Bhavan, Andheri East, Mumbai 400069</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0 group-hover:bg-accent-teal group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Helpline</p>
                      <p className="text-lg text-text-light leading-relaxed">+91 98200 12345</p>
                      <p className="text-sm text-text-muted">Mon–Sat, 10am–6pm IST</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-lg text-text-light leading-relaxed">info@ashadarpan.org</p>
                      <p className="text-sm text-text-muted">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-white uppercase tracking-widest text-sm">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-accent-orange/10 p-8 rounded-[2rem] border border-accent-orange/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="w-8 h-8 text-accent-orange" />
                  <h4 className="font-bold text-white text-xl">WhatsApp Support</h4>
                </div>
                <p className="text-text-muted text-sm mb-6">Quick response for donation and volunteer queries.</p>
                <a
                  href="https://wa.me/919820012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-orange font-bold hover:underline"
                >
                  Chat with us now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-24 px-4 md:px-6 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">Regional Presence</h2>
            <p className="text-text-muted">Reaching every corner of Bharat through our local chapters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalOffices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-bg p-8 rounded-3xl border border-white/5 hover:border-accent-orange/50 transition-colors group"
              >
                <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-accent-orange transition-colors">{office.city}</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 text-text-muted">
                    <MapPin className="w-4 h-4 text-accent-orange shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex gap-3 text-text-muted">
                    <Users className="w-4 h-4 text-accent-orange shrink-0" />
                    <span>Contact: {office.person}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-primary-bg relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.85000000000001!3d19.110000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c00000001%3A0x0!2zMTnCsDA2JzM2LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-primary-bg/40 pointer-events-none" />
      </section>
    </div>
  );
}
