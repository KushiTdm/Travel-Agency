// src/components/TourCard.tsx

import { Clock, TrendingUp, DollarSign } from 'lucide-react';
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
  price,
}: TourCardProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/tour/${id}`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={handleLearnMore}>
        <img
          src={image}
          alt={t(titleEs, titleEn)}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 cursor-pointer hover:text-orange-500 transition-colors" onClick={handleLearnMore}>
          {t(titleEs, titleEn)}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {t(descriptionEs, descriptionEn)}
        </p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{duration}</span>
          </div>
          {difficulty && (
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>{difficulty}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span>{t('Desde', 'From')} {price}</span>
          </div>
        </div>

        <button 
          onClick={handleLearnMore}
          className="mt-6 w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-colors"
        >
          {t('Más Información', 'Learn More')}
        </button>
      </div>
    </div>
  );
};