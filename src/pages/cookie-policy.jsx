import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import Seo from "@components/Seo";
import seoData from "@data/seo.json";

const CookiePolicy = () => {
  const seo = seoData.cookie-policy;
  return (
    <Layouts>
      <Seo title={seo.title} description={seo.description} keywords={seo.keywords} noindex={seo.noindex} />
      <PageBanner pageImage={"/img/content/servicios-web-consultoria-fuerteventura.webp"} pageTitle={"Cookie Policy"} />

      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <style>
          {`
            a.cky-banner-element {
              padding: 8px 30px;
              background: #F8F9FA;
              color: #858A8F;
              border: 1px solid #DEE2E6;
              box-sizing: border-box;
              border-radius: 2px;
              cursor: pointer;
              display: inline-block;
              margin-bottom: 20px;
            }
            .cookie-policy-h1 {
              font-size: 36px;
              margin-bottom: 20px;
            }
            .cookie-policy-p {
              margin-bottom: 16px;
            }
            .cookie-policy-container h5 {
              margin-top: 30px;
              margin-bottom: 15px;
            }
          `}
        </style>

        <div className="cookie-policy-container">
          <h1 className="cookie-policy-h1">Política de Cookies</h1>
            <p>Fecha de entrada en vigor: 25-mayo-2025 <br /> Última actualización: 25-mayo-2025</p>

            <h5>¿Qué son las cookies?</h5>
            <div className="cookie-policy-p">
              <p>Esta Política de Cookies explica qué son las cookies y cómo las utilizamos, los tipos de cookies que usamos, es decir, la información que recopilamos mediante cookies y cómo se utiliza esa información, y cómo gestionar la configuración de cookies.</p>
              <p>Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeñas cantidades de información. Se almacenan en tu dispositivo cuando el sitio web se carga en tu navegador. Estas cookies nos ayudan a que el sitio funcione correctamente, sea más seguro, brinde una mejor experiencia de usuario y nos permita entender cómo funciona el sitio web y analizar qué funciona y qué necesita mejorar.</p>
            </div>

            <h5>¿Cómo usamos las cookies?</h5>
            <div className="cookie-policy-p">
              <p>Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies propias y de terceros para varios fines. Las cookies propias son principalmente necesarias para que el sitio web funcione correctamente y no recopilan ninguno de tus datos personales identificables.</p>
              <p>Las cookies de terceros utilizadas en nuestro sitio web son principalmente para comprender cómo funciona el sitio, cómo interactúas con él, mantener nuestros servicios seguros, ofrecer anuncios relevantes para ti y, en general, brindarte una mejor experiencia de usuario y ayudarte a acelerar tus futuras interacciones con nuestro sitio.</p>
            </div>

            <h5>Tipos de cookies que utilizamos</h5>
            <div className="cky-audit-table-element"></div>

            <h5>Gestionar preferencias de cookies</h5>
            <a className="cky-banner-element">Configuración de Cookies</a>
            <div className="cookie-policy-p">
              <p>Puedes cambiar tus preferencias de cookies en cualquier momento haciendo clic en el botón anterior. Esto te permitirá volver a ver el banner de consentimiento de cookies y modificar tus preferencias o retirar tu consentimiento de inmediato.</p>
              <p>Además, diferentes navegadores ofrecen diferentes métodos para bloquear y eliminar las cookies utilizadas por los sitios web. Puedes cambiar la configuración de tu navegador para bloquear/eliminar las cookies. A continuación, se enumeran los enlaces a los documentos de soporte sobre cómo gestionar y eliminar cookies en los principales navegadores web.</p>
              <p>Chrome: <a target="_blank" href="https://support.google.com/accounts/answer/32050">support.google.com/accounts/answer/32050</a></p>
              <p>Safari: <a target="_blank" href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">support.apple.com/en-in/guide/safari</a></p>
              <p>Firefox: <a target="_blank" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">support.mozilla.org/kb/clear-cookies-and-site-data-firefox</a></p>
              <p>Internet Explorer: <a target="_blank" href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">support.microsoft.com/how-to-delete-cookie-files</a></p>
              <p>Si utilizas otro navegador web, visita los documentos oficiales de soporte de tu navegador.</p>
            </div>
        </div>
      </div>
    </Layouts>
  );
};

export default CookiePolicy;
