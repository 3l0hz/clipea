
import { Product, FAQItem } from '@/types/store';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/elohz-fallback/600/600';

export const EXPERIMENTAL_PRODUCT: Product = {
  id: 'PRUEBA',
  name: 'TARJETA PRUEBA',
  category: 'Accesorios Cámara',
  price: '$0.000',
  image: 'https://picsum.photos/seed/experimental/600/600',
  description: 'Tarjeta experimental para pruebas visuales en mobile. Este producto es solo para desarrollo.',
  compatibility: 'Sandbox',
  recommendedUse: 'Laboratorio Visual',
  brand: 'Experimental',
  bestSeller: true
};

export const EXPERIMENTAL_DESKTOP_PRODUCT: Product = {
  id: 'PRUEBA_DESKTOP',
  name: 'PRUEBA DESKTOP',
  category: 'Laboratorio',
  price: '$99.990',
  image: 'https://picsum.photos/seed/desktop-lab/600/600',
  description: 'Tarjeta experimental exclusiva para pruebas en versión desktop. Base de diseño estándar.',
  compatibility: 'Desktop Sandbox',
  recommendedUse: 'Visual Lab',
  brand: 'Prototyping',
  bestSeller: false,
  highlights: [
    'Vidrio Templado 2.5D',
    'Efecto Espejo Premium',
    'Acabado Metálico',
    'Corte Laser Preciso'
  ]
};

export const PRODUCTS: Product[] = [
  // PROMOS MOTO
  {
    id: 'pack-moto-basico',
    name: 'MOTO START',
    category: 'Promos Moto',
    price: '$39.990',
    image: 'https://picsum.photos/seed/moto-pack-1/600/600',
    description: 'Setup ideal para comenzar a grabar rutas y contenido POV con estabilidad y seguridad.',
    compatibility: 'Universal',
    recommendedUse: 'Vlogs urbanos',
    highlights: [
      'Selfie invisible 1.20 m',
      'Soporte moto reforzado',
      'Compatible Insta360 / GoPro / DJI',
      'Ideal para viajes y rutas urbanas'
    ],
    bestSeller: true
  },
  {
    id: 'pack-moto-esencial',
    name: 'MOTO CREATOR',
    category: 'Promos Moto',
    price: '$59.990',
    image: 'https://picsum.photos/seed/moto-pack-2/600/600',
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
    name: 'MOTO ELITE',
    category: 'Promos Moto',
    price: '$69.990',
    image: 'https://picsum.photos/seed/moto-pack-3/600/600',
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
  {
    id: 'pack-moto-completo',
    name: 'MOTO PRO + PARABRISAS',
    category: 'Promos Moto',
    price: '$82.990',
    image: 'https://picsum.photos/seed/moto-pack-4/600/600',
    description: 'La configuración más premium para grabar contenido cinematográfico en moto.',
    compatibility: 'Universal',
    recommendedUse: 'Touring premium',
    highlights: [
      'Soporte parabrisas CNC',
      'Máxima estabilidad',
      'Compatible Insta360 / GoPro / DJI',
      'Setup touring premium'
    ]
  },
  // TRÍPODES
  {
    id: 'selfie1.20',
    name: 'Selfie Stick Telesin 1.2m',
    category: 'Bastones Selfie',
    price: '$18.990',
    image: getImg('selfie1.20'),
    images: [getImg('selfie1.20'), getImg('Bullet')],
    description: 'Selfie stick de aluminio ligero y resistente, perfecto para tomas estables.',
    compatibility: 'GoPro, Insta360, DJI Action',
    recommendedUse: 'Vlogs, viajes, rutas suaves',
    brand: 'Telesin',
    bestSeller: true
  },
  {
    id: 'Selfie2m',
    name: 'Selfie Stick Carbono 2m',
    category: 'Bastones Selfie',
    price: '$34.990',
    image: getImg('Selfie2m'),
    description: 'Extensión máxima de 2 metros en fibra de carbono ultra liviana.',
    compatibility: 'Insta360 X3/X4, GoPro',
    recommendedUse: 'Tomas de dron falsas, efectos 360',
    brand: 'Telesin'
  },
  {
    id: 'selfie3m',
    name: 'Selfie Stick Carbono 3m',
    category: 'Bastones Selfie',
    price: '$49.990',
    image: getImg('selfie3m'),
    description: 'El stick más largo del mercado para perspectivas aéreas increíbles.',
    compatibility: 'Insta360, GoPro con adaptador',
    recommendedUse: 'Paisajes masivos, grupos grandes',
    brand: 'Telesin',
    bestSeller: true
  },
  {
    id: 'MinitripodeGoPro',
    name: 'Minitrípode Pro GoPro',
    category: 'Trípodes',
    price: '$12.990',
    image: getImg('MinitripodeGoPro'),
    description: 'Trípode compacto que también funciona como empuñadura.',
    compatibility: 'Todas las GoPro',
    recommendedUse: 'Time-lapse, vlogs estáticos',
    brand: 'Telesin'
  },
  {
    id: 'Minitripodeinsta',
    name: 'Minitrípode Insta360',
    category: 'Trípodes',
    price: '$14.990',
    image: getImg('Minitripodeinsta'),
    description: 'Diseño ultra estable para cámaras 360 pesadas.',
    compatibility: 'Insta360 ONE X/X2/X3/X4',
    recommendedUse: 'Superficies planas, tomas bajas',
    brand: 'Insta360'
  },
  {
    id: 'soportemotomanillar',
    name: 'Soporte Moto Manillar CNC',
    category: 'Soportes Moto / Vehículo',
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
    id: 'soporteparab',
    name: 'Soporte Ventosa Parabrisas',
    category: 'Soportes Moto / Vehículo',
    price: '$15.990',
    image: getImg('soporteparab'),
    description: 'Ventosa de grado industrial para fijación en superficies lisas.',
    compatibility: 'Parabrisas, tanques de moto, autos',
    recommendedUse: 'Grabación onboard'
  },
  {
    id: 'Bullet',
    name: 'Mango Bullet Time',
    category: 'Accesorios Cámara',
    price: '$24.990',
    image: getImg('Bullet'),
    description: 'Mango con mecanismo de rotación fluida para efecto Bullet Time.',
    compatibility: 'Insta360 ONE X/X2/X3',
    recommendedUse: 'Efectos cinemáticos 360',
    brand: 'Insta360'
  },
  {
    id: 'lente-rep-gopro9.13',
    name: 'Lente Repuesto GoPro 9-13',
    category: 'Accesorios Cámara',
    price: '$9.990',
    image: getImg('lente-rep-gopro9.13'),
    description: 'Vidrio templado de alta transparencia para reemplazar lentes rayados.',
    compatibility: 'GoPro Hero 9, 10, 11, 12, 13',
    recommendedUse: 'Mantenimiento preventivo'
  },
  {
    id: 'PecheraTelesin',
    name: 'Pechera Ajustable Telesin',
    category: 'Accesorios Corporales',
    price: '$16.990',
    image: getImg('PecheraTelesin'),
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
