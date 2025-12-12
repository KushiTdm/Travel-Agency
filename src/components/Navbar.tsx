// src/components/Navbar.tsx
import { useState } from 'react';
import { Globe, Phone, Mail, MessageCircle, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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

  const contactInfo = {
    phone: '+591 74203049',
    whatsapp: '59174203049',
    email: 'info@sinfronteras-potosi.com'
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      t('Hola, estoy interesado en sus tours',
        'Hello, I am interested in your tours',
        'Bonjour, je suis intéressé par vos tours')
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl sm:text-3xl font-bold brand-font text-orange-500">
              SIN FRONTERAS TOURS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-orange-500 transition-colors">
              {t('Inicio', 'Home', 'Accueil')}
            </button>
            <button onClick={() => scrollToSection('tours')} className="hover:text-orange-500 transition-colors">
              Tours
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">
              {t('Nosotros', 'About', 'À Propos')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">
              {t('Contacto', 'Contact', 'Contact')}
            </button>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Selector avec dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-lg">{currentLang?.flag}</span>
                <span className="font-medium text-sm hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-slate-800 rounded-lg shadow-xl py-2 min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'es' | 'en' | 'fr');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-700 transition-colors flex items-center space-x-2 ${
                        language === lang.code ? 'bg-slate-700 text-orange-500' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleWhatsApp}
              className="px-4 sm:px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              {t('Reservar', 'Book Now', 'Réserver')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};