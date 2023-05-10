import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {Component?.name === "Home" ? (
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      ) : (
        <>
          <SessionProvider session={pageProps.session}>
            <Layout>
              <Component {...pageProps} />
              {""}
            </Layout>
          </SessionProvider>
        </>
      )}
    </>
  );
}
