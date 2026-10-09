import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ImageBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="/images/banner.webp" type="image/webp" />
        <img
          src="/images/banner.jpg"
          alt="Finema Cleanliness Banner"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          loading="lazy"
        />
      </picture>

      {/* Dark & Soft Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-finema-darkGreen/85 via-finema-darkGreen/60 to-black/40" />

      {/* Slogan Overlay Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-finema-lightGreen bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            FINEMA PHILOSOPHY
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md"
        >
          “{t('banner.slogan')}”
        </motion.h2>
      </div>
    </section>
  );
};
