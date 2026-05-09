
'use client';
import { Product } from '@/types/store';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ChevronLeft, ChevronRight, X, ShoppingCart, Box } from 'lucide-react';
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
          "max-w-[95vw] md:max-w-4xl p-0 overflow-hidden rounded-2xl sm:rounded-3xl animate-in zoom-in-95 [&>button]:hidden focus:ring-0 focus:outline-none focus-visible:ring-0 border shadow-[0_0_100px_rgba(0,0,0,0.5)]",
          isPromo 
            ? "bg-[#020306] border-white/10" 
            : "bg-background border-border"
        )}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        
        {isPromo && (
          <div className="absolute -inset-[500px] pointer-events-none opacity-20 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(142,255,127,0.15),transparent_70%)]" />
        )}

        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden relative z-10">
          <DialogClose asChild>
            <button 
              className={cn(
                "absolute top-4 right-4 z-[70] w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 focus:outline-none group border glass-reflective-button-edge",
                isPromo 
                  ? "bg-black/60 text-accent/80 hover:text-accent shadow-[0_0_15px_rgba(142,255,127,0.1)]"
                  : "bg-black/40 border-white/10 text-white/80 hover:text-white"
              )}
            >
              <X size={18} className="transition-transform duration-500 group-hover:rotate-90" />
              <span className="sr-only">Cerrar</span>
            </button>
          </DialogClose>

          <div 
            className={cn(
              "w-full md:w-1/2 relative flex flex-col items-center justify-center min-h-[350px] md:min-h-[500px] bg-transparent"
            )}
          >
            <div 
              className={cn(
                "absolute inset-0 pointer-events-none",
                isPromo 
                  ? "bg-[radial-gradient(circle_at_50%_40%,rgba(103,232,249,0.08),transparent_70%)]" 
                  : "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"
              )} 
            />
            
            <div className="relative w-full h-full p-10 flex items-center justify-center">
              {showModel && product.modelUrl ? (
                <ModelViewer src={product.modelUrl} poster={product.image} alt={product.name} />
              ) : (
                <div 
                  className={cn(
                    "relative w-full h-full flex items-center justify-center",
                    isPromo && "drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  )}
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={product.name}
                    fill
                    className={cn(
                      "object-contain p-4 md:p-10 transition-transform duration-700",
                      isPromo && "filter brightness-[1.05] contrast-[1.05]"
                    )}
                    priority
                  />
                </div>
              )}
              
              {images.length > 1 && !showModel && (
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
            
            {(images.length > 1 || product.modelUrl) && (
              <div className="absolute bottom-6 left-0 right-0 flex gap-2 px-4 overflow-x-auto justify-center z-20 scrollbar-hide">
                {product.modelUrl && (
                  <button
                    onClick={() => setShowModel(true)}
                    className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm group/btn3d",
                      showModel ? "border-accent scale-110" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <Box size={20} className={cn("transition-colors", showModel ? "text-accent" : "text-white/70")} />
                    <span className="absolute bottom-0 inset-x-0 text-[7px] font-bold text-center bg-accent/90 text-black uppercase tracking-tighter py-0.5">3D VIEW</span>
                  </button>
                )}
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setShowModel(false); setCurrentImageIndex(idx); }}
                    className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all",
                      !showModel && currentImageIndex === idx ? "border-accent scale-110" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div 
            className={cn(
              "w-full md:w-1/2 p-8 md:p-12 flex flex-col gap-8 md:overflow-y-auto relative",
              isPromo ? "bg-transparent" : "bg-card"
            )}
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <span 
                  className={cn(
                    "text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]",
                    isPromo ? "text-accent/90" : "text-accent"
                  )}
                >
                  {product.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold leading-none uppercase tracking-tight text-white">{product.name}</h2>
              </div>
              <div 
                className={cn(
                  "text-3xl md:text-4xl font-headline font-extrabold tracking-tighter leading-none",
                  isPromo ? "text-accent drop-shadow-[0_0_12px_rgba(142,255,127,0.3)]" : "text-accent"
                )}
              >
                {product.price}
              </div>
            </div>

            <div className="space-y-8 flex-1">
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.3em]">Descripción</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{product.description}</p>
              </div>

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

              {product.highlights && product.highlights.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.3em]">Incluye</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] text-white/70 font-medium">
                        <div className={cn("w-1 h-1 rounded-full", isPromo ? "bg-accent/60" : "bg-accent")} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-4">
              <Button 
                onClick={handleAddToCart}
                className={cn(
                  "w-full h-14 rounded-2xl text-base font-bold flex items-center justify-center gap-3 transition-all duration-500 glass-reflective-button-edge shadow-[0_0_25px_rgba(142,255,127,0.15)]",
                  isPromo 
                    ? "bg-accent text-black hover:scale-[1.02]" 
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                )}
              >
                <ShoppingCart size={20} />
                <span className="tracking-widest uppercase text-sm">Agregar al Carrito</span>
              </Button>
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center text-[10px] text-white/40 uppercase font-bold tracking-[0.2em] hover:text-white transition-colors"
              >
                O consulta directa por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
