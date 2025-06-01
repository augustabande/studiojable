import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";

const Contact = () => {

  const Content = {
    "subtitle": "Contacto",
    "title": "Ponte en contacto",
    "info": [
      {
        "icon": "/img/icons/4.svg",
        "label": "Correo de soporte",
        "value": "hello@studiojable.com"
      },
      {
        "icon": "/img/icons/7.svg",
        "label": "Llama",
        "value": "+34 (6) 43 53 5881"
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/servicios-web-consultoria-fuerteventura.webp"} pageTitle={"Contact"} />

      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between mil-mb-90">
              <div className="col-xl-5">

                  <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{Content.subtitle}</h3>
                  <h1 className="mil-mb-60 mil-appearance">{Content.title}</h1>

              </div>
              <div className="col-xl-6">

                  <div className="row mil-mt-55-adapt">

                      {Content.info.map((item, key) => (
                      <div className="col-lg-6" key={`contact-item-${key}`}>
                          <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                              <div className="mil-icon mil-accent">
                                  <img src={item.icon} alt={item.label} />
                              </div>
                              <div className="mil-icon-box-text">
                                  <h6>{item.value}</h6>
                                  <p>{item.label}</p>
                              </div>
                          </div>
                      </div>
                      ))}

                  </div>

              </div>
          </div>
          <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "¡Gracias por tu mensaje!";
                        form.reset()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "¡Ups! Hubo un problema al enviar tu formulario."
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "¡Ups! Hubo un problema al enviar tu formulario."
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL}>
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <input 
                            className="mil-link" 
                            type="text"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <label className="mil-link">Nombre</label>
                          <span></span>
                          <em>{errors.name && touched.name && errors.name}</em>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <input 
                            className="mil-link" 
                            type="email" 
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <label className="mil-link">Email*</label>
                          <span></span>
                          <em>{errors.email && touched.email && errors.email}</em>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <textarea 
                            name="message"
                            className="mil-link" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                          <label className="mil-link">Mensaje</label>
                          <span></span>
                          <em>{errors.message && touched.message && errors.message}</em>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <p className="mil-text-sm mil-mb-30">*Prometemos no divulgar tu información personal a terceros.</p>
                  </div>
                  <div className="col-lg-6">
                      <button type="submit" className="mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30" disabled={isSubmitting}>
                        <span>Enviar mensaje</span>
                      </button>
                  </div>
                  <div className="form-status" id="contactFormStatus" />
              </div>
          </form>
          )}
          </Formik>
      </div>
      {/* contact end */}

      {/* map */}
     
      <div className="mil-map-frame">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2027915859394!2d-13.941364123982089!3d28.683579781759832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47b54c4f51a197%3A0xc7ff1b23ffdf30af!2sAugusta%20Bande!5e0!3m2!1sit!2ses!4v1748112612867!5m2!1sit!2ses" 
          width={600} 
          height={450} 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Mapa de ubicación de Studio Jable"
        />
      </div>
      {/* map end */}
      
    </Layouts>
  );
};
export default Contact;
