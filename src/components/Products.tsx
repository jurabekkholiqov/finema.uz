import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCT_CATEGORIES, ProductCategory } from '../data/products';
import { ProductModal } from './ProductModal';
import { getAssetPath } from '../config';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

export const Products: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FBF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 lg:mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-finema-darkGreen bg-finema-mint px-3 py-1.5 rounded-full inline-block">
              {t('products.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-finema-textDark tracking-tight leading-tight">
              {t('products.title')}
            </h2>
            <p className="text-base sm:text-lg text-finema-textDark/80 max-w-xl font-medium">
              Uy va oila uchun maxsus tayyorlangan, har bir detali o'ylangan tozalash vositalari to'plami.
            </p>
          </div>

          {/* Biomio-style intro image card beside heading */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-finema-cardBorder h-48 sm:h-56 group">
              <picture>
                <source srcSet={getAssetPath('/images/brand-poster.webp')} type="image/webp" />
                <img
                  src={getAssetPath('/images/brand-poster.jpg')}
                  alt="Finema Collection"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-r from-finema-darkGreen/80 via-finema-darkGreen/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-finema-lightGreen flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Finema Care
                </span>
                <p className="text-lg font-bold">Har kuni mukammal natija</p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const title = t(cat.titleKey);
            const tagline = t(cat.taglineKey);
            const desc = t(cat.descKey);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                onClick={() => setActiveCategory(cat)}
                className="bg-white rounded-[2rem] overflow-hidden border border-finema-cardBorder shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1.5"
              >
                {/* Image on top */}
                <div className="relative h-64 sm:h-72 bg-[#F3EBDD]/50 p-6 flex items-center justify-center overflow-hidden">
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet={getAssetPath(cat.mainWebpImage)} type="image/webp" />
                    <img
                      src={getAssetPath(cat.mainImage)}
                      alt={title}
                      className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </picture>
                  
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-finema-darkGreen text-xs font-bold px-3 py-1 rounded-full border border-finema-cardBorder shadow-sm">
                    {cat.variants.length} variant
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-finema-textDark group-hover:text-finema-darkGreen transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs font-bold text-finema-darkGreen mt-1 uppercase tracking-wider">
                      {tagline}
                    </p>
                    <p className="text-sm text-finema-textDark/70 mt-2 line-clamp-2">
                      {desc}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-2 flex items-center justify-between border-t border-finema-cardBorder/40">
                    <span className="text-xs font-bold text-finema-darkGreen flex items-center gap-1 group-hover:underline">
                      {t('products.orderBtn')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-finema-mint group-hover:bg-finema-darkGreen text-finema-darkGreen group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Promo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            onClick={() => setActiveCategory(PRODUCT_CATEGORIES[0])}
            className="bg-gradient-to-br from-finema-darkGreen to-[#12481F] rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-lg cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-finema-lightGreen">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold">
                {t('products.viewAll')}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Barcha tozalash vositalari variantlarini ko'ring va Telegram orqali osongina buyurtma bering.
              </p>
            </div>

            <div className="pt-6">
              <span className="inline-flex items-center gap-2 bg-finema-lightGreen text-finema-darkGreen px-6 py-3 rounded-full font-bold text-sm shadow group-hover:scale-105 transition-transform">
                <span>Katalogga o'tish</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Rounded Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveCategory(PRODUCT_CATEGORIES[0])}
            className="inline-flex items-center gap-3 bg-white hover:bg-finema-creamDark text-finema-darkGreen px-8 py-4 rounded-full font-bold text-base transition-all border-2 border-finema-darkGreen shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>{t('products.viewAll')}</span>
            <ArrowRight className="w-5 h-5 text-finema-darkGreen" />
          </button>
        </div>

      </div>

      {/* Product Detail / Variant Modal */}
      <ProductModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </section>
  );
};
