'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Minus, 
  Plus, 
  Trash2, 
  X, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  ChevronDown, 
  MapPin,
  Clock,
  ShieldCheck,
  Globe,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/constants/data';
import { cn } from '@/lib/utils';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const BLOCKED_DOMAINS = [
  'tempmail.com', '10minutemail.com', 'mailinator.com', 
  'guerrillamail.com', 'yopmail.com', 'throwawaymail.com', 
  'disposablemail.com', 'getnada.com', 'fakeinbox.com'
];

const SUGGESTED_DOMAINS = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];

const PREFIXES = [
  { label: 'CHI +56', value: '+56' },
  { label: 'PER +51', value: '+51' },
  { label: 'VEN +58', value: '+58' },
  { label: 'ARG +54', value: '+54' },
  { label: 'COL +57', value: '+57' },
];

const REGIONS = [
  "RM Región Metropolitana",
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes"
];

const COMMUNES = [
  "Santiago",
  "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", 
  "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", 
  "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", 
  "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", 
  "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", 
  "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", 
  "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", 
  "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", 
  "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", 
  "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"
];

export const CartDrawer = ({ children }: { children: React.ReactNode }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [isCheckoutExpanded, setIsCheckoutExpanded] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'home-rm' | 'home-region' | 'pickup'>('home-rm');
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phonePrefix, setPhonePrefix] = useState(PREFIXES[0].value);
  const [region, setRegion] = useState(REGIONS[0]);
  const [commune, setCommune] = useState(COMMUNES[0]);
  const [address, setAddress] = useState('');
  
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const checkoutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCheckoutExpanded && checkoutSectionRef.current) {
      const timer = setTimeout(() => {
        checkoutSectionRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isCheckoutExpanded]);

  const isTempEmail = useMemo(() => {
    if (!email.includes('@')) return false;
    const domain = email.split('@')[1];
    return BLOCKED_DOMAINS.includes(domain?.toLowerCase());
  }, [email]);

  const emailSuggestions = useMemo(() => {
    if (!email.includes('@')) return [];
    const [user, domain] = email.split('@');
    if (domain.length > 0 && !SUGGESTED_DOMAINS.some(d => d.startsWith(domain))) return [];
    return SUGGESTED_DOMAINS.filter(d => d.startsWith(domain)).map(d => `${user}@${d}`);
  }, [email]);

  const shippingCost = deliveryMethod === 'home-rm' ? 3500 : 0;
  const finalTotal = subtotal + shippingCost;

  // Validation Logic
  const isNameValid = fullName.trim().length >= 3;
  const isPhoneValid = phone.trim().length >= 7;
  const isRegionValid = !!region;
  const isCommuneValid = !!commune;
  const isAddressValid = address.trim().length >= 5;

  const isFormValid = useMemo(() => {
    if (cart.length === 0) return false;
    if (isTempEmail) return false;

    const commonValid = isNameValid && isPhoneValid && isRegionValid;

    if (deliveryMethod === 'home-rm') {
      return commonValid && isCommuneValid && isAddressValid;
    }
    if (deliveryMethod === 'home-region') {
      return commonValid && isCommuneValid;
    }
    if (deliveryMethod === 'pickup') {
      return commonValid;
    }
    return false;
  }, [cart.length, isTempEmail, isNameValid, isPhoneValid, isRegionValid, isCommuneValid, isAddressValid, deliveryMethod]);

  const handleWhatsAppCheckout = () => {
    if (!isFormValid) return;

    const shippingText = deliveryMethod === 'home-rm' 
      ? `\nEnvío: Región Metropolitana ($3.500)`
      : deliveryMethod === 'home-region'
      ? `\nEnvío: Regiones (Por coordinar)`
      : `\nEnvío: Retiro / Coordinación (Sin costo)`;

    const addressText = deliveryMethod !== 'pickup' 
      ? `\nDatos Envío:\n- Región: ${region}\n- Comuna: ${commune}${deliveryMethod === 'home-rm' ? `\n- Dirección: ${address}` : ''}`
      : `\nRetiro: Coordinación vía WhatsApp`;

    const message = encodeURIComponent(
      `Hola, quiero realizar el siguiente pedido:\n\n` +
      `Cliente: ${fullName}\n` +
      `Teléfono: ${phonePrefix} ${phone}\n` +
      `Email: ${email}\n\n` +
      `Productos:\n` +
      cart.map(item => `- ${item.name} (x${item.quantity}): ${item.price}`).join('\n') +
      `\n${shippingText}` +
      `${addressText}` +
      `\n\n*Total a pagar: $${finalTotal.toLocaleString('es-CL')}*`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleStartCheckout = () => {
    setIsCheckoutExpanded(true);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setEmail(suggestion);
    setShowEmailSuggestions(false);
  };

  // Name formatting logic
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const formatted = val
      .split(' ')
      .map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    setFullName(formatted);
  };

  // Address formatting logic
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const connectors = ['de', 'del', 'la', 'las', 'los', 'y'];
    
    // Capitalize each word respecting connectors
    let formatted = val.split(' ').map((word, index) => {
      if (word.length === 0) return '';
      const lowerWord = word.toLowerCase();
      // If it's a connector and not the first word, keep it lowercase
      if (connectors.includes(lowerWord) && index !== 0) {
        return lowerWord;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    // Automatic comma after number: detection if user finished writing a number then a space
    // and if there's no comma already.
    if (/\d+ $/.test(formatted) && !formatted.includes(',')) {
      formatted = formatted.trim() + ', ';
    }

    setAddress(formatted);
  };

  return (
    <Sheet onOpenChange={(open) => {
      if (!open) {
        setIsCheckoutExpanded(false);
      }
    }}>
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

        <div ref={scrollAreaRef} className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
          <div className="p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full py-20 flex flex-col items-center justify-center gap-6 opacity-20">
                <ShoppingCart size={80} strokeWidth={1} />
                <p className="text-sm font-bold uppercase tracking-widest">El carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className={cn(
                  "space-y-4 transition-all duration-700 ease-in-out origin-top", 
                  isCheckoutExpanded ? "opacity-30 pointer-events-none scale-95 blur-[2px]" : "opacity-100"
                )}>
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

                {isCheckoutExpanded && (
                  <div 
                    ref={checkoutSectionRef}
                    className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-10 py-8 scroll-mt-4"
                  >
                    <button 
                      onClick={() => {
                        setIsCheckoutExpanded(false);
                        scrollAreaRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.2em] hover:translate-x-[-4px] transition-all group"
                    >
                      <ChevronDown className="rotate-90 group-hover:scale-110" size={14} /> 
                      <span className="border-b border-accent/20 pb-0.5">Volver al listado</span>
                    </button>

                    <div className="space-y-8">
                      <div className="space-y-2">
                        <h3 className="text-lg font-headline font-bold text-white uppercase tracking-tighter flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> 
                          Finalizar Pedido
                        </h3>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">Completa tus datos de envío</p>
                      </div>

                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Nombre Completo</Label>
                          <Input 
                            className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm focus:ring-0" 
                            placeholder="Ej: Juan Pérez"
                            value={fullName}
                            onChange={handleFullNameChange}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Teléfono</Label>
                            <div className="flex gap-2">
                              <Select value={phonePrefix} onValueChange={setPhonePrefix}>
                                <SelectTrigger className="w-[120px] bg-white/5 border-white/10 rounded-xl h-12 focus:ring-0 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                                  {PREFIXES.map(p => (
                                    <SelectItem key={p.value} value={p.value} className="text-xs">
                                      {p.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <Input 
                                className="flex-1 bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm focus:ring-0" 
                                placeholder="9 1234 5678"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2 relative">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</Label>
                            <Input 
                              className={cn(
                                "bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm focus:ring-0",
                                isTempEmail && "border-destructive/50 focus:border-destructive"
                              )} 
                              placeholder="juan@email.com"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setShowEmailSuggestions(true);
                              }}
                              onBlur={() => setTimeout(() => setShowEmailSuggestions(false), 200)}
                            />
                            
                            {showEmailSuggestions && emailSuggestions.length > 0 && (
                              <div className="absolute z-50 w-full mt-1 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                {emailSuggestions.map((suggestion) => (
                                  <button
                                    key={suggestion}
                                    className="w-full px-4 py-3 text-left text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-0"
                                    onClick={() => handleSelectSuggestion(suggestion)}
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            )}

                            {isTempEmail && (
                              <Alert variant="destructive" className="mt-2 bg-destructive/10 border-destructive/20 text-destructive rounded-xl animate-in fade-in slide-in-from-top-2">
                                <AlertCircle size={14} className="mr-2" />
                                <AlertDescription className="text-[10px] font-bold uppercase tracking-wider">
                                  No puedes comprar con una cuenta temporal.
                                </AlertDescription>
                              </Alert>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Región</Label>
                            <Select value={region} onValueChange={setRegion}>
                              <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-0 text-sm">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0a0a0a] border-white/10 text-white max-h-[300px]">
                                {REGIONS.map(reg => (
                                  <SelectItem key={reg} value={reg} className="text-sm">
                                    {reg}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Comuna</Label>
                            <Select value={commune} onValueChange={setCommune}>
                              <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-0 text-sm">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0a0a0a] border-white/10 text-white max-h-[300px]">
                                {COMMUNES.map(com => (
                                  <SelectItem key={com} value={com} className="text-sm">
                                    {com}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Dirección completa</Label>
                          <Input 
                            className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-accent/50 text-sm focus:ring-0" 
                            placeholder="Calle, número, depto o referencia"
                            value={address}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                        Método de Entrega
                      </h3>
                      <RadioGroup value={deliveryMethod} onValueChange={(v: any) => setDeliveryMethod(v)} className="gap-3">
                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'home-rm' ? "bg-accent/5 border-accent/40" : "bg-white/5 border-white/5"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2 rounded-lg bg-white/5", deliveryMethod === 'home-rm' && "text-accent")}>
                              <Truck size={18} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Despacho Región Metropolitana</p>
                              <p className="text-[10px] text-white/40">Valor fijo: $3.500</p>
                            </div>
                          </div>
                          <RadioGroupItem value="home-rm" className="border-white/20" />
                        </Label>

                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'pickup' ? "bg-accent/5 border-accent/40" : "bg-white/5 border-white/5"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2 rounded-lg bg-white/5", deliveryMethod === 'pickup' && "text-accent")}>
                              <MapPin size={18} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Retiro / Coordinación</p>
                              <p className="text-[10px] text-white/40">Sin costo</p>
                            </div>
                          </div>
                          <RadioGroupItem value="pickup" className="border-white/20" />
                        </Label>

                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'home-region' ? "bg-accent/5 border-accent/40" : "bg-white/5 border-white/5"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2 rounded-lg bg-white/5", deliveryMethod === 'home-region' && "text-accent")}>
                              <Globe size={18} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Envío a regiones</p>
                              <p className="text-[10px] text-white/40">Valor por coordinar</p>
                            </div>
                          </div>
                          <RadioGroupItem value="home-region" className="border-white/20" />
                        </Label>
                      </RadioGroup>

                      {deliveryMethod === 'home-rm' && (
                        <div className="p-4 bg-accent/5 rounded-2xl border border-accent/20 animate-in fade-in zoom-in-95 duration-500">
                           <div className="flex items-start gap-3">
                            <Clock size={14} className="text-accent shrink-0 mt-0.5" />
                            <p className="text-[10px] font-bold text-white/60 uppercase leading-relaxed tracking-tight">
                              Despachos en RM se realizan al día siguiente hábil.
                            </p>
                          </div>
                        </div>
                      )}

                      {deliveryMethod === 'home-region' && (
                        <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2 animate-in fade-in zoom-in-95 duration-500">
                          <p className="text-[11px] font-bold text-accent uppercase leading-relaxed tracking-widest text-center">
                            Envío a regiones por coordinar.
                          </p>
                          <p className="text-[9px] font-bold text-white/40 uppercase leading-relaxed tracking-widest text-center">
                            Cotizamos el despacho según tu ubicación.
                          </p>
                        </div>
                      )}

                      {deliveryMethod === 'pickup' && (
                        <div className="p-5 bg-accent/5 rounded-2xl border border-accent/20 animate-in fade-in zoom-in-95 duration-500">
                          <p className="text-[11px] font-bold text-white/80 uppercase leading-relaxed tracking-widest text-center">
                            Podrás coordinar retiro y detalles directamente por WhatsApp después de confirmar tu pedido.
                          </p>
                        </div>
                      )}
                    </div>
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
                  ${finalTotal.toLocaleString('es-CL')}
                </p>
              </div>
              <p className="text-[10px] text-accent/60 font-bold uppercase tracking-widest pb-1">
                {deliveryMethod === 'home-rm' ? "Despacho RM incluido" : deliveryMethod === 'home-region' ? "Región por coordinar" : "Retiro coordinado"}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {!isCheckoutExpanded && (
                <Button 
                  onClick={handleStartCheckout}
                  className="w-full h-14 rounded-2xl bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <CreditCard size={18} className="mr-2" /> Pagar Online
                </Button>
              )}

              <Button 
                onClick={handleWhatsAppCheckout}
                className={cn(
                  "w-full h-14 rounded-2xl transition-all flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest",
                  (!isFormValid && isCheckoutExpanded) 
                    ? "bg-white/5 border border-white/10 text-white/40 cursor-not-allowed opacity-50" 
                    : "bg-black/60 backdrop-blur-xl border border-premium-green/30 text-white hover:bg-black/80 hover:border-premium-green/50 shadow-[0_0_20px_rgba(142,255,127,0.15)] active:scale-95"
                )}
                disabled={!isFormValid && isCheckoutExpanded}
              >
                <WhatsAppIcon className="w-5 h-5" /> {isCheckoutExpanded ? "Confirmar por WhatsApp" : "Comprar por WhatsApp"}
              </Button>
            </div>
            <p className="text-[9px] text-center text-white/20 uppercase font-bold tracking-[0.3em]">
              {!isCheckoutExpanded ? "Serás redirigido para coordinar pago y envío" : isFormValid ? "Listo para confirmar tu pedido" : "Completa tus datos para habilitar el botón"}
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};