export const generateWhatsAppLink = (phone: string, message?: string): string => {
  const baseUrl = `https://wa.me/${phone}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

export const getDefaultMessage = (): string => {
  return 'Olá! Gostaria de agendar uma consulta com a Dra. Nicole';
};