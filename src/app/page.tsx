'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PRODUCTS, CATEGORY_STRUCTURE } from '@/constants/data';
import { 
  ShieldCheck, 
  Truck, 
  Zap, 
  ArrowRight,
  Headset,
  Clock
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { PromoMotoSection } from '@/components/PromoMotoSection';
import { ProductModal } from '@/components/ProductModal';
import { Product } from '@/types/store';
import { Footer } from '@/components/Footer';
import { LegalModals } from '@/components/LegalModals';

export default function Home() {
  const [activeSubcategory, setActiveSubcategory] = useState<Record<string, string>>({});
  const [legalModal, setLegalModal] = useState<{ open: boolean, type: string | null }>({ open: false, type: null });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSubcategoryChange = (mainCategory: string, sub: string) => {
    setActiveSubcategory(prev => ({
      ...prev,
      [mainCategory]: prev[mainCategory] === sub ? '' : sub
    }));
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const openLegalModal = (type: string) => {
    setLegalModal({ open: true, type });
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
          <Badge className="bg-[#00FF88]/10 text-[#00FF88] border-[#00FF88]/20 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase">
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
            <a 
              href="#promo-moto"
              className="h-[44px] px-6 text-sm font-bold rounded-[12px] bg-gradient-to-r from-[#00D9FF] to-[#1A73FF] text-white border-none shadow-[0_0_20px_rgba(0,217,255,0.35)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-[10px] w-fit"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M9 1.5C9 5.64214 5.64214 9 1.5 9C5.64214 9 9 12.3579 9 16.5C9 12.3579 12.3579 9 16.5 9C12.3579 9 9 5.64214 9 1.5Z" fill="white"/>
                <circle cx="4.5" cy="4.5" r="1.2" fill="white"/>
                <circle cx="13.5" cy="13.5" r="0.8" fill="white"/>
              </svg>
              <span>Logra este efecto</span>
            </a>
            
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
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-[#00FF88]/5 flex items-center justify-center shrink-0 border border-[#00FF88]/10 md:border-none">
                  <Truck className="text-[#00FF88]" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em]">Envíos a todo Chile</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70">Starken, BlueExpress y Chilexpress</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:justify-center border-y border-white/5 py-4 md:py-0 md:border-none">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-[#00FF88]/5 flex items-center justify-center shrink-0 border border-[#00FF88]/10 md:border-none">
                  <ShieldCheck className="text-[#00FF88]" size={isMobile ? 18 : 24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[11px] md:text-sm uppercase tracking-[0.1em]">Garantía Asegurada</h3>
                  <p className="text-[9px] md:text-xs text-muted-foreground uppercase font-medium tracking-tight opacity-70">Productos testeados para acción</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:justify-end">
                <div className="w-10 h-10 md:w-auto md:h-auto rounded-full bg-[#00FF88]/5 flex items-center justify-center shrink-0 border border-[#00FF88]/10 md:border-none">
                  <Zap className="text-[#00FF88]" size={isMobile ? 18 : 24} />
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

      {/* SECCIÓN PROMO MOTO */}
      <PromoMotoSection />

      {/* Catalog Section */}
      <section id="catalog" className="py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-32 md:gap-48 pb-20">
            {CATEGORY_STRUCTURE.map((cat) => {
              if (cat.label === 'PROMO') return null;

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
                      <div className="h-[2px] w-12 bg-[#00D9FF] shadow-[0_0_10px_rgba(0,217,255,0.5)]" />
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
                                ? "bg-[#00D9FF] text-black border-[#00D9FF] shadow-[0_0_20px_rgba(0,217,255,0.4)]" 
                                : "bg-white/5 text-white/40 border-white/10 hover:border-[#00D9FF] hover:text-white"
                            )}
                          >
                            {sub}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className={cn(
                    "grid grid-cols-2 gap-2.5 sm:gap-4",
                    "md:grid-cols-4 md:gap-6 lg:grid-cols-5"
                  )}>
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Reutilizable */}
      <Footer onOpenLegalModal={openLegalModal} />

      {/* Modales Legales Reutilizables */}
      <LegalModals 
        isOpen={legalModal.open} 
        onClose={() => setLegalModal({ open: false, type: null })} 
        type={legalModal.type} 
      />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      />
    </main>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}