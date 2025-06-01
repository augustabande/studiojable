import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import Seo from "@components/Seo";
import seoData from "@data/seo.json";

const PrivacyPolicy = () => {
  const seo = seoData.privacypolicy;
  return (
    <Layouts>
      <Seo title={seo.title} description={seo.description} keywords={seo.keywords} noindex={seo.noindex} />
    <PageBanner pageImage={"/img/content/servicios-web-consultoria-fuerteventura.webp"} pageTitle={"Política de Privacidad"} />

  <div className="container mil-content-frame mil-appearance mil-p-120-90">
    <style>
      {`
        .privacy-policy-h1 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        .privacy-policy-h1 span {
          display: block;
          font-size: 16px;
          font-weight: normal;
          color: #777;
          margin-top: 5px;
        }
        .privacy-policy-p {
          margin-bottom: 16px;
          line-height: 1.7;
        }
        .privacy-policy-ol {
          padding-left: 20px;
          margin-bottom: 30px;
        }
        .privacy-policy-h2 {
          font-size: 20px;
          margin-top: 30px;
          margin-bottom: 15px;
        }
      `}
    </style>

    <h1 className="privacy-policy-h1">
      Política de Privacidad
      <span>Última actualización: 25-mayo-2025</span>
      <span>Fecha de entrada en vigor: 25-mayo-2025</span>
    </h1>

    <p className="privacy-policy-p">
      Esta Política de Privacidad describe las políticas de Augusta Bande, Calle Roseta de Emeterio, 3,
      Las Palmas, 35650, España, correo electrónico: augusta.bande@gmail.com, teléfono: 643535881,
      sobre la recopilación, uso y divulgación de tu información cuando utilizas nuestro sitio web
      (https://www.studiojable.com). Al acceder o utilizar el servicio, consientes la recopilación,
      uso y divulgación de tu información de acuerdo con esta Política de Privacidad. Si no estás de
      acuerdo, por favor no accedas ni utilices el servicio.
    </p>

    <p className="privacy-policy-p">
      Podemos modificar esta Política de Privacidad en cualquier momento sin previo aviso y publicaremos
      la versión actualizada en el sitio. La nueva política será efectiva 180 días después de su
      publicación y tu uso continuado del servicio después de ese tiempo constituirá tu aceptación de
      la misma. Te recomendamos revisar esta página periódicamente.
    </p>

    <ol className="privacy-policy-ol">
      <li>
        <h2 className="privacy-policy-h2">Información que recopilamos:</h2>
        <p className="privacy-policy-p">
          Recopilamos y procesamos la siguiente información personal:
        </p>
        <ol className="privacy-policy-ol">
          <li>Nombre</li>
          <li>Correo electrónico</li>
        </ol>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Cómo utilizamos tu información:</h2>
        <p className="privacy-policy-p">Utilizamos tu información para los siguientes fines:</p>
        <ol className="privacy-policy-ol">
          <li>Procesamiento de pagos</li>
          <li>Soporte</li>
          <li>Gestión de pedidos de clientes</li>
        </ol>
        <p className="privacy-policy-p">
          Si queremos utilizar tu información para cualquier otro propósito, te pediremos
          consentimiento y solo la utilizaremos para ese fin específico, a menos que la ley exija lo contrario.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Cómo compartimos tu información:</h2>
        <p className="privacy-policy-p">
          No transferiremos tu información personal a terceros sin tu consentimiento, excepto en los siguientes casos:
        </p>
        <ol className="privacy-policy-ol">
          <li>Recopilación y procesamiento de datos</li>
        </ol>
        <p className="privacy-policy-p">
          Exigimos a estos terceros que utilicen la información personal solo para los fines para los
          que fue proporcionada y que no la retengan más tiempo del necesario.
        </p>
        <p className="privacy-policy-p">
          También podemos divulgar tu información para cumplir con obligaciones legales, responder a
          reclamaciones o en caso de fusión o adquisición del negocio.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Conservación de tu información:</h2>
        <p className="privacy-policy-p">
          Conservaremos tu información personal entre 90 días y 2 años tras la terminación de tu cuenta,
          o durante el tiempo necesario para los fines establecidos. Algunos datos podrán conservarse
          durante más tiempo por razones legales o de prevención del fraude.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Tus derechos:</h2>
        <p className="privacy-policy-p">
          Según la legislación aplicable, puedes tener derecho a acceder, modificar, eliminar o transferir
          tus datos personales, revocar tu consentimiento o presentar una reclamación. Puedes
          contactarnos en augusta.bande@gmail.com.
        </p>
        <p className="privacy-policy-p">
          Ten en cuenta que la revocación del consentimiento puede limitar tu acceso a ciertos servicios.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Cookies, etc.</h2>
        <p className="privacy-policy-p">
          Para más información sobre el uso de cookies y tus opciones, consulta nuestra{" "}
          <a href="/cookie-policy">Política de Cookies</a>.
        </p>
        <p className="privacy-policy-p">
          Este sitio utiliza Google Analytics 4, un servicio de análisis web proporcionado por Google LLC.
          La información recopilada (por ejemplo, páginas visitadas, tiempo de permanencia, tipo de dispositivo)
          se procesa de forma anónima y agregada. Google Analytics se activa únicamente con tu consentimiento.
          Además, se anonimiza la dirección IP antes de ser enviada a los servidores de Google. No utilizamos
          estas cookies para fines publicitarios ni de seguimiento personalizado.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Seguridad:</h2>
        <p className="privacy-policy-p">
          Utilizamos medidas de seguridad razonables para proteger tus datos. Sin embargo, ningún sistema
          es completamente seguro, por lo que no podemos garantizar una protección absoluta.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Enlaces de terceros y uso de tu información:</h2>
        <p className="privacy-policy-p">
          Nuestro sitio puede contener enlaces a sitios de terceros. No somos responsables del contenido ni
          de sus políticas de privacidad. Te recomendamos revisar dichas políticas de forma independiente.
        </p>
      </li>

      <li>
        <h2 className="privacy-policy-h2">Responsable de privacidad / Delegado de protección de datos:</h2>
        <p className="privacy-policy-p">
          Para cualquier consulta o inquietud, puedes contactar con Augusta Bande en Calle Roseta de
          Emeterio, 3 o por correo electrónico: augusta.bande@gmail.com.
        </p>
      </li>
    </ol>
  </div>
</Layouts>

  );
};

export default PrivacyPolicy;
