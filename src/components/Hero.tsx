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
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/ushuaia.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
          {t('Descubre el Fin del Mundo', 'Discover the End of the World')}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {t(
            'Experiencias inolvidables en la Tierra del Fuego',
            'Unforgettable experiences in Tierra del Fuego'
          )}
        </p>
        <button
          onClick={scrollToTours}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-base sm:text-lg transition-all hover:scale-105 shadow-2xl"
        >
          {t('Ver Excursiones', 'View Tours')}
        </button>
      </div>

      <button
        onClick={scrollToTours}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-75" />
      </button>
    </section>
  );
};
