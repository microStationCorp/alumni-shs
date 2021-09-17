import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "utils/theme";
import createEmotionCache from "utils/createEmotionCache";
import { Copyright } from "components/copyright";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
          <Component {...pageProps} />
          <Copyright/>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
