
'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de elohz.`;

  return (
    <div className="premium-card rounded-xl overflow-hidden group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-[#151515]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {product.bestSeller && (
          <Badge className="absolute top-3 left-3 bg-accent text-black font-bold uppercase tracking-tighter text-[10px]">
            🔥 MÁS VENDIDO
          </Badge>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-start gap-2">
          <span className="text-[10px] text-accent font-bold uppercase tracking-wider">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-[10px] text-muted-foreground uppercase">
              {product.brand}
            </span>
          )}
        </div>
        
        <h3 className="font-headline font-bold text-white text-lg line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex flex-col gap-3">
          <div className="text-2xl font-headline font-bold text-white">
            {product.price}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs h-9"
              onClick={() => onViewDetails(product)}
            >
              Detalles
            </Button>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-white text-black hover:bg-white/90 text-xs h-9"
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
