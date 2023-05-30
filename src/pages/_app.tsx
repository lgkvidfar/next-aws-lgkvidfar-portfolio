import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";

import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import LoadingScreen from "@/comps/loading/LoadingScreen";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lukas Folio</title>
        <meta name="description" content="Lukas' Folio" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <ReactLenis root>
        <LoadingScreen />
        <Component {...pageProps} />
      </ReactLenis>
      <Analytics />
    </>
  );
}
