import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { TestimonialCard } from '../ui/TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Pacientes
          </h2>
          <p className="text-xl text-gray-600">Sorrisos transformados, vidas impactadas</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};