
'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PRODUCTS, EXPERIMENTAL_PRODUCT, EXPERIMENTAL_DESKTOP_PRODUCT, Category, WHATSAPP_NUMBER } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Truck, 
  Zap, 
  Camera, 
  Smartphone as BikeIcon, 
  Instagram, 
  Youtube, 
  Twitter, 
  ShieldCheck, 
  Headset, 
  Clock 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CATEGORY_ORDER: { label: string; value: Category; description: string }[] = [
  { 
    label: 'Soportes Moto / Vehículo', 
    value: 'Soportes Moto / Vehículo',
    description: 'Fijaciones de alta resistencia para manillares, espejos y superficies curvas en cualquier terreno.'
  },
  { 
    label: 'Trípodes', 
    value: 'Trípodes',
    description: 'Estabilidad total para tus grabaciones estáticas, time-lapses y vlogs profesionales.'
  },
  { 
    label: 'Bastones Selfie', 
    value: 'Bastones Selfie',
    description: 'Captura ángulos increíbles y tomas tipo drone con nuestra selección de bastones invisibles y de carbono.'
  },
  { 
    label: 'Promos Moto', 
    value: 'Promos Moto',
    description: 'Packs exclusivos diseñados para motovloggers y aventureros que buscan el setup perfecto con el mejor ahorro.'
  },
  { 
    label: 'Soportes Corporales', 
    value: 'Accesorios Corporales',
    description: 'La mejor perspectiva POV para tus deportes de acción con pecheras y soportes de alta sujeción.'
  },
  { 
    label: 'Accesorios Cámara', 
    value: 'Accesorios Cámara',
    description: 'Protección y complementos esenciales para mantener tu equipo siempre listo para la acción.'
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
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
            Premium Gear for Adventure
          </Badge>
          <h1 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter text-white leading-[0.9]">
            Accesorios para <br/>
            <span className="text-gradient">cámaras deportivas</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 md:text-xl leading-relaxed font-medium">
            Selfie sticks, soportes de moto, trípodes y accesorios para grabar rutas, viajes y contenido con la mejor estabilidad.
          </p>
          <div className="flex justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="glass-button bg-black/20 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] px-14 h-16 text-lg md:text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-500" 
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
          <div className="mb-24 md:mb-32">
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-4 tracking-tighter">Equípate para la acción</h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Explora nuestra selección premium de accesorios diseñada para resistir las condiciones más extremas.</p>
          </div>

          <div className="flex flex-col gap-32 md:gap-48 pb-20">
            {CATEGORY_ORDER.map((cat) => {
              const categoryProducts = PRODUCTS.filter(p => p.category === cat.value);
              if (categoryProducts.length === 0 && cat.value !== 'Accesorios Cámara') return null;

              return (
                <div key={cat.value} className="space-y-12 md:space-y-16">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-accent" />
                      <h3 className="text-3xl md:text-5xl font-headline font-bold text-white uppercase tracking-tight">
                        {cat.label}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-16">
                      {cat.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {cat.value === 'Accesorios Cámara' && (
                      <>
                        <div className="md:hidden">
                          <ProductCard
                            product={EXPERIMENTAL_PRODUCT}
                            onViewDetails={handleViewDetails}
                            isExperimental={true}
                          />
                        </div>
                        <div className="hidden md:block">
                          <ProductCard
                            product={EXPERIMENTAL_DESKTOP_PRODUCT}
                            onViewDetails={handleViewDetails}
                            isPremium={true}
                          />
                        </div>
                      </>
                    )}

                    {categoryProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={handleViewDetails}
                        isPremium={product.category === 'Promos Moto'}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Redesigned Footer */}
      <footer className="py-24 bg-[#060606] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-24">
            
            {/* Columna Marca */}
            <div className="space-y-10">
              <a href="#" className="text-4xl font-headline font-bold tracking-tighter text-white">
                elohz<span className="text-accent">.</span>
              </a>
              <p className="text-muted-foreground text-[11px] leading-relaxed max-w-[280px] uppercase font-bold tracking-[0.25em] opacity-80">
                Accesorios premium para cámaras de acción y creación de contenido técnico de alto nivel.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                  <Youtube size={22} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                  <Twitter size={22} />
                </a>
              </div>
            </div>

            {/* Columna SERVICIOS */}
            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Servicios</h4>
              <div className="space-y-7">
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-accent bg-accent/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                    <Truck size={18} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Envíos a todo Chile</span>
                </div>
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-accent bg-accent/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Garantía fallas fábrica</span>
                </div>
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-accent bg-accent/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                    <Headset size={18} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Soporte personalizado</span>
                </div>
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-accent bg-accent/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                    <Clock size={18} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Atención postventa</span>
                </div>
              </div>
            </div>

            {/* Columna AYUDA & POLÍTICAS */}
            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Ayuda & Políticas</h4>
              <div className="flex flex-col gap-6">
                <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-all duration-300">Devoluciones</a>
                <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-all duration-300">Términos y condiciones</a>
                <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-all duration-300">Política de envíos</a>
                <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-all duration-300">Contacto</a>
              </div>
              <div className="pt-6 border-t border-white/5 space-y-3">
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">WhatsApp: +56 9 4062 8182</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">soporte.elohz@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                © 2026 elohz Chile. Todos los derechos reservados.
              </p>
              <div className="flex gap-8 opacity-40">
                <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-accent transition-colors">Privacy</a>
                <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-accent transition-colors">Terms</a>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Basado en Chile 🇨🇱</span>
              <div className="flex gap-4 opacity-10">
                <div className="w-9 h-6 rounded-sm bg-white" />
                <div className="w-9 h-6 rounded-sm bg-white" />
                <div className="w-9 h-6 rounded-sm bg-white" />
              </div>
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
