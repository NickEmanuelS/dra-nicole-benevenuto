import React from 'react';
import { Phone } from 'lucide-react';
import { CLINIC_INFO, CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo da clínica"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">{CLINIC_INFO.name}</h1>
            <p className="text-xs text-gray-600">{CLINIC_INFO.specialty}</p>
          </div>
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