import React from "react";
import Head from "next/head";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>studiojable</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}   
          <script src="https://cmp.osano.com/nHJxswmzcW/f8c8ca9b-f660-486d-9e21-b5eb04f8b0ec/osano.js"></script>     
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
