import "@src/assets/css/app.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { disableReactDevTools } from "src/utils/devTools";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") disableReactDevTools();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
