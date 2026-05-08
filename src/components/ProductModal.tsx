
'use client';
import { Product } from '@/types/store';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

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
              <Button asChild className="w-full bg-white text-black hover:bg-white/90 font-bold h-12 rounded-xl">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
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
