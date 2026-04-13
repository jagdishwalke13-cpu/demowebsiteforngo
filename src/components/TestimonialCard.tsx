import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  englishQuote?: string;
  location: string;
  delay?: number;
}

export default function TestimonialCard({ name, image, quote, englishQuote, location, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-secondary-bg p-8 rounded-3xl border-l-4 border-accent-orange relative group"
    >
      <Quote className="absolute top-6 right-8 w-12 h-12 text-accent-orange/10 group-hover:text-accent-orange/20 transition-colors" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-orange">
          <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-xs text-accent-orange font-medium uppercase tracking-wider">{location}</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <p className="text-lg italic text-text-light leading-relaxed">"{quote}"</p>
        {englishQuote && (
          <p className="text-sm text-text-muted leading-relaxed">
            <span className="font-bold text-accent-orange/50 mr-2">EN:</span>
            {englishQuote}
          </p>
        )}
      </div>

      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent-orange text-accent-orange" />
        ))}
      </div>
    </motion.div>
  );
}
