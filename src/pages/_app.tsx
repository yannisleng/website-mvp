import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "~/components/layout";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Layout>
          <Head>
            <title>Website MVP</title>
            <meta name="description" content="Just a MVP for CYC website" />
            <link rel="icon" href="/images/cyc_logo.png" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
