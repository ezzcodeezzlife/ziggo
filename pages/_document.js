import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from 'next-seo';

class MyDocument extends Document {
  render() {
    return (
      <>
      <title>Zigarettenautomaten auf der Karte Finden | zigarettenautomatkarte.de</title>
            
      <meta name="title" content="Zigarettenautomatkarte - Finden Sie Zigarettenautomaten iauf unserer Karte" />
    

      <Html className="scroll-smooth" lang="de">
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
