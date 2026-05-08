
'use client';
import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { FAQ } from '@/components/FAQ';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PRODUCTS, EXPERIMENTAL_PRODUCT, Category, WHATSAPP_NUMBER } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { Shield, Truck, Zap, Camera, Smartphone as BikeIcon } from 'lucide-react';

const CATEGORIES: Category[] = [
  'Promos Moto',
  'Trípodes',
  'Bastones Selfie',
  'Soportes Moto / Vehículo',
  'Accesorios Cámara',
  'Accesorios Corporales'
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

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
              className="glass-button bg-white text-black hover:bg-white/90 px-14 h-16 text-lg md:text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
              asChild
            >
              <a href="#catalog">Explorar Catálogo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-card border-y border-border py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Truck className="text-accent" />
            <div>
              <h3 className="text-white font-bold text-sm">Envíos a todo Chile</h3>
              <p className="text-xs text-muted-foreground">Starken, BlueExpress y Chilexpress</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Shield className="text-accent" />
            <div>
              <h3 className="text-white font-bold text-sm">Garantía Asegurada</h3>
              <p className="text-xs text-muted-foreground">Productos testeados para acción</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <Zap className="text-accent" />
            <div>
              <h3 className="text-white font-bold text-sm">Atención Personalizada</h3>
              <p className="text-xs text-muted-foreground">Soporte directo vía WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-headline font-bold text-white mb-2">Equípate para la acción</h2>
              <p className="text-muted-foreground">Selecciona una categoría para filtrar nuestro catálogo.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'outline'}
                className={`rounded-full ${selectedCategory === 'All' ? 'bg-accent text-black' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                Todos
              </Button>
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  className={`rounded-full ${selectedCategory === cat ? 'bg-accent text-black' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {/* LAB: PRUEBA CARD - Solo Mobile */}
            <div className="md:hidden">
              <ProductCard
                product={EXPERIMENTAL_PRODUCT}
                onViewDetails={handleViewDetails}
                isExperimental={true}
              />
            </div>

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Section / Call to Action */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight">
              Graba mejor tus rutas y aventuras
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Nuestros accesorios están diseñados para resistir las condiciones más exigentes, asegurando que cada toma sea perfecta, ya sea en la carretera o en la montaña.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Camera className="text-accent" size={32} />
                </div>
                <span className="text-white text-sm font-bold">Action Cameras</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <BikeIcon className="text-accent" size={32} />
                </div>
                <span className="text-white text-sm font-bold">Moto Gear</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Footer */}
      <footer className="py-12 bg-[#0B0B0B] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2">elohz<span className="text-accent">.</span></h3>
              <p className="text-muted-foreground text-sm max-w-xs">Especialistas en accesorios para cámaras deportivas GoPro, Insta360 y DJI.</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Contacto</h4>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">WhatsApp: +56 9 4062 8182</a>
              <a href="mailto:soporte.elohz@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">soporte.elohz@gmail.com</a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Información</h4>
              <p className="text-muted-foreground text-sm">Envíos a todo Chile</p>
              <p className="text-muted-foreground text-sm">Basado en Chile 🇨🇱</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} elohz. Todos los derechos reservados.</p>
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
