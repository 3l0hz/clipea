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

  // LAB: Mobile Experimental Style
  if (isExperimental) {
    return (
      <div 
        className="group relative overflow-hidden flex flex-col cursor-pointer premium-mobile-card border-none rounded-[24px] shadow-2xl"
        onClick={handleCardClick}
      >
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.bestSeller && (
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-premium-green/30 px-3 py-1.5 rounded-full">
              <span className="text-xs">🔥</span>
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">RECOMENDADO</span>
            </div>
          )}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">{product.category}</span>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-[52px] bg-gradient-to-b from-[#121212] to-[#0A0A0A] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105 p-6"
            sizes="(max-width: 768px) 80vw, 33vw"
          />
        </div>

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
                className="w-full glass-button bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] font-bold h-12 rounded-2xl flex items-center justify-center gap-2 transition-all duration-500"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(product);
                }}
              >
                <ShoppingCart size={20} />
                <span className="uppercase tracking-tighter">AGREGAR</span>
              </Button>
              
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 text-[#B3B3B3] hover:text-accent transition-colors py-2 group/wsap tracking-[1px]"
                onClick={(e) => e.stopPropagation()}
              >
                <WhatsAppIcon className="w-4 h-4 group-hover/wsap:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase">CONSULTA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PROMO GLASS DESIGN: EXCLUSIVE FOR PRUEBA DESKTOP
  if (isExperimentalDesktop) {
    const isPruebaDesktop = product.id === 'PRUEBA_DESKTOP';
    return (
      <div 
        className={cn(
          "group promo-glass-card p-0 h-full flex flex-col cursor-pointer",
          isPruebaDesktop && "glass-reflective-edge"
        )}
        onClick={handleCardClick}
      >
        <div className="shine-layer" />
        
        {/* Badges Layout */}
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
          <Badge className="bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg">
            PROMO PREMIUM
          </Badge>
          <div className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase px-1">
            {product.brand || 'ELOHZ'}
          </div>
        </div>

        {/* Image Section with Mirror Spotlight */}
        <div className="relative aspect-square overflow-hidden m-4 rounded-[40px] bg-gradient-to-br from-[#1A1A1A] to-[#050505] flex items-center justify-center border border-white/5">
          {/* Subtle Radial Glow behind product */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_60%)]" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110 p-10"
            sizes="33vw"
          />
        </div>

        {/* Content Section */}
        <div className="px-8 pb-8 pt-2 flex flex-col flex-1 gap-5">
          <div className="space-y-2">
            <h3 className="font-headline font-bold text-white text-xl leading-tight tracking-tight uppercase bg-clip-text">
              {product.name}
            </h3>
            <p className="text-[13px] text-white/40 line-clamp-2 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          {/* Highlights Premium */}
          {product.highlights && (
            <div className="flex flex-col gap-2 pt-1">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-accent/50" />
                  <span className="text-[10px] text-white/60 font-medium uppercase tracking-widest">{h}</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-auto pt-4 flex flex-col gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-extrabold text-white tracking-tighter">
                {product.price}
              </span>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest line-through">
                {product.price === '$39.990' ? '$54.990' : product.price === '$59.990' ? '$79.990' : '$99.990'}
              </span>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button
                className={cn(
                  "w-full glass-button bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/30 font-bold h-14 rounded-2xl flex items-center justify-center gap-3 transition-all duration-700",
                  isPruebaDesktop && "glass-reflective-button-edge"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(product);
                }}
              >
                <ShoppingCart size={20} className={cn(isPruebaDesktop && "relative z-20")} />
                <span className={cn("uppercase tracking-widest text-xs", isPruebaDesktop && "relative z-20")}>
                  {isPruebaDesktop ? 'AGREGAR' : 'AGREGAR A BOLSA'}
                </span>
              </Button>
              
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 text-white/40 hover:text-white transition-all py-2 group/wsap tracking-[2px]"
                onClick={(e) => e.stopPropagation()}
              >
                <WhatsAppIcon className="w-4 h-4 opacity-40 group-hover/wsap:opacity-100 transition-opacity" />
                <span className="text-[10px] font-bold uppercase">CONSULTA DIRECTA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ALL OTHER CARDS
  return (
    <div 
      className="group relative overflow-hidden flex flex-col h-full cursor-pointer premium-mobile-card border-none rounded-[24px] shadow-2xl"
      onClick={handleCardClick}
    >
      <div className="relative aspect-[4/5] md:aspect-square overflow-hidden flex items-center justify-center p-4 md:p-0 bg-transparent rounded-[52px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110 p-2 md:p-4"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
        
        {product.bestSeller && (
          <Badge className="absolute top-4 left-4 z-10 uppercase tracking-[0.12em] text-[9px] font-bold px-2.5 py-1 rounded-lg transition-all bg-black/60 backdrop-blur-md border border-premium-green/30 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <span className="mr-1.5 opacity-90">🔥</span> MÁS VENDIDO
          </Badge>
        )}
      </div>
      
      <div className="px-5 pb-6 pt-0 flex flex-col flex-1 gap-1 md:p-4 md:gap-2 md:pt-0">
        <div className="flex justify-between items-start gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-[10px] text-muted-foreground uppercase hidden md:inline">
              {product.brand}
            </span>
          )}
        </div>
        
        <div className="space-y-1">
          <h3 className="font-headline font-bold text-white text-base md:text-lg line-clamp-2 leading-tight tracking-tight">
            {product.name}
          </h3>
          <p className="hidden md:block text-[11px] text-muted-foreground line-clamp-1 opacity-70">
            {product.description}
          </p>
        </div>
        
        <div className="mt-auto pt-3 flex flex-col gap-4 md:gap-3">
          <div className="text-2xl md:text-xl font-headline font-bold text-white tracking-tighter">
            {product.price}
          </div>
          
          <div className="flex flex-col gap-2 md:flex md:flex-col">
            <Button
              variant="default"
              size="lg"
              className="w-full glass-button bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] font-bold rounded-2xl transition-all duration-500"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(product);
              }}
            >
              <ShoppingCart size={18} className="md:size-4" />
              Agregar
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-accent/20 text-accent hover:bg-accent/10 hover:text-accent font-bold rounded-2xl transition-all duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-4 h-4 md:w-3.5 md:h-3.5" />
                Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};