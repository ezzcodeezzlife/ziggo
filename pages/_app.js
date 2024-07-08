import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";
import i18n, { i18nInitPromise } from '../i18n'; // Import the initialized i18next instance and the i18nInitPromise
import Loading from '../components/Loading'; // Import the Loading component

// Function to initialize i18next with server-side translations
const initializeI18next = (translations, language) => {
  console.log("Initializing i18next with translations:", translations, "and language:", language);
  if (translations) {
    i18n.changeLanguage(language); // Set the language before adding resources
    i18n.addResources(language, 'common', translations);
  } else {
    console.error("Invalid translations object passed to initializeI18next");
  }
};

function App({ Component, pageProps, translations }) {
  console.log("App component received translations prop:", translations);
  console.log("Structure of translations prop in App component:", JSON.stringify(translations, null, 2));
  console.log("Translations prop immediately upon receiving in App component:", translations);

  if (!translations) {
    console.error("Translations prop is undefined in App component");
  }

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    console.log("Initial translations in useEffect:", translations);
    // Wait for i18next initialization before setting translations
    if (translations && Object.keys(translations).length > 0) {
      i18nInitPromise.then(() => {
        console.log("Translations after i18nInitPromise resolves:", translations);
        initializeI18next(translations, i18n.language);
        // Trigger a re-render once translations are initialized
        setInitialized(true);
        console.log("i18next initialized and translations set. State of initialized:", true);
      }).catch((error) => {
        console.error("Error initializing i18next:", error);
      });
    } else {
      console.error("Translations are null or invalid in useEffect");
    }
    console.log("Translations in App component after useEffect:", translations);
    console.log("State of initialized after useEffect:", initialized);
  }, [translations, setInitialized]);

  // Ensure i18n is initialized and translations are available before rendering
  if (!i18n.isInitialized || !translations || !initialized) {
    console.log("Rendering Loading component due to missing translations or uninitialized i18n");
    return <Loading />;
  }

  // Log the translations received by the App component
  console.log("Translations in App component:", translations);

  return (
    <>
      <NextSeo
        title={translations ? translations.seo.title : "Default Title"}
        description={translations ? translations.seo.description : "Default Description"}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={translations ? translations.seo.keywords : "default, keywords"}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: translations ? translations.seo.ogTitle : "Default OG Title",
          description: translations ? translations.seo.ogDescription : "Default OG Description",
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
    </>
  );
}

export async function getServerSideProps(appContext) {
  console.log("getServerSideProps called");
  console.log("appContext:", JSON.stringify(appContext, null, 2));

  // Wait for i18next initialization and fetch translations
  const translations = await i18nInitPromise.then(() => {
    // Import fs and path modules only in server-side code
    const fs = require('fs');
    const path = require('path');

    // Determine the current language from the request
    const currentLanguage = appContext.req.language || 'en';
    console.log("Determined current language:", currentLanguage);

    console.log("Fetching translations for language:", currentLanguage);
    const translationsFilePath = path.resolve('./public/locales', currentLanguage, 'common.json');
    console.log("Translations file path:", translationsFilePath);

    const translations = JSON.parse(fs.readFileSync(translationsFilePath, 'utf-8'));
    console.log("Fetched translations:", translations);

    // Log the state of the i18n instance
    console.log("i18n instance state before returning translations:", i18n);

    // Verify the structure and serializability of the translations object
    try {
      const serializedTranslations = JSON.stringify(translations);
      console.log("Serialized translations object:", serializedTranslations);
    } catch (error) {
      console.error("Error serializing translations object:", error);
      return {
        props: {
          translations: null,
        },
      };
    }

    // Additional check to ensure translations are correctly fetched
    if (!translations || Object.keys(translations).length === 0) {
      console.error("Translations are undefined or empty after fetching");
      return {
        props: {
          translations: null,
        },
      };
    }

    console.log("Returning translations from i18nInitPromise");
    return {
      props: {
        translations: translations,
      },
    };
  }).catch((error) => {
    console.error("Error initializing i18next or fetching translations:", error);
    return {
      props: {
        translations: null,
      },
    };
  });

  // Check for empty or undefined translations
  if (!translations || Object.keys(translations).length === 0) {
    console.error("Translations are undefined or empty before returning from getServerSideProps");
    return {
      props: {
        translations: null,
      },
    };
  }

  console.log("Translations object before returning from getServerSideProps:", JSON.stringify(translations, null, 2));
  console.log("Returning translations from getServerSideProps");
  console.log("getServerSideProps is returning props:", { translations });
  return {
    props: {
      translations: translations || null,
    },
  };
}

export default App;
