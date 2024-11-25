import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Integrate Clerk authentication with Next.js and TypeScript"
        />
        <meta
          name="keywords"
          content="Clerk, Next.js, TypeScript, Authentication"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
