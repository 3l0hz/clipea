'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PRODUCTS, EXPERIMENTAL_PRODUCT, EXPERIMENTAL_DESKTOP_PRODUCT, EXPERIMENTAL_NORMAL_PRODUCT, EXPERIMENTAL_NORMAL_PRODUCT_V2, Category, WHATSAPP_NUMBER } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Truck, 
  Zap, 
  Camera, 
  Instagram, 
  Youtube, 
  Twitter, 
  ShieldCheck, 
  Headset, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
          <div className="mb-24 md:mb-32">
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-4 tracking-tighter">Equípate para la acción</h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Explora nuestra selección premium de accesorios diseñada para resistir las condiciones más extremas.</p>
          </div>

          <div className="flex flex-col gap-32 md:gap-48 pb-20">
            {CATEGORY_ORDER.map((cat) => {
              const categoryProducts = PRODUCTS.filter(p => p.category === cat.value);
              if (categoryProducts.length === 0 && cat.value !== 'Accesorios Cámara') return null;

              const categoryId = cat.value.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');

              return (
                <div key={cat.value} id={categoryId} className="space-y-12 md:space-y-16 scroll-mt-32">
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
                        <div className="md:hidden space-y-6">
                          <ProductCard
                            product={EXPERIMENTAL_PRODUCT}
                            onViewDetails={handleViewDetails}
                            isExperimental={true}
                          />
                          <ProductCard
                            product={EXPERIMENTAL_NORMAL_PRODUCT}
                            onViewDetails={handleViewDetails}
                            isPremium={true}
                          />
                          <ProductCard
                            product={EXPERIMENTAL_NORMAL_PRODUCT_V2}
                            onViewDetails={handleViewDetails}
                            isPremium={true}
                          />
                        </div>
                        <div className="hidden md:block">
                          <ProductCard
                            product={EXPERIMENTAL_DESKTOP_PRODUCT}
                            onViewDetails={handleViewDetails}
                            isPremium={true}
                          />
                        </div>
                        <div className="hidden md:block">
                          <ProductCard
                            product={EXPERIMENTAL_NORMAL_PRODUCT}
                            onViewDetails={handleViewDetails}
                            isPremium={false}
                          />
                        </div>
                        <div className="hidden md:block">
                          <ProductCard
                            product={EXPERIMENTAL_NORMAL_PRODUCT_V2}
                            onViewDetails={handleViewDetails}
                            isPremium={false}
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

      {/* Refined Footer */}
      <footer className="py-24 bg-[#060606] border-t border-white/5 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-24">
            
            {/* Column 1: Brand & Description */}
            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <a href="#home" className="text-4xl font-headline font-bold tracking-tighter text-white group flex items-center gap-1 w-fit">
                elohz<span className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(142,255,127,0.5)] transition-all duration-500">.</span>
              </a>
              <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.8] max-w-[320px] uppercase font-bold tracking-[0.2em] opacity-70">
                Accesorios para cámaras deportivas, creación de contenido POV y equipamiento compatible con Insta360, GoPro y DJI.
              </p>
              <div className="flex gap-6">
                {[
                  { icon: Instagram, href: "https://instagram.com/elohz.cl" },
                  { icon: Youtube, href: "#" },
                  { icon: Twitter, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="relative w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-500 hover:text-accent hover:border-accent/30 hover:bg-accent/5 group/social overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/social:translate-y-0 transition-transform duration-500" />
                    <social.icon size={20} className="relative z-10 group-hover/social:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: SERVICES */}
            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Servicios Premium</h4>
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

            {/* Column 3: HELP & POLICIES */}
            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-4 w-fit pr-10">Ayuda & Políticas</h4>
              <div className="flex flex-col gap-8">
                <FooterDialogLink 
                  title="Devoluciones" 
                  content={
                    <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                      <p>En ELOHZ tienes hasta 7 días desde la recepción del pedido para solicitar una devolución o reembolso.</p>
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
                      <p>ELOHZ comercializa accesorios y equipamiento para cámaras deportivas y creación de contenido POV.</p>
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
                        <a href="mailto:soporte.elohz@gmail.com" className="text-lg font-bold text-white/80 hover:text-white transition-colors">soporte.elohz@gmail.com</a>
                      </div>
                    </div>
                  }
                />
              </div>
              <div className="pt-8 border-t border-white/5 space-y-4">
                <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] font-bold flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  WhatsApp: +56 9 4062 8182
                </p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] font-bold">soporte.elohz@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/20">
                © 2026 elohz Chile. Todos los derechos reservados.
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
              <div className="flex gap-4 opacity-10">
                <div className="w-10 h-6 rounded-md bg-white" />
                <div className="w-10 h-6 rounded-md bg-white" />
                <div className="w-10 h-6 rounded-md bg-white" />
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
