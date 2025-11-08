import React from 'react';
import { SERVICES, CONTACT_INFO } from '../../constants';
import { ServiceCard } from '../ui/ServiceCard';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());
  
  const handleLearnMore = () => {
    window.open(whatsappLink, '_blank');
  };
  
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tratamentos especializados para cada necessidade do seu sorriso
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};