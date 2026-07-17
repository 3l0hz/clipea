
export type Category = 'Promos Moto' | 'Trípodes' | 'Bastones Selfie' | 'Soportes Moto / Vehículo' | 'Setup y Escritorio' | 'Accesorios Corporales' | 'Hogar inteligente';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  mainCategory: string;
  subcategory: string;
  price: string;
  image: string;
  images?: string[];
  modelUrl?: string;
  description: string;
  compatibility: string;
  recommendedUse: string;
  brand?: string;
  bestSeller?: boolean;
  videoUrl?: string;
  highlights?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
