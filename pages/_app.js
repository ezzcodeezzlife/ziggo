import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import i18n, { i18nInitPromise } from '../i18n'; // Import the initialized i18next instance and the i18nInitPromise
import Loading from '../components/Loading'; // Import the Loading component

// Function to initialize i18next with server-side translations
const initializeI18next = (translations, language) => {
  console.log("Initializing i18next with translations:", translations, "and language:", language);
  if (translations) {
    i18n.changeLanguage(language); // Set the language before adding resources
    i18n.addResources(language, 'common', translations[language].common);
  }
};

function App({ Component, pageProps, translations }) {
  console.log("App component received translations prop:", translations);
  console.log("Structure of translations prop in App component:", JSON.stringify(translations, null, 2));
  useEffect(() => {
    console.log("Initial translations in useEffect:", translations);
    // Wait for i18next initialization before setting translations
    if (translations) {
      if (!i18n.isInitialized) {
        i18nInitPromise.then(() => {
          console.log("Translations after i18nInitPromise resolves:", translations);
          initializeI18next(translations, i18n.language);
        });
      } else {
        initializeI18next(translations, i18n.language);
      }
    } else {
      console.error("Translations are null in useEffect");
    }
    console.log("Translations in App component:", translations);
  }, [translations]);

  // Ensure i18n is initialized and translations are available before rendering
  if (!i18n.isInitialized || !translations) {
    return <Loading />;
  }

  // Log the translations received by the App component
  console.log("Translations in App component:", translations);

  return (
    <>
      <NextSeo
        title={translations ? translations[i18n.language].common.seo.title : "Default Title"}
        description={translations ? translations[i18n.language].common.seo.description : "Default Description"}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={translations ? translations[i18n.language].common.seo.keywords : "default, keywords"}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: translations ? translations[i18n.language].common.seo.ogTitle : "Default OG Title",
          description: translations ? translations[i18n.language].common.seo.ogDescription : "Default OG Description",
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
  await i18nInitPromise; // Wait for i18next initialization

  // Import fs and path modules only in server-side code
  const fs = await import('fs');
  const path = await import('path');

  // Determine the current language from the request
  const currentLanguage = appContext.req.language || 'en';

  try {
    // Fetch only the translations for the current language and the required namespace(s)
    const translations = {
      [currentLanguage]: {
        common: JSON.parse(fs.readFileSync(path.resolve('./public/locales', currentLanguage, 'common.json'), 'utf-8')),
      },
    };

    try {
      // Log the translations fetched by getServerSideProps
      console.log("Translations in getServerSideProps before return:", translations);
      // Check the structure of the translations object
      console.log("Structure of translations in getServerSideProps:", JSON.stringify(translations, null, 2));

      // Check for serialization issues
      JSON.stringify(translations);
    } catch (serializationError) {
      console.error("Serialization error in getServerSideProps:", serializationError);
      return {
        props: {
          translations: null,
        },
      };
    }

    console.log("Returning translations from getServerSideProps:", translations);
    if (!translations || Object.keys(translations).length === 0) {
      console.error("Translations are undefined or empty before returning from getServerSideProps");
      return {
        props: {
          translations: null,
        },
      };
    }
    return {
      props: {
        translations,
      },
    };
  } catch (error) {
    console.error("Error fetching translations in getServerSideProps:", error);
    return {
      props: {
        translations: null,
      },
    };
  }
}

export default App;
