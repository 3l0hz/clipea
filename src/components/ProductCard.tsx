'use client';
import Image from 'next/image';
import { Product } from '@/types/store';
import { ShoppingCart, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  isExperimental?: boolean;
  isPremium?: boolean;
}

const BTN_SEARCH =
  'flex items-center justify-center rounded-full bg-[#020817]/50 backdrop-blur-md border border-[#00D9FF]/25 text-[#00D9FF]/80 transition-all shadow-[0_0_6px_rgba(0,217,255,0.06)] hover:border-[#00D9FF]/50 hover:text-[#00D9FF]';
const BTN_CART =
  'flex items-center justify-center rounded-full bg-[#00D9FF]/10 backdrop-blur-md border border-[#00D9FF]/35 text-[#00D9FF] transition-all shadow-[0_0_8px_rgba(0,217,255,0.1)] hover:bg-[#00D9FF]/15 hover:shadow-[0_0_12px_rgba(0,217,255,0.15)]';

export const ProductCard = ({ product, onViewDetails, isPremium }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleCardClick = () => onViewDetails(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({ description: 'Agregado al carrito' });
  };

  const getStrikethroughPrice = (price: string) => {
    const val = parseInt(price.replace(/[^0-9]/g, ''));
    return `$${(val * 1.4).toLocaleString('es-CL')}`;
  };

  const isPromo = isPremium || product.mainCategory === 'PROMO';

  return (
    <div
      className={cn(
        'group relative flex flex-col cursor-pointer overflow-hidden w-full',
        'aspect-[4/5] md:aspect-[5/7] rounded-[16px] md:rounded-[20px]',
        'transition-all duration-300 md:hover:-translate-y-1',
        isPromo ? 'premium-mobile-card border-none shadow-2xl' : 'clipea-product-card'
      )}
      onClick={handleCardClick}
    >
      {/* Badges */}
      <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2 z-20 flex flex-col gap-0.5">
        {product.bestSeller && (
          <div className="flex items-center gap-0.5 bg-[#020817]/70 backdrop-blur-md border border-[#00FF88]/30 rounded-full px-1.5 py-px md:px-2 md:py-0.5">
            {isPromo && <span className="text-[7px] md:text-[8px]">🔥</span>}
            <span className="font-bold text-[#00FF88] tracking-widest uppercase text-[6px] md:text-[8px]">
              {isPromo ? 'MÁS VENDIDO' : 'TOP'}
            </span>
          </div>
        )}
        {isPromo && (
          <div className="flex items-center bg-[#00D9FF]/20 backdrop-blur-md border border-[#00D9FF]/30 rounded-full px-1.5 py-px md:px-2 md:py-0.5">
            <span className="font-bold text-[#00D9FF] tracking-widest uppercase text-[6px] md:text-[8px]">
              PROMO
            </span>
          </div>
        )}
      </div>

      {/* Image — ~70% */}
      <div className="flex-[7] min-h-0 w-full px-1.5 pt-1.5 md:px-2.5 md:pt-2.5 pb-0 flex items-stretch">
        <div className="relative w-full aspect-square rounded-[10px] md:rounded-[14px] overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_70%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={cn(
              'object-contain p-0 scale-[1.08] md:scale-[1.06] transition-transform duration-700',
              'md:group-hover:scale-[1.1]',
              isPromo && 'brightness-[1.03]'
            )}
            sizes="(max-width: 639px) 46vw, (max-width: 1023px) 22vw, 18vw"
            priority={product.bestSeller}
          />
        </div>
      </div>

      {/* Title + separator + footer — ~30% */}
      <div className="flex-[3] min-h-0 flex flex-col justify-end px-2 pb-2 md:px-3 md:pb-3 pt-0.5 md:pt-1">
        {/* Title — ~15% */}
        <h3
          className={cn(
            'font-headline font-semibold md:font-bold uppercase text-center',
            'line-clamp-2 leading-tight tracking-tight text-white',
            'text-[10px] md:text-[13px] lg:text-[14px]',
            'px-0.5 shrink-0'
          )}
        >
          {product.name}
        </h3>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1 md:my-1.5 shrink-0" />

        {/* Footer — ~15% */}
        <div className="flex items-center justify-between gap-2 min-h-[32px] md:min-h-[44px] shrink-0">
          <div className="flex items-baseline gap-1 min-w-0 leading-none pl-1 md:pl-1.5">
            <span className="font-headline font-bold text-[#E8F4FF] text-[13px] md:text-[16px] lg:text-[18px] tracking-tight">
              {product.price}
            </span>
            {isPromo && (
              <span className="text-[7px] md:text-[9px] font-medium text-white/25 line-through whitespace-nowrap">
                {getStrikethroughPrice(product.price)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 md:gap-1.5 shrink-0 pr-0.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(product);
              }}
              className={cn(BTN_SEARCH, 'h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10')}
              aria-label="Ver detalles"
            >
              <Search className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]" strokeWidth={2.25} />
            </button>
            <button
              onClick={handleAddToCart}
              className={cn(BTN_CART, 'h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11')}
              aria-label="Agregar al carrito"
            >
              <ShoppingCart className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
