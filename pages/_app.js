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
    console.log("useEffect triggered with translations:", translations, "and currentLanguage:", currentLanguage);
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
  const currentLanguage = appContext.req.language || 'en';

  // Ensure i18next is initialized before reading translations
  await i18nInitPromise;

  // Hardcoded translations object for testing
  const translations = {
    seo: {
      title: "Hardcoded Title",
      description: "Hardcoded Description",
      keywords: "hardcoded, keywords",
      ogTitle: "Hardcoded OG Title",
      ogDescription: "Hardcoded OG Description"
    }
  };

  console.log("Hardcoded translations object:", translations);

  console.log("Returning props from getServerSideProps:", {
    translations,
    originalTranslations: translations,
    currentLanguage,
  });

  return {
    props: {
      translations,
      originalTranslations: translations,
      currentLanguage,
    },
  };
}

export default App;
