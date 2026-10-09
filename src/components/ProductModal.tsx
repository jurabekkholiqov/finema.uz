import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ProductCategory, ProductVariant } from '../data/products';
import { getTelegramOrderUrl, getAssetPath } from '../config';
import { X, Send, Check, Sparkles } from 'lucide-react';

interface ProductModalProps {
  category: ProductCategory | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ category, onClose }) => {
  const { t, language } = useLanguage();
  const [selectedVariantId, setSelectedVariantId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (category && category.variants.length > 0) {
      setSelectedVariantId(category.variants[0].id);
    }
  }, [category]);

  if (!category) return null;

  const currentVariant: ProductVariant =
    category.variants.find((v) => v.id === selectedVariantId) || category.variants[0];

  const localizedName = currentVariant ? currentVariant.name[language] || currentVariant.name.uz : "";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-[#FBF6EE] w-full max-w-3xl rounded-[2.5rem] shadow-2xl border border-finema-cardBorder overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-finema-textDark flex items-center justify-center shadow-md border border-finema-cardBorder transition-transform hover:scale-110"
            aria-label={t('products.close')}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
            {/* Left: Product Image */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="relative w-full h-64 sm:h-80 bg-white rounded-3xl overflow-hidden p-4 border border-finema-cardBorder/60 shadow-inner flex items-center justify-center group">
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={getAssetPath(currentVariant.webpImage)} type="image/webp" />
                  <img
                    src={getAssetPath(currentVariant.image)}
                    alt={localizedName}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>

                {currentVariant.size && (
                  <span className="absolute top-3 left-3 bg-finema-darkGreen text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {currentVariant.size}
                  </span>
                )}
              </div>
            </div>

            {/* Right: Details & Variants */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-finema-mint px-3 py-1 rounded-full">
                  FINEMA
                </span>
                <h3 className="text-2xl font-extrabold text-finema-textDark mt-2">
                  {t(category.titleKey)}
                </h3>
                <p className="text-sm font-semibold text-finema-darkGreen">
                  {t(category.taglineKey)}
                </p>
              </div>

              <p className="text-sm text-finema-textDark/80 leading-relaxed">
                {t(category.descKey)}
              </p>

              {/* Variant selector buttons */}
              {category.variants.length > 1 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-finema-textDark/70 tracking-wider">
                    {t('products.selectVariant')}
                  </label>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
                    {category.variants.map((variant) => {
                      const vName = variant.name[language] || variant.name.uz;
                      const isSelected = variant.id === currentVariant.id;
                      return (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariantId(variant.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
                            isSelected
                              ? 'bg-finema-darkGreen text-white border-finema-darkGreen shadow-sm scale-105'
                              : 'bg-white text-finema-textDark border-finema-cardBorder hover:border-finema-darkGreen'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-finema-lightGreen" />}
                          <span>{vName} ({variant.size})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Selected Variant Summary */}
              <div className="bg-white p-4 rounded-2xl border border-finema-cardBorder space-y-1">
                <div className="text-xs font-bold text-finema-darkGreen uppercase tracking-wider">
                  Tanlangan vosita:
                </div>
                <div className="text-sm font-extrabold text-finema-textDark">
                  {localizedName}
                </div>
                {currentVariant.scent && (
                  <div className="text-xs text-finema-textDark/70 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-finema-lightGreen" />
                    <span>Hidi: {currentVariant.scent[language] || currentVariant.scent.uz}</span>
                  </div>
                )}
              </div>

              {/* Order via Telegram Button */}
              <a
                href={getTelegramOrderUrl(localizedName, currentVariant.size, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-finema-darkGreen hover:bg-[#145224] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-green-glow transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4 text-finema-lightGreen" />
                <span>{t('products.orderBtn')} (Telegram)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
