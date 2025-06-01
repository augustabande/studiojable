import React from "react";
import Head from "next/head";

import '../styles/scss/style.scss';
import "../styles/globals.css";
import Script from "next/script";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
         {/* seo begin */}
        <title>Diseño web profesional | Soluciones digitales para empresas y autónomos</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Diseño web profesional para empresas y autónomos. En Studio Jable creamos páginas web personalizadas, con estrategia digital y diseño de alto impacto para destacar en internet." />
        <meta name="author" content="Studio Jable - Augusta Bande" />
        <meta name="keywords" content="diseño web profesional, diseñador web profesional, diseño web empresas, diseño de páginas web, estrategia de marketing digital, diseño personalizado, página web profesional, soluciones digitales, agencia web" />

        {/* seo end */}   
          	
	      <script id="cookieyes" strategy="lazyOnload" type="text/javascript" src="https://cdn-cookieyes.com/client_data/e1734ea95b2432fcaa34569d/script.js"></script>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PP3JZXXM');`
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
