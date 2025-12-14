import { useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  TrendingUp, 
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
  X,
  DollarSign
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

  const getContactInfo = () => {
    if (tour?.id === 'mina-cooperativa-potosi' || tour?.id === 'transporte-turistico-privado') {
      return {
        phone: '+591 71820778',
        whatsapp: '59171820778',
        email: 'sinfronterastoursuyuni@gmail.com',
        name: 'Juan Carlos'
      };
    } else {
      return {
        phone: '+591 74203049',
        whatsapp: '59174203049',
        email: 'uyuni.sinfronteras@gmail.com',
        name: 'Georgina'
      };
    }
  };

  // Fonction pour obtenir le prix avec traduction
    const getTranslatedPrice = (price, t) => {
      if (price === 'Consultar') {
        return t('Consultar', 'Contact us', 'Nous consulter');
      }
      return price;
    };

  const contactInfo = getContactInfo();

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('Tour no encontrado', 'Tour not found', 'Tour non trouvé')}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            {t('← Volver al inicio', '← Back to home', '← Retour à l\'accueil')}
          </button>
        </div>
      </div>
    );
  }

  const similarTours = tours.filter(t => t.id !== tour.id).slice(0, 2);

  const handleBooking = () => {
    const message = encodeURIComponent(
      t(
        `Hola, estoy interesado en el tour: ${tour.titleEs}. ¿Podrían enviarme más información y disponibilidad?`,
        `Hello, I am interested in the tour: ${tour.titleEn}. Could you send me more information and availability?`,
        `Bonjour, je suis intéressé par le tour: ${tour.titleEs}. Pourriez-vous m'envoyer plus d'informations et les disponibilités?`
      )
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleWhatsApp = () => {
    const tourTitle = language === 'es' ? tour?.titleEs : language === 'en' ? tour?.titleEn : tour?.titleEs;
    const message = encodeURIComponent(
      `${t('Hola', 'Hello', 'Bonjour')}, ${t('estoy interesado en el tour:', 'I am interested in the tour:', 'je suis intéressé par le tour:')} ${tourTitle}`
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleCustomizeTour = () => {
  const tourTitle = language === 'es' ? tour?.titleEs : language === 'en' ? tour?.titleEn : tour?.titleEs;
  const message = encodeURIComponent(
    t(
      `Hola, estoy interesado en el tour: ${tourTitle}. Si este programa no se adapta a mis tiempos, me gustaría organizar mi visita de acuerdo a mis requerimientos y necesidades. ¿Podrían ayudarme?`,
      `Hello, I am interested in the tour: ${tourTitle}. If this program does not fit my schedule, I would like to organize my visit according to my requirements and needs. Could you help me?`,
      `Bonjour, je suis intéressé par le tour: ${tourTitle}. Si ce programme ne correspond pas à mes horaires, j'aimerais organiser ma visite selon mes exigences et besoins. Pourriez-vous m'aider ?`
    )
  );
  window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
};

  const handleEmail = () => {
    const tourTitle = language === 'es' ? tour?.titleEs : language === 'en' ? tour?.titleEn : tour?.titleEs;
    const subject = encodeURIComponent(
      `${t('Consulta sobre:', 'Inquiry about:', 'Demande concernant:')} ${tourTitle}`
    );
    const body = encodeURIComponent(
      `${t('Hola, me gustaría recibir más información sobre este tour.', 'Hello, I would like to receive more information about this tour.', 'Bonjour, je souhaiterais recevoir plus d\'informations sur ce tour.')}\n\n${t('Tour:', 'Tour:', 'Tour:')} ${tourTitle}\n${t('Precio:', 'Price:', 'Prix:')} ${tour?.price}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const groupItineraryByDay = (itinerary: string[]) => {
    const grouped: { [key: string]: { main?: string; options: { label: string; text: string; color: string }[] } } = {};
    
    // Vérifier si l'itinéraire contient des jours
    const hasDays = itinerary.some(step => /^(DÍA \d+|DAY \d+|JOUR \d+)/i.test(step));
    
    if (!hasDays) {
      // Si pas de jours, créer une liste simple
      grouped['simple'] = { 
        main: '', 
        options: itinerary.map(item => ({
          label: '',
          text: item,
          color: ''
        }))
      };
      return grouped;
    }
    
    itinerary.forEach((step) => {
      const dayMatch = step.match(/^(DÍA \d+|DAY \d+|JOUR \d+)/i);
      if (!dayMatch) return;
      
      const day = dayMatch[1];
      
      if (!grouped[day]) {
        grouped[day] = { options: [] };
      }
      
      const optionMatch1 = step.match(/^(DÍA \d+|DAY \d+|JOUR \d+)\s*-?\s*(OPCIÓN \d+|OPTION \d+)\s*(\([^)]+\))?\s*:\s*(.+)/i);
      const optionMatch2 = step.match(/^(DÍA \d+|DAY \d+|JOUR \d+)\s*-\s*[^.]+\.\s*(OPCIÓN \d+|OPTION \d+)\s*(\([^)]+\))?\s*:\s*(.+)/i);
      
      if (optionMatch1) {
        const optionLabel = optionMatch1[2];
        const optionExtra = optionMatch1[3] || '';
        const optionText = optionMatch1[4];
        
        const colors = [
          'bg-blue-50 border-blue-300',
          'bg-purple-50 border-purple-300',
          'bg-green-50 border-green-300'
        ];
        const colorIndex = grouped[day].options.length % colors.length;
        
        grouped[day].options.push({
          label: `${optionLabel} ${optionExtra}`.trim(),
          text: optionText,
          color: colors[colorIndex]
        });
      } else if (optionMatch2) {
        const optionLabel = optionMatch2[2];
        const optionExtra = optionMatch2[3] || '';
        const optionText = optionMatch2[4];
        
        const colors = [
          'bg-blue-50 border-blue-300',
          'bg-purple-50 border-purple-300',
          'bg-green-50 border-green-300'
        ];
        const colorIndex = grouped[day].options.length % colors.length;
        
        grouped[day].options.push({
          label: `${optionLabel} ${optionExtra}`.trim(),
          text: optionText,
          color: colors[colorIndex]
        });
      } else {
        const textMatch = step.match(/^(DÍA \d+|DAY \d+|JOUR \d+)\s*-?\s*:?\s*(.+)/i);
        if (textMatch) {
          grouped[day].main = textMatch[2].replace(/^\s*:\s*/, '').trim();
        }
      }
    });
    
    return grouped;
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
    if (diff === 'Media') return 'Moyenne';
    if (diff === 'Alta') return 'Élevée';
    if (diff === 'Baja') return 'Faible';
    return diff;
  };

  const tourTitle = language === 'es' ? tour.titleEs : language === 'en' ? tour.titleEn : tour.titleFr;
  const tourDesc = language === 'es' ? tour.descriptionEs : language === 'en' ? tour.descriptionEn : tour.descriptionFr;
  const tourFullDesc = language === 'es' ? tour.fullDescriptionEs : language === 'en' ? tour.fullDescriptionEn : tour.fullDescriptionFr;
  const tourItinerary = language === 'es' ? tour.itineraryEs : language === 'en' ? tour.itineraryEn : tour.itineraryFr;
  const tourIncludes = language === 'es' ? tour.includesEs : language === 'en' ? tour.includesEn : tour.includesFr;
  const tourExcludes = language === 'es' ? tour.excludesEs : language === 'en' ? tour.excludesEn : tour.excludesFr;
  const tourRecommendations = language === 'es' ? tour.recommendationsEs : language === 'en' ? tour.recommendationsEn : tour.recommendationsFr;
  const groupedItinerary = groupItineraryByDay(tourItinerary);

  return (
    <div className="min-h-screen bg-white">
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
              {t('Reservar Tour', 'Book Tour', 'Réserver le Tour')}
            </h3>
            <p className="text-gray-600 mb-6">{tourTitle}</p>

            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group border-2 border-green-500"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-sm text-gray-600">{t('Respuesta inmediata', 'Immediate response', 'Réponse immédiate')}</p>
                </div>
              </button>

              <button
                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                className="w-full flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">{t('Llamar ahora', 'Call now', 'Appeler maintenant')}</p>
                  <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="w-full flex items-center space-x-4 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">{t('Enviar email', 'Send email', 'Envoyer un email')}</p>
                  <p className="text-sm text-gray-600">{contactInfo.email}</p>
                </div>
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              {t('Nos pondremos en contacto contigo lo antes posible', 'We will contact you as soon as possible', 'Nous vous contacterons dans les plus brefs délais')}
            </p>
          </div>
        </div>
      )}

      <div className="bg-slate-900 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('Volver a tours', 'Back to tours', 'Retour aux tours')}</span>
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {tourTitle}
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mb-4">
                {tourDesc}
              </p>
              
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                <DollarSign className="w-6 h-6" />
                <span>{getTranslatedPrice(tour.price, t)}</span>
              </div>
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
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={tour.image}
                alt={tourTitle}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600">{t('Duración', 'Duration', 'Durée')}</p>
                <p className="font-bold text-gray-900">{tour.duration}</p>
              </div>
              
              {tour.difficulty && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600 mb-2" />
                  <p className="text-sm text-gray-600">{t('Dificultad', 'Difficulty', 'Difficulté')}</p>
                  <p className="font-bold text-gray-900">{translateDifficulty(tour.difficulty)}</p>
                </div>
              )}
              
              <div className="bg-green-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm text-gray-600">{t('Grupo máx.', 'Max group', 'Groupe max.')}</p>
                <p className="font-bold text-gray-900">{tour.maxGroupSize}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('Descripción', 'Description', 'Description')}
              </h2>
              <p className="text-gray-700 leading-relaxed">{tourFullDesc}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('Itinerario', 'Itinerary', 'Itinéraire')}
              </h2>
              <div className="space-y-6">
                {Object.entries(groupedItinerary).map(([day, content], dayIndex) => (
                  <div key={dayIndex} className={day === 'simple' ? '' : 'border-l-4 border-orange-500 pl-6'}>
                    {day !== 'simple' && (
                      <div className="inline-block px-4 py-2 bg-orange-500 text-white font-bold rounded-lg mb-4 shadow-md">
                        {day}
                      </div>
                    )}
                    
                    {content.main && (
                      <p className="text-gray-700 leading-relaxed mb-4 bg-gray-50 p-4 rounded-lg">
                        {content.main}
                      </p>
                    )}
                    
                    {content.options.length > 0 && (
                      <div className="space-y-3">
                        {content.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            {option.color ? (
                              <div className={`${option.color} border-2 rounded-lg p-4 shadow-sm`}>
                                <div className="inline-block px-3 py-1 bg-gray-800 text-white font-bold rounded-md mb-3 text-sm">
                                  {option.label}
                                </div>
                                <p className="text-gray-700 leading-relaxed">{option.text}</p>
                              </div>
                            ) : (
                              <div className="flex items-start space-x-2">
                                <span className="text-orange-500 font-bold mt-1">•</span>
                                <span className="text-gray-700 leading-relaxed">{option.text}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>{t('Incluye', 'Includes', 'Inclus')}</span>
                </h3>
                <ul className="space-y-2">
                  {tourIncludes.map((item, index) => (
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
                  <span>{t('No incluye', 'Not included', 'Non inclus')}</span>
                </h3>
                <ul className="space-y-2">
                  {tourExcludes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                <span>{t('Recomendaciones', 'Recommendations', 'Recommandations')}</span>
              </h3>
              <ul className="space-y-2">
                {tourRecommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
              {/* Card Prix - Existante */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-2xl text-white">
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">
                    {t('Precio por persona', 'Price per person', 'Prix par personne')}
                  </p>
                  <p className="text-4xl font-bold mb-1">
                    {getTranslatedPrice(tour.price, t)}
                  </p>
                  <p className="text-sm opacity-90">
                    {t('Reserva ahora', 'Book now', 'Réservez maintenant')}
                  </p>
                </div>
                
                <button
                  onClick={handleBooking}
                  className="w-full py-4 bg-white text-orange-600 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl mb-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('Reservar por WhatsApp', 'Book via WhatsApp', 'Réserver via WhatsApp')}
                </button>
                
                <p className="text-xs text-center opacity-90">
                  {t('Respuesta en minutos', 'Response in minutes', 'Réponse en quelques minutes')} ⚡
                </p>
              </div>

              {/* NOUVELLE CARD - Programme personnalisé */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 shadow-xl text-white">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    {t('¿Necesitas flexibilidad?', 'Need flexibility?', 'Besoin de flexibilité ?')}
                  </h3>
                  <p className="text-sm opacity-95 mb-4">
                    {t('Si este programa no se adapta a sus tiempos, con gusto organizamos su visita de acuerdo a sus requerimientos y necesidades', 
                      'If this program does not fit your schedule, we will gladly organize your visit according to your requirements and needs',
                      'Si ce programme ne correspond pas à vos horaires, nous organisons volontiers votre visite selon vos exigences et besoins')}
                  </p>
                </div>
                
                <button
                  onClick={handleCustomizeTour}
                  className="w-full py-3 bg-white text-orange-600 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('Personalizar tour por WhatsApp', 'Customize via WhatsApp', 'Personnaliser via WhatsApp')}
                </button>
              </div>

              {/* Card Medios de Pago - Existante */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  {t('Medios de Pago', 'Payment Methods', 'Moyens de Paiement')}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    {t('Efectivo (Dólares, Bolivianos)', 'Cash (Dollars, Bolivianos)', 'Espèces (Dollars, Bolivianos)')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Western Union
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>

        {similarTours.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('Tours Similares', 'Similar Tours', 'Tours Similaires')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {similarTours.map((similarTour) => {
                const simTitle = language === 'es' ? similarTour.titleEs : language === 'en' ? similarTour.titleEn : similarTour.titleFr;
                const simDesc = language === 'es' ? similarTour.descriptionEs : language === 'en' ? similarTour.descriptionEn : similarTour.descriptionFr;
                
                return (
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
                        alt={simTitle}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{simTitle}</h3>
                        <p className="text-gray-600 mb-4">{simDesc}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-sm text-gray-700">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span>{similarTour.duration}</span>
                            </div>
                            {similarTour.difficulty && (
                              <div className="flex items-center space-x-1">
                                <TrendingUp className="w-4 h-4 text-orange-500" />
                                <span>{translateDifficulty(similarTour.difficulty)}</span>
                              </div>
                            )}
                          </div>
                          <span className="font-bold text-orange-500">{similarTour.price}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

  );
};