'use client';
import { use, useState, useEffect, useMemo } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '@/constants/data';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, Box, Info, CheckCircle2, ShieldCheck, Zap, 
  ChevronLeft, ChevronRight, ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import { ModelViewer } from '@/components/ModelViewer';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { notFound, useRouter } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { LegalModals } from '@/components/LegalModals';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [legalModal, setLegalModal] = useState<{ open: boolean, type: string | null }>({ open: false, type: null });
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Asegurar que la página comience arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    
    // 1. Productos de la misma categoría (excluyendo el actual)
    const sameCategory = PRODUCTS.filter(p => 
      p.mainCategory === product.mainCategory && p.id !== product.id
    );
    
    // 2. Si faltan para llegar a 4, completar con destacados de otras categorías
    let finalSelection = [...sameCategory];
    
    if (finalSelection.length < 4) {
      const featured = PRODUCTS.filter(p => 
        p.mainCategory !== product.mainCategory && 
        p.id !== product.id &&
        !finalSelection.some(sel => sel.id === p.id)
      ).sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
      
      finalSelection = [...finalSelection, ...featured];
    }
    
    return finalSelection.slice(0, 4);
  }, [product]);

  if (!product) {
    notFound();
  }

  const images = product.images || [product.image];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de clipea.`;

  const nextImage = () => {
    setShowModel(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setShowModel(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const openLegalModal = (type: string) => {
    setLegalModal({ open: true, type });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <WhatsAppButton />
      
      <div className="pt-28 md:pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 mb-32">
            
            {/* COLUMNA IZQUIERDA: Visuales (Galería/3D) */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6">
              <div className="relative aspect-square w-full bg-[#050810]/40 rounded-[32px] border border-white/5 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.12),transparent_70%)] pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12">
                  {showModel && product.modelUrl ? (
                    <div className="w-full h-full">
                      <ModelViewer src={product.modelUrl} poster={product.image} alt={product.name} />
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={images[currentImageIndex]}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-all duration-700"
                        priority
                      />
                    </div>
                  )}
                  
                  {images.length > 1 && !showModel && (
                    <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                      <button onClick={prevImage} className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-all">
                        <ChevronLeft size={24} />
                      </button>
                      <button onClick={nextImage} className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-all">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Miniaturas */}
              <div className="flex gap-4 px-2 overflow-x-auto no-scrollbar pb-2">
                {product.modelUrl && (
                  <button
                    onClick={() => setShowModel(true)}
                    className={cn(
                      "relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl shrink-0",
                      showModel 
                        ? "border-cyan-400 scale-105 shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                        : "border-white/10 opacity-60"
                    )}
                  >
                    <Box size={24} className={cn("transition-colors", showModel ? "text-cyan-400" : "text-white/70")} />
                    <span className="mt-1 text-[8px] font-bold text-cyan-400 tracking-tighter uppercase">VISTA 3D</span>
                  </button>
                )}
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setShowModel(false); setCurrentImageIndex(idx); }}
                    className={cn(
                      "relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all bg-white/[0.03] backdrop-blur-md shrink-0",
                      !showModel && currentImageIndex === idx 
                        ? "border-cyan-400 scale-105 shadow-[0_0_209px_rgba(0,229,255,0.4)]" 
                        : "border-white/10 opacity-60"
                    )}
                  >
                    <Image src={img} alt={`${product.name} ${idx}`} fill className="object-cover p-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* COLUMNA DERECHA: Información */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-10">
              <div className="space-y-8">
                {/* Botón Volver */}
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-[#00D9FF] transition-colors group w-fit"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  <span>Volver a productos</span>
                </button>

                {/* Cabecera de Producto */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-400">
                      {product.category}
                    </span>
                    {product.bestSeller && (
                      <span className="bg-accent/10 text-accent text-[9px] font-bold px-2.5 py-1 rounded-full border border-accent/20 tracking-[0.2em] uppercase flex items-center gap-1">
                        <Zap size={8} className="fill-current" /> MÁS VENDIDO
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-none uppercase tracking-tighter text-white">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-baseline gap-4 pt-2">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-accent">
                      {product.price}
                    </span>
                  </div>
                </div>

                {/* Descripción */}
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">
                    <Info size={14} className="text-cyan-400/50" />
                    Descripción
                  </h4>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                {/* Grid de Especificaciones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 p-6 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-cyan-400/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em] mb-1">Compatibilidad</h4>
                        <p className="text-white text-sm font-bold tracking-tight leading-snug">
                          {product.compatibility}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 p-6 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-cyan-400/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                        <Zap size={20} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em] mb-1">Uso Recomendado</h4>
                        <p className="text-white text-sm font-bold tracking-tight leading-snug">
                          {product.recommendedUse}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Destacados */}
                {product.highlights && product.highlights.length > 0 && (
                  <div className="space-y-6 pt-4">
                    <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">¿Qué incluye?</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {product.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-4 text-sm md:text-base text-white/80 font-semibold group">
                          <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400/60 group-hover:text-cyan-400 transition-colors shrink-0 mt-0.5">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Botones de Acción */}
              <div className="pt-10 space-y-6">
                <Button 
                  onClick={() => {
                    addToCart(product);
                    toast({ description: "Agregado al carrito" });
                  }}
                  className="w-full h-16 md:h-20 rounded-2xl text-lg font-bold flex items-center justify-center gap-4 transition-all duration-500 premium-led-button group"
                >
                  <ShoppingCart size={24} strokeWidth={2.5} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="tracking-[0.2em] uppercase font-black text-white">Añadir al Carrito</span>
                </Button>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-[11px] text-white/40 hover:text-cyan-400 transition-colors font-bold uppercase tracking-[0.3em]"
                  >
                    <WhatsAppIcon className="w-5 h-5 opacity-60" />
                    Consulta directa vía WhatsApp
                  </a>
                  <span className="text-[10px] text-white/20 uppercase font-bold tracking-[0.2em]">Envíos a todo Chile 🇨🇱</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN PRODUCTOS RELACIONADOS */}
          <section className="pt-20 border-t border-white/5 mb-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
                  También te <span className="text-cyan-400">puede interesar</span>
                </h3>
                <div className="h-1 w-20 bg-cyan-400 rounded-full" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {relatedProducts.map((relProduct) => (
                  <ProductCard
                    key={relProduct.id}
                    product={relProduct}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer y Modales Legales */}
      <Footer onOpenLegalModal={openLegalModal} />
      <LegalModals 
        isOpen={legalModal.open} 
        onClose={() => setLegalModal({ open: false, type: null })} 
        type={legalModal.type} 
      />
    </main>
  );
}