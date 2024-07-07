import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import i18n, { i18nInitPromise } from '../i18n'; // Import the initialized i18next instance and the i18nInitPromise

// Function to initialize i18next with server-side translations
const initializeI18next = (translations) => {
  if (translations) {
    i18n.addResources(i18n.language, 'common', translations[i18n.language].common);
  }
};

function App({ Component, pageProps, translations }) {
  const { t } = useTranslation();

  // Ensure i18n is initialized before rendering
  if (!i18n.isInitialized) {
    return null; // or a loading spinner
  }

  return (
    <>
      <NextSeo
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={`https://www.zigarettenautomatkarte.de/${i18n.language}`}
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords={t('seo.keywords')}
        openGraph={{
          url: `https://www.zigarettenautomatkarte.de/${i18n.language}`,
          title: t('seo.ogTitle'),
          description: t('seo.ogDescription'),
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
  await i18nInitPromise; // Wait for i18next initialization

  // Import fs and path modules only in server-side code
  const fs = await import('fs');
  const path = await import('path');

  // Determine the current language from the request
  const currentLanguage = appContext.req.language || 'en';

  // Fetch only the translations for the current language and the required namespace(s)
  const translations = {
    [currentLanguage]: {
      common: JSON.parse(fs.readFileSync(path.resolve('./public/locales', currentLanguage, 'common.json'), 'utf-8')),
    },
  };

  // Initialize i18next with server-side translations before rendering
  initializeI18next(translations);

  return {
    props: {
      translations,
    },
  };
}

export default App;
