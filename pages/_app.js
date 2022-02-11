import AppProvider from "../context/appStore";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/globalStyles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Yelp Search</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
