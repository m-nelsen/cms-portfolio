import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "bulma/css/bulma.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
