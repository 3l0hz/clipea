
import { Product, FAQItem } from '@/types/store';

export type MainCategory = 'MOTO & AVENTURA' | 'CÁMARAS & CREACIÓN' | 'Hogar inteligente' | 'SETUP & ESCRITORIO' | 'OFERTAS';

export interface CategoryStructure {
  label: MainCategory;
  subcategories: string[];
}

export const CATEGORY_STRUCTURE: CategoryStructure[] = [
  {
    label: 'OFERTAS',
    subcategories: ['Promos', 'Bundles', 'Packs Especiales', 'Liquidaciones']
  },
  {
    label: 'MOTO & AVENTURA',
    subcategories: ['Soportes Moto', 'Packs Moto', 'Monturas', 'Grabación POV']
  },
  {
    label: 'CÁMARAS & CREACIÓN',
    subcategories: ['Bastones Selfie', 'Trípodes', 'Accesorios GoPro', 'Accesorios Insta360', 'Accesorios DJI', 'Soportes Cámara']
  },
  {
    label: 'Hogar inteligente',
    subcategories: ['Dashcams', 'Hogar Inteligente', 'Gadgets Smart', 'Automatización']
  },
  {
    label: 'SETUP & ESCRITORIO',
    subcategories: ['Pixel Art', 'Audio', 'Carga Rápida', 'Setup Creator']
  }
];

