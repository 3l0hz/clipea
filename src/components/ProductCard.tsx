
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
  isExperimental?: boolean;
  isExperimentalDesktop?: boolean;
}

export const ProductCard = ({ product, onViewDetails, isExperimental, isExperimentalDesktop }: ProductCardProps) => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  // LAB: Mobile Experimental Style
  if (isExperimental) {
    return (
      <div className="group experimental-card p-0 h-full flex flex-col">
        {/* Badges Layout */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.bestSeller && (
            <div className="flex items-center gap-1.5 bg-[#111111] border border-white/10 px-3 py-1.5 rounded-full">
              <span className="text-xs">🔥</span>
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">RECOMENDADO</span>
            </div>
          )}
          <div className="bg-[#111111] border border-white/10 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">{product.category}</span>
          </div>
        </div>

        {/* Image Container with Spotlight */}
        <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-[40px] bg-gradient-to-b from-[#121212] to-[#0A0A0A] flex items-center justify-center">
          {/* Spotlight Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105 p-6"
            sizes="(max-width: 768px) 80vw, 33vw"
          />
        </div>

        {/* Content Section */}
        <div className="px-5 pb-6 pt-4 flex flex-col flex-1 gap-2">
          <div className="space-y-1">
            <h3 className="font-headline font-bold text-white text-lg leading-tight tracking-tight uppercase">
              {product.name}
            </h3>
            <p className="text-[14px] text-[#B3B3B3] line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="mt-auto pt-4 flex flex-col gap-5">
            <div className="text-3xl font-headline font-extrabold text-white tracking-tighter">
              {product.price}
            </div>
            
            <div className="flex flex-col gap-3">
              <Button
                variant="default"
                className="w-full glass-button bg-black/20 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] font-bold h-12 rounded-2xl flex items-center justify-center gap-2 transition-all duration-500"
                onClick={() => onViewDetails(product)}
              >
                <ShoppingCart size={20} />
                <span className="uppercase tracking-tighter">AGREGAR</span>
              </Button>
              
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 text-accent hover:text-accent/80 transition-colors py-2 group/wsap"
              >
                <MessageCircle size={18} className="group-hover/wsap:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">CONSULTA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Premium Style (Used for Normal, Promos and PRUEBA DESKTOP base)
  return (
    <div className={cn(
      "group relative flex flex-col h-full",
      "premium-mobile-card",
      !isExperimentalDesktop && "md:bg-card md:border md:border-border md:rounded-xl md:shadow-none md:before:hidden md:after:hidden md:hover:border-accent/30 md:transition-all md:duration-300",
      isExperimentalDesktop && "md:before:block md:after:block md:border-none md:rounded-[24px] md:shadow-2xl"
    )}>
      
      {/* Image Section - Cinematic Format in Mobile */}
      <div className={cn(
        "relative aspect-[4/5] md:aspect-square overflow-hidden flex items-center justify-center p-4 md:p-0 bg-transparent rounded-[52px]",
        !isExperimentalDesktop && "md:rounded-[52px]"
      )}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110 p-2 md:p-4"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
        
        {/* Best Seller Badge - Glassmorphism in Mobile / Minimalist in Desktop */}
        {product.bestSeller && (
          <Badge className={cn(
            "absolute top-4 left-4 z-10 uppercase tracking-[0.12em] text-[9px] font-bold px-2.5 py-1 rounded-lg transition-none",
            "bg-black/40 backdrop-blur-md border border-accent/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-t-white/5 border-l-white/5",
            !isExperimentalDesktop && "md:bg-secondary md:backdrop-blur-none md:border-white/10 md:text-white/90 md:shadow-none md:border-t-0 md:border-l-0 md:tracking-widest"
          )}>
            <span className="mr-1.5 opacity-90">🔥</span> MÁS VENDIDO
          </Badge>
        )}
      </div>
      
      {/* Content Section - Compact in Mobile */}
      <div className={cn(
        "px-5 pb-6 pt-0 flex flex-col flex-1 gap-1 md:p-4 md:gap-2",
        isExperimentalDesktop && "md:pt-0"
      )}>
        {/* Category Label */}
        <div className="flex justify-between items-start gap-2 mb-1">
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-wider text-accent",
            !isExperimentalDesktop && "md:text-muted-foreground md:font-medium md:tracking-widest"
          )}>
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
          <p className="hidden md:block text-[11px] text-muted-foreground line-clamp-1 opacity-70">
            {product.description}
          </p>
        </div>
        
        {/* Price & Actions */}
        <div className="mt-auto pt-3 flex flex-col gap-4 md:gap-3">
          <div className="text-2xl md:text-xl font-headline font-bold text-white tracking-tighter">
            {product.price}
          </div>
          
          <div className={cn(
            "flex flex-col gap-2 md:grid md:grid-cols-2",
            isExperimentalDesktop && "md:flex md:flex-col"
          )}>
            <Button
              variant="default"
              size="lg"
              className={cn(
                "w-full glass-button bg-black/20 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] font-bold rounded-2xl transition-all duration-500",
                !isExperimentalDesktop && "md:h-10 md:text-xs"
              )}
              onClick={() => onViewDetails(product)}
            >
              <ShoppingCart size={18} className="md:size-4" />
              Agregar
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "w-full border-accent/20 text-accent hover:bg-accent/10 hover:text-accent font-bold rounded-2xl transition-all duration-500",
                !isExperimentalDesktop && "md:h-10 md:text-xs"
              )}
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle size={18} className="md:size-3.5" />
                Consulta
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
