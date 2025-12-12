// src/components/WhyChooseUs.tsx
import { Award, Users, Leaf, Heart, Globe, Shield, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export const WhyChooseUs = () => {
  const { t } = useLanguage();
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const features = [
    {
      icon: Briefcase,
      titleEs: 'Servicios',
      titleEn: 'Services',
      titleFr: 'Services',
      descEs: 'Realizamos tours en todo el territorio boliviano, principalmente en las ciudades de Sucre, Potosí y el sudoeste potosino (Uyuni, Tupiza, Villazón) así como Santa Cruz, La Paz y Tarija, ofreciendo programas privados y en compartido, clásicos y personalizados que se adecuan a las necesidades de nuestros clientes. Ofrecemos servicio de transporte turístico en todo el territorio nacional que se caracteriza por la puntualidad, seguridad y confianza con conductores bilingües, altamente capacitados para brindar un servicio de calidad. Dentro de nuestra oferta, contamos con la reserva y venta de pasajes aéreos y terrestres nacionales e internacionales.',
      descEn: 'We conduct tours throughout Bolivian territory, mainly in the cities of Sucre, Potosí and southwestern Potosí (Uyuni, Tupiza, Villazón) as well as Santa Cruz, La Paz and Tarija, offering private and shared programs, classic and personalized that adapt to the needs of our clients. We offer tourist transportation service throughout the national territory that is characterized by punctuality, security and trust with bilingual drivers, highly trained to provide quality service. Within our offer, we have the reservation and sale of national and international air and land tickets.',
      descFr: 'Nous organisons des tours sur tout le territoire bolivien, principalement dans les villes de Sucre, Potosí et le sud-ouest de Potosí (Uyuni, Tupiza, Villazón) ainsi que Santa Cruz, La Paz et Tarija, offrant des programmes privés et partagés, classiques et personnalisés qui s\'adaptent aux besoins de nos clients. Nous offrons un service de transport touristique sur tout le territoire national caractérisé par la ponctualité, la sécurité et la confiance avec des chauffeurs bilingues, hautement qualifiés pour fournir un service de qualité. Dans notre offre, nous proposons la réservation et la vente de billets aériens et terrestres nationaux et internationaux.',
      image: '/Logov2.jpeg'
    },
    {
      icon: Users,
      titleEs: 'Turismo Comunitario',
      titleEn: 'Community Tourism',
      titleFr: 'Tourisme Communautaire',
      descEs: 'Trabajamos directamente con gente de las comunidades rurales del sudoeste potosino, desarrollando actividades y apoyando a los emprendimientos propios con beneficios directos para las familias locales.',
      descEn: 'We work directly with people from rural communities in southwestern Potosí, developing activities and supporting their own ventures with direct benefits for local families.',
      descFr: 'Nous travaillons directement avec les habitants des communautés rurales du sud-ouest de Potosí, développant des activités et soutenant leurs propres entreprises avec des bénéfices directs pour les familles locales.',
      image: '/Local.jpg'
    },
    {
      icon: Heart,
      titleEs: 'Compromiso Social',
      titleEn: 'Social Commitment',
      titleFr: 'Engagement Social',
      descEs: 'Principal patrocinador de programas de ayuda al sector minero de Potosí. Cada tour contribuye directamente al desarrollo social y económico de los pobladores locales.',
      descEn: 'Main sponsor of support programs for the Potosí mining sector. Every tour contributes directly to the social and economic development of local residents.',
      descFr: 'Principal sponsor des programmes d\'aide au secteur minier de Potosí. Chaque tour contribue directement au développement social et économique des habitants locaux.',
      image: '/Social.jpg'
    },
    {
      icon: Leaf,
      titleEs: 'Turismo Sostenible',
      titleEn: 'Sustainable Tourism',
      titleFr: 'Tourisme Durable',
      descEs: 'Implementación de rutas de bajo impacto ambiental que protegen el ecosistema único del altiplano mientras amplían los beneficios económicos para las comunidades.',
      descEn: 'Implementation of low environmental impact routes that protect the unique highland ecosystem while expanding economic benefits for communities.',
      descFr: 'Mise en œuvre d\'itinéraires à faible impact environnemental qui protègent l\'écosystème unique de l\'altiplano tout en élargissant les avantages économiques pour les communautés.',
      image: '/lactiticaca.webp'
    },
    {
      icon: Award,
      titleEs: 'Reconocimiento Mundial',
      titleEn: 'World Recognition',
      titleFr: 'Reconnaissance Mondiale',
      descEs: 'Galardonados con el premio Internacional de Turismo "International Quality Crown" categoría Oro por el BID en 2008. Más de 25 años de experiencia liderando tours en el Salar de Uyuni. Recomendados en Lonely Planet, Le Guide du Routard y Footprint Bolivia Handbook. Colaboraciones con National Geographic, TF1 Francia y medios internacionales.',
      descEn: 'Awarded the International Tourism prize "International Quality Crown" Gold category by BID in 2008. Over 25 years of experience leading tours in the Uyuni Salt Flat. Recommended in Lonely Planet, Le Guide du Routard and Footprint Bolivia Handbook. Collaborations with National Geographic, TF1 France and international media.',
      descFr: 'Récompensés par le prix International de Tourisme "International Quality Crown" catégorie Or par la BID en 2008. Plus de 25 ans d\'expérience dans l\'organisation de tours au Salar d\'Uyuni. Recommandés dans Lonely Planet, Le Guide du Routard et Footprint Bolivia Handbook. Collaborations avec National Geographic, TF1 France et médias internationaux.',
      image: '/Award.png'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      t(
        'Hola, estoy interesado en sus tours',
        'Hello, I am interested in your tours',
        'Bonjour, je suis intéressé par vos tours'
      )
    );
    window.open(`https://wa.me/59174203049?text=${message}`, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            {t('Nuestra Historia', 'Our Story', 'Notre Histoire')}
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div>
          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/Guide.jpeg" 
                alt={t('Guía experto local', 'Expert local guide', 'Guide expert local')}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-orange-500 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                25+ {t('años', 'years', 'ans')}
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium">
            {t(
              'Sin Fronteras Tours, nace con la finalidad de profesionalizar los servicios turísticos en el sudoeste boliviano en particular y Bolivia en general.',
              'Sin Fronteras Tours was born with the purpose of professionalizing tourism services in southwestern Bolivia in particular and Bolivia in general.',
              'Sin Fronteras Tours est né dans le but de professionnaliser les services touristiques dans le sud-ouest bolivien en particulier et en Bolivie en général.'
            )}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {t(
              'Opera desde 1997 en los destinos Sucre, Potosí, Uyuni (SPU) principalmente, así como Tupiza, La Paz y la región de las Misiones Jesuíticas en Santa Cruz. Actualmente cuenta con un grupo humano profesional, multidisciplinario, comprometido con su trabajo y cada una de sus tareas encomendadas en cada uno de los destinos.',
              'It has been operating since 1997 in the destinations Sucre, Potosí, Uyuni (SPU) mainly, as well as Tupiza, La Paz and the Jesuit Missions region in Santa Cruz. It currently has a professional, multidisciplinary human group, committed to their work and each of their assigned tasks in each of the destinations.',
              'Elle opère depuis 1997 dans les destinations Sucre, Potosí, Uyuni (SPU) principalement, ainsi que Tupiza, La Paz et la région des Missions Jésuites à Santa Cruz. Elle dispose actuellement d\'un groupe humain professionnel et multidisciplinaire, engagé dans son travail et chacune de ses tâches assignées dans chacune des destinations.'
            )}
          </p>

          <div className="flex gap-2 flex-wrap justify-center">
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
              🇪🇸 Español
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
              🇬🇧 English
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
              🇫🇷 Français
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
              🏔️ Quechua
            </span>
          </div>
        </div>

        <div className="space-y-24 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleSections.has(index);
            
            return (
              <div
                key={index}
                ref={el => sectionRefs.current[index] = el}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div 
                  className={`w-full lg:w-1/2 transform transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img
                      src={feature.image}
                      alt={t(feature.titleEs, feature.titleEn, feature.titleFr)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                </div>

                <div 
                  className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-200 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                    <h3 className="text-3xl font-bold mb-4 text-slate-900">
                      {t(feature.titleEs, feature.titleEn, feature.titleFr)}
                    </h3>
                    <div className="h-1 w-16 bg-orange-500 mb-6"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t(feature.descEs, feature.descEn, feature.descFr)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                {t('Nuestra Misión', 'Our Mission', 'Notre Mission')}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t(
                'Ofrecer un servicio integral de alta calidad con atención personalizada bajo la modalidad de turismo organizado y viajes a medida.',
                'Offer a comprehensive high-quality service with personalized attention under the modality of organized tourism and tailor-made trips.',
                'Offrir un service complet de haute qualité avec une attention personnalisée sous la modalité de tourisme organisé et de voyages sur mesure.'
              )}
            </p>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                {t('Nuestra Visión', 'Our Vision', 'Notre Vision')}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t(
                'Consolidar una estrategia de desarrollo de un turismo sostenible en la región del sudoeste de Potosí con nuevas rutas que amplíen los beneficios económicos.',
                'Consolidate a strategy for the development of sustainable tourism in the southwestern region of Potosí with new routes that expand economic benefits.',
                'Consolider une stratégie de développement d\'un tourisme durable dans la région du sud-ouest de Potosí avec de nouvelles routes qui élargissent les avantages économiques.'
              )}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-center shadow-2xl mb-16">
          <p className="text-2xl sm:text-3xl font-light text-white mb-4 italic">
            {t(
              '"Cada tour que reservas contribuye directamente al desarrollo de comunidades locales"',
              '"Every tour you book contributes directly to the development of local communities"',
              '"Chaque tour que vous réservez contribue directement au développement des communautés locales"'
            )}
          </p>
          <div className="h-1 w-24 bg-white/50 mx-auto mb-4"></div>
          <p className="text-white font-semibold text-xl">
            {t('Viaja con propósito, viaja con impacto', 'Travel with purpose, travel with impact', 'Voyagez avec un but, voyagez avec impact')}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t(
                  '¿Listo para una aventura con propósito?',
                  'Ready for an adventure with purpose?',
                  'Prêt pour une aventure avec un but?'
                )}
              </h3>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                {t(
                  'Descubre el Salar de Uyuni mientras apoyas a las comunidades locales. Cada tour financia programas sociales y turismo comunitario sostenible.',
                  'Discover the Uyuni Salt Flat while supporting local communities. Each tour finances social programs and sustainable community tourism.',
                  'Découvrez le Salar d\'Uyuni tout en soutenant les communautés locales. Chaque tour finance des programmes sociaux et un tourisme communautaire durable.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {t('Consultar Tours', 'Inquire About Tours', 'Demander des Renseignements')}
                  </span>
                </button>

                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">
                    {t('Respuesta en minutos', 'Response in minutes', 'Réponse en quelques minutes')}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-orange-500 mb-1">25+</p>
                    <p className="text-sm text-gray-400">{t('Años', 'Years', 'Ans')}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500 mb-1">10K+</p>
                    <p className="text-sm text-gray-400">{t('Viajeros', 'Travelers', 'Voyageurs')}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500 mb-1">100%</p>
                    <p className="text-sm text-gray-400">{t('Sostenible', 'Sustainable', 'Durable')}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500 mb-1">5★</p>
                    <p className="text-sm text-gray-400">{t('Calificación', 'Rating', 'Notation')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};