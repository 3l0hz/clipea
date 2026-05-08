'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  return (
    <div className={cn(
      "group relative flex flex-col h-full",
      // Mobile: Animated glow card | Desktop: Original premium-card
      "mobile-glow-card md:premium-card md:rounded-xl md:border md:border-border"
    )}>
      {/* Internal layout for mobile border effect, unwrapped on desktop */}
      <div className="mobile-glow-card-inner md:contents">
        
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden bg-[#050505] md:bg-[#151515] p-6 md:p-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110 p-4 md:p-0"
            sizes="(max-width: 768px) 80vw, 33vw"
          />
          
          {/* Best Seller Badge */}
          {product.bestSeller && (
            <Badge className="absolute top-4 left-4 bg-accent text-black font-bold uppercase tracking-tighter text-[10px] rounded-full px-3 py-1 md:top-3 md:left-3 md:rounded-md md:px-2 md:py-0.5">
              🔥 MÁS VENDIDO
            </Badge>
          )}

          {/* Mobile Category Badge */}
          <div className="absolute top-4 right-4 md:hidden">
             <Badge variant="outline" className="border-accent/30 text-accent text-[9px] uppercase tracking-widest bg-black/40 backdrop-blur-sm rounded-full px-3">
                {product.category}
             </Badge>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-4 flex flex-col flex-1 gap-4 md:gap-2 bg-gradient-to-b from-[#050505] to-black md:bg-transparent">
          {/* Desktop Categories */}
          <div className="hidden md:flex justify-between items-start gap-2">
            <span className="text-[10px] text-accent font-bold uppercase tracking-wider">
              {product.category}
            </span>
            {product.brand && (
              <span className="text-[10px] text-muted-foreground uppercase">
                {product.brand}
              </span>
            )}
          </div>
          
          {/* Name & Short Desc */}
          <div className="space-y-1">
            <h3 className="font-headline font-bold text-white text-xl md:text-lg line-clamp-2 leading-tight tracking-tight">
              {product.name}
            </h3>
            <p className="text-[11px] text-muted-foreground line-clamp-1 md:hidden opacity-70">
              {product.description}
            </p>
          </div>
          
          {/* Price & Actions */}
          <div className="mt-auto pt-2 flex flex-col gap-5 md:gap-3">
            <div className="text-3xl md:text-2xl font-headline font-bold text-white tracking-tighter">
              {product.price}
            </div>
            
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-2">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 font-bold rounded-2xl md:rounded-md md:h-9 md:text-xs"
                onClick={() => onViewDetails(product)}
              >
                Ver Detalles
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/20 text-white hover:bg-white/5 font-bold rounded-2xl md:rounded-md md:h-9 md:text-xs md:border-input"
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle size={18} className="md:size-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech Reflective Points (Mobile Only) */}
      <div className="absolute top-4 left-4 w-1 h-1 bg-white/20 rounded-full blur-[1px] md:hidden" />
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-accent/20 rounded-full blur-[1.5px] md:hidden" />
    </div>
  );
};
