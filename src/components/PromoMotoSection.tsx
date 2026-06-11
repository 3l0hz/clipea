
'use client';
import Image from 'next/image';
import { MapPin, Zap, Video, ArrowRight, Plus, Equal } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export const PromoMotoSection = () => {
  const promoImage = PlaceHolderImages.find(img => img.id === 'promo-banner-moto');

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

            <button className="h-14 px-10 rounded-2xl border border-[#00D9FF]/50 bg-[#00D9FF]/10 text-white font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#00D9FF]/20 hover:border-[#00D9FF] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-500 group w-fit animate-fade-in-up delay-300">
              <span>VER PACKS MOTO</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* BLOQUE INFERIOR INTEGRADO: ¿CÓMO SE LOGRA? */}
        <div className="border-t border-white/10 p-8 md:py-12 md:px-20 space-y-12 md:space-y-16 bg-black/40 backdrop-blur-md">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
              ¿CÓMO SE LOGRA <span className="text-[#00D9FF]">ESTE EFECTO?</span>
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            
            {/* Tarjeta 1: Cámara */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[340px] md:max-w-[300px] shrink-0 animate-fade-in-up delay-100">
              <div className="relative aspect-[16/10] md:aspect-square w-full rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 w-7 h-7 rounded-full bg-[#00D9FF] text-black text-[11px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] z-10">1</div>
                <div className="absolute top-4 right-6 md:top-6 md:right-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] z-10">CÁMARA 360</div>
                <div className="relative w-full h-full mt-2 flex items-center justify-center">
                  <Image 
                    src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/sign/banner%20promo/360%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMzAwODRhZS1lYTgzLTQ3NmEtYjQwOS0yY2I1MzY4YmVhMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiYW5uZXIgcHJvbW8vMzYwICgxKS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMTQ3NDc3LCJleHAiOjE4MTI2ODM0Nzd9.flZNq29wAtW7hOOGRE7CCDtrTI_SeawKFbT-KOxZ1hQ" 
                    alt="Cámara 360" 
                    fill 
                    className="object-contain group-hover:scale-110 transition-transform duration-700 p-2" 
                  />
                </div>
              </div>
            </div>

            <Plus className="text-[#00D9FF] w-8 h-8 md:w-10 md:h-10 shrink-0 opacity-50" strokeWidth={3} />

            {/* Tarjeta 2: Accesorios */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[340px] md:max-w-[300px] shrink-0 animate-fade-in-up delay-200">
              <div className="relative aspect-[16/10] md:aspect-square w-full rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 w-7 h-7 rounded-full bg-[#00D9FF] text-black text-[11px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] z-10">2</div>
                <div className="absolute top-4 right-6 md:top-6 md:right-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] z-10">ACCESORIOS CLIPEA</div>
                <div className="relative w-full h-full mt-2 flex items-center justify-center">
                  <Image 
                    src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/sign/banner%20promo/ChatGPT%20Image%2027%20may%202026,%2014_28_09%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMzAwODRhZS1lYTgzLTQ3NmEtYjQwOS0yY2I1MzY4YmVhMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiYW5uZXIgcHJvbW8vQ2hhdEdQVCBJbWFnZSAyNyBtYXkgMjAyNiwgMTRfMjhfMDkgKDEpLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExNDc2OTYsImV4cCI6MTgxMjY4MzY5Nn0.oyGbeZYw1mTAnmBE5lTyX0XdPZoxGPEyiHoHo_Wi_bw" 
                    alt="Accesorios Clipea" 
                    fill 
                    className="object-contain group-hover:scale-110 transition-transform duration-700 p-2" 
                  />
                </div>
              </div>
            </div>

            <Equal className="text-[#00D9FF] w-8 h-8 md:w-10 md:h-10 shrink-0 opacity-50" strokeWidth={3} />

            {/* Tarjeta 3: Resultado (Efecto Dron) */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[340px] md:max-w-[300px] shrink-0 animate-fade-in-up delay-300">
              <div className="relative aspect-[16/10] md:aspect-square w-full rounded-[24px] border border-[#00D9FF]/20 bg-[#031225]/60 p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#00D9FF]/50 transition-all duration-700">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 w-7 h-7 rounded-full bg-[#00D9FF] text-black text-[11px] font-black flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] z-20">3</div>
                <div className="absolute top-4 right-6 md:top-6 md:right-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] z-20">EFECTO DRON</div>
                <div className="relative w-full h-full mt-2 flex items-center justify-center">
                   <Image 
                    src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/sign/banner%20promo/ChatGPT%20Image%202%20jun%202026,%2003_55_38%20p.m..png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMzAwODRhZS1lYTgzLTQ3NmEtYjQwOS0yY2I1MzY4YmVhMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiYW5uZXIgcHJvbW8vQ2hhdEdQVCBJbWFnZSAyIGp1biAyMDI2LCAwM181NV8zOCBwLm0uLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExNDc3MzUsImV4cCI6MTgxMjY4MzczNX0.eCfo4PSl8hmy2CpN8Mflp-4C2Pigz8FkA6Jg4_cmpmQ" 
                    alt="Resultado Efecto Dron" 
                    fill 
                    className="object-cover rounded-[18px] transition-transform duration-[3s] group-hover:scale-110" 
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 rounded-[18px]" />
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
