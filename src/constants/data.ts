
import { Product, FAQItem } from '@/types/store';

export type MainCategory = 'MOTO & AVENTURA' | 'CÁMARAS & CREACIÓN' | 'GADGETS TECH' | 'SETUP & ESCRITORIO' | 'OFERTAS';

export interface CategoryStructure {
  label: MainCategory;
  subcategories: string[];
}

export const CATEGORY_STRUCTURE: CategoryStructure[] = [
  {
    label: 'MOTO & AVENTURA',
    subcategories: ['Soportes Moto', 'Packs Moto', 'Monturas', 'Grabación POV']
  },
  {
    label: 'CÁMARAS & CREACIÓN',
    subcategories: ['Bastones Selfie', 'Trípodes', 'Accesorios GoPro', 'Accesorios Insta360', 'Accesorios DJI', 'Soportes Cámara']
  },
  {
    label: 'GADGETS TECH',
    subcategories: ['Dashcams', 'Hogar Inteligente', 'Gadgets Smart', 'Automatización']
  },
  {
    label: 'SETUP & ESCRITORIO',
    subcategories: ['Pixel Art', 'Audio', 'Carga Rápida', 'Setup Creator']
  },
  {
    label: 'OFERTAS',
    subcategories: ['Promos', 'Bundles', 'Packs Especiales', 'Liquidaciones']
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
    bestSeller: true
  },
  {
    id: 'pack-moto-medio',
    name: 'MOTO RUTA',
    mainCategory: 'OFERTAS',
    subcategory: 'Packs Especiales',
    price: '$54.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/1(3).jpg',
    modelUrl: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/medio/moto-optimizado(1).glb',
    description: 'Configuración equilibrada para creadores que buscan estabilidad y tomas más profesionales.',
    compatibility: 'Universal',
    recommendedUse: 'Contenido dinámico',
    highlights: [
      'Sistema reforzado',
      'POV más estable',
      'Compatible Insta360 / GoPro / DJI',
      'Ideal para contenido dinámico'
    ]
  },
  {
    id: 'pack-moto-avanzado',
    name: 'MOTO PRO',
    mainCategory: 'OFERTAS',
    subcategory: 'Packs Especiales',
    price: '$69.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/0.PROMO/Full/full.jpg',
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
    bestSeller: true
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
    bestSeller: true
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
    ]
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
    recommendedUse: 'Grabación onboard'
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
    brand: 'Telesin'
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
    brand: 'Insta360'
  },
  {
    id: 'Bullet',
    name: 'Mango Bullet Time',
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
    brand: 'Insta360'
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
    bestSeller: true
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
    brand: 'Telesin'
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
    bestSeller: true
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
    ]
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
    recommendedUse: 'Mantenimiento preventivo'
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
    brand: 'Telesin'
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
