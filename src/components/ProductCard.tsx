
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ShoppingCart } from 'lucide-react';
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

        <div className={cn("flex flex-col mt-0.5", isMobile ? "gap-1" : "gap-1.5")}>
          <div className={cn(
            "font-headline font-extrabold text-white tracking-tighter leading-none",
            isMobile ? "text-[14px]" : "text-[18px]"
          )}>
            {product.price}
          </div>
          
          <div className="flex flex-col gap-1">
            <Button
              className={cn(
                "w-full bg-white/[0.05] text-white font-bold flex items-center justify-center gap-2 border border-white/10 relative overflow-hidden backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.1] active:scale-[0.98]",
                isMobile ? "h-7 rounded-xl" : "h-11 rounded-2xl"
              )}
              onClick={handleAddToCart}
            >
              <ShoppingCart size={isMobile ? 10 : 14} className="relative z-20" />
              <span className={cn(
                "uppercase tracking-widest relative z-20 font-bold",
                isMobile ? "text-[7px]" : "text-[10px]"
              )}>
                AGREGAR
              </span>
            </Button>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "flex items-center justify-center gap-1 text-white/30 hover:text-accent transition-colors",
                isMobile ? "text-[6px]" : "text-[8px]"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-bold uppercase tracking-wider">CONSULTAR</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
