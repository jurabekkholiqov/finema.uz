import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getTelegramOrderUrl } from '../config';
import { Send, ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FBF6EE] via-[#F5EDDD] to-[#FBF6EE]">
      {/* Background Decorative Gradient Circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-finema-lightGreen/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-finema-darkGreen/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Made in UZ Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-finema-mint border border-finema-lightGreen/40 text-finema-darkGreen text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-finema-lightGreen" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-finema-textDark tracking-tight leading-[1.12]">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-finema-textDark/80 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={getTelegramOrderUrl(undefined, undefined, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-finema-darkGreen hover:bg-[#145224] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-green-glow hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-finema-lightGreen"
              >
                <Send className="w-5 h-5 text-finema-lightGreen" />
                <span>{t('hero.btnOrder')}</span>
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-finema-creamDark text-finema-darkGreen px-8 py-4 rounded-full font-bold text-base transition-all duration-300 border-2 border-finema-darkGreen/20 hover:border-finema-darkGreen shadow-sm hover:-translate-y-0.5 focus:outline-none"
              >
                <span>{t('hero.btnProducts')}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Image Block (5 cols) - Biomio Style soft rounded frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-white group">
              <picture>
                <source srcSet="/images/hero.webp" type="image/webp" />
                <img
                  src="/images/hero.jpg"
                  alt="Finema Products Showcase"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </picture>
              
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-finema-darkGreen/40 via-transparent to-transparent opacity-60" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-finema-darkGreen uppercase tracking-wider">
                    {t('about.feature1')}
                  </p>
                  <p className="text-sm font-semibold text-finema-textDark">
                    Finema Premium Care
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-finema-darkGreen flex items-center justify-center text-white font-bold text-xs shadow">
                  72%
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Biomio-style Scroll Hint Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-finema-textDark/60 hover:text-finema-darkGreen transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen">
          {t('hero.scrollHint')}
        </span>
        <div className="w-6 h-10 border-2 border-finema-darkGreen/40 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-finema-darkGreen rounded-full"
          />
        </div>
        <ChevronDown className="w-4 h-4 text-finema-darkGreen/60" />
      </motion.div>
    </section>
  );
};
