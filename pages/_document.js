import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <>
            <NextSeo
        title="Zigarettenautomatkarte - Finden Sie Ihren Zigarettenautomat in Deutschland"
        description="Wir helfen Rauchern in Deutschland, den nächsten Zigarettenautomat einfach zu finden. Unsere umfassende Karte ist stets aktuell und benutzerfreundlich."
        canonical="https://www.zigarettenautomatkarte.de/"
        aggregateRating={{
          ratingValue: '5',
          ratingCount: '185',
        }}
        datePublished="2023-07-22"
        keywords="zigarettenautomat, zigarettenautomaten, zigarettenautomat finden, zigarettenautomaten finden, zigarettenautomat suche, zigarettenautomat karte, zigarettenautomat karte deutschland, zigarettenautomaten karte, zigarettenautomaten karte de"
        openGraph={{
          url: 'https://www.zigarettenautomatkarte.de/',
          title: 'Zigarettenautomatkarte - Finden Sie Ihren Zigarettenautomat in Deutschland',
          description: 'Wir helfen Rauchern in Deutschland, den nächsten Zigarettenautomat einfach zu finden. Unsere umfassende Karte ist stets aktuell und benutzerfreundlich.',
          images: [
            {
              url: 'https://www.zigarettenautomatkarte.de/screenshot.png',
              width: 1200,
              height: 630,
              alt: 'Zigarettenautomatkarte.de - OG Image',
            },
          ],
          locale: 'de_DE',
          site_name: 'Zigarettenautomatkarte',
        }}
      />


      <Html className="scroll-smooth">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.Default.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      </>
    );
  }
}

export default MyDocument;
