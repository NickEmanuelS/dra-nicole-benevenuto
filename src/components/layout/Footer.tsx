import React from 'react';
import { CLINIC_INFO, CONTACT_INFO } from '../../constants';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo da clínica"
                className="w-full h-full object-cover"
              />
            </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">{CLINIC_INFO.name}</h3>
            <p className="text-sm text-gray-400">{CLINIC_INFO.specialty}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://www.instagram.com/dra.nicolebenevenuto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/nicole.benevenuto.37"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
        <p className="text-gray-400 mb-4">
          © 2025 {CLINIC_INFO.name}. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500">
          {CLINIC_INFO.cro} • {CONTACT_INFO.location}
        </p>
      </div>
    </footer>
  );
};