export const PRODUCTS: Product[] = [
  // PROMOS MOTO
  {
    id: 'pack-moto-basico',
    name: 'MOTO URBANO',
    mainCategory: 'OFERTAS',
    subcategory: 'Packs Especiales',
    price: '$34.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/promo/basico/1.png',
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/basico/3d%20-optimizado.glb',
    description: 'Setup ideal para comenzar a grabar rutas y contenido POV con estabilidad y seguridad.',
    compatibility: 'Universal',
    recommendedUse: 'Vlogs urbanos',
    highlights: [
      'Bastón selfie invisible 1.20 m',
      'Soporte moto reforzado',
      'Compatible Insta360 / GoPro / DJI',
      'Ideal para viajes y rutas urbanas'
    ],
    bestSeller: true,
    category: 'Promos Moto'
  },
  {
    id: 'pack-moto-medio',
    name: 'MOTO RUTA',
    mainCategory: 'OFERTAS',
    subcategory: 'Packs Especiales',
    price: '$54.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/signal-2026-05-24-000334_005.jpg',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/signal-2026-05-24-000334_005.jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/signal-2026-05-24-000334_004.jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/signal-2026-05-24-000334_006.jpg'
    ],
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/moto-optimizado(1).glb',
    description: 'Configuración equilibrada para creadores que buscan estabilidad y tomas más profesionales.',
    compatibility: 'Universal',
    recommendedUse: 'Contenido dinámico',
    highlights: [
      'Sistema reforzado',
      'POV más estable',
      'Compatible Insta360 / GoPro / DJI',
      'Ideal para contenido dinámico'
    ],
    category: 'Promos Moto'
  },
  {
    id: 'pack-moto-avanzado',
    name: 'MOTO PRO',
    mainCategory: 'OFERTAS',
    subcategory: 'Packs Especiales',
    price: '$69.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/Full/signal-2026-05-24-000334_005(2).jpg',
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/Full/moto-optimizado(1).glb',
    description: 'Mayor estabilidad y resistencia para grabaciones cinematográficas en movimiento.',
    compatibility: 'Universal',
    recommendedUse: 'Carretera y rutas largas',
    highlights: [
      'Construcción CNC premium',
      'Anti vibración',
      'Mayor seguridad en conducción',
      'Ideal para carretera y rutas largas'
    ],
    bestSeller: true,
    category: 'Promos Moto'
  },
  // GADGETS TECH
  {
    id: 'bestcon-rm4c-mini',
    name: 'Control Remoto Wifi',
    mainCategory: 'Hogar inteligente',
    subcategory: 'Hogar Inteligente',
    price: '$19.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/2.HOGAR%20INTELIGENTE/control%20wifi/ChatGPT%20Image%2025%20may%202026,%2015_51_40.png',
    description: 'Haz inteligentes tus dispositivos tradicionales y contrólalos desde cualquier lugar. Este pequeño hub permite manejar aire acondicionado, TV y más desde tu celular, convirtiéndolos en parte de tu setup inteligente.',
    compatibility: 'Android / iPhone (WiFi)',
    recommendedUse: 'Hogar Inteligente, oficinas, setups',
    brand: 'BestCon',
    highlights: [
      'Control remoto universal inteligente',
      'Control desde cualquier parte del mundo',
      'Compatible con equipos IR (AC, TV, Ventiladores)',
      'Diseño compacto y minimalista'
    ],
    category: 'Hogar inteligente'
  },
  // SOPORTES VEHICULO
  {
    id: 'soportemotomanillar',
    name: 'Soporte Moto Manillar CNC',
    mainCategory: 'MOTO & AVENTURA',
    subcategory: 'Soportes Moto',
    price: '$19.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soportemotomanillar/1.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soportemotomanillar/1.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soportemotomanillar/2.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soportemotomanillar/3.png'
    ],
    description: 'Construcción en aluminio CNC para máxima resistencia a vibraciones.',
    compatibility: 'Manillares de 22mm a 32mm',
    recommendedUse: 'Rutas en moto, enduro, ciclismo',
    bestSeller: true,
    category: 'Soportes Moto / Vehículo'
  },
  {
    id: 'sunnylife-clip-moto',
    name: 'Clip Parabrisas Moto',
    mainCategory: 'MOTO & AVENTURA',
    subcategory: 'Soportes Moto',
    price: '$15.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/parabrisa%20moto/primera.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/parabrisa%20moto/primera.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/parabrisa%20moto/chico.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/parabrisa%20moto/2.png'
    ],
    description: 'Soporte tipo clip Sunnylife para instalar cámaras de acción en el parabrisas de la moto. Ideal para grabaciones POV, rutas, viajes y contenido en movimiento.',
    compatibility: 'GoPro, Insta360, DJI Action',
    recommendedUse: 'Rutas en moto, Vlogs de viaje',
    brand: 'Sunnylife',
    highlights: [
      'Clip firme para parabrisas de moto',
      'Rotación ajustable hasta 180°',
      'Diseño compacto y resistente',
      'Compatible con cámaras de acción'
    ],
    category: 'Soportes Moto / Vehículo'
  },
  {
    id: 'soporteparab',
    name: 'Soporte Ventosa Parabrisas',
    mainCategory: 'MOTO & AVENTURA',
    subcategory: 'Monturas',
    price: '$15.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/ventosa/1(1).jpg',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/ventosa/1(1).jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/ventosa/11.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/ventosa/1.jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/ventosa/2.jpg'
    ],
    description: 'Ventosa de grado industrial para fijación en superficies lisas.',
    compatibility: 'Parabrisas, tanques de moto, autos',
    recommendedUse: 'Grabación onboard',
    category: 'Soportes Moto / Vehículo'
  },
  // SETUP & ESCRITORIO
  {
    id: 'divoom-timebox-evo',
    name: 'Divoom Timebox Evo',
    mainCategory: 'SETUP & ESCRITORIO',
    subcategory: 'Pixel Art',
    price: '$54.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/1.SETUP%20Y%20ESCRITORIO/timebox%20evo/ChatGPT%20Image%2025%20may%202026,%2014_22_35.png',
    description: 'La pieza central definitiva para tu setup. El Timebox Evo trasciende la función de un altavoz convencional para convertirse en un lienzo digital de 16x16 píxeles. Diseñado para quienes ven la tecnología como una forma de arte y decoración funcional.',
    compatibility: 'iOS / Android (Divoom App)',
    recommendedUse: 'Setup Creator / Escritorio Gamer / Decoración Tech',
    brand: 'Divoom',
    highlights: [
      'Pantalla LED RGB de 256 píxeles programables',
      'Altavoz Bluetooth con procesamiento DSP de 6W',
      'Visualizador de música rítmico en tiempo real',
      'Reloj inteligente, alarmas y notificaciones sociales',
      'Estética futurista y minimalista para setups modernos'
    ],
    category: 'Accesorios Cámara'
  },
  // TRÍPODES
  {
    id: 'MinitripodeGoPro',
    name: 'Mini Tripode Gopro',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Trípodes',
    price: '$14.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/MinitripodeGoPro/1(2).jpg',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/MinitripodeGoPro/1(2).jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/MinitripodeGoPro/2(2).jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/MinitripodeGoPro/20250912_133035.jpg'
    ],
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/MinitripodeGoPro/minitripodegopro-optimizado.glb',
    description: 'Trípode compacto que también funciona como empuñadura.',
    compatibility: 'Todas las GoPro',
    recommendedUse: 'Time-lapse, vlogs estáticos',
    brand: 'Telesin',
    category: 'Trípodes'
  },
  {
    id: 'Minitripodeinsta',
    name: 'Minitrípode Insta360',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Trípodes',
    price: '$14.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Minitripodeinsta/1.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Minitripodeinsta/1.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Minitripodeinsta/2.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Minitripodeinsta/3.png'
    ],
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Minitripodeinsta/mini%20tripode%20insta-optimizado.glb',
    description: 'Diseño ultra estable para cámaras 360 pesadas.',
    compatibility: 'Insta360 ONE X/X2/X3/X4',
    recommendedUse: 'Superficies planas, tomas bajas',
    brand: 'Insta360',
    category: 'Trípodes'
  },
  {
    id: 'Bullet',
    name: 'Mango Bullet',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Trípodes',
    price: '$24.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/1.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/1.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/2.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/3.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/4.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/0.png'
    ],
    description: 'Mango con mecanismo de rotación fluida para efecto Bullet Time.',
    compatibility: 'Insta360 ONE X/X2/X3',
    recommendedUse: 'Efectos cinemáticos 360',
    brand: 'Insta360',
    category: 'Trípodes'
  },
  // BASTONES
  {
    id: 'selfie1.20',
    name: 'Baston selfie Alumino 1.2m',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Bastones Selfie',
    price: '$19.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie1.20/1.png',
    images: ['https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie1.20/1.png', 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Bullet/1.png'],
    description: 'Bastón selfie de aluminio ligero y resistente, perfecto para tomas estables.',
    compatibility: 'GoPro, Insta360, DJI Action',
    recommendedUse: 'Vlogs, viajes, rutas suaves',
    bestSeller: true,
    category: 'Bastones Selfie'
  },
  {
    id: 'Selfie2m',
    name: 'Bastón Selfie Carbono 2m',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Bastones Selfie',
    price: '$29.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Selfie2m/1.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Selfie2m/1.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Selfie2m/2.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Selfie2m/3.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/Selfie2m/4.png'
    ],
    description: 'Extensión máxima de 2 metros en fibra de carbono ultra liviana.',
    compatibility: 'Insta360 X3/X4, GoPro',
    recommendedUse: 'Tomas de dron falsas, efectos 360',
    brand: 'Telesin',
    category: 'Bastones Selfie'
  },
  {
    id: 'selfie3m',
    name: 'Bastón Selfie Carbono 3m',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Bastones Selfie',
    price: '$34.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie3m/1.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie3m/1.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie3m/2.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie3m/4.png'
    ],
    description: 'El bastón más largo del mercado para perspectivas aéreas increíbles.',
    compatibility: 'Insta360, GoPro con adaptador',
    recommendedUse: 'Paisajes masivos, grupos grandes',
    brand: 'Telesin',
    bestSeller: true,
    category: 'Bastones Selfie'
  },
  // OTROS / ADAPTADORES
  {
    id: 'telesin-floating-grip-remote',
    name: 'TELESIN Floating Hand Grip with Remote Control',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Soportes Cámara',
    price: '$29.990',
    image: 'https://picsum.photos/seed/floating-grip/600/600',
    description: 'Empuñadura flotante con control remoto integrado, perfecta para capturar tomas en el agua con total control.',
    compatibility: 'GoPro Hero 13, 12, 11, 10, 9, 8',
    recommendedUse: 'Deportes acuáticos, buceo, surf',
    brand: 'Telesin',
    highlights: [
      'Control remoto Bluetooth',
      'Cuerpo flotante de alta visibilidad',
      'Agarre antideslizante',
      'Compatible con trípodes standard'
    ],
    category: 'Accesorios Cámara'
  },
  {
    id: 'lente-rep-gopro9.13',
    name: 'Lente Repuesto GoPro 9-13',
    mainCategory: 'CÁMARAS & CREACIÓN',
    subcategory: 'Accesorios GoPro',
    price: '$9.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/lenterepgpro9.13/lente1.jpg',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/lenterepgpro9.13/lente1.jpg',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/lenterepgpro9.13/lente%202.jpg'
    ],
    description: 'Vidrio templado de alta transparencia para reemplazar lentes rayados.',
    compatibility: 'GoPro Hero 9, 10, 11, 12, 13',
    recommendedUse: 'Mantenimiento preventivo',
    category: 'Accesorios Cámara'
  },
  {
    id: 'PecheraTelesin',
    name: 'Pechera Ajustable Telesin',
    mainCategory: 'MOTO & AVENTURA',
    subcategory: 'Grabación POV',
    price: '$12.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/PecheraTelesin/pechera%201.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/PecheraTelesin/pechera%201.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/PecheraTelesin/2.png'
    ],
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/PecheraTelesin/pechera-optimizado.glb',
    description: 'Correas elásticas de alta calidad para tomas en primera persona.',
    compatibility: 'Universal',
    recommendedUse: 'Deportes de acción, POV',
    brand: 'Telesin',
    category: 'Accesorios Corporales'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Los productos son compatibles con GoPro, Insta360 y DJI?',
    answer: 'Sí, la mayoría de nuestros accesorios utilizan el sistema de anclaje universal estándar compatible con las principales marcas de cámaras deportivas.'
  },
  {
    question: '¿Cómo compro?',
    answer: 'Simplemente elige tu producto y haz clic en "Comprar por WhatsApp". Serás redirigido a una conversación directa con nosotros para coordinar el pago y la entrega.'
  },
  {
    question: '¿Hacen envíos dentro de Chile?',
    answer: 'Realizamos envíos a todo Chile a través de Starken, Blue Express o Chilexpress, según tu preferencia.'
  },
  {
    question: '¿Puedo consultar compatibilidad antes de comprar?',
    answer: '¡Por supuesto! Puedes escribirnos directamente al WhatsApp y te asesoraremos para asegurar que el accesorio es el indicado para tu equipo.'
  }
];

export const WHATSAPP_NUMBER = '56940628182';
