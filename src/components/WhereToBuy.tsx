import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CONFIG, getTelegramOrderUrl, getTelegramWholesaleUrl } from '../config';
import { Send, Phone, Store, Instagram, ArrowUpRight } from 'lucide-react';

export const WhereToBuy: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contacts" className="py-20 lg:py-28 bg-finema-darkGreen text-white relative overflow-hidden">
      {/* Ambient background glow circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-finema-lightGreen/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-finema-lightGreen bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 inline-block">
            {t('whereToBuy.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('whereToBuy.title')}
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-medium">
            {t('whereToBuy.subtitle')}
          </p>
        </div>

        {/* 3 Prominent Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Telegram Order */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-finema-lightGreen text-finema-darkGreen flex items-center justify-center shadow-lg">
                <Send className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('whereToBuy.card1Title')}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {t('whereToBuy.card1Desc')}
              </p>
            </div>

            <div className="pt-8">
              <a
                href={getTelegramOrderUrl(undefined, undefined, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-finema-lightGreen hover:bg-[#9bd44d] text-finema-darkGreen py-3.5 px-6 rounded-full font-bold text-sm shadow-lg transition-transform group-hover:scale-105"
              >
                <span>{t('whereToBuy.card1Btn')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Phone Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-finema-yellow text-finema-textDark flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('whereToBuy.card2Title')}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {t('whereToBuy.card2Desc')}
              </p>
            </div>

            <div className="pt-8">
              <a
                href={CONFIG.PHONE_LINK}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-finema-cream text-finema-darkGreen py-3.5 px-6 rounded-full font-bold text-sm shadow-lg transition-transform group-hover:scale-105"
              >
                <Phone className="w-4 h-4 text-finema-darkGreen" />
                <span>{t('whereToBuy.card2Btn')}</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Wholesale Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white text-finema-darkGreen flex items-center justify-center shadow-lg">
                <Store className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('whereToBuy.card3Title')}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {t('whereToBuy.card3Desc')}
              </p>
            </div>

            <div className="pt-8">
              <a
                href={getTelegramWholesaleUrl(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-finema-mint hover:bg-white text-finema-darkGreen py-3.5 px-6 rounded-full font-bold text-sm shadow-lg transition-transform group-hover:scale-105"
              >
                <span>{t('whereToBuy.card3Btn')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Instagram Link Section */}
        <div className="mt-14 pt-10 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <Instagram className="w-6 h-6 text-finema-lightGreen shrink-0" />
          <span className="text-sm font-medium text-white/90">
            {t('whereToBuy.instagramText')}
          </span>
          <a
            href={CONFIG.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-finema-lightGreen font-bold text-sm hover:underline"
          >
            <span>@Finema_uz</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
