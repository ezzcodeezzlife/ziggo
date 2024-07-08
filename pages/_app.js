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
  console.log("Initial isInitialized state:", isInitialized);
  const [localTranslations, setLocalTranslations] = useState(translations);
  console.log("Initial localTranslations state:", localTranslations);

  useEffect(() => {
    console.log("useEffect triggered with translations:", translations);
    if (translations) {
      setLocalTranslations(translations);
      console.log("Set localTranslations state with translations prop:", translations);
    } else {
      console.error("Translations prop is undefined or null inside useEffect.");
    }
  }, [translations]);

  // Additional logging to check the state of translations prop
  useEffect(() => {
    console.log("Checking translations prop after initial render:", translations);
    if (!translations) {
      console.error("Translations prop is still undefined or null after initial render.");
    }
  }, []);

  useEffect(() => {
    console.log("useEffect triggered with localTranslations:", localTranslations, "and currentLanguage:", currentLanguage);
    if (localTranslations && Object.keys(localTranslations).length > 0) {
      console.log("Setting i18n language and adding resources with localTranslations:", localTranslations);
      i18n.changeLanguage(currentLanguage);
      i18n.addResources(currentLanguage, 'common', localTranslations);
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem('translations', JSON.stringify(localTranslations));
        console.log("Stored translations in local storage:", localTranslations);
      }
      setIsInitialized(true);
      console.log("i18next initialization complete, isInitialized set to true.");
    } else {
      console.error("localTranslations is undefined or empty inside useEffect.");
    }
  }, [localTranslations, currentLanguage]);

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  console.log("App component received props:", { Component, pageProps, localTranslations, originalTranslations, currentLanguage });

  if (!localTranslations) {
    console.error("Translations prop is undefined or null.");
  }

  if (!isInitialized) {
    console.log("Rendering Loading component due to missing translations or uninitialized i18n");
    return <Loading />;
  }

  console.log("Translations in App component before rendering:", localTranslations);
  console.log("Rendering App component with translations:", localTranslations);

  return (
    <ErrorBoundary>
      <NextSeo
        title={localTranslations && localTranslations.seo ? localTranslations.seo.title : "Default Title"}
        description={localTranslations && localTranslations.seo ? localTranslations.seo.description : "Default Description"}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={localTranslations && localTranslations.seo ? localTranslations.seo.keywords : "default, keywords"}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: localTranslations && localTranslations.seo ? localTranslations.seo.ogTitle : "Default OG Title",
          description: localTranslations && localTranslations.seo ? localTranslations.seo.ogDescription : "Default OG Description",
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
    console.log("Resolved translations path:", translationsPath);
    const translationsFile = fs.readFileSync(translationsPath, 'utf8');
    translations = JSON.parse(translationsFile);
    console.log("Translations loaded from file:", translations);
  } catch (error) {
    console.error(`Error loading translations for language ${currentLanguage}:`, error);
  }

  console.log("Loaded translations object before serialization:", translations);

  if (!translations || Object.keys(translations).length === 0) {
    console.error("Translations object is undefined or empty before returning.");
    translations = { seo: { title: "Default Title", description: "Default Description", keywords: "default, keywords", ogTitle: "Default OG Title", ogDescription: "Default OG Description" } };
  }

  // Check if translations object is serializable
  let serializableTranslations;
  try {
    if (!translations) {
      throw new Error("Translations object is undefined or null before serialization.");
    }
    serializableTranslations = JSON.parse(JSON.stringify(translations));
    console.log("Translations object is serializable.");
  } catch (error) {
    console.error("Translations object is not serializable:", error);
    serializableTranslations = { seo: { title: "Default Title", description: "Default Description", keywords: "default, keywords", ogTitle: "Default OG Title", ogDescription: "Default OG Description" } };
  }

  console.log("Serializable translations object before return:", serializableTranslations);

  const props = {
    translations: serializableTranslations,
    originalTranslations: serializableTranslations,
    currentLanguage,
  };

  console.log("Returning props from getServerSideProps:", props);

  return {
    props: {
      ...props,
      debug: "This is a debug message to trace props"
    },
  };
}

export default App;
