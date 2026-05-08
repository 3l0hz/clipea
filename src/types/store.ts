
export type Category = 'Promos Moto' | 'Trípodes' | 'Bastones Selfie' | 'Soportes Moto / Vehículo' | 'Accesorios Cámara' | 'Accesorios Corporales';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: string;
  image: string;
  images?: string[];
  description: string;
  compatibility: string;
  recommendedUse: string;
  brand?: string;
  bestSeller?: boolean;
  videoUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
