'use client';
import { Instagram, Truck, ShieldCheck, Headset, Clock, ChevronRight } from 'lucide-react';

interface FooterProps {
  onOpenLegalModal: (type: string) => void;
}

export const Footer = ({ onOpenLegalModal }: FooterProps) => {
  return (
    <footer className="py-24 bg-[#020817] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-24">
          
          {/* Columna 1: Marca y Redes */}
          <div className="space-y-10">
            <a href="/" className="text-4xl font-headline font-bold tracking-tighter text-white group w-fit">
              clipea<span className="text-[#00D9FF] group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.5)] transition-all duration-500">.</span>
            </a>
            <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.8] max-w-[320px] uppercase font-bold tracking-[0.2em] opacity-70">
              Accesorios para cámaras deportivas, creación de contenido y gadgets de uso diario.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/clipea.cl" 
                target="_blank"
                className="relative w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-500 hover:text-[#00FF88] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/5 group/social"
              >
                <Instagram className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
              </a>
              <a 
                href="https://tiktok.com/@clipea.cl" 
                target="_blank"
                className="relative w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-500 hover:text-[#00FF88] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/5 group/social"
              >
                <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Nuestros Servicios */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Nuestros Servicios</h4>
            <div className="space-y-8">
              {[
                { icon: Truck, text: "Envíos a todo Chile" },
                { icon: ShieldCheck, text: "Garantía fallas fábrica" },
                { icon: Headset, text: "Soporte personalizado" },
                { icon: Clock, text: "Atención postventa" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-[#00FF88] bg-[#00FF88]/5 group-hover:border-[#00FF88]/40 transition-all duration-700">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 3: Ayuda & Políticas */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Ayuda & Políticas</h4>
            <div className="flex flex-col gap-6">
              {[
                { label: "Devoluciones", type: "devoluciones" },
                { label: "Términos y Condiciones", type: "terminos-condiciones" },
                { label: "Política de Envíos", type: "envios" },
                { label: "Contacto", type: "contacto" },
              ].map((link) => (
                <button 
                  key={link.type}
                  onClick={() => onOpenLegalModal(link.type)}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-[#00FF88] transition-all text-left w-fit flex items-center gap-2 group"
                >
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/20">
              © 2026 CLIPEA CHILE. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex items-center gap-6">
              <button onClick={() => onOpenLegalModal('privacidad')} className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-[#00D9FF] transition-colors">Privacidad</button>
              <button onClick={() => onOpenLegalModal('terminos')} className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-[#00D9FF] transition-colors">Términos</button>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              Despachos a todo Chile CL 🇨🇱
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};