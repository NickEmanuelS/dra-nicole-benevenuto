import React from 'react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onLearnMore: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLearnMore }) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <button
        onClick={onLearnMore}
        className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
      >
        Saiba mais →
      </button>
    </div>
  );
};