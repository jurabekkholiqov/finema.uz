import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language, CONFIG, getTelegramOrderUrl } from '../config';
import { Menu, X, Send, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: Language[] = ['uz', 'ru', 'en'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-md border-b border-finema-cardBorder/40'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-finema-lightGreen rounded-lg p-1">
            <img
              src="/logo.svg"
              alt="Finema Logo"
              className="h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-finema-textDark">
            <a href="#about" className="hover:text-finema-darkGreen transition-colors py-1 relative group">
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-finema-lightGreen transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#why" className="hover:text-finema-darkGreen transition-colors py-1 relative group">
              {t('nav.why')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-finema-lightGreen transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#products" className="hover:text-finema-darkGreen transition-colors py-1 relative group">
              {t('nav.products')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-finema-lightGreen transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#values" className="hover:text-finema-darkGreen transition-colors py-1 relative group">
              {t('nav.values')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-finema-lightGreen transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contacts" className="hover:text-finema-darkGreen transition-colors py-1 relative group">
              {t('nav.contacts')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-finema-lightGreen transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Actions: Language Switcher + Telegram Button */}
          <div className="hidden md:flex items-center gap-4 sm:gap-6">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#F3EBDD]/80 rounded-full p-1 border border-finema-cardBorder/60 shadow-inner">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded-full transition-all duration-200 ${
                    language === lang
                      ? 'bg-finema-darkGreen text-white shadow-sm scale-105'
                      : 'text-finema-textDark/70 hover:text-finema-darkGreen'
                  }`}
                  aria-label={`Switch language to ${lang}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Telegram Order Button */}
            <a
              href={getTelegramOrderUrl(undefined, undefined, language)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-finema-darkGreen hover:bg-[#145224] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-green-glow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-finema-lightGreen"
            >
              <Send className="w-4 h-4 text-finema-lightGreen" />
              <span>{t('nav.orderTelegram')}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Lang Switcher */}
            <div className="flex items-center bg-[#F3EBDD] rounded-full p-0.5 border border-finema-cardBorder">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                    language === lang ? 'bg-finema-darkGreen text-white' : 'text-finema-textDark/70'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-finema-darkGreen focus:outline-none rounded-lg bg-finema-creamDark/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-finema-cardBorder px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-base text-finema-textDark">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-finema-darkGreen py-1"
            >
              {t('nav.about')}
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-finema-darkGreen py-1"
            >
              {t('nav.why')}
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-finema-darkGreen py-1"
            >
              {t('nav.products')}
            </a>
            <a
              href="#values"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-finema-darkGreen py-1"
            >
              {t('nav.values')}
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-finema-darkGreen py-1"
            >
              {t('nav.contacts')}
            </a>
          </nav>

          <div className="pt-4 border-t border-finema-cardBorder/60 space-y-3">
            <a
              href={getTelegramOrderUrl(undefined, undefined, language)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-finema-darkGreen text-white py-3 rounded-full font-semibold text-sm shadow-md"
            >
              <Send className="w-4 h-4 text-finema-lightGreen" />
              <span>{t('nav.orderTelegram')}</span>
            </a>
            <a
              href={CONFIG.PHONE_LINK}
              className="flex items-center justify-center gap-2 bg-finema-creamDark text-finema-darkGreen py-2.5 rounded-full font-semibold text-sm border border-finema-cardBorder"
            >
              <Phone className="w-4 h-4" />
              <span>{CONFIG.PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
