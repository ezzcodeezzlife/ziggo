import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='scroll-smooth'>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.Default.css" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument