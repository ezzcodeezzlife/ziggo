import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from 'next-seo';

class MyDocument extends Document {
  render() {
    return (
      <>
      <title>Zigarettenautomat in der Nähe finden</title>

      <meta name="title" content="Zigarettenautomat in der Nähe finden" />
      <meta name="description" content="Finden Sie den nächsten Zigarettenautomaten in Ihrer Nähe mit unserer praktischen Karte. Einfach und schnell den nächsten Automaten finden." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Zigarettenautomat in der Nähe finden" />
      <meta property="og:description" content="Finden Sie den nächsten Zigarettenautomaten in Ihrer Nähe mit unserer praktischen Karte. Einfach und schnell den nächsten Automaten finden." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ziggokarte.com" />
      <meta property="og:image" content="https://www.ziggokarte.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zigarettenautomat in der Nähe finden" />
      <meta name="twitter:description" content="Finden Sie den nächsten Zigarettenautomaten in Ihrer Nähe mit unserer praktischen Karte. Einfach und schnell den nächsten Automaten finden." />
      <meta name="twitter:image" content="https://www.ziggokarte.com/twitter-image.jpg" />

      <Html className="scroll-smooth" lang="de">
        <Head>
          {/*
            <script src="https://alwingulla.com/88/tag.min.js" data-zone="71812" async data-cfasync="false"></script>
          */}
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
            href="https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Ziggokarte",
                "url": "https://www.ziggokarte.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.ziggokarte.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            `}
          </script>
        </Head>
        <body>
          {/*
            <script src="https://alwingulla.com/88/tag.min.js" data-zone="71812" async data-cfasync="false"></script>
          */}
          <Main />
          <NextScript />
        </body>
      </Html>
      </>
    );
  }
}

export default MyDocument;
