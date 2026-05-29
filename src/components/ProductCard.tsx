
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { ShoppingCart, Search } from 'lucide-react';
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
  const [isTall, setIsTall] = useState(false);
  
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
    if (price === '$34.990') return '$49.990';
    if (price === '$54.990') return '$69.990';
    if (price === '$69.990') return '$89.990';
    if (price === '$82.990') return '$112.990';
    return '$149.990';
  };

  const isPromo = isPremium || product.mainCategory === 'PROMO';

  // PROMO STYLE
  if (isPromo) {
    return (
      <div 
        className={cn(
          "group relative overflow-hidden flex flex-col cursor-pointer premium-mobile-card border-none rounded-[20px] shadow-2xl transition-all duration-300",
          isMobile ? "h-[200px]" : "h-fit",
          !isMobile ? "md:hover:-translate-y-1" : ""
        )}
        onClick={handleCardClick}
      >
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
          {product.bestSeller && (
            <div className={cn(
              "flex items-center gap-1 bg-black/60 backdrop-blur-md border border-premium-green/30 px-2 py-0.5 rounded-full",
              isMobile ? "px-1 py-0" : ""
            )}>
              <span className={cn("text-[8px]", isMobile && "text-[7px]")}>🔥</span>
              <span className={cn("font-bold text-white tracking-widest uppercase", isMobile ? "text-[5px]" : "text-[8px]")}>MÁS VENDIDO</span>
            </div>
          )}
          <div className={cn(
            "flex items-center gap-1 bg-accent/20 backdrop-blur-md border border-accent/30 px-2 py-0.5 rounded-full",
            isMobile ? "px-1 py-0" : ""
          )}>
            <span className={cn("font-bold text-accent tracking-widest uppercase", isMobile ? "text-[5px]" : "text-[8px]")}>PROMO</span>
          </div>
        </div>

        <div className={cn(
          "relative overflow-hidden bg-transparent flex items-center justify-center transition-all",
          isMobile ? "m-1 rounded-[10px] h-[100px]" : "m-2 rounded-[12px] aspect-square"
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110 p-0.5 filter brightness-[1.03] contrast-[1.01] saturate-[1.05]"
            sizes="(max-width: 768px) 33vw, 33vw"
            priority={product.bestSeller}
          />
        </div>

        <div className={cn(
          "flex flex-col gap-1",
          isMobile ? "px-1 pb-2 pt-0" : "px-3 pb-4 pt-0"
        )}>
          <div className="space-y-0 text-center">
            <h3 className={cn(
              "font-headline font-bold text-white leading-tight tracking-tight uppercase line-clamp-1",
              isMobile ? "text-[8px]" : "text-[14px]"
            )}>
              {product.name}
            </h3>
          </div>
          
          <div className={cn(
            "flex flex-col items-center justify-center mt-auto",
            isMobile ? "w-full gap-2" : "flex-row justify-between"
          )}>
            {isMobile ? (
              <>
                <div className="flex flex-col items-center leading-none">
                  <span className="font-headline font-extrabold text-white tracking-tighter text-[10px]">
                    {product.price}
                  </span>
                  <span className="text-[5px] font-bold text-white/20 uppercase line-through mt-0.5">
                    {getStrikethroughPrice(product.price)}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-6 w-full px-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
                    className="flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/30 text-cyan-400 transition-all duration-300 h-[20px] w-[20px]"
                  >
                    <Search size={9} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center rounded-full bg-accent/5 backdrop-blur-md border border-accent/20 text-accent transition-all duration-300 h-[24px] w-[24px]"
                  >
                    <ShoppingCart size={11} strokeWidth={2.5} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-x-1.5">
                  <span className="font-headline font-extrabold text-white tracking-tighter leading-none text-[18px]">
                    {product.price}
                  </span>
                  <span className="font-bold text-white/20 uppercase line-through leading-none text-[10px]">
                    {getStrikethroughPrice(product.price)}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
                    className="flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/30 text-cyan-400 transition-all duration-500 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] h-10 w-10"
                  >
                    <Search size={16} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center rounded-full bg-accent/5 backdrop-blur-md border border-accent/20 text-accent transition-all duration-500 hover:bg-accent/15 hover:shadow-[0_0_20px_rgba(142,255,127,0.3)] hover:scale-105 active:scale-95 h-11 w-11"
                  >
                    <ShoppingCart size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // NORMAL STYLE
  return (
    <div 
      className={cn(
        "group promo-glass-card p-0 flex flex-col cursor-pointer transition-all duration-500 glass-reflective-edge",
        "rounded-[20px] overflow-hidden shadow-2xl border-none bg-black/40",
        isMobile ? "h-[200px]" : "h-[420px]",
        !isMobile ? "md:hover:-translate-y-1" : ""
      )}
      onClick={handleCardClick}
    >
      <div className="shine-layer" />

      <div className={cn(
        "relative overflow-hidden flex items-center justify-center border border-white/5 bg-transparent shrink-0",
        isMobile ? "m-1 rounded-[10px] h-[100px]" : "m-2 rounded-[12px] h-[260px]"
      )}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.08),transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-contain transition-transform duration-700",
            isTall 
              ? "scale-[1.03] group-hover:scale-[1.1] p-3"
              : "scale-[1.12] group-hover:scale-[1.22] p-1.5"
          )}
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            const ratio = img.naturalHeight / img.naturalWidth;
            if (ratio > 1.1 || ratio < 0.7) {
              setIsTall(true);
            }
          }}
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={product.bestSeller}
        />
        {product.bestSeller && (
          <div className="absolute top-2 left-2 z-20">
            <div className={cn(
              "flex items-center gap-1 bg-black/60 backdrop-blur-md border border-premium-green/30 px-2 py-0.5 rounded-full",
              isMobile ? "px-1 py-0" : ""
            )}>
              <span className={cn("font-bold text-white tracking-widest uppercase", isMobile ? "text-[5px]" : "text-[8px]")}>TOP</span>
            </div>
          </div>
        )}
      </div>

      <div className={cn(
        "flex flex-col flex-1",
        isMobile ? "px-1 pb-2 pt-0.5 gap-1" : "px-4 pb-4 pt-2"
      )}>
        {!isMobile ? (
          <div className="flex flex-col flex-1">
            <div className="space-y-1.5 text-center mb-auto">
              <h3 className="font-headline font-bold text-white uppercase leading-tight tracking-tight line-clamp-2 text-[14px]">
                {product.name}
              </h3>
              <div className="font-headline font-extrabold text-white tracking-tighter leading-none text-[18px]">
                {product.price}
              </div>
            </div>

            <div className="flex items-center justify-between w-full mt-4">
              <button
                onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
                className="flex items-center justify-center rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/60 transition-all duration-300 hover:bg-white/15 hover:text-white hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] h-10 w-10"
              >
                <Search size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center rounded-full bg-accent/5 backdrop-blur-md border border-accent/20 text-accent transition-all duration-500 hover:bg-accent/15 hover:shadow-[0_0_20px_rgba(142,255,127,0.3)] hover:scale-105 active:scale-95 h-11 w-11"
              >
                <ShoppingCart size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ) : (
          /* Mobile structure kept intact */
          <>
            <div className="space-y-0.5 text-center">
              <h3 className="font-headline font-bold text-white uppercase leading-tight tracking-tight line-clamp-1 text-[8px]">
                {product.name}
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center mt-auto w-full gap-2">
              <div className="font-headline font-extrabold text-white tracking-tighter text-[10px] mb-0.5">
                {product.price}
              </div>
              <div className="flex items-center justify-center gap-6 w-full px-2">
                <button
                  onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
                  className="flex items-center justify-center rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/60 transition-all duration-300 h-[20px] w-[20px]"
                >
                  <Search size={9} strokeWidth={2.5} />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center rounded-full bg-accent/5 backdrop-blur-md border border-accent/20 text-accent transition-all duration-300 h-[24px] w-[24px]"
                >
                  <ShoppingCart size={11} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
