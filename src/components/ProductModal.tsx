'use client';
import { Product } from '@/types/store';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ChevronLeft, ChevronRight, X, ShoppingCart, Box, Info, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ModelViewer } from './ModelViewer';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setShowModel(false);
    }
  }, [isOpen]);

  if (!product) return null;

  const isPromo = product.category === 'Promos Moto';
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

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      description: "Agregado al carrito",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "max-w-[100vw] h-[100dvh] md:max-w-7xl md:h-[90vh] p-0 overflow-hidden rounded-none md:rounded-[32px] animate-in zoom-in-95 [&>button]:hidden focus:ring-0 focus:outline-none focus-visible:ring-0 border-none md:border md:border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]",
          isPromo ? "bg-[#020306]" : "bg-[#050505]"
        )}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row h-full relative overflow-y-auto md:overflow-hidden">
          {/* Botón Cerrar Flotante */}
          <DialogClose asChild>
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[100] w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-xl text-white/80 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 group focus:outline-none focus:ring-0 focus-visible:ring-0"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </DialogClose>

          {/* PARTE VISUAL (60%-65% en desktop) */}
          <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col relative bg-transparent shrink-0">
            <div className="relative aspect-square md:h-full w-full flex items-center justify-center overflow-hidden bg-transparent">
              <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(103,232,249,0.05),transparent_80%)] pointer-events-none" />
              
              <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-20">
                {showModel && product.modelUrl ? (
                  <div className="w-full h-full min-h-[300px]">
                    <ModelViewer src={product.modelUrl} poster={product.image} alt={product.name} />
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={images[currentImageIndex]}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-700 hover:scale-[1.02]"
                      priority
                    />
                  </div>
                )}
                
                {images.length > 1 && !showModel && (
                  <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button onClick={prevImage} className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all">
                      <ChevronLeft size={24} className="md:w-8 md:h-8" />
                    </button>
                    <button onClick={nextImage} className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all">
                      <ChevronRight size={24} className="md:w-8 md:h-8" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Miniaturas optimizadas */}
            <div className="relative md:absolute md:bottom-10 left-0 right-0 flex gap-3 md:gap-4 px-6 py-6 md:py-2 overflow-x-auto justify-center z-20 no-scrollbar">
              {product.modelUrl && (
                <button
                  onClick={() => setShowModel(true)}
                  className={cn(
                    "relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl shrink-0 group",
                    showModel 
                      ? "border-cyan-400 scale-110 shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                      : "border-white/10 opacity-60 hover:opacity-100"
                  )}
                >
                  <Box size={22} className={cn("transition-colors md:w-7 md:h-7", showModel ? "text-cyan-400" : "text-white/70")} />
                  <span className="absolute bottom-1 text-[8px] font-bold text-center text-cyan-400 uppercase tracking-tighter">VISTA 3D</span>
                </button>
              )}
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => { setShowModel(false); setCurrentImageIndex(idx); }}
                  className={cn(
                    "relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 transition-all bg-white/[0.03] backdrop-blur-md shrink-0",
                    !showModel && currentImageIndex === idx 
                      ? "border-cyan-400 scale-110 shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                      : "border-white/10 opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* PARTE INFORMACIÓN (35%-40% en desktop) */}
          <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col bg-transparent md:border-l md:border-white/5">
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-12 space-y-6 md:space-y-8">
              
              {/* Encabezado */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
                      {product.category}
                    </span>
                    {product.bestSeller && (
                      <span className="bg-accent/10 text-accent text-[9px] font-bold px-2 py-0.5 rounded-full border border-accent/20 tracking-widest uppercase">MÁS VENDIDO</span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold leading-tight uppercase tracking-tighter text-white">
                    {product.name}
                  </h2>
                </div>
                
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter text-accent drop-shadow-[0_0_15px_rgba(142,255,127,0.3)]">
                    {product.price}
                  </span>
                  {isPromo && (
                    <span className="text-lg md:text-xl text-white/20 line-through font-bold tracking-tight">
                      {product.price === '$34.990' ? '$49.990' : 
                       product.price === '$54.990' ? '$74.990' : 
                       product.price === '$69.990' ? '$89.990' :
                       product.price === '$82.990' ? '$112.990' :
                       '$149.990'}
                    </span>
                  )}
                </div>
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">
                  <Info size={12} className="text-cyan-400/50" />
                  Detalles
                </h4>
                <p className="text-sky-300 text-sm md:text-base leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {/* Grid de Especificaciones compacto */}
              <div className="grid grid-cols-1 gap-5 py-6 border-y border-white/[0.05]">
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">Compatibilidad</h4>
                  <p className="text-white text-xs md:text-sm font-bold tracking-tight bg-white/5 w-fit px-3 py-1.5 rounded-xl border border-white/5">
                    {product.compatibility}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">Uso Recomendado</h4>
                  <p className="text-white text-xs md:text-sm font-bold tracking-tight bg-white/5 w-fit px-3 py-1.5 rounded-xl border border-white/5">
                    {product.recommendedUse}
                  </p>
                </div>
              </div>

              {/* Incluye */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">Contenido</h4>
                  <div className="space-y-3">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-white/80 font-semibold">
                        <div className="w-7 h-7 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Acciones de Compra - Sticky bottom */}
            <div className="mt-auto p-6 md:px-10 md:py-8 bg-black/40 backdrop-blur-3xl border-t border-white/[0.05] flex flex-col gap-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full h-14 md:h-16 rounded-[20px] text-base font-bold flex items-center justify-center gap-4 transition-all duration-500 premium-liquid-glass-button"
              >
                <ShoppingCart size={20} strokeWidth={2.5} className="text-white/90" />
                <span className="tracking-[0.15em] uppercase font-black text-white">Añadir al Carrito</span>
              </Button>
              <div className="flex items-center justify-between px-2">
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[10px] text-white/40 hover:text-white transition-colors font-bold uppercase tracking-[0.2em]"
                >
                  <WhatsAppIcon className="w-4 h-4 opacity-60" />
                  Consulta directa
                </a>
                <span className="text-[9px] text-white/20 uppercase font-bold tracking-[0.1em]">Envíos a todo Chile 🇨🇱</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};