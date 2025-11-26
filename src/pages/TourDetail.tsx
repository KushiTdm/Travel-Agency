// src/pages/TourDetail.tsx

import { useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MapPin, 
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowLeft,
  Share2,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTourById, tours } from '../data/tours';
import { useState } from 'react';

export const TourDetail = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const tour = tourId ? getTourById(tourId) : undefined;

  // Informations de contact
  const contactInfo = {
    phone: '+54 9 2901 123456',
    whatsapp: '+5492901123456',
    email: 'info@australexpeditions.com'
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('Tour no encontrado', 'Tour not found')}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            {t('← Volver al inicio', '← Back to home')}
          </button>
        </div>
      </div>
    );
  }

  // Tours similaires (exclure le tour actuel)
  const similarTours = tours.filter(t => t.id !== tour.id).slice(0, 3);

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `${t('Hola, me interesa el tour:', 'Hello, I\'m interested in the tour:')} ${language === 'es' ? tour?.titleEs : tour?.titleEn}`
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(
      `${t('Consulta sobre:', 'Inquiry about:')} ${language === 'es' ? tour?.titleEs : tour?.titleEn}`
    );
    const body = encodeURIComponent(
      `${t('Hola, me gustaría recibir más información sobre este tour.', 'Hello, I would like to receive more information about this tour.')}\n\n${t('Tour:', 'Tour:')} ${language === 'es' ? tour?.titleEs : tour?.titleEn}\n${t('Precio:', 'Price:')} ${tour?.price}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modal de réservation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-fadeIn">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('Reservar Tour', 'Book Tour')}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'es' ? tour?.titleEs : tour?.titleEn}
            </p>

            <div className="space-y-4">
              {/* Téléphone */}
              <button
                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                className="w-full flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">{t('Llamar ahora', 'Call now')}</p>
                  <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                </div>
              </button>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-sm text-gray-600">{t('Enviar mensaje', 'Send message')}</p>
                </div>
              </button>

              {/* Email */}
              <button
                onClick={handleEmail}
                className="w-full flex items-center space-x-4 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">{t('Enviar email', 'Send email')}</p>
                  <p className="text-sm text-gray-600">{contactInfo.email}</p>
                </div>
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              {t(
                'Nos pondremos en contacto contigo lo antes posible',
                'We will contact you as soon as possible'
              )}
            </p>
          </div>
        </div>
      )}

      {/* Header avec bouton retour */}
      <div className="bg-slate-900 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('Volver a tours', 'Back to tours')}</span>
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {language === 'es' ? tour.titleEs : tour.titleEn}
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl">
                {language === 'es' ? tour.descriptionEs : tour.descriptionEn}
              </p>
            </div>
            
            <div className="mt-6 lg:mt-0 flex space-x-3">
              <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image principale */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src={tour.image}
                alt={language === 'es' ? tour.titleEs : tour.titleEn}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Caractéristiques rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600">{t('Duración', 'Duration')}</p>
                <p className="font-bold text-gray-900">{tour.duration}</p>
              </div>
              
              {tour.difficulty && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600 mb-2" />
                  <p className="text-sm text-gray-600">{t('Dificultad', 'Difficulty')}</p>
                  <p className="font-bold text-gray-900">{tour.difficulty}</p>
                </div>
              )}
              
              <div className="bg-green-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm text-gray-600">{t('Grupo máx.', 'Max group')}</p>
                <p className="font-bold text-gray-900">{tour.maxGroupSize}</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm text-gray-600">{t('Precio', 'Price')}</p>
                <p className="font-bold text-gray-900">{tour.price}</p>
              </div>
            </div>

            {/* Description complète */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('Descripción', 'Description')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {language === 'es' ? tour.fullDescriptionEs : tour.fullDescriptionEn}
              </p>
            </div>

            {/* Itinéraire */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('Itinerario', 'Itinerary')}
              </h2>
              <div className="space-y-3">
                {(language === 'es' ? tour.itineraryEs : tour.itineraryEn).map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>{t('Incluye', 'Includes')}</span>
                </h3>
                <ul className="space-y-2">
                  {(language === 'es' ? tour.includesEs : tour.includesEn).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <span>{t('No incluye', 'Not included')}</span>
                </h3>
                <ul className="space-y-2">
                  {(language === 'es' ? tour.excludesEs : tour.excludesEn).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommandations */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                <span>{t('Recomendaciones', 'Recommendations')}</span>
              </h3>
              <ul className="space-y-2">
                {(language === 'es' ? tour.recommendationsEs : tour.recommendationsEn).map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar de réservation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Carte de prix */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">{t('Desde', 'From')}</p>
                  <p className="text-4xl font-bold text-orange-500">{tour.price}</p>
                  <p className="text-sm text-gray-500">{t('por persona', 'per person')}</p>
                </div>
                
                <button
                  onClick={handleBooking}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors mb-4"
                >
                  {t('Reservar Ahora', 'Book Now')}
                </button>
              </div>

              {/* Informations pratiques */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  {t('Información Práctica', 'Practical Information')}
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{t('Punto de partida', 'Meeting point')}</p>
                      <p className="text-gray-600">{language === 'es' ? tour.departureEs : tour.departureEn}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{t('Horarios', 'Schedule')}</p>
                      <p className="text-gray-600">{language === 'es' ? tour.scheduleEs : tour.scheduleEn}</p>
                    </div>
                  </div>
                  
                  {tour.minAge && (
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">{t('Edad mínima', 'Minimum age')}</p>
                        <p className="text-gray-600">{tour.minAge} {t('años', 'years')}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Politique d'annulation */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  {t('Política de Cancelación', 'Cancellation Policy')}
                </h3>
                <p className="text-sm text-gray-700">
                  {language === 'es' ? tour.cancellationEs : tour.cancellationEn}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tours similaires */}
        {similarTours.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('Tours Similares', 'Similar Tours')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarTours.map((similarTour) => (
                <div
                  key={similarTour.id}
                  onClick={() => {
                    navigate(`/tour/${similarTour.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={similarTour.image}
                      alt={language === 'es' ? similarTour.titleEs : similarTour.titleEn}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {similarTour.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language === 'es' ? similarTour.titleEs : similarTour.titleEn}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {language === 'es' ? similarTour.descriptionEs : similarTour.descriptionEn}
                    </p>
                    
                    <div className="flex items-center space-x-3 text-sm text-gray-700">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>{similarTour.duration}</span>
                      </div>
                      {similarTour.difficulty && (
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-orange-500" />
                          <span>{similarTour.difficulty}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};