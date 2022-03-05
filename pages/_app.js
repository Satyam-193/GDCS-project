import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navigation />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
