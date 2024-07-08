import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

let Backend;
let backendOptions;

if (typeof window === 'undefined') {
  try {
    Backend = require('i18next-fs-backend');
    backendOptions = {
      loadPath: `${process.cwd()}/public/locales/{{lng}}/{{ns}}.json`,
    };
  } catch (error) {
    console.error('Error loading i18next-fs-backend:', error);
  }
} else {
  try {
    Backend = require('i18next-http-backend');
    backendOptions = {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    };
  } catch (error) {
    console.error('Error loading i18next-http-backend:', error);
  }
}

let i18nInitialized = false;

const i18nInitPromise = new Promise((resolve, reject) => {
  i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
      fallbackLng: 'en',
      debug: true, // Enable debug mode
      supportedLngs: ['en', 'de', 'fr', 'it', 'es', 'nl', 'pt', 'el', 'hr', 'cs', 'da', 'et', 'fi', 'fy'],
      backend: backendOptions,
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
