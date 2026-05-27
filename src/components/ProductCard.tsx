
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { WHATSAPP_NUMBER } from '@/constants/data';
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
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de clipea.`;

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

  // NEW PROMO STYLE (Previous Normal - Dynamic/Impactful)
  if (isPromo) {
    return (
      <div 
        className={cn(
          "group relative overflow-hidden flex flex-col cursor-pointer premium-mobile-card border-none rounded-[20px] shadow-2xl h-fit transition-all duration-300",
          !isMobile ? "md:hover:-translate-y-1" : ""
        )}
        onClick={handleCardClick}
      >
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
          {product.bestSeller && (
            <div className={cn(
              "flex items-center gap-1 bg-black/60 backdrop-blur-md border border-premium-green/30 px-2 py-0.5 rounded-full",
              isMobile ? "px-1.5 py-0" : ""
            )}>
              <span className={cn("text-[10px]", isMobile && "text-[8px]")}>🔥</span>
              <span className={cn("font-bold text-white tracking-widest uppercase", isMobile ? "text-[6px]" : "text-[8px]")}>MÁS VENDIDO</span>
            </div>
          )}
          <div className={cn(
            "flex items-center gap-1 bg-accent/20 backdrop-blur-md border border-accent/30 px-2 py-0.5 rounded-full",
            isMobile ? "px-1.5 py-0" : ""
          )}>
            <span className={cn("font-bold text-accent tracking-widest uppercase", isMobile ? "text-[6px]" : "text-[8px]")}>PROMO</span>
          </div>
        </div>

        <div className={cn(
          "relative aspect-square overflow-hidden bg-transparent flex items-center justify-center transition-all",
          isMobile ? "m-1.5 rounded-[12px]" : "m-2 rounded-[12px]"
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
          isMobile ? "px-2 pb-2 pt-0 gap-0.5" : "px-3 pb-3 pt-0 gap-1"
        )}>
          <div className="space-y-0">
            <h3 className={cn(
              "font-headline font-bold text-white leading-tight tracking-tight uppercase line-clamp-1",
              isMobile ? "text-[10px]" : "text-[14px]"
            )}>
              {product.name}
            </h3>
            <p className={cn(
              "text-[#B3B3B3] line-clamp-1 leading-tight opacity-70",
              isMobile ? "text-[8px]" : "text-[10px]"
            )}>
              {product.description}
            </p>
          </div>
          
          <div className={cn("flex flex-col mt-0.5", isMobile ? "gap-1" : "gap-1.5")}>
            <div className="flex flex-wrap items-center gap-x-2">
              <span className={cn(
                "font-headline font-extrabold text-white tracking-tighter leading-none",
                isMobile ? "text-[14px]" : "text-[18px]"
              )}>
                {product.price}
              </span>
              <span className={cn(
                "font-bold text-white/20 uppercase line-through leading-none",
                isMobile ? "text-[8px]" : "text-[10px]"
              )}>
                {getStrikethroughPrice(product.price)}
              </span>
            </div>
            
            <div className={cn("flex flex-col", isMobile ? "gap-1" : "gap-1.5")}>
              <Button
                className={cn(
                  "w-full bg-black/40 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-black/60 active:scale-95 border border-white/5 backdrop-blur-md",
                  isMobile ? "h-7 rounded-xl gap-1" : "h-11 rounded-2xl gap-2"
                )}
                onClick={handleAddToCart}
              >
                <ShoppingCart size={isMobile ? 10 : 14} className="relative z-20" />
                <span className={cn(
                  "uppercase tracking-widest relative z-20 font-bold",
                  isMobile ? "text-[7px]" : "text-[10px]"
                )}>AGREGAR</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // NEW NORMAL STYLE (Previous Promo - Clean/Elegant)
  return (
    <div 
      className={cn(
        "group promo-glass-card p-0 flex flex-col cursor-pointer transition-all duration-500 glass-reflective-edge",
        "rounded-[20px] overflow-hidden shadow-2xl h-fit border-none bg-black/40",
        !isMobile ? "md:hover:-translate-y-1" : ""
      )}
      onClick={handleCardClick}
    >
      <div className="shine-layer" />

      <div className={cn(
        "relative overflow-hidden flex items-center justify-center border border-white/5 bg-transparent aspect-square",
        isMobile ? "m-1.5 rounded-[12px]" : "m-2 rounded-[12px]"
      )}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.08),transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-contain transition-transform duration-700 group-hover:scale-110",
            isMobile ? "p-1.5" : "p-2"
          )}
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={product.bestSeller}
        />
        {product.bestSeller && (
          <div className="absolute top-2 left-2 z-20">
            <div className={cn(
              "flex items-center gap-1 bg-black/60 backdrop-blur-md border border-premium-green/30 px-2 py-0.5 rounded-full",
              isMobile ? "px-1.5 py-0" : ""
            )}>
              <span className={cn("font-bold text-white tracking-widest uppercase", isMobile ? "text-[6px]" : "text-[8px]")}>TOP</span>
            </div>
          </div>
        )}
      </div>

      <div className={cn(
        "flex flex-col flex-1 gap-1",
        isMobile ? "px-2 pb-2 pt-0.5" : "px-3 pb-3 pt-0.5"
      )}>
        <div className="space-y-0">
          <h3 className={cn(
            "font-headline font-bold text-white uppercase leading-tight tracking-tight line-clamp-1",
            isMobile ? "text-[10px]" : "text-[14px]"
          )}>
            {product.name}
          </h3>
          <p className={cn(
            "text-white/40 line-clamp-1 leading-tight font-medium",
            isMobile ? "text-[8px]" : "text-[10px]"
          )}>
            {product.description}
          </p>
        </div>

        <div className="flex items-end justify-between mt-auto">
          <div className={cn(
            "font-headline font-extrabold text-white tracking-tighter leading-none mb-1",
            isMobile ? "text-[14px]" : "text-[18px]"
          )}>
            {product.price}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
              className={cn(
                "flex items-center justify-center rounded-full bg-white/[0.03] backdrop-blur-md border border-white/5 text-white/20 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20",
                isMobile ? "h-7 w-7" : "h-10 w-10"
              )}
            >
              <Search size={isMobile ? 12 : 16} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleAddToCart}
              className={cn(
                "flex items-center justify-center rounded-2xl bg-accent/5 backdrop-blur-md border border-accent/20 text-accent transition-all duration-500 hover:bg-accent/15 hover:shadow-[0_0_20px_rgba(142,255,127,0.25)] hover:scale-105 active:scale-95",
                isMobile ? "h-8 w-8" : "h-11 w-11"
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
