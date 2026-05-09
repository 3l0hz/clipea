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
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/promo/basico/1.png',
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
  // BASTONES
  {
    id: 'selfie1.20',
    name: 'Bastón Selfie Telesin 1.2m',
    category: 'Bastones Selfie',
    price: '$18.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie1.20/1.png',
    images: ['https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/selfie1.20/1.png', getImg('Bullet')],
    description: 'Bastón selfie de aluminio ligero y resistente, perfecto para tomas estables.',
    compatibility: 'GoPro, Insta360, DJI Action',
    recommendedUse: 'Vlogs, viajes, rutas suaves',
    brand: 'Telesin',
    bestSeller: true
  },
  {
    id: 'Selfie2m',
    name: 'Bastón Selfie Carbono 2m',
    category: 'Bastones Selfie',
    price: '$34.990',
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
    category: 'Bastones Selfie',
    price: '$49.990',
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
  // TRÍPODES
  {
    id: 'MinitripodeGoPro',
    name: 'Mini Tripode Gopro',
    category: 'Trípodes',
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
    category: 'Trípodes',
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
  // SOPORTES VEHICULO
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
  {
    id: 'soporte-parabrisas-gopro-insta',
    name: 'Soporte Parabrisas GoPro Insta',
    category: 'Soportes Moto / Vehículo',
    price: '$19.990',
    image: 'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soporteparab/primera.png',
    images: [
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soporteparab/primera.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soporteparab/1.png',
      'https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/Products/soporteparab/2.png'
    ],
    description: 'Soporte ultra resistente diseñado para capturar tomas estables desde el parabrisas de tu moto o vehículo.',
    compatibility: 'GoPro, Insta360, DJI Action',
    recommendedUse: 'Rutas de carretera, motovlogs',
    bestSeller: false
  },
  // OTROS
  {
    id: 'Bullet',
    name: 'Mango Bullet Time',
    category: 'Accesorios Cámara',
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
  {
    id: 'lente-rep-gopro9.13',
    name: 'Lente Repuesto GoPro 9-13',
    category: 'Accesorios Cámara',
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
    category: 'Accesorios Corporales',
    price: '$16.990',
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
