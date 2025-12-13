// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Salar-night.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-5xl md:text-7xl text-center mb-6 tracking-tight"
        >
          {t('Descubre Bolivia con Ojos Locales', 'Discover Bolivia Through Local Eyes', 'Découvrez la Bolivie avec des Yeux Locaux')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl font-light"
        >
          {t(
  'Más que un tour, una experiencia liderada por pioneros en servicios turísticos',
  'More than a tour, an experience led by pioneers in tourism services.',
  'Plus qu’un tour, une expérience menée par des pionniers des services touristiques.'
)
}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTours}
          className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl"
        >
          {t('Ver Excursiones', 'View Tours', 'Voir les Excursions')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 cursor-pointer"
          onClick={scrollToTours}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};