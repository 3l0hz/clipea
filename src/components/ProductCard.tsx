
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { ShoppingCart, Search, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  isExperimental?: boolean;
  isPremium?: boolean;
}

export const ProductCard = ({ product, onViewDetails, isExperimental, isPremium }: ProductCardProps) => {
  const isMobile = useIsMobile();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleCardClick = () => {
    onViewDetails(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      description: "Agregado al carrito",
    });
  };

  const getStrikethroughPrice = (price: string) => {
    const val = parseInt(price.replace(/[^0-9]/g, ''));
    return `$${(val * 1.4).toLocaleString('es-CL')}`;
  };

  const isPromo = isPremium || product.mainCategory === 'PROMO';

  // PROMO STYLE
  if (isPromo) {
    return (
      <div 
        className={cn(
          "group relative overflow-hidden flex flex-col cursor-pointer premium-mobile-card border-none rounded-[20px] shadow-2xl transition-all duration-300",
          "h-full w-full",
          !isMobile ? "md:hover:-translate-y-1" : ""
        )}
        onClick={handleCardClick}
      >
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
          {product.bestSeller && (
            <div className="flex items-center gap-1 bg-[#020817]/60 backdrop-blur-md border border-[#00FF88]/30 px-2 py-0.5 rounded-full">
              <span className="text-[9px]">🔥</span>
              <span className="font-bold text-[#00FF88] tracking-widest uppercase text-[8px]">MÁS VENDIDO</span>
            </div>
          )}
          <div className="flex items-center gap-1 bg-[#00D9FF]/20 backdrop-blur-md border border-[#00D9FF]/30 px-2 py-0.5 rounded-full w-fit">
            <span className="font-bold text-[#00D9FF] tracking-widest uppercase text-[8px]">PROMO</span>
          </div>
        </div>

        <div className="relative overflow-hidden bg-transparent flex items-center justify-center transition-all m-2 rounded-[15px] aspect-square">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_70%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110 p-2 filter brightness-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={product.bestSeller}
          />
        </div>

        <div className="flex flex-col flex-1 px-4 pb-5 pt-1 gap-3">
          <div className="space-y-0 text-center">
            <h3 className="font-headline font-bold text-white leading-tight tracking-tight uppercase line-clamp-2 text-[14px] sm:text-[16px]">
              {product.name}
            </h3>
          </div>
          
          <div className="flex items-end justify-between mt-auto w-full">
            <div className="flex flex-col leading-none">
              <span className="font-headline font-black text-white tracking-tighter text-[18px] sm:text-[22px]">
                {product.price}
              </span>
              <span className="text-[10px] font-bold text-white/20 uppercase line-through mt-0.5">
                {getStrikethroughPrice(product.price)}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
                className="flex items-center justify-center rounded-full bg-[#020817]/60 backdrop-blur-md border border-[#00D9FF]/30 text-[#00D9FF]/70 transition-all hover:text-[#00D9FF] hover:border-[#00D9FF]/60 h-9 w-9 sm:h-10 sm:w-10"
              >
                <Search size={isMobile ? 14 : 16} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center rounded-full bg-[#00D9FF]/5 backdrop-blur-md border border-[#00D9FF]/20 text-[#00D9FF] transition-all hover:bg-[#00D9FF]/15 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] h-10 w-10 sm:h-11 sm:w-11"
              >
                <ShoppingCart size={isMobile ? 16 : 18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // NORMAL STYLE: Compact, Square & Premium
  return (
    <div 
      className={cn(
        "group bg-[#030d1b] flex flex-col cursor-pointer transition-all duration-500 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,217,255,0.05)]",
        "rounded-[24px] overflow-hidden",
        isMobile ? "h-auto" : "h-auto w-full",
        !isMobile ? "md:hover:-translate-y-1 md:hover:border-cyan-500/40" : ""
      )}
      onClick={handleCardClick}
    >
      {/* Image Container: ~65% height, Dominant */}
      <div className={cn(
        "relative overflow-hidden flex items-center justify-center bg-transparent shrink-0",
        isMobile ? "aspect-square m-1.5 rounded-[18px]" : "aspect-square m-2 rounded-[20px]"
      )}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-1.5 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={product.bestSeller}
        />
        {product.bestSeller && (
          <div className="absolute top-2 left-2 z-20">
            <div className="bg-[#020817]/60 backdrop-blur-md border border-[#00FF88]/30 px-1.5 py-0.5 rounded-full flex items-center gap-1">
              <Zap size={8} className="text-[#00FF88] fill-current" />
              <span className="font-bold text-[#00FF88] tracking-widest uppercase text-[8px]">TOP</span>
            </div>
          </div>
        )}
      </div>

      {/* Info Container: Title, Price & Buttons */}
      <div className={cn(
        "flex flex-col px-4 pb-4 pt-1 gap-2 flex-1 justify-between",
        isMobile ? "px-3 pb-3 pt-0.5 gap-1.5" : ""
      )}>
        {/* Title: Centered, max 2 lines */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className={cn(
            "font-headline font-bold text-white uppercase leading-tight tracking-tight text-center line-clamp-2",
            isMobile ? "text-[10px]" : "text-[15px]"
          )}>
            {product.name}
          </h3>
        </div>

        {/* Bottom Section: Price (Left) + Buttons (Right) */}
        <div className="flex items-end justify-between w-full pt-1">
          <div className={cn(
            "font-headline font-black text-white tracking-tighter leading-none",
            isMobile ? "text-[14px]" : "text-[20px]"
          )}>
            {product.price}
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
              className={cn(
                "flex items-center justify-center rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 transition-all hover:bg-cyan-500/10",
                isMobile ? "h-7 w-7" : "h-9 w-9"
              )}
            >
              <Search size={isMobile ? 12 : 16} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleAddToCart}
              className={cn(
                "flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]",
                isMobile ? "h-8 w-8" : "h-10 w-10"
              )}
            >
              <ShoppingCart size={isMobile ? 14 : 18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
