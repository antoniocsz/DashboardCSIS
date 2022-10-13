import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Painel do CSIS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
