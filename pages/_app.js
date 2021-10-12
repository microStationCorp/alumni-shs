import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "utils/theme";
import createEmotionCache from "utils/createEmotionCache";
import { Copyright } from "components/copyright";
import Router from "next/router";
import Head from "next/head";
import nprogress from "nprogress";

const clientSideEmotionCache = createEmotionCache();

nprogress.configure({ showSpinner: false });

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  Router.events.on("routeChangeStart", (url) => {
    nprogress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    nprogress.done();
  });

  return (
    <>
      <style jsx global>
        {`
          #nprogress .bar {
            background: #ed1ca7 !important;
            height: 3px;
          }
        `}
      </style>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
          <Component {...pageProps} />
          <Copyright />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
