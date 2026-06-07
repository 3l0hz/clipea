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
  ArrowRight,
  X,
  Info,
  ChevronRight,
  Instagram
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<Record<string, string>>({});
  const [legalModal, setLegalModal] = useState<{ open: boolean, type: string | null }>({ open: false, type: null });
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

                  <div 
                    className={cn(
                      "grid gap-4 md:gap-6",
                      "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
                    )}
                  >
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-24">
            
            {/* Columna 1: Marca y Redes */}
            <div className="space-y-10">
              <a href="#home" className="text-4xl font-headline font-bold tracking-tighter text-white group w-fit">
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
                    onClick={() => openLegalModal(link.type)}
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
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/20">
                © 2026 CLIPEA CHILE. TODOS LOS DERECHOS RESERVADOS.
              </p>
              <div className="flex items-center gap-6">
                <button onClick={() => openLegalModal('privacidad')} className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-[#00D9FF] transition-colors">Privacidad</button>
                <button onClick={() => openLegalModal('terminos')} className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-[#00D9FF] transition-colors">Términos</button>
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

      {/* Modales Legales */}
      <LegalModals 
        isOpen={legalModal.open} 
        onClose={() => setLegalModal({ open: false, type: null })} 
        type={legalModal.type} 
      />

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

function LegalModals({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: string | null }) {
  const content = {
    devoluciones: {
      title: "Política de Devoluciones",
      text: (
        <div className="space-y-6">
          <p>En Clipea, nos esforzamos por ofrecer productos de la más alta calidad para tus aventuras. Si no estás satisfecho con tu compra, aquí tienes nuestra política de devoluciones:</p>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Condiciones para Devolución</h5>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li>El plazo para solicitar una devolución o cambio es de 10 días corridos desde la recepción del producto.</li>
              <li>El producto debe estar sin uso, en perfectas condiciones y con todos sus accesorios originales.</li>
              <li>El empaque original debe estar intacto (sin roturas, pegatinas o sellos dañados).</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Proceso</h5>
            <p className="text-sm text-white/70">Para iniciar el proceso, debes contactarnos vía WhatsApp adjuntando tu boleta o comprobante de compra. Una vez recibido el producto en nuestras instalaciones, realizaremos una revisión técnica antes de aprobar el reembolso o cambio.</p>
          </div>
          <p className="text-[10px] italic text-white/40">Exclusiones: Daños por mal uso, productos incompletos o manipulados fuera de los estándares de fábrica.</p>
        </div>
      )
    },
    'terminos-condiciones': {
      title: "Términos y Condiciones",
      text: (
        <div className="space-y-6">
          <p>Al acceder y utilizar el sitio web de Clipea, aceptas cumplir con los siguientes términos y condiciones de uso:</p>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Uso del Sitio</h5>
            <p className="text-sm text-white/70">El uso de este sitio web es exclusivo para la visualización de catálogo y coordinación de compras de accesorios para cámaras deportivas. La propiedad intelectual de los diseños y contenidos pertenece a Clipea Chile.</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Proceso de Compra</h5>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li>Los precios están expresados en pesos chilenos (CLP).</li>
              <li>La disponibilidad de stock se confirma al momento de la coordinación vía WhatsApp.</li>
              <li>La confirmación final del pedido se realiza una vez verificado el pago.</li>
            </ul>
          </div>
          <p className="text-sm text-white/70">Clipea se reserva el derecho de modificar precios y stock sin previo aviso.</p>
        </div>
      )
    },
    envios: {
      title: "Política de Envíos",
      text: (
        <div className="space-y-6">
          <p>Realizamos despachos a todo el territorio nacional con los mejores estándares de seguridad para tus accesorios.</p>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Métodos de Despacho</h5>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li><strong>Región Metropolitana:</strong> Contamos con una tarifa plana de $3.500 para la mayoría de las comunas, entregando en plazos de 24 a 48 horas hábiles.</li>
              <li><strong>Regiones:</strong> Envíos por pagar a través de Starken, BlueExpress o Chilexpress. El costo se coordina según el peso y dimensiones del pedido.</li>
              <li><strong>Retiro:</strong> Opción de retiro gratuito previa coordinación en puntos específicos.</li>
            </ul>
          </div>
          <p className="text-sm text-white/70">Es responsabilidad del cliente ingresar correctamente los datos de despacho. Los tiempos pueden variar según la demanda de los couriers externos.</p>
        </div>
      )
    },
    contacto: {
      title: "Contacto & Soporte",
      text: (
        <div className="space-y-6">
          <p>¿Tienes dudas sobre compatibilidad o tu pedido? Estamos para ayudarte.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-[10px] mb-2">WhatsApp Directo</h5>
              <p className="text-lg font-headline font-bold text-white">+56 9 4062 8182</p>
              <p className="text-[10px] text-white/40 mt-1">Atención personalizada de Lunes a Sábado.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-[10px] mb-2">Redes Sociales</h5>
              <p className="text-sm text-white/70">@clipea.cl en Instagram y TikTok.</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">Para soporte postventa o consultas sobre garantías, por favor ten a mano tu número de pedido o comprobante de compra.</p>
        </div>
      )
    },
    privacidad: {
      title: "Política de Privacidad",
      text: (
        <div className="space-y-6">
          <p>En Clipea, valoramos y protegemos la privacidad de nuestros clientes.</p>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Uso de Datos</h5>
            <p className="text-sm text-white/70">Los datos recolectados (Nombre, Teléfono, Correo, Dirección) son utilizados exclusivamente para gestionar tu compra, coordinar el despacho y ofrecerte soporte postventa.</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#00D9FF] font-bold uppercase tracking-widest text-xs">Seguridad</h5>
            <p className="text-sm text-white/70">No vendemos ni compartimos tus datos personales con terceros para fines publicitarios. Puedes solicitar la rectificación o eliminación de tus datos en cualquier momento a través de nuestros canales de contacto.</p>
          </div>
        </div>
      )
    },
    terminos: {
      title: "Resumen de Términos",
      text: (
        <div className="space-y-4">
          <p className="text-sm text-white/70">Este es un resumen de las condiciones generales de uso de Clipea. Al comprar con nosotros, aceptas que la coordinación final se realiza vía WhatsApp y que los despachos dependen de la exactitud de los datos entregados por el cliente.</p>
          <ul className="list-disc pl-5 space-y-2 text-[11px] text-white/60">
            <li>Precios válidos al momento de la consulta.</li>
            <li>Garantías aplican por fallas de fábrica certificadas.</li>
            <li>Clipea no se hace responsable por mal uso de los accesorios en condiciones extremas no recomendadas.</li>
          </ul>
        </div>
      )
    }
  };

  const activeContent = type ? content[type as keyof typeof content] : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-[#031225] border border-[#00D9FF]/20 text-white backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] p-0 rounded-[32px] overflow-hidden">
        <DialogHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-headline font-bold uppercase tracking-tighter text-white">
            {activeContent?.title}
          </DialogTitle>
          <DialogClose asChild>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all">
              <X size={20} />
            </button>
          </DialogClose>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] p-10">
          <DialogDescription className="text-white/70 text-base leading-relaxed">
            {activeContent?.text}
          </DialogDescription>
        </ScrollArea>
        <div className="p-6 bg-black/20 border-t border-white/5 flex justify-end">
          <Button 
            onClick={onClose}
            className="rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black transition-all font-bold uppercase tracking-widest text-[10px] px-6"
          >
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
