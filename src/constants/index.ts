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
    title: 'Clareamento',
    description: 'Recupere o brilho natural do seu sorriso com técnicas modernas e seguras de clareamento profissional.',
    detailedDescription: 'O clareamento é um procedimento estético seguro que utiliza agentes clareadores para remover manchas e deixar os dentes mais brancos e brilhantes. Pode ser realizado no consultório ou com moldeiras personalizadas em casa, sempre com acompanhamento profissional. Oferece resultados rápidos, melhora a aparência do sorriso e aumenta a autoestima, sem desgastar a estrutura dental.',
    benefits: [],
    icon: '✨',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Limpeza',
    description: 'Mantenha sua saúde bucal em dia com limpezas periódicas e preventivas realizadas por especialistas.',
    detailedDescription: 'A limpeza dental remove placa, tártaro e manchas para manter dentes e gengivas saudáveis. Ela previne cáries, mau hálito e inflamações, garantindo um sorriso mais limpo e bem-cuidado.',
    benefits: [],
    icon: '🦷',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Facetas de resina',
    description: 'Transforme seu sorriso com facetas de resina.',
    detailedDescription: 'A faceta de resina é uma alternativa moderna para transformar o sorriso de forma rápida e acessível. Aplicada diretamente sobre o dente pelo dentista, ela corrige pequenas fraturas, desalinhamentos leves e espaçamentos, proporcionando um resultado imediato e natural.',
    benefits: [],
    icon: '💎',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Botox e preenchimento com Ácido Hialurônico',
    description: 'Harmonização facial para complementar sua beleza com técnicas modernas.',
    detailedDescription: 'O Botox suaviza rugas e linhas de expressão ao relaxar os músculos da face, proporcionando um aspecto mais leve e rejuvenescido. Já o preenchimento com ácido hialurônico restaura volume, define contornos e corrige assimetrias, com resultados naturais.',
    benefits: [],
    icon: '💉',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Exovera Phyto Plus',
    description: 'Regeneração celular profunda com exossomos vegetais.',
    detailedDescription: 'O Exovera Phyto Plus, exossomos vegetais enriquecidos com PDRN, peptídeos e ativos bioativos, promove regeneração celular profunda, além de melhorar a firmeza e a luminosidade da pele.',
    benefits: [],
    icon: '🌿',
    color: 'from-gray-400 to-gray-500'
  },
  {
    title: 'Bèlla B',
    description: 'Rejuvenescimento e clareamento avançado da pele.',
    detailedDescription: 'O Bèlla B, com PDRN, peptídeos e clareadores de alta performance, potencializa a uniformidade, a vitalidade, o rejuvenescimento e o clareamento da pele.',
    benefits: [],
    icon: '🧬',
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