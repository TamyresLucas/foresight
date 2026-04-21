import { type Theme } from './schema';

export const FORESIGHT_DEFAULT: Theme = {
  id: 'foresight-default',
  name: 'Foresight Default',
  primary: '#5568F2',
  secondary: '#008563',
  destructive: '#CF455C',
  radius: '0.5rem',
  fontSize: '16px',
  fontWeight: '400',
  fonts: {
    body: 'Inter',
    heading: 'Inter',
    survey: 'Outfit',
  },
};

export const CORPORATE: Theme = {
  id: 'corporate',
  name: 'Corporate',
  primary: '#0F172A',
  secondary: '#475569',
  destructive: '#BE123C',
  radius: '0rem',
  fontSize: '14px',
  fontWeight: '500',
  fonts: {
    body: 'Inter',
    heading: 'Inter',
    survey: 'Inter',
  },
};

export const PLAYFUL: Theme = {
  id: 'playful',
  name: 'Playful',
  primary: '#F43F5E',
  secondary: '#FB923C',
  destructive: '#9F1239',
  radius: '0.5rem',
  fontSize: '18px',
  fontWeight: '600',
  fonts: {
    body: 'Outfit',
    heading: 'Outfit',
    survey: 'Outfit',
  },
};

export const PRESETS: Theme[] = [
  FORESIGHT_DEFAULT,
  CORPORATE,
  PLAYFUL,
];
