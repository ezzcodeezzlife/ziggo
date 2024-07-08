import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

let Backend;
let backendOptions;

const i18nInitPromise = new Promise((resolve, reject) => {
  if (typeof window === 'undefined') {
    import('i18next-fs-backend')
      .then((module) => {
        Backend = module.default;
        backendOptions = {
          loadPath: `${process.cwd()}/public/locales/{{lng}}/{{ns}}.json`,
        };
        initializeI18next(resolve, reject);
      })
      .catch((error) => {
        console.error('Error loading i18next-fs-backend:', error);
        reject(error);
      });
  } else {
    import('i18next-http-backend')
      .then((module) => {
        Backend = module.default;
        backendOptions = {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        };
        initializeI18next(resolve, reject);
      })
      .catch((error) => {
        console.error('Error loading i18next-http-backend:', error);
        reject(error);
      });
  }
});

function initializeI18next(resolve, reject) {
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
}

let i18nInitialized = false;

export { i18nInitialized, i18nInitPromise };
export default i18next;
