import React from 'react';
import { SERVICES, CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink} from '../../utils/whatsapp';
import type { Service } from '../../types';
import { ServiceCarousel } from '../ui/ServiceCarousel';

export const ServicesSection: React.FC = () => {
  const handleLearnMore = (service: Service) => {
    const message = `Olá! Gostaria de saber mais sobre ${service.title}`;
    const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, message);
    window.open(whatsappLink, '_blank');
  };
  
  return (
    <section id="servicos" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tratamentos especializados para cada necessidade do seu sorriso
          </p>
        </div>
        
        <ServiceCarousel 
          services={SERVICES} 
          onLearnMore={handleLearnMore}
        />
      </div>
    </section>
  );
};