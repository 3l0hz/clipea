
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
          isMobile ? "h-[200px]" : "h-fit",
          !isMobile ? "md:hover:-translate-y-1" : ""
        )}
        onClick={handleCardClick}
      >
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
          {product.bestSeller && (
            <div className={cn(
              "flex items-center gap-1 bg-[#020817]/60 backdrop-blur-md border border-[#00FF88]/30 px-2 py-0.5 rounded-full",
              isMobile ? "px-1 py-0" : ""
            )}>
              <span className={cn("text-[8px]", isMobile && "text-[7px]")}>🔥</span>
              <span className={cn("font-bold text-[#00FF88] tracking-widest uppercase", isMobile ? "text-[5px]" : "text-[8px]")}>MÁS VENDIDO</span>
            </div>
          )}
          <div className={cn(
            "flex items-center gap-1 bg-[#00D9FF]/20 backdrop-blur-md border border-[#00D9FF]/30 px-2 py-0.5 rounded-full",
            isMobile ? "px-1 py-0" : ""
          )}>
            <span className={cn("font-bold text-[#00D9FF] tracking-widest uppercase", isMobile ? "text-[5px]" : "text-[8px]")}>PROMO</span>
          </div>
        </div>

        <div className={cn(
          "relative overflow-hidden bg-transparent flex items-center justify-center transition-all",
          isMobile ? "m-1 rounded-[10px] h-[125px]" : "m-2 rounded-[12px] aspect-square"
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_70%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110 p-0.5 filter brightness-[1.03]"
            sizes="(max-width: 768px) 33vw, 33vw"
            priority={product.bestSeller}
          />
        </div>

        <div className={cn(
          "flex flex-col gap-0.5",
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
            isMobile ? "w-full gap-1.5" : "flex-row justify-between"
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
                    className="flex items-center justify-center rounded-full bg-[#020817]/60 backdrop-blur-md border border-[#00D9FF]/30 text-[#00D9FF] transition-all h-[20px] w-[20px]"
                  >
                    <Search size={9} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center rounded-full bg-[#00D9FF]/5 backdrop-blur-md border border-[#00D9FF]/20 text-[#00D9FF] transition-all h-[24px] w-[24px]"
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
                    className="flex items-center justify-center rounded-full bg-[#020817]/60 backdrop-blur-md border border-[#00D9FF]/30 text-[#00D9FF]/70 transition-all hover:text-[#00D9FF] hover:border-[#00D9FF]/60 h-10 w-10"
                  >
                    <Search size={16} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center rounded-full bg-[#00D9FF]/5 backdrop-blur-md border border-[#00D9FF]/20 text-[#00D9FF] transition-all hover:bg-[#00D9FF]/15 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] h-11 w-11"
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

  // NORMAL STYLE - PREMIUM DESKTOP RE-DESIGN
  return (
    <div 
      className={cn(
        "group promo-glass-card p-0 flex flex-col cursor-pointer transition-all duration-500 glass-reflective-edge",
        "rounded-[20px] overflow-hidden shadow-2xl border-none",
        isMobile ? "h-[200px]" : "h-[440px] w-full border border-cyan-500/10 shadow-[0_0_30px_rgba(0,229,255,0.05)] rounded-[24px]",
        !isMobile ? "md:hover:-translate-y-1 md:hover:border-cyan-500/30" : ""
      )}
      onClick={handleCardClick}
    >
      <div className={cn(
        "relative overflow-hidden flex items-center justify-center border border-white/5 bg-transparent shrink-0",
        isMobile ? "m-1 rounded-[10px] h-[100px]" : "m-1 rounded-[20px] h-[280px]"
      )}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-contain transition-transform duration-700",
            isMobile ? (isTall ? "p-3 scale-100 group-hover:scale-110" : "p-1.5 scale-110 group-hover:scale-120") : "p-1 scale-100 group-hover:scale-105"
          )}
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={product.bestSeller}
        />
        {product.bestSeller && (
          <div className="absolute top-2 left-2 z-20">
            <div className={cn(
              "flex items-center gap-1 bg-[#020817]/60 backdrop-blur-md border border-[#00FF88]/30 px-2 py-0.5 rounded-full",
              isMobile ? "px-1 py-0" : ""
            )}>
              <span className={cn("font-bold text-[#00FF88] tracking-widest uppercase", isMobile ? "text-[5px]" : "text-[8px]")}>TOP</span>
            </div>
          </div>
        )}
      </div>

      <div className={cn(
        "flex flex-col flex-1",
        isMobile ? "px-1 pb-2 pt-0.5 gap-1" : "px-4 pb-6 pt-2"
      )}>
        {!isMobile ? (
          <div className="flex flex-col flex-1 items-center space-y-3">
            <div className="space-y-2 text-center">
              <h3 className="font-headline font-bold text-white uppercase leading-tight tracking-tight line-clamp-2 text-[17px] px-2">
                {product.name}
              </h3>
              <div className="font-headline font-black text-white tracking-tighter leading-none text-[22px]">
                {product.price}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 w-full mt-auto">
              <button
                onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
                className="flex items-center justify-center rounded-full bg-[#020817]/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400/70 transition-all hover:bg-cyan-500/10 hover:text-cyan-400 h-10 w-10 shadow-[0_0_15px_rgba(0,217,255,0.1)]"
              >
                <Search size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center rounded-full bg-cyan-500/5 backdrop-blur-md border border-cyan-500/20 text-cyan-400 transition-all hover:bg-cyan-500/15 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] h-11 w-11"
              >
                <ShoppingCart size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ) : (
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
                  className="flex items-center justify-center rounded-full bg-[#020817]/60 backdrop-blur-md border border-[#00D9FF]/30 text-[#00D9FF]/70 h-[20px] w-[20px]"
                >
                  <Search size={9} strokeWidth={2.5} />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center rounded-full bg-[#00D9FF]/5 backdrop-blur-md border border-[#00D9FF]/20 text-[#00D9FF] h-[24px] w-[24px]"
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
