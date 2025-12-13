// src/components/Tours.tsx

import { useLanguage } from '../context/LanguageContext';
import { TourCard } from './TourCard';
import { tours } from '../data/tours';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const Tours = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setVisibleCards(getVisibleCards());
    });
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tours.length);
  };

  const getVisibleTours = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % tours.length;
      visible.push(tours[index]);
    }
    return visible;
  };

  const visibleTours = getVisibleTours();

  return (
    <section id="tours" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12 sm:mb-16">
  {/* TITRES MODIFIÉS ICI */}
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
    {t(
      'Nuestras Aventuras en el Sur de Bolivia',
      'Our Adventures in Southern Bolivia',
      'Nos aventures dans le sud de la Bolivie'
    )}
  </h2>
  <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
    {t(
      'Descubre los Desiertos blancos, lagunas de colores y maravillas del altiplano boliviano',
      'Discover the white deserts, colorful lagoons and wonders of the Bolivian highlands',
      'Découvrez les déserts blancs, les lagunes colorées et les merveilles de l’altiplano bolivien'
    )}
  </p>
</div>


        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Button Left */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-500 text-slate-900 hover:text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 -ml-4 sm:-ml-6 group"
            aria-label="Previous tours"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Button Right */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-500 text-slate-900 hover:text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 -mr-4 sm:-mr-6 group"
            aria-label="Next tours"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTours.map((tour, idx) => (
              <div
                key={`${tour.id}-${currentIndex}-${idx}`}
                className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <TourCard 
                  id={tour.id}
                  image={tour.image}
                  titleEs={tour.titleEs}
                  titleEn={tour.titleEn}
                  descriptionEs={tour.descriptionEs}
                  descriptionEn={tour.descriptionEn}
                  duration={tour.duration}
                  difficulty={tour.difficulty}
                  price={tour.price}
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {tours.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-orange-500 w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to tour ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};