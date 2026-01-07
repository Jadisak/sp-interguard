export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SecurityLevel {
  STANDARD = 'Standard',
  PREMIUM = 'Premium',
  VIP = 'VIP',
}

export type Language = 'en' | 'th';