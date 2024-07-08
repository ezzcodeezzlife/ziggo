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

function App({ Component, pageProps, translations, originalTranslations, currentLanguage }) {
  console.log("App component received translations prop:", translations);
  console.log("App component received originalTranslations prop:", originalTranslations);

  const [localTranslations, setLocalTranslations] = useState({});
  console.log("Initial state of localTranslations:", localTranslations);

  const initializeTranslations = async () => {
    await i18nInitPromise;
    if (translations && Object.keys(translations).length > 0) {
      console.log("Translations prop received:", translations);
      setLocalTranslations(translations);
      initializeI18next(translations, currentLanguage);
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

  useEffect(() => {
    console.log("Type of translations prop:", typeof translations);
    console.log("Translations prop at the start of useEffect:", translations);

    initializeTranslations();
  }, [translations, currentLanguage]);

  if (!i18n.isInitialized) {
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

import fs from 'fs';
import path from 'path';

export async function getServerSideProps(appContext) {
  const currentLanguage = appContext.req.language || 'en';
  const translationsFilePath = path.resolve(process.cwd(), 'public/locales', currentLanguage, 'common.json');

  console.log("Resolved translations file path:", translationsFilePath);

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
    const fileTranslations = JSON.parse(fs.readFileSync(translationsFilePath, 'utf-8'));
    console.log("Type of fileTranslations:", typeof fileTranslations);
    console.log("File translations read from filesystem:", fileTranslations);
    if (typeof fileTranslations === 'object' && fileTranslations !== null) {
      translations = { ...translations, ...fileTranslations };
    } else {
      console.error("Invalid fileTranslations object. Falling back to default translations.");
    }

    console.log("Final translations object to be passed as prop:", translations);

    // Check if the translations object is serializable
    try {
      JSON.stringify(translations);
    } catch (error) {
      console.error("Translations object is not serializable:", error);
      translations = {}; // Fallback to an empty object if serialization fails
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error("Error reading translations file:", error);
    }
  }

  return {
    props: {
      translations,
      originalTranslations: translations,
      currentLanguage,
    },
  };
}

export default App;
