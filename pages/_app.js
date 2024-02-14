import "@/styles/globals.css";
import Script from "next/script";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Zigarettenautomat finden - Zigarettenautomatkarte.de"
        description="Wir helfen Rauchern in Deutschland, den nächsten Zigarettenautomat einfach zu finden. Unsere umfassende Karte ist stets aktuell und benutzerfreundlich."
        canonical="https://www.zigarettenautomatkarte.de/"
        aggregateRating={{
          ratingValue: "5",
          ratingCount: "94",
        }}
        datePublished="2024-02-03"
        keywords="zigarettenautomat, zigarettenautomaten, zigarettenautomat finden, zigarettenautomaten finden, zigarettenautomat suche, zigarettenautomat karte, zigarettenautomat karte deutschland, zigarettenautomaten karte, zigarettenautomaten karte de"
        openGraph={{
          url: "https://www.zigarettenautomatkarte.de/",
          title:
            "Zigarettenautomatkarte - Finden Sie Ihren Zigarettenautomat in Deutschland",
          description:
            "Wir helfen Rauchern in Deutschland, den nächsten Zigarettenautomat einfach zu finden. Unsere umfassende Karte ist stets aktuell und benutzerfreundlich.",
          images: [
            {
              url: "https://www.zigarettenautomatkarte.de/screenshot.png",
              width: 1200,
              height: 630,
              alt: "Zigarettenautomatkarte.de - OG Image",
            },
          ],
          locale: "de_DE",
          site_name: "Zigarettenautomatkarte",
        }}
      />
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
