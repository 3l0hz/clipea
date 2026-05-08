'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  isExperimental?: boolean;
  isExperimentalDesktop?: boolean;
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

export const ProductCard = ({ product, onViewDetails, isExperimental, isExperimentalDesktop }: ProductCardProps) => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  const handleCardClick = () => {
    onViewDetails(product);
  };

  if (isExperimentalDesktop) {
    const isPruebaDesktop = product.id === 'PRUEBA_DESKTOP';

    return (
      <div 
        className={cn(
          "group promo-glass-card p-0 h-full flex flex-col cursor-pointer glass-reflective-edge prueba-desktop-shine"
        )}
        onClick={handleCardClick}
      >
        <div className="shine-layer" />
        
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
          <Badge className="bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg">
            PROMO PREMIUM
          </Badge>
          {!isPruebaDesktop && (
            <div className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase px-1">
              {product.brand || 'ELOHZ'}
            </div>
          )}
        </div>

        <div className="relative aspect-square overflow-hidden m-2 rounded-[40px] bg-gradient-to-br from-[#1A1A1A] to-[#050505] flex items-center justify-center border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_60%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110 p-2"
            sizes="33vw"
          />
        </div>

        <div className="px-5 pb-5 pt-1 flex flex-col flex-1 gap-2">
          <div className="space-y-1">
            <h3 className="font-headline font-bold text-white text-xl leading-tight tracking-tight uppercase bg-clip-text">
              {product.name}
            </h3>
            {!isPruebaDesktop && (
              <p className="text-[13px] text-white/40 line-clamp-1 leading-relaxed font-medium">
                {product.description}
              </p>
            )}
          </div>

          <div className="mt-auto pt-2 flex flex-col gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-extrabold text-white tracking-tighter">
                {product.price}
              </span>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest line-through">
                {product.price === '$39.990' ? '$54.990' : 
                 product.price === '$59.990' ? '$79.990' : 
                 product.price === '$69.990' ? '$89.990' :
                 product.price === '$82.990' ? '$112.990' :
                 '$149.990'}
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button
                className="w-full glass-button bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/30 font-bold h-12 rounded-2xl flex items-center justify-center gap-3 transition-all duration-700 glass-reflective-button-edge"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(product);
                }}
              >
                <ShoppingCart size={18} className="relative z-20" />
                <span className="uppercase tracking-widest text-xs relative z-20">
                  AGREGAR
                </span>
              </Button>
              
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 text-white/40 hover:text-white transition-all py-1 group/wsap tracking-[2px]"
                onClick={(e) => e.stopPropagation()}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 opacity-40 group-hover/wsap:opacity-100 transition-opacity" />
                <span className="text-[9px] font-bold uppercase">CONSULTA DIRECTA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Unified Mobile/Standard Style (based on the Prueba Card)
  return (
    <div 
      className="group relative overflow-hidden flex flex-col cursor-pointer premium-mobile-card border-none rounded-[20px] shadow-2xl h-fit"
      onClick={handleCardClick}
    >
      <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
        {product.bestSeller && (
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md border border-premium-green/30 px-2 py-0.5 rounded-full">
            <span className="text-[10px]">🔥</span>
            <span className="text-[8px] font-bold text-white tracking-widest uppercase">TOP</span>
          </div>
        )}
      </div>

      <div className="relative aspect-square overflow-hidden m-1 rounded-[16px] bg-gradient-to-b from-[#121212] to-[#0A0A0A] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105 p-3"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
      </div>

      <div className="px-3 pb-3 pt-0 flex flex-col gap-1">
        <div className="space-y-0">
          <h3 className="font-headline font-bold text-white text-[14px] leading-tight tracking-tight uppercase line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[10px] text-[#B3B3B3] line-clamp-1 leading-tight opacity-70">
            {product.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-1.5 mt-1">
          <div className="text-[18px] font-headline font-extrabold text-white tracking-tighter leading-none">
            {product.price}
          </div>
          
          <div className="flex flex-col gap-1.5">
            <Button
              variant="default"
              className="w-full glass-button bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold h-9 rounded-lg flex items-center justify-center gap-2 transition-all duration-500"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(product);
              }}
            >
              <ShoppingCart size={14} />
              <span className="uppercase tracking-tighter text-[10px]">AGREGAR</span>
            </Button>
            
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-1.5 text-[#B3B3B3] hover:text-accent transition-colors py-0.5 group/wsap"
              onClick={(e) => e.stopPropagation()}
            >
              <WhatsAppIcon className="w-3.5 h-3.5 group-hover/wsap:scale-110 transition-transform" />
              <span className="text-[8px] font-bold uppercase tracking-wider">CONSULTA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
