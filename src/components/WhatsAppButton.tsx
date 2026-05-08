
'use client';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/constants/data';

export const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};
