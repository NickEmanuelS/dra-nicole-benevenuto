import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceCarouselProps {
  services: Service[];
  onLearnMore: (service: Service) => void;
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ 
  services, 
  onLearnMore 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <div className={`h-2 bg-gradient-to-r ${currentService.color}`} />
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${currentService.color} flex items-center justify-center text-5xl md:text-6xl shadow-lg transform transition-transform hover:scale-110`}>
                {currentService.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {currentService.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {currentService.description}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentService.detailedDescription}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {currentService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => onLearnMore(currentService)}
                  className={`bg-gradient-to-r ${currentService.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Serviço anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Próximo serviço"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
      </button>
      <div className="flex justify-center gap-3 mt-8">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r ' + service.color
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para ${service.title}`}
          />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:hidden">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-xl transition-all ${
              index === currentIndex
                ? 'bg-white shadow-lg scale-105'
                : 'bg-white/50 hover:bg-white hover:shadow'
            }`}
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <div className="text-xs font-medium text-gray-700">{service.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
};