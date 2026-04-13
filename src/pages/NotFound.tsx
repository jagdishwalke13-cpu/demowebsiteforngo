import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-[12rem] font-serif font-bold text-accent-orange/20 leading-none mb-8"
        >
          404
        </motion.div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Oops! This page got lost in rural India 🌾
        </h1>
        
        <p className="text-text-muted text-lg mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full md:w-auto bg-accent-orange text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full md:w-auto border border-white/10 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
