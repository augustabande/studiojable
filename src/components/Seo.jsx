// components/Seo.js o .tsx
import Head from 'next/head';

export default function Seo({ title, description, keywords, noindex = false }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {noindex ? (
              <meta name="robots" content="noindex, follow" />
            ) : (
              <meta name="robots" content="index, follow" />
            )}
        </Head>
    </>
    
  );
}