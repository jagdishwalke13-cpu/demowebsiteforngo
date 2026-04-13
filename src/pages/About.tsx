import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { team } from '../data/team';
import { Helmet } from 'react-helmet-async';
import { Award, Target, Eye, Heart, ShieldCheck, Users } from 'lucide-react';

const milestones = [
  { year: "2008", title: "Founded in Mumbai", desc: "Started with a small community center in Andheri." },
  { year: "2010", title: "First Village Adopted", desc: "Launched holistic development in Sitapur, UP." },
  { year: "2015", title: "10,000 Children Reached", desc: "Expanded educational programs to 5 states." },
  { year: "2018", title: "FCRA Registration", desc: "Began receiving international support for rural projects." },
  { year: "2020", title: "COVID Relief", desc: "Provided emergency aid to 1 lakh families during the pandemic." },
  { year: "2023", title: "₹10 Crore Milestone", desc: "Reached a significant funding milestone for infrastructure." },
  { year: "2026", title: "50,000 Lives Changed", desc: "Continuing our mission to transform rural Bharat." }
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | Asha Darpan</title>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-secondary-bg py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 rangoli-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-7xl font-bold mb-4"
          >
            Our Story — हमारी कहानी
          </motion.h1>
          <p className="text-accent-orange font-bold text-xl uppercase tracking-widest">15 Years of Transforming Lives</p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 px-4 md:px-6 bg-light-bg text-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: Target, desc: "To empower underprivileged communities through sustainable education, healthcare, and economic opportunities.", color: "bg-accent-teal" },
              { title: "Our Vision", icon: Eye, desc: "A Bharat where every individual, regardless of their background, has the opportunity to lead a life of dignity and hope.", color: "bg-accent-orange" },
              { title: "Our Values", icon: Heart, desc: "Transparency, Empathy, Integrity, and Community-led transformation are at the core of everything we do.", color: "bg-gold" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 group hover:-translate-y-2 transition-all"
              >
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-orange/30 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`bg-secondary-bg p-8 rounded-3xl border border-white/5 hover:border-accent-orange/50 transition-colors ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="text-accent-orange font-bold text-3xl mb-2 block">{m.year}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
                    <p className="text-text-muted text-sm">{m.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-accent-orange border-4 border-primary-bg flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(232,101,10,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-4 md:px-6 bg-light-bg text-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[300px] md:h-[500px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Meera Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-20 flex flex-col justify-center">
              <span className="text-accent-orange font-bold uppercase tracking-widest mb-4">Founder's Message</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Dr. Meera Sharma</h2>
              <blockquote className="text-2xl italic text-gray-700 mb-8 leading-relaxed border-l-4 border-accent-orange pl-8">
                "True empowerment isn't just about giving; it's about enabling. At Asha Darpan, we strive to create a Bharat where hope isn't a luxury, but a reality for every child."
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 20 years of experience in social work and rural development, Dr. Sharma founded Asha Darpan to address the systemic challenges faced by rural communities. Her vision has guided the foundation from a single room to a multi-state organization.
              </p>
              <div className="flex gap-4">
                <Award className="w-10 h-10 text-accent-orange" />
                <p className="text-sm font-bold text-primary-bg">Recipient of the National Social Service Award 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Our Dedicated Team</h2>
            <p className="text-accent-orange font-bold text-xl uppercase tracking-widest">The Hearts Behind the Mission</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group text-center"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-accent-orange transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-accent-orange text-sm font-medium uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 px-4 md:px-6 bg-secondary-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Award className="w-12 h-12 text-gold" />
                </div>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest text-center">National Award<br/>{2020 + i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-24 px-4 md:px-6 bg-accent-orange text-primary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Join Our Seva</h2>
          <p className="text-xl font-medium mb-12 opacity-90">Be the change you wish to see in rural Bharat. Join our mission as a volunteer.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest">Full Name</label>
              <input type="text" className="w-full bg-white/20 border border-primary-bg/20 rounded-xl px-6 py-4 focus:outline-none focus:bg-white transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest">City</label>
              <input type="text" className="w-full bg-white/20 border border-primary-bg/20 rounded-xl px-6 py-4 focus:outline-none focus:bg-white transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest">Skills</label>
              <input type="text" className="w-full bg-white/20 border border-primary-bg/20 rounded-xl px-6 py-4 focus:outline-none focus:bg-white transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest">Availability</label>
              <select className="w-full bg-white/20 border border-primary-bg/20 rounded-xl px-6 py-4 focus:outline-none focus:bg-white transition-all">
                <option>Weekends</option>
                <option>Weekdays</option>
                <option>Full-time</option>
              </select>
            </div>
            <button className="md:col-span-2 bg-primary-bg text-white py-5 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all shadow-2xl">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
