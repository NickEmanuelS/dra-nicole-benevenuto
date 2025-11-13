import type { ContactInfo, Service, Testimonial } from "../types";


export const CLINIC_INFO = {
  name: 'Dra. Nicole Benevenuto',
  specialty: 'Odontologia',
  cro: 'CRO-MG 69649',
  initials: 'NB'
};

export const CONTACT_INFO: ContactInfo = {
  phone: '5531995114374',
  formattedPhone: '(31) 9511-4374',
  workingHours: 'Seg-Sex: 8h-18h',
  location: 'Belo Horizonte, MG'
};

export const SERVICES: Service[] = [
  {
    title: 'Clareamento Dental',
    description: 'Recupere o brilho natural do seu sorriso com técnicas modernas e seguras de clareamento profissional.',
    detailedDescription: 'Utilizamos tecnologias avançadas para clarear seus dentes de forma segura e eficaz. Nosso tratamento remove manchas causadas por café, vinho, cigarro e envelhecimento natural, proporcionando resultados visíveis já nas primeiras sessões.',
    benefits: ['Resultados em até 3 sessões', 'Tecnologia LED de última geração', 'Acompanhamento profissional'],
    icon: '✨',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Limpeza Profissional',
    description: 'Mantenha sua saúde bucal em dia com limpezas periódicas e preventivas realizadas por especialistas.',
    detailedDescription: 'A limpeza profissional remove tártaro e placa bacteriana que a escovação comum não alcança. Prevenimos doenças gengivais, cáries e mau hálito, garantindo a saúde completa da sua boca.',
    benefits: ['Prevenção de doenças bucais', 'Remoção de tártaro e placa', 'Polimento e flúor inclusos'],
    icon: '🦷',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Facetas de Porcelana',
    description: 'Transforme seu sorriso com facetas de porcelana personalizadas e naturais.',
    detailedDescription: 'As facetas de porcelana são lâminas ultrafinas customizadas que corrigem forma, cor e alinhamento dos dentes. Resultado natural e duradouro que transforma completamente seu sorriso.',
    benefits: ['Design personalizado', 'Material de alta durabilidade', 'Aparência completamente natural'],
    icon: '💎',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Botox e Harmonização',
    description: 'Harmonização facial para complementar a beleza do seu sorriso com técnicas modernas.',
    detailedDescription: 'Aplicação de toxina botulínica para suavizar linhas de expressão, tratar bruxismo e realizar harmonização orofacial. Procedimento rápido, seguro e com resultados naturais que realçam sua beleza.',
    benefits: ['Redução de linhas de expressão', 'Tratamento de bruxismo', 'Harmonização facial completa'],
    icon: '💉',
    color: 'from-gray-400 to-gray-500'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jorge Fernando',
    text: 'Profissional excepcional! Meu sorriso ficou incrível após o clareamento.',
    rating: 5
  },
  {
    name: 'Rosilene Silva',
    text: 'Atendimento humanizado e resultados surpreendentes. Super recomendo!',
    rating: 5
  },
  {
    name: 'Yasmin Costa',
    text: 'A Dra. Nicole é muito atenciosa e cuidadosa. Me senti muito segura.',
    rating: 5
  }
];

export const THEME = {
  colors: {
    primary: '#FFC5D3',
    primaryHover: '#FFB0C4'
  }
};