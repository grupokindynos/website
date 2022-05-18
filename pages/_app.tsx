import { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title key="title">
          Bitmon World | Play, Breed, Trade and Fight with decentralized
          monsters
        </title>

        <meta
          key="description"
          name="description"
          content="Play, Breed, Trade and Fight with decentralized monsters"
        />

        <meta
          name="application-name"
          content="Bitmon World | Play, Breed, Trade and Fight with decentralized monsters"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Bitmon World | Play, Breed, Trade and Fight with decentralized monsters"
        />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3E4A94" />

        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Bitmon World | Play, Breed, Trade and Fight with decentralized monsters"
        />
        <meta
          key="twitter:url"
          name="twitter:url"
          content="https://bitmon.io"
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content="Play, Breed, Trade and Fight with decentralized monsters"
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://bitmon.io/ms-icon-310x310.png"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@BitmonWorld"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="Bitmon World | Play, Breed, Trade and Fight with decentralized monsters"
        />
        <meta key="og:url" property="og:url" content="https://bitmon.io" />
        <meta
          key="og:image"
          property="og:image"
          content="https://bitmon.io/ms-icon-310x310.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Play, Breed, Trade and Fight with decentralized monsters"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
