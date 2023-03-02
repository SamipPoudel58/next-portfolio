import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=IBM+Plex+Sans:wght@400;600;700&family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
          integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
          crossOrigin="anonymous"
        />

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
