import React from 'react';
import { CLINIC_INFO, CONTACT_INFO } from '../../constants';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-white py-10 mt-16" style={{ backgroundColor: '#26292eff' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-6">
          <img
            src="/logo-nb-footer.png"
            alt="Logo da clínica Dra. Nicole Benevenuto"
            className="h-14 sm:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://www.instagram.com/dra.nicolebenevenuto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/nicole.benevenuto.37"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-full hover:scale-110 transition-transform duration-300"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
        <p className="text-gray-400 mb-2">
          © 2025 {CLINIC_INFO.name}. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500">
          {CLINIC_INFO.cro} • {CONTACT_INFO.location}
        </p>
      </div>
    </footer>
  );
};
