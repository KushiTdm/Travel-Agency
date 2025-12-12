// src/components/Footer.tsx
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleTourClick = (tourId: string) => {
    navigate(`/tour/${tourId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = (phone: string, message: string) => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = (email: string) => {
    const subject = encodeURIComponent(
      t('Consulta sobre tours - Sin Fronteras Tours', 'Tour inquiry - Sin Fronteras Tours', 'Demande de renseignements - Sin Fronteras Tours')
    );
    const body = encodeURIComponent(
      t(
        'Hola,\n\nMe gustaría recibir más información sobre sus tours y disponibilidad.\n\nGracias,',
        'Hello,\n\nI would like to receive more information about your tours and availability.\n\nThank you,',
        'Bonjour,\n\nJe souhaiterais recevoir plus d\'informations sur vos tours et disponibilités.\n\nMerci,'
      )
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleMapClick = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Logov1.jpeg" 
                alt="Sin Fronteras Tours Logo" 
                className="w-12 h-12 object-contain rounded-lg"
              />
              <span className="text-2xl font-bold brand-font text-orange-500">SIN FRONTERAS TOURS</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {t('Más de 25 años conectando viajeros con las maravillas del altiplano boliviano', 'Over 25 years connecting travelers with the wonders of the Bolivian highlands', 'Plus de 25 ans à connecter les voyageurs avec les merveilles de l\'altiplano bolivien')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/uyunisinfronteras" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sin_fronteras_tours/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@sinfronterastours" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors overflow-hidden" 
                aria-label="TikTok"
              >
                <img 
                  src="/Tiktok_icon.svg.png" 
                  alt="TikTok" 
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('Enlaces Rápidos', 'Quick Links', 'Liens Rapides')}</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-orange-500 transition-colors">{t('Inicio', 'Home', 'Accueil')}</button></li>
              <li><button onClick={() => scrollToSection('tours')} className="hover:text-orange-500 transition-colors">{t('Nuestros Tours', 'Our Tours', 'Nos Tours')}</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">{t('Nosotros', 'About Us', 'À Propos')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">{t('Contacto', 'Contact', 'Contact')}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('Servicios más solicitados', 'Most Requested Services', 'Services les Plus Demandés')}</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleTourClick('uyuni-lagunas-semiprivado-3-dias')} className="hover:text-orange-500 transition-colors text-left">{t('Tour semiprivado 3 días', 'Semi-private tour 3 days', 'Tour semi-privé 3 jours')}</button></li>
              <li><button onClick={() => handleTourClick('uyuni-clasico-3-dias')} className="hover:text-orange-500 transition-colors text-left">{t('Tour clásico compartido 3 días', 'Classic shared tour 3 days', 'Tour classique partagé 3 jours')}</button></li>
              <li><button onClick={() => handleTourClick('mina-cooperativa-potosi')} className="hover:text-orange-500 transition-colors text-left">{t('Minas cooperativas Potosí', 'Potosí cooperative mines', 'Mines coopératives de Potosí')}</button></li>
              <li><button onClick={() => handleTourClick('transporte-turistico-privado')} className="hover:text-orange-500 transition-colors text-left">{t('Transporte turístico bilingüe 🇫🇷 🇬🇧', 'Bilingual Tourist Transportation 🇫🇷 🇬🇧', 'Transport touristique bilingue 🇫🇷 🇬🇧')}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('Contacto', 'Contact', 'Contact')}</h3>
            
            {/* Section Transporte, Minas y pasajes */}
            <div className="mb-6 pb-6 border-b border-slate-700">
              <p className="font-semibold text-orange-400 mb-3 text-xs uppercase">
                {t('Transporte, Minas y pasajes', 'Transport, Mines and tickets', 'Transport, Mines et billets')}
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <button 
                    onClick={() => handleMapClick('Calle Ayacucho 17, Ciudad Potosí, Bolivia')} 
                    className="hover:text-orange-500 transition-colors text-left text-xs"
                  >
                    Calle Ayacucho # 17 frente a la Casa de la Moneda<br/>
                    Ciudad Potosí, Bolivia
                  </button>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <button 
                    onClick={() => handleWhatsApp('59171820778', t('Hola, estoy interesado en sus tours', 'Hello, I am interested in your tours', 'Bonjour, je suis intéressé par vos tours'))} 
                    className="hover:text-orange-500 transition-colors text-xs"
                  >
                    +591 71820778 (Juan Carlos)
                  </button>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <button 
                    onClick={() => handleEmail('sinfronterastoursuyuni@gmail.com')} 
                    className="hover:text-orange-500 transition-colors text-left break-all text-xs"
                  >
                    sinfronterastoursuyuni@gmail.com
                  </button>
                </li>
              </ul>
            </div>

            {/* Section Paquetes turísticos */}
            <div className="mb-6 pb-6 border-b border-slate-700">
              <p className="font-semibold text-orange-400 mb-3 text-xs uppercase">
                {t('Paquetes turísticos', 'Tourist packages', 'Forfaits touristiques')}
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <button 
                    onClick={() => handleMapClick('Av. Potosí 636, Ciudad de Uyuni, Potosí, Bolivia')} 
                    className="hover:text-orange-500 transition-colors text-left text-xs"
                  >
                    Av. Potosí # 636 entre Santa Cruz y Colombia<br/>
                    Ciudad de Uyuni, Potosí, Bolivia
                  </button>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <button 
                    onClick={() => handleWhatsApp('59174203049', t('Hola, estoy interesado en sus tours', 'Hello, I am interested in your tours', 'Bonjour, je suis intéressé par vos tours'))} 
                    className="hover:text-orange-500 transition-colors text-xs"
                  >
                    +591 74203049 (Georgina)
                  </button>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <button 
                    onClick={() => handleEmail('uyuni.sinfronteras@gmail.com')} 
                    className="hover:text-orange-500 transition-colors text-left break-all text-xs"
                  >
                    uyuni.sinfronteras@gmail.com
                  </button>
                </li>
              </ul>
            </div>

            {/* Section Moyens de paiement */}
            <div>
              <p className="font-semibold text-orange-400 mb-3 text-xs uppercase">
                {t('Medios de Pago', 'Payment Methods', 'Moyens de Paiement')}
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  {t('Efectivo (USD, BOB)', 'Cash (USD, BOB)', 'Espèces (USD, BOB)')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Western Union
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm">
          <p>© {currentYear} Sin Fronteras Tours. {t('Todos los derechos reservados', 'All rights reserved', 'Tous droits réservés')}.</p>
          <p className="mt-2 text-gray-400">{t('Ganadores Premio BID - Turismo Sostenible', 'BID Award Winners - Sustainable Tourism', 'Lauréats du Prix BID - Tourisme Durable')}</p>
        </div>
      </div>
    </footer>
  );
};