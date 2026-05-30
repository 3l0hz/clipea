'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, User, ShoppingCart, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { CartDrawer } from './CartDrawer';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { label: 'PROMO', href: '#promo' },
  { label: 'Moto & Aventura', href: '#moto-aventura' },
  { label: 'Cámaras & Creación', href: '#camaras-creacion' },
  { label: 'Setup & Escritorio', href: '#setup-escritorio' },
  { label: 'Hogar inteligente', href: '#hogar-inteligente' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#020817]/95 backdrop-blur-2xl border-b border-white/5 py-2 shadow-xl" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href="#home" className="relative z-10 text-[28px] font-headline font-bold tracking-tighter text-white group shrink-0">
          clipea<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center justify-center flex-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 whitespace-nowrap",
                link.label === 'PROMO' ? "text-accent" : "text-white/50 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0 relative z-10">
          <CartDrawer>
            <button className="relative text-white/80 hover:text-accent transition-colors duration-300 group">
              <ShoppingCart size={22} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-black text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,217,255,0.5)]">
                  {totalItems}
                </span>
              )}
            </button>
          </CartDrawer>

          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white/80 hover:text-accent transition-colors duration-300">
                <Menu size={24} strokeWidth={2} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#020817]/98 backdrop-blur-3xl border-white/5 w-full p-0 flex flex-col">
              <div className="flex justify-between items-center px-8 py-8 border-b border-white/5">
                <span className="text-[28px] font-headline font-bold text-white tracking-tighter">clipea<span className="text-accent">.</span></span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-white/70 hover:text-white transition-all">
                    <X size={26} strokeWidth={1.5} />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-10 space-y-16">
                <div className="space-y-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Categorías</h3>
                  <div className="flex flex-col gap-6">
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <a 
                          href={link.href} 
                          className={cn(
                            "text-3xl font-headline font-bold transition-all duration-500 hover:translate-x-2",
                            link.label === 'PROMO' ? "text-accent" : "text-white/60 hover:text-white"
                          )}
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
