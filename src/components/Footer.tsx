import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-bg border-t-2 border-accent-orange rangoli-pattern pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">🪷</span>
              <span className="font-serif text-2xl font-bold text-accent-orange">Asha Darpan</span>
            </Link>
            <p className="text-text-muted leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-text-muted italic">Made with ❤️ in India</p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">{t.footer.quickLinks}</h3>
            <ul className="grid grid-cols-2 gap-3">
              {[
                { name: t.nav.home, path: '/' },
                { name: t.nav.about, path: '/about' },
                { name: t.nav.causes, path: '/causes' },
                { name: t.nav.programs, path: '/programs' },
                { name: t.nav.gallery, path: '/gallery' },
                { name: t.nav.contact, path: '/contact' },
                { name: 'Blog', path: '#' },
                { name: 'Careers', path: '#' },
                { name: 'Volunteer', path: '#' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-text-muted hover:text-accent-orange transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Causes */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">{t.footer.causes}</h3>
            <ul className="space-y-3">
              {[
                'Education',
                'Healthcare',
                'Women Empowerment',
                'Environment',
                'Child Rights',
                'Food Security'
              ].map((cause, i) => (
                <li key={i}>
                  <Link to="/causes" className="text-text-muted hover:text-accent-orange transition-colors text-sm">
                    {cause}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold mb-6 text-white">{t.footer.contact}</h3>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-text-muted">
                <MapPin className="w-5 h-5 text-accent-orange shrink-0" />
                <span>402 Seva Bhavan, Andheri East, Mumbai 400069</span>
              </div>
              <div className="flex gap-3 text-sm text-text-muted">
                <Phone className="w-5 h-5 text-accent-orange shrink-0" />
                <span>+91 98200 12345</span>
              </div>
              <div className="flex gap-3 text-sm text-text-muted">
                <Mail className="w-5 h-5 text-accent-orange shrink-0" />
                <span>info@ashadarpan.org</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-bold mb-3 text-white">{t.footer.newsletter}</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-secondary-bg border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent-orange"
                />
                <button className="bg-accent-orange text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
                  {t.footer.subscribe}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-text-muted text-center md:text-left">
            <p className="mb-2">© 2026 Asha Darpan Foundation · {t.footer.rights}</p>
            <p className="mb-2">FCRA No. 083780021 · 80G No. AAAAA1234B · 12A No. AAAAA1234B</p>
            <p className="opacity-50">created by Growth.Gird.Digital</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-text-muted">
            <Link to="#" className="hover:text-accent-orange">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent-orange">Terms</Link>
            <Link to="#" className="hover:text-accent-orange">Refund Policy</Link>
            <Link to="#" className="hover:text-accent-orange flex items-center gap-1">
              Annual Report (PDF)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
