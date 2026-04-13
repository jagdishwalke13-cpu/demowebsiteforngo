import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { X, Maximize2, MapPin, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['All', 'Education', 'Healthcare', 'Women', 'Events', 'Villages'];

const galleryImages = [
  { id: 1, category: 'Education', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6', title: 'Digital Classrooms', location: 'Sitapur, UP' },
  { id: 2, category: 'Healthcare', url: 'https://images.unsplash.com/photo-1584515933487-779824d29309', title: 'Mobile Medical Camp', location: 'Koraput, Odisha' },
  { id: 3, category: 'Women', url: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6', title: 'Skill Training Hub', location: 'Vaishali, Bihar' },
  { id: 4, category: 'Villages', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09', title: 'Sustainable Farming', location: 'Kutch, Gujarat' },
  { id: 5, category: 'Education', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c', title: 'Rural School Library', location: 'Bastar, Chhattisgarh' },
  { id: 6, category: 'Events', url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb', title: 'Annual Seva Meet', location: 'Mumbai, MH' },
  { id: 7, category: 'Healthcare', url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d', title: 'Vaccination Drive', location: 'Purnia, Bihar' },
  { id: 8, category: 'Women', url: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604', title: 'SHG Meeting', location: 'Salem, TN' },
  { id: 9, category: 'Villages', url: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993', title: 'Solar Powered Village', location: 'Jaisalmer, RJ' }
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Gallery | Asha Darpan</title>
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
            Gallery — गैलरी
          </motion.h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Capturing the moments of hope, transformation, and resilience from across rural Bharat.
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

      {/* Masonry Grid */}
      <section className="py-24 px-4 md:px-6 bg-primary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer overflow-hidden rounded-3xl"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={`${img.url}?auto=format&fit=crop&q=80&w=800`}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-accent-orange mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">{img.location}</span>
                    </div>
                    <h4 className="text-white font-bold text-xl">{img.title}</h4>
                    <Maximize2 className="absolute top-6 right-6 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-4 md:px-6 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">Stories in Motion</h2>
            <p className="text-text-muted">Watch our impact through the lens of those we serve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="relative aspect-video rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1542810634-71277d95dcbb' : '1509099836639-18ba1795216d'}?auto=format&fit=crop&q=80&w=1200`}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-accent-orange flex items-center justify-center text-white shadow-2xl shadow-accent-orange/40 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white font-bold text-2xl mb-2">Asha Darpan Annual Report 202{5+i}</h4>
                  <p className="text-white/70 text-sm">Documentary · 12 mins</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-bg/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-accent-orange transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full flex flex-col items-center"
            >
              <img
                src={`${selectedImage.url}?auto=format&fit=crop&q=90&w=1600`}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto rounded-3xl shadow-2xl mb-8"
              />
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 text-accent-orange mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">April 2026</span>
                  </div>
                </div>
                <h3 className="font-serif text-4xl font-bold text-white mb-4">{selectedImage.title}</h3>
                <p className="text-text-muted max-w-2xl">
                  {selectedImage.category} program impact in {selectedImage.location}. This image represents the core of our mission to bring hope to rural Bharat.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
