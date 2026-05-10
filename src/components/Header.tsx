'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { CartDrawer } from './CartDrawer';
import { useCart } from '@/context/CartContext';

const CATEGORIES = [
  { label: 'Soportes Moto / Vehículo', href: '#soportes-moto-vehiculo' },
  { label: 'Trípodes', href: '#tripodes' },
  { label: 'Bastones Selfie', href: '#bastones-selfie' },
  { label: 'Promos Moto', href: '#promos-moto' },
  { label: 'Accesorios Cámara', href: '#accesorios-camara' },
  { label: 'Accesorios Corporales', href: '#accesorios-corporales' },
];

const BRANDS = [
  'Insta360', 'GoPro', 'DJI', 'Telesin', 'Ulanzi', 'SunnyLife'
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        isScrolled 
          ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-8"
      )}
    >
      <div 
        className={cn(
          "absolute bottom-0 left-0 w-full h-[1px] transition-opacity duration-700 pointer-events-none",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center gap-20">
        {/* Logo */}
        <a href="#home" className="relative z-10 text-3xl font-headline font-bold tracking-tighter text-white group flex items-center gap-1 shrink-0">
          <span className="relative">
            elohz
            <span className="text-accent">.</span>
            <span className="absolute inset-0 blur-2xl bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 lg:gap-14 items-center">
          {CATEGORIES.slice(0, 4).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all duration-500 group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[4px] bg-accent/20 blur-md transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-6 md:gap-8">
          <CartDrawer>
            <button className="relative text-accent transition-transform hover:scale-110 active:scale-95 duration-300 group">
              <ShoppingCart size={28} strokeWidth={1.5} className="group-hover:drop-shadow-[0_0_8px_rgba(142,255,127,0.5)]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-black text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(142,255,127,0.8)] animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </button>
          </CartDrawer>

          <Sheet>
            <SheetTrigger asChild>
              <button className="text-accent transition-transform hover:scale-110 active:scale-95 duration-300 group">
                <Menu size={32} strokeWidth={1.5} className="group-hover:drop-shadow-[0_0_8px_rgba(142,255,127,0.5)]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#050505]/95 backdrop-blur-2xl border-white/5 w-full p-0 flex flex-col">
              <div className="flex justify-between items-center px-8 py-8 border-b border-white/5">
                <span className="text-2xl font-headline font-bold text-white tracking-tighter">elohz<span className="text-accent">.</span></span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-white/70 hover:text-white transition-all">
                    <X size={26} strokeWidth={1.5} />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-10 space-y-16">
                <div className="space-y-8">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Colecciones</h3>
                  <div className="flex flex-col gap-8">
                    {CATEGORIES.map((cat) => (
                      <SheetClose asChild key={cat.label}>
                        <a href={cat.href} className="text-3xl font-headline font-bold text-white/60 hover:text-white transition-all duration-500 hover:translate-x-2 flex items-center gap-4">
                          <span className="w-8 h-[1px] bg-accent/30" />
                          {cat.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Partners Técnicos</h3>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                    {BRANDS.map((brand) => (
                      <span key={brand} className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between text-white/80">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <User size={18} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Mi Espacio</span>
                  </div>
                  <ChevronRight size={18} className="text-white/20" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
