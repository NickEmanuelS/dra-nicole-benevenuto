import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 animate-bounce"
      aria-label="Contato WhatsApp"
    >
      <Phone size={28} />
    </a>
  );
};
