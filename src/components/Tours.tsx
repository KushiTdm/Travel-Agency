// src/components/Tours.tsx

import { useLanguage } from '../context/LanguageContext';
import { TourCard } from './TourCard';
import { tours } from '../data/tours';

export const Tours = () => {
  const { t } = useLanguage();

  return (
    <section id="tours" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('Nuestras Actividades Destacadas', 'Our Featured Activities')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t(
              'Vive aventuras únicas en el lugar más austral del planeta',
              'Experience unique adventures in the southernmost place on the planet'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tours.map((tour) => (
            <TourCard 
              key={tour.id} 
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
          ))}
        </div>
      </div>
    </section>
  );
};