import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";
import i18n, { i18nInitPromise } from '../i18n'; // Import the initialized i18next instance and initialization functions
import Loading from '../components/Loading'; // Import the Loading component
import { initReactI18next } from 'react-i18next'; // Reintroduce initReactI18next import

// Ensure initReactI18next is used with i18next instance
i18n.use(initReactI18next);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App({ Component, pageProps, translations, originalTranslations, currentLanguage }) {
  console.log("App component received props on initial render:", { Component, pageProps, translations, originalTranslations, currentLanguage });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered with translations:", translations, "and currentLanguage:", currentLanguage);
    if (!translations) {
      console.error("Translations prop is undefined or null inside useEffect.");
    }
    i18nInitPromise.then(() => {
      console.log("i18nInitPromise resolved");
      if (translations && Object.keys(translations).length > 0) {
        i18n.changeLanguage(currentLanguage);
        i18n.addResources(currentLanguage, 'common', translations);
      }
      setIsInitialized(true);
    }).catch(error => {
      console.error("Error resolving i18nInitPromise:", error);
    });
  }, [translations, currentLanguage]);

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  console.log("App component received props:", { Component, pageProps, translations, originalTranslations, currentLanguage });

  console.log("App component received translations prop:", translations);
  console.log("App component received originalTranslations prop:", originalTranslations);

  if (!translations) {
    console.error("Translations prop is undefined or null.");
  }

  if (!isInitialized) {
    console.log("Rendering Loading component due to missing translations or uninitialized i18n");
    return <Loading />;
  }

  console.log("Translations in App component before rendering:", translations);
  console.log("Rendering App component with translations:", translations);

  return (
    <ErrorBoundary>
      <NextSeo
        title={translations && translations.seo ? translations.seo.title : "Default Title"}
        description={translations && translations.seo ? translations.seo.description : "Default Description"}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={translations && translations.seo ? translations.seo.keywords : "default, keywords"}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: translations && translations.seo ? translations.seo.ogTitle : "Default OG Title",
          description: translations && translations.seo ? translations.seo.ogDescription : "Default OG Description",
          images: [
            {
              url: "https://www.zigarettenautomatkarte.de/screenshot.png",
              width: 1200,
              height: 630,
              alt: "Zigarettenautomatkarte.de - OG Image",
            },
          ],
          locale: i18n.language,
          site_name: "Zigarettenautomatkarte",
        }}
      />
      <meta name="monetag" content="f5eca5017e57a785107f2507bfc140ac"></meta>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LDCLSV0XN9"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LDCLSV0XN9');
        `}
      </Script>
      <Script strategy="afterInteractive">
        {`
(function() {
  // load leaflet.css
  var cssLeaflet = document.createElement('link');
  cssLeaflet.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  cssLeaflet.rel = 'stylesheet';
  cssLeaflet.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cssLeaflet);
})();
        `}
      </Script>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export async function getServerSideProps(appContext) {
  const currentLanguage = appContext.req.language || 'en';

  console.log("Starting getServerSideProps with currentLanguage:", currentLanguage);

  // Ensure i18next is initialized before reading translations
  try {
    await i18nInitPromise;
    console.log("i18nInitPromise resolved successfully");
  } catch (error) {
    console.error("Error resolving i18nInitPromise:", error);
  }

  const fs = require('fs');
  const path = require('path');

  let translations = {};
  try {
    const translationsPath = path.join(process.cwd(), 'public', 'locales', currentLanguage, 'common.json');
    const translationsFile = fs.readFileSync(translationsPath, 'utf8');
    translations = JSON.parse(translationsFile);
    console.log("Translations loaded from file:", translations);
  } catch (error) {
    console.error(`Error loading translations for language ${currentLanguage}:`, error);
  }

  console.log("Loaded translations object:", translations);

  // Ensure translations object is defined and not empty before serializing
  if (!translations || Object.keys(translations).length === 0) {
    console.error("Translations object is undefined or empty before serialization.");
  }

  let serializableTranslations = {};
  try {
    serializableTranslations = JSON.parse(JSON.stringify(translations));
    console.log("Serializable translations object:", serializableTranslations);
  } catch (error) {
    console.error("Error serializing translations object:", error);
  }

  console.log("Serializable translations object before returning:", serializableTranslations);

  const props = {
    translations: serializableTranslations,
    originalTranslations: serializableTranslations,
    currentLanguage,
  };

  console.log("Returning props from getServerSideProps:", props);

  return {
    props,
  };
}

export default App;
