import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Factory, Zap, Sparkles, WashingMachine, Droplets, Users } from 'lucide-react';

export const Advantages: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      id: 1,
      title: t('advantages.item1Title'),
      desc: t('advantages.item1Desc'),
      icon: Factory,
    },
    {
      id: 2,
      title: t('advantages.item2Title'),
      desc: t('advantages.item2Desc'),
      icon: Zap,
    },
    {
      id: 3,
      title: t('advantages.item3Title'),
      desc: t('advantages.item3Desc'),
      icon: Sparkles,
    },
    {
      id: 4,
      title: t('advantages.item4Title'),
      desc: t('advantages.item4Desc'),
      icon: WashingMachine,
    },
    {
      id: 5,
      title: t('advantages.item5Title'),
      desc: t('advantages.item5Desc'),
      icon: Droplets,
    },
    {
      id: 6,
      title: t('advantages.item6Title'),
      desc: t('advantages.item6Desc'),
      icon: Users,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F3EBDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-white px-3 py-1.5 rounded-full shadow-sm inline-block">
            {t('advantages.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-finema-textDark tracking-tight">
            {t('advantages.title')}
          </h2>
        </div>

        {/* 6 Icon Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-finema-cardBorder shadow-soft hover:shadow-card-hover transition-all duration-300 flex items-start gap-4 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-finema-mint text-finema-darkGreen flex items-center justify-center shrink-0 group-hover:bg-finema-darkGreen group-hover:text-finema-lightGreen transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-finema-textDark group-hover:text-finema-darkGreen transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-finema-textDark/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
