// src/components/TourCard.tsx

import { Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface TourCardProps {
  id: string;
  image: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  duration: string;
  difficulty?: string;
  price: string;
}

export const TourCard = ({
  id,
  image,
  titleEs,
  titleEn,
  descriptionEs,
  descriptionEn,
  duration,
  difficulty,
}: TourCardProps) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/tour/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const translateDifficulty = (diff?: string) => {
    if (!diff) return '';
    if (language === 'es') return diff;
    if (language === 'en') {
      if (diff === 'Media') return 'Medium';
      if (diff === 'Alta') return 'High';
      if (diff === 'Baja') return 'Low';
      return diff;
    }
    // Français
    if (diff === 'Media') return 'Moyenne';
    if (diff === 'Alta') return 'Élevée';
    if (diff === 'Baja') return 'Faible';
    return diff;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={handleLearnMore}>
        <img
          src={image}
          alt={t(titleEs, titleEn, titleEs)}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 cursor-pointer hover:text-orange-500 transition-colors" onClick={handleLearnMore}>
          {t(titleEs, titleEn, titleEs)}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {t(descriptionEs, descriptionEn, descriptionEs)}
        </p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-700 mb-6">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{duration}</span>
          </div>
          {difficulty && (
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>{translateDifficulty(difficulty)}</span>
            </div>
          )}
        </div>

        <button 
          onClick={handleLearnMore}
          className="w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-colors"
        >
          {t('Más Información', 'Learn More', 'Plus d\'infos')}
        </button>
      </div>
    </div>
  );
};