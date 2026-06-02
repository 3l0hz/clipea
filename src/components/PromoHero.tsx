
'use client';
import Image from 'next/image';
import { ArrowRight, MapPin, Zap, Video } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const PromoHero = () => {
  const promoImage = PlaceHolderImages.find(img => img.id === 'promo-banner-moto');

  const scrollToPacks = () => {
    const packsGrid = document.getElementById('promo-packs-grid');
    if (packsGrid) {
      packsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-[#031225]/40 backdrop-blur-3xl border border-[#00D9FF]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#00D9FF]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-full bg-[#00FF88]/5 blur-[80px] pointer-events-none" />

      <div className="flex flex-col md:flex-row items-stretch min-h-[400px]">
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8 z-10">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88] text-[10px] font-bold tracking-[0.2em] uppercase">
              PACKS MOTO CLIPEA
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white leading-[1.1] tracking-tighter uppercase">
              Logra <span className="text-gradient">efecto dron</span> <br /> en tu moto
            </h2>
            <p className="text-white/70 text-sm md:text-lg max-w-lg font-medium">
              Graba tomas cinematográficas con Insta360 sin usar dron. La forma más simple de conseguir tomas espectaculares usando nuestros packs moto.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            {[
              { icon: MapPin, text: "Ciudad" },
              { icon: Zap, text: "Ruta" },
              { icon: Video, text: "Contenido cinematográfico" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover/item:border-[#00D9FF]/40 transition-colors">
                  <item.icon size={14} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button 
              onClick={scrollToPacks}
              className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#1A73FF] to-[#00D9FF] text-white font-bold uppercase tracking-[0.15em] text-xs shadow-[0_0_25px_rgba(0,217,255,0.3)] hover:shadow-[0_0_35px_rgba(0,217,255,0.5)] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-3 w-fit"
            >
              <span>Ver Packs Moto</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="relative flex-1 min-h-[300px] md:min-h-full overflow-hidden border-t md:border-t-0 md:border-l border-white/5 bg-black/20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#031225] via-transparent to-transparent z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031225] via-transparent to-transparent z-10 md:hidden" />
          
          {promoImage && (
            <Image
              src={promoImage.imageUrl}
              alt="Moto Dron Effect"
              fill
              className="object-cover object-center opacity-80 saturate-[1.1] contrast-[1.1] group-hover:scale-105 transition-transform duration-[2s]"
              data-ai-hint={promoImage.imageHint}
            />
          )}
          
          {/* Visual Overlay Detail */}
          <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
            <div className="p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2 max-w-[200px] animate-fade-in-up">
              <div className="w-8 h-8 rounded-full bg-[#00FF88]/20 flex items-center justify-center text-[#00FF88]">
                <Video size={16} />
              </div>
              <p className="text-[10px] font-bold text-white/90 uppercase leading-snug">Calidad Cine 360° garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
