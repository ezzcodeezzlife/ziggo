import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

let i18nInitialized = false;

const i18nInitPromise = new Promise((resolve, reject) => {
  i18next
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
      fallbackLng: 'en',
      debug: true, // Enable debug mode
      supportedLngs: ['en', 'de', 'fr', 'it', 'es', 'nl', 'pt', 'el', 'hr', 'cs', 'da', 'et', 'fi', 'fy'],
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      ns: ['common'],
      defaultNS: 'common',
      initImmediate: false, // Load translations synchronously
    }, (err) => {
      if (err) {
        reject(err);
      } else {
        i18nInitialized = true;
        resolve();
      }
    });
});

export { i18nInitialized, i18nInitPromise };
export default i18next;
