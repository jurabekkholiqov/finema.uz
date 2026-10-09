import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Values: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      num: t('values.val1Num'),
      title: t('values.val1Title'),
      desc: t('values.val1Desc'),
    },
    {
      num: t('values.val2Num'),
      title: t('values.val2Title'),
      desc: t('values.val2Desc'),
    },
    {
      num: t('values.val3Num'),
      title: t('values.val3Title'),
      desc: t('values.val3Desc'),
    },
    {
      num: t('values.val4Num'),
      title: t('values.val4Title'),
      desc: t('values.val4Desc'),
    },
  ];

  return (
    <section id="values" className="py-20 lg:py-28 bg-[#FBF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-finema-mint px-3 py-1.5 rounded-full inline-block">
            {t('values.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-finema-textDark tracking-tight">
            {t('values.title')}
          </h2>
        </div>

        {/* 4 Numbered Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="space-y-4 border-t-2 border-finema-darkGreen/20 pt-6 hover:border-finema-darkGreen transition-colors group"
            >
              <span className="text-4xl lg:text-5xl font-extrabold text-finema-darkGreen/30 group-hover:text-finema-darkGreen transition-colors duration-300">
                {item.num}
              </span>

              <h3 className="text-xl font-bold text-finema-textDark group-hover:text-finema-darkGreen transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-finema-textDark/75 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
