import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONFIG, getTelegramOrderUrl, getAssetPath } from '../config';
import { Send, Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#123E1B] text-white/80 py-14 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <a href="#" className="inline-block focus:outline-none">
              <img
                src={getAssetPath('/logo.svg')}
                alt="Finema Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm text-white/70 max-w-md font-medium">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Social & Contact Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-sm font-semibold">
            <a
              href={getTelegramOrderUrl(undefined, undefined, language)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-finema-lightGreen transition-colors"
            >
              <Send className="w-4 h-4 text-finema-lightGreen" />
              <span>Telegram (@{CONFIG.TELEGRAM_ADMIN})</span>
            </a>

            <a
              href={CONFIG.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-finema-lightGreen transition-colors"
            >
              <Instagram className="w-4 h-4 text-finema-lightGreen" />
              <span>Instagram (@Finema_uz)</span>
            </a>

            <a
              href={CONFIG.PHONE_LINK}
              className="flex items-center gap-2 hover:text-finema-lightGreen transition-colors"
            >
              <Phone className="w-4 h-4 text-finema-lightGreen" />
              <span>{t('footer.phone')}</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a>
            <a href="#products" className="hover:text-white transition-colors">{t('nav.products')}</a>
            <a href="#contacts" className="hover:text-white transition-colors">{t('nav.contacts')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
