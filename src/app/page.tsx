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
  Clock,
  Sparkles,
  ArrowRight
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
      <section id="home" className="relative h-[85vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center saturate-[1.05] contrast-[1.02] transform-gpu"
          >
            <source src="https://bwdvsbxwqlnlzfwfsoid.supabase.co/storage/v1/object/public/HeroSection/2%20slide/0506%20(2).mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#020817]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 animate-fade-in-up">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase">
            Equipamiento Premium
          </Badge>
          <h1 className="text-4xl md:text-8xl font-headline font-bold tracking-tighter text-white leading-[0.9]">
            Captura <br/>
            <span className="text-gradient">cada aventura</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-sm md:text-xl leading-relaxed font-medium px-4">
            Equipamiento de alta gama para creadores y aventureros.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-6 mx-auto">
            <button 
              className="h-[44px] px-6 text-sm font-bold rounded-[12px] bg-gradient-to-r from-[#00D9FF] to-[#1A73FF] text-white border-none shadow-[0_0_20px_rgba(0,217,255,0.35)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-[10px] w-fit"
              onClick={() => {
                const bulletProduct = PRODUCTS.find(p => p.id === 'Bullet');
                if (bulletProduct) handleViewDetails(bulletProduct);
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M9 1.5C9 5.64214 5.64214 9 1.5 9C5.64214 9 9 12.3579 9 16.5C9 12.3579 12.3579 9 16.5 9C12.3579 9 9 5.64214 9 1.5Z" fill="white"/>
                <circle cx="4.5" cy="4.5" r="1.2" fill="white"/>
                <circle cx="13.5" cy="13.5" r="0.8" fill="white"/>
              </svg>
              <span>Logra este efecto</span>
            </button>
            
            <a 
              href="#catalog"
              className="h-[44px] px-6 text-sm font-bold rounded-[12px] bg-[#031225]/40 backdrop-blur-md border border-[#00D9FF]/30 text-white hover:bg-[#031225]/60 hover:border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.25)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 w-fit group" 
            >
              <span>Explorar Catálogo</span>
              <ArrowRight size={16} className="text-[#00D9FF] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="relative z-20 md:bg-transparent md:py-8 py-4 -mt-16 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="md:bg-card/40 md:border md:border-white/5 md:backdrop-blur-xl md:rounded-[24px] bg-[#031225]/80 backdrop-blur-xl border border-white/5 rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
              <div className="flex items-center gap-4 md:justify-start">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-accent/5 flex items-center justify-center shrink-0 border border-accent/10 md:border-none">
                  <Truck className="text-accent" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em]">Envíos a todo Chile</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70">Starken, BlueExpress y Chilexpress</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:justify-center border-y border-white/5 py-4 md:py-0 md:border-none">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-accent/5 flex items-center justify-center shrink-0 border border-accent/10 md:border-none">
                  <Shield className="text-accent" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em]">Garantía Asegurada</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70">Productos testeados para acción</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:justify-end">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-accent/5 flex items-center justify-center shrink-0 border border-accent/10 md:border-none">
                  <Zap className="text-accent" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em]">Atención Personalizada</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70">Soporte directo vía WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 md:py-32 bg-transparent">
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
                      <div className="h-[2px] w-12 bg-accent shadow-[0_0_10px_rgba(0,217,255,0.5)]" />
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
                                ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(0,217,255,0.4)]" 
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#020817] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-24">
            
            <div className="space-y-10">
              <a href="#home" className="text-4xl font-headline font-bold tracking-tighter text-white group w-fit">
                clipea<span className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.5)] transition-all duration-500">.</span>
              </a>
              <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.8] max-w-[320px] uppercase font-bold tracking-[0.2em] opacity-70">
                Accesorios premium para cámaras deportivas y creación de contenido.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/clipea.cl" 
                  target="_blank"
                  className="relative w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 group/social"
                >
                  <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Nuestros Servicios</h4>
              <div className="space-y-8">
                {[
                  { icon: Truck, text: "Envíos a todo Chile" },
                  { icon: ShieldCheck, text: "Garantía fallas fábrica" },
                  { icon: Headset, text: "Soporte personalizado" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-accent bg-accent/5 group-hover:border-accent/40 transition-all duration-700">
                      <item.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Contacto</h4>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-accent uppercase font-bold tracking-widest">WhatsApp Directo</span>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="text-2xl font-headline font-bold text-white hover:text-accent transition-colors">+56 9 4062 8182</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/20">
              © 2026 clipea Chile.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
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
