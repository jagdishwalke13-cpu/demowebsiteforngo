import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface StatsCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export default function StatsCounter({ value, label, prefix = '', suffix = '', delay = 0 }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const springValue = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const formatted = Math.floor(latest).toLocaleString();
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, springValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-accent-orange/50 transition-colors group"
    >
      <motion.div className="text-3xl md:text-4xl font-bold text-accent-orange mb-1 group-hover:scale-110 transition-transform origin-left">
        <motion.span>{displayValue}</motion.span>
      </motion.div>
      <div className="text-sm text-text-muted font-medium uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
