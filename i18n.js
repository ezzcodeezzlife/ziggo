import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import nextI18NextConfig from './next-i18next.config.js';

i18next
  .use(initReactI18next)
  .init({
    ...nextI18NextConfig.i18n,
    fallbackLng: 'en',
    debug: false,
  });
