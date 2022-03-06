import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { SessionProvider } from "next-auth/react";
import { subjectArray } from "../components/context";
import { useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const subject = useState("{}");
  return (
    <>
      <subjectArray.Provider value={subject}>
        <SessionProvider session={session}>
          <Navigation />
          <Component {...pageProps} />
        </SessionProvider>
      </subjectArray.Provider>
    </>
  );
}

export default MyApp;
