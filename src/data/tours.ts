// src/data/tours.ts

export interface Tour {
  id: string;
  image: string;
  titleEs: string;
  titleEn: string;
  titleFr: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionFr: string;
  fullDescriptionEs: string;
  fullDescriptionEn: string;
  fullDescriptionFr: string;
  duration: string;
  difficulty?: string;
  price: string;
  
  itineraryEs: string[];
  itineraryEn: string[];
  itineraryFr: string[];
  includesEs: string[];
  includesEn: string[];
  includesFr: string[];
  excludesEs: string[];
  excludesEn: string[];
  excludesFr: string[];
  
  departureEs: string;
  departureEn: string;
  departureFr: string;
  scheduleEs: string;
  scheduleEn: string;
  scheduleFr: string;
  
  cancellationEs: string;
  cancellationEn: string;
  cancellationFr: string;
  
  maxGroupSize: number;
  minAge?: number;
  
  recommendationsEs: string[];
  recommendationsEn: string[];
  recommendationsFr: string[];
}

export const tours: Tour[] = [
  {
    id: 'uyuni-lagunas-semiprivado-3-dias',
    image: '/uyuniLagunaSemiPrivado.webp',
    titleEs: 'Uyuni Lagunas Semiprivado – 3 días',
    titleEn: 'Uyuni Lagoons Semi-Private – 3 days',
    titleFr: 'Uyuni Lagunes Semi-Privé – 3 jours',
    descriptionEs: 'Desiertos blancos y lagunas de colores al sur de Bolivia',
    descriptionEn: 'White deserts and colorful lagoons in southern Bolivia',
    descriptionFr: 'Déserts blancs et lagunes colorées au sud de la Bolivie',
    fullDescriptionEs: 'Nuestro recorrido comienza con la visita al cementerio de trenes donde aprenderemos la importancia de estas locomotoras en la historia de Uyuni y Bolivia. En este fantástico recorrido atravesaremos el majestuoso Salar de Uyuni para visitar la Isla Incahuasi donde podremos apreciar los cactus gigantes y disfrutar de un almuerzo campestre para luego trasladarnos a la orilla norte del Salar y apreciar ruinas con cuerpos momificados en Coquesa para luego disfrutar de un magnífico atardecer en el salar más grande del mundo. En nuestra ruta hacia la Reserva Eduardo Avaroa, atravesaremos pequeñas comunidades apreciando paisajes con lagunas altiplánicas y desiertos de colores, veremos la Laguna Colorada, sitio RAMSAR y principal centro de nidificación de 3 especies de flamencos (James, chileno y andino). Apreciaremos las fumarolas en los géiseres de Sol de mañana y haremos una parada en las termas de Polques para luego alcanzar la frontera con el vecino país de Chile apreciando la fantástica Laguna Verde a los pies del volcán Llicancahur. Es un recorrido de más de 400km pernoctando en los mejores hoteles de la región en confortables habitaciones dobles con agua caliente y calefacción (Luna Salada y Tayka del Desierto), además de transporte en 4x4 con conductores dueños de sus vehículos que garantizan la seguridad y tranquilidad del pasajero durante el viaje.',
    fullDescriptionEn: 'Our tour begins with a visit to the train cemetery where we will learn about the importance of these locomotives in the history of Uyuni and Bolivia. On this fantastic tour we will cross the majestic Uyuni Salt Flat to visit Incahuasi Island where we can appreciate the giant cacti and enjoy a picnic lunch, then move to the northern shore of the Salt Flat and appreciate ruins with mummified bodies in Coquesa to then enjoy a magnificent sunset in the largest salt flat in the world. On our route to the Eduardo Avaroa Reserve, we will cross small communities appreciating landscapes with high-altitude lagoons and colored deserts, we will see the Laguna Colorada, a RAMSAR site and main nesting center for 3 species of flamingos (James, Chilean and Andean). We will appreciate the fumaroles in the Sol de Mañana geysers and make a stop at the Polques hot springs to then reach the border with neighboring Chile, appreciating the fantastic Laguna Verde at the foot of the Llicancahur volcano. It is a tour of more than 400km staying overnight in the best hotels in the region in comfortable double rooms with hot water and heating (Luna Salada and Tayka del Desierto), as well as 4x4 transportation with drivers who own their vehicles that guarantee the safety and tranquility of the passenger during the trip.',
    fullDescriptionFr: 'Notre circuit commence par une visite au cimetière de trains où nous apprendrons l\'importance de ces locomotives dans l\'histoire d\'Uyuni et de la Bolivie. Dans ce fantastique parcours, nous traverserons le majestueux Salar d\'Uyuni pour visiter l\'île Incahuasi où nous pourrons apprécier les cactus géants et profiter d\'un déjeuner champêtre, puis nous déplacer vers la rive nord du Salar et apprécier des ruines avec des corps momifiés à Coquesa pour ensuite profiter d\'un magnifique coucher de soleil dans le plus grand désert de sel au monde. Sur notre route vers la Réserve Eduardo Avaroa, nous traverserons de petites communautés en appréciant des paysages avec des lagunes d\'altitude et des déserts colorés, nous verrons la Laguna Colorada, site RAMSAR et principal centre de nidification de 3 espèces de flamants roses (James, chilien et andin). Nous apprécierons les fumerolles dans les geysers Sol de Mañana et ferons un arrêt aux thermes de Polques pour ensuite atteindre la frontière avec le Chili voisin, en appréciant la fantastique Laguna Verde au pied du volcan Llicancahur. C\'est un circuit de plus de 400 km passant la nuit dans les meilleurs hôtels de la région dans des chambres doubles confortables avec eau chaude et chauffage (Luna Salada et Tayka del Desierto), ainsi que le transport en 4x4 avec des chauffeurs propriétaires de leurs véhicules qui garantissent la sécurité et la tranquillité du passager pendant le voyage.',
    duration: '3 Días / 2 Noches',
    difficulty: 'Media',
    price: 'USD 730',
    
    itineraryEs: [
      'DÍA 1 - Comienza: 09:30 am en Uyuni. OPCIÓN 1 (temporada de lluvias): Uyuni - Cementerio de trenes - Colchani – Museo Playa Blanca – Plaza de las Banderas – esculturas de sal y fotografías en el salar con agua. Almuerzo en blanco del Salar – atardecer – Hotel Colchani. Comidas: A y C. Hotel: Luna Salada',
      'DÍA 1 - OPCIÓN 2: Uyuni - Cementerio de trenes - Colchani – Museo Playa Blanca – Plaza de las Banderas - esculturas de sal - Desierto de sal – Isla Incahuasi. Almuerzo en blanco del Salar – orilla norte – Coquesa – Chantani - atardecer – Hotel Colchani',
      'DÍA 1 - OPCIÓN 3: Uyuni - Cementerio de trenes - Colchani – Museo Playa Blanca – Plaza de las Banderas – Cueva Chiquini – Tahua – Chantani – Coquesa - Atardecer – Hotel Colchani',
      'DÍA 2 - Comienza: 09:00. Colchani - San Cristobal - Salar de Chiguana - Mirador del Volcán Ollagüe - Lagunas altiplánicas (Cañapa, Hedionda, Chiarkota, Honda y Ramaditas) – Ojito de Perdiz. Comidas: D, A y C. Hotel: Tayka del Desierto',
      'DÍA 3 - Comienza: 07:30. Ojito de Perdiz - Desierto del Siloli – Árbol de Piedra – Laguna Colorada – Geiseres Sol de Mañana - Aguas termales - Desierto de Dalí - Laguna Verde – Villamar - Valle de Rocas – Culpina – Uyuni. Comidas: D y A. Fin del programa en Uyuni'
    ],
    itineraryEn: [
      'DAY 1 - Starts: 09:30 am in Uyuni. OPTION 1 (rainy season): Uyuni - Train cemetery - Colchani – Playa Blanca Museum – Plaza de las Banderas – salt sculptures and photographs in the salt flat with water. White lunch in the Salt Flat – sunset – Colchani Hotel. Meals: L and D. Hotel: Luna Salada',
      'DAY 1 - OPTION 2: Uyuni - Train cemetery - Colchani – Playa Blanca Museum – Plaza de las Banderas - salt sculptures - Salt desert – Incahuasi Island. White lunch in the Salt Flat – north shore – Coquesa – Chantani - sunset – Colchani Hotel',
      'DAY 1 - OPTION 3: Uyuni - Train cemetery - Colchani – Playa Blanca Museum – Plaza de las Banderas – Chiquini Cave – Tahua – Chantani – Coquesa - Sunset – Colchani Hotel',
      'DAY 2 - Starts: 09:00. Colchani - San Cristobal - Chiguana Salt Flat - Ollagüe Volcano Viewpoint - High-altitude lagoons (Cañapa, Hedionda, Chiarkota, Honda and Ramaditas) – Ojito de Perdiz. Meals: B, L and D. Hotel: Tayka del Desierto',
      'DAY 3 - Starts: 07:30. Ojito de Perdiz - Siloli Desert – Stone Tree – Colorada Lagoon – Sol de Mañana Geysers - Hot springs - Dalí Desert - Green Lagoon – Villamar - Valley of Rocks – Culpina – Uyuni. Meals: B and L. End of program in Uyuni'
    ],
    itineraryFr: [
      'JOUR 1 - Début: 09h30 à Uyuni. OPTION 1 (saison des pluies): Uyuni - Cimetière de trains - Colchani – Musée Playa Blanca – Plaza de las Banderas – sculptures de sel et photographies dans le salar avec eau. Déjeuner blanc dans le Salar – coucher de soleil – Hôtel Colchani. Repas: D et D. Hôtel: Luna Salada',
      'JOUR 1 - OPTION 2: Uyuni - Cimetière de trains - Colchani – Musée Playa Blanca – Plaza de las Banderas - sculptures de sel - Désert de sel – Île Incahuasi. Déjeuner blanc dans le Salar – rive nord – Coquesa – Chantani - coucher de soleil – Hôtel Colchani',
      'JOUR 1 - OPTION 3: Uyuni - Cimetière de trains - Colchani – Musée Playa Blanca – Plaza de las Banderas – Grotte Chiquini – Tahua – Chantani – Coquesa - Coucher de soleil – Hôtel Colchani',
      'JOUR 2 - Début: 09h00. Colchani - San Cristobal - Salar de Chiguana - Mirador du Volcan Ollagüe - Lagunes d\'altitude (Cañapa, Hedionda, Chiarkota, Honda et Ramaditas) – Ojito de Perdiz. Repas: P, D et D. Hôtel: Tayka del Desierto',
      'JOUR 3 - Début: 07h30. Ojito de Perdiz - Désert de Siloli – Arbre de Pierre – Laguna Colorada – Geysers Sol de Mañana - Sources thermales - Désert de Dalí - Laguna Verde – Villamar - Vallée des Roches – Culpina – Uyuni. Repas: P et D. Fin du programme à Uyuni'
    ],
    
    includesEs: [
      'Conductor en español altamente especializado para viajes en la región',
      'Transporte privado en vehículo 4x4 máximo 4 pasajeros (si solicita guía en idioma, éste será el 5to pasajero)',
      'Vehículo equipado con botiquín de primeros auxilios y tanque de oxígeno',
      'Hospedaje en habitaciones con baño privado, calefacción y agua caliente',
      'Alimentación consignada: (D= Desayuno; A= Almuerzo; C= Cena) agua, snacks, picaditos y vino para el atardecer'
    ],
    includesEn: [
      'Highly specialized Spanish-speaking driver for trips in the region',
      'Private transportation in 4x4 vehicle maximum 4 passengers (if you request a language guide, this will be the 5th passenger)',
      'Vehicle equipped with first aid kit and oxygen tank',
      'Accommodation in rooms with private bathroom, heating and hot water',
      'Designated meals: (B= Breakfast; L= Lunch; D= Dinner) water, snacks, appetizers and wine for sunset'
    ],
    includesFr: [
      'Chauffeur hispanophone hautement spécialisé pour les voyages dans la région',
      'Transport privé en véhicule 4x4 maximum 4 passagers (si vous demandez un guide linguistique, ce sera le 5ème passager)',
      'Véhicule équipé d\'une trousse de premiers soins et d\'une bouteille d\'oxygène',
      'Hébergement en chambres avec salle de bain privée, chauffage et eau chaude',
      'Repas désignés: (P= Petit-déjeuner; D= Déjeuner; D= Dîner) eau, snacks, amuse-gueules et vin pour le coucher du soleil'
    ],
    
    excludesEs: [
      'Guía',
      'Alimentación no consignada en itinerario',
      'Entrada a sitios visitados (Isla Incahuasi, museos, miradores, Reserva Eduardo Avaroa, balnearios, baños, etc) (adicional $us. 50 p/pax)',
      'Seguro de viaje, propinas u otros gastos de tipo personal'
    ],
    excludesEn: [
      'Guide',
      'Meals not specified in itinerary',
      'Entrance to visited sites (Incahuasi Island, museums, viewpoints, Eduardo Avaroa Reserve, spas, baths, etc) (additional $us. 50 per person)',
      'Travel insurance, tips or other personal expenses'
    ],
    excludesFr: [
      'Guide',
      'Repas non spécifiés dans l\'itinéraire',
      'Entrée aux sites visités (Île Incahuasi, musées, miradors, Réserve Eduardo Avaroa, spas, bains, etc) (supplément $us. 50 par personne)',
      'Assurance voyage, pourboires ou autres dépenses personnelles'
    ],
    
    departureEs: 'Oficina Sin Fronteras Tours - Uyuni',
    departureEn: 'Sin Fronteras Tours Office - Uyuni',
    departureFr: 'Bureau Sin Fronteras Tours - Uyuni',
    scheduleEs: 'Día 1: Salida 09:30 AM',
    scheduleEn: 'Day 1: Departure 09:30 AM',
    scheduleFr: 'Jour 1: Départ 09h30',
    
    cancellationEs: 'Precio por persona USD 730 (mínimo 2 pax). Si este programa no se adapta a sus tiempos, con gusto organizamos su visita de acuerdo a sus requerimientos y necesidades. ¡Contáctenos!',
    cancellationEn: 'Price per person USD 730 (minimum 2 pax). If this program does not fit your schedule, we will gladly organize your visit according to your requirements and needs. Contact us!',
    cancellationFr: 'Prix par personne USD 730 (minimum 2 pax). Si ce programme ne correspond pas à votre emploi du temps, nous organiserons volontiers votre visite selon vos besoins et exigences. Contactez-nous!',
    
    maxGroupSize: 4,
    minAge: 0,
    
    recommendationsEs: [
      'La Reserva Eduardo Avaroa y el salar de Uyuni tienen un clima muy frío, ventoso y con alta radiación solar',
      'Suéter para el frío',
      'Chamarra',
      'Guantes',
      'Calcetines y gorro de lana',
      'Gorra o sombrero que cubra muy bien del sol',
      'Zapatos cerrados',
      'Humectante para labios',
      'Protector solar de F50',
      'Gafas para el sol muy oscuras con filtro UV',
      'Toalla y traje de baño (si desea bañarse en las aguas termales)',
      'Entre diciembre y abril se recomienda llevar un impermeable para la lluvia'
    ],
    recommendationsEn: [
      'The Eduardo Avaroa Reserve and the Uyuni salt flat have a very cold, windy climate with high solar radiation',
      'Sweater for the cold',
      'Jacket',
      'Gloves',
      'Wool socks and hat',
      'Cap or hat that covers very well from the sun',
      'Closed shoes',
      'Lip moisturizer',
      'SPF 50 sunscreen',
      'Very dark sunglasses with UV filter',
      'Towel and swimsuit (if you want to bathe in the hot springs)',
      'Between December and April it is recommended to bring a raincoat'
    ],
    recommendationsFr: [
      'La Réserve Eduardo Avaroa et le salar d\'Uyuni ont un climat très froid, venteux et avec une forte radiation solaire',
      'Pull pour le froid',
      'Veste',
      'Gants',
      'Chaussettes et bonnet en laine',
      'Casquette ou chapeau qui couvre très bien du soleil',
      'Chaussures fermées',
      'Hydratant pour les lèvres',
      'Crème solaire SPF 50',
      'Lunettes de soleil très foncées avec filtre UV',
      'Serviette et maillot de bain (si vous voulez vous baigner dans les sources thermales)',
      'Entre décembre et avril, il est recommandé d\'apporter un imperméable'
    ]
  },
  {
    id: 'mina-cooperativa-potosi',
    image: '/Miners.jpeg',
    titleEs: 'Tour a la Mina Cooperativa de Potosí',
    titleEn: 'Cooperative Mine Tour in Potosí',
    titleFr: 'Visite de la Mine Coopérative de Potosí',
    descriptionEs: 'Visita una mina cooperativa a más de 4200 msnm en el Cerro Rico',
    descriptionEn: 'Visit a cooperative mine at over 4200 masl in Cerro Rico',
    descriptionFr: 'Visitez une mine coopérative à plus de 4200 m d\'altitude dans le Cerro Rico',
    fullDescriptionEs: 'Experimente la vida de los mineros que trabajan en el legendario Cerro Rico de Potosí, extrayendo minerales de plata desde hace más de 470 años. Esta visita única le llevará al interior de una mina cooperativa situada a más de 4200 metros sobre el nivel del mar, donde compartirá con los mineros su dura labor diaria. Visitará el "mercado minero" donde podrá comprar coca, dinamita y otros elementos tradicionales. Equipado con casco, lámpara y ropa de protección, se adentrará por estrechas galerías hasta el corazón de la montaña, donde conocerá al "Tío" (el diablo de la mina) y las fascinantes costumbres y leyendas mineras. Una experiencia auténtica que muestra la realidad de uno de los trabajos más duros del mundo.',
    fullDescriptionEn: 'Experience the life of miners working in the legendary Cerro Rico of Potosí, extracting silver minerals for over 470 years. This unique visit will take you inside a cooperative mine located at over 4200 meters above sea level, where you will share with miners their hard daily work. You will visit the "miners market" where you can buy coca, dynamite and other traditional items. Equipped with helmet, lamp and protective clothing, you will enter through narrow galleries to the heart of the mountain, where you will meet the "Tío" (the devil of the mine) and learn about fascinating mining customs and legends. An authentic experience showing the reality of one of the hardest jobs in the world.',
    fullDescriptionFr: 'Vivez l\'expérience de la vie des mineurs qui travaillent dans le légendaire Cerro Rico de Potosí, extrayant des minéraux d\'argent depuis plus de 470 ans. Cette visite unique vous emmènera à l\'intérieur d\'une mine coopérative située à plus de 4200 mètres d\'altitude, où vous partagerez avec les mineurs leur dur labeur quotidien. Vous visiterez le "marché des mineurs" où vous pourrez acheter de la coca, de la dynamite et d\'autres articles traditionnels. Équipé d\'un casque, d\'une lampe et de vêtements de protection, vous entrerez par d\'étroites galeries jusqu\'au cœur de la montagne, où vous rencontrerez le "Tío" (le diable de la mine) et découvrirez les coutumes et légendes minières fascinantes. Une expérience authentique montrant la réalité de l\'un des métiers les plus difficiles au monde.',
    duration: '4 horas',
    difficulty: 'Media',
    price: 'Consultar',
    
    itineraryEs: [
      'Salida a las 9:00 AM desde la Agencia Sin Fronteras Tours',
      'Visita al "Mercado Minero" - compra de coca, dinamita y regalos para mineros',
      'Equipamiento completo: casco, chaqueta, pantalón, botas y lámpara',
      'Traslado en vehículo privado al Cerro Rico de Potosí (4200 msnm)',
      'Ingreso a la mina cooperativa - recorrido por galerías y túneles',
      'Visita a los "topes" donde trabajan los mineros',
      'Encuentro con la estatua del "Tío" (diablo de la mina)',
      'Compartir coca con los mineros y escuchar sus leyendas',
      'Retorno a la ciudad de Potosí'
    ],
    itineraryEn: [
      'Departure at 9:00 AM from Sin Fronteras Tours Agency',
      'Visit to the "Miners Market" - purchase of coca, dynamite and gifts for miners',
      'Complete equipment: helmet, jacket, pants, boots and lamp',
      'Private vehicle transfer to Cerro Rico of Potosí (4200 masl)',
      'Entry to cooperative mine - tour through galleries and tunnels',
      'Visit to the "topes" where miners work',
      'Meeting with the statue of "Tío" (devil of the mine)',
      'Share coca with miners and listen to their legends',
      'Return to Potosí city'
    ],
    itineraryFr: [
      'Départ à 9h00 depuis l\'Agence Sin Fronteras Tours',
      'Visite du "Marché des Mineurs" - achat de coca, dynamite et cadeaux pour les mineurs',
      'Équipement complet: casque, veste, pantalon, bottes et lampe',
      'Transfer en véhicule privé au Cerro Rico de Potosí (4200 m)',
      'Entrée dans la mine coopérative - visite des galeries et tunnels',
      'Visite des "topes" où travaillent les mineurs',
      'Rencontre avec la statue du "Tío" (diable de la mine)',
      'Partager de la coca avec les mineurs et écouter leurs légendes',
      'Retour à la ville de Potosí'
    ],
    
    includesEs: [
      'Traslado privado ida y vuelta a la mina',
      'Equipo de seguridad completo (casco, chaqueta, pantalón, botas, lámpara)',
      'Guía especializado bilingüe',
      'Entrada a la mina cooperativa',
      'Seguro de accidentes'
    ],
    includesEn: [
      'Private round-trip transfer to the mine',
      'Complete safety equipment (helmet, jacket, pants, boots, lamp)',
      'Specialized bilingual guide',
      'Cooperative mine entrance',
      'Accident insurance'
    ],
    includesFr: [
      'Transfert privé aller-retour à la mine',
      'Équipement de sécurité complet (casque, veste, pantalon, bottes, lampe)',
      'Guide spécialisé bilingue',
      'Entrée à la mine coopérative',
      'Assurance accident'
    ],
    
    excludesEs: [
      'Regalos para los mineros (coca, bebidas, cigarros - aprox. Bs. 30-50)',
      'Agua mineral',
      'Propinas'
    ],
    excludesEn: [
      'Gifts for miners (coca, drinks, cigarettes - approx. Bs. 30-50)',
      'Mineral water',
      'Gratuities'
    ],
    excludesFr: [
      'Cadeaux pour les mineurs (coca, boissons, cigarettes - env. Bs. 30-50)',
      'Eau minérale',
      'Pourboires'
    ],
    
    departureEs: 'Oficina Sin Fronteras Tours - Potosí',
    departureEn: 'Sin Fronteras Tours Office - Potosí',
    departureFr: 'Bureau Sin Fronteras Tours - Potosí',
    scheduleEs: 'Salida: 9:00 AM - Regreso: 1:00 PM',
    scheduleEn: 'Departure: 9:00 AM - Return: 1:00 PM',
    scheduleFr: 'Départ: 9h00 - Retour: 13h00',
    
    cancellationEs: 'Cancelación gratuita hasta 24 horas antes de la actividad.',
    cancellationEn: 'Free cancellation up to 24 hours before the activity.',
    cancellationFr: 'Annulation gratuite jusqu\'à 24 heures avant l\'activité.',
    
    maxGroupSize: 10,
    minAge: 12,
    
    recommendationsEs: [
      'IMPORTANTE: Personas con problemas cardíacos o respiratorios deben consultar a su médico',
      'La altitud es de 4200 msnm - aclimatarse previamente en Potosí',
      'Llevar ropa que pueda ensuciarse (se proporciona equipo de protección)',
      'Calzado cerrado cómodo',
      'Máscara antipolvo (opcional pero recomendada)',
      'Cámara fotográfica (las condiciones son de poca luz)',
      'Respetar las costumbres y creencias de los mineros',
      'No consumir alcohol antes de la visita'
    ],
    recommendationsEn: [
      'IMPORTANT: People with heart or respiratory problems should consult their doctor',
      'Altitude is 4200 masl - acclimatize previously in Potosí',
      'Bring clothes that can get dirty (protective equipment provided)',
      'Comfortable closed-toe footwear',
      'Dust mask (optional but recommended)',
      'Camera (conditions are low light)',
      'Respect miners customs and beliefs',
      'Do not consume alcohol before the visit'
    ],
    recommendationsFr: [
      'IMPORTANT: Les personnes ayant des problèmes cardiaques ou respiratoires doivent consulter leur médecin',
      'L\'altitude est de 4200 m - s\'acclimater préalablement à Potosí',
      'Apporter des vêtements qui peuvent se salir (équipement de protection fourni)',
      'Chaussures fermées confortables',
      'Masque anti-poussière (optionnel mais recommandé)',
      'Appareil photo (les conditions de lumière sont faibles)',
      'Respecter les coutumes et croyances des mineurs',
      'Ne pas consommer d\'alcool avant la visite'
    ]
  },
  {
    id: 'transporte-turistico-privado',
    image: '/transporte-turistico-privado.webp',
    titleEs: 'Servicio de Transporte Turístico Privado',
    titleEn: 'Private Tourist Transportation Service',
    titleFr: 'Service de Transport Touristique Privé',
    descriptionEs: 'Transporte turístico personalizado con guía bilingüe altamente especializado en las rutas del territorio boliviano',
    descriptionEn: 'Personalized tourist transportation with highly specialized bilingual guide on Bolivian territory routes',
    descriptionFr: 'Transport touristique personnalisé avec guide bilingue hautement spécialisé sur les routes du territoire bolivien',
    fullDescriptionEs: 'Nuestro servicio de transporte turístico se caracteriza por la seriedad, confiabilidad, seguridad con un equipo humano que día a día se capacita para brindar información actualizada y un servicio de calidad a cada uno de nuestros pasajeros. Durante más de 25 años de trayectoria, Sin Fronteras Tours, ha consolidado el transporte turístico en las rutas de Bolivia y en especial en el sur del país. La amabilidad, puntualidad y calidad de nuestros servicios nos han permitido posicionarnos en las rutas de Sucre, Potosí, Uyuni, Tupiza y La Paz. Contamos con vans, minibuses, buses y vehículos 4x4 conducidos por los propios dueños siendo nuestros aliados estratégicos para garantizar la seguridad y tranquilidad de nuestros clientes.',
    fullDescriptionEn: 'Our tourist transportation service is characterized by seriousness, reliability, safety with a human team that trains daily to provide updated information and quality service to each of our passengers. During more than 25 years of experience, Sin Fronteras Tours has consolidated tourist transportation on Bolivia routes and especially in the south of the country. The kindness, punctuality and quality of our services have allowed us to position ourselves on the routes of Sucre, Potosí, Uyuni, Tupiza and La Paz. We have vans, minibuses, buses and 4x4 vehicles driven by the owners themselves, being our strategic allies to guarantee the safety and tranquility of our clients.',
    fullDescriptionFr: 'Notre service de transport touristique se caractérise par le sérieux, la fiabilité, la sécurité avec une équipe humaine qui se forme quotidiennement pour fournir des informations à jour et un service de qualité à chacun de nos passagers. Pendant plus de 25 ans d\'expérience, Sin Fronteras Tours a consolidé le transport touristique sur les routes de Bolivie et en particulier dans le sud du pays. L\'amabilité, la ponctualité et la qualité de nos services nous ont permis de nous positionner sur les routes de Sucre, Potosí, Uyuni, Tupiza et La Paz. Nous disposons de vans, minibus, bus et véhicules 4x4 conduits par les propriétaires eux-mêmes, étant nos alliés stratégiques pour garantir la sécurité et la tranquillité de nos clients.',
    duration: 'Variable',
    price: 'Consultar',
    
    itineraryEs: [
      'Contamos con recorridos: Sucre – Potosí – Uyuni',
      'Uyuni – Tupiza – Villazón',
      'Uyuni – Oruro – La Paz',
      'Uyuni – Tupiza – La Paz',
      'Si ninguno se adapta a su requerimiento, nos adaptamos a sus necesidades. ¡Contáctenos!'
    ],
    itineraryEn: [
      'We have routes: Sucre – Potosí – Uyuni',
      'Uyuni – Tupiza – Villazón',
      'Uyuni – Oruro – La Paz',
      'Uyuni – Tupiza – La Paz',
      'If none fits your requirement, we adapt to your needs. Contact us!'
    ],
    itineraryFr: [
      'Nous proposons les itinéraires: Sucre – Potosí – Uyuni',
      'Uyuni – Tupiza – Villazón',
      'Uyuni – Oruro – La Paz',
      'Uyuni – Tupiza – La Paz',
      'Si aucun ne correspond à vos besoins, nous nous adaptons. Contactez-nous!'
    ],
    
    includesEs: [
      'Chofer guía bilingüe con amplio conocimiento en las rutas de Bolivia (consultar disponibilidad)'
    ],
    includesEn: [
      'Bilingual driver guide with extensive knowledge of Bolivia routes (check availability)'
    ],
    includesFr: [
      'Chauffeur guide bilingue avec une connaissance approfondie des routes de Bolivie (vérifier la disponibilité)'
    ],
    
    excludesEs: [
      'Propinas'
    ],
    excludesEn: [
      'Gratuities'
    ],
    excludesFr: [
      'Pourboires'
    ],
    
    departureEs: 'De acuerdo a recorrido',
    departureEn: 'According to route',
    departureFr: 'Selon l\'itinéraire',
    scheduleEs: 'De acuerdo a la distancia del día',
    scheduleEn: 'According to the distance of the day',
    scheduleFr: 'Selon la distance du jour',
    
    cancellationEs: 'Consultar condiciones según el servicio contratado. ¡Contáctenos!',
    cancellationEn: 'Check conditions according to contracted service. Contact us!',
    cancellationFr: 'Vérifier les conditions selon le service contracté. Contactez-nous!',
    
    maxGroupSize: 20,
    minAge: 0,
    
    recommendationsEs: [
      'Consultar disponibilidad de guía bilingüe con anticipación',
      'Indicar claramente su ruta y requerimientos',
      'Llevar documentación de viaje necesaria',
      'Ropa cómoda para viajes largos',
      'Snacks y agua personal'
    ],
    recommendationsEn: [
      'Check bilingual guide availability in advance',
      'Clearly indicate your route and requirements',
      'Bring necessary travel documentation',
      'Comfortable clothing for long trips',
      'Personal snacks and water'
    ],
    recommendationsFr: [
      'Vérifier la disponibilité du guide bilingue à l\'avance',
      'Indiquer clairement votre itinéraire et vos besoins',
      'Apporter la documentation de voyage nécessaire',
      'Vêtements confortables pour les longs trajets',
      'Snacks et eau personnels'
    ]
  },
  {
    id: 'uyuni-clasico-3-dias',
    image: '/LagunaVerde.webp',
    titleEs: 'Uyuni Clásico - 3 días',
    titleEn: 'Classic Uyuni - 3 days',
    titleFr: 'Uyuni Classique - 3 jours',
    descriptionEs: 'Salar de Uyuni, desiertos, lagunas de colores y volcanes',
    descriptionEn: 'Uyuni Salt Flat, deserts, colorful lagoons and volcanoes',
    descriptionFr: 'Salar d\'Uyuni, déserts, lagunes colorées et volcans',
    fullDescriptionEs: 'La aventura más completa por el altiplano boliviano. Tres días explorando el majestuoso Salar de Uyuni, la Isla Incahuasi, las impresionantes lagunas altiplánicas (Cañapa, Hedionda, Chiarkota, Honda y Ramaditas) Desierto de Siloli, Árbol de Piedra, Laguna Colorada, los espectaculares géiseres Sol de Mañana a 5,000 m.s.n.m., y las relajantes termas de Polques. Visitarás también el surrealista Desierto de Dalí, Laguna Verde y el majestuoso Volcán Llicancahur. Durante el recorrido, tendrás la oportunidad de observar flamencos, vicuñas, llamas y toda la fauna y flora única del altiplano boliviano. Incluye alimentación completa, alojamiento en albergues básicos compartidos y transporte en 4x4 en grupo de 6 personas.',
    fullDescriptionEn: 'The most complete adventure through the Bolivian highlands. Three days exploring the majestic Uyuni Salt Flat, Incahuasi Island, the impressive high-altitude lagoons (Cañapa, Hedionda, Chiarkota, Honda and Ramaditas) Siloli Desert, Stone Tree, Colorada Lagoon, the spectacular Sol de Mañana geysers at 5,000 m.a.s.l., and the relaxing Polques hot springs. You will also visit the surreal Dalí Desert, Green Lagoon and the majestic Llicancahur Volcano. During the tour, you will have the opportunity to observe flamingos, vicuñas, llamas and all the unique fauna and flora of the Bolivian highlands. Includes full board, accommodation in shared basic shelters and 4x4 transportation in a group of 6 people.',
    fullDescriptionFr: 'L\'aventure la plus complète à travers l\'altiplano bolivien. Trois jours d\'exploration du majestueux Salar d\'Uyuni, de l\'île Incahuasi, des impressionnantes lagunes d\'altitude (Cañapa, Hedionda, Chiarkota, Honda et Ramaditas), du Désert de Siloli, de l\'Arbre de Pierre, de la Laguna Colorada, des spectaculaires geysers Sol de Mañana à 5,000 m d\'altitude, et des relaxantes sources thermales de Polques. Vous visiterez également le surréaliste Désert de Dalí, la Laguna Verde et le majestueux Volcan Llicancahur. Pendant le circuit, vous aurez l\'opportunité d\'observer des flamants roses, des vigognes, des lamas et toute la faune et flore uniques de l\'altiplano bolivien. Comprend pension complète, hébergement en refuges de base partagés et transport en 4x4 en groupe de 6 personnes.',
    duration: '3 Días / 2 Noches',
    difficulty: 'Media',
    price: 'USD 200',
    
    itineraryEs: [
      'DÍA 1: Uyuni - Cementerio de Trenes - Colchani - Salar de Uyuni - Isla Incahuasi - Chuvica – San Juan. Alojamiento: Hospedaje básico en San Juan. Comidas: A y C',
      'DÍA 2: San Juan – Mirador Volcán Ollagüe - lagunas altiplánicas (Cañapa, Hedionda, Chiarkota, Honda y Ramaditas) – Desierto de Siloli – Árbol de Piedra - Laguna Colorada (flamencos: andino, james y chileno) – Huayllajara. Alojamiento: Hospedaje básico compartido en Huayllajara. Comidas: D, A y C',
      'DÍA 3: Amanecer en géiseres Sol de Mañana (5,000 m) - Termas de Polques (baño opcional) - Desierto de Dalí - Laguna Verde - Frontera con Chile o regreso a Uyuni. Comidas: D y A'
    ],
    itineraryEn: [
      'DAY 1: Uyuni - Train Cemetery - Colchani - Uyuni Salt Flat - Incahuasi Island - Chuvica – San Juan. Accommodation: Basic accommodation in San Juan. Meals: L and D',
      'DAY 2: San Juan – Ollagüe Volcano Viewpoint - high-altitude lagoons (Cañapa, Hedionda, Chiarkota, Honda and Ramaditas) – Siloli Desert – Stone Tree - Colorada Lagoon (flamingos: Andean, James and Chilean) – Huayllajara. Accommodation: Basic shared accommodation in Huayllajara. Meals: B, L and D',
      'DAY 3: Sunrise at Sol de Mañana geysers (5,000 m) - Polques hot springs (optional bath) - Dalí Desert - Green Lagoon - Border with Chile or return to Uyuni. Meals: B and L'
    ],
    itineraryFr: [
      'JOUR 1: Uyuni - Cimetière de Trains - Colchani - Salar d\'Uyuni - Île Incahuasi - Chuvica – San Juan. Hébergement: Hébergement de base à San Juan. Repas: D et D',
      'JOUR 2: San Juan – Mirador Volcan Ollagüe - lagunes d\'altitude (Cañapa, Hedionda, Chiarkota, Honda et Ramaditas) – Désert de Siloli – Arbre de Pierre - Laguna Colorada (flamants roses: andin, james et chilien) – Huayllajara. Hébergement: Hébergement de base partagé à Huayllajara. Repas: P, D et D',
      'JOUR 3: Lever de soleil aux geysers Sol de Mañana (5,000 m) - Sources thermales de Polques (bain optionnel) - Désert de Dalí - Laguna Verde - Frontière avec le Chili ou retour à Uyuni. Repas: P et D'
    ],
    
    includesEs: [
      'Chofer guía hispanohablante con conocimiento de la región e información básica esencial',
      'Transporte compartido 4x4 Toyota Land Cruiser (6 personas)',
      'Pensión completa: 2 desayunos, 3 almuerzos y 2 cenas',
      'Alojamiento básico en habitaciones compartidas para 6 personas (con un pago adicional es posible tener una habitación privada)'
    ],
    includesEn: [
      'Spanish-speaking driver guide with regional knowledge and essential basic information',
      'Shared 4x4 Toyota Land Cruiser transportation (6 people)',
      'Full board: 2 breakfasts, 3 lunches and 2 dinners',
      'Basic accommodation in shared rooms for 6 people (with additional payment a private room is possible)'
    ],
    includesFr: [
      'Chauffeur guide hispanophone avec connaissance de la région et informations de base essentielles',
      'Transport partagé 4x4 Toyota Land Cruiser (6 personnes)',
      'Pension complète: 2 petits-déjeuners, 3 déjeuners et 2 dîners',
      'Hébergement de base en chambres partagées pour 6 personnes (avec un paiement supplémentaire une chambre privée est possible)'
    ],
    
    excludesEs: [
      'Entradas a sitios (USD 50 adicional)',
      'Saco de dormir (se puede alquilar por USD 5)',
      'Bebidas y alimentación no consignada en el itinerario (D: Desayuno, A: Almuerzo, C: Cena)',
      'Seguro de viaje, propinas u otros gastos de tipo personal'
    ],
    excludesEn: [
      'Site entrances (USD 50 additional)',
      'Sleeping bag (can be rented for USD 5)',
      'Drinks and meals not specified in the itinerary (B: Breakfast, L: Lunch, D: Dinner)',
      'Travel insurance, tips or other personal expenses'
    ],
    excludesFr: [
      'Entrées aux sites (USD 50 supplémentaire)',
      'Sac de couchage (peut être loué pour USD 5)',
      'Boissons et repas non spécifiés dans l\'itinéraire (P: Petit-déjeuner, D: Déjeuner, D: Dîner)',
      'Assurance voyage, pourboires ou autres dépenses personnelles'
    ],
    
    departureEs: 'Oficina de contacto en Uyuni a las 10:30 AM (Día 1)',
    departureEn: 'Contact office in Uyuni at 10:30 AM (Day 1)',
    departureFr: 'Bureau de contact à Uyuni à 10h30 (Jour 1)',
    scheduleEs: 'Día 1: 10:30 AM / Día 3: Finaliza 6:00 PM en Uyuni o 10:00 AM en frontera chilena',
    scheduleEn: 'Day 1: 10:30 AM / Day 3: Ends 6:00 PM in Uyuni or 10:00 AM at Chilean border',
    scheduleFr: 'Jour 1: 10h30 / Jour 3: Se termine à 18h00 à Uyuni ou 10h00 à la frontière chilienne',
    
    cancellationEs: 'Precio por persona USD 200. Si este programa no se adapta a sus tiempos, con gusto organizamos su visita de acuerdo a sus requerimientos y necesidades. ¡Contáctenos!',
    cancellationEn: 'Price per person USD 200. If this program does not fit your schedule, we will gladly organize your visit according to your requirements and needs. Contact us!',
    cancellationFr: 'Prix par personne USD 200. Si ce programme ne correspond pas à votre emploi du temps, nous organiserons volontiers votre visite selon vos besoins et exigences. Contactez-nous!',
    
    maxGroupSize: 6,
    minAge: 12,
    
    recommendationsEs: [
      'La Reserva Eduardo Avaroa y el salar de Uyuni tienen un clima muy frío, ventoso y con alta radiación solar. Por el día generalmente hace sol y la temperatura es agradable.',
      'Buena aclimatación a la altura (el tour alcanza 5.000 m.s.n.m)',
      'Ropa adecuada para el frío (-15°C recomendado)',
      'Gorra o sombrero que cubra muy bien del sol',
      'Zapatos cerrados',
      'Humectante para labios',
      'Linterna frontal',
      'Protector solar de F50, bálsamo labial',
      'Gafas para el sol muy oscuras con filtro UV',
      'Toalla',
      'Papel higiénico y toallas húmedas (en invierno el agua se congela)',
      'Traje de baño (si desea bañarse en las aguas termales)',
      'Entre diciembre y abril se recomienda llevar un impermeable para la lluvia',
      'Dinero en efectivo (no existe cajero automático en la ruta)'
    ],
    recommendationsEn: [
      'The Eduardo Avaroa Reserve and the Uyuni salt flat have a very cold, windy climate with high solar radiation. During the day there is usually sun and the temperature is pleasant.',
      'Good altitude acclimatization (the tour reaches 5,000 m.a.s.l.)',
      'Appropriate clothing for cold (-15°C recommended)',
      'Cap or hat that covers very well from the sun',
      'Closed shoes',
      'Lip moisturizer',
      'Headlamp',
      'SPF 50 sunscreen, lip balm',
      'Very dark sunglasses with UV filter',
      'Towel',
      'Toilet paper and wet wipes (in winter the water freezes)',
      'Swimsuit (if you want to bathe in the hot springs)',
      'Between December and April it is recommended to bring a raincoat',
      'Cash (there is no ATM on the route)'
    ],
    recommendationsFr: [
      'La Réserve Eduardo Avaroa et le salar d\'Uyuni ont un climat très froid, venteux et avec une forte radiation solaire. Pendant la journée, il y a généralement du soleil et la température est agréable.',
      'Bonne acclimatation à l\'altitude (le tour atteint 5,000 m)',
      'Vêtements appropriés pour le froid (-15°C recommandé)',
      'Casquette ou chapeau qui couvre très bien du soleil',
      'Chaussures fermées',
      'Hydratant pour les lèvres',
      'Lampe frontale',
      'Crème solaire SPF 50, baume à lèvres',
      'Lunettes de soleil très foncées avec filtre UV',
      'Serviette',
      'Papier toilette et lingettes humides (en hiver l\'eau gèle)',
      'Maillot de bain (si vous voulez vous baigner dans les sources thermales)',
      'Entre décembre et avril, il est recommandé d\'apporter un imperméable',
      'Argent liquide (il n\'y a pas de distributeur automatique sur la route)'
    ]
  }
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};