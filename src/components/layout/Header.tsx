import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex justify-between items-center">
              <div className="flex-1 flex justify-center min-w-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <img
                  src="/logo-nb2-header.png"
                  alt="Logo da clínica Dra. Nicole Benevenuto"
                  className="h-12 sm:h-14 md:h-16 object-contain max-w-full"
                />
              </div>
              <div className="flex-shrink-0 sm:ml-auto sm:relative sm:z-10">
                <Button
                  variant="secondary"
                  size="sm"
                  href={whatsappLink}
                  icon={<Phone size={18} />}
                  className="font-medium shadow hover:shadow-md transition-all duration-200"
                >
                  <span className="hidden sm:inline">WhatsApp</span>
                  <span className="sm:hidden">WPP</span>
                </Button>
              </div>
            </div>
          </div>
        </nav>
  );
};
