import type { AppProps } from "next/app";
import Head from "next/head";

import { SettingsProvider } from "@/hooks/use-settings";
import { StatsProvider } from "@/hooks/use-stats";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>anzan</title>
      </Head>

      <SettingsProvider>
        <StatsProvider>
          <Component {...pageProps} />
        </StatsProvider>
      </SettingsProvider>
    </>
  );
}
