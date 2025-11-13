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
    description: 'Recupere o brilho natural do seu sorriso com técnicas modernas e seguras',
    icon: '✨'
  },
  {
    title: 'Limpeza',
    description: 'Mantenha sua saúde bucal em dia com limpezas periódicas e preventivas',
    icon: '🦷'
  },
  {
    title: 'Facetas',
    description: 'Transforme seu sorriso com facetas de porcelana personalizadas',
    icon: '💎'
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