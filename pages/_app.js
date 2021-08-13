import {Provider } from "next-auth/client";
import '../styles/globals.css'

//  import "tailwindcss/tailwind.css";
// import Providers from 'next-auth/providers';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session = {(pageProps.session)}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
