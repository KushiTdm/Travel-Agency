// src/data/tours.ts

export interface Tour {
  id: string;
  image: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  fullDescriptionEs: string;
  fullDescriptionEn: string;
  duration: string;
  difficulty?: string;
  price: string;
  
  // Détails supplémentaires
  itineraryEs: string[];
  itineraryEn: string[];
  includesEs: string[];
  includesEn: string[];
  excludesEs: string[];
  excludesEn: string[];
  
  departureEs: string;
  departureEn: string;
  scheduleEs: string;
  scheduleEn: string;
  
  cancellationEs: string;
  cancellationEn: string;
  
  maxGroupSize: number;
  minAge?: number;
  
  recommendationsEs: string[];
  recommendationsEn: string[];
}

export const tours: Tour[] = [
  {
    id: 'beagle-channel',
    image: '/beagle-channel.jpg',
    titleEs: 'Navegación Canal Beagle',
    titleEn: 'Beagle Channel Navigation',
    descriptionEs: 'Visita el Faro Les Eclaireurs y la Isla de los Lobos Marinos',
    descriptionEn: 'Visit the Les Eclaireurs Lighthouse and Sea Lion Island',
    fullDescriptionEs: 'Embárcate en una aventura inolvidable navegando por el mítico Canal Beagle. Durante este recorrido, visitarás el icónico Faro Les Eclaireurs, conocido como el "Faro del Fin del Mundo", y la Isla de los Lobos Marinos, donde podrás observar colonias de lobos marinos en su hábitat natural. También avistarás aves marinas como cormoranes imperiales y skúas. La navegación ofrece vistas panorámicas de las montañas que rodean Ushuaia y la oportunidad de aprender sobre la rica historia marítima de la región.',
    fullDescriptionEn: 'Embark on an unforgettable adventure sailing through the mythical Beagle Channel. During this journey, you will visit the iconic Les Eclaireurs Lighthouse, known as the "Lighthouse at the End of the World", and Sea Lion Island, where you can observe colonies of sea lions in their natural habitat. You will also spot seabirds such as imperial cormorants and skuas. The navigation offers panoramic views of the mountains surrounding Ushuaia and the opportunity to learn about the rich maritime history of the region.',
    duration: '4h',
    price: '$85',
    
    itineraryEs: [
      'Salida desde el puerto de Ushuaia',
      'Navegación por el Canal Beagle con vistas a las montañas',
      'Visita a la Isla de los Lobos Marinos (avistamiento desde el barco)',
      'Parada fotográfica en el Faro Les Eclaireurs',
      'Observación de aves marinas: cormoranes imperiales y skúas',
      'Regreso al puerto con vista panorámica de Ushuaia'
    ],
    itineraryEn: [
      'Departure from Ushuaia port',
      'Navigation through the Beagle Channel with mountain views',
      'Visit to Sea Lion Island (viewing from the boat)',
      'Photo stop at Les Eclaireurs Lighthouse',
      'Seabird watching: imperial cormorants and skuas',
      'Return to port with panoramic view of Ushuaia'
    ],
    
    includesEs: [
      'Transporte en catamarán moderno',
      'Guía bilingüe (español/inglés)',
      'Café y bebidas calientes a bordo',
      'Cobertura de seguro'
    ],
    includesEn: [
      'Modern catamaran transportation',
      'Bilingual guide (Spanish/English)',
      'Coffee and hot drinks on board',
      'Insurance coverage'
    ],
    
    excludesEs: [
      'Comidas',
      'Propinas',
      'Tasa portuaria ($5 USD)'
    ],
    excludesEn: [
      'Meals',
      'Gratuities',
      'Port fee ($5 USD)'
    ],
    
    departureEs: 'Puerto de Ushuaia, Muelle Turístico',
    departureEn: 'Ushuaia Port, Tourist Pier',
    scheduleEs: 'Salidas: 10:00 AM y 3:00 PM (sujeto a condiciones climáticas)',
    scheduleEn: 'Departures: 10:00 AM and 3:00 PM (subject to weather conditions)',
    
    cancellationEs: 'Cancelación gratuita hasta 24 horas antes de la actividad. Reembolso del 50% entre 24-12 horas antes.',
    cancellationEn: 'Free cancellation up to 24 hours before the activity. 50% refund between 24-12 hours before.',
    
    maxGroupSize: 100,
    minAge: 0,
    
    recommendationsEs: [
      'Llevar ropa abrigada y cortaviento',
      'Protector solar y gafas de sol',
      'Cámara fotográfica',
      'Llegar 30 minutos antes de la salida'
    ],
    recommendationsEn: [
      'Bring warm and windproof clothing',
      'Sunscreen and sunglasses',
      'Camera',
      'Arrive 30 minutes before departure'
    ]
  },
  {
    id: 'national-park-train',
    image: '/national-park-train.jpg',
    titleEs: 'Parque Nacional & Tren',
    titleEn: 'National Park & Train',
    descriptionEs: 'Naturaleza, historia y el tren del fin del mundo',
    descriptionEn: 'Nature, history and the train at the end of the world',
    fullDescriptionEs: 'Vive una experiencia única combinando la belleza natural del Parque Nacional Tierra del Fuego con un viaje histórico en el legendario Tren del Fin del Mundo. Recorrerás los mismos caminos que utilizaban los prisioneros del antiguo presidio de Ushuaia. En el parque, disfrutarás de paisajes espectaculares incluyendo la Bahía Lapataia, el punto final de la Ruta Panamericana, y el Lago Roca. Caminarás por senderos interpretativos y aprenderás sobre la flora y fauna patagónica.',
    fullDescriptionEn: 'Experience a unique combination of the natural beauty of Tierra del Fuego National Park with a historic journey on the legendary Train at the End of the World. You will travel the same paths used by prisoners from the old Ushuaia prison. In the park, you will enjoy spectacular landscapes including Lapataia Bay, the end point of the Pan-American Highway, and Roca Lake. You will walk interpretive trails and learn about Patagonian flora and fauna.',
    duration: '5h',
    price: '$95',
    
    itineraryEs: [
      'Recogida en el hotel',
      'Viaje en el Tren del Fin del Mundo (1 hora)',
      'Entrada al Parque Nacional Tierra del Fuego',
      'Visita a Bahía Lapataia y poste indicador del fin de la Ruta 3',
      'Caminata por sendero costero del Lago Roca',
      'Paradas panorámicas para fotografías',
      'Tiempo libre para explorar',
      'Regreso al hotel'
    ],
    itineraryEn: [
      'Hotel pickup',
      'Train at the End of the World ride (1 hour)',
      'Entrance to Tierra del Fuego National Park',
      'Visit to Lapataia Bay and end of Route 3 sign',
      'Walk along Roca Lake coastal trail',
      'Scenic stops for photographs',
      'Free time to explore',
      'Return to hotel'
    ],
    
    includesEs: [
      'Transporte desde/hacia el hotel',
      'Entrada al Parque Nacional',
      'Ticket del Tren del Fin del Mundo',
      'Guía especializado',
      'Seguro'
    ],
    includesEn: [
      'Hotel pickup and drop-off',
      'National Park entrance',
      'Train at the End of the World ticket',
      'Specialized guide',
      'Insurance'
    ],
    
    excludesEs: [
      'Comidas y bebidas',
      'Propinas'
    ],
    excludesEn: [
      'Food and drinks',
      'Gratuities'
    ],
    
    departureEs: 'Recogida en hoteles céntricos de Ushuaia',
    departureEn: 'Pickup at central Ushuaia hotels',
    scheduleEs: 'Salida: 9:00 AM (duración total: 5 horas)',
    scheduleEn: 'Departure: 9:00 AM (total duration: 5 hours)',
    
    cancellationEs: 'Cancelación gratuita hasta 24 horas antes. Sin reembolso después de ese plazo.',
    cancellationEn: 'Free cancellation up to 24 hours before. No refund after that time.',
    
    maxGroupSize: 30,
    minAge: 0,
    
    recommendationsEs: [
      'Usar calzado cómodo para caminatas',
      'Llevar ropa en capas (el clima puede cambiar)',
      'Agua y snacks',
      'Binoculares para observación de aves'
    ],
    recommendationsEn: [
      'Wear comfortable walking shoes',
      'Dress in layers (weather can change)',
      'Water and snacks',
      'Binoculars for bird watching'
    ]
  },
  {
    id: 'laguna-esmeralda',
    image: '/laguna-esmeralda.webp',
    titleEs: 'Trekking Laguna Esmeralda',
    titleEn: 'Laguna Esmeralda Trekking',
    descriptionEs: 'Caminata a través de turberas y bosques patagónicos',
    descriptionEn: 'Hike through peat bogs and Patagonian forests',
    fullDescriptionEs: 'Una de las caminatas más hermosas de Tierra del Fuego. El sendero te lleva a través de bosques de lengas, turberas y valles glaciares hasta llegar a la impresionante Laguna Esmeralda, cuyas aguas color turquesa son el resultado del deshielo glaciar. Durante el recorrido, tendrás vistas espectaculares de los Montes Martial y la posibilidad de avistar fauna local como zorros y aves patagónicas. Una experiencia perfecta para amantes de la naturaleza y la fotografía.',
    fullDescriptionEn: 'One of the most beautiful hikes in Tierra del Fuego. The trail takes you through lenga forests, peat bogs, and glacial valleys until you reach the stunning Laguna Esmeralda, whose turquoise waters result from glacial melt. Along the way, you will have spectacular views of the Martial Mountains and the possibility of spotting local wildlife such as foxes and Patagonian birds. A perfect experience for nature and photography lovers.',
    duration: '6h',
    difficulty: 'Media',
    price: '$75',
    
    itineraryEs: [
      'Encuentro en punto de partida (Valle de Tierra Mayor)',
      'Caminata por bosque de lengas (1.5 horas)',
      'Cruce de turberas con pasarelas',
      'Ascenso hacia la laguna',
      'Llegada a Laguna Esmeralda - tiempo para fotos y descanso',
      'Box lunch con vista panorámica',
      'Descenso por el mismo sendero',
      'Regreso al punto de inicio'
    ],
    itineraryEn: [
      'Meeting at starting point (Tierra Mayor Valley)',
      'Walk through lenga forest (1.5 hours)',
      'Crossing peat bogs on boardwalks',
      'Ascent towards the lagoon',
      'Arrival at Laguna Esmeralda - time for photos and rest',
      'Box lunch with panoramic view',
      'Descent by the same trail',
      'Return to starting point'
    ],
    
    includesEs: [
      'Guía de montaña certificado',
      'Transporte desde/hacia Ushuaia',
      'Box lunch y agua',
      'Bastones de trekking',
      'Seguro de accidentes'
    ],
    includesEn: [
      'Certified mountain guide',
      'Transportation from/to Ushuaia',
      'Box lunch and water',
      'Trekking poles',
      'Accident insurance'
    ],
    
    excludesEs: [
      'Ropa y calzado de trekking',
      'Propinas'
    ],
    excludesEn: [
      'Trekking clothing and footwear',
      'Gratuities'
    ],
    
    departureEs: 'Recogida en hoteles de Ushuaia a las 8:30 AM',
    departureEn: 'Pickup at Ushuaia hotels at 8:30 AM',
    scheduleEs: 'Salida: 9:00 AM - Regreso aproximado: 3:00 PM',
    scheduleEn: 'Departure: 9:00 AM - Approximate return: 3:00 PM',
    
    cancellationEs: 'Cancelación gratuita hasta 48 horas antes. La actividad puede cancelarse por mal tiempo.',
    cancellationEn: 'Free cancellation up to 48 hours before. Activity may be cancelled due to bad weather.',
    
    maxGroupSize: 12,
    minAge: 12,
    
    recommendationsEs: [
      'Buena condición física requerida',
      'Botas de trekking impermeables (obligatorio)',
      'Ropa técnica en capas + cortaviento',
      'Mochila de 20-30 litros',
      'Protección solar y gorro',
      'Guantes y gorro de abrigo'
    ],
    recommendationsEn: [
      'Good physical condition required',
      'Waterproof trekking boots (mandatory)',
      'Technical layered clothing + windbreaker',
      '20-30 liter backpack',
      'Sun protection and hat',
      'Gloves and warm hat'
    ]
  },
  {
    id: 'penguin-colony',
    image: '/penguin-colony.avif',
    titleEs: 'Pingüinera Isla Martillo',
    titleEn: 'Penguin Colony - Martillo Island',
    descriptionEs: 'Camina junto a los pingüinos de Magallanes',
    descriptionEn: 'Walk alongside Magellanic penguins',
    fullDescriptionEs: 'Una experiencia única e inolvidable: caminar entre colonias de pingüinos de Magallanes y Papua en su hábitat natural en la Isla Martillo. Este tour exclusivo te permite observar de cerca el comportamiento de estas fascinantes aves en una de las pocas pingüineras del mundo donde se permite el acceso a pie. Navegarás por el Canal Beagle hasta la isla, donde pasarás una hora rodeado de pingüinos. Una oportunidad extraordinaria para fotografía de vida silvestre.',
    fullDescriptionEn: 'A unique and unforgettable experience: walking among colonies of Magellanic and Gentoo penguins in their natural habitat on Martillo Island. This exclusive tour allows you to closely observe the behavior of these fascinating birds in one of the few penguin colonies in the world where foot access is permitted. You will sail through the Beagle Channel to the island, where you will spend an hour surrounded by penguins. An extraordinary opportunity for wildlife photography.',
    duration: '6h',
    price: '$120',
    
    itineraryEs: [
      'Recogida en hotel',
      'Traslado a Estancia Harberton (1 hora)',
      'Navegación en zodiac por el Canal Beagle (15 min)',
      'Desembarco en Isla Martillo',
      'Caminata guiada entre pingüinos (1 hora)',
      'Regreso en zodiac',
      'Visita opcional al Museo Acatushún',
      'Regreso a Ushuaia'
    ],
    itineraryEn: [
      'Hotel pickup',
      'Transfer to Harberton Ranch (1 hour)',
      'Zodiac navigation through Beagle Channel (15 min)',
      'Landing on Martillo Island',
      'Guided walk among penguins (1 hour)',
      'Return by zodiac',
      'Optional visit to Acatushún Museum',
      'Return to Ushuaia'
    ],
    
    includesEs: [
      'Transporte privado desde/hacia Ushuaia',
      'Navegación en zodiac',
      'Guía especializado en fauna',
      'Entrada a la pingüinera',
      'Equipo de seguridad marítimo',
      'Seguros'
    ],
    includesEn: [
      'Private transportation from/to Ushuaia',
      'Zodiac navigation',
      'Wildlife specialized guide',
      'Penguin colony entrance',
      'Maritime safety equipment',
      'Insurance'
    ],
    
    excludesEs: [
      'Comidas',
      'Entrada al Museo Acatushún (opcional - $10)',
      'Propinas'
    ],
    excludesEn: [
      'Meals',
      'Acatushún Museum entrance (optional - $10)',
      'Gratuities'
    ],
    
    departureEs: 'Recogida en hoteles a las 8:00 AM',
    departureEn: 'Hotel pickup at 8:00 AM',
    scheduleEs: 'Octubre a Abril (temporada de pingüinos). Salida: 8:00 AM',
    scheduleEn: 'October to April (penguin season). Departure: 8:00 AM',
    
    cancellationEs: 'Cancelación gratuita hasta 72 horas antes. Sujeto a condiciones climáticas y mareas.',
    cancellationEn: 'Free cancellation up to 72 hours before. Subject to weather conditions and tides.',
    
    maxGroupSize: 20,
    minAge: 6,
    
    recommendationsEs: [
      'Solo disponible de octubre a abril',
      'Ropa impermeable y abrigada',
      'Calzado antideslizante',
      'No se permite tocar a los pingüinos',
      'Mantener distancia mínima de 3 metros',
      'Llevar cámara con buena batería'
    ],
    recommendationsEn: [
      'Only available from October to April',
      'Waterproof and warm clothing',
      'Non-slip footwear',
      'Touching penguins is not allowed',
      'Maintain minimum distance of 3 meters',
      'Bring camera with good battery'
    ]
  }
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};