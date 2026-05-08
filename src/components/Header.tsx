
'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const CATEGORIES = [
  { label: 'Promos Moto', href: '#catalog' },
  { label: 'Trípodes', href: '#catalog' },
  { label: 'Bastones Selfie', href: '#catalog' },
  { label: 'Soportes Moto / Vehículo', href: '#catalog' },
  { label: 'Accesorios Cámara', href: '#catalog' },
  { label: 'Accesorios Corporales', href: '#catalog' },
];

const BRANDS = [
  'Insta360', 'GoPro', 'DJI', 'Telesin', 'Ulanzi', 'SunnyLife'
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-headline font-bold tracking-tighter text-white">
          elohz<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {CATEGORIES.slice(0, 4).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-none w-full p-0 flex flex-col">
              {/* Header inside Sheet */}
              <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">
                <span className="text-2xl font-headline font-bold text-white">elohz</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <X size={24} />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-12">
                {/* Categorías Section */}
                <div className="space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Categorías</h3>
                  <div className="flex flex-col gap-6">
                    {CATEGORIES.map((cat) => (
                      <SheetClose asChild key={cat.label}>
                        <a href={cat.href} className="text-2xl font-headline font-bold text-white hover:text-accent transition-colors">
                          {cat.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                {/* Marcas Section */}
                <div className="space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Marcas Pro</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {BRANDS.map((brand) => (
                      <span key={brand} className="text-sm font-medium text-white/90">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer inside Sheet */}
              <div className="p-6 border-t border-white/5 bg-white/5">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <span className="text-base font-bold">Mi Cuenta</span>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
