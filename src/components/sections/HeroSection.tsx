import React from 'react';
import { Award } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { generateWhatsAppLink, getDefaultMessage } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.phone, getDefaultMessage());
  
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Seu sorriso merece o melhor
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforme seu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600"> sorriso</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Tratamentos odontológicos personalizados com a Dra. Nicole Benevenuto. 
            Cuidado, técnica e resultados que vão além das suas expectativas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" href={whatsappLink}>
              Agendar Consulta
            </Button>
            <Button variant="outline" size="lg" href="#servicos">
              Conhecer Serviços
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl shadow-2xl flex items-center justify-center">
            <img
                src="/dentista-examinar-uma-paciente-sexo-feminino-com-ferramentas.jpg"
                alt="Logo da clínica"
                className="rounded-3xl shadow-2xl"
              />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <Award className="text-pink-500" size={32} />
              <div>
                <p className="font-bold text-gray-800">100+</p>
                <p className="text-sm text-gray-600">Pacientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};