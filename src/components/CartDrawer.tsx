'use client';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, X, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { cn } from '@/lib/utils';

export const CartDrawer = ({ children }: { children: React.ReactNode }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  const handleCheckout = () => {
    const message = encodeURIComponent(
      `Hola, quiero realizar el siguiente pedido:\n\n` +
      cart.map(item => `- ${item.name} (x${item.quantity}): ${item.price}`).join('\n') +
      `\n\n*Total a pagar: $${subtotal.toLocaleString('es-CL')}*`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="bg-[#050505]/95 backdrop-blur-2xl border-white/5 w-full sm:max-w-md p-0 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <SheetHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </div>
            <div>
              <SheetTitle className="text-2xl font-headline font-bold text-white tracking-tighter">Mi Carrito</SheetTitle>
              <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{totalItems} productos</p>
            </div>
          </div>
          <SheetClose asChild>
            <button className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all flex items-center justify-center group">
              <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-6 opacity-40">
              <ShoppingBag size={60} strokeWidth={1} />
              <p className="text-sm font-bold uppercase tracking-widest">El carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-4 hover:bg-white/[0.05] transition-all hover:border-accent/20">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-black/40 border border-white/5">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[13px] font-bold text-white leading-tight uppercase tracking-tight">{item.name}</h4>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/20 hover:text-destructive transition-colors p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-accent font-headline font-bold text-base">{item.price}</p>
                  
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex items-center bg-black/40 border border-white/10 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-white/5 bg-white/[0.02] space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Total a pagar</p>
                <p className="text-3xl font-headline font-bold text-white tracking-tighter">
                  ${subtotal.toLocaleString('es-CL')}
                </p>
              </div>
              <p className="text-[10px] text-accent/60 uppercase font-bold tracking-widest pb-1">Envío por coordinar</p>
            </div>

            <Button 
              onClick={handleCheckout}
              className="w-full h-14 rounded-2xl glass-button bg-accent text-black font-bold text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all glass-reflective-button-edge shadow-[0_0_30px_rgba(142,255,127,0.3)]"
            >
              Comprar por WhatsApp
            </Button>
            <p className="text-[9px] text-center text-white/20 uppercase font-bold tracking-[0.3em]">Serás redirigido para coordinar pago y envío</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
