import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";
import i18n from '../i18n'; // Import the initialized i18next instance
import Loading from '../components/Loading'; // Import the Loading component
import { i18nInitPromise } from '../i18n'; // Import the i18nInitPromise for initialization
import { initReactI18next } from 'react-i18next';

// Ensure initReactI18next is used with i18next instance
i18n.use(initReactI18next);

// Function to initialize i18next with server-side translations
const initializeI18next = (translations, language) => {
  console.log("Initializing i18next with translations:", translations, "and language:", language);
  if (translations && Object.keys(translations).length > 0) {
    i18n.changeLanguage(language); // Set the language before adding resources
    i18n.addResources(language, 'common', translations);
  } else {
    console.error("Invalid or empty translations object passed to initializeI18next. Falling back to default translations.");
    // Fallback to default translations if the provided translations are null or empty
    i18n.changeLanguage('en'); // Default to English
    i18n.addResources('en', 'common', {
      welcome_message: "Welcome",
      map_title: "Ziggo Map",
      search_placeholder: "Search for a place",
      language_selector: "Select Language",
      find_cigarette_machine: "Find Cigarette Machine"
    });
  }
};

function App({ Component, pageProps, translations, originalTranslations }) {
  console.log("App component received translations prop:", translations);
  console.log("App component received originalTranslations prop:", originalTranslations);

  const [localTranslations, setLocalTranslations] = useState(translations || {});
  console.log("Initial state of localTranslations:", localTranslations);

  useEffect(() => {
    console.log("Type of translations prop:", typeof translations);
    console.log("Translations prop at the start of useEffect:", translations);

    const initializeTranslations = async () => {
      await i18nInitPromise;
      if (translations && Object.keys(translations).length > 0) {
        console.log("Translations prop received:", translations);
        setLocalTranslations(translations);
        initializeI18next(translations, i18n.language);
        console.log("i18next initialized and translations set.");
      } else {
        console.error("Translations prop is null or undefined. Falling back to default translations.");
        const defaultTranslations = {
          seo: {
            title: "Default Title",
            description: "Default Description",
            keywords: "default, keywords",
            ogTitle: "Default OG Title",
            ogDescription: "Default OG Description"
          }
        };
        setLocalTranslations(defaultTranslations);
        initializeI18next(defaultTranslations, 'en'); // Fallback to default translations
        console.log("Fallback translations initialized.");
      }

      // Additional logging to check the state of localTranslations
      console.log("State of localTranslations after useEffect:", localTranslations);
    };

    initializeTranslations();
  }, [translations]);

  if (!i18n.isInitialized || Object.keys(localTranslations || {}).length === 0) {
    console.log("Rendering Loading component due to missing translations or uninitialized i18n");
    return <Loading />;
  }

  // Log the translations received by the App component before rendering
  console.log("Translations in App component before rendering:", localTranslations);

  return (
    <>
      <NextSeo
        title={localTranslations.seo ? localTranslations.seo.title : "Default Title"}
        description={localTranslations.seo ? localTranslations.seo.description : "Default Description"}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={localTranslations.seo ? localTranslations.seo.keywords : "default, keywords"}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: localTranslations.seo ? localTranslations.seo.ogTitle : "Default OG Title",
          description: localTranslations.seo ? localTranslations.seo.ogDescription : "Default OG Description",
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

  // Import fs and path modules only in server-side code
  const fs = require('fs');
  const path = require('path');

  // Determine the current language from the request
  const currentLanguage = appContext.req.language || 'en';
  console.log("Determined current language:", currentLanguage);

  console.log("Fetching translations for language:", currentLanguage);
  const translationsFilePath = path.resolve(process.cwd(), 'public/locales', currentLanguage, 'common.json');
  console.log("Translations file path:", translationsFilePath);

  let translations = {
    seo: {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      ogTitle: "Default OG Title",
      ogDescription: "Default OG Description"
    }
  };
  try {
    console.log("Reading translations file...");
    const fileTranslations = JSON.parse(fs.readFileSync(translationsFilePath, 'utf-8'));
    translations = { ...translations, ...fileTranslations };
    console.log("Fetched translations:", translations);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error("Translations file not found, using default translations:", error);
    } else {
      console.error("Error reading translations file, using default translations:", error);
    }
  }

  // Log the state of the i18n instance
  console.log("i18n instance state before returning translations:", i18n);

  // Log the translations object before returning
  console.log("Translations object before returning from getServerSideProps:", translations);

  // Ensure translations object is serializable
  try {
    // Ensure all values in the translations object are serializable
    const serializableTranslations = JSON.parse(JSON.stringify(translations));
    console.log("Translations object is serializable:", serializableTranslations);
    translations = serializableTranslations;
  } catch (error) {
    console.error("Translations object is not serializable:", error);
    // Fallback to default translations if serialization fails
    translations = {
      seo: {
        title: "Default Title",
        description: "Default Description",
        keywords: "default, keywords",
        ogTitle: "Default OG Title",
        ogDescription: "Default OG Description"
      }
    };
  }

  // Additional logging to track the state of translations object
  console.log("Type of translations object before returning:", typeof translations);
  console.log("Keys of translations object before returning:", Object.keys(translations));
  console.log("Translations object before returning from getServerSideProps:", translations);

  console.log("Returning props from getServerSideProps:", {
    translations,
    originalTranslations: translations,
  });

  const propsToReturn = {
    translations, // Pass translations directly
    originalTranslations: translations, // Add original translations for comparison
  };

  // Additional logging to confirm props before returning
  console.log("Props to return from getServerSideProps:", JSON.stringify(propsToReturn, null, 2));
  console.log("Serialized translations object before returning:", JSON.stringify(translations, null, 2));

  // Log the structure and content of the props object
  console.log("Structure of props object before returning:", {
    props: propsToReturn,
  });

  return {
    props: propsToReturn,
  };
}

export default App;
