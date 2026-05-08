
'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Selfie Sticks', href: '#catalog' },
  { label: 'Soportes Moto', href: '#catalog' },
  { label: 'Trípodes', href: '#catalog' },
  { label: 'Accesorios', href: '#catalog' },
  { label: 'Contacto', href: '#faq' },
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
          {NAV_LINKS.map((link) => (
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
            <SheetContent side="right" className="bg-background border-border p-0">
              <div className="flex flex-col h-full pt-16 px-6 gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-2xl font-headline font-bold text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-auto pb-10">
                   <Button className="w-full bg-white text-black font-bold h-12">
                     Consultar por WhatsApp
                   </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
