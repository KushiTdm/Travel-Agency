import { Users, MapPin, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      titleEs: 'Guías Locales',
      titleEn: 'Local Guides',
      descriptionEs: 'Expertos nacidos en Ushuaia que conocen cada rincón de la región',
      descriptionEn: 'Experts born in Ushuaia who know every corner of the region',
    },
    {
      icon: Users,
      titleEs: 'Grupos Pequeños',
      titleEn: 'Small Groups',
      descriptionEs: 'Máximo 12 personas para una experiencia personalizada',
      descriptionEn: 'Maximum 12 people for a personalized experience',
    },
    {
      icon: Leaf,
      titleEs: 'Turismo Sostenible',
      titleEn: 'Sustainable Tourism',
      descriptionEs: 'Comprometidos con la conservación del medio ambiente',
      descriptionEn: 'Committed to environmental conservation',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('¿Por Qué Elegirnos?', 'Why Choose Us?')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            {t(
              'Nuestra pasión es mostrarte la belleza de Tierra del Fuego',
              'Our passion is showing you the beauty of Tierra del Fuego'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/20 mb-6">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {t(feature.titleEs, feature.titleEn)}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t(feature.descriptionEs, feature.descriptionEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
