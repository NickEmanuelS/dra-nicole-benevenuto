import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img
                src="/logo-nb2-modified.png"
                alt="Logo da clínica"
                className="w-full h-full object-cover"
              />
        </div>
        <Button
          variant="secondary"
          size="sm"
          href={whatsappLink}
          icon={<Phone size={18} />}
        >
          WhatsApp
        </Button>
      </div>
    </nav>
  );
};