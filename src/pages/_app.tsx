import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "next-auth/client";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import React from "react";
import { ChallengeProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Provider session={pageProps.session}>
        <AuthContextProvider>
          <ChallengeProvider>
            <Component {...pageProps} />
          </ChallengeProvider>
        </AuthContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
