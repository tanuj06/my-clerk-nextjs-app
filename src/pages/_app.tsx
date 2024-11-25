import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ClerkProvider>
    <Component {...pageProps} />
  </ClerkProvider>
);

export default MyApp;
