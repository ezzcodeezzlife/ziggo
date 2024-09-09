import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

class MyDocument extends Document {
  render() {
    return (
      <>
        <title>Zigarettenautomat in der Nähe finden</title>

        <meta name="title" content="Zigarettenautomat in der Nähe finden" />

        <Html className="scroll-smooth" lang="de">
          <Head>
            <script
              src="https://alwingulla.com/88/tag.min.js"
              data-zone="71812"
              async
              data-cfasync="false"
            ></script>

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
          </Head>
          <body>
            <script
              src="https://alwingulla.com/88/tag.min.js"
              data-zone="71812"
              async
              data-cfasync="false"
            ></script>

            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
