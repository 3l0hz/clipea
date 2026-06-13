
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, Zap, Video, ArrowRight, Plus, Equal } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@/constants/data';
import { ProductCard } from '@/components/ProductCard';

export const PromoMotoSection = () => {
  const packsRef = useRef<HTMLDivElement>(null);
  const promoImage = PlaceHolderImages.find(img => img.id === 'promo-banner-moto');
  
  // Imagen oficial de resultado
  const NEW_PROMO_IMAGE_URL = "https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/sign/banner%20promo/ChatGPT%20Image%2011%20jun%202026,%2012_00_59%20a.m.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMzAwODRhZS1lYTgzLTQ3NmEtYjQwOS0yY2I1MzY4YmVhMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiYW5uZXIgcHJvbW8vQ2hhdEdQVCBJbWFnZSAxMSBqdW4gMjAyNiwgMTJfMDBfNTkgYS5tLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExNTA5MDIsImV4cCI6MTgxMjY4NjkwMn0.tv-y-SZAOCXU1M-dHVN5iEIiyrwGFjlmy1FqAREXL0s";

  const scrollToPacks = () => {
    packsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Filtrar productos de la categoría PROMO
  const promoProducts = PRODUCTS.filter(p => p.mainCategory === 'PROMO');

  return (
    <section className="container mx-auto px-4 py-16 scroll-mt-24" id="promo-moto">
      <div className="relative overflow-hidden rounded-[32px] border border-[#00D9FF]/30 bg-[#020817] shadow-[0_0_80px_rgba(0,0,0,0.9)] group">
        
        {/* HERO INTEGRADO */}
        <div className="flex flex-col md:flex-row min-h-[500px] relative overflow-hidden">
          
          {/* Lado Derecho: Imagen Principal con Overlay Gradiente */}
          <div className="absolute inset-0 md:left-[40%] overflow-hidden">
            <Image
              src={NEW_PROMO_IMAGE_URL}
              alt="Promo Moto Clipea"
              fill
              className="object-cover object-center saturate-[1.1] contrast-[1.1] transition-transform duration-[4s] group-hover:scale-105"
              priority
            />
            {/* Overlay Gradiente Dinámico para legibilidad de texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/85 to-transparent md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0B1220]/60 to-transparent md:hidden" />
          </div>

          {/* Lado Izquierdo: Contenido */}
          <div className="relative z-10 w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/10 text-[#00D9FF] text-[10px] font-bold tracking-[0.4em] uppercase w-fit animate-fade-in-up">
              PACKS MOTO CLIPEA
            </div>

            <h2 className="text-4xl md:text-7xl font-headline font-bold text-white leading-[1.0] tracking-tighter uppercase animate-fade-in-up delay-75">
              LOGRA EFECTO <br />
              DRON <span className="text-[#00D9FF]">EN TU MOTO</span>
            </h2>

            <div className="space-y-3 animate-fade-in-up delay-150">
              <p className="text-white text-lg md:text-xl font-bold leading-tight">
                Consigue tomas tipo dron con tu cámara 360.
              </p>
              <p className="text-white/60 text-sm md:text-base max-w-sm leading-relaxed">
                Monta, graba y crea tomas aéreas imposibles sin drones.
              </p>
            </div>

            <div className="flex items-center gap-6 md:gap-8 animate-fade-in-up delay-200">
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover/icon:border-[#00D9FF]/60 transition-all duration-500 group-hover/icon:shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                  <MapPin size={20} />
                </div>
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover/icon:text-white transition-colors">CIUDAD</span>
              </div>
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover/icon:border-[#00D9FF]/60 transition-all duration-500 group-hover/icon:shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                  <Zap size={20} />
                </div>
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover/icon:text-white transition-colors">RUTA</span>
              </div>
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover/icon:border-[#00D9FF]/60 transition-all duration-500 group-hover/icon:shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                  <Video size={20} />
                </div>
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover/icon:text-white transition-colors">AÉREO</span>
              </div>
            </div>

            <button 
              onClick={scrollToPacks}
              className="h-14 px-10 rounded-2xl border border-[#00D9FF]/50 bg-[#00D9FF]/10 text-white font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#00D9FF]/20 hover:border-[#00D9FF] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-500 group w-fit animate-fade-in-up delay-300"
            >
              <span>VER PACKS MOTO</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* BLOQUE INFERIOR INTEGRADO: ¿CÓMO SE LOGRA? */}
        <div className="border-t border-white/10 p-6 md:py-12 md:px-20 space-y-4 md:space-y-12 bg-black/40 backdrop-blur-md">
          <div className="space-y-2 text-center">
            <h3 className="text-xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
              ¿CÓMO SE LOGRA <span className="text-[#00D9FF]">ESTE EFECTO?</span>
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full">
            <div className="flex flex-row flex-nowrap md:flex-row items-center justify-center gap-2 md:gap-12 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {/* Tarjeta 1: Cámara */}
              <div className="flex flex-col items-center shrink-0 animate-fade-in-up delay-100">
                <div className="relative aspect-square w-[90px] md:w-[300px] rounded-[14px] md:rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-2 md:p-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                  <div className="absolute top-1 left-1 md:top-6 md:left-6 w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#00D9FF] text-black text-[9px] md:text-[11px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(0,217,255,0.4)] z-10">1</div>
                  <div className="absolute top-1 right-2 md:top-6 md:right-8 text-[7px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.1em] md:tracking-[0.3em] z-10 text-right">
                    <span className="md:hidden">360</span>
                    <span className="hidden md:inline">CÁMARA 360</span>
                  </div>
                  <div className="relative w-full h-full mt-1 flex items-center justify-center">
                    <Image 
                      src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/sign/banner%20promo/360%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMzAwODRhZS1lYTgzLTQ3NmEtYjQwOS0yY2I1MzY4YmVhMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiYW5uZXIgcHJvbW8vMzYwICgxKS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMTQ3NDc3LCJleHAiOjE4MTI2ODM0Nzd9.flZNq29wAtW7hOOGRE7CCDtrTI_SeawKFbT-KOxZ1hQ" 
                      alt="Cámara 360" 
                      fill 
                      className="object-contain group-hover:scale-110 transition-transform duration-700 p-1 md:p-2" 
                      sizes="(max-width: 768px) 90px, 300px"
                    />
                  </div>
                </div>
              </div>

              <Plus className="text-[#00D9FF] w-4 h-4 md:w-10 md:h-10 shrink-0 opacity-50" strokeWidth={3} />

              {/* Tarjeta 2: Stick + Soporte */}
              <div className="flex flex-col items-center shrink-0 animate-fade-in-up delay-200">
                <div className="relative aspect-square w-[90px] md:w-[300px] rounded-[14px] md:rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-2 md:p-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                  <div className="absolute top-1 left-1 md:top-6 md:left-6 w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#00D9FF] text-black text-[9px] md:text-[11px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(0,217,255,0.4)] z-10">2</div>
                  <div className="absolute top-1 right-2 md:top-6 md:right-8 text-[7px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.1em] md:tracking-[0.3em] z-10 text-right leading-none">
                    <span className="md:hidden">STICK + SOPORTE</span>
                    <span className="hidden md:inline">STICK INVISIBLE + SOPORTE MOTO</span>
                  </div>
                  <div className="relative w-full h-full mt-1 flex items-center justify-center">
                    <Image 
                      src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/sign/banner%20promo/ChatGPT%20Image%2027%20may%202026,%2014_28_09%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMzAwODRhZS1lYTgzLTQ3NmEtYjQwOS0yY2I1MzY4YmVhMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiYW5uZXIgcHJvbW8vQ2hhdEdQVCBJbWFnZSAyNyBtYXkgMjAyNiwgMTRfMjhfMDkgKDEpLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExNDc2OTYsImV4cCI6MTgxMjY4MzY5Nn0.oyGbeZYw1mTAnmBE5lTyX0XdPZoxGPEyiHoHo_Wi_bw" 
                      alt="Selfie Stick + Soporte Moto" 
                      fill 
                      className="object-contain group-hover:scale-110 transition-transform duration-700 p-1 md:p-2" 
                      sizes="(max-width: 768px) 90px, 300px"
                    />
                  </div>
                </div>
              </div>

              <Equal className="text-[#00D9FF] w-4 h-4 md:w-10 md:h-10 shrink-0 opacity-50" strokeWidth={3} />

              {/* Tarjeta 3: Resultado */}
              <div className="flex flex-col items-center shrink-0 animate-fade-in-up delay-300">
                <div className="relative aspect-square w-[90px] md:w-[300px] rounded-[14px] md:rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-1 md:p-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700 overflow-hidden">
                  <div className="absolute top-1 left-1 md:top-6 md:left-6 w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#00D9FF] text-black text-[9px] md:text-[11px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(0,217,255,0.4)] z-20">3</div>
                  <div className="absolute top-1 right-2 md:top-6 md:right-8 text-[7px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.1em] md:tracking-[0.3em] z-20 text-right leading-none">
                    <span className="md:hidden">RESULTADO</span>
                    <span className="hidden md:inline">RESULTADO EFECTO DRON</span>
                  </div>
                  <div className="relative w-full h-full mt-1 flex items-center justify-center">
                    <Image 
                      src={NEW_PROMO_IMAGE_URL} 
                      alt="Resultado Efecto Dron en Moto" 
                      fill 
                      className="object-cover md:object-cover rounded-[10px] md:rounded-[18px] transition-transform duration-[3s] group-hover:scale-110" 
                      sizes="(max-width: 768px) 90px, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 rounded-[10px] md:rounded-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 md:pt-4 text-center animate-fade-in-up delay-500 pb-8">
            <p className="text-white/70 text-[11px] md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              La cámara se oculta con nuestros accesorios y se obtiene una <span className="text-[#00D9FF] font-bold underline underline-offset-8 decoration-[#00D9FF]/30">toma aérea</span> imposible con un selfie stick.
            </p>
          </div>
        </div>

        {/* SECCIÓN DE PACKS MOTO CLIPEA */}
        <div ref={packsRef} id="promo-moto-packs" className="border-t border-white/10 p-8 md:p-14 space-y-12 bg-black/20 scroll-mt-24">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#00D9FF] shadow-[0_0_10px_rgba(0,217,255,0.5)]" />
            <h3 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
              PACKS MOTO CLIPEA
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {promoProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => {}}
                isPremium
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
