
'use client';
import Image from 'next/image';
import { MapPin, Zap, Video, ArrowRight, Plus, Equal } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export const PromoMotoSection = () => {
  const promoImage = PlaceHolderImages.find(img => img.id === 'promo-banner-moto');
  const cameraImg = PlaceHolderImages.find(img => img.id === 'formula-camera');
  const accImg = PlaceHolderImages.find(img => img.id === 'formula-accessories');
  const resultImg = PlaceHolderImages.find(img => img.id === 'formula-result');

  return (
    <section className="container mx-auto px-4 py-16 scroll-mt-24" id="promo-moto">
      <div className="relative overflow-hidden rounded-[32px] border border-[#00D9FF]/30 bg-[#020817] shadow-[0_0_80px_rgba(0,0,0,0.9)] group">
        
        {/* HERO INTEGRADO */}
        <div className="flex flex-col md:flex-row min-h-[500px] relative overflow-hidden">
          
          {/* Lado Derecho: Imagen Principal con Overlay Gradiente */}
          <div className="absolute inset-0 md:left-[40%] overflow-hidden">
            {promoImage && (
              <Image
                src={promoImage.imageUrl}
                alt="Promo Moto Clipea"
                fill
                className="object-cover object-center saturate-[1.1] contrast-[1.1] transition-transform duration-[4s] group-hover:scale-105"
                priority
                data-ai-hint={promoImage.imageHint}
              />
            )}
            {/* Overlay Gradiente Dinámico para legibilidad de texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/85 to-transparent md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0B1220]/60 to-transparent md:hidden" />
          </div>

          {/* Lado Izquierdo: Contenido */}
          <div className="relative z-10 w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-center space-y-8 md:space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/10 text-[#00D9FF] text-[10px] font-bold tracking-[0.4em] uppercase w-fit animate-fade-in-up">
              PACKS MOTO CLIPEA
            </div>

            <h2 className="text-4xl md:text-7xl font-headline font-bold text-white leading-[1.0] tracking-tighter uppercase animate-fade-in-up delay-75">
              LOGRA EFECTO <br />
              DRON <span className="text-[#00D9FF]">EN TU MOTO</span>
            </h2>

            <div className="space-y-4 animate-fade-in-up delay-150">
              <p className="text-white text-lg md:text-xl font-bold leading-tight">
                Graba tomas cinematográficas con Insta360 sin usar dron.
              </p>
              <p className="text-white/60 text-sm md:text-base max-w-sm leading-relaxed">
                La forma más simple de conseguir tomas espectaculares usando nuestros packs moto.
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
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover/icon:text-white transition-colors">CINEMATOGRÁFICO</span>
              </div>
            </div>

            <button className="h-14 px-10 rounded-2xl border border-[#00D9FF]/50 bg-[#00D9FF]/10 text-white font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#00D9FF]/20 hover:border-[#00D9FF] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-500 group w-fit animate-fade-in-up delay-300">
              <span>VER PACKS MOTO</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* BLOQUE INFERIOR INTEGRADO: ¿CÓMO SE LOGRA? */}
        <div className="border-t border-white/10 p-8 md:p-20 space-y-16 bg-black/40 backdrop-blur-md">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
              ¿CÓMO SE LOGRA <span className="text-[#00D9FF]">ESTE EFECTO?</span>
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            
            {/* Tarjeta 1: Cámara */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[300px] animate-fade-in-up delay-100">
              <div className="relative aspect-square w-full rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                <div className="absolute top-6 left-6 w-7 h-7 rounded-full bg-[#00D9FF] text-black text-[11px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] z-10">1</div>
                <div className="absolute top-6 right-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] z-10">CÁMARA INSTA360</div>
                <div className="relative w-full h-full mt-4 flex items-center justify-center">
                  {cameraImg && (
                    <Image 
                      src={cameraImg.imageUrl} 
                      alt="Cámara Insta360" 
                      fill 
                      className="object-contain group-hover:scale-110 transition-transform duration-700 p-2" 
                      data-ai-hint={cameraImg.imageHint}
                    />
                  )}
                </div>
              </div>
            </div>

            <Plus className="text-[#00D9FF] w-10 h-10 shrink-0 opacity-50 md:block hidden" strokeWidth={3} />
            <Plus className="text-[#00D9FF] w-8 h-8 shrink-0 opacity-50 md:hidden" strokeWidth={3} />

            {/* Tarjeta 2: Accesorios */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[300px] animate-fade-in-up delay-200">
              <div className="relative aspect-square w-full rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                <div className="absolute top-6 left-6 w-7 h-7 rounded-full bg-[#00D9FF] text-black text-[11px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] z-10">2</div>
                <div className="absolute top-6 right-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] z-10">ACCESORIOS CLIPEA</div>
                <div className="relative w-full h-full mt-4 flex items-center justify-center">
                  {accImg && (
                    <Image 
                      src={accImg.imageUrl} 
                      alt="Accesorios Clipea" 
                      fill 
                      className="object-contain group-hover:scale-110 transition-transform duration-700 p-2" 
                      data-ai-hint={accImg.imageHint}
                    />
                  )}
                </div>
              </div>
            </div>

            <Equal className="text-[#00D9FF] w-10 h-10 shrink-0 opacity-50 md:block hidden" strokeWidth={3} />
            <Equal className="text-[#00D9FF] w-8 h-8 shrink-0 opacity-50 md:hidden" strokeWidth={3} />

            {/* Tarjeta 3: Resultado (Efecto Dron) */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[360px] animate-fade-in-up delay-300">
              <div className="relative aspect-video w-full rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                <div className="absolute top-6 left-6 w-7 h-7 rounded-full bg-[#00D9FF] text-black text-[11px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] z-20">3</div>
                <div className="absolute top-6 right-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] z-20">EFECTO DRON</div>
                <div className="relative w-full h-full rounded-[18px] overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] transition-all duration-700">
                   {resultImg && (
                    <Image 
                      src={resultImg.imageUrl} 
                      alt="Resultado Efecto Dron" 
                      fill 
                      className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
                      data-ai-hint={resultImg.imageHint}
                    />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center animate-fade-in-up delay-500">
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              La cámara se oculta con nuestros accesorios y se obtiene una <span className="text-[#00D9FF] font-bold underline underline-offset-8 decoration-[#00D9FF]/30">toma aérea</span> imposible con un selfie stick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
