import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

const Accesibilidad = () => {
  return (
    <Layouts>
      <PageBanner pageImage={"img/content/5.jpg"} pageTitle={"Declaración de Accesibilidad"} />

      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <style>
          {`
            .accessibility-h1 {
              font-size: 36px;
              margin-bottom: 20px;
            }
            .accessibility-p {
              margin-bottom: 16px;
              line-height: 1.7;
            }
            .accessibility-h2 {
              font-size: 20px;
              margin-top: 30px;
              margin-bottom: 15px;
            }
          `}
        </style>

        <h1 className="accessibility-h1">Declaración de Accesibilidad</h1>

        <p className="accessibility-p">
          En Studio Jable nos comprometemos a garantizar la accesibilidad digital para todas las personas, independientemente de sus capacidades. Trabajamos constantemente para mejorar la experiencia del usuario en nuestro sitio web siguiendo las pautas WCAG 2.1 nivel AA.
        </p>

        <h2 className="accessibility-h2">Estado de conformidad</h2>
        <p className="accessibility-p">
          Este sitio web es <strong>parcialmente conforme</strong> con las directrices WCAG 2.1. Según un análisis automatizado realizado con Lighthouse (versión 12.5.1) el 25 de mayo de 2025, la puntuación de accesibilidad fue del 94%.
        </p>

        <h2 className="accessibility-h2">Contenido no accesible</h2>
        <p className="accessibility-p">
          Algunos elementos del sitio presentan áreas de mejora:
        </p>
        <ul>
          <li className="accessibility-p">Insuficiente contraste entre texto y fondo en ciertas secciones.</li>
          <li className="accessibility-p">Orden jerárquico incorrecto en algunos encabezados (heading levels).</li>
        </ul>
        <p className="accessibility-p">
          Estamos trabajando activamente para corregir estos problemas en futuras actualizaciones.
        </p>

        <h2 className="accessibility-h2">Método de evaluación</h2>
        <p className="accessibility-p">
          Esta evaluación se ha realizado mediante herramientas automáticas (Google Lighthouse 12.5.1), con emulación móvil y conexión 4G lenta, en fecha 25 de mayo de 2025. Aconsejamos además pruebas manuales complementarias para una evaluación más completa.
        </p>

        <h2 className="accessibility-h2">Contacto</h2>
        <p className="accessibility-p">
          Si encuentras alguna barrera de accesibilidad o deseas realizar sugerencias, por favor contáctanos:
          <br />
          <strong>Studio Jable – Augusta Bande</strong><br />
          Email: <a href="mailto:augusta.bande@gmail.com">augusta.bande@gmail.com</a><br />
          Teléfono: +34 643 535 881
        </p>

        <p className="accessibility-p">
          Nuestro compromiso es responder dentro de un plazo razonable y ofrecer soluciones siempre que sea posible.
        </p>
      </div>
    </Layouts>
  );
};

export default Accesibilidad;

