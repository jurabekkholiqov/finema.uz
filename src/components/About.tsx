import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ShieldCheck, Factory } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FBF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Biomio style large rounded image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-finema-cardBorder/60 group">
              <picture>
                <source srcSet="/images/about.webp" type="image/webp" />
                <img
                  src="/images/about.jpg"
                  alt="Finema Brand Crafting"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </picture>
              
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-finema-darkGreen/50 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 glass-card px-5 py-3 rounded-2xl border border-white/70 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-finema-darkGreen text-finema-lightGreen flex items-center justify-center font-bold">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-finema-darkGreen uppercase">O'zbekistonda tayyorlanadi</p>
                  <p className="text-sm font-semibold text-finema-textDark">O'z ishlab chiqarishimiz</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Values */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Small uppercase label */}
            <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-finema-mint px-3 py-1.5 rounded-full inline-block">
              {t('about.label')}
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-finema-textDark leading-tight">
              {t('about.title')}
            </h2>

            {/* Core Paragraph (Exact prompt quote requirement) */}
            <p className="text-lg sm:text-xl font-medium text-finema-darkGreen leading-relaxed bg-finema-creamDark/70 p-5 rounded-2xl border-l-4 border-finema-darkGreen">
              {t('about.text')}
            </p>

            {/* Subtext */}
            <p className="text-base text-finema-textDark/80 leading-relaxed font-normal">
              {t('about.subtext')}
            </p>

            {/* Bullet features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-finema-cardBorder shadow-soft">
                <CheckCircle2 className="w-6 h-6 text-finema-lightGreen shrink-0" />
                <span className="text-sm font-bold text-finema-textDark">{t('about.feature1')}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-finema-cardBorder shadow-soft">
                <ShieldCheck className="w-6 h-6 text-finema-lightGreen shrink-0" />
                <span className="text-sm font-bold text-finema-textDark">{t('about.feature2')}</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
