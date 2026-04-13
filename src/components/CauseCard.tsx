import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CauseCardProps {
  title: string;
  image: string;
  description: string;
  progress: number;
  color: string;
  delay?: number;
}

const CauseCard: React.FC<CauseCardProps> = ({ title, image, description, progress, color, delay = 0 }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-secondary-bg rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-accent-orange/10 transition-all border border-white/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg to-transparent opacity-60" />
      </div>

      <div className="p-8">
        <h3 className="font-serif text-2xl font-bold mb-4 text-white group-hover:text-accent-orange transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-3">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Funding Progress</span>
            <span className="text-lg font-bold" style={{ color }}>{progress}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.3 }}
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>

        <button 
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all group/btn"
          style={{ color }}
        >
          {t.causes.support} {title.split(' — ')[0]}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default CauseCard;
