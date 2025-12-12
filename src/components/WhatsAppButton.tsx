// src/components/WhatsAppButton.tsx
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppButtonProps {
  tourName?: string;
}

export const WhatsAppButton = ({ tourName }: WhatsAppButtonProps) => {
  const { t } = useLanguage();
  const whatsappNumber = '59174203049';

  const handleWhatsAppClick = () => {
    let message = '';
    
    if (tourName) {
      message = `Hola, estoy interesado en el tour: ${tourName}`;
    } else {
      message = t(
        'Hola, estoy interesado en sus tours',
        'Hello, I am interested in your tours',
        'Bonjour, je suis intéressé par vos tours'
      );
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-slow group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      
      <div className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t('¡Escríbenos!', 'Message us!', 'Écrivez-nous !')}
      </div>
    </button>
  );
};