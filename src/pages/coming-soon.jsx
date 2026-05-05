import Head from "next/head";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Studio Jable | Coming Soon</title>
        <meta name="description" content="Estamos trabajando en algo nuevo. Muy pronto estaremos online." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#263238",
        color: "#fff",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem"
      }}>
        <img src="/img/mil-logo.svg" alt="Studio Jable" style={{ width: "180px", marginBottom: "2rem" }} />
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Coming Soon</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.7, maxWidth: "500px" }}>
          Estamos trabajando en algo nuevo. Muy pronto estaremos online.
        </p>
      </div>
    </>
  );
}
