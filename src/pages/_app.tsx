import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";

import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import LoadingScreen from "@/comps/loading/LoadingScreen";
import { Suspense, useEffect } from "react";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.remove();
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Lukas Folio</title>
        <meta name="description" content="Lukas' Folio" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <ReactLenis root>
        <LoadingScreen />
        <Suspense fallback={null}>
          <Component {...pageProps} />
        </Suspense>
        <div className="fixed bottom-0 flex h-[2rem] w-full justify-around bg-dark text-light">
          <Link href="/">Home</Link>
          <Link href="/car">Car</Link>
          <Link href="/avatar">Avatar</Link>
        </div>
      </ReactLenis>
      <Analytics />
    </>
  );
}
