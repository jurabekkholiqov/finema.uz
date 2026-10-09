import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart, PiggyBank } from 'lucide-react';

export const WhyFinema: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      title: t('why.card1Title'),
      subtitle: t('why.card1Sub'),
      desc: t('why.card1Desc'),
      icon: Sparkles,
      image: '/images/why-1.jpg',
      webpImage: '/images/why-1.webp',
      badgeColor: 'bg-finema-darkGreen text-white',
    },
    {
      id: 2,
      title: t('why.card2Title'),
      subtitle: t('why.card2Sub'),
      desc: t('why.card2Desc'),
      icon: Heart,
      image: '/images/why-2.jpg',
      webpImage: '/images/why-2.webp',
      badgeColor: 'bg-finema-lightGreen text-finema-darkGreen',
    },
    {
      id: 3,
      title: t('why.card3Title'),
      subtitle: t('why.card3Sub'),
      desc: t('why.card3Desc'),
      icon: PiggyBank,
      image: '/images/why-3.jpg',
      webpImage: '/images/why-3.webp',
      badgeColor: 'bg-finema-yellow text-finema-textDark',
    },
  ];

  return (
    <section id="why" className="py-20 lg:py-28 bg-[#F3EBDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-white px-3 py-1.5 rounded-full shadow-sm inline-block">
            {t('why.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-finema-textDark tracking-tight">
            {t('why.title')}
          </h2>
        </div>

        {/* 3 Image Cards Grid (Biomio Style image-on-top cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-soft border border-finema-cardBorder flex flex-col hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-finema-cream">
                  <picture>
                    <source srcSet={card.webpImage} type="image/webp" />
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 p-3 rounded-2xl shadow-md ${card.badgeColor}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-finema-textDark group-hover:text-finema-darkGreen transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-finema-darkGreen mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-finema-textDark/75 leading-relaxed font-normal">
                    {card.desc}
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
