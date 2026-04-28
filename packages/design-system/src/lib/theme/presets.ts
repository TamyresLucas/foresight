import { type Theme } from './schema';

export const FORESIGHT_DEFAULT: Theme = {
  id: 'foresight-default',
  name: 'Foresight Default',
  primary: '#485AE3',
  secondary: '#008563',
  destructive: '#CF455C',
  radius: '0.5rem',
  margin: '8px',
  header: {
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '700',
  },
  body: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
  },
  navigation: {
    fontFamily: 'Outfit',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export const CORPORATE: Theme = {
  id: 'corporate',
  name: 'Corporate',
  primary: '#0F172A',
  secondary: '#475569',
  destructive: '#BE123C',
  radius: '0rem',
  margin: '8px',
  header: {
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '700',
  },
  body: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '500',
  },
  navigation: {
    fontFamily: 'Inter',
    fontSize: '13px',
    fontWeight: '600',
  },
};

export const PLAYFUL: Theme = {
  id: 'playful',
  name: 'Playful',
  primary: '#F43F5E',
  secondary: '#FB923C',
  destructive: '#9F1239',
  radius: '0.5rem',
  margin: '8px',
  header: {
    fontFamily: 'Outfit',
    fontSize: '28px',
    fontWeight: '800',
  },
  body: {
    fontFamily: 'Outfit',
    fontSize: '18px',
    fontWeight: '600',
  },
  navigation: {
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '700',
  },
};

export const PRESETS: Theme[] = [
  FORESIGHT_DEFAULT,
  CORPORATE,
  PLAYFUL,
];
