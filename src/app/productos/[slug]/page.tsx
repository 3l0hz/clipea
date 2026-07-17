'use client';
import { use, useState } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '@/constants/data';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, Box, Info, CheckCircle2, ShieldCheck, Zap, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import Image from 'next/image';
import { ModelViewer } from '@/components/ModelViewer';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

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

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    notFound();
  }

  const images = product.images || [product.image];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, quiero consultar por ${product.name} de clipea.`;

  const nextImage = () => {
    setShowModel(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setShowModel(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-[#03050a]">
      <Header />
      <WhatsAppButton />
      
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row bg-[#03050a] border border-white/5 rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] min-h-[80vh]">
            
            {/* LEFT COLUMN: Visuals (55%) */}
            <div className="w-full md:w-[55%] flex flex-col relative bg-[#050810] shrink-0 border-b md:border-b-0 md:border-r border-white/5">
              <div className="relative aspect-square md:h-full w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.12),transparent_70%)] pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-16">
                  {showModel && product.modelUrl ? (
                    <div className="w-full h-full min-h-[300px]">
                      <ModelViewer src={product.modelUrl} poster={product.image} alt={product.name} />
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={images[currentImageIndex]}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}
                  
                  {images.length > 1 && !showModel && (
                    <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                      <button onClick={prevImage} className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-all">
                        <ChevronLeft size={20} />
                      </button>
                      <button onClick={nextImage} className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative md:absolute md:bottom-10 left-0 right-0 flex gap-3 px-6 py-6 md:py-2 overflow-x-auto justify-center z-20 no-scrollbar">
                {product.modelUrl && (
                  <button
                    onClick={() => setShowModel(true)}
                    className={cn(
                      "relative w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl shrink-0 group",
                      showModel 
                        ? "border-cyan-400 scale-110 shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                        : "border-white/10 opacity-60"
                    )}
                  >
                    <Box size={20} className={cn("transition-colors", showModel ? "text-cyan-400" : "text-white/70")} />
                    <span className="absolute bottom-1 text-[8px] font-bold text-cyan-400 tracking-tighter">VISTA 3D</span>
                  </button>
                )}
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setShowModel(false); setCurrentImageIndex(idx); }}
                    className={cn(
                      "relative w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all bg-white/[0.03] backdrop-blur-md shrink-0",
                      !showModel && currentImageIndex === idx 
                        ? "border-cyan-400 scale-110 shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
                        : "border-white/10 opacity-60"
                    )}
                  >
                    <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover p-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Info (45%) */}
            <div className="w-full md:w-[45%] flex flex-col bg-[#03050a]">
              <div className="flex-1 px-6 py-8 md:px-10 md:py-12 space-y-8">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
                      {product.category}
                    </span>
                    {product.bestSeller && (
                      <span className="bg-accent/10 text-accent text-[9px] font-bold px-2 py-0.5 rounded-full border border-accent/20 tracking-widest uppercase flex items-center gap-1">
                        <Zap size={8} className="fill-current" /> MÁS VENDIDO
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold leading-tight uppercase tracking-tighter text-white">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter text-accent">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">
                    <Info size={12} className="text-cyan-400/50" />
                    Descripción
                  </h4>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 p-5 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-cyan-400/30">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em] mb-1">Compatibilidad</h4>
                        <p className="text-white text-sm font-bold tracking-tight">
                          {product.compatibility}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 p-5 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-cyan-400/30">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                        <Zap size={18} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em] mb-1">Uso Recomendado</h4>
                        <p className="text-white text-sm font-bold tracking-tight">
                          {product.recommendedUse}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {product.highlights && product.highlights.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-[0.4em]">¿Qué incluye?</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {product.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-white/80 font-semibold group">
                          <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400/60 group-hover:text-cyan-400 transition-colors shrink-0">
                            <CheckCircle2 size={12} />
                          </div>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto p-6 md:p-10 bg-black/20 backdrop-blur-3xl border-t border-white/5 space-y-4">
                <Button 
                  onClick={() => {
                    addToCart(product);
                    toast({ description: "Agregado al carrito" });
                  }}
                  className="w-full h-14 md:h-16 rounded-2xl text-base font-bold flex items-center justify-center gap-4 transition-all duration-500 premium-led-button group"
                >
                  <ShoppingCart size={20} strokeWidth={2.5} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="tracking-[0.15em] uppercase font-black text-white">Añadir al Carrito</span>
                </Button>
                
                <div className="flex items-center justify-between px-2">
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-[10px] text-white/40 hover:text-cyan-400 transition-colors font-bold uppercase tracking-[0.2em]"
                  >
                    <WhatsAppIcon className="w-4 h-4 opacity-60" />
                    Consulta directa
                  </a>
                  <span className="text-[9px] text-white/20 uppercase font-bold tracking-[0.1em]">Envíos a todo Chile 🇨🇱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
