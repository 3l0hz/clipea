'use client';
import { Product } from '@/types/store';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!product) return null;

  const images = product.images || [product.image];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-4xl p-0 bg-background border-border overflow-hidden rounded-2xl sm:rounded-3xl animate-in zoom-in-95 [&>button]:hidden focus:ring-0 focus:outline-none focus-visible:ring-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden relative">
          {/* Close Button */}
          <DialogClose asChild>
            <button className="absolute top-4 right-4 z-[70] w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/20 hover:text-white focus:outline-none group">
              <X size={20} className="transition-transform duration-500 group-hover:rotate-90" />
              <span className="sr-only">Cerrar</span>
            </button>
          </DialogClose>

          {/* Left Side: Image Section */}
          <div className="w-full md:w-1/2 relative bg-[#0a0a0a] flex flex-col items-center justify-center min-h-[300px] md:min-h-[500px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
            <div className="relative w-full h-full p-8 flex items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-4 md:p-8"
                priority
              />
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors z-20">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors z-20">
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail selector if multiple images */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex gap-2 px-4 overflow-x-auto justify-center z-20">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all",
                      currentImageIndex === idx ? "border-accent scale-110" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col gap-8 md:overflow-y-auto bg-card relative">
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em]">{product.category}</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold leading-none uppercase tracking-tight text-white">{product.name}</h2>
              </div>
              <div className="text-3xl md:text-4xl font-headline font-extrabold text-accent tracking-tighter leading-none">
                {product.price}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.3em]">Descripción</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{product.description}</p>
              </div>

              {/* Technical Details Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.3em]">Compatibilidad</h4>
                  <p className="text-white text-xs md:text-sm font-bold tracking-tight">{product.compatibility}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.3em]">Uso Recomendado</h4>
                  <p className="text-white text-xs md:text-sm font-bold tracking-tight">{product.recommendedUse}</p>
                </div>
              </div>

              {/* Highlights for Promo Products */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.3em]">Incluye</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-5">
              <Button asChild className="w-full glass-button bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/30 h-14 rounded-2xl text-base font-bold flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <WhatsAppIcon className="w-5 h-5" />
                  <span className="tracking-widest uppercase text-sm">Comprar por WhatsApp</span>
                </a>
              </Button>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <p className="text-[9px] text-white uppercase font-bold tracking-[0.4em]">Envío a todo Chile · Pago Seguro</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
