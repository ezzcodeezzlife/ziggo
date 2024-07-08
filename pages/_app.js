import React, { useEffect, useMemo, useState } from 'react';
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

  const memoizedTranslations = useMemo(() => translations, [translations]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    console.log("Initial translations in useEffect:", memoizedTranslations);
    // Wait for i18next initialization before setting translations
    if (memoizedTranslations) {
      i18nInitPromise.then(() => {
        console.log("Translations after i18nInitPromise resolves:", memoizedTranslations);
        initializeI18next(memoizedTranslations, i18n.language);
        // Trigger a re-render once translations are initialized
        setInitialized(true);
      }).catch((error) => {
        console.error("Error initializing i18next:", error);
      });
    } else {
      console.error("Translations are null or invalid in useEffect");
    }
    console.log("Translations in App component after useEffect:", memoizedTranslations);
  }, [memoizedTranslations, setInitialized]);

  // Ensure i18n is initialized and translations are available before rendering
  if (!i18n.isInitialized || !memoizedTranslations || !initialized) {
    console.log("Rendering Loading component due to missing translations or uninitialized i18n");
    return <Loading />;
  }

  // Log the translations received by the App component
  console.log("Translations in App component:", memoizedTranslations);

  return (
    <>
      <NextSeo
        title={memoizedTranslations ? memoizedTranslations.seo.title : "Default Title"}
        description={memoizedTranslations ? memoizedTranslations.seo.description : "Default Description"}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={memoizedTranslations ? memoizedTranslations.seo.keywords : "default, keywords"}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: memoizedTranslations ? memoizedTranslations.seo.ogTitle : "Default OG Title",
          description: memoizedTranslations ? memoizedTranslations.seo.ogDescription : "Default OG Description",
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

  // Wait for i18next initialization and fetch translations
  const translations = await i18nInitPromise.then(() => {
    // Import fs and path modules only in server-side code
    const fs = require('fs');
    const path = require('path');

    // Determine the current language from the request
    const currentLanguage = appContext.req.language || 'en';

    console.log("Fetching translations for language:", currentLanguage);
    const translations = JSON.parse(fs.readFileSync(path.resolve('./public/locales', currentLanguage, 'common.json'), 'utf-8'));
    console.log("Fetched translations:", translations);

    return translations;
  }).catch((error) => {
    console.error("Error initializing i18next or fetching translations:", error);
    return null;
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

  // Ensure the translations object is serializable
  let serializedTranslations;
  try {
    serializedTranslations = JSON.parse(JSON.stringify(translations));
    console.log("Translations object is serializable:", serializedTranslations);
  } catch (error) {
    console.error("Error serializing translations object:", error);
    return {
      props: {
        translations: null,
      },
    };
  }

  console.log("Translations object before returning from getServerSideProps:", JSON.stringify(serializedTranslations, null, 2));
  console.log("Returning serialized translations from getServerSideProps");
  return {
    props: {
      translations: serializedTranslations, // Pass the serialized translations object
    },
  };
}

export default App;
