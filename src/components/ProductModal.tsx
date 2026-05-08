
'use client';
import { Product } from '@/types/store';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ChevronLeft, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
  if (!product) return null;

  const isPremiumPromo = product.category === 'Promos Moto' || product.id === 'PRUEBA_DESKTOP';
  const images = product.images || [product.image];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const PremiumCloseButton = () => (
    <DialogClose asChild>
      <button className="absolute top-3 left-1/2 -translate-x-1/2 z-[70] w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/60 backdrop-blur-xl border-none flex items-center justify-center transition-all duration-300 hover:scale-110 glass-reflective-button-edge shadow-[0_0_15px_rgba(142,255,127,0.15)] focus:outline-none group">
        <X size={20} strokeWidth={2} className="relative z-10 text-accent transition-transform duration-500 group-hover:rotate-90" />
        <span className="sr-only">Cerrar</span>
      </button>
    </DialogClose>
  );

  const StandardCloseButton = () => (
    <DialogClose asChild>
      <button className="absolute top-4 right-4 z-[70] w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/20 hover:text-white shadow-[0_0_12px_rgba(255,255,255,0.05)] hover:shadow-[0_0_18px_rgba(255,255,255,0.1)] focus:outline-none group">
        <X size={18} strokeWidth={1.5} className="relative z-10 transition-transform duration-500 group-hover:rotate-90" />
        <span className="sr-only">Cerrar</span>
      </button>
    </DialogClose>
  );

  if (isPremiumPromo) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-[95vw] md:max-w-2xl p-0 bg-transparent border-none overflow-visible rounded-[24px] md:rounded-[32px] shadow-none [&>button]:hidden focus:ring-0 focus:outline-none focus-visible:ring-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>{product.description}</DialogDescription>
          </DialogHeader>
          
          <div className={cn(
            "premium-mobile-card promo-glass-card glass-reflective-edge relative overflow-hidden flex flex-col items-center text-center p-6 md:p-12 gap-6 md:gap-8 rounded-[24px] md:rounded-[32px] w-full"
          )}>
            <div className="shine-layer" />
            
            <PremiumCloseButton />
            
            {/* Header Capsule */}
            <div className="relative w-full z-10 mt-12 md:mt-8">
              <div className="mx-auto w-fit glass-button bg-black/60 backdrop-blur-xl border-accent/30 py-3 md:py-4 px-8 md:px-12 rounded-2xl glass-reflective-button-edge flex flex-col items-center gap-1 shadow-[0_0_25px_rgba(142,255,127,0.1)]">
                <span className="text-[8px] md:text-[9px] font-bold text-accent tracking-[0.5em] uppercase opacity-90 leading-none">PROMO EXCLUSIVA</span>
                <h2 className="text-xl md:text-3xl font-headline font-bold text-white tracking-tighter uppercase leading-tight">{product.name}</h2>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative w-full aspect-square md:aspect-[16/10] rounded-[20px] md:rounded-[28px] bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center group/img p-4 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.08),transparent_60%)] animate-pulse" />
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-1000 group-hover/img:scale-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full space-y-6 md:space-y-8 z-10">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-headline font-extrabold text-white tracking-tighter flex items-center justify-center gap-2">
                  {product.price}
                  <span className="text-[10px] md:text-xs font-bold text-accent/50 tracking-widest block opacity-50 uppercase">CLP</span>
                </div>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-md mx-auto font-medium">
                  {product.description}
                </p>
              </div>

              {product.highlights && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 py-4 md:py-6 border-y border-white/10">
                  {product.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-left">
                      <CheckCircle2 size={14} className="text-accent shrink-0" />
                      <span className="text-white/80 text-[11px] md:text-[13px] font-medium tracking-tight line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Details */}
              <div className="grid grid-cols-2 gap-10 py-2">
                <div className="text-left space-y-1">
                  <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Compatibilidad</h4>
                  <p className="text-white text-xs md:text-sm font-bold tracking-tight">{product.compatibility}</p>
                </div>
                <div className="text-right space-y-1">
                  <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Uso Pro</h4>
                  <p className="text-white text-xs md:text-sm font-bold tracking-tight">{product.recommendedUse}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button 
                  asChild 
                  className="w-full glass-button bg-white text-black hover:bg-white/90 border-none h-14 md:h-16 rounded-xl md:rounded-2xl text-lg md:text-xl font-extrabold flex items-center justify-center gap-3 transition-all duration-500 glass-reflective-button-edge shadow-[0_0_20px_rgba(142,255,127,0.15)] hover:shadow-[0_0_30px_rgba(142,255,127,0.25)]"
                >
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
                    SOLICITAR AHORA
                  </a>
                </Button>
                <p className="mt-4 text-[10px] text-white/20 uppercase font-bold tracking-[0.4em]">Envío prioritario a todo Chile</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden rounded-2xl sm:rounded-3xl animate-in zoom-in-95 [&>button]:hidden focus:ring-0 focus:outline-none focus-visible:ring-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden relative">
          <StandardCloseButton />

          <div className="w-full md:w-1/2 relative bg-[#0F0F0F] flex flex-col">
            <div className="relative aspect-square w-full">
              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 p-4 overflow-x-auto justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${currentImageIndex === idx ? 'border-accent' : 'border-transparent'}`}
                  >
                    <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col gap-6 md:overflow-y-auto bg-card relative">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{product.category}</span>
                {product.brand && (
                  <>
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="text-muted-foreground text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em]">{product.brand}</span>
                  </>
                )}
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-headline font-bold leading-tight uppercase tracking-tight">{product.name}</h2>
                <div className="text-2xl md:text-3xl font-headline font-extrabold text-accent tracking-tighter">{product.price}</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.2em]">Descripción</h4>
                <h5 className="text-muted-foreground text-sm leading-relaxed">{product.description}</h5>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.2em]">Compatibilidad</h4>
                  <p className="text-white text-xs font-medium">{product.compatibility}</p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.2em]">Uso Recomendado</h4>
                  <p className="text-white text-xs font-medium">{product.recommendedUse}</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-4">
              <Button asChild className="w-full glass-button bg-white text-black hover:bg-white/90 border-none h-12 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 transition-all duration-500 glass-reflective-button-edge shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  Comprar por WhatsApp
                </a>
              </Button>
              <p className="text-center text-[9px] text-white/30 uppercase font-bold tracking-[0.3em]">Envío a todo Chile · Pago Seguro</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
