import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Newsletter = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {t('Prepara tu Viaje', 'Plan Your Trip')}
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
          {t(
            'Recibe nuestra guía gratuita con consejos para tu aventura en Ushuaia',
            'Receive our free guide with tips for your adventure in Ushuaia'
          )}
        </p>

        {submitted ? (
          <div className="flex items-center justify-center space-x-2 text-green-400 text-lg sm:text-xl">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>{t('¡Gracias! Revisa tu correo', 'Thank you! Check your email')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('Tu correo electrónico', 'Your email address')}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-slate-900 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-orange-500/50"
              required
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition-colors flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <span>{t('Recibir Guía', 'Get Guide')}</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-gray-400">
          {t('No spam. Solo contenido de valor.', 'No spam. Only valuable content.')}
        </p>
      </div>
    </section>
  );
};
