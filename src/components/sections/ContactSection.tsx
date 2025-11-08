import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());
  
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Transformar Seu Sorriso?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato agora e agende sua consulta pelo WhatsApp
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-pink-50 transition-all duration-300 shadow-lg"
          >
            <Phone size={24} />
            {CONTACT_INFO.formattedPhone}
          </a>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{CONTACT_INFO.workingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};