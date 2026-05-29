'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PRODUCTS, CATEGORY_STRUCTURE, WHATSAPP_NUMBER } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Truck, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Headset,
  Clock
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<Record<string, string>>({});
  const isMobile = useIsMobile();

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSubcategoryChange = (mainCategory: string, sub: string) => {
    setActiveSubcategory(prev => ({
      ...prev,
      [mainCategory]: prev[mainCategory] === sub ? '' : sub
    }));
  };

  return (
    <main className="relative min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover saturate-[1.1] contrast-[1.05] transform-gpu will-change-transform"
          >
            <source src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/HeroSection/2%20slide/0506%20(2).mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 animate-fade-in-up">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Equipamiento para Aventuras
          </Badge>
          <h1 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter text-white leading-[0.9]">
            Accesorios para <br/>
            <span className="text-gradient">cámaras deportivas</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 md:text-xl leading-relaxed font-medium">
            Bastones selfie, soportes de moto, trípodes y accesorios para grabar rutas, viajes y contenido con la mejor estabilidad.
          </p>
          <div className="flex justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="glass-button hero-button-aura bg-black/20 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] px-14 h-16 text-lg md:text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-500" 
              asChild
            >
              <a href="#catalog">Explorar Catálogo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="relative z-20 md:bg-card md:border-y md:border-border md:py-8 py-4 -mt-6 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="md:bg-transparent md:border-none md:p-0 md:rounded-none bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
              <div className="flex items-center gap-4 md:justify-start">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-accent/5 md:bg-transparent flex items-center justify-center shrink-0 border border-accent/10 md:border-none">
                  <Truck className="text-accent" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em] md:tracking-normal">Envíos a todo Chile</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70 md:opacity-100">Starken, BlueExpress y Chilexpress</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:justify-center border-y border-white/5 py-4 md:py-0 md:border-none">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-accent/5 md:bg-transparent flex items-center justify-center shrink-0 border border-accent/10 md:border-none">
                  <Shield className="text-accent" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em] md:tracking-normal">Garantía Asegurada</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70 md:opacity-100">Productos testeados para acción</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:justify-end">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-accent/5 md:bg-transparent flex items-center justify-center shrink-0 border border-accent/10 md:border-none">
                  <Zap className="text-accent" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em] md:tracking-normal">Atención Personalizada</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70 md:opacity-100">Soporte directo vía WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 md:py-32 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-32 md:gap-48 pb-20">
            {CATEGORY_STRUCTURE.map((cat) => {
              const categoryProducts = PRODUCTS.filter(p => p.mainCategory === cat.label);
              
              const filteredProducts = activeSubcategory[cat.label]
                ? categoryProducts.filter(p => p.subcategory === activeSubcategory[cat.label])
                : categoryProducts;

              if (categoryProducts.length === 0) return null;

              const categoryId = cat.label.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');

              return (
                <div key={cat.label} id={categoryId} className="space-y-12 md:space-y-16 scroll-mt-32">
                  <div className="space-y-8 max-w-5xl">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-accent" />
                      <h3 className="text-3xl md:text-5xl font-headline font-bold text-white uppercase tracking-tight">
                        {cat.label}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
                      {cat.subcategories.map((sub) => {
                        const hasProducts = categoryProducts.some(p => p.subcategory === sub);
                        if (!hasProducts) return null;
                        
                        const isActive = activeSubcategory[cat.label] === sub;
                        return (
                          <button
                            key={sub}
                            onClick={() => handleSubcategoryChange(cat.label, sub)}
                            className={cn(
                              "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 whitespace-nowrap border",
                              isActive 
                                ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(142,255,127,0.3)]" 
                                : "bg-white/5 text-white/40 border-white/10 hover:border-white/30 hover:text-white"
                            )}
                          >
                            {sub}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className={cn(
                    "grid gap-4 md:gap-6",
                    "grid-cols-3",
                    "md:grid-cols-4 xl:grid-cols-5"
                  )}>
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                  
                  {filteredProducts.length === 0 && (
                    <div className="py-20 text-center border border-dashed border-white/5 rounded-3xl">
                      <p className="text-white/20 font-bold uppercase tracking-[0.3em]">Próximamente productos en esta categoría</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#060606] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-24">
            
            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <a href="#home" className="text-4xl font-headline font-bold tracking-tighter text-white group w-fit">
                clipea<span className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(142,255,127,0.5)] transition-all duration-500">.</span>
              </a>
              <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.8] max-w-[320px] uppercase font-bold tracking-[0.2em] opacity-70">
                Accesorios para cámaras deportivas, creación de contenido y gadgets de uso diario.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/clipea.cl" 
                  target="_blank"
                  className="relative w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 group/social overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/social:translate-y-0 transition-transform duration-500" />
                  <svg className="relative z-10 w-5 h-5 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="https://tiktok.com/@clipea.cl" 
                  target="_blank"
                  className="relative w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 group/social overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/social:translate-y-0 transition-transform duration-500" />
                  <svg className="relative z-10 w-5 h-5 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.05.35-.04.72.01 1.07.13 1.1.91 2.1 1.92 2.53.51.24 1.07.35 1.63.31 1.48-.1 2.8-1.15 3.12-2.6.04-.21.05-.43.05-.64 0-3.67 0-7.33 0-11 0-2.5 0-4.99-.01-7.49z"/></svg>
                </a>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Nuestros Servicios</h4>
              <div className="space-y-8">
                {[
                  { icon: Truck, text: "Envíos a todo Chile" },
                  { icon: ShieldCheck, text: "Garantía fallas fábrica" },
                  { icon: Headset, text: "Soporte personalizado" },
                  { icon: Clock, text: "Atención postventa" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-accent bg-accent/5 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-[0_0_15px_rgba(142,255,127,0.15)] transition-all duration-700">
                      <item.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors duration-500">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Ayuda & Políticas</h4>
              <div className="flex flex-col gap-8">
                <FooterDialogLink 
                  title="Devoluciones" 
                  content={
                    <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                      <p>En Clipea tienes hasta 7 días desde la recepción del pedido para solicitar una devolución o reembolso.</p>
                      <div className="space-y-2">
                        <p className="font-bold text-accent uppercase tracking-widest text-xs">Condiciones:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Producto sin uso</li>
                          <li>Empaque original</li>
                          <li>Buen estado general</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="font-bold mb-1">Importante:</p>
                        <p>El envío de devolución corre por cuenta del cliente, excepto por fallas de fábrica demostrables o errores de despacho.</p>
                      </div>
                    </div>
                  }
                />
                <FooterDialogLink 
                  title="Términos y condiciones" 
                  content={
                    <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                      <p>Clipea comercializa accesorios y equipamiento para cámaras deportivas y creación de contenido POV.</p>
                      <div className="space-y-2">
                        <p className="font-bold text-accent uppercase tracking-widest text-xs">Compatibilidad asegurada:</p>
                        <p>Diseñados para Insta360, GoPro y DJI Action.</p>
                      </div>
                      <div className="space-y-3">
                        <p>• Existen productos alternativos y también productos de marcas reconocidas como Telesin o Ulanzi.</p>
                        <p>• Algunos productos pueden tener disponibilidad limitada.</p>
                        <p>• Las imágenes son referenciales.</p>
                        <p>• Los tiempos de despacho varían según región.</p>
                      </div>
                    </div>
                  }
                />
                <FooterDialogLink 
                  title="Política de envíos" 
                  content={
                    <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <CheckCircle className="text-accent shrink-0" size={16} />
                          <span>Envíos a todo Chile vía Starken, Blue Express y Chilexpress.</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="text-accent shrink-0" size={16} />
                          <span>Seguimiento en línea disponible para todos los pedidos.</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="text-accent shrink-0" size={16} />
                          <span>Los tiempos de entrega dependen exclusivamente del courier seleccionado y la región de destino.</span>
                        </li>
                      </ul>
                    </div>
                  }
                />
                <FooterDialogLink 
                  title="Contacto" 
                  content={
                    <div className="space-y-8 py-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-accent uppercase font-bold tracking-widest">WhatsApp Directo</span>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="text-2xl font-headline font-bold text-white hover:text-accent transition-colors">+56 9 4062 8182</a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-accent uppercase font-bold tracking-widest">Correo de Soporte</span>
                        <a href="mailto:soporte.clipea@gmail.com" className="text-lg font-bold text-white/80 hover:text-white transition-colors">soporte.clipea@gmail.com</a>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/20">
                © 2026 clipea Chile. Todos los derechos reservados.
              </p>
              <div className="flex gap-8 opacity-40">
                <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-accent transition-colors duration-300">Privacidad</a>
                <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-accent transition-colors duration-300">Términos</a>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 flex items-center gap-2">
                Despachos a todo Chile 🇨🇱
              </span>
            </div>
          </div>
        </div>
      </footer>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}

function CheckCircle({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function FooterDialogLink({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/50 hover:text-accent transition-all duration-500 flex items-center gap-3 group/link w-fit text-left">
          <div className="w-0 h-[1.5px] bg-accent group-hover/link:w-6 transition-all duration-500" />
          {title}
          <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-500" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#050505]/95 backdrop-blur-2xl border-white/10 text-white max-w-lg rounded-[32px] p-10 shadow-[0_0_100px_rgba(0,0,0,0.8)] border-none md:border md:border-white/10">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl font-headline font-bold uppercase tracking-tighter text-white">
            {title}<span className="text-accent">.</span>
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}
