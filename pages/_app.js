import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";
import i18n, { i18nInitPromise } from '../i18n'; // Import the initialized i18next instance and initialization functions
import Loading from '../components/Loading'; // Import the Loading component
import { initReactI18next } from 'react-i18next'; // Reintroduce initReactI18next import

// Ensure initReactI18next is used with i18next instance
i18n.use(initReactI18next);

function App({ Component, pageProps, translations, originalTranslations, currentLanguage }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    i18nInitPromise.then(() => {
      if (translations && Object.keys(translations).length > 0) {
        i18n.changeLanguage(currentLanguage);
        i18n.addResources(currentLanguage, 'common', translations);
      }
      setIsInitialized(true);
    });
  }, [translations, currentLanguage]);

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

  return (
    <>
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
    </>
  );
}

export async function getServerSideProps(appContext) {
  const fs = require('fs');
  const path = require('path');
  const currentLanguage = appContext.req.language || 'en';

  // Ensure i18next is initialized before reading translations
  await i18nInitPromise;

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

  // Ensure translations always contains at least the default values
  try {
    console.log("Attempting to read translations file...");
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
      console.log("Attempting to serialize translations object...");
      JSON.stringify(translations);
      console.log("Translations object is serializable:", translations);
    } catch (error) {
      console.error("Translations object is not serializable:", error);
      translations = { // Fallback to default translations if serialization fails
        seo: {
          title: "Default Title",
          description: "Default Description",
          keywords: "default, keywords",
          ogTitle: "Default OG Title",
          ogDescription: "Default OG Description"
        }
      };
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error("Error reading translations file:", error);
    }
    // Ensure translations always contains at least the default values in case of error
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

  console.log("Translations object before serialization check:", translations);

  // Log the type of each key-value pair within the translations object
  Object.keys(translations).forEach(key => {
    console.log(`Type of translations[${key}]:`, typeof translations[key]);
  });

  // Ensure translations object contains expected keys
  const requiredKeys = ['seo'];
  const hasRequiredKeys = requiredKeys.every(key => key in translations);

  if (!hasRequiredKeys) {
    console.error("Translations object is missing required keys. Falling back to default translations.");
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

  // Initialize i18next with the translations
  try {
    await i18n.changeLanguage(currentLanguage);
    console.log("i18next language changed to:", currentLanguage);
    await i18n.addResources(currentLanguage, 'common', translations);
    console.log("i18next resources added for language:", currentLanguage, "with translations:", translations);
  } catch (error) {
    console.error("Error during i18next initialization:", error);
  }

  console.log("Translations object right before returning from getServerSideProps:", translations);
  console.log("Props object to be returned from getServerSideProps:", { translations, originalTranslations: translations, currentLanguage });

  return {
    props: {
      translations,
      originalTranslations: translations,
      currentLanguage,
    },
  };
}

export default App;
