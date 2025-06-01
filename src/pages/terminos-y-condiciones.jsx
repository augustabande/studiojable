import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

const TerminosYCondiciones = () => {
  return (
    <Layouts>
      <PageBanner pageImage={"/img/content/servicios-web-consultoria-fuerteventura.webp"} pageTitle={"Términos y Condiciones"} />

      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <style>
          {`
            .terms-h1 {
              font-size: 36px;
              margin-bottom: 20px;
            }
            .terms-h1 span {
              display: block;
              font-size: 16px;
              font-weight: normal;
              color: #777;
              margin-top: 5px;
            }
            .terms-p {
              margin-bottom: 16px;
              line-height: 1.7;
            }
            .terms-ol {
              padding-left: 20px;
              margin-bottom: 30px;
            }
            .terms-h2 {
              font-size: 20px;
              margin-top: 30px;
              margin-bottom: 15px;
            }
          `}
        </style>

        <h1 className="terms-h1">
  Términos y Condiciones
  <span>Última actualización: 25 de mayo de 2025</span>
</h1>

<p className="terms-p">
  Bienvenido/a a Studio Jable. Al acceder o utilizar nuestro sitio web
  (https://www.studiojable.com), aceptas estar sujeto/a a los siguientes términos y
  condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices
  este sitio web.
</p>

<ol className="terms-ol">
  <li>
    <h2 className="terms-h2">Uso del sitio</h2>
    <p className="terms-p">
      El contenido de este sitio web es únicamente para fines informativos. Nos reservamos
      el derecho de modificar o eliminar contenidos en cualquier momento sin previo aviso.
    </p>
  </li>

  <li>
    <h2 className="terms-h2">Propiedad intelectual</h2>
    <p className="terms-p">
      Todos los contenidos (textos, imágenes, logotipos, gráficos, etc.) son propiedad de
      Studio Jable o se utilizan con los permisos correspondientes. Queda prohibida su
      reproducción total o parcial sin autorización previa y por escrito.
    </p>
  </li>

  <li>
    <h2 className="terms-h2">Enlaces a terceros</h2>
    <p className="terms-p">
      Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables
      del contenido ni de las políticas de privacidad de dichos sitios.
    </p>
  </li>

  <li>
    <h2 className="terms-h2">Limitación de responsabilidad</h2>
    <p className="terms-p">
      No garantizamos que el sitio web esté libre de errores o disponible en todo momento.
      No nos responsabilizamos por daños derivados del uso o la imposibilidad de uso del
      sitio web.
    </p>
  </li>

  <li>
    <h2 className="terms-h2">Modificaciones</h2>
    <p className="terms-p">
      Nos reservamos el derecho de modificar estos términos y condiciones en cualquier
      momento. Las modificaciones entrarán en vigor desde su publicación en esta página.
    </p>
  </li>

  <li>
    <h2 className="terms-h2">Legislación aplicable</h2>
    <p className="terms-p">
      Estos términos se regirán e interpretarán de acuerdo con la legislación española.
      Cualquier disputa será sometida a los tribunales competentes del domicilio del titular.
    </p>
  </li>

  <li>
    <h2 className="terms-h2">Datos de contacto</h2>
    <p className="terms-p">
      Para cualquier consulta relacionada con estos términos, puedes contactarnos en:
      <br />
      <strong>Studio Jable – Augusta Bande</strong> <br />
      Calle Roseta de Emeterio, 3 <br />
      Las Palmas, 35650, España <br />
      CIF/NIF: Y9036584J <br />
      Email: augusta.bande@gmail.com <br />
      Teléfono: +34 643 535 881
    </p>
  </li>
</ol>

<p className="terms-p">
  Página generada con fines informativos. Te recomendamos revisar estos términos
  periódicamente.
</p>

      </div>
    </Layouts>
  );
};

export default TerminosYCondiciones;
