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
          	
	      <Script id="cookieyes" strategy="lazyOnload" type="text/javascript" src="https://cdn-cookieyes.com/client_data/e1734ea95b2432fcaa34569d/script.js"></Script>
      </Head>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-42BJ9ER9DD');
          `
        }}
      />   
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
