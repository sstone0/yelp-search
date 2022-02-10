import AppProvider from "../context/appStore";
import "../styles/globals.css";
import "../styles/globalStyles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
