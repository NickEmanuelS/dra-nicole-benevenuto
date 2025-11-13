import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <img
            src="/logo-nb2-header.png"
            alt="Logo da clínica Dra. Nicole Benevenuto"
            className="h-14 sm:h-16 object-contain"
          />
        </div>
        <div className="absolute right-6">
          <Button
            variant="secondary"
            size="sm"
            href={whatsappLink}
            icon={<Phone size={18} />}
            className="font-medium shadow hover:shadow-md transition-all duration-200"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};
