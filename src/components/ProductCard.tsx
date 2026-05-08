'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { MessageCircle, ShoppingCart } from 'lucide-react';
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
      "premium-mobile-card md:bg-card md:border md:border-border md:rounded-xl md:shadow-none md:before:hidden md:after:hidden md:hover:border-accent/30 md:transition-all md:duration-300"
    )}>
      
      {/* Image Section - Cinematic Format in Mobile */}
      <div className="relative aspect-[4/5] md:aspect-square overflow-hidden flex items-center justify-center p-4 md:p-0 bg-transparent rounded-[32px] md:rounded-none">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110 p-2 md:p-4"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
        
        {/* Best Seller Badge - Desktop Only or subtle in Mobile */}
        {product.bestSeller && (
          <Badge className="absolute top-3 left-3 bg-accent text-black font-bold uppercase tracking-tighter text-[10px] rounded-md px-2 py-0.5 z-10">
            🔥 MÁS VENDIDO
          </Badge>
        )}
      </div>
      
      {/* Content Section - Compact in Mobile */}
      <div className="px-5 pb-6 pt-0 flex flex-col flex-1 gap-1 md:p-4 md:gap-2">
        {/* Category Label - Now below image for clean look */}
        <div className="flex justify-between items-start gap-2 mb-1">
          <span className="text-[10px] text-accent font-bold uppercase tracking-wider">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-[10px] text-muted-foreground uppercase hidden md:inline">
              {product.brand}
            </span>
          )}
        </div>
        
        {/* Name & Price */}
        <div className="space-y-1">
          <h3 className="font-headline font-bold text-white text-base md:text-lg line-clamp-2 leading-tight tracking-tight">
            {product.name}
          </h3>
          {/* Description - Hidden in Mobile for cleaner layout, visible in Desktop */}
          <p className="hidden md:block text-[11px] text-muted-foreground line-clamp-1 opacity-70">
            {product.description}
          </p>
        </div>
        
        {/* Price & Actions */}
        <div className="mt-auto pt-3 flex flex-col gap-4 md:gap-3">
          <div className="text-2xl md:text-xl font-headline font-bold text-white tracking-tighter">
            {product.price}
          </div>
          
          <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
            <Button
              variant="default"
              size="lg"
              className="w-full glass-button font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all md:h-10 md:text-xs"
              onClick={() => onViewDetails(product)}
            >
              <ShoppingCart size={18} className="md:size-4" />
              Agregar
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white/10 text-white hover:bg-white/5 font-bold rounded-2xl md:rounded-md md:h-10 md:text-xs md:border-input"
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle size={18} className="md:size-3.5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Tech Subtle Points - Decorative */}
      <div className="absolute top-2 right-6 w-1 h-1 bg-accent/20 rounded-full blur-[1px] md:hidden" />
      <div className="absolute bottom-20 left-2 w-1 h-1 bg-white/10 rounded-full blur-[1px] md:hidden" />
    </div>
  );
};