import { AppState } from "../context/appStore";
import "../styles/globals.css";
import "../styles/globalStyles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  );
}

export default MyApp;
