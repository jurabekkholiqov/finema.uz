import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../config';
import { HeartHandshake } from 'lucide-react';

export const Mission: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-[#FBF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with background image & soft green overlay card */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl min-h-[420px] lg:min-h-[480px] flex items-center justify-end p-6 sm:p-10 lg:p-16">
          
          {/* Background Image */}
          <picture className="absolute inset-0 w-full h-full">
            <source srcSet={getAssetPath('/images/hero.webp')} type="image/webp" />
            <img
              src={getAssetPath('/images/hero.jpg')}
              alt="Finema Mission Background"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </picture>
          
          {/* Soft Dark Ambient Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Floating Soft Green Mission Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 bg-[#E6F2E8] border border-finema-lightGreen/40 rounded-[2rem] p-8 sm:p-10 lg:p-12 max-w-xl shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-white px-3 py-1 rounded-full shadow-sm">
                {t('mission.label')}
              </span>
              <HeartHandshake className="w-5 h-5 text-finema-darkGreen" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-finema-darkGreen leading-tight">
              “{t('mission.quote')}”
            </h3>

            <p className="text-base text-finema-textDark/80 font-medium leading-relaxed">
              {t('mission.subquote')}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
