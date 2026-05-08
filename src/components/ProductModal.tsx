'use client';
import { Product } from '@/types/store';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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

  const images = product.images || [product.image];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden rounded-2xl sm:rounded-3xl animate-in zoom-in-95">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Gallery - Left (Desktop) / Top (Mobile) */}
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
            {/* Thumbnails */}
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

          {/* Info - Right (Desktop) / Bottom (Mobile) */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col gap-6 md:overflow-y-auto bg-card">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">{product.category}</span>
                {product.brand && <span className="text-muted-foreground text-xs uppercase">{product.brand}</span>}
              </div>
              <h2 className="text-3xl font-headline font-bold leading-tight">{product.name}</h2>
              <div className="text-3xl font-headline font-bold text-accent">{product.price}</div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-tighter">Descripción</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Compatibilidad</h4>
                  <p className="text-white text-xs">{product.compatibility}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Uso Recomendado</h4>
                  <p className="text-white text-xs">{product.recommendedUse}</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 flex flex-col gap-3">
              <Button asChild className="w-full bg-white text-black hover:bg-white/90 font-bold h-12 rounded-xl flex items-center justify-center gap-2">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  Comprar por WhatsApp
                </a>
              </Button>
              <p className="text-center text-[10px] text-muted-foreground">Envío a todo Chile · Pago Seguro</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
