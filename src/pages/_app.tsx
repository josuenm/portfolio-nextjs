import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ContactProvider } from "src/contexts/contact";
import GlobalStyle from "src/styles/GlobalStyle";
import { theme } from "src/styles/theme";
import { disableReactDevTools } from "src/utils/devTools";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") disableReactDevTools();
  }, []);

  return (
    <ContactProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContactProvider>
  );
}

export default MyApp;
