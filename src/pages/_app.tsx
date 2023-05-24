import type { AppProps } from "next/app";
import Head from "next/head";

import { SettingsProvider } from "@/hooks/use-settings";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>anzan</title>
      </Head>

      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </>
  );
}
