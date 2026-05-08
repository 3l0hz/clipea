'use client';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/constants/data';

export const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-premium-green text-black p-4 rounded-full shadow-[0_0_20px_rgba(142,255,127,0.3)] hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none flex items-center justify-center border border-white/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};