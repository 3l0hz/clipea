'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import React from 'react';

interface LegalModalsProps {
  isOpen: boolean;
  onClose: () => void;
  type: string | null;
}

export const LegalModals = ({ isOpen, onClose, type }: LegalModalsProps) => {
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
};