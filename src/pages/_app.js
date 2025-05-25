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
        <title>Jable Studio | Desarrollo web en Fuerteventura y consultoría digital informática</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Agencia digital en Fuerteventura especializada en desarrollo web, soluciones digitales personalizadas y consultoría informática para empresas y autónomos. Estamos en Lajares." />
        <meta name="keywords" content="desarrollo web Fuerteventura, desarrollo web Lajares, consultoría informática Canarias, soluciones digitales Fuerteventura, agencia web Lajares, diseñador web fuerteventura, páginas web canarias, experto wordpress fuerteventura, servicios digitales pymes" />
        {/* seo end */}   
          	
	      <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/e1734ea95b2432fcaa34569d/script.js"></script>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
