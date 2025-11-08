export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface ContactInfo {
  phone: string;
  formattedPhone: string;
  workingHours: string;
  location: string;
}