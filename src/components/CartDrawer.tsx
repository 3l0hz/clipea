
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
  AlertCircle,
  Lock,
  ChevronLeft
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

const SUGGESTED_DOMAINS = ['gmail.com', 'icloud.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];

const PREFIXES = [
  { label: 'CHI +56', value: '+56' },
  { label: 'PER +51', value: '+51' },
  { label: 'VEN +58', value: '+58' },
  { label: 'ARG +54', value: '+54' },
  { label: 'COL +57', value: '+57' },
];

const REGIONS = [
  "Región Metropolitana",
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
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phonePrefix, setPhonePrefix] = useState(PREFIXES[0].value);
  const [region, setRegion] = useState(REGIONS[0]);
  const [commune, setCommune] = useState(COMMUNES[0]);
  const [address, setAddress] = useState('');
  
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const checkoutSectionRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);

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

  const isNameValid = fullName.trim().length >= 3;
  const isPhoneValid = phone.trim().length >= 7;
  const isEmailValid = email.includes('@') && !isTempEmail;
  const isRegionValid = !!region;
  const isCommuneValid = !!commune;
  const isAddressValid = address.trim().length >= 5;

  const isFormValid = useMemo(() => {
    if (cart.length === 0) return false;
    if (isTempEmail) return false;

    const commonValid = isNameValid && isPhoneValid && isEmailValid && isRegionValid;

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
  }, [cart.length, isTempEmail, isNameValid, isPhoneValid, isEmailValid, isRegionValid, isCommuneValid, isAddressValid, deliveryMethod]);

  const triggerValidation = () => {
    const newErrors: Record<string, boolean> = {};
    if (!isNameValid) newErrors.fullName = true;
    if (!isPhoneValid) newErrors.phone = true;
    if (!isEmailValid) newErrors.email = true;
    if (!isRegionValid) newErrors.region = true;
    if (!isCommuneValid && deliveryMethod !== 'pickup') newErrors.commune = true;
    if (!isAddressValid && deliveryMethod === 'home-rm') newErrors.address = true;
    if (!deliveryMethod) newErrors.deliveryMethod = true;

    setErrors(newErrors);

    const errorOrder = ['fullName', 'phone', 'email', 'region', 'commune', 'address', 'deliveryMethod'];
    const firstError = errorOrder.find(key => newErrors[key]);
    
    if (firstError) {
      const refs: Record<string, React.RefObject<HTMLDivElement>> = {
        fullName: nameRef,
        phone: phoneRef,
        email: emailRef,
        region: regionRef,
        commune: regionRef,
        address: addressRef,
        deliveryMethod: methodRef
      };

      const ref = refs[firstError];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const input = ref.current.querySelector('input');
        if (input) input.focus();
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppCheckout = () => {
    if (!isCheckoutExpanded) {
      setIsCheckoutExpanded(true);
      return;
    }

    if (!triggerValidation()) return;

    const methodLabel = deliveryMethod === 'home-rm' 
      ? "Despacho Región Metropolitana"
      : deliveryMethod === 'home-region'
      ? "Envío a regiones"
      : "Retiro / Coordinación";

    const shippingCostText = deliveryMethod === 'home-rm' 
      ? "$3.500" 
      : deliveryMethod === 'home-region' 
      ? "Por coordinar" 
      : "$0";

    const addressLine = deliveryMethod !== 'pickup' ? address : "Coordinar retiro / N/A";

    const message = encodeURIComponent(
      `Hola Clipea, quiero coordinar mi compra.\n\n` +
      `Datos del cliente:\n` +
      `Nombre: ${fullName}\n` +
      `Teléfono: ${phonePrefix} ${phone}\n` +
      `Email: ${email}\n\n` +
      `Entrega:\n` +
      `Región: ${region}\n` +
      `Comuna: ${commune}\n` +
      `Dirección: ${addressLine}\n` +
      `Método: ${methodLabel}\n\n` +
      `Productos:\n` +
      cart.map(item => `- ${item.name} x ${item.quantity}: ${item.price}`).join('\n') +
      `\n\nEnvío: ${shippingCostText}\n` +
      `*Total a pagar: $${finalTotal.toLocaleString('es-CL')}*`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setEmail(suggestion);
    setShowEmailSuggestions(false);
    setErrors(prev => ({ ...prev, email: false }));
  };

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
    if (formatted.trim().length >= 3) setErrors(prev => ({ ...prev, fullName: false }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const connectors = ['de', 'del', 'la', 'las', 'los', 'y'];
    const parts = val.split(',');
    const formattedParts = parts.map((part, partIndex) => {
      const isAfterComma = partIndex > 0;
      const words = part.split(' ');
      const formattedWords = words.map((word, wordIndex) => {
        if (word.length === 0) return '';
        const lowerWord = word.toLowerCase();
        
        // Excepción: Después de la coma (Comuna/Ciudad), capitalizar siempre como nombre propio
        if (isAfterComma) return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        
        // En la dirección, mantener conectores en minúscula
        const firstNonEmptyIndex = words.findIndex(w => w.length > 0);
        if (connectors.includes(lowerWord) && wordIndex !== firstNonEmptyIndex) return lowerWord;
        
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      return formattedWords.join(' ');
    });
    
    let formatted = formattedParts.join(',');
    
    // Coma automática tras detectar numeración (ej: Calle 1234 -> Calle 1234, )
    if (/\d+ $/.test(formatted) && !formatted.includes(',')) {
      formatted = formatted.trim() + ', ';
    }
    
    setAddress(formatted);
    if (formatted.trim().length >= 5) setErrors(prev => ({ ...prev, address: false }));
  };

  return (
    <Sheet onOpenChange={(open) => {
      if (!open) {
        setIsCheckoutExpanded(false);
        setErrors({});
      }
    }}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="bg-[#050505]/95 backdrop-blur-2xl border-white/5 w-full sm:max-w-md p-0 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] border-none">
        <SheetHeader className="p-8 border-b border-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-black/40 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <ShoppingCart size={24} strokeWidth={1.5} />
            </div>
            <div>
              <SheetTitle className="text-2xl font-headline font-bold text-white tracking-tighter">Mi Carrito</SheetTitle>
              <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{totalItems} {totalItems === 1 ? 'PRODUCTO' : 'PRODUCTOS'}</p>
            </div>
          </div>
          <SheetClose asChild>
            <button className="h-10 w-10 rounded-full bg-black/40 border border-white/10 text-white/50 hover:text-white hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all flex items-center justify-center group">
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
                        setErrors({});
                        scrollAreaRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 h-10 px-6 rounded-xl bg-black/40 border border-cyan-400/30 text-[10px] font-bold text-accent uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:bg-black/60 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all group"
                    >
                      <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                      <span>Volver al listado</span>
                    </button>

                    <div className="space-y-8">
                      <div className="space-y-2">
                        <h3 className="text-lg font-headline font-bold text-white uppercase tracking-tighter flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(142,255,127,0.5)]" /> 
                          Finalizar Pedido
                        </h3>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em]">Completa tus datos de envío</p>
                      </div>

                      <div className="grid gap-6">
                        <div ref={nameRef} className="space-y-2">
                          <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Nombre Completo</Label>
                          <Input 
                            className={cn(
                              "bg-black/40 border-white/10 rounded-xl h-12 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.15)] text-sm focus:ring-0 transition-all",
                              errors.fullName && "border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                            )} 
                            placeholder="Ej: Juan Pérez"
                            value={fullName}
                            onChange={handleFullNameChange}
                          />
                          {errors.fullName && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1">Información faltante</p>}
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div ref={phoneRef} className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Teléfono</Label>
                            <div className="flex gap-2">
                              <Select value={phonePrefix} onValueChange={setPhonePrefix}>
                                <SelectTrigger className="w-[110px] bg-black/40 border-white/10 rounded-xl h-12 focus:ring-0 text-xs">
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
                                className={cn(
                                  "flex-1 bg-black/40 border-white/10 rounded-xl h-12 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.15)] text-sm focus:ring-0 transition-all",
                                  errors.phone && "border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                                )} 
                                placeholder="940628182"
                                value={phone}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                  if (e.target.value.trim().length >= 7) setErrors(prev => ({ ...prev, phone: false }));
                                }}
                              />
                            </div>
                            {errors.phone && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1">Información faltante</p>}
                          </div>
                          
                          <div ref={emailRef} className="space-y-2 relative">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</Label>
                            <Input 
                              className={cn(
                                "bg-black/40 border-white/10 rounded-xl h-12 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.15)] text-sm focus:ring-0 transition-all",
                                (isTempEmail || errors.email) && "border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                              )} 
                              placeholder="juan@email.com"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setShowEmailSuggestions(true);
                                if (e.target.value.includes('@')) setErrors(prev => ({ ...prev, email: false }));
                              }}
                              onBlur={() => setTimeout(() => setShowEmailSuggestions(false), 200)}
                            />
                            
                            {showEmailSuggestions && emailSuggestions.length > 0 && (
                              <div className="absolute z-50 w-full mt-1 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                {emailSuggestions.map((suggestion) => (
                                  <button
                                    key={suggestion}
                                    className="w-full px-4 py-3 text-left text-sm text-white/70 hover:bg-cyan-400/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
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
                            {errors.email && !isTempEmail && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1">Información faltante</p>}
                          </div>
                        </div>

                        <div ref={regionRef} className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Región</Label>
                            <Select value={region} onValueChange={(v) => {
                              setRegion(v);
                              setErrors(prev => ({ ...prev, region: false }));
                            }}>
                              <SelectTrigger className={cn(
                                "bg-black/40 border-white/10 rounded-xl h-12 focus:ring-0 text-sm",
                                errors.region && "border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                              )}>
                                <SelectValue placeholder="Región..." />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0a0a0a] border-white/10 text-white max-h-[300px]">
                                {REGIONS.map(reg => (
                                  <SelectItem key={reg} value={reg} className="text-sm">
                                    {reg}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.region && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1">Faltante</p>}
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Comuna</Label>
                            <Select value={commune} onValueChange={(v) => {
                              setCommune(v);
                              setErrors(prev => ({ ...prev, commune: false }));
                            }}>
                              <SelectTrigger className={cn(
                                "bg-black/40 border-white/10 rounded-xl h-12 focus:ring-0 text-sm",
                                errors.commune && "border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                              )}>
                                <SelectValue placeholder="Santiago" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0a0a0a] border-white/10 text-white max-h-[300px]">
                                {COMMUNES.map(com => (
                                  <SelectItem key={com} value={com} className="text-sm">
                                    {com}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.commune && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1">Faltante</p>}
                          </div>
                        </div>
                        <div ref={addressRef} className="space-y-2">
                          <Label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Dirección completa</Label>
                          <Input 
                            className={cn(
                              "bg-black/40 border-white/10 rounded-xl h-12 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.15)] text-sm focus:ring-0 transition-all",
                              errors.address && "border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                            )} 
                            placeholder="Calle, número, depto o referencia"
                            value={address}
                            onChange={handleAddressChange}
                          />
                          {errors.address && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1">Información faltante</p>}
                        </div>
                      </div>
                    </div>

                    <div ref={methodRef} className="space-y-6">
                      <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                        Método de Entrega
                      </h3>
                      <RadioGroup 
                        value={deliveryMethod} 
                        onValueChange={(v: any) => {
                          setDeliveryMethod(v);
                          setErrors(prev => ({ ...prev, deliveryMethod: false }));
                        }} 
                        className="gap-3"
                      >
                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'home-rm' 
                              ? "bg-cyan-400/5 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)]" 
                              : "bg-black/40 border-white/5 hover:border-white/10",
                            errors.deliveryMethod && "border-red-500/30"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2.5 rounded-xl bg-white/5", deliveryMethod === 'home-rm' && "text-cyan-400 bg-cyan-400/10")}>
                              <Truck size={20} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Despacho Región Metropolitana</p>
                              <p className="text-[10px] text-white/40">Valor fijo: $3.500</p>
                            </div>
                          </div>
                          <RadioGroupItem value="home-rm" className={cn("border-white/20", deliveryMethod === 'home-rm' && "border-cyan-400 text-cyan-400")} />
                        </Label>

                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'pickup' 
                              ? "bg-cyan-400/5 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)]" 
                              : "bg-black/40 border-white/5 hover:border-white/10",
                            errors.deliveryMethod && "border-red-500/30"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2.5 rounded-xl bg-white/5", deliveryMethod === 'pickup' && "text-cyan-400 bg-cyan-400/10")}>
                              <MapPin size={20} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Retiro / Coordinación</p>
                              <p className="text-[10px] text-white/40">Sin costo</p>
                            </div>
                          </div>
                          <RadioGroupItem value="pickup" className={cn("border-white/20", deliveryMethod === 'pickup' && "border-cyan-400 text-cyan-400")} />
                        </Label>

                        <Label
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                            deliveryMethod === 'home-region' 
                              ? "bg-cyan-400/5 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)]" 
                              : "bg-black/40 border-white/5 hover:border-white/10",
                            errors.deliveryMethod && "border-red-500/30"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2.5 rounded-xl bg-white/5", deliveryMethod === 'home-region' && "text-cyan-400 bg-cyan-400/10")}>
                              <Globe size={20} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Envío a regiones</p>
                              <p className="text-[10px] text-white/40">Valor por coordinar</p>
                            </div>
                          </div>
                          <RadioGroupItem value="home-region" className={cn("border-white/20", deliveryMethod === 'home-region' && "border-cyan-400 text-cyan-400")} />
                        </Label>
                      </RadioGroup>
                      {errors.deliveryMethod && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest pl-1 text-center">Selecciona un método</p>}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-white/5 bg-[#080808] space-y-6 shrink-0">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Total a pagar</p>
                <p className="text-3xl font-headline font-bold text-white tracking-tighter">
                  ${finalTotal.toLocaleString('es-CL')}
                </p>
              </div>
              <p className="text-[10px] text-accent font-bold uppercase tracking-widest pb-1.5">
                {deliveryMethod === 'home-rm' ? "DESPACHO RM INCLUIDO" : deliveryMethod === 'home-region' ? "REGIÓN POR COORDINAR" : "RETIRO COORDINADO"}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                onClick={handleWhatsAppCheckout}
                className={cn(
                  "w-full h-14 rounded-2xl transition-all flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest",
                  "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:brightness-110 active:scale-95",
                  (!isFormValid && isCheckoutExpanded) && "opacity-80 saturate-50"
                )}
              >
                <WhatsAppIcon className="w-5 h-5" /> 
                <span>Confirmar por WhatsApp</span>
              </Button>
              
              <div className="flex items-center justify-center gap-2">
                <Lock size={12} className="text-white/20" />
                <p className="text-[9px] text-white/20 uppercase font-bold tracking-[0.2em]">
                  {isFormValid ? "Listo para confirmar tu pedido" : "Completa tus datos para habilitar el botón"}
                </p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
