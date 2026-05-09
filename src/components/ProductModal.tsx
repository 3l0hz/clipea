
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
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

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
      title: "Agregado al carrito",
      description: `${product.name} se añadió correctamente.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "max-w-[100vw] h-[100dvh] md:max-w-5xl md:h-[85vh] p-0 overflow-hidden rounded-none md:rounded-[32px] animate-in zoom-in-95 [&>button]:hidden focus:ring-0 focus:outline-none focus-visible:ring-0 border-none md:border md:border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]",
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
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[100] w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/60 backdrop-blur-xl text-white/80 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </DialogClose>

          {/* PARTE VISUAL: Galería e Imagen */}
          <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col relative bg-transparent shrink-0">
            <div className="relative aspect-square md:h-full w-full flex items-center justify-center overflow-hidden bg-transparent">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(103,232,249,0.1),transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none md:hidden" />
              
              <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
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
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                      priority
                    />
                  </div>
                )}
                
                {images.length > 1 && !showModel && (
                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button onClick={prevImage} className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all">
                      <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>
                    <button onClick={nextImage} className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all">
                      <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>
                  </div>
                )}
              </div>

              {/* Selector de medios (miniaturas) */}
              <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex gap-2 md:gap-3 px-6 overflow-x-auto justify-center z-20 no-scrollbar">
                {product.modelUrl && (
                  <button
                    onClick={() => setShowModel(true)}
                    className={cn(
                      "relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl shrink-0 group",
                      showModel ? "border-accent scale-105 md:scale-110 shadow-[0_0_20px_rgba(142,255,127,0.4)]" : "border-white/10 opacity-60"
                    )}
                  >
                    <Box size={20} className={cn("transition-colors md:w-6 md:h-6", showModel ? "text-accent" : "text-white/70")} />
                    <span className="absolute bottom-1 text-[7px] md:text-[8px] font-bold text-center text-accent uppercase tracking-tighter">3D VIEW</span>
                  </button>
                )}
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setShowModel(false); setCurrentImageIndex(idx); }}
                    className={cn(
                      "relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all bg-white/[0.03] backdrop-blur-md shrink-0",
                      !showModel && currentImageIndex === idx ? "border-accent scale-105 md:scale-110 shadow-[0_0_20px_rgba(142,255,127,0.4)]" : "border-white/10 opacity-60"
                    )}
                  >
                    <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover p-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PARTE INFORMACIÓN */}
          <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col bg-transparent md:border-l md:border-white/5">
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-16 md:py-16 space-y-8 md:space-y-12">
              
              {/* Encabezado */}
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-accent/80">
                      {product.category}
                    </span>
                    {product.bestSeller && (
                      <span className="bg-accent/10 text-accent text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full border border-accent/20 tracking-widest uppercase">Best Seller</span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold leading-[0.9] uppercase tracking-tighter text-white">
                    {product.name}
                  </h2>
                </div>
                
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-accent drop-shadow-[0_0_15px_rgba(142,255,127,0.3)]">
                    {product.price}
                  </span>
                  {isPromo && (
                    <span className="text-base md:text-lg text-white/20 line-through font-bold tracking-tight">
                      {product.price === '$39.990' ? '$54.990' : 
                       product.price === '$59.990' ? '$79.990' : 
                       product.price === '$69.990' ? '$89.990' :
                       product.price === '$82.990' ? '$112.990' :
                       '$149.990'}
                    </span>
                  )}
                </div>
              </div>

              {/* Descripción */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">
                  <Info size={10} className="text-accent/40 md:w-3 md:h-3" />
                  Descripción técnica
                </h4>
                <p className="text-white/70 text-sm md:text-lg leading-relaxed font-medium max-w-2xl">
                  {product.description}
                </p>
              </div>

              {/* Grid de Especificaciones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 py-6 md:py-10 border-y border-white/[0.05]">
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">Compatibilidad</h4>
                  <p className="text-white text-xs md:text-base font-bold tracking-tight bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/5">
                    {product.compatibility}
                  </p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">Uso Recomendado</h4>
                  <p className="text-white text-xs md:text-base font-bold tracking-tight bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/5">
                    {product.recommendedUse}
                  </p>
                </div>
              </div>

              {/* Highlights / Incluye */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="space-y-4 md:space-y-6">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">Contenido del paquete</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-white/80 font-semibold group">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 transition-colors">
                          <CheckCircle2 size={14} className="md:w-4 md:h-4" />
                        </div>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Acciones de Compra Quick */}
            <div className="p-6 md:px-16 md:py-10 bg-white/[0.01] backdrop-blur-2xl border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <Button 
                onClick={handleAddToCart}
                className="w-full sm:w-2/3 h-14 md:h-16 rounded-xl md:rounded-[24px] text-sm md:text-base font-bold flex items-center justify-center gap-3 md:gap-4 transition-all duration-500 bg-accent text-black hover:scale-[1.03] active:scale-95 shadow-[0_20px_40px_rgba(142,255,127,0.25)] glass-reflective-button-edge"
              >
                <ShoppingCart size={18} strokeWidth={2.5} className="md:w-5 md:h-5" />
                <span className="tracking-[0.1em] md:tracking-[0.15em] uppercase font-black">Agregar al Carrito</span>
              </Button>
              <div className="flex flex-col items-center sm:items-start gap-1 w-full sm:w-1/3">
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/40 hover:text-accent transition-colors font-bold uppercase tracking-[0.2em]"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60" />
                  Consulta rápida
                </a>
                <span className="text-[8px] md:text-[9px] text-white/20 uppercase font-bold tracking-[0.1em]">Envío a todo Chile</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
