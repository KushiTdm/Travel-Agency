import { Compass, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Austral Expeditions</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {t(
                'Tu puerta de entrada a las aventuras más australes del planeta',
                'Your gateway to the southernmost adventures on the planet'
              )}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t('Enlaces Rápidos', 'Quick Links')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">
                  {t('Inicio', 'Home')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tours')} className="hover:text-orange-500 transition-colors">
                  {t('Nuestros Tours', 'Our Tours')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">
                  {t('Nosotros', 'About Us')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">
                  {t('Contacto', 'Contact')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t('Tours Populares', 'Popular Tours')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                {t('Canal Beagle', 'Beagle Channel')}
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                {t('Parque Nacional', 'National Park')}
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                {t('Laguna Esmeralda', 'Laguna Esmeralda')}
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                {t('Pingüinera', 'Penguin Colony')}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t('Contacto', 'Contact')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Av. San Martín 123, Ushuaia, Tierra del Fuego</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+54 2901 123-456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>info@australexpeditions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm">
          <p>© 2024 Austral Expeditions. {t('Todos los derechos reservados', 'All rights reserved')}.</p>
        </div>
      </div>
    </footer>
  );
};
