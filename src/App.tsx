import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyFinema } from './components/WhyFinema';
import { Products } from './components/Products';
import { Advantages } from './components/Advantages';
import { ImageBanner } from './components/ImageBanner';
import { Values } from './components/Values';
import { Mission } from './components/Mission';
import { WhereToBuy } from './components/WhereToBuy';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FBF6EE] text-[#1E2A22] font-sans antialiased selection:bg-[#8CC63F]/30 selection:text-[#1B6B2F]">
        {/* 0. Sticky Header */}
        <Header />

        <main id="main-content">
          {/* 1. HERO */}
          <Hero />

          {/* 2. ABOUT */}
          <About />

          {/* 3. WHY FINEMA */}
          <WhyFinema />

          {/* 4. PRODUCTS */}
          <Products />

          {/* 5. ADVANTAGES */}
          <Advantages />

          {/* 6. FULL-WIDTH IMAGE BANNER */}
          <ImageBanner />

          {/* 7. VALUES */}
          <Values />

          {/* 8. MISSION */}
          <Mission />

          {/* 9. WHERE TO BUY / ORDER */}
          <WhereToBuy />
        </main>

        {/* 10. FOOTER */}
        <Footer />

        {/* Floating Utilities */}
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;
