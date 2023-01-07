import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Jonathan Watson is a font-end web developer with a focus on React, Next.js, and Node.js."
        />
        <meta property="og:title" content="Jonathan Watson" />
        <meta
          property="og:description"
          content="Jonathan Watson is a font-end web developer with a focus on React, Next.js, and Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
