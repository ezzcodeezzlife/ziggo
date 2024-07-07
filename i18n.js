import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'de', 'fr', 'it', 'es', 'nl', 'pt', 'el', 'hr', 'cs', 'da', 'et', 'fi', 'fy'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common'],
    defaultNS: 'common',
  });

export default i18next;
