// src/components/WhatsAppButton.tsx
'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  // Substitua 'SEUNUMERO' pelo seu número de WhatsApp com o código do país. Ex: 5585986649122
  const phoneNumber = '5585986649122'; 
  const message = 'Olá! Gostaria de mais informações sobre seus serviços.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="text-white text-4xl" />
      
      {/* Tooltip com a mensagem */}
      <div className="absolute bottom-1/2 mb-[-10px] right-full mr-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Olá, precisa de ajuda?
        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-800"></div>
      </div>
    </a>
  );
}