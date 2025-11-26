// src/components/Navbar.tsx
import { useState } from 'react';
import { Compass, Globe, Phone, Mail, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Informations de contact (identiques à TourDetail)
  const contactInfo = {
    phone: '+54 9 2901 123456',
    whatsapp: '+5492901123456',
    email: 'info@australexpeditions.com'
  };

  // Handlers pour les boutons (Adaptés pour être génériques)
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      t('Hola, me gustaría recibir información para reservar una excursión.', 'Hello, I would like to receive information to book a tour.')
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(
      t('Consulta general de reserva', 'General booking inquiry')
    );
    const body = encodeURIComponent(
      t('Hola, me gustaría recibir más información sobre sus excursiones.', 'Hello, I would like to receive more information about your tours.')
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              <span className="text-lg sm:text-xl font-bold tracking-wide">Austral Expeditions</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">
                {t('Inicio', 'Home')}
              </button>
              <button onClick={() => scrollToSection('tours')} className="hover:text-orange-500 transition-colors">
                Tours
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">
                {t('Nosotros', 'About')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">
                {t('Contacto', 'Contact')}
              </button>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium text-sm">{language.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 sm:px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                {t('Reservar', 'Book Now')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal de réservation (Ajouté en dehors de la structure nav mais dans le fragment) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-fadeIn shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('Planifica tu Aventura', 'Plan your Adventure')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('Contáctanos para reservar tu próxima experiencia.', 'Contact us to book your next experience.')}
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
    </>
  );
};