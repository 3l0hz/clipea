'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Minus, 
  Plus, 
  Trash2, 
  X, 
  ShoppingBag, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { cn } from '@/lib/utils';

export const CartDrawer = ({ children }: { children: React.ReactNode }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [isCheckoutExpanded, setIsCheckoutExpanded] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'home' | 'whatsapp'>('home');
  const [shippingCalculated, setShippingCalculated] = useState(false);

  const handleWhatsAppCheckout = () => {
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
      <SheetContent className="bg-[#050505]/95 backdrop-blur-2xl border-white/5 w-full sm:max-w-md p-0 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] border-none">
        <SheetHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <ShoppingCart size={24} strokeWidth={1.5} />
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

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full py-20 flex flex-col items-center justify-center gap-6 opacity-20">
                <ShoppingCart size={80} strokeWidth={1} />
                <p className="text-sm font-bold uppercase tracking-widest">El carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Product List */}
                <div className={cn("space-y-4 transition-all duration-500", isCheckoutExpanded ? "opacity-30 pointer-events-none scale-95 blur-sm" : "opacity-100")}>
                  {cart.map((item) => (
                    <div key={item.id} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-4 hover:bg-white/[0.05] transition-all hover:border-accent/20">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-transparent border border-white/5 shrink-0">
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
                  ))}
                </div>

                {/* Advanced Checkout Section */}
                {isCheckoutExpanded && (
                  <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-10 py-4">
                    <button 
                      onClick={() => setIsCheckoutExpanded(false)}
                      className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
                    >
                      <ChevronDown className="rotate-90" size={14} /> Volver al listado
                    </button>

                    {/* Delivery Data */}
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Datos de Entrega
                      </h3>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Nombre Completo</Label>
                          <Input className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm" placeholder="Ej: Juan Pérez" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Teléfono</Label>
                            <Input className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm" placeholder="+56 9..." />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</Label>
                            <Input className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm" placeholder="juan@email.com" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Región</Label>
                            <Input className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm" placeholder="Metropolitana" />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Comuna</Label>
                            <Input className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm" placeholder="Providencia" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Dirección completa</Label>
                          <Input className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm" placeholder="Calle, número, depto o referencia" />
                        </div>
                      </div>
                    </div>

                    {/* Delivery Method */}
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Método de Entrega
                      </h3>
                      <RadioGroup value={deliveryMethod} onValueChange={(v: any) => setDeliveryMethod(v)} className="gap-3">
                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'home' ? "bg-accent/5 border-accent/40" : "bg-white/5 border-white/5"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2 rounded-lg bg-white/5", deliveryMethod === 'home' && "text-accent")}>
                              <Truck size={18} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Envío a domicilio</p>
                              <p className="text-[10px] text-white/40">Despacho vía Starken o BlueExpress</p>
                            </div>
                          </div>
                          <RadioGroupItem value="home" className="border-white/20" />
                        </Label>

                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'whatsapp' ? "bg-accent/5 border-accent/40" : "bg-white/5 border-white/5"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2 rounded-lg bg-white/5", deliveryMethod === 'whatsapp' && "text-accent")}>
                              <MapPin size={18} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Retiro / Coordinación</p>
                              <p className="text-[10px] text-white/40">Acuerda retiro o envío directo</p>
                            </div>
                          </div>
                          <RadioGroupItem value="whatsapp" className="border-white/20" />
                        </Label>
                      </RadioGroup>

                      {deliveryMethod === 'home' ? (
                        <div className="space-y-4 animate-in fade-in duration-500">
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Costo de envío</span>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => setShippingCalculated(true)}
                                className="h-7 text-[9px] font-bold text-accent border border-accent/20 hover:bg-accent/10 px-3 rounded-lg"
                              >
                                {shippingCalculated ? "RECALCULAR" : "CALCULAR ENVÍO"}
                              </Button>
                            </div>
                            {shippingCalculated && (
                              <p className="text-lg font-headline font-bold text-white tracking-tighter">
                                $4.500 <span className="text-[10px] text-white/20 uppercase font-medium ml-2 tracking-tight">(Valor estimado)</span>
                              </p>
                            )}
                          </div>
                          <div className="flex items-start gap-3 opacity-60">
                            <Clock size={14} className="text-accent shrink-0 mt-0.5" />
                            <p className="text-[10px] font-bold text-white/60 uppercase leading-relaxed tracking-tight">
                              Los envíos se realizan al día siguiente hábil luego de confirmada la compra.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-5 bg-accent/5 rounded-2xl border border-accent/20 animate-in fade-in duration-500">
                          <p className="text-[11px] font-bold text-white/80 uppercase leading-relaxed tracking-widest text-center">
                            Podrás coordinar retiro y detalles directamente por WhatsApp después de confirmar tu pedido.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Payment Gateway Placeholder */}
                    {deliveryMethod === 'home' && (
                      <div className="space-y-6 pt-4 animate-in slide-in-from-bottom-4 duration-700">
                        <div className="relative group overflow-hidden bg-white/[0.03] border border-white/10 rounded-[24px] p-6 space-y-4">
                          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-50" />
                          <div className="flex justify-between items-start relative z-10">
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Pago online seguro</h4>
                              <p className="text-[10px] text-accent font-bold uppercase tracking-widest">Próximamente disponible</p>
                            </div>
                            <ShieldCheck className="text-accent/40" size={24} />
                          </div>
                          <div className="flex gap-4 opacity-20 grayscale relative z-10">
                            <CreditCard size={24} />
                            <div className="w-10 h-6 bg-white/20 rounded" />
                            <div className="w-10 h-6 bg-white/20 rounded" />
                          </div>
                          <p className="text-[10px] text-white/30 uppercase font-medium leading-relaxed tracking-tight relative z-10">
                            Estamos integrando MercadoPago y Flow para que puedas pagar directamente desde Clipea.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-white/5 bg-[#080808] space-y-5 shrink-0">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Total a pagar</p>
                <p className="text-3xl font-headline font-bold text-white tracking-tighter">
                  ${(subtotal + (shippingCalculated && deliveryMethod === 'home' ? 4500 : 0)).toLocaleString('es-CL')}
                </p>
              </div>
              <p className="text-[10px] text-accent/60 uppercase font-bold tracking-widest pb-1">
                {deliveryMethod === 'home' ? "Envío por pagar" : "Retiro coordinado"}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {!isCheckoutExpanded && (
                <Button 
                  onClick={() => setIsCheckoutExpanded(true)}
                  className="w-full h-14 rounded-2xl bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <CreditCard size={18} className="mr-2" /> Pagar Online
                </Button>
              )}

              <Button 
                onClick={handleWhatsAppCheckout}
                className={cn(
                  "w-full h-14 rounded-2xl transition-all flex items-center justify-center gap-3",
                  isCheckoutExpanded && deliveryMethod === 'home' 
                    ? "bg-white/5 border border-white/10 text-white/40 cursor-not-allowed opacity-50" 
                    : "glass-button bg-accent text-black font-bold text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 glass-reflective-button-edge shadow-[0_0_30px_rgba(142,255,127,0.3)]"
                )}
                disabled={isCheckoutExpanded && deliveryMethod === 'home'}
              >
                <MessageSquare size={18} /> {isCheckoutExpanded ? "Confirmar por WhatsApp" : "Comprar por WhatsApp"}
              </Button>
            </div>
            <p className="text-[9px] text-center text-white/20 uppercase font-bold tracking-[0.3em]">
              {isCheckoutExpanded ? "Valida tus datos antes de confirmar" : "Serás redirigido para coordinar pago y envío"}
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
